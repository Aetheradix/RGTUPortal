import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";

interface BalanceLeaveRow {
  id: number;
  leaveType: string;
  openingAtOneTime: number;
  leaveCreditForSelectedYear: number;
  totalTakenLeave: number;
  totalLeaveBalanceTillDate: number;
}

const BalanceLeave: React.FC = () => {
  const [academicYear, setAcademicYear] = useState<string | null>("2026");

  const [balanceLeaveList] = useState<BalanceLeaveRow[]>([
    {
      id: 1,
      leaveType: "Commute Leave",
      openingAtOneTime: 33,
      leaveCreditForSelectedYear: 0,
      totalTakenLeave: 0,
      totalLeaveBalanceTillDate: 33,
    },
    {
      id: 2,
      leaveType: "Earned Leave",
      openingAtOneTime: 30,
      leaveCreditForSelectedYear: 0,
      totalTakenLeave: 0,
      totalLeaveBalanceTillDate: 30,
    },
  ]);

  const yearOptions = [
    { label: "2026", value: "2026" },
    { label: "2025", value: "2025" },
    { label: "2024", value: "2024" },
  ];

  const columns = [
    { field: "leaveType", header: "Leave Type", sortable: true, style: { whiteSpace: "nowrap" } },
    {
      field: "openingAtOneTime",
      header: "Opening As on 1st january",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "leaveCreditForSelectedYear",
      header: "Leave Credit For Selected Year",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "totalTakenLeave",
      header: "Total Taken Leave (By ERP)",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "totalLeaveBalanceTillDate",
      header: "Total Leave Balance Till Date",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
  ];

  return (
    <PageLayout title="Balance Leave">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">Balance Leaves</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown
            label="Select Academic Year"
            required
            options={yearOptions}
            value={academicYear}
            onChange={(e) => setAcademicYear(e.value)}
            placeholder="Select"
          />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Balance Leave Details</h2>
          <Button
            label="Export To Excel"
            icon="pi pi-download"
            className="bg-blue-600 border-none"
            type="button"
            onClick={() => {}}
          />
        </div>

        <Table
          columns={columns}
          data={balanceLeaveList}
          showPagination
          rowsPerPage={10}
          {...{ format: "balance_leave" }}
        />
      </div>
    </PageLayout>
  );
};

export default BalanceLeave;
