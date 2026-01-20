import { motion } from 'framer-motion';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { useState } from 'react';
import {
	FaBuilding,
	FaCalendarAlt,
	FaFileAlt,
	FaFileExcel,
	FaLayerGroup,
	FaTrash,
	FaUpload
} from 'react-icons/fa';
import { DatePicker, Dropdown } from '../../ui/shared';
import { appointmentDepartmentMockData, sectionMasterMockData } from '../master-data-management/hr-master-data/data';
import type { ReportEntry } from './useReportUpload';
import { useReportUpload } from './useReportUpload';

const Report = () => {
	const {
		entries,
		globalDocType,
		setGlobalDocType,
		globalDept,
		setGlobalDept,
		globalSection,
		setGlobalSection,
		globalDate,
		setGlobalDate,
		fileInputRef,
		addManualEntry,
		removeEntry,
		updateEntry,
		handleExcelUpload
	} = useReportUpload();

	const [isDragging, setIsDragging] = useState(false);
	const [globalFilter, setGlobalFilter] = useState('');

	const docTypeOptions = [
		{ label: 'Invoice', value: 'Invoice' },
		{ label: 'Receipt', value: 'Receipt' },
		{ label: 'Purchase Order', value: 'Purchase Order' },
		{ label: 'Reconciliation Report', value: 'Reconciliation Report' },
		{ label: 'Bank Statement', value: 'Bank Statement' },
		{ label: 'Tax Document', value: 'Tax Document' },
	];

	const deptOptions = appointmentDepartmentMockData.map(d => ({
		label: d.departmentNameEn,
		value: d.departmentNameEn
	}));

	const sectionOptions = sectionMasterMockData.map(s => ({
		label: s.sectionNameEn,
		value: s.sectionNameEn
	}));

	// const matchCaseBodyTemplate = (rowData: ReportEntry) => (
	// 	<span className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-bold w-fit ${rowData.matchCase === 'Yes' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
	// 		}`}>
	// 		{rowData.matchCase === 'Yes' ? <FaCheck /> : <FaExclamationTriangle />}
	// 		{rowData.matchCase}
	// 	</span>
	// );

	const textInputTemplate = (rowData: ReportEntry, field: keyof ReportEntry) => (
		<input
			type="text"
			value={rowData[field] as string}
			onChange={(e) => updateEntry(rowData.id, field, e.target.value)}
			className={`w-full bg-transparent border-none focus:ring-0 outline-none ${field === 'invoiceNo' || field === 'documentName' ? 'font-bold text-indigo-600' : 'text-slate-600'}`}
			placeholder={`Enter ${field}...`}
		/>
	);

	const dropdownTemplate = (rowData: ReportEntry, field: keyof ReportEntry, options: any[]) => (
		<Dropdown
			value={rowData[field] as any}
			options={options}
			onChange={(e) => updateEntry(rowData.id, field, e.value)}
			placeholder={`Select ${field}`}
			className="!border-none !bg-transparent !shadow-none text-xs"
		/>
	);

	const assetValueBodyTemplate = (rowData: ReportEntry) => (
		<div className="flex items-center gap-1 font-extrabold text-slate-900">
			<span>₹</span>
			<input
				type="text"
				value={rowData.assetValue}
				onChange={(e) => updateEntry(rowData.id, 'assetValue', e.target.value)}
				className="w-full bg-transparent border-none focus:ring-0 outline-none p-0"
			/>
		</div>
	);

	const actionsBodyTemplate = (rowData: ReportEntry) => (
		<button
			onClick={() => removeEntry(rowData.id)}
			className="p-2 text-rose-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-all"
		>
			<FaTrash />
		</button>
	);

	const header = (
		<div className="flex flex-wrap justify-between items-center gap-4 px-2 py-1">
			<div className="relative flex-1 max-w-md">
				<InputText
					value={globalFilter}
					onChange={(e) => setGlobalFilter(e.target.value)}
					placeholder="Search in queue..."
					className="w-full bg-white border border-slate-100 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all text-sm shadow-sm"
				/>
			</div>
			<div className="flex gap-3">
				<Button
					icon="pi pi-plus"
					label="Add Row"
					onClick={addManualEntry}
					className="p-button-outlined p-button-sm border-slate-200 text-slate-600 hover:border-indigo-500 hover:text-indigo-600 rounded-xl font-bold px-4"
				/>
				<Button
					icon="pi pi-upload"
					label="Process All"
					disabled={entries.length === 0}
					className="p-button-sm bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-xl font-bold shadow-lg shadow-indigo-600/20 px-4"
				/>
			</div>
		</div>
	);

	return (
		<div className="p-8 min-h-screen bg-slate-50/50 text-slate-800">
			<div className="max-w-7xl mx-auto">
				<div className="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
					<div>
						<h1 className="text-4xl font-extrabold tracking-tight text-slate-900 border-l-4 border-indigo-600 pl-4">
							Document Upload Portal
						</h1>
						<p className="text-slate-500 mt-2 ml-5">Tell us which document you are uploading and configure batch settings.</p>
					</div>
					<button
						onClick={() => fileInputRef.current?.click()}
						className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-2xl font-black text-sm hover:border-emerald-500 hover:text-emerald-600 transition-all shadow-sm group"
					>
						<FaFileExcel className="text-emerald-500 group-hover:scale-110 transition-transform" />
						Import From Excel
					</button>
					<input
						type="file"
						ref={fileInputRef}
						onChange={handleExcelUpload}
						className="hidden"
						accept=".xlsx, .xls"
					/>
				</div>

				{/* Global Config Panel */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-sm mb-10"
				>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						<div className="space-y-3">
							<label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
								<FaFileAlt className="text-blue-400" /> Document Type
							</label>
							<Dropdown value={globalDocType} options={docTypeOptions} onChange={(e) => setGlobalDocType(e.value)} placeholder="Type of Document" className="!rounded-2xl !border-slate-100" />
						</div>
						<div className="space-y-3">
							<label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
								<FaBuilding className="text-indigo-400" /> Department
							</label>
							<Dropdown value={globalDept} options={deptOptions} onChange={(e) => setGlobalDept(e.value)} placeholder="Select Department" className="!rounded-2xl !border-slate-100" />
						</div>
						<div className="space-y-3">
							<label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
								<FaLayerGroup className="text-emerald-400" /> Section
							</label>
							<Dropdown value={globalSection} options={sectionOptions} onChange={(e) => setGlobalSection(e.value)} placeholder="Select Section" className="!rounded-2xl !border-slate-100" />
						</div>
						<div className="space-y-3">
							<label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
								<FaCalendarAlt className="text-rose-400" /> Effective Date
							</label>
							<DatePicker value={globalDate} onChange={(e) => setGlobalDate(e.value as Date)} className="!rounded-2xl" />
						</div>
					</div>
				</motion.div>

				{/* Upload & Table Section */}
				<div
					className={`
						relative border-2 border-dashed rounded-[2.5rem] p-4 transition-all
						${isDragging ? 'border-indigo-500 bg-indigo-50/50' : 'border-slate-200 bg-white shadow-sm'}
					`}
					onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
					onDragLeave={() => setIsDragging(false)}
					onDrop={(e) => { e.preventDefault(); setIsDragging(false); handleExcelUpload(e); }}
				>
					{entries.length > 0 ? (
						<div className="animate-in fade-in zoom-in-95 duration-500">
							<DataTable
								value={entries}
								header={header}
								globalFilter={globalFilter}
								className="p-datatable-sm overflow-hidden rounded-3xl"
								responsiveLayout="scroll"
								emptyMessage="No entries found."
							>
								<Column field="documentName" header="Document Name" body={(r: ReportEntry) => textInputTemplate(r, 'documentName')} sortable />
								<Column field="documentType" header="Type" body={(r: ReportEntry) => dropdownTemplate(r, 'documentType', docTypeOptions)} sortable />
								<Column field="invoiceNo" header="Invoice No" body={(r: ReportEntry) => textInputTemplate(r, 'invoiceNo')} sortable />
								<Column field="department" header="Department" body={(r: ReportEntry) => dropdownTemplate(r, 'department', deptOptions)} sortable />
								<Column field="section" header="Section" body={(r: ReportEntry) => dropdownTemplate(r, 'section', sectionOptions)} sortable />
								<Column field="date" header="Date" body={(r: ReportEntry) => <DatePicker value={r.date} onChange={(e) => updateEntry(r.id, 'date', e.value)} className="!border-none" />} sortable />
								<Column field="assetValue" header="Value" body={assetValueBodyTemplate} sortable />
								<Column body={actionsBodyTemplate} style={{ width: '50px' }} />
							</DataTable>
						</div>
					) : (
						<div
							className="py-32 flex flex-col items-center justify-center text-center cursor-pointer group"
							onClick={() => fileInputRef.current?.click()}
						>
							<div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-100 transition-all">
								<FaUpload className="text-4xl text-indigo-600" />
							</div>
							<h3 className="text-2xl font-black text-slate-900">Which document are you uploading?</h3>
							<p className="text-slate-500 mt-2 max-w-sm font-medium">
								Drop your Excel file here or click to browse. We'll map it to the right department and section.
							</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Report;
