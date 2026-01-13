/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

interface DownloadMarksheet {
  id: number;
  rollNo: string;
  examName: string;
  course: string;
  subject: string;
  downloadDate: string;
  format: string;
  remark: string;
}

const examOptions = [
  { label: "Mid-Term Exams", value: "Mid-Term Exams" },
  { label: "End-Term Exams", value: "End-Term Exams" },
  { label: "Practical Exams", value: "Practical Exams" },
];

const listData: DownloadMarksheet[] = [
  {
    id: 1,
    rollNo: "2023100123",
    examName: "Mid-Term Exams",
    course: "B.Tech",
    subject: "Data Structures",
    downloadDate: "28 November, 2024",
    format: "PDF",
    remark: "I lost my marksheet",
  },
  {
    id: 2,
    rollNo: "2023100456",
    examName: "End-Term Exams",
    course: "MCA",
    subject: "Operating Systems",
    downloadDate: "30 November, 2024",
    format: "PDF",
    remark: "Damaged copy",
  },
];

const fieldClass = "w-full h-[42px] text-sm px-3";

const FilterDownloadDuplicateMarksheet: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [expandedRows, setExpandedRows] = useState<any>(null);

  /* ✅ FILTER STATE */
  const [rollNo, setRollNo] = useState("");
  const [university, setUniversity] = useState("");
  const [college, setCollege] = useState("");
  const [course, setCourse] = useState("");
  const [exam, setExam] = useState<string | null>(null);

  return (
    <PageLayout title="Filter For Download Duplicate Marksheet">
      {/* ================= FILTER ================= */}
      <Card className="mb-4">
        <h3 className="font-semibold mb-3">
          Filter For Download Duplicate Marksheet
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Enter Roll Number *</label>
            <InputText
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              className={fieldClass}
              placeholder="Enter Roll Number"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Select University Name *
            </label>
            <InputText
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              className={fieldClass}
              placeholder="Enter University"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Select College Name *</label>
            <InputText
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              className={fieldClass}
              placeholder="Enter College"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Select Course</label>
            <InputText
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              className={fieldClass}
              placeholder="Enter Course"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Select Exam Name *</label>
            <Dropdown
              value={exam}
              options={examOptions}
              onChange={(e) => setExam(e.value)}
              placeholder="Select Exam"
              className={fieldClass}
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            label="Search"
            icon="pi pi-search"
            onClick={() => setShowList(true)}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-secondary"
            onClick={() => setShowList(false)}
          />
        </div>
      </Card>

      {/* ================= LIST ================= */}
      {showList && (
        <Card>
          <h3 className="font-semibold mb-3">
            Download Duplicate Marksheet List
          </h3>

       <DataTable
  value={listData}
  paginator
  rows={10}
  showGridlines
  dataKey="id"
  className="p-datatable-sm"
  expandedRows={expandedRows}
  onRowToggle={(e) => setExpandedRows(e.data)}
  rowExpansionTemplate={(row: DownloadMarksheet) => (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-50 text-sm">
      <div>
        <strong>Subject:</strong> {row.subject}
      </div>
      <div>
        <strong>Date of Download:</strong> {row.downloadDate}
      </div>
      <div>
        <strong>Download Format:</strong>{" "}
        <Tag value={row.format} severity="info" />
      </div>
      <div>
        <strong>Remark:</strong> {row.remark}
      </div>

      <div className="flex items-center gap-2 md:col-span-2">
        <strong>Action:</strong>
        <Button
          label="Download"
          icon="pi pi-download"
          size="small"
          className="px-3 py-1"
        />
      </div>
    </div>
  )}
>
  <Column expander style={{ width: "3rem" }} />
  <Column
    header="Sr No."
    body={(_, opt) => opt.rowIndex + 1}
    style={{ width: '80px' }}
    sortable
  />
  <Column field="rollNo" header="Roll Number" sortable />
  <Column field="examName" header="Exam Name" sortable />
  <Column field="course" header="Course" sortable />
</DataTable>

        </Card>
      )}
    </PageLayout>
  );
};

export default FilterDownloadDuplicateMarksheet;
