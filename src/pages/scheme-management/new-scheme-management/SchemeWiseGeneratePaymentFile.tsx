import { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

interface SchemeWisePaymentFile {
  id: number;
  academicYear: string[];
  schemeTitle: string[];
  instituteCode: string;
  technicalEducation: string;
  instituteName: string;
  enrollmentNumber: string;
  studentName: string;
  amount: string;
  bankName: string;
  ifsc: string;
  accountNumber: string;
}

const SchemeWiseGeneratePaymentFile: React.FC = () => {
  const [selectedAcademicYear, setSelectedAcademicYear] = useState<string[]>(
    []
  );
  const [selectedTitle, setSelectedTitles] = useState<string[]>([]);
  const [showGrid, setShowGrid] = useState(false);

  const academicYears = ["2024-25", "2023-24", "2022-23", "2021-22"];
  const schemeTitles = [
    "Skill Development Scheme",
    "Scholarship for Technical Education",
    "Industry Certification Support",
    "Digital Literacy for Students",
  ];

  const [schemedata] = useState<SchemeWisePaymentFile[]>([
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
      amount: " ₹15,000",
      bankName: "State Bank of India",
      ifsc: "SBI001234",
      accountNumber: "1234567890",
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
      amount: "₹20,000",
      bankName: "HDFC Bank",
      ifsc: "HDFC003456 ",
      accountNumber: "9876543210",
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
      amount: "₹18,000",
      bankName: "Axis Bank",
      ifsc: "AXIS007890",
      accountNumber: "1122334455",
    },
  ]);

  const handleSearch = () => {
    if (selectedAcademicYear.length > 0 && selectedTitle.length > 0) {
      setShowGrid(true);
    } else {
      alert("Please select required fields before searching.");
    }
  };

  const handleClear = () => {
    setSelectedAcademicYear([]);
    setSelectedTitles([]);
    setShowGrid(false);
  };

  return (
    <PageLayout title="Scheme Wise Generate Payment File">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Academic Years <span className="text-red-500">*</span>
            </label>
            <MultiSelect
              value={selectedAcademicYear}
              options={academicYears}
              onChange={(e) => setSelectedAcademicYear(e.value)}
              className="w-full"
              placeholder="Select Academic Year"
              display="chip"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Scheme Title <span className="text-red-500">*</span>
            </label>
            <MultiSelect
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
              Scheme Wise Generate Payment File List
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
              <Column field="amount" header="Scheme Benefit Amount" />
              <Column field="bankName" header="Bank Name" />
              <Column field="ifsc" header="IFSC" />
              <Column field="accountNumber" header="Account Number" />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default SchemeWiseGeneratePaymentFile;
