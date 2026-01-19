import { motion } from 'framer-motion';
import {
	FaArrowDown,
	FaArrowUp,
	FaBuilding,
	FaChair,
	FaChartPie,
	FaCheckCircle,
	FaExclamationTriangle,
	FaFileExport,
	FaFileInvoice,
	FaHistory,
	FaLaptop,
	FaMicroscope,
	FaPlus,
	FaSearch
} from 'react-icons/fa';

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
	const stats = [
		{ title: "Total Documents", value: "1,284", change: "12%", isPositive: true, icon: FaFileInvoice, color: "bg-blue-600", delay: 0.1 },
		{ title: "Matched Cases", value: "1,152", change: "8.4%", isPositive: true, icon: FaCheckCircle, color: "bg-emerald-600", delay: 0.2 },
		{ title: "Total Assets", value: "₹4.2 Cr", change: "2.1%", isPositive: true, icon: FaChartPie, color: "bg-indigo-600", delay: 0.3 },
		{ title: "Needs Review", value: "132", change: "4%", isPositive: false, icon: FaSearch, color: "bg-rose-600", delay: 0.4 },
	];

	const quickActions = [
		{ icon: FaPlus, label: "New Upload", color: "bg-indigo-600" },
		{ icon: FaSearch, label: "Scan Docs", color: "bg-blue-600" },
		{ icon: FaHistory, label: "Audit Log", color: "bg-slate-600" },
		{ icon: FaFileExport, label: "Generate Report", color: "bg-amber-600" },
	];

	const categories = [
		{ name: "IT Assets", value: 45, color: "bg-indigo-500", icon: FaLaptop },
		{ name: "Furniture", value: 30, color: "bg-blue-500", icon: FaChair },
		{ name: "Laboratory", value: 15, color: "bg-emerald-500", icon: FaMicroscope },
		{ name: "Infrastructure", value: 10, color: "bg-amber-500", icon: FaBuilding },
	];

	return (
		<div className="p-8 min-h-screen bg-slate-50/50 text-slate-800">
			{/* Header */}
			<div className="flex flex-wrap justify-between items-end gap-6 mb-10">
				<div>
					<h1 className="text-4xl font-extrabold tracking-tight text-slate-900">
						FRMS Dashboard
					</h1>
					<p className="text-slate-500 mt-2">Welcome back! Here's what's happening with your assets today.</p>
				</div>
				<div className="grid grid-cols-4 gap-4">
					{quickActions.map((action, i) => (
						<QuickAction key={i} {...action} />
					))}
				</div>
			</div>

			{/* Main Stats Grid */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
				{stats.map((stat, index) => (
					<StatCard key={index} {...stat} />
				))}
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Left Column - Health & Recent Activity */}
				<div className="lg:col-span-2 space-y-8">
					{/* Reconciliation Health Chart (Mock Visual) */}
					<div className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm">
						<div className="flex justify-between items-center mb-8">
							<div>
								<h2 className="text-xl font-bold text-slate-900">Reconciliation Health</h2>
								<p className="text-sm text-slate-500">Matching accuracy over the last 6 months</p>
							</div>
							<div className="flex gap-4">
								<div className="flex items-center gap-2">
									<span className="w-3 h-3 rounded-full bg-indigo-500"></span>
									<span className="text-xs font-bold text-slate-600">Accuracy</span>
								</div>
								<div className="flex items-center gap-2">
									<span className="w-3 h-3 rounded-full bg-slate-200"></span>
									<span className="text-xs font-bold text-slate-600">Target</span>
								</div>
							</div>
						</div>

						<div className="relative h-48 flex items-end justify-between gap-2 px-2">
							{[65, 78, 82, 75, 88, 92].map((height, i) => (
								<div key={i} className="relative flex-1 group">
									<motion.div
										initial={{ height: 0 }}
										animate={{ height: `${height}%` }}
										transition={{ duration: 1, delay: i * 0.1 }}
										className="bg-indigo-500/20 group-hover:bg-indigo-500/30 rounded-t-lg transition-all absolute bottom-0 w-full"
									/>
									<motion.div
										initial={{ height: 0 }}
										animate={{ height: `${height - 10}%` }}
										transition={{ duration: 1, delay: i * 0.1 + 0.5 }}
										className="bg-indigo-600 rounded-t-lg shadow-lg shadow-indigo-600/20 absolute bottom-0 w-full"
									/>
									<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-400">
										{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][i]}
									</span>
								</div>
							))}
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
							{categories.map((cat, i) => (
								<div key={i}>
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
								<p className="text-sm font-bold text-slate-900">5,430 Distinct Items</p>
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
								There are <strong>12 assets</strong> with missing digital documentation that require immediate attention to pass the audit.
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
