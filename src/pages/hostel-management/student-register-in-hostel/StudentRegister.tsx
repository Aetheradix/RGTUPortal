import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown, Input, Table, type TableColumn } from "../../../ui/shared";
import { DateInput } from "@/ui/shared/Input";

interface StudentRegisterRow {
  samagraId: string;
  studentName: string;
  fatherName: string;
  dob: string;
  gender: string;
  category: string;
  class: string;
  mobileNo: string;
  status: boolean;
}

const StudentRegister: React.FC = () => {
  const [view, setView] = useState<"form" | "list">("list");
  

  const tableData: StudentRegisterRow[] = [
    {
      samagraId: "126260023",
      studentName: "Poorti Sahu",
      fatherName: "Gaya Prasad",
      dob: "03/03/2012",
      gender: "Female",
      category: "OBC",
      class: "6th",
      mobileNo: "9988776655",
      status: true,
    },
  ];

  const columns: TableColumn[] = [
    { field: "samagraId", header: "Samagra ID" },
    { field: "studentName", header: "Student Name" },
    { field: "fatherName", header: "Father's Name" },
    { field: "dob", header: "DOB" },
    { field: "gender", header: "Gender" },
    { field: "class", header: "Class" },
    { field: "mobileNo", header: "Mobile No." },
    {
      field: "status",
      header: "Status",
      body: (rowData: StudentRegisterRow) => (
        <span
          className={`${
            rowData.status ? "text-green-600" : "text-red-600"
          } font-bold text-xs`}
        >
          {rowData.status ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      field: "action",
      header: "Action",
      body: () => (
        <Button
          icon="pi pi-pencil"
          className="p-button-outlined p-button-sm text-orange-400 border-orange-200 h-7 w-7"
        />
      ),
    },
  ];

  return (
    <PageLayout title="Student Register">
      <div className="flex flex-col gap-4">
        <div className="flex justify-end">
          <Button
            label={view === "list" ? "Add New Student" : "Back to List"}
            icon={view === "list" ? "pi pi-plus" : "pi pi-undo"}
            className="p-button-sm p-2 text-[10px] bg-orange-400 border-none h-7"
            onClick={() => setView(view === "list" ? "form" : "list")}
          />
        </div>

        {view === "form" ? (
          <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
            <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg">
              <span className="text-blue-600 font-bold text-sm">
                Student Registration Form
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">
                  Samagra ID <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter Samagra ID"
                  className="w-full text-sm h-10 border-orange-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">
                  Student Name (English) <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter Student Name"
                  className="w-full text-sm h-10 border-orange-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">
                  Father's Name <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter Father's Name"
                  className="w-full text-sm h-10 border-orange-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">
                  Mother's Name <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter Mother's Name"
                  className="w-full text-sm h-10 border-orange-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <DateInput
                  placeholder="dd/mm/yyyy"
                  showIcon
                  className="w-full text-sm "
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">
                  Gender <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  options={[
                    { label: "Male", value: "Male" },
                    { label: "Female", value: "Female" },
                  ]}
                  placeholder="Select"
                  className="w-full text-sm h-10 border-orange-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">
                  Category <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  options={[
                    { label: "Gen", value: "Gen" },
                    { label: "OBC", value: "OBC" },
                    { label: "SC", value: "SC" },
                    { label: "ST", value: "ST" },
                  ]}
                  placeholder="Select"
                  className="w-full text-sm h-10 border-orange-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">
                  Class <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  options={[
                    { label: "6th", value: "6th" },
                    { label: "7th", value: "7th" },
                    { label: "8th", value: "8th" },
                  ]}
                  placeholder="Select"
                  className="w-full text-sm h-10 border-orange-200"
                />
              </div>

              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-sm font-medium">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter 10 digit mobile number"
                  className="w-full text-sm h-10 border-orange-200"
                />
              </div>

              <div className="flex flex-col gap-1 md:col-span-2">
                <label className="text-sm font-medium">
                  Residential Address <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter Full Address"
                  className="w-full text-sm h-10 border-orange-200"
                />
              </div>
            </div>

            <div className="flex gap-4 mt-8 pt-4 border-t border-gray-100">
              <Button
                label="Save "
                className="px-10 bg-[#00bfa5] border-none text-sm"
              />
              <Button
                label="Clear"
                className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500"
              />
            </div>

            <div className="mt-4">
              <p className="text-[#ff0000] font-bold text-xs">
                Note: All Asterisk (*) Marked Fields Are Mandatory
              </p>
            </div>
          </div>
        ) : (
          <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
            <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg">
              <span className="text-blue-600 font-bold text-sm">
                Registered Students Details
              </span>
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2 ml-auto">
                <Button
                  label="Export To Excel"
                  icon="pi pi-file-excel"
                  className="p-button-outlined p-button-secondary p-button-sm text-xs"
                />
                <span className="p-input-icon-left">
                  <Input
                    placeholder="Search..."
                    className="p-inputtext-sm text-xs h-8"
                  />
                </span>
              </div>
            </div>

            <div className="overflow-x-auto border border-gray-200 rounded">
              <Table
                columns={columns}
                data={tableData}
                className="custom-student-table"
              />
            </div>
          </div>
        )}
      </div>

      <style>{`
        .custom-student-table .p-datatable-thead > tr > th {
          font-size: 14px;
          padding: 12px;
          white-space: nowrap;
          border: 1px solid #e5e7eb;
          background-color: #f9fafb;
        }
        .custom-student-table .p-datatable-tbody > tr > td {
          font-size: 13px;
          padding: 10px;
          border: 1px solid #e5e7eb;
        }
      `}</style>
    </PageLayout>
  );
};

export default StudentRegister;
