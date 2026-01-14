import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";

interface LeaveApproverRow {
  applicantName: string;
  schoolName: string;
  designationName: string;
  leaveType: string;
  districtName: string;
  blockName: string;
  fromDate: string;
  toDate: string;
  udiseCode: string;
  attachedDocument: string;
  reasonOfLeave: string;
  firstApproverComment: string;
  secondApproverComment: string;
  thirdApproverComment: string;
  status: string;
}

const LeaveApprover: React.FC = () => {
  const [leaveApproverList] = useState<LeaveApproverRow[]>([
    {
      applicantName: "Nandlal Nagle",
      schoolName: "GHSS BARA (1 to 12)",
      designationName: "Ucch Madhyamik Shikshak",
      leaveType: "Casual Leave",
      districtName: "Betul",
      blockName: "Multai",
      fromDate: "10-01-2026",
      toDate: "12-01-2026",
      udiseCode: "23350809004",
      attachedDocument: "leave_doc.pdf",
      reasonOfLeave: "Personal Work",
      firstApproverComment: "Reviewed",
      secondApproverComment: "Pending",
      thirdApproverComment: "-",
      status: "Pending",
    },
    {
      applicantName: "Rohit Singh",
      schoolName: "Govt HS Multai",
      designationName: "Principal HS",
      leaveType: "Medical Leave",
      districtName: "Bhopal",
      blockName: "Huzur",
      fromDate: "02-01-2026",
      toDate: "05-01-2026",
      udiseCode: "22223333444",
      attachedDocument: "medical.jpg",
      reasonOfLeave: "Fever",
      firstApproverComment: "Approved",
      secondApproverComment: "Approved",
      thirdApproverComment: "Approved",
      status: "Approved",
    },
    {
      applicantName: "Pooja Verma",
      schoolName: "Govt HSS Indore",
      designationName: "Asst Grade-1",
      leaveType: "Earned Leave",
      districtName: "Indore",
      blockName: "Indore",
      fromDate: "20-12-2025",
      toDate: "25-12-2025",
      udiseCode: "11112222333",
      attachedDocument: "N/A",
      reasonOfLeave: "Family Function",
      firstApproverComment: "Rejected",
      secondApproverComment: "-",
      thirdApproverComment: "-",
      status: "Rejected",
    },
  ]);

  const columns = [
    { field: "applicantName", header: "Applicant Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "schoolName", header: "School Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "designationName", header: "Designation Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "leaveType", header: "Leave Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "districtName", header: "District Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "blockName", header: "Block Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "fromDate", header: "From Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "toDate", header: "To Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "udiseCode", header: "UDISE Code", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "attachedDocument", header: "Attached Document", style: { whiteSpace: "nowrap" } },
    { field: "reasonOfLeave", header: "Reason of Leave", style: { whiteSpace: "nowrap" } },
    { field: "firstApproverComment", header: "First Approver Comment", style: { whiteSpace: "nowrap" } },
    { field: "secondApproverComment", header: "Second Approver Comment", style: { whiteSpace: "nowrap" } },
    { field: "thirdApproverComment", header: "Third Approver Comment", style: { whiteSpace: "nowrap" } },
    {
      field: "status",
      header: "Status",
      sortable: true,
      style: { whiteSpace: "nowrap" },
      body: (row: LeaveApproverRow) => (
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
      header: "Action (Approve/Reject)",
      style: { whiteSpace: "nowrap" },
      body: () => (
        <div className="flex items-center gap-2">
          <Button icon="pi pi-check" className="p-button-sm bg-green-600 border-none" type="button" onClick={() => {}} />
          <Button icon="pi pi-times" className="p-button-sm bg-red-600 border-none" type="button" onClick={() => {}} />
        </div>
      ),
    },
  ];

  return (
    <PageLayout title="Leave Approver">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Leave Approver Details</h2>
          <Button
            label="Export To Excel"
            icon="pi pi-download"
            className="bg-blue-600 border-none"
            type="button"
            onClick={() => {}}
          />
        </div>

        <Table columns={columns} data={leaveApproverList} showPagination rowsPerPage={10} {...{ format: "leave_approver" }} />
      </div>
    </PageLayout>
  );
};

export default LeaveApprover;
