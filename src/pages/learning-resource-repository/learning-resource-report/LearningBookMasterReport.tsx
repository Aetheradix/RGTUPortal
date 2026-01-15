import React from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown, Input, Table, type TableColumn } from "../../../ui/shared";

const LearningBookReport: React.FC = () => {
  const columns: TableColumn[] = [
    { field: "class", header: "Class" },
    { field: "subject", header: "Subject" },
    { field: "title", header: "Book Title" },
    { field: "uploadDate", header: "Uploaded On" },
    { field: "status", header: "Status" },
  ];

  return (
    <PageLayout title="Learning Book Master Report">
      <div className="flex flex-col gap-4">
        <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
          <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg ">
            <span className="text-blue-600 font-bold text-sm">Filter</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">
                Class <span className="text-red-500">*</span>
              </label>
              <Dropdown
                placeholder="All"
                options={[{ label: "All", value: "All" }]}
                className="w-full text-sm h-10 border-orange-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">
                Subject <span className="text-red-500">*</span>
              </label>
              <Dropdown
                placeholder="All"
                options={[{ label: "All", value: "All" }]}
                className="w-full text-sm h-10 border-orange-200"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">
                Status <span className="text-red-500">*</span>
              </label>
              <Dropdown
                placeholder="All"
                options={[
                  { label: "Pending", value: "Pending" },
                  { label: "Completed", value: "Completed" },
                ]}
                className="w-full text-sm h-10 border-orange-200"
              />
            </div>

            <div className="flex gap-4 mt-6">
              <Button
                label="Search"
                className="px-10 bg-[#00bfa5] border-none text-sm font-bold"
              />
              <Button
                label="Clear"
                className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500 font-bold"
              />
            </div>
          </div>
        </div>

        <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-8">
          <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg ">
            <span className="text-blue-600 font-bold text-sm">Details</span>
          </div>
          <div className="flex justify-between items-center mb-4 ">
            <div className="flex items-center gap-2 text-xs"></div>
            <div className="flex gap-2">
              <Button
                label="Export To Excel"
                icon="pi pi-file-excel"
                className="p-button-outlined p-button-secondary p-button-sm text-xs"
              />
              <span className="p-input-icon-left">
                <Input
                  placeholder="Search..."
                  className="p-inputtext-sm text-xs"
                />
              </span>
            </div>
          </div>
          <Table columns={columns} data={[]} className="custom-student-table" />
        </div>
      </div>
    </PageLayout>
  );
};

export default LearningBookReport;
