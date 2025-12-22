import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { MultiSelect } from "primereact/multiselect";

const StudentSamagraEkycApproval: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [status, setStatus] = useState(null);
  const [remark, setRemark] = useState("");
  const academicYears = ["2024-25", "2023-24", "2022-23", "2021-22"];
  const [selectedAcademicYear, setSelectedAcademicYear] = useState<string[]>(
    []
  );
  const statusOptions = [
    { label: "Approve", value: "Approve" },
    { label: "Reject", value: "Reject" },
  ];
  const studentData = [
    {
      id: 1,
      aadhaarNumber: "553366336699",
      name: "Aniket Ahirwar",
      fatherName: "Bhagvan Singh",
      relation: "Brother",
      dob: "03/03/1998",
      gender: "Male",
      permanentAddress: "Village/Ward - Birha Shyam Khedi, District - Bhopal",
      pinCode: "460557",
      district: "Bhopal",
      localBody: "Nagar Nigam",
      landmark: "Bhopal",
    },
  ];

  const handleSearch = () => {
    setCurrentStep(2);
  };

  const handleClear = () => {
    setCurrentStep(1);
    setStatus(null);
    setRemark("");
  };

  const expandTemplate = () => (
    <i
      className="pi pi-plus-circle text-indigo-500 cursor-pointer"
      style={{ fontSize: "1.1rem" }}
    ></i>
  );

  return (
    <PageLayout title="Student Samagra E-KYC Approval">
      <div className="space-y-6">
        <section className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Enter Samagra ID<span className="text-red-500">*</span>
              </label>
              <InputText
                placeholder="Enter 9-digit Samagra ID"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex gap-3 mt-6 justify-center">
            <Button
              label="Get Student Details for Samagra"
              className="bg-indigo-600 border-none px-6"
              onClick={handleSearch}
            />
            <Button
              label="Clear"
              className="bg-red-600 border-none px-10"
              onClick={handleClear}
            />
          </div>
        </section>
        {/* STEP 2: STUDENT DETAILS & MANAGE SECTION (Capture134.PNG) */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-fade-in">
            <section className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Student Details
                </h3>
                <span className="text-red-800 font-bold uppercase tracking-widest">
                  ANIKET AHIRWAR
                </span>
              </div>
              <DataTable
                value={studentData}
                className="p-datatable-sm text-sm no-border-table"
                showGridlines={false}
              >
                <Column body={expandTemplate} style={{ width: "40px" }} />
                <Column field="id" header="S.No." style={{ width: "50px" }} />
                <Column field="aadhaarNumber" header="Aadhaar Number" />
                <Column field="name" header="Name" />
                <Column field="fatherName" header="Father's Name" />
                <Column field="relation" header="Relation" />
                <Column field="dob" header="Date of Birth" />
                <Column field="gender" header="Gender" />
                <Column field="permanentAddress" header="Permanent Address" />
                <Column field="pinCode" header="Pin Code" />
                <Column field="district" header="District" />
                <Column field="localBody" header="Local Body" />
                <Column field="landmark" header="Landmark" />
              </DataTable>
            </section>
            {/* Manage Samagra Kyc Section (Mini Sections) */}
            <section className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h3 className="text-md font-bold mb-6 text-gray-600 uppercase border-b pb-2">
                Manage Samagra Kyc
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Status
                  </label>
                  <Dropdown
                    value={status}
                    options={statusOptions}
                    onChange={(e) => setStatus(e.value)}
                    placeholder="Status"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Remark
                  </label>
                  <InputTextarea
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    placeholder="Enter Remark"
                    rows={1}
                    className="w-full"
                    autoResize
                  />
                </div>
              </div>
              <div className="flex gap-3 mt-8 justify-center pt-4 ">
                <Button
                  label="Update Student Details"
                  className="bg-indigo-600 border-none px-8"
                />
                <Button
                  label="Clear"
                  className="bg-red-600 border-none px-10"
                  onClick={handleClear}
                />
              </div>
            </section>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default StudentSamagraEkycApproval;
