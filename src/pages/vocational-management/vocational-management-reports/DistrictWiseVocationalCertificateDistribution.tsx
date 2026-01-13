import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";

interface DistrictCertificateRow {
  district: string;
  academicYear: string;
  certificateCount: number;
  uploadDate: string;
  isActive: boolean;
}

const DistrictWiseVocationalCertificateDistribution: React.FC = () => {
  const [showList, setShowList] = useState(false);

  const academicYearOptions = Array.from({ length: 27 }, (_, i) => {
    const start = 2026 - i;
    return {
      label: `${start}-${String(start + 1).slice(-2)}`,
      value: `${start}-${start + 1}`,
    };
  });

  const tableData: DistrictCertificateRow[] = [
    { district: "Bhopal", academicYear: "2025-26", certificateCount: 1200, uploadDate: "12/07/2025", isActive: true },
    { district: "Indore", academicYear: "2025-26", certificateCount: 980, uploadDate: "10/07/2025", isActive: true },
    { district: "Gwalior", academicYear: "2024-25", certificateCount: 750, uploadDate: "05/06/2024", isActive: false },
    { district: "Ujjain", academicYear: "2023-24", certificateCount: 640, uploadDate: "18/05/2023", isActive: true },
    { district: "Jabalpur", academicYear: "2022-23", certificateCount: 890, uploadDate: "20/04/2022", isActive: true },
  ];

  const columns = [
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "academicYear", header: "Academic Year", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "certificateCount", header: "No. of Certificates", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "uploadDate", header: "Upload Date", style: { whiteSpace: "nowrap" } },
    {
      field: "isActive",
      header: "Status",
      body: (row: DistrictCertificateRow) => (
        <span
          className={`px-3 py-1 rounded text-xs font-bold ${
            row.isActive
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {row.isActive ? "Active" : "InActive"}
        </span>
      ),
      style: { whiteSpace: "nowrap" },
    },
  ];

  return (
    <PageLayout title="District Wise Vocational Certificate Distribution">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-gray-800">
          District Wise Vocational Certificate Distribution
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <Dropdown
            label="Academic Year"
            required
            options={academicYearOptions}
          />

          <div className="flex gap-2">
            <Button
              label="Search"
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
            {...{ format: "district_wise_vocational_certificate_distribution" }}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default DistrictWiseVocationalCertificateDistribution;
