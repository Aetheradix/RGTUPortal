import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";

interface EmployeeRetirementRow {
  employeeName: string;
  designation: string;
  districtName: string;
  financialYear: string;
  dateOfBirth: string;
  retirementDate: string;
  lastPostingOffice: string;
  status: string;
}

const EmployeeRetirementReport: React.FC = () => {
  const [showList, setShowList] = useState(false);

  const districtOptions = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Gwalior", value: "Gwalior" },
    { label: "Jabalpur", value: "Jabalpur" },
  ];

  const financialYearOptions = Array.from({ length: 10 }, (_, i) => {
    const start = 2026 - i;
    return {
      label: `${start}-${String(start + 1).slice(-2)}`,
      value: `${start}-${start + 1}`,
    };
  });

  const tableData: EmployeeRetirementRow[] = [
    {
      employeeName: "Rakesh Kumar",
      designation: "Senior Clerk",
      districtName: "Bhopal",
      financialYear: "2025-26",
      dateOfBirth: "12/05/1966",
      retirementDate: "31/05/2026",
      lastPostingOffice: "DPI Office",
      status: "Retired",
    },
    {
      employeeName: "Sunita Verma",
      designation: "Assistant Teacher",
      districtName: "Indore",
      financialYear: "2025-26",
      dateOfBirth: "18/08/1965",
      retirementDate: "30/06/2026",
      lastPostingOffice: "Govt. HS Indore",
      status: "Upcoming",
    },
  ];

  const columns = [
    { field: "employeeName", header: "Employee Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "designation", header: "Designation", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "districtName", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "financialYear", header: "Financial Year", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "dateOfBirth", header: "Date Of Birth", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "retirementDate", header: "Retirement Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "lastPostingOffice", header: "Last Posting Office", sortable: true, style: { whiteSpace: "nowrap" } },
    {
      field: "status",
      header: "Status",
      body: (row: EmployeeRetirementRow) => (
        <span
          className={`px-3 py-1 rounded text-xs font-bold ${
            row.status === "Retired"
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-yellow-100 text-yellow-700 border border-yellow-300"
          }`}
        >
          {row.status}
        </span>
      ),
      style: { whiteSpace: "nowrap" },
    },
  ];

  return (
    <PageLayout title="Employee Retirement Report">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-gray-800">Employee Retirement Report</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <Dropdown label="District Name" required options={districtOptions} />
          <Dropdown label="Financial Year" required options={financialYearOptions} />

          <div className="flex gap-2">
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
            {...{ format: "employee_retirement_report" }}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default EmployeeRetirementReport;
