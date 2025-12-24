import { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { MultiSelect } from "primereact/multiselect";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";

interface StudentDetail {
  id: number;
  samagraId: string;
  studentName: string;
  gender: string;
  category: string;
  bpl: string;
  hostel: string;
  fatherName: string;
  occupation: string;
  income: number;
  lastYearPercentage: number;
  disabled: string;
  bankAccountNo: string;
  ifscCode: string;
  scholarshipScheme: string;
  amount: number;
}

const StudentProfileViewEditLock: React.FC = () => {
  const [selectedAcademicYear, setSelectedAcademicYear] = useState<string[]>(
    []
  );
  const [showGrid, setShowGrid] = useState<boolean>(false);
  const academicYears = ["2024-25", "2023-24", "2022-23", "2021-22"];
  const [schemedata] = useState<StudentDetail[]>([
    {
      id: 1,
      samagraId: "1234567890",
      studentName: "Rahul Sharma",
      gender: "Male",
      category: "General",
      bpl: "Yes",
      hostel: "No",
      fatherName: "Ramesh Sharma",
      occupation: "Farmer",
      income: 50000,
      lastYearPercentage: 85,
      disabled: "No",
      bankAccountNo: "123456789123",
      ifscCode: "SBIN0001234",
      scholarshipScheme: "Post-Matric",
      amount: 5000,
    },
    {
      id: 2,
      samagraId: "9876543210",
      studentName: "Priya Singh",
      gender: "Female",
      category: "OBC",
      bpl: "No",
      hostel: "Yes",
      fatherName: "Rajesh Singh",
      occupation: "Teacher",
      income: 60000,
      lastYearPercentage: 90,
      disabled: "No",
      bankAccountNo: "987654321098",
      ifscCode: "SBIN0004321",
      scholarshipScheme: "Post-Matric",
      amount: 6000,
    },
    {
      id: 3,
      samagraId: "1122334455",
      studentName: "Amit Kumar",
      gender: "Male",
      category: "SC",
      bpl: "Yes",
      hostel: "No",
      fatherName: "Suresh Kumar",
      occupation: "Labor",
      income: 30000,
      lastYearPercentage: 75,
      disabled: "No",
      bankAccountNo: "112233445566",
      ifscCode: "HDFC0005678",
      scholarshipScheme: "National Scholarship",
      amount: 4000,
    },
  ]);
  const handleSearch = () => {
    setShowGrid(true);
  };
  const handleClear = () => {
    setSelectedAcademicYear([]);
    setShowGrid(false);
  };

  const actionTemplate = () => (
    <div className="flex gap-2">
      <Button
        icon="pi pi-pencil"
        rounded
        style={{
          width: "2rem",
          height: "2rem",
          backgroundColor: "#0ea5e9",
          border: "none",
        }}
      />
      <Button
        icon="pi pi-trash"
        rounded
        style={{
          width: "2rem",
          height: "2rem",
          backgroundColor: "#ef4444",
          border: "none",
        }}
      />
    </div>
  );

  const printTemplate = () => (
    <Button
      icon="pi pi-print"
      rounded
      style={{
        width: "2rem",
        height: "2rem",
        backgroundColor: "#64748b",
        border: "none",
      }}
    />
  );

  return (
    <PageLayout title="Student profile view Edit/Lock">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
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
              htmlFor="aisheCode"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Enter AISHE Code <span className="text-red-500">*</span>
            </label>
            <InputText
              id="aisheCode"
              className="w-full"
              placeholder=" Enter AISHE Code"
              required
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
            value={schemedata}
            paginator
            rows={10}
            responsiveLayout="scroll"
            className="text-sm"
          >
            <Column field="id" header="S.No." sortable />
            <Column field="samagraId" header="Student Samagra ID" sortable />
            <Column field="studentName" header="Student Name" sortable />
            <Column field="gender" header="Gender" />
            <Column field="category" header="Category" />
            <Column field="bpl" header="BPL" />
            <Column field="hostel" header="Hostel" />
            <Column field="fatherName" header="Father's Name" />
            <Column field="occupation" header="Occupation" />
            <Column field="income" header="Income" />
            <Column field="lastYearPercentage" header="Last Year %" />
            <Column field="disabled" header="Disabled" />
            <Column field="bankAccountNo" header="Bank Account No." />
            <Column field="ifscCode" header="Bank IFSC Code" />
            <Column field="scholarshipScheme" header="Scholarship Scheme" />
            <Column field="amount" header="Amount" />
            <Column
              body={printTemplate}
              header="Print"
              style={{ textAlign: "center" }}
            />
            <Column
              body={actionTemplate}
              header="Action"
              style={{ textAlign: "center" }}
            />
          </DataTable>
        </div>
      )}
    </PageLayout>
  );
};

export default StudentProfileViewEditLock;
