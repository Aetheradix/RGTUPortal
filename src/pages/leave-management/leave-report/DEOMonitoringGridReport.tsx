import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";

interface DEOMonitorRow {
  block: string;
  sankul: string;
  school: string;
  udise: string;
  teacherName: string;
  designation: string;
  subject: string;
  leavePeriod: string;
}

const DEOMonitoringGridReport: React.FC = () => {
  const [district, setDistrict] = useState<string | null>(null);
  const [blockFilter, setBlockFilter] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);

  const districtOptions = [
    { label: "Betul", value: "Betul" },
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
  ];

  const blockOptions = [
    { label: "Vijaypur", value: "Vijaypur" },
    { label: "Multai", value: "Multai" },
    { label: "Huzur", value: "Huzur" },
  ];

  const [gridList] = useState<DEOMonitorRow[]>([
    {
      block: "Vijaypur",
      sankul: "NA",
      school: "GHS AGRA(9 to 10)",
      udise: "AZ9122",
      teacherName: "Ashok Kumar Shakya",
      designation: "Madhyamik Shikshak",
      subject: "Biology - MS Teachers",
      leavePeriod: "Not on Leave",
    },
    {
      block: "Vijaypur",
      sankul: "Vijaypur, Principal, GHS AGRA(9 to 10)",
      school: "GHS AGRA(9 to 10)",
      udise: "BA8056",
      teacherName: "Shelendra Kumar Shrivastav",
      designation: "Madhyamik Shikshak",
      subject: "Maths - MS Teachers",
      leavePeriod: "Not on Leave",
    },
    {
      block: "Vijaypur",
      sankul: "Vijaypur, Principal, GHS AGRA(9 to 10)",
      school: "GHS ARRODARI (1 to 10)",
      udise: "CD6186",
      teacherName: "VIKAS SONI",
      designation: "Madhyamik Shikshak",
      subject: "NA",
      leavePeriod: "Not on Leave",
    },
    {
      block: "Vijaypur",
      sankul: "Vijaypur, Principal, GHSS TARAKALA(1 to 12)",
      school: "GHS ARRODARI (1 to 10)",
      udise: "BV9180",
      teacherName: "Girraj Jat",
      designation: "Madhyamik Shikshak",
      subject: "Hindi - MS Teachers",
      leavePeriod: "Not on Leave",
    },
    {
      block: "Vijaypur",
      sankul: "Vijaypur, Principal, GHSS TARAKALA(1 to 12)",
      school: "GHS ARRODARI (1 to 10)",
      udise: "BZ7243",
      teacherName: "Mathlesh Meena",
      designation: "Prathmik Shikshak",
      subject: "General",
      leavePeriod: "Not on Leave",
    },
  ]);

  const columns = [
    { field: "block", header: "Block", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "sankul", header: "Sankul", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "school", header: "School", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "udise", header: "UDISE", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "teacherName", header: "Teacher Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "designation", header: "Designation", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "subject", header: "Subject", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "leavePeriod", header: "Leave Period", sortable: true, style: { whiteSpace: "nowrap" } },
  ];

  return (
    <PageLayout title="DEO Monitoring Grid Report">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-700">DEO Monitoring Grid Report</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown
            label="Select District"
            required
            options={districtOptions}
            value={district}
            onChange={(e) => setDistrict(e.value)}
            placeholder="Select"
          />

          <Dropdown
            label="Select Block"
            required
            options={blockOptions}
            value={blockFilter}
            onChange={(e) => setBlockFilter(e.value)}
            placeholder="Select"
          />
        </div>

        <div className="flex gap-4 mt-6">
          <Button
            label="Get Details"
            className="bg-green-600 px-8"
            type="button"
            onClick={() => setShowList(true)}
          />
        </div>
      </div>

      {showList && (
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">DEO Monitoring Grid Report Details</h2>
            <Button
              label="Export To Excel"
              icon="pi pi-download"
              className="bg-blue-600 border-none"
              type="button"
              onClick={() => {}}
            />
          </div>

          <Table columns={columns} data={gridList} showPagination rowsPerPage={10} {...{ format: "deo_monitoring_grid" }} />
        </div>
      )}
    </PageLayout>
  );
};

export default DEOMonitoringGridReport;
