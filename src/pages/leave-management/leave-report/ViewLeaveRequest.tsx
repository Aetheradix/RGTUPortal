import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import { DateInput } from "@/ui/shared/Input";
import { Button } from "primereact/button";

interface ViewLeaveRequestRow {
  applicantName: string;
  leaveType: string;
  fromDate: string;
  toDate: string;
  reason: string;
  status: string;
}

const ViewLeaveRequest: React.FC = () => {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [showList, setShowList] = useState(false);

  const [requestList] = useState<ViewLeaveRequestRow[]>([
    {
      applicantName: "Nandlal Nagle",
      leaveType: "Casual Leave",
      fromDate: "10-01-2026",
      toDate: "12-01-2026",
      reason: "Personal Work",
      status: "Pending",
    },
    {
      applicantName: "Rohit Singh",
      leaveType: "Medical Leave",
      fromDate: "02-01-2026",
      toDate: "05-01-2026",
      reason: "Fever",
      status: "Approved",
    },
    {
      applicantName: "Pooja Verma",
      leaveType: "Earned Leave",
      fromDate: "20-12-2025",
      toDate: "25-12-2025",
      reason: "Family Function",
      status: "Rejected",
    },
  ]);

  const columns = [
    { field: "applicantName", header: "Applicant Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "leaveType", header: "Leave Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "fromDate", header: "From Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "toDate", header: "To Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "reason", header: "Reason", style: { whiteSpace: "nowrap" } },
    {
      field: "status",
      header: "Status",
      sortable: true,
      style: { whiteSpace: "nowrap" },
      body: (row: ViewLeaveRequestRow) => (
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
  ];

  const handleSearch = () => setShowList(true);

  const handleClear = () => {
    setFromDate(null);
    setToDate(null);
    setShowList(false);
  };

  return (
    <PageLayout title="View Leave Request">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">View Leave Request</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <DateInput
            label="Select From Date"
            required
            value={fromDate}
            onChange={(e) => setFromDate(e.value as Date)}
            placeholder="dd-mm-yyyy"
            dateFormat="dd-mm-yy"
            showButtonBar
          />

          <DateInput
            label="Select To Date"
            required
            value={toDate}
            onChange={(e) => setToDate(e.value as Date)}
            placeholder="dd-mm-yyyy"
            dateFormat="dd-mm-yy"
            showButtonBar
          />
        </div>

        <div className="flex gap-4 mt-6">
          <Button label="Search" className="bg-blue-600 px-8" type="button" onClick={handleSearch} />
          <Button label="Clear" severity="danger" className="px-8" type="button" onClick={handleClear} />
        </div>
      </div>

      {showList && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Leave Request List</h2>
            <Button
              label="Export To Excel"
              icon="pi pi-download"
              className="bg-blue-600 border-none"
              type="button"
              onClick={() => {}}
            />
          </div>

          <Table columns={columns} data={requestList} showPagination rowsPerPage={10} {...{ format: "view_leave_request" }} />
        </div>
      )}
    </PageLayout>
  );
};

export default ViewLeaveRequest;
