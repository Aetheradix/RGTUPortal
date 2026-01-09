import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";
import { DateInput } from "@/ui/shared/Input";

const districtOptions = [
  { label: "Bhopal", value: "bhopal" },
  { label: "Indore", value: "indore" },
  { label: "Gwalior", value: "gwalior" },
];

const DistrictWiseACRReport: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [district, setDistrict] = useState<string | null>(null);

  const acrReportData = [
    {
      employeeName: "Gopal Verma (EDP4454445)",
      academicYear: "2023-2024",
      designation: "Assistant Teacher",
      district: "Bhopal",
      reportingOfficer: "Ramesh Sharma",
      acrStatus: "Approved",
      submittedDate: "18-03-2024",
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
      reportingOfficer: "Suresh Verma",
      acrStatus: "Pending",
      submittedDate: "22-03-2024",
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
    { field: "reportingOfficer", header: "Reporting Officer", sortable: true },
    { field: "acrStatus", header: "ACR Status", sortable: true },
    { field: "submittedDate", header: "Submitted Date" },
    { field: "viewReport", header: "View ACR Report" },
  ];

  const handleSearch = () => {
    if (fromDate && toDate && district) {
      setShowList(true);
    } else {
      alert("Please select District, From Date and To Date");
    }
  };

  const handleClear = () => {
    setFromDate(null);
    setToDate(null);
    setDistrict(null);
    setShowList(false);
  };

  return (
    <PageLayout title="District Wise ACR Report">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4 text-blue-700">
            District Wise ACR Report
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
            <Dropdown
              label="Select District"
              value={district}
              options={districtOptions}
              onChange={(e) => setDistrict(e.value)}
              placeholder="Select"
              required
            />

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

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
              District Wise ACR Report List
            </h3>

            <Table
              columns={columns}
              data={acrReportData}
              showPagination
              rowsPerPage={10}
              {...{ format: "district_wise_acr_report" }}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default DistrictWiseACRReport;
