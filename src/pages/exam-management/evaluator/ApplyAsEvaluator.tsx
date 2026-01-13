/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Tag } from "primereact/tag";
import { Card } from "primereact/card";

interface Evaluator {
  id: number;
  name: string;
  email: string;
  mobile: string;
  role: string;
  qualification: string;
  experience: string;
  status: string;
}

const roleOptions = [
  { label: "Select Role", value: "" },
  { label: "Junior Evaluator", value: "Junior Evaluator" },
  { label: "Senior Evaluator", value: "Senior Evaluator" },
];

const qualificationOptions = [
  { label: "Select Qualification", value: "" },
  { label: "Bachelor's Degree", value: "Bachelor's Degree" },
  { label: "Master's Degree", value: "Master's Degree" },
];

const experienceOptions = [
  { label: "Select Experience", value: "" },
  { label: "0-1 years", value: "0-1 years" },
  { label: "2-3 years", value: "2-3 years" },
  { label: "4+ years", value: "4+ years" },
];

const evaluatorList: Evaluator[] = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    mobile: "9876543210",
    role: "Junior Evaluator",
    qualification: "Bachelor's Degree",
    experience: "2-3 years",
    status: "Active",
  },
  {
    id: 2,
    name: "Anjali Verma",
    email: "anjali.verma@example.com",
    mobile: "8765432109",
    role: "Junior Evaluator",
    qualification: "Bachelor's Degree",
    experience: "2-3 years",
    status: "Active",
  },
  {
    id: 3,
    name: "Vikram Singh",
    email: "vikram.singh@example.com",
    mobile: "7654321098",
    role: "Junior Evaluator",
    qualification: "Bachelor's Degree",
    experience: "2-3 years",
    status: "Active",
  },
];

const EvaluatAsApply: React.FC = () => {
  const [view, setView] = useState<"list" | "add">("list");
  const [expandedRows, setExpandedRows] = useState<any>(null);

  /* ✅ Add form state */
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    role: null as string | null,
    qualification: null as string | null,
    experience: null as string | null,
  });

  return (
    <PageLayout title="Evaluat As Apply">
      {/* ================= LIST ================= */}
      {view === "list" && (
        <Card className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Evaluat As Apply List</h3>
            <Button
              label="Add Evaluat As Apply"
              icon="pi pi-plus"
              onClick={() => setView("add")}
            />
          </div>

 <DataTable
  value={evaluatorList}
  paginator
  rows={10}
  showGridlines
  dataKey="id"
  className="p-datatable-sm"
  expandedRows={expandedRows}
  onRowToggle={(e) => setExpandedRows(e.data)}
  rowExpansionTemplate={(row: Evaluator) => (
    <Card className="p-4 bg-gray-50 text-sm mb-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 font-medium">Role</label>
          <div>{row.role}</div>
        </div>
        <div>
          <label className="block mb-1 font-medium">Qualification</label>
          <div>{row.qualification}</div>
        </div>
        <div>
          <label className="block mb-1 font-medium">Experience</label>
          <div>{row.experience}</div>
        </div>
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <Tag value={row.status} severity="success" />
        </div>
      </div>
    </Card>
  )}
>
  <Column expander style={{ width: "3rem" }} />
  <Column
    header="Sr No."
    body={(_, opt) => opt.rowIndex + 1}
    style={{ width: "80px" }}
    sortable
  />
  <Column field="name" header="Evaluator Name" sortable />
  <Column field="email" header="Email ID" sortable />
  <Column field="mobile" header="Mobile Number" sortable />
</DataTable>

        </Card>
      )}

      {/* ================= ADD ================= */}
      {view === "add" && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Add Evaluat As Apply</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView("list")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block mb-1">Evaluator Name *</label>
              <InputText
                className="w-full"
                placeholder="Enter Evaluator Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block mb-1">Email ID *</label>
              <InputText
                className="w-full"
                placeholder="Enter Email ID"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block mb-1">Mobile Number *</label>
              <InputText
                className="w-full"
                placeholder="Enter Mobile Number"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              />
            </div>

            <div>
              <label className="block mb-1">Role *</label>
              <Dropdown
                className="w-full"
                options={roleOptions}
                placeholder="Select Role"
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.value })}
              />
            </div>

            <div>
              <label className="block mb-1">Qualifications *</label>
              <Dropdown
                className="w-full"
                options={qualificationOptions}
                placeholder="Select Qualification"
                value={form.qualification}
                onChange={(e) => setForm({ ...form, qualification: e.value })}
              />
            </div>

            <div>
              <label className="block mb-1">Experience</label>
              <Dropdown
                className="w-full"
                options={experienceOptions}
                placeholder="Select Experience"
                value={form.experience}
                onChange={(e) => setForm({ ...form, experience: e.value })}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button label="Save" icon="pi pi-save" />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
              onClick={() =>
                setForm({
                  name: "",
                  email: "",
                  mobile: "",
                  role: null,
                  qualification: null,
                  experience: null,
                })
              }
            />
          </div>
        </Card>
      )}
    </PageLayout>
  );
};

export default EvaluatAsApply;
