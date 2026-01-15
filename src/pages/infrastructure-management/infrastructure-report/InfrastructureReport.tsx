import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";

interface InfrastructureReportRow {
  district: string;
  block: string;
  sankul: string;
  schoolName: string;
  udiseCode: string;
  infrastructureType: string;
  availableCount: number;
  conditionStatus: string;
  lastUpdated: string;
}

const InfrastructureReportt: React.FC = () => {
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
    { label: "Ujjain", value: "Ujjain" },
  ];

  const infraTypeOptions = [
    { label: "Classroom", value: "Classroom" },
    { label: "Library", value: "Library" },
    { label: "Computer Lab", value: "Computer Lab" },
    { label: "Science Lab", value: "Science Lab" },
    { label: "Playground", value: "Playground" },
    { label: "Toilet", value: "Toilet" },
  ];

  const conditionOptions = [
    { label: "Good", value: "Good" },
    { label: "Average", value: "Average" },
    { label: "Poor", value: "Poor" },
  ];

  const tableData: InfrastructureReportRow[] = [
    {
      district: "Bhopal",
      block: "Huzur",
      sankul: "Sankul-01",
      schoolName: "Govt. HSS Bhopal",
      udiseCode: "23350100001",
      infrastructureType: "Classroom",
      availableCount: 18,
      conditionStatus: "Good",
      lastUpdated: "12/01/2026",
    },
    {
      district: "Indore",
      block: "Indore Urban",
      sankul: "Sankul-02",
      schoolName: "Govt. HS Indore",
      udiseCode: "23260100011",
      infrastructureType: "Computer Lab",
      availableCount: 2,
      conditionStatus: "Average",
      lastUpdated: "10/01/2026",
    },
    {
      district: "Gwalior",
      block: "Morar",
      sankul: "Sankul-03",
      schoolName: "Govt. MS Gwalior",
      udiseCode: "23120100021",
      infrastructureType: "Library",
      availableCount: 1,
      conditionStatus: "Good",
      lastUpdated: "09/01/2026",
    },
  ];

  const columns = [
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "block", header: "Block", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "sankul", header: "Sankul", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "schoolName", header: "School Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "udiseCode", header: "UDISE Code", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "infrastructureType", header: "Infrastructure Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "availableCount", header: "Available Count", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "conditionStatus", header: "Condition", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "lastUpdated", header: "Last Updated", style: { whiteSpace: "nowrap" } },
  ];

  return (
    <PageLayout title="Infrastructure Report">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-gray-800">Infrastructure Report</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <Dropdown label="Academic Year" required options={academicYearOptions} />
          <Dropdown label="District" required options={districtOptions} />
          <Dropdown label="Infrastructure Type" required options={infraTypeOptions} />
          <Dropdown label="Condition Status" options={conditionOptions} />

          <div className="flex gap-2 md:col-span-4">
            <Button
              label="Get Details"
              className="bg-blue-600 px-6 h-[42px]"
              onClick={() => setShowList(true)}
            />
            <Button
              label="Clear"
              severity="danger"
              className="px-6 h-[42px]"
              onClick={() => setShowList(false)}
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
            {...{ format: "infrastructure_report" }}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default InfrastructureReportt;
