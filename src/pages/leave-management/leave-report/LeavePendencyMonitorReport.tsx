import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";

interface LeavePendencyRow {
  applicantName: string;
  schoolName: string;
  leaveType: string;
  fromDate: string;
  toDate: string;
  pendingAt: string;
  pendingDays: number;
  status: string;
}

const LeavePendencyMonitorReport: React.FC = () => {
  const [district, setDistrict] = useState<string | null>(null);
  const [block, setBlock] = useState<string | null>(null);
  const [sankul, setSankul] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);

  const districtOptions = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Betul", value: "Betul" },
  ];

  const blockOptions = [
    { label: "Huzur", value: "Huzur" },
    { label: "Multai", value: "Multai" },
    { label: "Indore", value: "Indore" },
  ];

  const sankulOptions = [
    { label: "Sankul 1", value: "Sankul 1" },
    { label: "Sankul 2", value: "Sankul 2" },
    { label: "Sankul 3", value: "Sankul 3" },
  ];

  const [listData] = useState<LeavePendencyRow[]>([
    {
      applicantName: "Nandlal Nagle",
      schoolName: "GHSS BARA (1 to 12)",
      leaveType: "Casual Leave",
      fromDate: "10-01-2026",
      toDate: "12-01-2026",
      pendingAt: "First Approver",
      pendingDays: 3,
      status: "Pending",
    },
    {
      applicantName: "Rohit Singh",
      schoolName: "Govt HS Multai",
      leaveType: "Medical Leave",
      fromDate: "02-01-2026",
      toDate: "05-01-2026",
      pendingAt: "Second Approver",
      pendingDays: 6,
      status: "Pending",
    },
    {
      applicantName: "Pooja Verma",
      schoolName: "Govt HSS Indore",
      leaveType: "Earned Leave",
      fromDate: "20-12-2025",
      toDate: "25-12-2025",
      pendingAt: "Completed",
      pendingDays: 0,
      status: "Approved",
    },
  ]);

  const columns = [
    { field: "applicantName", header: "Applicant Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "schoolName", header: "School Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "leaveType", header: "Leave Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "fromDate", header: "From Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "toDate", header: "To Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "pendingAt", header: "Pending At", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "pendingDays", header: "Pending Days", sortable: true, style: { whiteSpace: "nowrap" } },
    {
      field: "status",
      header: "Status",
      sortable: true,
      style: { whiteSpace: "nowrap" },
      body: (row: LeavePendencyRow) => (
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

  return (
    <PageLayout title="Leave Pendency Monitor Report">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">Leave Pendency Monitor Report</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown label="Select District" required options={districtOptions} value={district} onChange={(e) => setDistrict(e.value)} placeholder="Select" />
          <Dropdown label="Select Block" required options={blockOptions} value={block} onChange={(e) => setBlock(e.value)} placeholder="Select" />
          <Dropdown label="Select Sankul" required options={sankulOptions} value={sankul} onChange={(e) => setSankul(e.value)} placeholder="Select" />
        </div>

        <div className="flex gap-4 mt-6">
          <Button label="Get Details" className="bg-blue-600 px-8" type="button" onClick={() => setShowList(true)} />
        </div>
      </div>

      {showList && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Pendency Details</h2>
            <Button label="Export To Excel" icon="pi pi-download" className="bg-blue-600 border-none" type="button" onClick={() => {}} />
          </div>

          <Table columns={columns} data={listData} showPagination rowsPerPage={10} {...{ format: "leave_pendency_monitor" }} />
        </div>
      )}
    </PageLayout>
  );
};

export default LeavePendencyMonitorReport;
