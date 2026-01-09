/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { RadioButton } from "primereact/radiobutton";
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

const salaryData: SalaryRow[] = [
  {
    id: 1,
    status: "Pending",
    designation: "Lecturer in Business Studies",
    employee: "Aditya",
    basic: 24700,
    days: 30,
    earning: 35904,
    deduction: 4409,
    net: 31495,
  },
];

const officeTypeOptions = [{ label: "Government", value: "govt" }];
const officeOptions = [{ label: "DPI Office", value: "dpi" }];
const postOptions = [{ label: "Teaching", value: "teach" }];

export default function SalaryProccess() {
  const [processType, setProcessType] = useState("final");
  const [showResult, setShowResult] = useState(false);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | any|undefined>();
  const [verified, setVerified] = useState(false);

  const rowExpansionTemplate = (row: SalaryRow) => (
    <div className="p-3 text-sm grid grid-cols-2 gap-2">
      <div><b>Net Salary :</b> ₹{row.net}</div>
      <div><b>Details :</b> Salary breakup details</div>
    </div>
  );

  const getTitle = () => {
    if (processType === "final") return "Generate Final Salary Details";
    if (processType === "supplementry") return "Generate Supplementry Salary Details";
    return "Reset Salary Details";
  };

  const getActionButton = () => {
    if (processType === "reset") return "Reset Salary";
    if (processType === "supplementry") return "Generate Supplementry Salary";
    return "Generate Final Salary";
  };

  return (
    <PageLayout title="Salary Process">

      <Card className="mb-4">
        <h3 className="mb-3">Salary Process</h3>

        <div className="flex gap-4 mb-4">
          <div className="flex items-center gap-2">
            <RadioButton value="final" checked={processType === "final"} onChange={() => setProcessType("final")} />
            <label>Generate Final Salary</label>
          </div>
          <div className="flex items-center gap-2">
            <RadioButton value="supplementry" checked={processType === "supplementry"} onChange={() => setProcessType("supplementry")} />
            <label>Generate Supplementry Salary</label>
          </div>
          <div className="flex items-center gap-2">
            <RadioButton value="reset" checked={processType === "reset"} onChange={() => setProcessType("reset")} />
            <label>Reset Salary</label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <label>Select Month *</label>
            <Calendar view="month" dateFormat="MM yy" className="w-full" />
          </div>
          <div>
            <label>Office Type *</label>
            <Dropdown options={officeTypeOptions} placeholder="Select" className="w-full" />
          </div>
          <div>
            <label>Office *</label>
            <Dropdown options={officeOptions} placeholder="Select" className="w-full" />
          </div>
          <div>
            <label>Type of Post *</label>
            <Dropdown options={postOptions} placeholder="Select" className="w-full" />
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <Button label="Search" icon="pi pi-search" onClick={() => setShowResult(true)} />
          <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary" onClick={() => setShowResult(false)} />
        </div>
      </Card>

      {showResult && (
        <Card>
          <h3 className="mb-3">{getTitle()}</h3>

          <DataTable
            value={salaryData}
            dataKey="id"
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate}
            paginator rows={10}
          >
            <Column expander style={{ width: "3rem" }} />
            <Column header="Sr.No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="status" header="Salary Status" />
            <Column field="designation" header="Designation" />
            <Column field="employee" header="Employee" />
            <Column field="basic" header="Basic Salary ₹" />
            <Column field="days" header="Payable Days" />
            <Column field="earning" header="Earning Total ₹" />
            <Column field="deduction" header="Deduction Total ₹" />
          </DataTable>

          <div className="flex items-start gap-2 mt-4">
            <Checkbox checked={verified} onChange={(e) => setVerified(e.checked!)} />
            <label className="text-sm">
              मै एतद् द्वारा घोषणा करता /करती हूँ, कि मेरे द्वारा समस्त अधिकारियों एवं कर्मचारियों के आय एवं कटौत्रा की राशि
              प्रविष्टि पूर्ण सत्यापन के पश्चात् की गयी है अत: में माह के वेतन की प्रक्रिया करता /करती हूँ |
            </label>
          </div>

          <div className="flex gap-3 mt-4">
            <Button label={getActionButton()} disabled={!verified} />
            <Button label="Clear" className="p-button-secondary" />
          </div>
        </Card>
      )}
    </PageLayout>
  );
}
