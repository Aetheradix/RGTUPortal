/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Table, Dropdown, Input } from "@/ui/shared";
import { DateInput } from "@/ui/shared/Input";

const headTypeOptions = [{ label: "Deduction", value: "Deduction" }];
const officeTypeOptions = [{ label: "Head Office", value: "Head Office" }];
const officeOptions = [{ label: "Ministry of Science & Technology", value: "MST" }];
const postTypeOptions = [{ label: "Regular/Permanent", value: "Regular" }];
const designationTypeOptions = [{ label: "Teaching", value: "Teaching" }];
const designationOptions = [{ label: "Assistant Professor", value: "AP" }];

const employeeOptions = [
  { id: 1, name: "Vinod Mahane" },
  { id: 2, name: "Anuj Varman" },
];

const mainData = [
  {
    id: 1,
    headType: "Deduction",
    head: "Loan",
    officeType: "Head Office",
    office: "Ministry of Science & Technology",
    postType: "Regular/Permanent",
    designationType: "Teaching",
    designation: "Assistant Professor",
    employee: "Vinod Mahane",
    range: "50000-150000",
    value: 5000,
  },
];

export default function SalaryOptionalHead() {
  const [form, setForm] = useState<any>({});
  const [showResult, setShowResult] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showEmployeeGrid, setShowEmployeeGrid] = useState(false);
  const [checkedEmployees, setCheckedEmployees] = useState<number[]>([]);

  const toggleEmployee = (id: number) => {
    setCheckedEmployees(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const expandTemplate = (row: any) => (
    <div className="p-4 bg-blue-50 rounded-lg m-2 border border-blue-100">
      <span className="font-bold text-blue-800">Earning & Deduction (Value/Amount):</span>
      <span className="ml-2 text-lg">₹{row.value}</span>
    </div>
  );

  const mainColumns = [
    { field: "headType", header: "Head Type" , sortable:true , style: { whiteSpace: "nowrap" } },
    { field: "head", header: "Head" ,sortable:true , style: { whiteSpace: "nowrap" } },
    { field: "officeType", header: "Office Type" ,sortable:true , style: { whiteSpace: "nowrap" } },
    { field: "office", header: "Office Name" ,sortable:true , style: { whiteSpace: "nowrap" } },
    { field: "postType", header: "Type Of Post", sortable:true , style: { whiteSpace: "nowrap" } },
    { field: "designationType", header: "Designation Type" ,sortable:true , style: { whiteSpace: "nowrap" } },
    { field: "designation", header: "Designation", sortable:true , style: { whiteSpace: "nowrap" } },
    { field: "employee", header: "Employee", sortable:true , style: { whiteSpace: "nowrap" } },
    { field: "range", header: "Amount Range" ,sortable:true , style: { whiteSpace: "nowrap" } },
  ];

  const employeeColumns = [
    {
      header: "All",
      body: (row: any) => (
        <Checkbox
          checked={checkedEmployees.includes(row.id)}
          onChange={() => toggleEmployee(row.id)}
        />
      ),
      style: { width: "3rem" }
    },
    { field: "name", header: "Employee / कर्मचारी" },
    { header: "Minimum Amount(₹)", body: () => <Input placeholder="0.00" className="w-full" /> },
    { header: "Maximum Amount(₹)", body: () => <Input placeholder="0.00" className="w-full" /> },
    { header: "Earning & Deduction Value", body: () => <Input placeholder="Enter Value" className="w-full" /> },
    { header: "Status", body: () => <Button label="Ok" severity="success" size="small" /> },
  ];

  if (showAdd) {
    return (
      <PageLayout title="Optional Head">
        <div className="flex justify-end mb-4">
          <Button label="Go Back" icon="pi pi-arrow-left" severity="secondary" onClick={() => setShowAdd(false)} />
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
          <h2 className="text-xl font-bold mb-6  pb-4">Add Optional Head</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Dropdown label="Earning & Deduction Head Type" required options={headTypeOptions}
              value={form.headType} onChange={(e) => setForm({ ...form, headType: e.value })} placeholder="Select" />

            <Dropdown label="Earning & Deduction Head" required options={[{ label: "Loan", value: "Loan" }]}
              value={form.head} onChange={(e) => setForm({ ...form, head: e.value })} placeholder="Select" />

            <Dropdown label="Calculation Method" required options={[{ label: "Percentage", value: "Percentage" }]}
              value={form.method} onChange={(e) => setForm({ ...form, method: e.value })} placeholder="Select" />

            <Dropdown label="Office Type" required options={officeTypeOptions}
              value={form.officeType} onChange={(e) => setForm({ ...form, officeType: e.value })} placeholder="Select" />

            <Dropdown label="Office" required options={officeOptions}
              value={form.office} onChange={(e) => setForm({ ...form, office: e.value })} placeholder="Select" />

            <Dropdown label="Type of Post" required options={postTypeOptions}
              value={form.postType} onChange={(e) => setForm({ ...form, postType: e.value })} placeholder="Select" />

            <Dropdown label="Designation Type" required options={designationTypeOptions}
              value={form.designationType} onChange={(e) => setForm({ ...form, designationType: e.value })} placeholder="Select" />

            <Dropdown label="Designation" required options={designationOptions}
              value={form.designation} onChange={(e) => setForm({ ...form, designation: e.value })} placeholder="Select" />

            <DateInput label="Effective Date" required value={form.effectiveDate}
              onChange={(e) => setForm({ ...form, effectiveDate: e.value })} placeholder="dd/mm/yyyy" />
          </div>

          <div className="flex gap-3 mt-6 pt-4 border-t">
            <Button label="Search Employees" icon="pi pi-search" onClick={() => setShowEmployeeGrid(true)} className="bg-blue-600" />
            <Button label="Clear" severity="secondary" onClick={() => setShowEmployeeGrid(false)} />
          </div>
        </div>

        {showEmployeeGrid && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <h3 className="text-lg font-bold text-gray-700 mb-4">Select Employees</h3>
            <Table columns={employeeColumns} data={employeeOptions} />
          </div>
        )}
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Optional Head">
      <div className="flex justify-end mb-4">
        <Button label="Add Optional Head" icon="pi pi-plus" className="bg-blue-600" onClick={() => setShowAdd(true)} />
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h3 className="text-lg font-bold text-gray-700 mb-4">Search Filters</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Dropdown label="Office Type" required options={officeTypeOptions}
            value={form.officeType} onChange={(e) => setForm({ ...form, officeType: e.value })} placeholder="Select" />

          <Dropdown label="Office" required options={officeOptions}
            value={form.office} onChange={(e) => setForm({ ...form, office: e.value })} placeholder="Select" />

          <Dropdown label="Type of Post" required options={postTypeOptions}
            value={form.postType} onChange={(e) => setForm({ ...form, postType: e.value })} placeholder="Select" />

          <Dropdown label="Head Type" required options={headTypeOptions}
            value={form.headType} onChange={(e) => setForm({ ...form, headType: e.value })} placeholder="Select" />
        </div>

        <div className="flex gap-3 mt-6">
          <Button label="Search" icon="pi pi-search" className="bg-blue-600 px-8" onClick={() => setShowResult(true)} />
          <Button label="Clear Filters" severity="secondary" className="px-8"
            onClick={() => { setForm({}); setShowResult(false); }} />
        </div>
      </div>

      {showResult && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
          <Table title="Optional Head Details" columns={mainColumns} data={mainData}
            rowExpansionTemplate={expandTemplate} dataKey="id" />
        </div>
      )}
    </PageLayout>
  );
}
