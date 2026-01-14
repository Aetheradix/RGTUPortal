import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";

import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

/* ================= TYPES ================= */

interface QuestionPaperRow {
  id: number;
  courseName: string;
  specialization: string;
  semester: string;
  subject: string;
}

interface Option {
  label: string;
  value: string;
}

/* ================= DROPDOWN OPTIONS ================= */

const academicYearOptions: Option[] = [
  { label: "Select", value: "" },
  { label: "2022-23", value: "2022-23" },
  { label: "2023-24", value: "2023-24" },
  { label: "2024-25", value: "2024-25" },
];

const examTypeOptions: Option[] = [
  { label: "Select", value: "" },
  { label: "Internal", value: "Internal" },
  { label: "External", value: "External" },
];

const examNameOptions: Option[] = [
  { label: "Select", value: "" },
  { label: "Mid-Term", value: "Mid-Term" },
  { label: "End-Term", value: "End-Term" },
];

const courseOptions: Option[] = [
  { label: "Select", value: "" },
  { label: "B.Tech", value: "B.Tech" },
  { label: "MBA", value: "MBA" },
  { label: "BCA", value: "BCA" },
];

const specializationOptions: Option[] = [
  { label: "Select", value: "" },
  { label: "CSE", value: "CSE" },
  { label: "ECE", value: "ECE" },
  { label: "Mechanical", value: "Mechanical" },
];

const semesterOptions: Option[] = [
  { label: "Select", value: "" },
  { label: "1st Semester", value: "1st Semester" },
  { label: "2nd Semester", value: "2nd Semester" },
  { label: "3rd Semester", value: "3rd Semester" },
];

const subjectOptions: Option[] = [
  { label: "Select", value: "" },
  { label: "Mathematics", value: "Mathematics" },
  { label: "Data Structures", value: "Data Structures" },
  { label: "DBMS", value: "DBMS" },
];

const questionTypeOptions: Option[] = [
  { label: "MCQ", value: "MCQ" },
  { label: "Short Answer", value: "Short Answer" },
  { label: "Long Answer", value: "Long Answer" },
];

/* ================= COMPONENT ================= */

const AddQuestionPaper: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [showForm, setShowForm] = useState(false);

  /* ---------- SEARCH FILTERS ---------- */
  const [filters, setFilters] = useState({
    academicYear: "",
    examType: "",
    examName: "",
    courseName: "",
    specialization: "",
    semester: "",
  });

  /* ---------- LIST DATA ---------- */
  const questionPaperList: QuestionPaperRow[] = [
    {
      id: 1,
      courseName: "B.Tech",
      specialization: "CSE",
      semester: "1st Semester",
      subject: "Mathematics",
    },
  ];

  /* ---------- FORM DATA ---------- */
  const [formData, setFormData] = useState({
    academicYear: "",
    examType: "",
    examName: "",
    courseName: "",
    specialization: "",
    semester: "",
    subject: "",
    questionType: "",
  });

  const handleSearch = () => setShowList(true);

  const handleClearSearch = () => {
    setFilters({
      academicYear: "",
      examType: "",
      examName: "",
      courseName: "",
      specialization: "",
      semester: "",
    });
    setShowList(false);
  };

  return (
    <PageLayout title="Add Question Paper">
      {/* ================= SEARCH FILTER ================= */}
      {!showForm && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
            <FilterDropdown
              label="Academic Year *"
              value={filters.academicYear}
              options={academicYearOptions}
              onChange={(val) => setFilters({ ...filters, academicYear: val })}
            />
            <FilterDropdown
              label="Exam Type *"
              value={filters.examType}
              options={examTypeOptions}
              onChange={(val) => setFilters({ ...filters, examType: val })}
            />
            <FilterDropdown
              label="Exam Name *"
              value={filters.examName}
              options={examNameOptions}
              onChange={(val) => setFilters({ ...filters, examName: val })}
            />
            <FilterDropdown
              label="Course Name *"
              value={filters.courseName}
              options={courseOptions}
              onChange={(val) => setFilters({ ...filters, courseName: val })}
            />
            <FilterDropdown
              label="Specialization"
              value={filters.specialization}
              options={specializationOptions}
              onChange={(val) =>
                setFilters({ ...filters, specialization: val })
              }
            />
            <FilterDropdown
              label="Semester *"
              value={filters.semester}
              options={semesterOptions}
              onChange={(val) => setFilters({ ...filters, semester: val })}
            />
          </div>

          <div className="flex gap-3 mb-8">
            <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
              onClick={handleClearSearch}
            />
          </div>
        </>
      )}

      {/* ================= LIST ================= */}
      {showList && !showForm && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Question Paper List</h2>
            <Button
              label="Add Question Paper"
              icon="pi pi-plus"
              onClick={() => setShowForm(true)}
            />
          </div>

          <DataTable
            value={questionPaperList}
            paginator
            rows={10}
            showGridlines
            className="p-datatable-sm"
          >
            <Column header="S.No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="courseName" header="Course Name" sortable />
            <Column field="specialization" header="Specialization" sortable />
            <Column field="semester" header="Semester" sortable />
            <Column field="subject" header="Subject" sortable />
          </DataTable>
        </>
      )}

      {/* ================= ADD FORM ================= */}
      {showForm && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Add Question Paper</h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setShowForm(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
            <FormDropdown
              label="Academic Year *"
              options={academicYearOptions}
            />
            <FormDropdown label="Exam Type *" options={examTypeOptions} />
            <FormDropdown label="Exam Name *" options={examNameOptions} />
            <FormDropdown label="Course Name *" options={courseOptions} />
            <FormDropdown
              label="Specialization"
              options={specializationOptions}
            />
            <FormDropdown label="Semester *" options={semesterOptions} />
            <FormDropdown label="Subject *" options={subjectOptions} />
          </div>

          <h3 className="text-lg font-semibold mb-4">Question Paper Pattern</h3>

          <div className="overflow-x-auto mb-6 rounded-lg border">
            <table className="min-w-full text-sm border-collapse">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-3">Total Marks</th>
                  <th className="border p-3">Total Questions</th>
                  <th className="border p-3">MCQ</th>
                  <th className="border p-3">Short Answer</th>
                  <th className="border p-3">Long Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-3 text-center">100</td>
                  <td className="border p-3 text-center">20</td>
                  <td className="border p-3">10 × 1 Mark</td>
                  <td className="border p-3">5 × 6 Marks</td>
                  <td className="border p-3">5 × 12 Marks</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Question Type *
              </label>
              <Dropdown
                options={questionTypeOptions}
                value={formData.questionType}
                onChange={(e) =>
                  setFormData({ ...formData, questionType: e.value })
                }
                className="w-full"
                placeholder="Select"
              />
            </div>
            <div className="flex items-end">
              <Button label="Add" icon="pi pi-plus" />
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button label="Save" icon="pi pi-save" />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
            />
          </div>
        </>
      )}
    </PageLayout>
  );
};

/* ================= REUSABLE DROPDOWNS ================= */

const FilterDropdown = ({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: Option[];
  onChange: (val: string) => void;
}) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <Dropdown
      value={value}
      options={options}
      className="w-full"
      placeholder="Select"
      onChange={(e) => onChange(e.value)}
    />
  </div>
);

const FormDropdown = ({
  label,
  options,
}: {
  label: string;
  options: Option[];
}) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <Dropdown options={options} className="w-full" placeholder="Select" />
  </div>
);

export default AddQuestionPaper;
