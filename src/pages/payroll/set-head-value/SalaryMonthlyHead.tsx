/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

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
  return (
    <PageLayout title="Monthly Head Value">
      <Card className="mb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div>
            <label>Month *</label>
            <Calendar
              view="month"
              dateFormat="MM yy"
              value={form.month}
              onChange={(e) => setForm({ ...form, month: e.value })}
              className="w-full"
            />
          </div>

          <div>
            <label>Office Type*</label>
            <Dropdown
              options={officeTypeOptions}
              value={form.officeType}
              onChange={(e) => setForm({ ...form, officeType: e.value })}
              placeholder="Select"
              className="w-full"
            />
          </div>

          <div>
            <label>Office *</label>
            <Dropdown
              options={officeOptions}
              value={form.office}
              onChange={(e) => setForm({ ...form, office: e.value })}
              placeholder="Select"
              className="w-full"
            />
          </div>

          <div>
            <label>Type of Post *</label>
            <Dropdown
              options={postTypeOptions}
              value={form.postType}
              onChange={(e) => setForm({ ...form, postType: e.value })}
              placeholder="Select"
              className="w-full"
            />
          </div>

          <div>
            <label>Earning & Deduction Head Type *</label>
            <Dropdown
              options={headTypeOptions}
              value={form.headType}
              onChange={(e) => setForm({ ...form, headType: e.value })}
              placeholder="Select"
              className="w-full"
            />
          </div>

          <div>
            <label>Earning & Deduction Head *</label>
            <Dropdown
              options={headOptions}
              value={form.head}
              onChange={(e) => setForm({ ...form, head: e.value })}
              placeholder="Select"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-4">
          <Button label="Search" icon="pi pi-search" onClick={() => setShowResult(true)} />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-secondary"
            onClick={() => {
              setForm({});
              setShowResult(false);
            }}
          />
        </div>
      </Card>
      {showResult && (
        <Card title="Details">
          <DataTable value={rows} paginator rows={10}>
            <Column
              header="All"
              body={(row: any) => (
                <Checkbox
                  checked={checked.includes(row.id)}
                  onChange={() => toggleRow(row.id)}
                />
              )}
            />
        
            <Column field="designation" header="Designation" sortable/>
            <Column field="employee" header="Employee" sortable/>
            <Column
              header="Amount (₹)"
              body={(row: any) => (
                <InputText
                  value={row.amount}
                  onChange={(e) => updateAmount(row.id, e.target.value)}
                  placeholder="Enter Amount"
                  className="w-full"
                />
              )}
            />
          </DataTable>
          <div className="flex gap-3 mt-4">
            <Button label="Save" icon="pi pi-save" />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary" />
          </div>
        </Card>
      )}
    </PageLayout>
  );
}
