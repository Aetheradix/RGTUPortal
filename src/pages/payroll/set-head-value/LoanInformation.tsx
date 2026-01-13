/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dialog } from "primereact/dialog";

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
  const [calcDialog, setCalcDialog] = useState(false);

  const [officeType, setOfficeType] = useState<any>(null);
  const [office, setOffice] = useState<any>(null);
  const [employee, setEmployee] = useState<any>(null);
  const [loanType, setLoanType] = useState<any>(null);
  const [interestDeduction, setInterestDeduction] = useState<any>(null);

  const loanList: LoanRow[] = [
    {
      id: 1,
      officeType: "Division Office",
      officeName: "DEO Office",
      employeeName: "Manish",
      loanHead: "Grain Advance",
      loanAmount: 15000,
      installmentAmount: 1500,
      installmentNo: 10,
      interestAmount: 0,
      year: "2023",
      month: "Nov 2023",
    },
    {
      id: 2,
      officeType: "District Office",
      officeName: "Head Office",
      employeeName: "Poonam",
      loanHead: "Festival Advance",
      loanAmount: 15000,
      installmentAmount: 1500,
      installmentNo: 10,
      interestAmount: 0,
      year: "2023",
      month: "Nov 2023",
    },
  ];

  const expandTemplate = (row: LoanRow) => (
    <div className="p-3 text-sm">
      <b>Loan Deduction Year :</b> {row.year} <br />
      <b>Loan Deduction Month :</b> {row.month}
      <div className="mt-2 flex gap-2">
        <Button label="Edit" icon="pi pi-pencil" />
        <Button label="Delete" icon="pi pi-trash" severity="danger" />
      </div>
    </div>
  );

  return (
    <Card>
      <div className="flex justify-between items-center border-b pb-2 mb-3">
        <h2 className="text-xl font-semibold text-gray-700">
          {showAdd ? "Add Loan Information" : "Loan Information"}
        </h2>

        {showAdd ? (
          <Button
            label="Go Back"
            icon="pi pi-arrow-left"
            className="p-button-text"
            onClick={() => setShowAdd(false)}
          />
        ) : (
          <Button label="Add Loan" icon="pi pi-plus" onClick={() => setShowAdd(true)} />
        )}
      </div>

      {showAdd ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div>
              <label>Employee Code*</label>
              <div className="flex gap-2">
                <InputText className="w-full" placeholder="Enter Employee Code" />
                <Button icon="pi pi-search" />
              </div>
            </div>

            <div>
              <label>Office Type*</label>
              <Dropdown value={officeType} onChange={(e) => setOfficeType(e.value)} options={[{ label: "Head Office", value: "HO" }]} placeholder="Select" className="w-full" />
            </div>

            <div>
              <label>Office*</label>
              <Dropdown value={office} onChange={(e) => setOffice(e.value)} options={[{ label: "Ministry of Tribal Affairs (TED90)", value: "MTA" }]} placeholder="Select" className="w-full" />
            </div>

            <div>
              <label>Employee*</label>
              <Dropdown value={employee} onChange={(e) => setEmployee(e.value)} options={[{ label: "Surya Pratap (HP858)", value: "SP" }]} placeholder="Select" className="w-full" />
            </div>

            <div>
              <label>Loan Type*</label>
              <Dropdown value={loanType} onChange={(e) => setLoanType(e.value)} options={[{ label: "Grain Advance", value: "GA" }]} placeholder="Select" className="w-full" />
            </div>

            <div><label>Loan Amount*</label><InputText className="w-full" /></div>
            <div><label>Installment Amount*</label><InputText className="w-full" /></div>

            <div>
              <label>Interest Deduction*</label>
              <Dropdown value={interestDeduction} onChange={(e) => setInterestDeduction(e.value)} options={[{ label: "Yes", value: "Y" }, { label: "No", value: "N" }]} placeholder="Select" className="w-full" />
            </div>

            <div><label>Interest Amount*</label><InputText className="w-full" /></div>

            <div>
              <label>Deduction Start Date*</label>
              <div className="flex gap-2">
                <Calendar className="w-full" />
                <Button icon="pi pi-calculator" onClick={() => setCalcDialog(true)} />
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <Button label="Save" />
            <Button label="Clear" severity="secondary" />
          </div>
        </>
      ) : (
        <DataTable
          value={loanList}
          dataKey="id"
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
          rowExpansionTemplate={expandTemplate}
          paginator
          rows={10}
        >
          <Column expander style={{ width: "3rem" }} />
          <Column field="officeType" header="Office Type" />
          <Column field="officeName" header="Office Name" />
          <Column field="employeeName" header="Employee Name" />
          <Column field="loanHead" header="Loan Head" />
          <Column field="loanAmount" header="Loan Amount ₹" />
          <Column field="installmentAmount" header="Installment ₹" />
          <Column field="installmentNo" header="Installment No." />
          <Column field="interestAmount" header="Interest ₹" />
        </DataTable>
      )}

      <Dialog header="Loan / ऋण" visible={calcDialog} style={{ width: "60vw" }} onHide={() => setCalcDialog(false)}>
        <DataTable value={[{ id: 1, year: 2024, month: "December", loan: 100000, installment: 13000, interest: 0, balance: 87000 }]}>
          <Column field="year" header="Year" sortable/>
          <Column field="month" header="Month" sortable/>
          <Column field="loan" header="Loan ₹" sortable/>
          <Column field="installment" header="Installment ₹"sortable />
          <Column field="interest" header="Interest ₹" sortable/>
          <Column field="balance" header="Balance ₹"sortable />
        </DataTable>
      </Dialog>
    </Card>
  );
};

export default LoanInformation;
