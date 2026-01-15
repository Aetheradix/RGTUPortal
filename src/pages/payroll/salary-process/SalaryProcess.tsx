/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

import { Calendar } from "primereact/calendar";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { RadioButton } from "primereact/radiobutton";
import { Checkbox } from "primereact/checkbox";
import { Tag } from "primereact/tag";
import Dropdown from "@/ui/shared/Dropdown";

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

const salaryData: SalaryRow[] = [
  { id: 1, status: "Pending", designation: "Lecturer in Business Studies", employee: "Aditya", basic: 24700, days: 30, earning: 35904, deduction: 4409, net: 31495 },
];

export default function SalaryProcess() {
  const [processType, setProcessType] = useState<"final" | "supplementary" | "reset">("final");
  const [showResult, setShowResult] = useState(false);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | any>(undefined);
  const [verified, setVerified] = useState(false);

  const processConfig = {
    final: { label: "Final Salary", color: "blue", icon: "pi-check-square", severity: "info" },
    supplementary: { label: "Supplementary", color: "orange", icon: "pi-plus-circle", severity: "warning" },
    reset: { label: "Reset Salary", color: "red", icon: "pi-refresh", severity: "danger" }
  };

  const formatCurrency = (val: number) => `₹ ${val.toLocaleString('en-IN')}`;

  const rowExpansionTemplate = (row: SalaryRow) => (
    <div className="p-4 bg-gray-50/50 rounded-lg border border-gray-200 mx-4 my-2 animate-fadein">
        <div className="flex justify-between items-center bg-white p-3 rounded shadow-sm border-l-4 border-blue-500">
            <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Net Payable Salary</span>
                <p className="text-xl font-black text-blue-900">{formatCurrency(row.net)}</p>
            </div>
            <Button label="View Breakup" icon="pi pi-external-link" text className="p-button-sm" />
        </div>
    </div>
  );

  return (
    <PageLayout title="Salary Process / वेतन प्रक्रिया">
      <Card >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h3 className="text-lg font-bold text-gray-700 uppercase tracking-tight">Select Process Type</h3>
            <div className="flex bg-gray-100 p-1 rounded-lg">
                {(['final', 'supplementary', 'reset'] as const).map((type) => (
                    <button 
                        key={type}
                        onClick={() => { setProcessType(type); setShowResult(false); }}
                        className={`px-4 py-2 rounded-md text-xs font-bold transition-all flex items-center gap-2 
                            ${processType === type ? 'bg-white shadow text-gray-900' : 'text-gray-500 opacity-70'}`}
                    >
                        <RadioButton value={type} checked={processType === type} />
                        {processConfig[type].label}
                    </button>
                ))}
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600 uppercase">Select Month *</label>
            <Calendar view="month" dateFormat="MM yy" className="w-full" showIcon placeholder="MM YY" />
          </div>
          <DropdownField label="Office Type" options={[{ label: "Government", value: "govt" }]} />
          <DropdownField label="Office" options={[{ label: "DPI Office", value: "dpi" }]} />
          <DropdownField label="Type of Post" options={[{ label: "Teaching", value: "teach" }]} />
        </div>

        <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
          <Button label="Search Data" icon="pi pi-search" className={`bg-${processConfig[processType].color}-600 px-8`} onClick={() => setShowResult(true)} />
          <Button label="Clear" icon="pi pi-refresh" severity="secondary" outlined onClick={() => setShowResult(false)} />
        </div>
      </Card>

      {showResult && (
        <div className="animate-fadein mt-6">
          <Card className="shadow-sm border border-gray-200">
            <div className="flex justify-between items-center mb-4 px-2">
                <div className="flex items-center gap-3">
                    <i className={`pi ${processConfig[processType].icon} text-xl text-${processConfig[processType].color}-600`}></i>
                    <h3 className="text-lg font-bold text-gray-700 uppercase tracking-tight">
                        {processConfig[processType].label} Processing List
                    </h3>
                </div>
            </div>

            <DataTable
              value={salaryData}
              dataKey="id"
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data)}
              rowExpansionTemplate={rowExpansionTemplate}
              paginator rows={10}
              showGridlines
              className="p-datatable-sm"
              rowHover
            >
              <Column expander style={{ width: "3rem" }} />
              <Column header="SR." body={(_, opt) => <span className="text-xs font-bold text-gray-400">{opt.rowIndex + 1}</span>} style={{ width: '4rem' }} />
              <Column field="status" header="STATUS" body={(row) => <Tag value={row.status} severity="warning" rounded />} />
              <Column field="employee" header="EMPLOYEE NAME" sortable className="font-semibold" />
              <Column field="designation" header="DESIGNATION" className="text-xs" />
              <Column field="basic" header="BASIC ₹" body={row => formatCurrency(row.basic)}  />
              <Column field="days" header="DAYS"/>
              <Column field="earning" header="EARNINGS ₹" body={row => <span className="text-green-700 font-bold">{formatCurrency(row.earning)}</span>}  />
              <Column field="deduction" header="DEDUCTIONS ₹" body={row => <span className="text-red-700 font-bold">{formatCurrency(row.deduction)}</span>} />
            </DataTable>


            <div className={`mt-6 p-4 rounded-lg border-l-4 transition-colors ${verified ? 'bg-green-50 border-green-500' : 'bg-gray-50 border-gray-300'}`}>
              <div className="flex items-start gap-3">
                <Checkbox checked={verified} onChange={(e) => setVerified(e.checked!)} inputId="decl" />
                <label htmlFor="decl" className="text-sm font-medium text-gray-700 leading-relaxed cursor-pointer select-none">
                  मै एतद् द्वारा घोषणा करता /करती हूँ, कि मेरे द्वारा समस्त अधिकारियों एवं कर्मचारियों के आय एवं कटौत्रा की राशि प्रविष्टि पूर्ण सत्यापन के पश्चात् की गयी है |
                </label>
              </div>
            </div>

            <div className="flex justify-center mt-6 gap-3 pt-4 border-t">
              <Button 
                label={processConfig[processType].label} 
                icon={`pi ${processConfig[processType].icon}`}
                disabled={!verified} 
                className={`px-8 shadow-lg bg-${processConfig[processType].color}-600 border-${processConfig[processType].color}-600`}
              />
              <Button label="Cancel" severity="secondary" outlined className="px-8" />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}

const DropdownField = ({ label, options }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-bold text-gray-600 uppercase">{label} *</label>
    <Dropdown options={options} placeholder="Select" className="w-full" />
  </div>
);