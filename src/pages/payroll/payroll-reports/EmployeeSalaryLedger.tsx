/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const ledgerData = [
  { id: 1, date: "01/01/2023", basic: 50000, da: 10000 },
  { id: 2, date: "01/02/2023", basic: 0, da: 10000 },
  { id: 3, date: "01/03/2023", basic: 50000, da: 0 },
  { id: 4, date: "01/04/2023", basic: 50000, da: 10000 },
  { id: 5, date: "01/05/2023", basic: 50000, da: 10000 },
  { id: 6, date: "01/06/2023", basic: 50000, da: 10000 },
  { id: 7, date: "01/07/2023", basic: 50000, da: 10000 },
];

export default function EmployeeSalaryLedger() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [empCode, setEmpCode] = useState("");
  const [show, setShow] = useState(false);
  const [expandedRows, setExpandedRows] = useState<any>(null);

  const rowExpansionTemplate = (row: any) => {
    const hra = 8000;
    const totalEarning = row.basic + row.da + hra;
    const epf = 6000;
    const pt = 200;
    const lic = 300;
    const loan = 1500;
    const totalDeduction = epf + pt + lic + loan;
    const netSalary = totalEarning - totalDeduction;

    return (
      <div className="p-3 bg-gray-50 rounded text-sm">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div>House Rent Allowance : <b>{hra}</b></div>
          <div>Total Earning (E) : <b>{totalEarning}</b></div>
          <div>EPF : <b>{epf}</b></div>
          <div>Professional Tax : <b>{pt}</b></div>
          <div>LIC Life : <b>{lic}</b></div>
          <div>Loan : <b>{loan}</b></div>
          <div>Total Deduction (D) : <b>{totalDeduction}</b></div>
          <div>Net Salary (S = E - D) : <b>{netSalary}</b></div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Employee Salary Ledger">
      <Card className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-semibold">Select Date *</label>
            <Calendar
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.value as Date)}
              showIcon
              dateFormat="dd/mm/yy"
              className="w-full"
              placeholder="dd/mm/yyyy"
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Enter Employee Code *</label>
            <InputText
              value={empCode}
              onChange={(e) => setEmpCode(e.target.value)}
              className="w-full"
              placeholder="Ex- SW7585"
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <Button label="Search" icon="pi pi-search" onClick={() => setShow(true)} />
          <Button
            label="Clear"
            icon="pi pi-times"
            severity="danger"
            onClick={() => {
              setSelectedDate(null);
              setEmpCode("");
              setShow(false);
            }}
          />
        </div>
      </Card>
      {show && (
        <Card>
          <h3 className="font-semibold mb-2">Employee Salary Ledger Details</h3>
          <DataTable
            value={ledgerData}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate}
            paginator
            rows={10}
            dataKey="id"
          >
            <Column expander />
            <Column field="date" header="Date" sortable/>
            <Column field="basic" header="Basic Salary" sortable/>
            <Column field="da" header="DA"sortable />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
}
