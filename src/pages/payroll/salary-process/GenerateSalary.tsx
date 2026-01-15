/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";
import { Tag } from "primereact/tag";

interface SalaryRow {
  id: number;
  status: string;
  designation: string;
  employee: string;
  basic: number;
  days: number;
  earning: number;
  deduction: number;
  net: number;
}

const data: SalaryRow[] = [
  { id: 1, status: "Pending", designation: "Lecturer in Business Studies", employee: "Aditya", basic: 24700, days: 30, earning: 35904, deduction: 4409, net: 31495 }
];

export default function GenerateSalary() {
  const [mode, setMode] = useState<"generate" | "hold">("generate");
  const [filters, setFilters] = useState<any>({ month: null, officeType: null, office: null, postType: null });
  const [searched, setSearched] = useState(false);
  const [verified, setVerified] = useState(false);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | any>(undefined);

  const officeTypes = [{ label: "School", value: "School" }];
  const offices = [{ label: "St Theresa School", value: "ST" }];
  const postTypes = [{ label: "Teaching", value: "Teaching" }];

  const formatCurrency = (val: number) => `₹ ${val.toLocaleString('en-IN')}`;

  const rowExpansion = (row: SalaryRow) => (
    <div className="p-4 bg-gray-50/50 rounded-lg border border-blue-100 mx-4 my-2 animate-fadein">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-3 rounded shadow-sm border-l-4 border-green-500">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Total Earnings</p>
            <p className="text-lg font-bold text-green-700">{formatCurrency(row.earning)}</p>
        </div>
        <div className="bg-white p-3 rounded shadow-sm border-l-4 border-red-500">
            <p className="text-[10px] font-bold text-gray-400 uppercase">Total Deductions</p>
            <p className="text-lg font-bold text-red-700">{formatCurrency(row.deduction)}</p>
        </div>
        <div className="bg-blue-600 p-3 rounded shadow-sm text-white">
            <p className="text-[10px] font-bold opacity-80 uppercase">Net Payable Amount</p>
            <p className="text-lg font-black">{formatCurrency(row.net)}</p>
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout title="Generate Monthly Salary / मासिक वेतन निर्माण">
   
      <Card >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div className="flex bg-gray-100 p-1 rounded-lg">
                <button 
                    onClick={() => setMode("generate")}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${mode === 'generate' ? 'bg-white shadow text-blue-600' : 'text-gray-500'}`}
                >
                    <i className="pi pi-cog mr-2"></i>Generate Salary
                </button>
                <button 
                    onClick={() => setMode("hold")}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${mode === 'hold' ? 'bg-white shadow text-red-600' : 'text-gray-500'}`}
                >
                    <i className="pi pi-pause-circle mr-2"></i>Hold Salary
                </button>
            </div>
            <Tag severity={mode === 'generate' ? 'info' : 'danger'} value={mode.toUpperCase() + ' MODE'} rounded />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600 uppercase">Select Month *</label>
            <Calendar value={filters.month} onChange={e => setFilters({...filters, month: e.value})} view="month" dateFormat="MM yy" className="w-full" showIcon placeholder="MM YY" />
          </div>
          <DropdownField label="Office Type" value={filters.officeType} options={officeTypes} onChange={(v: any) => setFilters({...filters, officeType: v})} />
          <DropdownField label="Office" value={filters.office} options={offices} onChange={(v: any) => setFilters({...filters, office: v})} />
          <DropdownField label="Type of Post" value={filters.postType} options={postTypes} onChange={(v: any) => setFilters({...filters, postType: v})} />
        </div>

        <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
          <Button label="Search Employees" icon="pi pi-search" className={mode === 'generate' ? 'bg-blue-600 border-blue-600' : 'bg-red-600 border-red-600'} onClick={() => setSearched(true)} />
          <Button label="Clear" icon="pi pi-refresh" severity="secondary" outlined onClick={() => setSearched(false)} />
        </div>
      </Card>
      {searched && (
        <div className="animate-fadein mt-6">
          <Card className="shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4 px-2">
                <h3 className="text-lg font-bold text-gray-700 uppercase tracking-tight">
                    {mode === "generate" ? "Salary Generation List" : "Salary Hold List"}
                </h3>
            </div>

            <DataTable
              value={data}
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data)}
              rowExpansionTemplate={rowExpansion}
              dataKey="id"
              showGridlines
              className="p-datatable-sm"
              rowHover
            >
              <Column expander style={{ width: "3em" }} />
              <Column field="status" header="STATUS" body={(row) => <Tag severity="warning" value={row.status} rounded />} />
              <Column field="designation" header="DESIGNATION" sortable className="text-xs font-semibold" />
              <Column field="employee" header="EMPLOYEE" sortable />
              <Column field="basic" header="BASIC ₹" body={row => formatCurrency(row.basic)}  />
              <Column field="days" header="DAYS"  />
              <Column field="earning" header="TOTAL EARNING ₹" body={row => formatCurrency(row.earning)}  className="text-green-700 font-bold" />
              <Column field="deduction" header="TOTAL DEDUCTION ₹" body={row => formatCurrency(row.deduction)}  className="text-red-700 font-bold" />
              <Column header="PAYSLIP" body={() => <Button icon="pi pi-file-pdf" text severity="info" />}  />
            </DataTable>

            <div className={`mt-6 p-4 rounded-lg border-l-4 ${verified ? 'bg-green-50 border-green-500' : 'bg-gray-50 border-gray-400'}`}>
              <div className="flex items-start gap-3">
                <Checkbox checked={verified} onChange={e => setVerified(e.checked!)} inputId="v-check" />
                <label htmlFor="v-check" className="text-sm font-medium text-gray-700 leading-relaxed cursor-pointer">
                  मै एतद् द्वारा घोषणा करता /करती हूँ, कि मेरे द्वारा समस्त अधिकारियों एवं कर्मचारियों के आय एवं कटौती की राशि पूर्ण सत्यापन के पश्चात् की गयी है |
                </label>
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-3 pt-4 border-t">
              <Button 
                label={mode === "generate" ? "Process Salary Generation" : "Confirm Salary Hold"} 
                disabled={!verified} 
                icon={mode === 'generate' ? "pi pi-check-circle" : "pi pi-pause-circle"}
                className={`px-8 shadow-lg ${mode === 'generate' ? 'bg-blue-600' : 'bg-red-600'}`} 
              />
              <Button label="Clear List" severity="secondary" outlined className="px-8" />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}

const DropdownField = ({ label, value, options, onChange }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-bold text-gray-600 uppercase">{label} *</label>
    <Dropdown options={options} value={value} onChange={e => onChange(e.value)} className="w-full" placeholder="Select" />
  </div>
);