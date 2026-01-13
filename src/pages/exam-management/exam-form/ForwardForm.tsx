import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const dummyList = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  enrollment: `0501CS${100 + i}C00${i}`,
  name: [
    "Aman Kumar",
    "Priya Mehta",
    "Sandeep Singh",
    "Neha Patel",
    "Rakesh Yadav",
    "Anjali Verma",
    "Vikas Sharma",
    "Sonali Gupta",
    "Deepak Raj",
    "Kiran Mehta",
  ][i],
  course: "Computer Science",
  specialization: "Artificial Intelligence",
  semester: "1st Semester",
}));

const Filters: React.FC = () => {
  const [academicYear, setAcademicYear] = useState<string | null>(null);
  const [examType, setExamType] = useState<string | null>(null);
  const [examName, setExamName] = useState<string | null>(null);
  const [courseName, setCourseName] = useState<string | null>(null);
  const [specialization, setSpecialization] = useState<string | null>(null);
  const [semester, setSemester] = useState<string | null>(null);

  const dropdownOptions = {
    academicYears: [
      { label: "2023-24", value: "2023-24" },
      { label: "2024-25", value: "2024-25" },
    ],
    examTypes: [
      { label: "Mid-Term", value: "Mid-Term" },
      { label: "End-Term", value: "End-Term" },
    ],
    examNames: [
      { label: "Mid-Term CS", value: "Mid-Term CS" },
      { label: "End-Term CS", value: "End-Term CS" },
    ],
    courses: [
      { label: "Computer Science", value: "Computer Science" },
      { label: "Electrical Engineering", value: "Electrical Engineering" },
    ],
    specializations: [
      { label: "AI", value: "AI" },
      { label: "ML", value: "ML" },
    ],
    semesters: [
      { label: "1st Semester", value: "1st Semester" },
      { label: "2nd Semester", value: "2nd Semester" },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Academic Year*
        </label>
        <Dropdown
          placeholder="Select"
          options={dropdownOptions.academicYears}
          value={academicYear}
          onChange={(e) => setAcademicYear(e.value)}
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Exam Type*
        </label>
        <Dropdown
          placeholder="Select"
          options={dropdownOptions.examTypes}
          value={examType}
          onChange={(e) => setExamType(e.value)}
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Exam Name*
        </label>
        <Dropdown
          placeholder="Select"
          options={dropdownOptions.examNames}
          value={examName}
          onChange={(e) => setExamName(e.value)}
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Course Name*
        </label>
        <Dropdown
          placeholder="Select"
          options={dropdownOptions.courses}
          value={courseName}
          onChange={(e) => setCourseName(e.value)}
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Specialization*
        </label>
        <Dropdown
          placeholder="Select"
          options={dropdownOptions.specializations}
          value={specialization}
          onChange={(e) => setSpecialization(e.value)}
          className="w-full"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Semester*
        </label>
        <Dropdown
          placeholder="Select"
          options={dropdownOptions.semesters}
          value={semester}
          onChange={(e) => setSemester(e.value)}
          className="w-full"
        />
      </div>
    </div>
  );
};

const ForwardFormsPrincipal: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [showForwardList, setShowForwardList] = useState(false);

  return (
    <PageLayout title="Forward Forms">
      {!addMode && (
        <Card className="shadow-sm border border-gray-200 rounded-lg">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-semibold">Forward Forms</h3>
            <Button
              label="Add Forward Form"
              icon="pi pi-plus"
              className="p-button-primary"
              onClick={() => {
                setAddMode(true);
                setShowList(false);
              }}
            />
          </div>

          <Filters />

          <div className="flex gap-3 mb-6">
            <Button
              label="Search"
              icon="pi pi-search"
              onClick={() => setShowList(true)}
            />
            <Button
              label="Clear"
              className="p-button-secondary"
              onClick={() => setShowList(false)}
            />
          </div>

          {showList && (
            <DataTable
              value={dummyList}
              paginator
              rows={10}
              showGridlines
              className="p-datatable-sm mt-4"
            >
              <Column
                header="Sr No."
                body={(_, options) => options.rowIndex + 1}
                style={{ width: "80px" }}
              />
              <Column field="enrollment" header="Enrollment No." sortable />
              <Column field="name" header="Student Name" sortable />
              <Column field="course" header="Course Name" sortable />
              <Column field="specialization" header="Specialization" sortable />
            </DataTable>
          )}
        </Card>
      )}

      {addMode && (
        <Card className="shadow-sm border border-gray-200 rounded-lg">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-semibold">
              Add Forward Forms Principal
            </h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => {
                setAddMode(false);
                setShowForwardList(false);
              }}
            />
          </div>

          <Filters />

          <div className="flex gap-3 mb-6">
            <Button
              label="Search"
              icon="pi pi-search"
              onClick={() => setShowForwardList(true)}
            />
            <Button
              label="Clear"
              className="p-button-secondary"
              onClick={() => setShowForwardList(false)}
            />
          </div>

          {showForwardList && (
            <>
              <div className="flex justify-end mb-3">
                <Button
                  label="Add Forward Form"
                  icon="pi pi-plus"
                  className="p-button-primary"
                  onClick={() => {}}
                />
              </div>

              <h4 className="text-md font-semibold mb-3">Forward Forms</h4>

              <DataTable
                value={dummyList}
                paginator
                rows={10}
                className="p-datatable-sm mt-4"
                showGridlines
              >
                <Column
                  header="Sr No."
                  body={(_, options) => options.rowIndex + 1}
                  style={{ width: "80px" }}
                />
                <Column field="enrollment" header="Enrollment No." sortable />
                <Column field="name" header="Student Name" sortable />
                <Column field="course" header="Course Name" sortable />
                <Column
                  field="specialization"
                  header="Specialization"
                  sortable
                />
                <Column field="semester" header="Semester" sortable />
                <Column
                  header="Action"
                  body={() => (
                    <div className="flex gap-2">
                      <Button
                        label="Forward"
                        size="small"
                        className="p-button-success p-button-rounded p-button-sm"
                      />
                    </div>
                  )}
                />
              </DataTable>
            </>
          )}
        </Card>
      )}
    </PageLayout>
  );
};

export default ForwardFormsPrincipal;
