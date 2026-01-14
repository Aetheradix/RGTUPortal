import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";

interface LeaveHistoryRow {
  employeeName: string;
  employeeId: string;
  officeType: string;
  designationType: string;
  leaveType: string;
  fromDate: string;
  toDate: string;
  totalDays: number;
  status: string;
}

const LeaveHistoryReport: React.FC = () => {
  const [officeType, setOfficeType] = useState<string | null>("Principal Secretary-(1)");
  const [designationType, setDesignationType] = useState<string | null>("Clerical-(1)");
  const [employee, setEmployee] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);

  const officeTypeOptions = [
    { label: "Principal Secretary-(1)", value: "Principal Secretary-(1)" },
    { label: "Director Office-(2)", value: "Director Office-(2)" },
  ];

  const designationOptions = [
    { label: "Clerical-(1)", value: "Clerical-(1)" },
    { label: "Madhyamik Shikshak-(2)", value: "Madhyamik Shikshak-(2)" },
    { label: "Prathmik Shikshak-(3)", value: "Prathmik Shikshak-(3)" },
  ];

  const employeeOptions = [
    { label: "AE3108 - Gajanand Suryawanshi", value: "AE3108 - Gajanand Suryawanshi" },
    { label: "AE2201 - Amit Kumar", value: "AE2201 - Amit Kumar" },
    { label: "AE1105 - Pooja Verma", value: "AE1105 - Pooja Verma" },
  ];

  const [historyList] = useState<LeaveHistoryRow[]>([
    {
      employeeName: "Gajanand Suryawanshi",
      employeeId: "AE3108",
      officeType: "Principal Secretary-(1)",
      designationType: "Clerical-(1)",
      leaveType: "Casual Leave",
      fromDate: "10-01-2026",
      toDate: "12-01-2026",
      totalDays: 3,
      status: "Pending",
    },
    {
      employeeName: "Amit Kumar",
      employeeId: "AE2201",
      officeType: "Principal Secretary-(1)",
      designationType: "Clerical-(1)",
      leaveType: "Medical Leave",
      fromDate: "02-01-2026",
      toDate: "05-01-2026",
      totalDays: 4,
      status: "Approved",
    },
    {
      employeeName: "Pooja Verma",
      employeeId: "AE1105",
      officeType: "Director Office-(2)",
      designationType: "Madhyamik Shikshak-(2)",
      leaveType: "Earned Leave",
      fromDate: "20-12-2025",
      toDate: "25-12-2025",
      totalDays: 6,
      status: "Rejected",
    },
  ]);

  const columns = [
    { field: "employeeName", header: "Employee Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "employeeId", header: "Employee ID", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "officeType", header: "Office Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "designationType", header: "Designation Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "leaveType", header: "Leave Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "fromDate", header: "From Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "toDate", header: "To Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "totalDays", header: "Total Days", sortable: true, style: { whiteSpace: "nowrap" } },
    {
      field: "status",
      header: "Status",
      sortable: true,
      style: { whiteSpace: "nowrap" },
      body: (row: LeaveHistoryRow) => (
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
    setOfficeType("Principal Secretary-(1)");
    setDesignationType("Clerical-(1)");
    setEmployee(null);
    setShowList(false);
  };

  return (
    <PageLayout title="Leave History Report">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">Leave History Report</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown
            label="Select Office Type(Code)"
            required
            options={officeTypeOptions}
            value={officeType}
            onChange={(e) => setOfficeType(e.value)}
            placeholder="Select"
          />

          <Dropdown
            label="Select Designation Type"
            required
            options={designationOptions}
            value={designationType}
            onChange={(e) => setDesignationType(e.value)}
            placeholder="Select"
          />

          <Dropdown
            label="Select Employee Name(ID)"
            required
            options={employeeOptions}
            value={employee}
            onChange={(e) => setEmployee(e.value)}
            placeholder="Select"
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
            <h2 className="text-xl font-bold text-gray-800">Leave History List</h2>
            <Button
              label="Export To Excel"
              icon="pi pi-download"
              className="bg-blue-600 border-none"
              type="button"
              onClick={() => {}}
            />
          </div>

          <Table columns={columns} data={historyList} showPagination rowsPerPage={10} {...{ format: "leave_history_report" }} />
        </div>
      )}
    </PageLayout>
  );
};

export default LeaveHistoryReport;
