import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog"; // Assuming Dialog is available for the popup
import { Dropdown, Input, Table, type TableColumn } from "../../../ui/shared";
import { DateInput } from "@/ui/shared/Input";

interface WorkRow {
  proposalNo: string;
  proposalDate: string;
  priorityType: string;
  workType: string;
  constructionWorkType: string;
  agencyName: string;
  contactPerson: string;
  contactNumber: string;
  estimatedCost: string;
  estimatedDays: string;
  status: string;
}

const ConstructionUpdateDetails: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [workType, setWorkType] = useState("All");

  const tableData: WorkRow[] = [
    {
      proposalNo: "250820233203OSD03001",
      proposalDate: "20/08/2025",
      priorityType: "Urgent Requirement",
      workType: "New Construction",
      constructionWorkType:
        "Electrical Installation, Boundary Wall, Construction of School...",
      agencyName: "Sarthak Construction",
      contactPerson: "Sarthak",
      contactNumber: "9999999999",
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
    { field: "contactNumber", header: "Contact Number" },
    { field: "estimatedCost", header: "Estimated Cost (₹)" },
    { field: "estimatedDays", header: "Estimated Days" },
    { field: "status", header: "Status" },
    {
      field: "action",
      header: "Action",
      body: () => (
        <Button
          label="Update Work Status"
          onClick={() => setShowModal(true)}
          className="bg-white text-orange-500 border border-orange-400 text-[10px] px-2 py-1 h-8"
        />
      ),
    },
  ];

  return (
    <PageLayout title="Update Construction Work Details">
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

        <div className=" rounded-xl p-6 relative bg-white mt-4">
          <div className="absolute -top-4 left-6 bg-white  rounded-lg">
            <span className="font-bold ">
              Update Construction Work Details
            </span>
          </div>
          <div className="mt-4">
            <label className="text-blue-500 text-sm font-semibold">
              Work Type<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={workType}
              options={[{ label: "All", value: "All" }]}
              onChange={(e) => setWorkType(e.value)}
              className="w-full md:w-64 mt-1 border-orange-300"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-gray-700 font-bold mb-4">
              List of latest repair works sent by you
            </h3>
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2"></div>
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
            />
          </div>
        </div>
      </div>
      <Dialog
        header="Work Description"
        visible={showModal}
        style={{ width: "80vw" }}
        onHide={() => setShowModal(false)}
        className="custom-dialog"
      >
        <div className="flex flex-col gap-4 text-sm">
          <div className="border rounded">
            {[
              ["Proposal No.", "250820233203OSD03001"],
              ["Proposal Date", "20/08/2025"],
              ["Agency Name", "Sarthak Construction"],
              ["Estimated Cost (₹)", "10000.00"],
              ["Estimated Time (In Days)", "10"],
              ["HO Approved Amount (₹)", "100000.00"],
            ].map(([label, val], idx) => (
              <div
                key={idx}
                className={`flex border-b ${
                  idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="w-1/3 p-2 font-bold border-r">{label}</div>
                <div className="w-2/3 p-2">{val}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-blue-500 font-semibold">
                Work Start Date <span className="text-red-500">*</span>
              </label>
              <DateInput
                placeholder="dd/mm/yyyy"
                showIcon
                className="w-full text-sm "
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-blue-500 font-semibold">
                Work completion Estimated Date <span className="text-red-500">*</span>
              </label>
              <DateInput
                placeholder="dd/mm/yyyy"
                showIcon
                className="w-full text-sm "
              />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <label className="text-blue-500 font-semibold">
                Work End Actual Date <span className="text-red-500">*</span>
              </label>
              <DateInput
                placeholder="dd/mm/yyyy"
                showIcon
                className="w-full text-sm "
              />
            </div>
          </div>

          <div className=" rounded-xl p-6 relative bg-white mt-4">
            <div className="absolute -top-4 left-6 bg-white  rounded-lg">
              <span className="font-bold ">
                Inspection Details
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
              <div className="flex flex-col gap-1">
                <label className="text-blue-500 text-xs font-semibold">
                  Date<span className="text-red-500">*</span>
                </label>
                <DateInput
                  placeholder="dd/mm/yyyy"
                  showIcon
                  className="w-full text-sm "
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-blue-500 text-xs font-semibold">
                  Type<span className="text-red-500">*</span>
                </label>
                <Dropdown placeholder="Select" options={[]} className="h-8" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-blue-500 text-xs font-semibold">
                  Agency Name/ Office Name<span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter Name" className="h-8" />
              </div>
              <div className="col-span-3 flex flex-col gap-1">
                <label className="text-blue-500 text-xs font-semibold">
                  Remark<span className="text-red-500">*</span>
                </label>
                <textarea
                  className="border p-2 rounded h-20"
                  placeholder="Enter Remark"
                ></textarea>
              </div>
            </div>
            <div className="flex justify-center mt-2">
              <Button
                label="Add"
                className="bg-[#00bfa5] border-none px-6 h-8"
              />
            </div>
          </div>

          <div className=" rounded-xl p-6 relative bg-white mt-4">
            <div className="absolute -top-4 left-6 bg-white  rounded-lg">
              <span className="font-bold ">
                Verification of completion of work
              </span>
            </div>
            <div className="mt-2 flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <span className="text-blue-800 text-xs font-semibold">
                  1. The work was completed within time limit<span className="text-red-500">*</span>
                </span>
                <label className="flex items-center gap-1 text-xs">
                  <input type="radio" name="limit" /> Yes
                </label>
                <label className="flex items-center gap-1 text-xs">
                  <input type="radio" name="limit" /> No
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="text-xs text-blue-800">
                  The above work has been verified by me and the statement is
                  true.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Dialog>

      <style>{`
        .orange-header-table .p-datatable-thead > tr > th {
            font-size: 15px;
            padding: 10px;
            border: 1px solid #e0e0e0;
        }
        .orange-header-table .p-datatable-tbody > tr > td {
            font-size: 13px;
            padding: 10px;
            border: 1px solid #e0e0e0;
        }
        .custom-dialog .p-dialog-header {
            background: white;
            color: #2563eb;
            font-weight: bold;
            border-bottom: 1px solid #eee;
        }
      `}</style>
    </PageLayout>
  );
};

export default ConstructionUpdateDetails;
