import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import {
	FaArrowDown,
	FaArrowUp,
	FaBuilding,
	FaCalendarAlt,
	FaChair,
	FaChartPie,
	FaCheckCircle,
	FaChevronDown,
	FaExclamationTriangle,
	FaFileExport,
	FaFileInvoice,
	FaHistory,
	FaLaptop,
	FaMicroscope,
	FaPlus,
	FaSearch
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const StatCard = ({ title, value, change, isPositive, icon: Icon, color, delay }: any) => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5, delay }}
		className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group flex flex-col justify-between h-full"
	>
		<div className="flex justify-between items-start">
			<div className={`p-3.5 rounded-xl ${color} text-white text-2xl group-hover:scale-110 transition-transform shadow-md overflow-hidden`}>
				<Icon />
			</div>
			<div className={`flex items-center gap-1 text-xs font-bold ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
				{isPositive ? <FaArrowUp /> : <FaArrowDown />}
				{change}
			</div>
		</div>
		<div className="mt-4">
			<p className="text-slate-500 text-sm font-medium">{title}</p>
			<h3 className="text-2xl font-bold mt-1 text-slate-900">{value}</h3>
		</div>
	</motion.div>
);

const QuickAction = ({ icon: Icon, label, color, onClick }: any) => (
	<button
		onClick={onClick}
		className="flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 hover:border-indigo-300 hover:shadow-sm transition-all group"
	>
		<div className={`w-12 h-12 rounded-full flex items-center justify-center ${color} text-white text-xl group-hover:scale-110 transition-transform shadow-sm`}>
			<Icon />
		</div>
		<span className="text-xs font-bold text-slate-700 whitespace-nowrap">{label}</span>
	</button>
);

const Dashboard = () => {
	const navigate = useNavigate();
	const [startYear, setStartYear] = useState('2021');
	const [endYear, setEndYear] = useState('2026');
	const [selectedMonth, setSelectedMonth] = useState('All Months');

	// Generate years from 2005 to current/target
	const years = Array.from({ length: 2026 - 2005 + 1 }, (_, i) => (2005 + i).toString()).reverse();
	const months = [
		'All Months', 'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December'
	];

	// Mock Data Generator logic based on selected filters
	const dashboardData = useMemo(() => {
		const monthIndex = months.indexOf(selectedMonth);
		const sYear = parseInt(startYear);
		const eYear = parseInt(endYear);

		// Ensure range is valid for calculation
		const actualStart = Math.min(sYear, eYear);
		const actualEnd = Math.max(sYear, eYear);
		const seed = actualStart + actualEnd + monthIndex * 10;

		// Generate variations based on selection
		const statsVariations = [
			{ title: "Total Documents", value: (1000 + (seed % 500)).toLocaleString(), change: `${(seed % 15 + 5)}%`, isPositive: seed % 2 === 0, icon: FaFileInvoice, color: "bg-blue-600", delay: 0.1 },
			{ title: "Matched Cases", value: (900 + (seed % 450)).toLocaleString(), change: `${(seed % 10 + 2)}%`, isPositive: true, icon: FaCheckCircle, color: "bg-emerald-600", delay: 0.2 },
			{ title: "Total Assets", value: `₹${(3.5 + (seed % 20) / 10).toFixed(1)} Cr`, change: `${(seed % 5 + 1)}%`, isPositive: true, icon: FaChartPie, color: "bg-indigo-600", delay: 0.3 },
			{ title: "Needs Review", value: (50 + (seed % 100)).toString(), change: `${(seed % 8)}%`, isPositive: seed % 3 === 0, icon: FaSearch, color: "bg-rose-600", delay: 0.4 },
		];

		const categoriesVariations = [
			{ name: "IT Assets", value: 35 + (seed % 15), color: "bg-indigo-500", icon: FaLaptop },
			{ name: "Furniture", value: 20 + (seed % 15), color: "bg-blue-500", icon: FaChair },
			{ name: "Laboratory", value: 10 + (seed % 10), color: "bg-emerald-500", icon: FaMicroscope },
			{ name: "Infrastructure", value: 5 + (seed % 10), color: "bg-amber-500", icon: FaBuilding },
		];

		const totalCat = categoriesVariations.reduce((acc, cat) => acc + cat.value, 0);
		categoriesVariations.forEach(cat => cat.value = Math.round((cat.value / totalCat) * 100));

		// Chart Data Logic
		let chartData = [];
		if (actualStart !== actualEnd) {
			// Range View: X-axis = Years from actualStart to actualEnd
			const rangeLength = actualEnd - actualStart + 1;
			// If range is too large, we might want to sample, but for 2005-2026 (21 years) it's okay for a wide chart
			chartData = Array.from({ length: rangeLength }).map((_, i) => {
				const year = actualStart + i;
				const yearSeed = year + monthIndex * 10;
				return {
					label: year.toString(),
					accuracy: 60 + (yearSeed % 30) + (Math.sin(yearSeed) * 5),
				};
			});
		} else if (selectedMonth === 'All Months') {
			// Month-wise trend for a single selected year (Jan-Dec)
			chartData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => ({
				label: month,
				accuracy: 60 + (seed % 20) + (i * 1.5) + (Math.sin(seed + i) * 8),
			}));
		} else {
			// Weekly breakdown for a single month
			chartData = ['Week 1', 'Week 2', 'Week 3', 'Week 4'].map((week, i) => ({
				label: week,
				accuracy: 70 + (seed % 15) + (i * 4) + (Math.cos(seed + i) * 10),
			}));
		}

		return {
			stats: statsVariations,
			categories: categoriesVariations,
			chart: chartData,
			actualStart,
			actualEnd
		};
	}, [startYear, endYear, selectedMonth]);

	const quickActions = [
		{ icon: FaPlus, label: "New Upload", color: "bg-indigo-600", onClick: () => navigate('/frms/report') },
		{ icon: FaSearch, label: "Scan Docs", color: "bg-blue-600" },
		{ icon: FaHistory, label: "Audit Log", color: "bg-slate-600" },
		{ icon: FaFileExport, label: "Generate Report", color: "bg-amber-600" },
	];

	return (
		<div className="p-8 min-h-screen bg-slate-50/50 text-slate-800">
			{/* Header */}
			<div className="flex flex-wrap justify-between items-start gap-6 mb-10">
				<div>
					<h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
						FRMS Dashboard
					</h1>
					<p className="text-slate-500 mt-2">
						Welcome back! Monitoring your assets {dashboardData.actualStart === dashboardData.actualEnd
							? `for ${dashboardData.actualStart}`
							: `from ${dashboardData.actualStart} to ${dashboardData.actualEnd}`}.
					</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
					{quickActions.map((action, i) => (
						<QuickAction key={i} {...action} />
					))}
				</div>
			</div>

			{/* Main Stats Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
				<AnimatePresence mode="wait">
					{dashboardData.stats.map((stat, index) => (
						<StatCard key={`${stat.title}-${startYear}-${endYear}-${selectedMonth}`} {...stat} />
					))}
				</AnimatePresence>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Left Column - Health & Recent Activity */}
				<div className="lg:col-span-2 space-y-8">
					{/* Reconciliation Health Chart */}
					<div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
						<div className="flex flex-wrap justify-between items-start gap-4 mb-8">
							<div>
								<h2 className="text-xl font-bold text-slate-900">Reconciliation Health</h2>
								<p className="text-sm text-slate-500">
									{dashboardData.actualStart !== dashboardData.actualEnd
										? `Yearly Comparison ${dashboardData.actualStart} - ${dashboardData.actualEnd}`
										: `Matching accuracy for ${selectedMonth === 'All Months' ? `Year ${startYear}` : `${selectedMonth} ${startYear}`}`
									}
								</p>
							</div>

							<div className="flex flex-wrap items-center gap-3">
								<div className="flex gap-2 items-center">
									<span className="text-[10px] font-bold text-slate-400 uppercase">From</span>
									<div className="relative group">
										<div className="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg shadow-sm hover:border-indigo-400 transition-all cursor-pointer">
											<select
												value={startYear}
												onChange={(e) => setStartYear(e.target.value)}
												className="bg-transparent text-[11px] font-bold text-slate-700 outline-none cursor-pointer appearance-none pr-4"
											>
												{years.map(y => <option key={`start-${y}`} value={y}>{y}</option>)}
											</select>
											<FaChevronDown className="absolute right-2 text-[8px] text-slate-400 pointer-events-none" />
										</div>
									</div>

									<span className="text-[10px] font-bold text-slate-400 uppercase">To</span>
									<div className="relative group">
										<div className="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg shadow-sm hover:border-indigo-400 transition-all cursor-pointer">
											<select
												value={endYear}
												onChange={(e) => setEndYear(e.target.value)}
												className="bg-transparent text-[11px] font-bold text-slate-700 outline-none cursor-pointer appearance-none pr-4"
											>
												{years.map(y => <option key={`end-${y}`} value={y}>{y}</option>)}
											</select>
											<FaChevronDown className="absolute right-2 text-[8px] text-slate-400 pointer-events-none" />
										</div>
									</div>
								</div>

								{dashboardData.actualStart === dashboardData.actualEnd && (
									<div className="relative group">
										<div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg shadow-sm hover:border-indigo-400 transition-all cursor-pointer">
											<FaCalendarAlt className="text-indigo-500 text-xs" />
											<select
												value={selectedMonth}
												onChange={(e) => setSelectedMonth(e.target.value)}
												className="bg-transparent text-xs font-bold text-slate-700 outline-none cursor-pointer appearance-none pr-4"
											>
												{months.map(m => <option key={m} value={m}>{m}</option>)}
											</select>
											<FaChevronDown className="absolute right-1 text-[8px] text-slate-400 pointer-events-none group-hover:text-indigo-500 transition-colors" />
										</div>
									</div>
								)}

								<div className="h-6 w-px bg-slate-200 mx-1 hidden sm:block"></div>

								<div className="flex gap-3">
									<div className="flex items-center gap-1.5">
										<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
										<span className="text-[9px] font-bold text-slate-600 uppercase tracking-tighter">Accuracy</span>
									</div>
									<div className="flex items-center gap-1.5">
										<span className="w-2 h-2 rounded-full bg-slate-200"></span>
										<span className="text-[9px] font-bold text-slate-600 uppercase tracking-tighter">Target</span>
									</div>
								</div>
							</div>
						</div>

						<div className="relative h-56 flex items-end justify-between gap-1 px-1 mt-4">
							<AnimatePresence mode="popLayout">
								{dashboardData.chart.map((data, i) => (
									<div key={`${data.label}-${startYear}-${endYear}-${selectedMonth}`} className="relative flex-1 group h-full flex flex-col justify-end">
										<div className="relative w-full flex flex-col justify-end h-full">
											<motion.div
												initial={{ height: 0 }}
												animate={{ height: `${data.accuracy}%` }}
												transition={{ duration: 1, delay: i * (dashboardData.chart.length > 12 ? 0.02 : 0.05) }}
												className="bg-indigo-500/20 group-hover:bg-indigo-500/30 rounded-t-lg transition-all absolute bottom-0 w-full"
											/>
											<motion.div
												initial={{ height: 0 }}
												animate={{ height: `${Math.max(0, data.accuracy - 10)}%` }}
												transition={{ duration: 1, delay: i * (dashboardData.chart.length > 12 ? 0.02 : 0.05) + 0.3 }}
												className="bg-indigo-600 rounded-t-lg shadow-lg shadow-indigo-600/20 absolute bottom-0 w-full"
											/>
										</div>
										<span className={`absolute -bottom-8 left-1/2 -translate-x-1/2 font-bold whitespace-nowrap
											${dashboardData.chart.length > 15 ? 'text-[7px]' : 'text-[9px]'}
											${data.label.length > 4 ? 'bg-indigo-600 text-white px-1.5 py-0.5 rounded' : 'text-slate-400'}
										`}>
											{data.label}
										</span>
									</div>
								))}
							</AnimatePresence>
						</div>
					</div>

					{/* Recent Activity */}
					<div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
						<h2 className="text-xl font-bold mb-6 text-slate-900">Recent Activity</h2>
						<div className="space-y-4">
							{[
								{ title: "Physical Verification Batch #422", desc: "Completed by Admin", time: "10 mins ago", status: "Verified" },
								{ title: "Invoice Discrepancy Found", desc: "INV-2024-089 needs manual review", time: "2 hours ago", status: "Flagged" },
								{ title: "Monthly Report Generated", desc: "Available for download in Exports", time: "5 hours ago", status: "Info" },
							].map((item, i) => (
								<div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all cursor-pointer group">
									<div className={`w-10 h-10 rounded-full flex items-center justify-center bg-white border border-slate-100 text-slate-400 group-hover:text-indigo-600 transition-colors`}>
										<FaHistory className="text-sm" />
									</div>
									<div className="flex-1">
										<p className="text-sm font-bold text-slate-700">{item.title}</p>
										<p className="text-xs text-slate-400">{item.desc}</p>
									</div>
									<div className="text-right">
										<p className="text-[10px] text-slate-400 mb-1">{item.time}</p>
										<span className={`text-[10px] px-2 py-0.5 rounded-full font-bold
                      ${item.status === 'Verified' ? 'bg-emerald-100 text-emerald-700' : ''}
                      ${item.status === 'Flagged' ? 'bg-rose-100 text-rose-700' : ''}
                      ${item.status === 'Info' ? 'bg-blue-100 text-blue-700' : ''}
                    `}>
											{item.status}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Right Column - Distribution & Flags */}
				<div className="space-y-8">
					{/* Asset Distribution */}
					<div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
						<h2 className="text-xl font-bold mb-6 text-slate-900">Asset Distribution</h2>
						<div className="space-y-6">
							{dashboardData.categories.map((cat, i) => (
								<div key={`${cat.name}-${startYear}-${endYear}-${selectedMonth}`}>
									<div className="flex justify-between items-center mb-2">
										<div className="flex items-center gap-2">
											<div className={`p-1.5 rounded-lg ${cat.color} text-white shadow-sm flex items-center justify-center`}>
												<cat.icon className="text-xs" />
											</div>
											<span className="text-sm font-bold text-slate-600">{cat.name}</span>
										</div>
										<span className="text-sm font-extrabold text-slate-900">{cat.value}%</span>
									</div>
									<div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
										<motion.div
											initial={{ width: 0 }}
											animate={{ width: `${cat.value}%` }}
											transition={{ duration: 1, delay: i * 0.1 }}
											className={`${cat.color} h-full rounded-full`}
										/>
									</div>
								</div>
							))}
						</div>
						<div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-3">
							<div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
								<FaChartPie className="text-indigo-600" />
							</div>
							<div>
								<p className="text-xs text-slate-400">Total Portfolio</p>
								<p className="text-sm font-bold text-slate-900">{(5000 + (dashboardData.actualEnd % 500)).toLocaleString()} Distinct Items</p>
							</div>
						</div>
					</div>

					{/* Major Discrepancies */}
					<div className="bg-indigo-600 p-8 rounded-3xl shadow-lg shadow-indigo-600/20 text-white relative overflow-hidden">
						<div className="relative z-10">
							<div className="flex items-center gap-3 mb-4">
								<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
									<FaExclamationTriangle className="text-white" />
								</div>
								<h3 className="text-lg font-bold">Critical Alerts</h3>
							</div>
							<p className="text-indigo-100 text-sm mb-6 leading-relaxed">
								There are <strong>{10 + (dashboardData.actualEnd % 5)} assets</strong> with missing digital documentation that require immediate attention.
							</p>
							<button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-colors shadow-sm">
								View All Alerts
							</button>
						</div>
						{/* Background Decoration */}
						<div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
						<div className="absolute -left-4 -top-4 w-24 h-24 bg-indigo-400/20 rounded-full blur-xl"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
