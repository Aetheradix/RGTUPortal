/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface SalaryHeadRow {
  id: number;
  headType: string;
  head: string;
  method: string;
  officeType: string;
  office: string;
  postType: string;
  designationType: string;
  designation: string;
  payCommission: string;
  minAmt: number;
  maxAmt: number;
  value: number;
  orderNo: string;
  orderDate: string;
  effectiveDate: string;
}

const tableData: SalaryHeadRow[] = [
  {
    id: 1,
    headType: "Deduction",
    head: "Loan",
    method: "Percentage(%) (Basic + DA)",
    officeType: "Head Office",
    office: "Ministry of Science & Technology",
    postType: "Regular/Permanent",
    designationType: "Teaching",
    designation: "Assistant Professor",
    payCommission: "Fifth Pay Commission",
    minAmt: 1000,
    maxAmt: 50000,
    value: 7000,
    orderNo: "4546",
    orderDate: "10/12/2024",
    effectiveDate: "15/12/2024",
  },
];

const options = [{ label: "Teaching", value: "Teaching" }];
const headTypeOptions = [{ label: "Deduction", value: "Deduction" }];
const payCommissionOptions = [{ label: "Fifth Pay Commission", value: "Fifth Pay Commission" }];
const calcMethodOptions = [{ label: "Percentage(%) (Basic + DA)", value: "Percentage" }];

export default function SalaryHead() {
  const [showResult, setShowResult] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  const rowTemplate = (row: SalaryHeadRow) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm p-3">
      <div><b>Pay Commission:</b> {row.payCommission}</div>
      <div><b>Amount Range:</b> {row.minAmt}-{row.maxAmt}</div>
      <div><b>Earning & Deduction Value:</b> ₹{row.value}</div>
      <div><b>Order Number:</b> {row.orderNo}</div>
      <div><b>Order Date:</b> {row.orderDate}</div>
      <div><b>Effective Date:</b> {row.effectiveDate}</div>
    </div>
  );

  if (showAddForm) {
    return (
      <PageLayout title="Salary Head">
        <div className="flex justify-end mb-3">
          <Button label="Go Back" icon="pi pi-arrow-left" onClick={() => setShowAddForm(false)} />
        </div>

        <Card title="Salary Head">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div><label>Earning & Deduction Head Type*</label><Dropdown options={headTypeOptions} className="w-full" /></div>
            <div><label>Earning & Deduction Head*</label><Dropdown options={options} className="w-full" /></div>
            <div><label>Calculation Method*</label><Dropdown options={calcMethodOptions} className="w-full" /></div>
            <div><label>Office Type*</label><Dropdown options={options} className="w-full" /></div>
            <div><label>Office*</label><Dropdown options={options} className="w-full" /></div>
            <div><label>Type of Post*</label><Dropdown options={options} className="w-full" /></div>
            <div><label>Designation Type*</label><Dropdown options={options} className="w-full" /></div>
            <div><label>Designation*</label><Dropdown options={options} className="w-full" /></div>
            <div><label>Pay Commission*</label><Dropdown options={payCommissionOptions} className="w-full" /></div>
            <div><label>Minimum Amount*</label><InputText className="w-full" /></div>
            <div><label>Maximum Amount*</label><InputText className="w-full" /></div>
            <div><label>Earning & Deduction Value*</label><InputText className="w-full" /></div>
            <div><label>Order Number*</label><InputText className="w-full" /></div>
            <div><label>Order Date*</label><Calendar className="w-full" dateFormat="dd/mm/yy" /></div>
            <div><label>Effective Date*</label><Calendar className="w-full" dateFormat="dd/mm/yy" /></div>
          </div>

          <div className="flex gap-3 mt-4">
            <Button label="Save" />
            <Button label="Clear" className="p-button-secondary" />
          </div>
        </Card>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Salary Head">
      <div className="flex justify-end mb-3">
        <Button label="Add" icon="pi pi-plus" onClick={() => setShowAddForm(true)} />
      </div>

      <Card className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div><label>Office Type*</label><Dropdown options={options} className="w-full" /></div>
          <div><label>Office*</label><Dropdown options={options} className="w-full" /></div>
          <div><label>Type of Post*</label><Dropdown options={options} className="w-full" /></div>
          <div><label>Earning & Deduction Head Type*</label><Dropdown options={headTypeOptions} className="w-full" /></div>
        </div>

        <div className="flex gap-3 mt-4">
          <Button label="Search" onClick={() => setShowResult(true)} />
          <Button label="Clear" className="p-button-secondary" />
        </div>
      </Card>

      {showResult && (
        <Card title="Details">
          <DataTable value={tableData} rowExpansionTemplate={rowTemplate} dataKey="id">
            <Column expander />
            <Column field="headType" header="Head Type"sortable />
            <Column field="head" header="Head" sortable/>
            <Column field="method" header="Calculation Method" sortable/>
            <Column field="officeType" header="Office Type" sortable/>
            <Column field="office" header="Office Name"sortable />
            <Column field="postType" header="Type Of Post" sortable/>
            <Column field="designationType" header="Designation Type" sortable/>
            <Column field="designation" header="Designation" sortable/>
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
}
