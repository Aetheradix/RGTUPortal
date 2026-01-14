import { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Toast } from "primereact/toast";

interface StudentProfile {
  id: number;
  samagraId: string;
  studentName: string;
  fatherName: string;
  dob: string;
  gender: string;
  category: string;
  semester: string;
  lastSemesterCgpa: string;
}

const StudentProfileSubManagement: React.FC = () => {
  const [selectedAcademicYear, setSelectedAcademicYear] = useState<string[]>(
    []
  );
  const [selectedSemester, setSelectedSemesters] = useState<string[]>([]);
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const toast = useRef<Toast>(null);

  const academicYears = ["2024-25", "2023-24", "2022-23", "2021-22"];
  const schemeTitles = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

  const [data] = useState<StudentProfile[]>([
    {
      id: 1,
      samagraId: "1111222233",
      studentName: "Rajesh Kumar",
      fatherName: "Sunil Kumar",
      dob: "2002-09-15",
      gender: "Male",
      category: "OBC",
      semester: "5th",
      lastSemesterCgpa: "78%",
    },
    {
      id: 2,
      samagraId: "1111222234",
      studentName: "Anjali Sharma",
      fatherName: "Sunil Kumar",
      dob: "2002-09-15",
      gender: "Female",
      category: "General",
      semester: "5th",
      lastSemesterCgpa: "82%",
    },
  ]);

  const handleSearch = () => {
    if (selectedAcademicYear.length === 0 || selectedSemester.length === 0) {
      toast.current?.show({
        severity: "error",
        summary: "Validation Error",
        detail: "Please select Academic Year and Semester before searching.",
        life: 3000,
      });
      return;
    }
    setShowGrid(true);
    toast.current?.show({
      severity: "success",
      summary: "Search Completed",
      detail: "Details List has been updated.",
      life: 3000,
    });
  };

  const handleClear = () => {
    setSelectedAcademicYear([]);
    setSelectedSemesters([]);
    setShowGrid(false);
  };

  return (
    <PageLayout title="Student Profile Management">
      <Toast ref={toast} />

      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label
              htmlFor="academicYears"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Academic Years <span className="text-red-500">*</span>
            </label>
            <MultiSelect
              id="academicYears"
              value={selectedAcademicYear}
              options={academicYears}
              onChange={(e) => setSelectedAcademicYear(e.value)}
              className="w-full"
              placeholder="Select Academic Year"
              display="chip"
            />
          </div>
          <div>
            <label
              htmlFor="schemeTitle"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Select Semester <span className="text-red-500">*</span>
            </label>
            <MultiSelect
              id="users"
              value={selectedSemester}
              options={schemeTitles}
              onChange={(e) => setSelectedSemesters(e.value)}
              className="w-full"
              placeholder="Select Semester"
              display="chip"
            />
          </div>
        </div>
        <div className="flex gap-3">
          <Button
            type="button"
            label="Search"
            icon="pi pi-search"
            className="p-button-primary px-6"
            onClick={handleSearch}
          />
          <Button
            type="button"
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-outlined px-6"
            onClick={handleClear}
          />
        </div>
      </form>

      {showGrid && (
        <div className="mt-8 animate-fade-in">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-t pt-6">
            Details List
          </h2>
          <DataTable
            value={data}
            paginator
            rows={10}
            className="p-datatable-sm shadow-1"
            responsiveLayout="scroll"
          >
            <Column
              field="id"
              header="Sr. No."
              sortable
              style={{ width: "80px" }}
            />
            <Column field="samagraId" header="Student Samagra Id" sortable />
            <Column field="studentName" header="Student Name" sortable />
            <Column field="fatherName" header="Father's Name" sortable />
            <Column field="dob" header="DOB" sortable />
            <Column field="gender" header="Gender" sortable />
            <Column field="category" header="Category" sortable />
            <Column field="semester" header="Semester" sortable />
            <Column
              field="lastSemesterCgpa"
              header="Last Semester CGPA"
              sortable
            />
          </DataTable>
        </div>
      )}
    </PageLayout>
  );
};

export default StudentProfileSubManagement;
