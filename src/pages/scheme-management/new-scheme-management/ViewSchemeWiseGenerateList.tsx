import { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

interface SchemeWiseList {
  id: number;
  instituteCode: string;
  technicalEducation: string;
  instituteName: string;
  enrollmentNumber: string;
  studentName: string;
  gender: string;
  category: string;
  benefitAmount: string;
}

const ViewSchemeWiseGenerateList: React.FC = () => {
  const [selectedAcademicYear, setSelectedAcademicYear] = useState<string[]>(
    []
  );
  const [selectedTitle, setSelectedTitles] = useState<string[]>([]);
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const toast = useRef<Toast>(null);

  const academicYears = ["2024-25", "2023-24", "2022-23", "2021-22"];
  const schemeTitles = [
    "Skill Development Scheme",
    "Scholarship for Technical Education",
    "Industry Certification Support",
  ];

  const [schemedata] = useState<SchemeWiseList[]>([
    {
      id: 1,
      instituteCode: "MP-TECH001 / Dr. Rajesh Yadav",
      technicalEducation: "Vocational Education Cluster - Bhopal",
      instituteName:
        "Maulana Azad National Institute of Technology (MANIT), Bhopal",
      enrollmentNumber: "0115CA225588",
      studentName: "Rohit Sharma",
      gender: "Male",
      category: "General",
      benefitAmount: "₹15,000",
    },
    {
      id: 2,
      instituteCode: "MP-TECH002 / Ms. Neha Verma",
      technicalEducation: "Skill Development Cluster - Indore",
      instituteName:
        "Institute of Engineering and Technology (IET-DAVV), Indore",
      enrollmentNumber: "0115CA225590",
      studentName: "Priya Patel",
      gender: "Female",
      category: "OBC",
      benefitAmount: "₹20,000",
    },
    {
      id: 3,
      instituteCode: "MP-TECH003 / Mr. Sunil Kumar",
      technicalEducation: "Engineering Cluster - Indore",
      instituteName:
        "Shri Govindram Seksaria Institute of Technology and Science (SGSITS), Indore",
      enrollmentNumber: "0115CA225587",
      studentName: "Anil Singh",
      gender: "Male",
      category: "SC",
      benefitAmount: "₹18,000",
    },
  ]);

  const handleSearch = () => {
    if (selectedAcademicYear.length === 0 || selectedTitle.length === 0) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select Academic Year and Scheme Title",
        life: 3000,
      });
      return;
    }
    setShowGrid(true);
  };

  const handleGenerateList = () => {
    confirmDialog({
      message: "Are you sure you want to generate the list?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: "p-button-primary",
      accept: () => {
        toast.current?.show({
          severity: "success",
          summary: "Success",
          detail: "List Generated Successfully",
          life: 3000,
        });
      },
    });
  };

  const handleClear = () => {
    setSelectedAcademicYear([]);
    setSelectedTitles([]);
    setShowGrid(false);
  };

  return (
    <PageLayout title="View Scheme Wise Generate List">
      <Toast ref={toast} />
      <ConfirmDialog />

      <div className="space-y-6">
        {/* Selection Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Select Academic Year <span className="text-red-500">*</span>
            </label>
            <MultiSelect
              value={selectedAcademicYear}
              options={academicYears}
              onChange={(e) => setSelectedAcademicYear(e.value)}
              placeholder="Select"
              className="w-full"
              display="chip"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">
              Select Scheme Title <span className="text-red-500">*</span>
            </label>
            <MultiSelect
              value={selectedTitle}
              options={schemeTitles}
              onChange={(e) => setSelectedTitles(e.value)}
              placeholder="Select"
              className="w-full"
              display="chip"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
          <Button
            label="Reset"
            icon="pi pi-refresh"
            className="p-button-outlined"
            onClick={handleClear}
          />
        </div>

        {showGrid && (
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-6 text-gray-700 ">
              View Scheme Wise Generate List
            </h3>
            <DataTable
              value={schemedata}
              paginator
              rows={10}
              className="p-datatable-sm shadow-1"
            >
              <Column field="id" header="Sr No." style={{ width: "80px" }} />
              <Column
                field="instituteCode"
                header="Institute Code/Coordinator Name"
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
              <Column
                field="enrollmentNumber"
                header="Enrollment Number"
                sortable
              />
              <Column field="studentName" header="Student Name" sortable />
              <Column field="gender" header="Gender" />
              <Column field="category" header="Category" />
              <Column field="benefitAmount" header="Scheme Benefit Amount" />
              <Column
                header="ViewMore"
                style={{ textAlign: "center" }}
                body={() => (
                  <Button
                    icon="pi pi-eye"
                    className="p-button-rounded p-button-text p-button-primary bg-indigo-50"
                  />
                )}
              />
            </DataTable>

            {/* Bottom Action Buttons matching the image */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                label="Generate List"
                className="p-button-primary bg-indigo-600 border-none px-8"
                onClick={handleGenerateList}
              />
              <Button
                label="Clear"
                className="p-button-danger bg-red-100 text-red-600 border-red-200 px-8"
                onClick={handleClear}
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ViewSchemeWiseGenerateList;
