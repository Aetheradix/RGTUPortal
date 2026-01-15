import React, { useState } from "react";
import PageLayout from "../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown, Input, Table, type TableColumn } from "../../ui/shared";
import { DateInput } from "@/ui/shared/Input";

interface TestMasterRow {
  testCategory: string;
  testName: string;
  eligibilityClass: string;
  testDate: string;
  status: string;
}

const TestPreparationMaster: React.FC = () => {
  const [view, setView] = useState<"list" | "form">("list");

  const rows: TestMasterRow[] = [
    {
      testCategory: "National Level",
      testName: "NTSE (National Talent Search Exam)",
      eligibilityClass: "10th",
      testDate: "15/11/2025",
      status: "Active",
    },
  ];

  const columns: TableColumn[] = [
    { field: "testCategory", header: "Test Category" },
    { field: "testName", header: "Test Name" },
    { field: "eligibilityClass", header: "Eligible Class" },
    { field: "testDate", header: "Scheduled Date" },
    {
      field: "status",
      header: "Status",
      body: (rowData: TestMasterRow) => (
        <span
          className={`font-bold ${
            rowData.status === "Active" ? "text-green-600" : "text-red-600"
          }`}
        >
          {rowData.status}
        </span>
      ),
    },
    {
      field: "action",
      header: "Action",
      body: () => (
        <Button
          icon="pi pi-pencil"
          className="p-button-outlined text-orange-400 p-0"
        />
      ),
    },
  ];

  return (
    <PageLayout title="Career Guidance - Test Preparation Master">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className=" px-4 py-1 rounded-full text-xs font-bold "></div>
          <Button
            label={view === "list" ? "Add New Test" : "Back to List"}
            icon={view === "list" ? "pi pi-plus" : "pi pi-list"}
            className="p-button-sm bg-blue-600 border-none h-8 text-xs"
            onClick={() => setView(view === "list" ? "form" : "list")}
          />
        </div>

        {view === "form" ? (
          <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
            <div className="absolute -top-4 left-6 bg-white px-4 py-1   border-orange-100">
              <span className="text-blue-600 font-bold text-sm">
                Create New Test Entry
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">
                  Test Category <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  options={[
                    { label: "National", value: "National" },
                    { label: "State", value: "State" },
                  ]}
                  placeholder="Select Category"
                  className="border-orange-200 h-10"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">
                  Test Name <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter Test Name"
                  className="border-orange-200 h-10"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">
                  Eligible Class <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  options={[
                    { label: "9th", value: "9th" },
                    { label: "10th", value: "10th" },
                  ]}
                  placeholder="Select Class"
                  className="border-orange-200 h-10"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Scheduled Date</label>
                <DateInput
                  placeholder="dd/mm/yyyy"
                  showIcon
                  className="w-full text-sm "
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">
                  Syllabus Link (URL)
                </label>
                <Input
                  placeholder="https://..."
                  className="border-orange-200 h-10"
                />
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <Button
                label="Submit"
                className="px-10 bg-[#00bfa5] border-none text-sm font-bold"
              />
              <Button
                label="Clear"
                className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500 font-bold"
              />
            </div>
            <p className="text-[#ff0000] font-bold text-xs mt-4">
              Note: All Asterisk (*) Marked Fields Are Mandatory
            </p>
          </div>
        ) : (
          <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4 shadow-sm">
            <div className="absolute -top-4 left-6 bg-white px-4 py-1   border-orange-100">
              <span className="text-blue-600 font-bold text-sm">
                Defined Test List
              </span>
            </div>
            <div className="overflow-x-auto border border-gray-200 rounded mt-4">
              <Table
                columns={columns}
                data={rows}
                className="custom-master-table"
              />
            </div>
          </div>
        )}
      </div>
      <style>{`
                .custom-master-table .p-datatable-thead > tr > th {
                    font-size: 15px; padding: 12px;  color: #4b5563; border: 1px solid #fed7aa;
                }
                .custom-master-table .p-datatable-tbody > tr > td {
                    font-size: 13px; padding: 10px; border: 1px solid #e5e7eb;
                }
            `}</style>
    </PageLayout>
  );
};

export default TestPreparationMaster;
