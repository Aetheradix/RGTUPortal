import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown, Input, Table, type TableColumn } from "../../../ui/shared";
import { DateInput } from "@/ui/shared/Input";

interface WorkRequestRow {
  proposalNo: string;
  proposalDate: string;
  priorityType: string;
  workType: string;
  constructionWorkType: string;
  agencyName: string;
  contactPerson: string;
  contactNo: string;
  estimatedCost: string;
  estimatedDays: string;
  status: string;
}

const ConstructionWorkType: React.FC = () => {
  const [view, setView] = useState<"form" | "list">("form");
  const [, setShowResults] = useState(false);

  const tableData: WorkRequestRow[] = [
    {
      proposalNo: "250820233203OSD03001",
      proposalDate: "20/08/2025",
      priorityType: "Urgent Requirement",
      workType: "New Construction",
      constructionWorkType: "Electrical Installation, Boundary Wall...",
      agencyName: "Sarthak Construction",
      contactPerson: "Sarthak",
      contactNo: "9999999999",
      estimatedCost: "10000.00",
      estimatedDays: "10",
      status: "Approved",
    },
  ];

  const columns: TableColumn[] = [
    { field: "proposalNo", header: "Proposal No." },
    { field: "proposalDate", header: "Proposal Date" },
    { field: "priorityType", header: "Priority Type" },
    { field: "workType", header: "Work Type" },
    { field: "constructionWorkType", header: "Construction Work Type" },
    { field: "agencyName", header: "Agency Name" },
    { field: "contactPerson", header: "Contact Person Name" },
    { field: "contactNo", header: "Contact Number" },
    { field: "estimatedCost", header: "Estimated Cost (₹)" },
    { field: "estimatedDays", header: "Estimated Days" },
    { field: "status", header: "Status" },
  ];

 
  return (
    <PageLayout title="Construction Work Request Details">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center bg-white relative">
          <div className=" text-white px-4 py-1.5 rounded-full text-xs font-bold "></div>
          <div className="absolute right-2">
            <Button
              label={view === "form" ? "View List" : "Back to Entry Page"}
              icon={view === "form" ? "pi pi-eye" : "pi pi-undo"}
              className="p-button-sm p-2 text-[10px] bg-orange-400 border-none h-6 scale-90"
              onClick={() => {
                setView(view === "form" ? "list" : "form");
                setShowResults(false);
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-[14px] font-bold text-blue-800 px-2 m-4">
          <div>
            OIS Type : <span className="text-black">Office</span>
          </div>
          <div>
            Office :{" "}
            <span className="text-black">Director, Public Instructions</span>
          </div>
          <div>
            DDO : <span className="text-black"></span>
          </div>
          <div className="col-span-3">
            BCO :{" "}
            <span className="text-black">
              2003 - Commissioner, Public Instructions, Bhopal(M.P.)
            </span>
          </div>
        </div>

        {view === "form" ? (
          <div className="flex flex-col gap-6">
            <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4 shadow-sm">
              <div className="absolute -top-4 left-6 bg-white px-4 py-1  border-orange-200">
                <span className="text-blue-600 font-bold text-sm">
                  Add Construction Work Details
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Proposal Date<span className="text-red-500">*</span>
                  </label>
                  <DateInput
                    placeholder="dd/mm/yyyy"
                    showIcon
                    className="w-full text-sm "
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Priority Type<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    placeholder="Select"
                    className="w-full text-sm"
                    options={[]}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Work Type<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    placeholder="Select"
                    className="w-full text-sm"
                    options={[]}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Construction Work Type
                    <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    placeholder="Select"
                    className="w-full text-sm"
                    options={[]}
                  />
                </div>
              </div>

              <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-10 shadow-sm">
                <div className="absolute -top-4 left-6 bg-white px-4 py-1   border-orange-200">
                  <span className="text-blue-600 font-bold text-sm">
                    Add Agency Details
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">
                      Agency Name<span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Enter Agency Name"
                      className="w-full text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">
                      Contact Person Name<span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Enter Contact Person"
                      className="w-full text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">
                      Contact Number<span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Enter Contact Number"
                      className="w-full text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">
                      GST Number<span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Enter GST Number"
                      className="w-full text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-1 md:col-span-2">
                    <label className="text-sm font-medium">
                      Address<span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Enter Address"
                      className="w-full text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-10 shadow-sm">
                <div className="absolute -top-4 left-6 bg-white px-4 py-1   border-orange-200">
                  <span className="text-blue-600 font-bold text-sm">
                    Add Estimation Details
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">
                      Cost (₹)<span className="text-red-500">*</span>
                    </label>
                    <Input value="0" className="w-full text-sm" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">
                      Upload Document<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="file"
                      className="w-full text-sm text-gray-500 border border-gray-300 rounded-md p-2 cursor-pointer
                         file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 
                         file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 
                         hover:file:bg-indigo-100"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">
                      Days<span className="text-red-500">*</span>
                    </label>
                    <Input
                      placeholder="Enter Days"
                      className="w-full text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Work Description<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded p-2 text-sm h-20"
                    placeholder="Enter Work Description"
                  ></textarea>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Remark<span className="text-red-500">*</span>
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded p-2 text-sm h-20"
                    placeholder="Enter Remark"
                  ></textarea>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Upload Current Photo
                  </label>
                  <input
                    type="file"
                    className="w-full text-sm text-gray-500 border border-gray-300 rounded-md p-2 cursor-pointer
                         file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 
                         file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 
                         hover:file:bg-indigo-100"
                  />
                </div>
                <div className="flex flex-col gap-2 justify-center">
                  <div className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="auth"
                      checked
                      className="accent-orange-500"
                    />
                    <span>
                      The work request is forwarded to approval authority.
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <input
                      type="radio"
                      name="auth"
                      className="accent-orange-500"
                    />
                    <span>
                      The budget amount can be approved by the school/office.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                label="Submit"
                className="px-10 bg-[#00bfa5] border-none text-sm font-bold"
              />
              <Button
                label="Clear"
                className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500 font-bold"
              />
            </div>
            <p className="text-[#ff0000] font-bold text-xs">
              Note: All Asterisk (*) Marked Fields Are Mandatory
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4 shadow-sm">
              <div className="absolute -top-4 left-6 bg-white px-4 py-1   border-orange-200">
                <span className="text-blue-600 font-bold text-sm">
                  Construction Work Details 
                </span>
              </div>

              <div className="flex justify-between items-center mb-4 mt-2">
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

              <div className="overflow-x-auto">
                <Table
                  columns={columns}
                  data={tableData}
                  className="custom-hostel-table"
                />
              </div>

              <div className="flex justify-between items-center mt-4 text-[10px] text-gray-500">
                <span>Page 1 of 1 (1 items)</span>
                <div className="flex items-center gap-1">
                  <Button
                    icon="pi pi-chevron-left"
                    className="p-button-text p-button-sm p-0 h-6 w-6"
                  />
                  <span className="px-2 py-1 border rounded bg-white">1</span>
                  <span>of 1</span>
                  <Button
                    icon="pi pi-chevron-right"
                    className="p-button-text p-button-sm p-0 h-6 w-6"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-6 right-6">
        <Button
          icon="pi pi-arrow-up"
          className="rounded-md shadow-lg p-2 border-none text-white"
        />
      </div>

      <style>{`
        .custom-hostel-table .p-datatable-thead > tr > th {
            font-size: 15px;
            padding: 12px;
            white-space: nowrap;
            text-align: center;
            border: 1px solid #e5e7eb;
        }
        .custom-hostel-table .p-datatable-tbody > tr > td {
            font-size: 13px;
            padding: 10px;
            color: #4b5563;
            text-align: center;
            border: 1px solid #e5e7eb;
        }
      `}</style>
    </PageLayout>
  );
};

export default ConstructionWorkType;
