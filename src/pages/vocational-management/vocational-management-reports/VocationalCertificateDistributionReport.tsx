import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";

interface DistributionRow {
  district: string;
  academicYear: string;
  uploadedBy: string;
  uploadDate: string;
  isActive: boolean;
}

const VocationalCertificateDistributionReport: React.FC = () => {
  const [showList, setShowList] = useState(false);

  const academicYearOptions = Array.from({ length: 27 }, (_, i) => {
    const start = 2026 - i;
    return {
      label: `${start}-${String(start + 1).slice(-2)}`,
      value: `${start}-${start + 1}`,
    };
  });

  const data: DistributionRow[] = [
    { district: "Bhopal", academicYear: "2025-26", uploadedBy: "Admin", uploadDate: "12/07/2025", isActive: true },
    { district: "Indore", academicYear: "2024-25", uploadedBy: "Admin", uploadDate: "10/06/2025", isActive: true },
    { district: "Gwalior", academicYear: "2023-24", uploadedBy: "Admin", uploadDate: "05/05/2024", isActive: false },
    { district: "Ujjain", academicYear: "2022-23", uploadedBy: "Admin", uploadDate: "20/04/2023", isActive: true },
    { district: "Jabalpur", academicYear: "2021-22", uploadedBy: "Admin", uploadDate: "15/03/2022", isActive: true },
  ];

  const columns = [
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "academicYear", header: "Academic Year", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "uploadedBy", header: "Uploaded By", style: { whiteSpace: "nowrap" } },
    { field: "uploadDate", header: "Upload Date", style: { whiteSpace: "nowrap" } },
    {
      field: "isActive",
      header: "Status",
      body: (row: DistributionRow) => (
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
    <PageLayout title="Vocational Certificate Distribution Report">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-gray-800">
          Vocational Certificate Distribution Report
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
            data={data}
            showPagination
            rowsPerPage={10}
            {...{ format: "vocational_certificate_distribution_report" }}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default VocationalCertificateDistributionReport;
