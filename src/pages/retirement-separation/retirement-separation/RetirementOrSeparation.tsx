import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Dropdown from "@/ui/shared/Dropdown";
import Input from "@/ui/shared/Input";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";

interface Option {
  label: string;
  value: string;
}

interface RetirementSeparationRow {
  employeeName: string;
  separationType: string;
  academicYear?: string;
  month?: string;
  employeeUniqueId?: string;
  status: string;
}

const EmployeeRetirementOrSeparation: React.FC = () => {
  const [showList, setShowList] = useState(false);

  const [separationType, setSeparationType] = useState<string>("");
  const [academicYear, setAcademicYear] = useState<string>("2025-26");
  const [month, setMonth] = useState<string>("");
  const [employeeUniqueId, setEmployeeUniqueId] = useState<string>("");

  const separationTypeOptions: Option[] = [
    { label: "Retirement", value: "Retirement" },
    { label: "Deputation", value: "Deputation" },
    { label: "Termination", value: "Termination" },
    { label: "Voluntary Retirement", value: "Voluntary Retirement" },
    { label: "Death", value: "Death" },
  ];

  const academicYearOptions: Option[] = Array.from({ length: 10 }, (_, i) => {
    const start = 2026 - i;
    return {
      label: `${start}-${String(start + 1).slice(-2)}`,
      value: `${start}-${start + 1}`,
    };
  });

  const monthOptions: Option[] = [
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

  const isRetirement = separationType === "Retirement";
  const showExtraFields = separationType !== "";

  const tableData: RetirementSeparationRow[] = [
    {
      employeeName: "Amit Kumar",
      separationType: "Retirement",
      academicYear: "2025-26",
      month: "March",
      status: "Pending",
    },
    {
      employeeName: "Neha Sharma",
      separationType: "Deputation",
      employeeUniqueId: "EMP1025",
      status: "Approved",
    },
  ];

  const columns = [
    { field: "employeeName", header: "Employee Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "separationType", header: "Separation Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "academicYear", header: "Academic Year", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "month", header: "Month", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "employeeUniqueId", header: "Employee Unique Id", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "status", header: "Status", sortable: true, style: { whiteSpace: "nowrap" } },
  ];

  const handleSearch = () => setShowList(true);

  const handleClear = () => {
    setSeparationType("");
    setAcademicYear("2025-26");
    setMonth("");
    setEmployeeUniqueId("");
    setShowList(false);
  };

  return (
    <PageLayout title="Retirement or Separation">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-gray-800">
          Employee Retirement or Separation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <Dropdown
            label="Separation Type"
            required
            options={separationTypeOptions}
            value={separationType}
            onChange={(e) => {
              setSeparationType(e.value);
              setMonth("");
              setEmployeeUniqueId("");
              setShowList(false);
            }}
          />

          {showExtraFields && isRetirement && (
            <>
              <Dropdown
                label="Academic Year"
                required
                options={academicYearOptions}
                value={academicYear}
                onChange={(e) => {
                  setAcademicYear(e.value);
                  setShowList(false);
                }}
              />

              <Dropdown
                label="Month"
                required
                options={monthOptions}
                value={month}
                onChange={(e) => {
                  setMonth(e.value);
                  setShowList(false);
                }}
              />
            </>
          )}

          {showExtraFields && !isRetirement && (
            <Input
              label="Employee Unique Id"
              required
              placeholder="Enter Employee Unique Id"
              value={employeeUniqueId}
              onChange={(e) => {
                setEmployeeUniqueId(e.target.value);
                setShowList(false);
              }}
            />
          )}

          <div className="flex gap-2">
            <Button
              label="Search"
              className="bg-blue-600 px-6 h-[42px]"
              onClick={handleSearch}
              type="button"
            />
            <Button
              label="Clear"
              severity="danger"
              className="px-6 h-[42px]"
              onClick={handleClear}
              type="button"
            />
          </div>
        </div>
      </div>

      {showList && (
        <div className="bg-white mt-6 p-6 rounded-lg border border-gray-200 shadow-sm">
          <Table
            columns={columns}
            data={tableData}
            showPagination
            rowsPerPage={10}
            {...{ format: "employee_retirement_or_separation" }}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default EmployeeRetirementOrSeparation;
