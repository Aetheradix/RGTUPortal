import { AnimatePresence, motion } from "framer-motion";
import { Button } from "primereact/button";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import {
	FaCheck,
	FaCloudUploadAlt,
	FaExclamationTriangle
} from "react-icons/fa";
import * as XLSX from "xlsx";

interface ReconciliationData {
	invoiceNo: string;
	tallyData: string;
	physicalDocs: string;
	digitalDocs: string;
	bankDb: string;
	matchCase: "Yes" | "Needs Review";
	assetValue: string;
}

const Report = () => {
	const [data, setData] = useState<ReconciliationData[]>([]);
	const [isDragging, setIsDragging] = useState(false);
	const [globalFilter, setGlobalFilter] = useState("");

	const handleFileUpload = (
		e: React.ChangeEvent<HTMLInputElement> | React.DragEvent
	) => {
		let file: File | undefined;

		if ("files" in e.target && e.target.files) {
			file = e.target.files[0];
		} else if ("dataTransfer" in e && e.dataTransfer.files) {
			file = e.dataTransfer.files[0];
		}

		if (!file) return;

		const reader = new FileReader();
		reader.onload = (evt) => {
			const bstr = evt.target?.result;
			const wb = XLSX.read(bstr, { type: "binary" });
			const wsname = wb.SheetNames[0];
			const ws = wb.Sheets[wsname];
			const json = XLSX.utils.sheet_to_json(ws) as any[];

			const mappedData: ReconciliationData[] = json.map((row: any) => ({
				invoiceNo: row["Invoice No"] || row["Invoice"] || row["No"] || "N/A",
				tallyData: row["Rgpv Tally data"] || row["Tally"] || "Pending",
				physicalDocs:
					row["Rgpv physical documents"] || row["Physical"] || "Missing",
				digitalDocs:
					row["Rgpv digital documents"] || row["Digital"] || "Missing",
				bankDb: row["bank database"] || row["Bank"] || "Unverified",
				matchCase: row["match case"]?.toLowerCase().includes("yes")
					? "Yes"
					: "Needs Review",
				assetValue: row["asset value"] || row["Value"] || "0",
			}));

			setData(mappedData);
		};
		reader.readAsBinaryString(file);
	};

	const matchCaseBodyTemplate = (rowData: ReconciliationData) => {
		return (
			<span
				className={`
          flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold w-fit
          ${rowData.matchCase === "Yes"
						? "bg-emerald-50 text-emerald-700"
						: "bg-rose-50 text-rose-700"
					}
        `}
			>
				{rowData.matchCase === "Yes" ? (
					<FaCheck className="text-[10px]" />
				) : (
					<FaExclamationTriangle className="text-[10px]" />
				)}
				{rowData.matchCase}
			</span>
		);
	};

	const assetValueBodyTemplate = (rowData: ReconciliationData) => {
		return (
			<span className="font-extrabold text-slate-900">
				₹{rowData.assetValue}
			</span>
		);
	};

	const invoiceNoBodyTemplate = (rowData: ReconciliationData) => {
		return (
			<span className="font-bold text-indigo-600">{rowData.invoiceNo}</span>
		);
	};

	const header = (
		<div className="flex flex-wrap justify-between items-center gap-4">
			<div className="relative flex-1  max-w-md">

				<InputText
					type="search"
					onInput={(e) => setGlobalFilter((e.target as HTMLInputElement).value)}
					placeholder="Search in report..."
					className="w-full bg-slate-50 border border-slate-100 rounded-xl py-2.5 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all text-sm"
				/>
			</div>
			<div className="flex gap-3">
				<Button
					type="button"
					icon="pi pi-filter"
					label="Filter"
					className="p-button-outlined p-button-secondary p-button-sm border-slate-100 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-semibold shadow-sm px-4 py-2"
				/>
				<Button
					type="button"
					icon="pi pi-file-excel"
					label="Export"
					className="p-button-sm bg-indigo-600 hover:bg-indigo-700 text-white border-none rounded-xl font-semibold shadow-md shadow-indigo-600/20 px-4 py-2"
				/>
			</div>
		</div>
	);

	return (
		<div className="p-8 min-h-screen bg-slate-50/50 text-slate-800 frms-report">
			<div className="mb-10">
				<h1 className="text-4xl font-extrabold tracking-tight text-slate-900 border-l-4 border-indigo-600 pl-4">
					Financial Reconciliation Report
				</h1>
				<p className="text-slate-500 mt-2 ml-5">
					Upload and analyze asset reconciliation data
				</p>
			</div>

			{/* Upload Section */}
			<motion.div
				initial={{ opacity: 0, scale: 0.98 }}
				animate={{ opacity: 1, scale: 1 }}
				className={`
          relative border-2 border-dashed rounded-3xl p-12 text-center transition-all shadow-sm
          ${isDragging
						? "border-indigo-500 bg-indigo-50/50"
						: "border-slate-200 bg-white hover:border-indigo-300"
					}
          ${data.length > 0 ? "mb-8 py-10" : "mb-0"}
        `}
				onDragOver={(e) => {
					e.preventDefault();
					setIsDragging(true);
				}}
				onDragLeave={() => setIsDragging(false)}
				onDrop={(e) => {
					e.preventDefault();
					setIsDragging(false);
					handleFileUpload(e);
				}}
			>
				<input
					type="file"
					accept=".xlsx, .xls"
					onChange={handleFileUpload}
					className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
				/>
				<div className="flex flex-col items-center">
					<div className="w-20 h-20 rounded-full bg-indigo-50 flex items-center justify-center mb-4">
						<FaCloudUploadAlt className="text-4xl text-indigo-600" />
					</div>
					<h3 className="text-xl font-bold text-slate-900">
						Drop your Excel file here
					</h3>
					<p className="text-slate-500 mt-2">
						or click to browse from your computer
					</p>
				</div>
			</motion.div>

			<AnimatePresence>
				{data.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm p-6"
					>
						<DataTable
							value={data}
							paginator
							rows={10}
							header={header}
							globalFilter={globalFilter}
							//   responsiveLayout="stack"
							breakpoint="960px"
							className="p-datatable-sm"
							emptyMessage="No matching records found"
							currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
							paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
						>
							<Column
								field="invoiceNo"
								header="Invoice No"
								body={invoiceNoBodyTemplate}
								sortable
							/>
							<Column field="tallyData" header="Tally Data" sortable />
							<Column field="physicalDocs" header="Physical Docs" sortable />
							<Column field="digitalDocs" header="Digital Docs" sortable />
							<Column field="bankDb" header="Bank DB" sortable />
							<Column
								field="matchCase"
								header="Match Case"
								body={matchCaseBodyTemplate}
								sortable
							/>
							<Column
								field="assetValue"
								header="Asset Value"
								body={assetValueBodyTemplate}
								sortable
							/>
						</DataTable>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Report;
