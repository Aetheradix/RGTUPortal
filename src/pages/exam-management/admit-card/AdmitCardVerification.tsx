import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import 'primeicons/primeicons.css';
interface Student {
  id: number;
  studentName: string;
  rollNumber: string;
  mobile: string;
  courseName: string;
  admitCardNumber: string;
  admitCardStatus: string;
  verificationStatus: string;
  verificationDate: string;
  verifiedBy: string;
  remarks: string;
  status: string;
}

const verificationOptions = [
  { label: "Select", value: "" },
  { label: "Verified", value: "Verified" },
  { label: "Pending", value: "Pending" },
  { label: "Rejected", value: "Rejected" },
];

const studentsData: Student[] = [
  {
    id: 1,
    studentName: "Amit Kumar",
    rollNumber: "MP123456",
    mobile: "9309994711",
    courseName: "B.Tech Computer Science",
    admitCardNumber: "ACMP12345",
    admitCardStatus: "Generated",
    verificationStatus: "Verified",
    verificationDate: "2024-12-01",
    verifiedBy: "Dr. Patel",
    remarks: "No Issues",
    status: "Active",
  },
  {
    id: 2,
    studentName: "Pooja Yadav",
    rollNumber: "MP654321",
    mobile: "9301112222",
    courseName: "MBA Finance",
    admitCardNumber: "ACMP54321",
    admitCardStatus: "Not Generated",
    verificationStatus: "Pending",
    verificationDate: "-",
    verifiedBy: "-",
    remarks: "Admit card generation in process",
    status: "Active",
  },
  {
    id: 3,
    studentName: "Ravi Sharma",
    rollNumber: "MP112233",
    mobile: "9303334444",
    courseName: "M.Tech Civil Engineering",
    admitCardNumber: "ACMP112233",
    admitCardStatus: "Generated",
    verificationStatus: "Verified",
    verificationDate: "2024-12-02",
    verifiedBy: "Mr. Soni",
    remarks: "No Issues",
    status: "Active",
  },
];

const AdmitCardVerification: React.FC = () => {
  const [rollNo, setRollNo] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState("");
  const [remark, setRemark] = useState("");

  const student = studentsData[0]; // dummy data for UI

  const handleSearch = () => {
    setIsSearched(true); // no validation
  };

  const handleClear = () => {
    setRollNo("");
    setVerificationStatus("");
    setRemark("");
    setIsSearched(false);
  };

  return (
    <PageLayout title="Admit Card Verification">
      {/* ================= SEARCH ================= */}
      <div className="border rounded p-4 mb-6">
        <h3 className="font-semibold mb-2">Enter Roll Number *</h3>

        <InputText
          placeholder="Enter Roll No."
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          className="w-full md:w-1/3"
        />

        <div className="flex justify-center gap-3 mt-4">
          <Button label="Search" onClick={handleSearch} />
          <Button
            label="Clear"
            className="p-button-secondary"
            onClick={handleClear}
          />
        </div>
      </div>

      {/* ================= AFTER SEARCH ================= */}
      {isSearched && (
        <>
          {/* STUDENT DETAILS */}
          <div className="border rounded p-4 mb-6 bg-gray-50">
            <h3 className="font-semibold mb-3">Student Details</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label>Student Name</label>
                <div className="p-2 bg-gray-200 rounded">
                  {student.studentName}
                </div>
              </div>

              <div>
                <label>Mobile No.</label>
                <div className="p-2 bg-gray-200 rounded">{student.mobile}</div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  View Admit Card
                </label>
                <div className="flex items-center">
                  <Button
                    icon="pi pi-eye"
                    className="p-button-rounded p-button-sm"
                    style={{ backgroundColor: "#6366F1", border: "none" }}
                    tooltip="View Admit Card"
                  />
                </div>
              </div>
              {/* <div>
                <label>View Admit Card</label>
                <div>
                  <Button  icon="pi pi-eye" />
                </div>
              </div> */}
            </div>
          </div>

          {/* VERIFICATION STATUS */}
          <div className="border rounded p-4 mb-8">
            <h3 className="font-semibold mb-3">Verification Status</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Dropdown
                options={verificationOptions}
                value={verificationStatus}
                onChange={(e) => setVerificationStatus(e.value)}
                placeholder="Select Verification Status"
                className="w-full"
              />

              <InputText
                placeholder="Enter your remarks here..."
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
                className="w-full"
              />
            </div>

            <div className="flex justify-center gap-3 mt-4">
              <Button label="Save" />
              <Button
                label="Clear"
                className="p-button-secondary"
                onClick={handleClear}
              />
            </div>
          </div>

          {/* ================= LIST ================= */}
          <div className="border rounded p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Admit Card Verification List</h3>
              <Button
                label="Add Admit Card Verification"
                icon="pi pi-plus"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              />
            </div>

            <DataTable value={studentsData} paginator rows={10} showGridlines>
              <Column header="Sr No." body={(_, i) => i + 1} />
              <Column field="studentName" header="Student Name" />
              <Column field="rollNumber" header="Roll Number" />
              <Column field="courseName" header="Course Name" />
              <Column field="admitCardNumber" header="Admit Card Number" />
              <Column field="admitCardStatus" header="Admit Card Status" />
              <Column field="verificationStatus" header="Verification Status" />
              <Column field="verificationDate" header="Verification Date" />
              <Column field="verifiedBy" header="Verified By" />
              <Column field="remarks" header="Remarks" />
              <Column
                header="Status"
                body={(row) => <Tag value={row.status} severity="success" />}
              />
            </DataTable>
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default AdmitCardVerification;
