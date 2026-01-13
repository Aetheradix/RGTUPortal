import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import { Button } from "primereact/button";

interface CertificateRow {
  district: string;
}

const VocationalCertificateDownload: React.FC = () => {
  const [academicYear, setAcademicYear] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);

  const yearOptions = Array.from({ length: 26 }, (_, i) => {
    const start = 2026 - i;
    const end = start - 1;
    return {
      label: `${start}-${end.toString().slice(-2)}`,
      value: `${start}-${end}`,
    };
  });

  const tableData: CertificateRow[] = [
    { district: "Bhopal" },
  ];

  const columns = [
    {
      field: "district",
      header: "District",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "download",
      header: "Download Certificate",
      style: { whiteSpace: "nowrap" },
      body: () => (
        <Button
          label="Download Certificate"
          className="p-button-sm bg-orange-500 border-none"
        />
      ),
    },
  ];

  const handleSearch = () => {
    if (academicYear) {
      setShowList(true);
    }
  };

  const handleClear = () => {
    setAcademicYear(null);
    setShowList(false);
  };

  return (
    <PageLayout title="Vocational Certificate Download">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">
            Vocational Certificate Download DEO
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <Dropdown
            label="Academic Year"
            required
            value={academicYear}
            onChange={(e) => setAcademicYear(e.value)}
            options={yearOptions}
            placeholder="Select"
          />

          <div className="flex gap-3">
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
        <div className="bg-white p-6 mt-6 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-700">
              Vocational Certificate Download DEO
            </h3>
          </div>

          <Table
            columns={columns}
            data={tableData}
            showPagination
            rowsPerPage={10}
            {...{ format: "vocational_certificate_download" }}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default VocationalCertificateDownload;
