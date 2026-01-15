import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";

interface DistrictWiseInfrastructureRow {
  district: string;
  totalSchools: number;
  totalClassrooms: number;
  totalLabs: number;
  totalLibraries: number;
  totalPlaygrounds: number;
  lastUpdated: string;
}

const DistrictWiseInfrastructureReport: React.FC = () => {
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

  const tableData: DistrictWiseInfrastructureRow[] = [
    {
      district: "Bhopal",
      totalSchools: 420,
      totalClassrooms: 6850,
      totalLabs: 540,
      totalLibraries: 390,
      totalPlaygrounds: 220,
      lastUpdated: "10/01/2026",
    },
    {
      district: "Indore",
      totalSchools: 380,
      totalClassrooms: 6100,
      totalLabs: 490,
      totalLibraries: 340,
      totalPlaygrounds: 210,
      lastUpdated: "11/01/2026",
    },
    {
      district: "Gwalior",
      totalSchools: 290,
      totalClassrooms: 4750,
      totalLabs: 380,
      totalLibraries: 260,
      totalPlaygrounds: 150,
      lastUpdated: "09/01/2026",
    },
  ];

  const columns = [
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "totalSchools", header: "Total Schools", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "totalClassrooms", header: "Total Classrooms", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "totalLabs", header: "Total Labs", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "totalLibraries", header: "Total Libraries", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "totalPlaygrounds", header: "Total Playgrounds", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "lastUpdated", header: "Last Updated", style: { whiteSpace: "nowrap" } },
  ];

  return (
    <PageLayout title="District Wise Infrastructure Report">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-gray-800">
          District Wise Infrastructure Report
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <Dropdown label="Academic Year" required options={academicYearOptions} />
          <Dropdown label="District" required options={districtOptions} />

          <div className="flex gap-2">
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
            {...{ format: "district_wise_infrastructure_report" }}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default DistrictWiseInfrastructureReport;
