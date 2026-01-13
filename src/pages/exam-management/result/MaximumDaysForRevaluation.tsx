/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";

interface RevaluationConfig {
  id: number;
  examName: string;
  courseName: string;
  academicYear: string;
  semester: string;
  maxDays: number;
  startDate: string;
  endDate: string;
  status: string;
}

const examOptions = [
  { label: "Select", value: "" },
  { label: "Mid-Semester", value: "Mid-Semester" },
  { label: "End-Semester", value: "End-Semester" },
  { label: "Practical-Exam", value: "Practical-Exam" },
];

const courseOptions = [
  { label: "Select", value: "" },
  { label: "B.Tech", value: "B.Tech" },
  { label: "M.Tech", value: "M.Tech" },
  { label: "BCA", value: "BCA" },
];

const academicYearOptions = [
  { label: "Select", value: "" },
  { label: "2023-24", value: "2023-24" },
  { label: "2024-25", value: "2024-25" },
];

const semesterOptions = [
  { label: "Select", value: "" },
  { label: "1st", value: "1st" },
  { label: "2nd", value: "2nd" },
  { label: "3rd", value: "3rd" },
];

const revaluationList: RevaluationConfig[] = [
  {
    id: 1,
    examName: "Mid-Semester",
    courseName: "B.Tech",
    academicYear: "2023-24",
    semester: "1st",
    maxDays: 10,
    startDate: "2024-01-01",
    endDate: "2024-01-10",
    status: "Active",
  },
  {
    id: 2,
    examName: "End-Semester",
    courseName: "M.Tech",
    academicYear: "2024-25",
    semester: "2nd",
    maxDays: 15,
    startDate: "2024-02-01",
    endDate: "2024-02-15",
    status: "Active",
  },
  {
    id: 3,
    examName: "Practical-Exam",
    courseName: "BCA",
    academicYear: "2023-24",
    semester: "3rd",
    maxDays: 7,
    startDate: "2024-03-05",
    endDate: "2024-03-12",
    status: "Active",
  },
];

const MaximumDaysForRevaluation: React.FC = () => {
  const [view, setView] = useState<"list" | "add">("list");
  const [expandedRows, setExpandedRows] = useState<any>(null);

  // Form state
  const [examName, setExamName] = useState<string | null>(null);
  const [courseName, setCourseName] = useState<string | null>(null);
  const [academicYear, setAcademicYear] = useState<string | null>(null);
  const [semester, setSemester] = useState<string | null>(null);
  const [maxDays, setMaxDays] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [status, setStatus] = useState<string | null>("Active");

  return (
    <PageLayout title="Maximum Days for Revaluation">
      {/* LIST VIEW */}
      {view === "list" && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              Maximum Days for Revaluation List
            </h3>
            <Button
              label="Add Maximum Days for Revaluation"
              icon="pi pi-plus"
              onClick={() => setView("add")}
            />
          </div>

          <DataTable
            value={revaluationList}
            paginator
            rows={10}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            dataKey="id"
            rowExpansionTemplate={(row: RevaluationConfig) => (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50">
                <div>
                  <strong>Semester:</strong> {row.semester}
                </div>
                <div>
                  <strong>Max Days Allowed:</strong> {row.maxDays}
                </div>
                <div>
                  <strong>Application Start Date:</strong> {row.startDate}
                </div>
                <div>
                  <strong>Application End Date:</strong> {row.endDate}
                </div>
                <div>
                  <strong>Status:</strong>{" "}
                  <Tag value={row.status} severity="success" />
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: "3rem" }} />
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} sortable />
            <Column field="examName" header="Exam Name" sortable />
            <Column field="courseName" header="Course Name" sortable />
            <Column field="academicYear" header="Academic Year" sortable />
          </DataTable>
        </Card>
      )}

      {/* ADD VIEW */}
      {view === "add" && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              Add Maximum Days for Revaluation
            </h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView("list")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block mb-1">Select Exam Name *</label>
              <Dropdown
                options={examOptions}
                value={examName}
                onChange={(e) => setExamName(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Select Course *</label>
              <Dropdown
                options={courseOptions}
                value={courseName}
                onChange={(e) => setCourseName(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Select Academic Year *</label>
              <Dropdown
                options={academicYearOptions}
                value={academicYear}
                onChange={(e) => setAcademicYear(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Select Semester *</label>
              <Dropdown
                options={semesterOptions}
                value={semester}
                onChange={(e) => setSemester(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Enter Maximum Days Allowed *</label>
              <InputText
                value={maxDays}
                onChange={(e) => setMaxDays(e.target.value)}
                placeholder="Enter Maximum Days Allowed"
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Application Start Date *</label>
              <Calendar
                value={startDate}
                onChange={(e) => setStartDate(e.value ?? null)}
                placeholder="dd/mm/yyyy"
                dateFormat="dd/mm/yy"
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Application End Date *</label>
              <Calendar
                value={endDate}
                onChange={(e) => setEndDate(e.value ?? null)}
                placeholder="dd/mm/yyyy"
                dateFormat="dd/mm/yy"
                className="w-full"
              />
            </div>

            <div>
              <label className="block mb-1">Status *</label>
              <Dropdown
                options={[
                  { label: "Active", value: "Active" },
                  { label: "Inactive", value: "Inactive" },
                ]}
                value={status}
                onChange={(e) => setStatus(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>
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

export default MaximumDaysForRevaluation;
