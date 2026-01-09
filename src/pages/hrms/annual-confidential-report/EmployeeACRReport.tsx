import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";
import { DateInput } from "@/ui/shared/Input";

const EmployeeACRReport: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  const acrReportData = [
    {
      employeeName: "Gopal Verma (EDP4454445)",
      academicYear: "2023-2024",
      designation: "Assistant Teacher",
      district: "Bhopal",
      status: "Submitted",
      submittedDate: "12-03-2024",
      viewReport: (
        <Button
          label="View"
          className="p-button-sm bg-indigo-500 border-none"
        />
      ),
    },
    {
      employeeName: "Amit Kumar (EDP889966)",
      academicYear: "2023-2024",
      designation: "Senior Teacher",
      district: "Bhopal",
      status: "Approved",
      submittedDate: "18-03-2024",
      viewReport: (
        <Button
          label="View"
          className="p-button-sm bg-indigo-500 border-none"
        />
      ),
    },
  ];

  const columns = [
    { field: "employeeName", header: "Employee Name", sortable: true },
    { field: "academicYear", header: "Academic Year", sortable: true },
    { field: "designation", header: "Designation", sortable: true },
    { field: "district", header: "District", sortable: true },
    { field: "status", header: "ACR Status", sortable: true },
    { field: "submittedDate", header: "Submitted Date" },
    { field: "viewReport", header: "View ACR Report" },
  ];

  const handleSearch = () => {
    if (fromDate && toDate) {
      setShowList(true);
    } else {
      alert("Please select both From Date and To Date");
    }
  };

  const handleClear = () => {
    setFromDate(null);
    setToDate(null);
    setShowList(false);
  };

  return (
    <PageLayout title="Employee ACR Report">
      <div className="space-y-6">
        {/* Filter Section */}
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4 text-blue-700">
            Employee ACR Report
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <DateInput
              label="From Date"
              value={fromDate}
              onChange={(e) => setFromDate(e.value as Date)}
              placeholder="dd/mm/yyyy"
            />

            <DateInput
              label="To Date"
              value={toDate}
              onChange={(e) => setToDate(e.value as Date)}
              placeholder="dd/mm/yyyy"
            />

            <div className="flex gap-2">
              <Button
                label="Search"
                className="bg-blue-600 px-6 h-[42px]"
                onClick={handleSearch}
              />
              <Button
                label="Clear"
                severity="danger"
                className="px-6 h-[42px]"
                onClick={handleClear}
              />
            </div>
          </div>
        </div>

        {/* List Section */}
        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
              Employee ACR Report List
            </h3>

            <Table
              columns={columns}
              data={acrReportData}
              showPagination
              rowsPerPage={10}
              {...{ format: "employee_acr_report" }}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default EmployeeACRReport;
