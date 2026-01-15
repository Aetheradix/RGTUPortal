/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";

interface ChallanRow {
  id: number;
  name: string;
  designation: string;
  pan: string;
  paymentDate: string;
  salary: number;
  gst: number;
  depositDate: string;
  challanNo: string;
}

const challanData: ChallanRow[] = [
  { id: 1, name: "Anil Jain", designation: "Assistant Professor", pan: "ABCDE1234F", paymentDate: "20/11/2024", salary: 50000, gst: 9000, depositDate: "20/11/2024", challanNo: "CH123456" },
  { id: 2, name: "Dr. Giriraj Sharma", designation: "Head of Department", pan: "FGHIJ5678K", paymentDate: "20/11/2024", salary: 70000, gst: 12000, depositDate: "20/11/2024", challanNo: "CH654321" },
];

const options = {
  division: [{ label: "Bhopal Division", value: "bhopal" }],
  district: [{ label: "Bhopal", value: "bhopal" }],
  block: [{ label: "Block A", value: "blockA" }],
  ouc: [{ label: "Government", value: "govt" }],
  university: [{ label: "Barkatullah University", value: "BU" }],
  office: [{ label: "DPI Office", value: "dpi" }],
  post: [{ label: "Assistant Professor", value: "ap" }],
  employee: [{ label: "Anil Jain", value: "anil" }],
  tax: [{ label: "GST", value: "gst" }],
};

export default function TaxChallanReport() {
  const [filters, setFilters] = useState<any>({});
  const [dateRange, setDateRange] = useState<{ from: Date | null; to: Date | null }>({ from: null, to: null });
  const [showResult, setShowResult] = useState(false);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows>({});

  const handleClear = () => {
    setFilters({});
    setDateRange({ from: null, to: null });
    setShowResult(false);
    setExpandedRows({});
  };

  const rowTemplate = (row: ChallanRow) => (
    <div className="p-4 bg-gray-50/50 rounded-lg border border-dashed border-gray-300 mx-4 my-2 animate-fadein">
      <div className="flex items-center gap-2 mb-3 text-blue-800">
        <i className="pi pi-file-edit text-sm"></i>
        <span className="text-xs font-bold uppercase tracking-widest">Transaction Details</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white p-4 rounded border shadow-sm">
        <DetailItem label="Date of Payment" value={row.paymentDate} />
        <DetailItem label="Date of Deposit" value={row.depositDate} />
        <DetailItem label="Challan Number" value={row.challanNo} highlight />
        <DetailItem label="Paid Salary" value={`₹ ${row.salary.toLocaleString('en-IN')}`} />
        <DetailItem label="GST Amount" value={`₹ ${row.gst.toLocaleString('en-IN')}`} isTax />
        <DetailItem 
            label="Total Impact" 
            value={`₹ ${(row.salary + row.gst).toLocaleString('en-IN')}`} 
            bold 
        />
      </div>
    </div>
  );

  return (
    <PageLayout title="Tax Challan Report / टैक्स चालान रिपोर्ट">
      <Card className="shadow-sm  mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <DropdownField label="Division" value={filters.division} options={options.division} onChange={(v: any) => setFilters({...filters, division: v})} />
          <DropdownField label="District" value={filters.district} options={options.district} onChange={(v: any) => setFilters({...filters, district: v})} />
          <DropdownField label="Block" value={filters.block} options={options.block} onChange={(v: any) => setFilters({...filters, block: v})} />
          <DropdownField label="OUC Type" value={filters.ouc} options={options.ouc} onChange={(v: any) => setFilters({...filters, ouc: v})} />
          <DropdownField label="University" value={filters.university} options={options.university} onChange={(v: any) => setFilters({...filters, university: v})} />
          <DropdownField label="Office" value={filters.office} options={options.office} onChange={(v: any) => setFilters({...filters, office: v})} />
          <DropdownField label="Post Type" value={filters.post} options={options.post} onChange={(v: any) => setFilters({...filters, post: v})} />
          <DropdownField label="Employee" value={filters.employee} options={options.employee} onChange={(v: any) => setFilters({...filters, employee: v})} />
          <DropdownField label="Tax Type" value={filters.tax} options={options.tax} onChange={(v: any) => setFilters({...filters, tax: v})} />
          
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600 uppercase">From Month *</label>
            <Calendar value={dateRange.from} onChange={e => setDateRange({...dateRange, from: e.value as Date})} view="month" dateFormat="mm/yy" showIcon placeholder="MM/YY" className="w-full" />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600 uppercase">To Month *</label>
            <Calendar value={dateRange.to} onChange={e => setDateRange({...dateRange, to: e.value as Date})} view="month" dateFormat="mm/yy" showIcon placeholder="MM/YY" className="w-full" />
          </div>
        </div>

        <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
          <Button label="Generate Report" icon="pi pi-search" className="bg-blue-600 px-8" onClick={() => setShowResult(true)} />
          <Button label="Clear All" icon="pi pi-refresh" severity="secondary" outlined className="px-8" onClick={handleClear} />
        </div>
      </Card>
      {showResult && (
        <div className="animate-fadein">
          <Card className="shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4 px-2">
                <h3 className="text-lg font-bold text-gray-700 tracking-tight uppercase">Tax Challan Summary</h3>
                <div className="flex gap-2">
                    <Button icon="pi pi-print" tooltip="Print" severity="secondary" text rounded />
                    <Button icon="pi pi-file-pdf" tooltip="Export PDF" severity="danger" text rounded />
                </div>
            </div>

            <DataTable 
              value={challanData} 
              paginator rows={10}
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
              rowExpansionTemplate={rowTemplate}
              dataKey="id"
              showGridlines
              className="p-datatable-sm"
              rowHover
            >
              <Column expander style={{ width: '3rem' }} />
              <Column field="name" header="EMPLOYEE NAME" sortable className="font-semibold" />
              <Column field="designation" header="DESIGNATION" sortable />
              <Column 
                field="pan" 
                header="PAN NO." 
                sortable 
                body={(row) => <span className="font-mono bg-gray-100 px-2 py-1 rounded text-xs">{row.pan}</span>}
              />
            </DataTable>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}

const DropdownField = ({ label, value, options, onChange }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-bold text-gray-600 uppercase">{label} *</label>
    <Dropdown value={value} options={options} onChange={(e) => onChange(e.value)} placeholder="Select" className="w-full" />
  </div>
);

const DetailItem = ({ label, value, highlight, isTax, bold }: any) => (
  <div className="flex flex-col">
    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</span>
    <span className={`text-sm ${highlight ? 'text-blue-600 font-mono' : isTax ? 'text-red-600' : 'text-gray-800'} ${bold ? 'font-black' : 'font-medium'}`}>
      {value}
    </span>
  </div>
);