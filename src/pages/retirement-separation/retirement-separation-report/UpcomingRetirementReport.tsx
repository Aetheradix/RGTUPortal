import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";

interface UpcomingRetirementRow {
  employeeName: string;
  designation: string;
  districtName: string;
  academicYear: string;
  month: string;
  dateOfBirth: string;
  retirementDate: string;
  lastPostingOffice: string;
  status: string;
}

const UpcomingRetirementReport: React.FC = () => {
  const [showList, setShowList] = useState(false);

  const academicYearOptions = Array.from({ length: 10 }, (_, i) => {
    const start = 2026 - i;
    return {
      label: `${start}-${String(start + 1).slice(-2)}`,
      value: `${start}-${start + 1}`,
    };
  });

  const districtOptions = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Gwalior", value: "Gwalior" },
    { label: "Jabalpur", value: "Jabalpur" },
  ];

  const monthOptions = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  const tableData: UpcomingRetirementRow[] = [
    {
      employeeName: "Sunita Verma",
      designation: "Assistant Teacher",
      districtName: "Indore",
      academicYear: "2025-26",
      month: "June",
      dateOfBirth: "18/08/1965",
      retirementDate: "30/06/2026",
      lastPostingOffice: "Govt. HS Indore",
      status: "Upcoming",
    },
    {
      employeeName: "Rakesh Kumar",
      designation: "Senior Clerk",
      districtName: "Bhopal",
      academicYear: "2025-26",
      month: "May",
      dateOfBirth: "12/05/1966",
      retirementDate: "31/05/2026",
      lastPostingOffice: "DPI Office",
      status: "Upcoming",
    },
  ];

  const columns = [
    { field: "employeeName", header: "Employee Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "designation", header: "Designation", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "districtName", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "academicYear", header: "Academic Year", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "month", header: "Month", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "dateOfBirth", header: "Date Of Birth", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "retirementDate", header: "Retirement Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "lastPostingOffice", header: "Last Posting Office", sortable: true, style: { whiteSpace: "nowrap" } },
    {
      field: "status",
      header: "Status",
      body: (row: UpcomingRetirementRow) => (
        <span className="px-3 py-1 rounded text-xs font-bold bg-yellow-100 text-yellow-700 border border-yellow-300">
          {row.status}
        </span>
      ),
      style: { whiteSpace: "nowrap" },
    },
  ];

  return (
    <PageLayout title="Upcoming Retirement Report">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-gray-800">Upcoming Retirement Report</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <Dropdown label="Academic Year" required options={academicYearOptions} />
          <Dropdown label="District Name" required options={districtOptions} />
          <Dropdown label="Month" required options={monthOptions} />

          <div className="flex gap-2 md:col-span-3">
            <Button
              label="Search"
              className="bg-blue-600 px-6 h-[42px]"
              type="button"
              onClick={() => setShowList(true)}
            />
            <Button
              label="Clear"
              severity="danger"
              className="px-6 h-[42px]"
              type="button"
              onClick={() => setShowList(false)}
            />
          </div>
        </div>

        <p className="text-red-600 text-sm font-semibold">
          Note: All Asterisk (*) Marked Fields Are Mandatory
        </p>
      </div>

      {showList && (
        <div className="bg-white mt-6 p-6 rounded-lg border border-gray-200 shadow-sm">
          <Table
            columns={columns}
            data={tableData}
            showPagination
            rowsPerPage={10}
            scrollable
            {...{ format: "upcoming_retirement_report" }}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default UpcomingRetirementReport;
