/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Table, Dropdown, Input } from "@/ui/shared";
import { DateInput } from "@/ui/shared/Input";

const officeTypeOptions = [{ label: "Head Office", value: "Head Office" }];
const officeOptions = [{ label: "Ministry of Science & Technology", value: "MST" }];
const postTypeOptions = [{ label: "Regular/Permanent", value: "Regular" }];
const headTypeOptions = [{ label: "Deduction", value: "Deduction" }];
const headOptions = [{ label: "Loan", value: "Loan" }];

const employeeData = [
  { id: 1, designation: "Asstt Director", employee: "Vinod Mahane", amount: "" },
  { id: 2, designation: "HOD", employee: "Anuj Varman", amount: "" },
];

export default function SalaryMonthlyHead() {
  const [form, setForm] = useState<any>({});
  const [showResult, setShowResult] = useState(false);
  const [checked, setChecked] = useState<number[]>([]);
  const [rows, setRows] = useState(employeeData);

  const toggleRow = (id: number) => {
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const updateAmount = (id: number, value: string) => {
    setRows((prev) =>
      prev.map((r) => (r.id === id ? { ...r, amount: value } : r))
    );
  };

  const columns = [
    {
      field: "selection",
      header: "All",
      body: (row: any) => (
        <Checkbox
          checked={checked.includes(row.id)}
          onChange={() => toggleRow(row.id)}
        />
      ),
      style: { width: "3rem" }
    },
    { 
      field: "designation", 
      header: "Designation", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
    { 
      field: "employee", 
      header: "Employee", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
    {
      field: "amount",
      header: "Amount (₹)",
      style: { whiteSpace: "nowrap", minWidth: "200px" },
      body: (row: any) => (
        <Input
          value={row.amount}
          onChange={(e: any) => updateAmount(row.id, e.target.value)}
          placeholder="Enter Amount"
          className="w-full"
        />
      ),
    },
  ];

  return (
    <PageLayout title="Monthly Head Value">

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
        <h2 className="text-xl font-bold  mb-6  pb-4">Monthly Head Search</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <DateInput
            label="Month"
            required
            view="month"
            dateFormat="MM yy"
            value={form.month}
            onChange={(e) => setForm({ ...form, month: e.value })}
            placeholder="Select Month"
          />

          <Dropdown
            label="Office Type"
            required
            options={officeTypeOptions}
            value={form.officeType}
            onChange={(e) => setForm({ ...form, officeType: e.value })}
            placeholder="Select Office Type"
          />

          <Dropdown
            label="Office"
            required
            options={officeOptions}
            value={form.office}
            onChange={(e) => setForm({ ...form, office: e.value })}
            placeholder="Select Office"
          />

          <Dropdown
            label="Type of Post"
            required
            options={postTypeOptions}
            value={form.postType}
            onChange={(e) => setForm({ ...form, postType: e.value })}
            placeholder="Select Post Type"
          />

          <Dropdown
            label="Earning & Deduction Head Type"
            required
            options={headTypeOptions}
            value={form.headType}
            onChange={(e) => setForm({ ...form, headType: e.value })}
            placeholder="Select Head Type"
          />

          <Dropdown
            label="Earning & Deduction Head"
            required
            options={headOptions}
            value={form.head}
            onChange={(e) => setForm({ ...form, head: e.value })}
            placeholder="Select Head"
          />
        </div>

        <div className="flex gap-3 mt-6 pt-4 border-t">
          <Button label="Search" icon="pi pi-search" className="bg-blue-600 px-8" onClick={() => setShowResult(true)} />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            severity="secondary"
            className="px-8"
            onClick={() => {
              setForm({});
              setShowResult(false);
            }}
          />
        </div>
      </div>

      {showResult && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
          <h3 className="text-lg font-bold text-gray-700 mb-4">Employee Head Details</h3>
          
          <Table 
            columns={columns} 
            data={rows} 
            showPagination 
            rowsPerPage={10}
          />

          <div className="flex gap-3 mt-6 pt-4 border-t">
            <Button label="Save Details" icon="pi pi-save" className="bg-green-600 px-8" />
            <Button label="Reset Table" icon="pi pi-refresh" severity="danger" className="px-8" />
          </div>
        </div>
      )}
    </PageLayout>
  );
}