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
];

export default function EmployeeSalaryLedger() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [empCode, setEmpCode] = useState("");
  const [show, setShow] = useState(false);
  const [expandedRows, setExpandedRows] = useState<any>(null);

  const handleClear = () => {
    setSelectedDate(null);
    setEmpCode("");
    setShow(false);
  };

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
      <div className="p-4 bg-gray-50 border-y border-gray-200 animate-fadein">
        <h4 className="text-blue-700 font-bold mb-3 uppercase text-xs tracking-wider">Salary Component Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <div className="p-2 bg-white rounded shadow-sm border">
             <p className="text-gray-500 text-xs">House Rent Allowance</p>
             <p className="font-bold text-gray-800">₹ {hra.toLocaleString('en-IN')}</p>
          </div>
          <div className="p-2 bg-green-50 rounded shadow-sm border border-green-100">
             <p className="text-green-600 text-xs font-semibold">Total Earning (E)</p>
             <p className="font-bold text-green-700 text-lg">₹ {totalEarning.toLocaleString('en-IN')}</p>
          </div>
          <div className="p-2 bg-white rounded shadow-sm border">
             <p className="text-gray-500 text-xs">EPF / PF</p>
             <p className="font-bold text-gray-800">₹ {epf.toLocaleString('en-IN')}</p>
          </div>
          <div className="p-2 bg-white rounded shadow-sm border">
             <p className="text-gray-500 text-xs">Professional Tax</p>
             <p className="font-bold text-gray-800">₹ {pt.toLocaleString('en-IN')}</p>
          </div>
          <div className="p-2 bg-white rounded shadow-sm border">
             <p className="text-gray-500 text-xs">LIC Life</p>
             <p className="font-bold text-gray-800">₹ {lic.toLocaleString('en-IN')}</p>
          </div>
          <div className="p-2 bg-white rounded shadow-sm border">
             <p className="text-gray-500 text-xs">Loan Installment</p>
             <p className="font-bold text-gray-800">₹ {loan.toLocaleString('en-IN')}</p>
          </div>
          <div className="p-2 bg-red-50 rounded shadow-sm border border-red-100">
             <p className="text-red-600 text-xs font-semibold">Total Deduction (D)</p>
             <p className="font-bold text-red-700">₹ {totalDeduction.toLocaleString('en-IN')}</p>
          </div>
          <div className="p-2 bg-blue-600 rounded shadow-sm border border-blue-700">
             <p className="text-blue-100 text-xs font-semibold">Net Salary (E - D)</p>
             <p className="font-bold text-white text-lg">₹ {netSalary.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Employee Salary Ledger / कर्मचारी वेतन लेजर">
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700 tracking-tight">Select Date *</label>
            <Calendar
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.value as Date)}
              showIcon
              dateFormat="dd/mm/yy"
              className="w-full"
              placeholder="dd/mm/yyyy"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700 tracking-tight">Enter Employee Code *</label>
            <InputText
              value={empCode}
              onChange={(e) => setEmpCode(e.target.value)}
              className="w-full"
              placeholder="Ex- SW7585"
            />
          </div>
        </div>
        <div className="flex justify-center md:justify-start gap-3 mt-8 pt-4 border-t">
          <Button 
            label="Search Ledger" 
            icon="pi pi-search" 
            className="bg-blue-600 border-blue-600 px-8" 
            onClick={() => setShow(true)} 
          />
          <Button 
            label="Clear" 
            icon="pi pi-refresh" 
            severity="secondary" 
            outlined 
            className="px-8" 
            onClick={handleClear} 
          />
        </div>
      </Card>

      {show && (
        <div className="animate-fadein">
          <Card className="shadow-sm border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-700 mb-4 px-2">Salary History</h3>
            <DataTable
              value={ledgerData}
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data)}
              rowExpansionTemplate={rowExpansionTemplate}
              paginator
              rows={10}
              dataKey="id"
              className="p-datatable-sm"
              showGridlines
            >
              <Column expander style={{ width: '4rem' }} />
              <Column 
                field="date" 
                header="Payment Date" 
                sortable 
                className="font-semibold"
              />
              <Column 
                field="basic" 
                header="Basic Salary" 
                sortable 
                body={(row) => `₹ ${row.basic.toLocaleString('en-IN')}`}
              />
              <Column 
                field="da" 
                header="DA (Dearness Allowance)" 
                sortable 
                body={(row) => `₹ ${row.da.toLocaleString('en-IN')}`}
              />
            </DataTable>
          </Card>
        </div>
      )}
    </PageLayout>
  );
}