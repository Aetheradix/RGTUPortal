import { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface SchemeWiseList {
  id: number;
  academicYear: string[];
  schemeTitle: string[];
  instituteCode: string;
  technicalEducation: string;
  instituteName: string;
  enrollmentNumber: string;
  studentName: string;
  gender: string;
}

const ViewSchemeWiseGenerateList: React.FC = () => {
  const [selectedAcademicYear, setSelectedAcademicYear] = useState<string[]>(
    []
  );
  const [selectedTitle, setSelectedTitles] = useState<string[]>([]);
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const academicYears = ["2024-25", "2023-24", "2022-23", "2021-22"];
  const schemeTitles = [
    "Skill Development Scheme",
    "Scholarship for Technical Education",
    "Industry Certification Support",
    "Digital Literacy for Students",
  ];
  const [schemedata] = useState<SchemeWiseList[]>([
    {
      id: 1,
      academicYear: [""],
      schemeTitle: [""],
      instituteCode: "MP-TECH001 / Dr. Rajesh Yadav",
      technicalEducation: "Vocational Education Cluster - Bhopal",
      instituteName:
        "Maulana Azad National Institute of Technology (MANIT), Bhopal",
      enrollmentNumber: "0115CA225588",
      studentName: "Rohit Sharma",
      gender: "Male",
    },
    {
      id: 2,
      academicYear: [""],
      schemeTitle: [""],
      instituteCode: "MP-TECH002 / Ms. Neha Verma",
      technicalEducation: "Skill Development Cluster - Indore",
      instituteName:
        " Institute of Engineering and Technology (IET-DAVV), Indore",
      enrollmentNumber: "0115CA225590",
      studentName: "Priya Patel",
      gender: "Female",
    },
    {
      id: 3,
      academicYear: [""],
      schemeTitle: [""],
      instituteCode: "MP-TECH003 / Mr. Sunil Kumar",
      technicalEducation: "Engineering Cluster - Indore",
      instituteName:
        "Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore",
      enrollmentNumber: "0115CA225587",
      studentName: "Anil Singh",
      gender: "Male",
    },
  ]);
  const handleSearch = () => {
    setShowGrid(true);
  };

  const handleClear = () => {
    setSelectedAcademicYear([]);
    setSelectedTitles([]);
    setShowGrid(false);
  };
  return (
    <PageLayout title="View Scheme Wise Generate List">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              Select Scheme Title <span className="text-red-500">*</span>
            </label>
            <MultiSelect
              id="schemeTitle"
              value={selectedTitle}
              options={schemeTitles}
              onChange={(e) => setSelectedTitles(e.value)}
              className="w-full"
              placeholder="Select Scheme"
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
        {showGrid && (
          <div className="mt-8 animate-fade-in">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 border-t pt-6">
              View Scheme Wise Generate List
            </h2>
            <DataTable
              value={schemedata}
              paginator
              rows={10}
              className="p-datatable-sm"
              responsiveLayout="scroll"
            >
              <Column
                field="id"
                header="S.No"
                sortable
                style={{ width: "80px" }}
              />
              <Column
                field="instituteCode"
                header="Institute Code/Co-Ordinator Name"
                sortable
              />
              <Column
                field="technicalEducation"
                header="Technical Education Cluster/Group"
              />
              <Column
                field="instituteName"
                header="Institute Name/College Name"
              />
              <Column field="enrollmentNumber" header="Enrollment Number" />
              <Column field="studentName" header="Student Name" />
              <Column field="gender" header="Gender" />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ViewSchemeWiseGenerateList;
