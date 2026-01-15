/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { ProgressBar } from "primereact/progressbar";
import { Tag } from "primereact/tag";

interface SalaryRow {
  id: number;
  office: string;
  totalEmployees: number;
  generatedCount: number;
  status: "Generated" | "Pending" | "In-Progress";
}

const salaryData: SalaryRow[] = [
  { id: 1, office: "DPI Office", totalEmployees: 123, generatedCount: 112, status: "Generated" },
  { id: 2, office: "Bhopal Office", totalEmployees: 12, generatedCount: 12, status: "Generated" },
  { id: 3, office: "Hoshangabad Office", totalEmployees: 8, generatedCount: 8, status: "Generated" },
  { id: 4, office: "Betul Office", totalEmployees: 6, generatedCount: 4, status: "In-Progress" },
  { id: 5, office: "Chhindwara Office", totalEmployees: 10, generatedCount: 0, status: "Pending" },
];

const options = {
  divisions: [{ label: "Bhopal Division", value: "bhopal" }, { label: "Indore Division", value: "indore" }],
  districts: [{ label: "Bhopal", value: "bhopal" }, { label: "Hoshangabad", value: "hoshangabad" }],
  blocks: [{ label: "Block A", value: "blockA" }, { label: "Block B", value: "blockB" }],
  ouc: [{ label: "Government", value: "govt" }, { label: "Private", value: "private" }],
  universities: [{ label: "Barkatullah University", value: "BU" }, { label: "RGPV University", value: "RGPV" }],
};

export default function SalaryGenerationStatusReport() {
  const [filters, setFilters] = useState<any>({
    division: null, district: null, block: null, ouc: null, university: null, month: null,
  });
  const [showResult, setShowResult] = useState(false);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | undefined>();

  const handleClear = () => {
    setFilters({ division: null, district: null, block: null, ouc: null, university: null, month: null });
    setShowResult(false);
  };

  const statusTemplate = (row: SalaryRow) => {
    const severity = row.status === "Generated" ? "success" : row.status === "In-Progress" ? "warning" : "danger";
    return <Tag value={row.status} severity={severity} rounded />;
  };

  const progressTemplate = (row: SalaryRow) => {
    const percentage = Math.round((row.generatedCount / row.totalEmployees) * 100);
    return (
      <div className="flex flex-col gap-1 min-w-[150px]">
        <div className="flex justify-between text-[10px] font-bold">
            <span>{row.generatedCount} / {row.totalEmployees}</span>
            <span>{percentage}%</span>
        </div>
        <ProgressBar value={percentage} showValue={false} style={{ height: '6px' }} />
      </div>
    );
  };

  const expansionTemplate = (row: SalaryRow) => (
    <div className="p-4 bg-gray-50/50 rounded-lg border border-gray-100 mx-4 my-2 animate-fadein">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-3 rounded shadow-sm border-l-4 border-blue-500">
            <p className="text-xs text-gray-500 font-bold uppercase">Salary Generation Count</p>
            <p className="text-xl font-black text-blue-700">{row.generatedCount} Employees</p>
        </div>
        <div className="bg-white p-3 rounded shadow-sm border-l-4 border-green-500">
            <p className="text-xs text-gray-500 font-bold uppercase">Processing Status</p>
            <p className="text-xl font-black text-green-700">{row.status}</p>
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout title="Salary Generation Status Report / वेतन निर्माण स्थिति रिपोर्ट">
      <Card className="shadow-sm  mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <DropdownField label="Division Name" value={filters.division} options={options.divisions} onChange={(v: any) => setFilters({ ...filters, division: v })} />
          <DropdownField label="District" value={filters.district} options={options.districts} onChange={(v: any) => setFilters({ ...filters, district: v })} />
          <DropdownField label="Block" value={filters.block} options={options.blocks} onChange={(v: any) => setFilters({ ...filters, block: v })} />
          <DropdownField label="OUC Type" value={filters.ouc} options={options.ouc} onChange={(v: any) => setFilters({ ...filters, ouc: v })} />
          <DropdownField label="University Name" value={filters.university} options={options.universities} onChange={(v: any) => setFilters({ ...filters, university: v })} />
          
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">Select Month *</label>
            <Calendar value={filters.month} onChange={(e) => setFilters({ ...filters, month: e.value })} view="month" dateFormat="mm/yy" showIcon className="w-full" placeholder="Select Month" />
          </div>
        </div>

        <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
          <Button label="Search Status" icon="pi pi-search" className="bg-blue-600 px-8" onClick={() => setShowResult(true)} />
          <Button label="Clear Filters" icon="pi pi-refresh" severity="secondary" outlined className="px-8" onClick={handleClear} />
        </div>
      </Card>

      {showResult && (
        <div className="animate-fadein">
          <Card className="shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4 px-2">
                <h3 className="text-lg font-bold text-gray-700 uppercase tracking-tight">Current Processing Status</h3>
                <div className="flex gap-2">
                    <Button icon="pi pi-print" severity="secondary" rounded text />
                    <Button icon="pi pi-file-excel" severity="success" rounded text />
                </div>
            </div>

            <DataTable 
              value={salaryData} 
              paginator rows={10}
              expandedRows={expandedRows} 
              onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
              rowExpansionTemplate={expansionTemplate}
              dataKey="id" showGridlines className="p-datatable-sm" rowHover
            >
              <Column expander style={{ width: '3rem' }} />
              <Column field="office" header="Office Name" sortable className="font-semibold text-gray-700" />
              <Column header="Generation Progress" body={progressTemplate} />
              <Column field="status" header="Current Status" body={statusTemplate}  style={{ width: '150px' }} />
            </DataTable>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}

const DropdownField = ({ label, value, options, onChange }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-semibold text-gray-700">{label} *</label>
    <Dropdown value={value} options={options} onChange={(e) => onChange(e.value)} placeholder="Select" className="w-full" />
  </div>
);