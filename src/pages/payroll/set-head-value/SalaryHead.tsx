/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "primereact/button";
import { Table, Dropdown, Input } from "@/ui/shared";
import { DateInput } from "@/ui/shared/Input";

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
const calcMethodOptions = [{ label: "Percentage(%) (Basic + DA)", value: "Percentage(%) (Basic + DA)" }];

export default function SalaryHead() {
  const [showResult, setShowResult] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [form, setForm] = useState<any>({});

 const columns = [
  { field: "headType", header: "Head Type", sortable: true, style: { whiteSpace: "nowrap" } },
  { field: "head", header: "Head", sortable: true, style: { whiteSpace: "nowrap" } },
  { field: "method", header: "Calculation Method", sortable: true, style: { whiteSpace: "nowrap" } },
  { field: "officeType", header: "Office Type" , sortable: true, style: { whiteSpace: "nowrap" } },
  { field: "office", header: "Office Name" , sortable: true, style: { whiteSpace: "nowrap" } },
  { field: "postType", header: "Type Of Post" , sortable: true, style: { whiteSpace: "nowrap" } },
  { field: "designationType", header: "Designation Type" , sortable: true, style: { whiteSpace: "nowrap" } },
  { field: "designation", header: "Designation" , sortable: true, style: { whiteSpace: "nowrap" } },
];


  if (showAddForm) {
    return (
      <PageLayout title="Salary Head">
        <div className="flex justify-end mb-4">
          <Button label="Go Back" icon="pi pi-arrow-left" onClick={() => setShowAddForm(false)} />
        </div>

        <div className="bg-white p-6  shadow-sm">
          <h2 className="text-xl font-bold mb-6">Add Salary Head</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Dropdown label="Head Type" required options={headTypeOptions}
              value={form.headType}
              onChange={(e) => setForm({ ...form, headType: e.value })}
              placeholder="Select" />

            <Dropdown label="Head" required options={options}
              value={form.head}
              onChange={(e) => setForm({ ...form, head: e.value })}
              placeholder="Select" />

            <Dropdown label="Calculation Method" required options={calcMethodOptions}
              value={form.method}
              onChange={(e) => setForm({ ...form, method: e.value })}
              placeholder="Select" />

            <Dropdown label="Office Type" required options={options}
              value={form.officeType}
              onChange={(e) => setForm({ ...form, officeType: e.value })}
              placeholder="Select" />

            <Dropdown label="Office" required options={options}
              value={form.office}
              onChange={(e) => setForm({ ...form, office: e.value })}
              placeholder="Select" />

            <Dropdown label="Post Type" required options={options}
              value={form.postType}
              onChange={(e) => setForm({ ...form, postType: e.value })}
              placeholder="Select" />

            <Dropdown label="Designation Type" required options={options}
              value={form.designationType}
              onChange={(e) => setForm({ ...form, designationType: e.value })}
              placeholder="Select" />

            <Dropdown label="Designation" required options={options}
              value={form.designation}
              onChange={(e) => setForm({ ...form, designation: e.value })}
              placeholder="Select" />

            <Dropdown label="Pay Commission" required options={payCommissionOptions}
              value={form.payCommission}
              onChange={(e) => setForm({ ...form, payCommission: e.value })}
              placeholder="Select" />

            <Input label="Minimum Amount" required />
            <Input label="Maximum Amount" required />
            <Input label="Value" required />
            <Input label="Order Number" required />
            <DateInput label="Order Date" required />
            <DateInput label="Effective Date" required />
          </div>
      <div className="flex gap-3 mt-6">
            
          <Button label="Save" onClick={() => setShowResult(true)} />
          <Button label="Clear" severity="secondary" onClick={() => { setForm({}); setShowResult(false); }} />
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Salary Head">
      <div className="flex justify-end mb-4">
        <Button label="Add Salary Head" icon="pi pi-plus" onClick={() => setShowAddForm(true)} />
      </div>

      <div className="bg-white p-6  shadow-sm mb-6">
        <h3 className="text-lg font-bold mb-4">Search Salary Head</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Dropdown label="Office Type" required options={options}
            value={form.officeType}
            onChange={(e) => setForm({ ...form, officeType: e.value })}
            placeholder="Select" />

          <Dropdown label="Office" required options={options}
            value={form.office}
            onChange={(e) => setForm({ ...form, office: e.value })}
            placeholder="Select" />

          <Dropdown label="Post Type" required options={options}
            value={form.postType}
            onChange={(e) => setForm({ ...form, postType: e.value })}
            placeholder="Select" />

          <Dropdown label="Head Type" required options={headTypeOptions}
            value={form.headType}
            onChange={(e) => setForm({ ...form, headType: e.value })}
            placeholder="Select" />
        </div>

        <div className="flex gap-3 mt-6">
          <Button label="Search" onClick={() => setShowResult(true)} />
          <Button label="Clear" severity="secondary" onClick={() => { setForm({}); setShowResult(false); }} />
        </div>
      </div>

      {showResult && <Table columns={columns} data={tableData} />}
    </PageLayout>
  );
}
