import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { DateInput } from "@/ui/shared/Input";
import { Button } from "primereact/button";

interface LeaveOpeningBalanceRow {
  leaveType: string;
  remainingLeaves: number;
}

const EmployeeLeaveOpeningBalance: React.FC = () => {
  const [officeName, setOfficeName] = useState<string | null>("GHSS BARA(1 to 12) (55151)");
  const [employeeName, setEmployeeName] = useState<string | null>("AE3108 - Gajanand Suryawanshi");
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date("2026-01-01"));

  const officeOptions = [
    { label: "GHSS BARA(1 to 12) (55151)", value: "GHSS BARA(1 to 12) (55151)" },
    { label: "Govt HSS Bhopal (11001)", value: "Govt HSS Bhopal (11001)" },
  ];

  const employeeOptions = [
    { label: "AE3108 - Gajanand Suryawanshi", value: "AE3108 - Gajanand Suryawanshi" },
    { label: "AE2201 - Amit Kumar", value: "AE2201 - Amit Kumar" },
  ];

  const [openingBalanceList] = useState<LeaveOpeningBalanceRow[]>([
    { leaveType: "Casual Leave", remainingLeaves: 0 },
    { leaveType: "Leave not due", remainingLeaves: 0 },
    { leaveType: "Extra Ordinary Leave", remainingLeaves: 0 },
    { leaveType: "Commute Leave", remainingLeaves: 0 },
    { leaveType: "Half Pay Leave", remainingLeaves: 0 },
    { leaveType: "Earned Leave", remainingLeaves: 0 },
    { leaveType: "CCL Leave", remainingLeaves: 0 },
  ]);

  const columns = [
    { field: "leaveType", header: "Leave Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "remainingLeaves", header: "Remaining Leaves", sortable: true, style: { whiteSpace: "nowrap" } },
  ];

  const handleSearch = () => {};

  const handleClear = () => {
    setOfficeName(null);
    setEmployeeName(null);
    setSelectedDate(null);
  };

  return (
    <PageLayout title="Employee Leave Opening Balance">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">Employee Leave Opening Balance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown
            label="Select Office Name(Code)"
            required
            options={officeOptions}
            value={officeName}
            onChange={(e) => setOfficeName(e.value)}
            placeholder="Select"
          />

          <Dropdown
            label="Select Employee Name(Code)"
            required
            options={employeeOptions}
            value={employeeName}
            onChange={(e) => setEmployeeName(e.value)}
            placeholder="Select"
          />

          <DateInput
            label="Select Date"
            required
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.value as Date)}
            placeholder="dd-mm-yyyy"
            dateFormat="dd-mm-yy"
            showButtonBar
          />
        </div>

        <div className="flex gap-4 mt-6">
          <Button label="Search" className="bg-blue-600 px-8" onClick={handleSearch} type="button" />
          <Button label="Clear" severity="danger" className="px-8" onClick={handleClear} type="button" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Employee Leave Opening Balance Details</h2>
          <Button
            label="Export To Excel"
            icon="pi pi-download"
            className="bg-blue-600 border-none"
            type="button"
            onClick={() => {}}
          />
        </div>

        <Table columns={columns} data={openingBalanceList} showPagination rowsPerPage={10} {...{ format: "employee_leave_opening_balance" }} />
      </div>
    </PageLayout>
  );
};

export default EmployeeLeaveOpeningBalance;
