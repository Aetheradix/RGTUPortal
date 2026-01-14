import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";

interface LeaveStatusRow {
  leaveType: string;
  fromDate: string;
  toDate: string;
  numberOfDays: string;
  leaveApprovalAuthority: string;
  supportingDocument: string;
  reasonOfLeave: string;
  status: string;
}

const LeaveStatus: React.FC = () => {
  const [leaveStatusList] = useState<LeaveStatusRow[]>([
    {
      leaveType: "Casual Leave",
      fromDate: "10-01-2026",
      toDate: "12-01-2026",
      numberOfDays: "3",
      leaveApprovalAuthority: "Principal",
      supportingDocument: "N/A",
      reasonOfLeave: "Personal Work",
      status: "Pending",
    },
    {
      leaveType: "Medical Leave",
      fromDate: "02-01-2026",
      toDate: "05-01-2026",
      numberOfDays: "4",
      leaveApprovalAuthority: "Head Master",
      supportingDocument: "Medical Certificate",
      reasonOfLeave: "Fever",
      status: "Approved",
    },
    {
      leaveType: "Earned Leave",
      fromDate: "20-12-2025",
      toDate: "25-12-2025",
      numberOfDays: "6",
      leaveApprovalAuthority: "District Officer",
      supportingDocument: "N/A",
      reasonOfLeave: "Family Function",
      status: "Rejected",
    },
  ]);

  const columns = [
    { field: "leaveType", header: "Leave Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "fromDate", header: "From Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "toDate", header: "To Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "numberOfDays", header: "Number Of Days", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "leaveApprovalAuthority", header: "Leave Approval Authority", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "supportingDocument", header: "Supporting Document", style: { whiteSpace: "nowrap" } },
    { field: "reasonOfLeave", header: "Reason Of Leave", style: { whiteSpace: "nowrap" } },
    {
      field: "status",
      header: "Status",
      sortable: true,
      style: { whiteSpace: "nowrap" },
      body: (row: LeaveStatusRow) => (
        <span
          className={`px-3 py-1 rounded text-xs font-bold ${
            row.status === "Approved"
              ? "bg-green-100 text-green-700 border border-green-300"
              : row.status === "Rejected"
              ? "bg-red-100 text-red-700 border border-red-300"
              : "bg-yellow-100 text-yellow-700 border border-yellow-300"
          }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      field: "action",
      header: "Action (View)",
      style: { whiteSpace: "nowrap" },
      body: () => (
        <Button icon="pi pi-eye" className="p-button-sm bg-orange-500 border-none" type="button" />
      ),
    },
  ];

  return (
    <PageLayout title="Leave Status">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">Leave Status</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Employee Name</label>
            <span className="text-sm text-gray-900 font-semibold">Nandlal Nagle</span>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Department</label>
            <span className="text-sm text-gray-900 font-semibold">NA</span>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Designation</label>
            <span className="text-sm text-gray-900 font-semibold">Ucch Madhyamik Shikshak</span>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Class</label>
            <span className="text-sm text-gray-900 font-semibold">-</span>
          </div>

          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">Sankul Name</label>
            <span className="text-sm text-gray-900 font-semibold">
              Multai, Principal, GHSS NAVIMULTAI (1 to 12)(5022506265)
            </span>
          </div>

          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-sm font-medium text-gray-700">School Name</label>
            <span className="text-sm text-gray-900 font-semibold">
              GHSS BARA (1 to 12)(23350809004)
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Leave Status Details</h2>
          <Button
            label="Export To Excel"
            icon="pi pi-download"
            className="bg-blue-600 border-none"
            type="button"
            onClick={() => {}}
          />
        </div>

        <Table columns={columns} data={leaveStatusList} showPagination rowsPerPage={10} {...{ format: "leave_status_details" }} />
      </div>
    </PageLayout>
  );
};

export default LeaveStatus;
