import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown, Input, Table, type TableColumn } from "../../../ui/shared";

interface PendingWorkRow {
  srNo: number;
  proposalNo: string;
  proposalDate: string;
  officeName: string;
  sankulName: string;
  priorityType: string;
  workType: string;
  constructionWorkType: string;
  estimatedCost: string;
  estimatedDays: string;
}

const PendingWorkRequest: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [workType, setWorkType] = useState("All");

  const tableData: PendingWorkRow[] = [];

  const columns: TableColumn[] = [
    { field: "srNo", header: "Sr.No." },
    { field: "proposalNo", header: "Proposal No." },
    { field: "proposalDate", header: "Proposal Date" },
    { field: "officeName", header: "Office/School Name (Code)" },
    { field: "sankulName", header: "Sankul Name (Code)" },
    { field: "priorityType", header: "Priority Type" },
    { field: "workType", header: "Work Type" },
    { field: "constructionWorkType", header: "Construction Work Type" },
    { field: "estimatedCost", header: "Estimated Cost (₹)" },
    {
      field: "action",
      header: "Process",
      body: () => (
        <Button
          label="Process Request"
          onClick={() => setShowModal(true)}
          className="bg-white text-orange-500 border border-orange-400 text-[10px] px-2 py-1 h-8"
        />
      ),
    },
  ];

  return (
    <PageLayout title="Pending Work Request">
      <div className="bg-white p-4 rounded-lg shadow-sm border-t-4 border-orange-400">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
          <div>
            <span className="text-blue-600 font-bold">OIS Type :</span> Office
          </div>
          <div>
            <span className="text-blue-600 font-bold">Office :</span> Director,
            Public Instructions
          </div>
          <div>
            <span className="text-blue-600 font-bold">DDO :</span>{" "}
          </div>
          <div className="col-span-3">
            <span className="text-blue-600 font-bold">BCO :</span> 2003 -
            Commissioner, Public Instructions, Bhopal(M.P.)
          </div>
        </div>

        <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
          <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg">
            <span className="text-blue-600 font-bold text-sm">
              Construction Work Request Details
            </span>
          </div>
          <div className="mt-4 flex flex-col gap-1">
            <label className="text-blue-500 text-sm font-semibold">
              Select Work Type<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={workType}
              options={[{ label: "All", value: "All" }]}
              onChange={(e) => setWorkType(e.value)}
              className="w-full md:w-64 border-orange-300"
            />
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
               
              </div>
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

            <Table
              columns={columns}
              data={tableData}
              className="orange-header-table"
              emptyMessage="No data"
            />
          </div>
        </div>
      </div>

      <Dialog
        header="Work Description"
        visible={showModal}
        style={{ width: "85vw" }}
        onHide={() => setShowModal(false)}
        className="custom-dialog"
      >
        <div className="flex flex-col gap-6 text-sm">
          <div className="border rounded overflow-hidden">
            {[
              ["Proposal No.", "250820233203OSD03001"],
              ["Proposal Date", "20/08/2025"],
              [
                "School / Office Name-(Code)",
                "Director, Public Instructions [233203OSD03]",
              ],
              ["Priority Type", "Urgent Requirement"],
              ["Work Type", "New Construction"],
              [
                "Construction Work Type",
                "Electrical Installation, Boundary Wall, Wooden Table",
              ],
              ["Agency Name", "Sarthak Construction"],
              ["Estimated Cost (₹)", "10000.00"],
              ["HO Approved Amount (₹)", "100000.00"],
            ].map(([label, val], idx) => (
              <div
                key={idx}
                className={`flex border-b last:border-none ${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="w-1/3 p-3 font-bold border-r text-gray-700">
                  {label}
                </div>
                <div className="w-2/3 p-3 text-gray-600">{val}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <label className="text-blue-500 font-semibold">
                Work Start Date<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border rounded p-1">
                <input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  className="w-full outline-none p-1"
                />
                <i className="pi pi-calendar text-gray-500 px-2" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-blue-500 font-semibold">
                Work completion Estimated Date
              </label>
              <div className="flex items-center border rounded p-1">
                <input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  className="w-full outline-none p-1"
                />
                <i className="pi pi-calendar text-gray-500 px-2" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-blue-500 font-semibold">
                Work End Actual Date<span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border rounded p-1">
                <input
                  type="text"
                  placeholder="dd/mm/yyyy"
                  className="w-full outline-none p-1"
                />
                <i className="pi pi-calendar text-gray-500 px-2" />
              </div>
            </div>
          </div>

          <div className="border border-orange-400 rounded-lg p-6 relative mt-4">
            <div className="absolute -top-3 left-4 bg-white px-3 border border-orange-400 rounded text-xs font-bold text-blue-600">
              Inspection Details
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
              <div className="flex flex-col gap-1">
                <label className="text-blue-500 text-xs font-semibold">
                  Date<span className="text-red-500">*</span>
                </label>
                <div className="flex items-center border rounded p-1">
                  <input
                    type="text"
                    placeholder="dd/mm/yyyy"
                    className="w-full outline-none p-1 text-xs"
                  />
                  <i className="pi pi-calendar text-gray-400 px-1 text-xs" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-blue-500 text-xs font-semibold">
                  Type<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  placeholder="Select"
                  options={[]}
                  className="h-8 text-xs"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-blue-500 text-xs font-semibold">
                  Agency Name/ Office Name
                  <span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter Name" className="h-8 text-xs" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-blue-500 text-xs font-semibold">
                  Officer Name<span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter Officer Name"
                  className="h-8 text-xs"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-blue-500 text-xs font-semibold">
                  Officer Designation<span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter Designation"
                  className="h-8 text-xs"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-blue-500 text-xs font-semibold">
                  Upload Document<span className="text-red-500">*</span>
                </label>
                <div className="flex border rounded h-8 overflow-hidden">
                  <button className="bg-gray-100 px-2 text-[10px] border-r">
                    Choose File
                  </button>
                  <span className="flex-1 bg-white px-2 text-[10px] flex items-center text-gray-400">
                    No file chosen
                  </span>
                </div>
              </div>
              <div className="col-span-3 flex flex-col gap-1">
                <label className="text-blue-500 text-xs font-semibold">
                  Remark<span className="text-red-500">*</span>
                </label>
                <textarea
                  className="border p-2 rounded h-20 text-xs"
                  placeholder="Enter Remark"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <Button
                label="Add"
                className="bg-[#00bfa5] border-none px-10 h-9 font-bold shadow-sm"
              />
            </div>
          </div>

          <div className="border border-orange-400 rounded-lg p-6 relative mt-4">
            <div className="absolute -top-3 left-4 bg-white px-3 border border-orange-400 rounded text-xs font-bold text-blue-600">
              Verification of completion of work
            </div>
            <div className="mt-2 flex flex-col gap-4">
              <div className="flex items-center gap-8">
                <span className="text-blue-800 text-xs font-semibold">
                  1. The work was completed within time limit
                  <span className="text-red-500">*</span>
                </span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-xs">
                    <input
                      type="radio"
                      name="time_limit"
                      className="accent-red-500"
                    />{" "}
                    Yes
                  </label>
                  <label className="flex items-center gap-2 text-xs">
                    <input
                      type="radio"
                      name="time_limit"
                      className="accent-red-500"
                    />{" "}
                    No
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <span className="text-blue-800 text-xs font-semibold">
                  2. The work has been done in accordance with the quality.
                  <span className="text-red-500">*</span>
                </span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 text-xs">
                    <input
                      type="radio"
                      name="quality"
                      className="accent-red-500"
                    />{" "}
                    Yes
                  </label>
                  <label className="flex items-center gap-2 text-xs">
                    <input
                      type="radio"
                      name="quality"
                      className="accent-red-500"
                    />{" "}
                    No
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2">
                <input type="checkbox" className="h-4 w-4 accent-blue-600" />
                <span className="text-xs text-blue-800 font-medium">
                  The above work has been verified by me and the statement is
                  completely true.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Dialog>

      <style>{`
        .orange-header-table .p-datatable-thead > tr > th {
            font-size: 15px;
            padding: 10px 8px;
            border: 1px solid #ffffff44;
            text-align: center;
        }
        .orange-header-table .p-datatable-tbody > tr > td {
            font-size: 13px;
            padding: 8px;
            border: 1px solid #e0e0e0;
            text-align: center;
        }
        .custom-dialog .p-dialog-header {
            border-bottom: 2px solid #f3f4f6;
            padding: 1rem;
        }
        .custom-dialog .p-dialog-header-title {
            color: #4b5563;
            font-size: 1.1rem;
        }
      `}</style>
    </PageLayout>
  );
};

export default PendingWorkRequest;
