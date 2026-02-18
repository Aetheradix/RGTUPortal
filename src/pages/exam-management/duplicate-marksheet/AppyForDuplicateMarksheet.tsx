/* eslint-disable @typescript-eslint/no-explicit-any */
import PageLayout from "@/components/PageLayout";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Card } from "primereact/card";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import React, { useState } from "react";

interface DuplicateMarksheet {
  id: number;
  rollNo: string;
  university: string;
  college: string;
  course: string;
  examType: string;
  issueDate: string;
  applicationDate: string;
  fee: number;
  paymentStatus: string;
  status: string;
  reason: string;
}
const universityOptions = [
  { label: "DAVV, Indore", value: "DAVV" },
  { label: "RGPV, Bhopal", value: "RGPV" },
];

const collegeOptions = [
  { label: "IET DAVV, Indore", value: "IET" },
  { label: "SATI, Vidisha", value: "SATI" },
];

const examOptions = [
  { label: "Mid-Term Exams", value: "Mid-Term Exams" },
  { label: "End-Term Exams", value: "End-Term Exams" },
];

const statusOptions = [
  { label: "Pending", value: "Pending" },
  { label: "Processed", value: "Processed" },
];

const paymentStatusOptions = [
  { label: "Paid", value: "Paid" },
  { label: "Unpaid", value: "Unpaid" },
];

const duplicateList: DuplicateMarksheet[] = [
  {
    id: 1,
    rollNo: "2023100123",
    university: "DAVV, Indore",
    college: "SATI, Vidisha",
    course: "B.Tech",
    examType: "Mid-Term Exams",
    issueDate: "28 Nov 2024",
    applicationDate: "28 Nov 2024",
    fee: 350,
    paymentStatus: "Paid",
    status: "Processed",
    reason: "Lost marksheet",
  },
];

const fieldClass = "w-full h-[42px] text-sm px-3";
const ApplyForDuplicateMarksheet: React.FC = () => {
  const [view, setView] = useState<"list" | "add">("list");
  const [expandedRows, setExpandedRows] = useState<any>(null);

  const [form, setForm] = useState({
    rollNo: "",
    university: null,
    college: null,
    course: "",
    examType: null,
    issueDate: null as Date | null,
    applicationDate: null as Date | null,
    fee: "",
    paymentStatus: null,
    status: null,
    reason: "",
  });

  return (
    <PageLayout title="Apply for Duplicate Marksheet">
      {view === "list" && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">
              Apply for Duplicate Marksheet List
            </h3>
            <Button
              label="Apply for Duplicate Marksheet"
              icon="pi pi-plus"
              onClick={() => setView("add")}
            />
          </div>

          <DataTable
            value={duplicateList}
            paginator
            rows={10}
            showGridlines
            dataKey="id"
            className="p-datatable-sm"
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: DuplicateMarksheet) => (
              <div className="p-4 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div><strong>University:</strong> {row.university}</div>
                <div><strong>College:</strong> {row.college}</div>
                <div><strong>Course:</strong> {row.course}</div>
                <div><strong>Exam Type:</strong> {row.examType}</div>
                <div><strong>Issue Date:</strong> {row.issueDate}</div>
                <div><strong>Application Date:</strong> {row.applicationDate}</div>
                <div><strong>Fee:</strong> ₹{row.fee}</div>
                <div><strong>Payment:</strong> <Tag value={row.paymentStatus} severity="success" /></div>
                <div><strong>Status:</strong> <Tag value={row.status} severity="info" /></div>
                <div className="md:col-span-2"><strong>Reason:</strong> {row.reason}</div>
              </div>
            )}
          >
            <Column expander style={{ width: "3rem" }} />
            <Column
              header="Sr No."
              body={(_, o) => o.rowIndex + 1}
              style={{ width: '80px' }}
              sortable
            />
            <Column field="rollNo" header="Roll Number" sortable />
          </DataTable>

        </Card>
      )}
      {view === "add" && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Apply for Duplicate Marksheet</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView("list")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              {
                label: "Roll Number *",
                element: (
                  <InputText
                    className={fieldClass}
                    value={form.rollNo}
                    onChange={(e) =>
                      setForm({ ...form, rollNo: e.target.value })
                    }
                  />
                ),
              },
              {
                label: "University *",
                element: (
                  <Dropdown
                    className={fieldClass}
                    value={form.university}
                    options={universityOptions}
                    onChange={(e) => setForm({ ...form, university: e.value })}
                  />
                ),
              },
              {
                label: "College *",
                element: (
                  <Dropdown
                    className={fieldClass}
                    value={form.college}
                    options={collegeOptions}
                    onChange={(e) => setForm({ ...form, college: e.value })}
                  />
                ),
              },
              {
                label: "Course *",
                element: (
                  <InputText
                    className={fieldClass}
                    value={form.course}
                    onChange={(e) =>
                      setForm({ ...form, course: e.target.value })
                    }
                  />
                ),
              },
              {
                label: "Exam Name *",
                element: (
                  <Dropdown
                    className={fieldClass}
                    value={form.examType}
                    options={examOptions}
                    onChange={(e) => setForm({ ...form, examType: e.value })}
                  />
                ),
              },
              {
                label: "Date of Issue *",
                element: (
                  <Calendar
                    className={fieldClass}
                    value={form.issueDate}
                    onChange={(e) =>
                      setForm({ ...form, issueDate: e.value ?? null })
                    }
                    showIcon
                  />
                ),
              },
              {
                label: "Application Date *",
                element: (
                  <Calendar
                    className={fieldClass}
                    value={form.applicationDate}
                    onChange={(e) =>
                      setForm({ ...form, applicationDate: e.value ?? null })
                    }
                    showIcon
                  />
                ),
              },
              {
                label: "Duplicate Fee *",
                element: (
                  <InputText
                    className={fieldClass}
                    value={form.fee}
                    onChange={(e) => setForm({ ...form, fee: e.target.value })}
                  />
                ),
              },
              {
                label: "Payment Status *",
                element: (
                  <Dropdown
                    className={fieldClass}
                    value={form.paymentStatus}
                    options={paymentStatusOptions}
                    onChange={(e) =>
                      setForm({ ...form, paymentStatus: e.value })
                    }
                  />
                ),
              },
              {
                label: "Status *",
                element: (
                  <Dropdown
                    className={fieldClass}
                    value={form.status}
                    options={statusOptions}
                    onChange={(e) => setForm({ ...form, status: e.value })}
                  />
                ),
              },
              {
                label: "Reason *",
                element: (
                  <InputText
                    className={fieldClass}
                    value={form.reason}
                    onChange={(e) =>
                      setForm({ ...form, reason: e.target.value })
                    }
                  />
                ),
              },
            ].map((f, i) => (
              <div key={i} className="flex flex-col gap-1">
                <label className="text-sm font-medium">{f.label}</label>
                {f.element}
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button label="Save" icon="pi pi-save" />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
            />
          </div>
        </Card>
      )}
    </PageLayout>
  );
};

export default ApplyForDuplicateMarksheet;
