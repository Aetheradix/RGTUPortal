/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface LoanRow {
  id: number;
  officeType: string;
  officeName: string;
  employeeName: string;
  loanHead: string;
  loanAmount: number;
  installmentAmount: number;
  installmentNo: number;
  interestAmount: number;
  year: string;
  month: string;
}

const LoanInformation = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows>({});
  const [, setCalcDialog] = useState(false);

  const [form, setForm] = useState<any>({
    officeType: null,
    office: null,
    employee: null,
    loanType: null,
    interestDeduction: "N",
    loanAmount: "",
    installmentAmount: "",
    interestAmount: "",
  });

  const loanList: LoanRow[] = [
    { id: 1, officeType: "Division Office", officeName: "DEO Office", employeeName: "Manish (EMP001)", loanHead: "Grain Advance", loanAmount: 15000, installmentAmount: 1500, installmentNo: 10, interestAmount: 0, year: "2023", month: "Nov 2023" },
    { id: 2, officeType: "District Office", officeName: "Head Office", employeeName: "Poonam (EMP002)", loanHead: "Festival Advance", loanAmount: 15000, installmentAmount: 1500, installmentNo: 10, interestAmount: 0, year: "2023", month: "Nov 2023" },
  ];

  const formatCurrency = (val: number) => `₹ ${val.toLocaleString('en-IN')}`;

  const expandTemplate = (row: LoanRow) => (
    <div className="p-4 bg-blue-50/50 border rounded-lg mx-4 my-2 animate-fadein">
      <div className="flex justify-between items-center">
        <div className="flex gap-8">
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase">Deduction Start</span>
            <p className="text-sm font-semibold">{row.month} {row.year}</p>
          </div>
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase">Recovery Status</span>
            <p className="text-sm"><Tag severity="info" value="In Progress" rounded /></p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button label="View Schedule" icon="pi pi-calendar" text className="p-button-sm" onClick={() => setCalcDialog(true)} />
          <Button label="Edit" icon="pi pi-pencil" text className="p-button-sm" />
          <Button label="Close Loan" icon="pi pi-times-circle" text severity="danger" className="p-button-sm" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-2">
      <Card className="shadow-sm">
        <div className="flex justify-between items-center  pb-4 mb-5">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              {showAdd ? "New Loan Entry / नई ऋण प्रविष्टि" : "Loan Recovery Management / ऋण प्रबंधन"}
            </h2>
          </div>

          <Button 
            label={showAdd ? "Back to List" : "Add New Loan"} 
            icon={showAdd ? "pi pi-arrow-left" : "pi pi-plus"} 
            className={showAdd ? "p-button-outlined p-button-secondary" : "bg-blue-600"}
            onClick={() => setShowAdd(!showAdd)} 
          />
        </div>

        {showAdd ? (
          <div className="animate-fadein">
            <div className="bg-gray-50 p-4 rounded-lg border mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Employee Code*</label>
                <div className="p-inputgroup mt-1">
                  <InputText placeholder="EMP123" />
                  <Button icon="pi pi-search" className="p-button-info" />
                </div>
              </div>
              <FormField label="Office Type" type="dropdown" options={[{ label: "Head Office", value: "HO" }]} value={form.officeType} onChange={(v:any)=>setForm({...form,officeType:v})}/>
              <FormField label="Office" type="dropdown" options={[{ label: "Ministry of Tribal Affairs", value: "MTA" }]} value={form.office} onChange={(v:any)=>setForm({...form,office:v})}/>
              <FormField label="Employee" type="dropdown" options={[{ label: "Surya Pratap (HP858)", value: "SP" }]} value={form.employee} onChange={(v:any)=>setForm({...form,employee:v})}/>
            </div>

            <h3 className="text-sm font-bold text-blue-600 uppercase mb-3 flex items-center gap-2">
              <i className="pi pi-wallet"></i> Loan Configuration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border p-4 rounded-lg mb-6">
              <FormField label="Loan Type" type="dropdown" options={[{ label: "Grain Advance", value: "GA" }, { label: "Festival Advance", value: "FA" }]} value={form.loanType} onChange={(v:any)=>setForm({...form,loanType:v})}/>
              <FormField label="Loan Amount (₹)" value={form.loanAmount} onChange={(v:any)=>setForm({...form,loanAmount:v})}/>
              <FormField label="Installment Amount (₹)" value={form.installmentAmount} onChange={(v:any)=>setForm({...form,installmentAmount:v})}/>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Start Date*</label>
                <div className="p-inputgroup">
                  <Calendar className="w-full" showIcon view="month" dateFormat="mm/yy" />
                  <Button icon="pi pi-calculator" className="p-button-secondary" tooltip="Generate Schedule" onClick={() => setCalcDialog(true)} />
                </div>
              </div>
            </div>

            <h3 className="text-sm font-bold text-orange-600 uppercase mb-3 flex items-center gap-2">
              <i className="pi pi-percentage"></i> Interest Settings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 border p-4 rounded-lg">
              <FormField label="Interest Deduction" type="dropdown" options={[{ label: "Yes", value: "Y" }, { label: "No", value: "N" }]} value={form.interestDeduction} onChange={(v:any)=>setForm({...form,interestDeduction:v})}/>
              <FormField label="Interest Amount (₹)" value={form.interestAmount} onChange={(v:any)=>setForm({...form,interestAmount:v})}/>
            </div>

            <div className="flex justify-center gap-3 mt-8 pt-5 border-t">
              <Button label="Save Loan Details" icon="pi pi-save" className="bg-blue-600 px-8" />
              <Button label="Clear Form" icon="pi pi-refresh" severity="secondary" outlined className="px-8" />
            </div>
          </div>
        ) : (
          <DataTable
            value={loanList}
            dataKey="id"
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
            rowExpansionTemplate={(row)=>expandTemplate(row)}
            paginator rows={10}
            className="p-datatable-sm"
            showGridlines
            rowHover
          >
            <Column expander style={{ width: "3rem" }} />
            <Column field="employeeName" header="EMPLOYEE" sortable />
            <Column field="loanHead" header="LOAN TYPE" body={(row) => <span className="font-semibold">{row.loanHead}</span>} />
            <Column field="loanAmount" header="TOTAL LOAN" body={(row) => formatCurrency(row.loanAmount)} />
            <Column field="installmentAmount" header="INSTALLMENT" body={(row) => formatCurrency(row.installmentAmount)}className="text-blue-700 font-bold" />
            <Column field="installmentNo" header="TENURE" body={(row) => `${row.installmentNo} Months`}  />
            <Column field="interestAmount" header="INTEREST" body={(row) => formatCurrency(row.interestAmount)} />
          </DataTable>
        )}
      </Card>
    </div>
  );
};

const FormField = ({ label, type = "text", options, value, onChange }: any) => (
  <div className="flex flex-col gap-1">
    <label className="text-xs font-bold text-gray-600 uppercase">{label}*</label>
    {type === "dropdown" ? (
      <Dropdown options={options} placeholder="Select" className="w-full" value={value} onChange={(e)=>onChange(e.value)} />
    ) : (
      <InputText className="w-full" placeholder="0.00" value={value || ""} onChange={(e)=>onChange(e.target.value)} />
    )}
  </div>
);

export default LoanInformation;
