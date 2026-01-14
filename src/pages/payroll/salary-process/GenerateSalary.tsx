/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";

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

export default function GenerateSalary() {
  const [mode, setMode] = useState<"generate" | "hold">("generate");
  const [month, setMonth] = useState<Date | null>(null);
  const [officeType, setOfficeType] = useState(null);
  const [office, setOffice] = useState(null);
  const [postType, setPostType] = useState(null);
  const [searched, setSearched] = useState(false);
  const [verified, setVerified] = useState(false);

  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows |any| undefined>();

  const data: SalaryRow[] = [
    { id: 1, status: "Pending", designation: "Lecturer in Business Studies", employee: "Aditya", basic: 24700, days: 30, earning: 35904, deduction: 4409, net: 31495 }
  ];

  const officeTypes = [{ label: "School", value: "School" }];
  const offices = [{ label: "St Theresa School", value: "ST" }];
  const postTypes = [{ label: "Teaching", value: "Teaching" }];

  const rowExpansion = (row: SalaryRow) => (
    <div className="p-3 bg-gray-50">
      <b>Net Salary ₹ : {row.net}</b>
    </div>
  );

  return (
    <PageLayout title="Generate Monthly Salary">
      <Card>
        <div className="flex gap-6 mb-4">
          <div className="flex items-center gap-2">
            <RadioButton checked={mode === "generate"} onChange={() => setMode("generate")} />
            <label>Generate Salary</label>
          </div>
          <div className="flex items-center gap-2">
            <RadioButton checked={mode === "hold"} onChange={() => setMode("hold")} />
            <label>Hold Salary</label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <label>Select Month*</label>
            <Calendar value={month} onChange={e => setMonth(e.value ?? null)} view="month" dateFormat="MM yy" className="w-full" />
          </div>
          <div>
            <label>Select Office Type*</label>
            <Dropdown options={officeTypes} value={officeType} onChange={e => setOfficeType(e.value)} className="w-full" />
          </div>
          <div>
            <label>Select Office*</label>
            <Dropdown options={offices} value={office} onChange={e => setOffice(e.value)} className="w-full" />
          </div>
          <div>
            <label>Select Type of Post*</label>
            <Dropdown options={postTypes} value={postType} onChange={e => setPostType(e.value)} className="w-full" />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <Button label="Search" icon="pi pi-search" onClick={() => setSearched(true)} />
          <Button label="Clear" icon="pi pi-times" className="p-button-secondary" onClick={() => setSearched(false)} />
        </div>
      </Card>

      {searched && (
        <Card className="mt-4">
          <h3>{mode === "generate" ? "Generate Salary Details" : "Hold Salary Details"}</h3>

          <DataTable
            value={data}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansion}
          >
            <Column expander style={{ width: "3em" }} />
            <Column field="status" header="Salary Status" sortable/>
            <Column field="designation" header="Designation"sortable />
            <Column field="employee" header="Employee"sortable />
            <Column field="basic" header="Basic Salary ₹"sortable />
            <Column field="days" header="Payable Days"sortable />
            <Column field="earning" header="Earning Total ₹" sortable/>
            <Column field="deduction" header="Deduction Total ₹" sortable/>
            <Column header="Details" body={() => <i className="pi pi-eye text-xl" />} />
          </DataTable>

          <div className="flex items-start gap-2 mt-4">
            <Checkbox checked={verified} onChange={e => setVerified(e.checked!)} />
            <span>मै एतद् द्वारा घोषणा करता /करती हूँ, कि मेरे द्वारा समस्त अधिकारियों एवं कर्मचारियों के आय एवं कटौती की राशि पूर्ण सत्यापन के पश्चात् की गयी है |</span>
          </div>

          <div className="flex justify-center mt-4 gap-4">
            {mode === "generate" ? (
              <Button label="Generate Salary" disabled={!verified} />
            ) : (
              <Button label="Hold Salary" disabled={!verified} severity="danger" />
            )}
            <Button label="Clear" className="p-button-secondary" />
          </div>
        </Card>
      )}
    </PageLayout>
  );
}
