import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";

interface TeacherWiseDetailsRow {
  teacherName: string;
  udiseCode: string;
  schoolName: string;
  designation: string;
  leaveType: string;
  fromDate: string;
  toDate: string;
  status: string;
}

const TeacherWiseDetailsReports: React.FC = () => {
  const [district, setDistrict] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);

  const districtOptions = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Betul", value: "Betul" },
  ];

  const [detailsList] = useState<TeacherWiseDetailsRow[]>([
    {
      teacherName: "Ashok Kumar Shakya",
      udiseCode: "23350809004",
      schoolName: "GHS AGRA (9 to 10)",
      designation: "Madhyamik Shikshak",
      leaveType: "Casual Leave",
      fromDate: "10-01-2026",
      toDate: "12-01-2026",
      status: "Pending",
    },
    {
      teacherName: "Shelendra Kumar Shrivastav",
      udiseCode: "22223333444",
      schoolName: "GHS ARRODARI (1 to 10)",
      designation: "Madhyamik Shikshak",
      leaveType: "Medical Leave",
      fromDate: "02-01-2026",
      toDate: "05-01-2026",
      status: "Approved",
    },
    {
      teacherName: "Mathlesh Meena",
      udiseCode: "11112222333",
      schoolName: "GHSS TARAKALA (1 to 12)",
      designation: "Prathmik Shikshak",
      leaveType: "Earned Leave",
      fromDate: "20-12-2025",
      toDate: "25-12-2025",
      status: "Rejected",
    },
  ]);

  const columns = [
    { field: "teacherName", header: "Teacher Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "udiseCode", header: "UDISE Code", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "schoolName", header: "School Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "designation", header: "Designation", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "leaveType", header: "Leave Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "fromDate", header: "From Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "toDate", header: "To Date", sortable: true, style: { whiteSpace: "nowrap" } },
    {
      field: "status",
      header: "Status",
      sortable: true,
      style: { whiteSpace: "nowrap" },
      body: (row: TeacherWiseDetailsRow) => (
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
    <PageLayout title="Teacher Wise Details Reports">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">Teacher Wise Details Reports</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown
            label="Select District Name(Code)"
            required
            options={districtOptions}
            value={district}
            onChange={(e) => setDistrict(e.value)}
            placeholder="Select"
          />
        </div>

        <div className="flex gap-4 mt-6">
          <Button
            label="Get Details"
            className="bg-blue-600 px-8"
            type="button"
            onClick={() => setShowList(true)}
          />
        </div>
      </div>

      {showList && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Teacher Wise Details List</h2>
            <Button
              label="Export To Excel"
              icon="pi pi-download"
              className="bg-blue-600 border-none"
              type="button"
              onClick={() => {}}
            />
          </div>

          <Table columns={columns} data={detailsList} showPagination rowsPerPage={10} {...{ format: "teacher_wise_details" }} />
        </div>
      )}
    </PageLayout>
  );
};

export default TeacherWiseDetailsReports;
