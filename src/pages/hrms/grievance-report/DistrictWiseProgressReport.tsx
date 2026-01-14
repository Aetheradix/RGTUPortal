/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import PageLayout from "../../../components/PageLayout";
import { ProgressSpinner } from "primereact/progressspinner";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import Table from "@/ui/shared/Table";
import { detailData, masterData } from "./data";
import { detailColumns } from "./table";

const DistrictProgressReport: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showMasterTable, setShowMasterTable] = useState(false);
  const [showDetailTable, setShowDetailTable] = useState(false);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowMasterTable(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    setShowDetailTable(false);
    setShowMasterTable(true);
    setSelectedDistrict(null);
  };

  const handleViewDetails = (district: string) => {
    setSelectedDistrict(district);
    setShowMasterTable(false);
    setShowDetailTable(true);
  };

  const masterColumns = [
    { field: "districtName", header: "District Name" },
    { field: "totalApps", header: "Total Applications" },
    {
      field: "pending",
      header: "Pending For Action",
      body: (rowData: any) => (
        <button
          onClick={() => handleViewDetails(rowData.districtName)}
          className="bg-gray-50 border border-gray-300 rounded px-3 py-1 hover:bg-indigo-50 hover:border-indigo-400 transition-colors text-indigo-600 font-bold"
        >
          {rowData.pending}
        </button>
      ),
    },
    { field: "rejected", header: "Rejected Grievances" },
    { field: "disposed", header: "Disposed Grievances" },
    { field: "percent", header: "Percent Pendency" },
  ];

  return (
    <PageLayout title="District Wise Progress Report">
      {loading && (
        <div className="flex flex-col items-center justify-center min-h-75 bg-white rounded-lg border border-gray-100 shadow-sm mt-4">
          <ProgressSpinner
            style={{ width: "45px", height: "45px" }}
            strokeWidth="4"
          />
          <p className="mt-4 text-gray-400 font-medium">
            Loading Progress Report...
          </p>
        </div>
      )}
      {showMasterTable && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-4 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-700">
              District Wise Grievance Progress Report
            </h2>
            <div className="flex items-center gap-3">
              <Button
                label="Export To Excel"
                icon="pi pi-file-excel"
                className="p-button-outlined p-button-sm text-green-600 border-green-600"
              />
              <div className="flex items-center gap-2 border rounded px-2 py-1 border-gray-300">
                <i className="pi pi-search text-gray-400" />
                <InputText
                  placeholder="Search..."
                  className="p-inputtext-sm border-none shadow-none w-40"
                />
              </div>
            </div>
          </div>
          <Table
            data={masterData}
            columns={masterColumns}
            showPagination
            rowsPerPage={10}
            className="p-datatable-sm text-[12px]"
          />
        </div>
      )}
      {showDetailTable && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-4 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-4">
              <Button
                icon="pi pi-arrow-left"
                className="p-button-text p-button-secondary"
                onClick={handleBack}
              />
              <h2 className="text-lg font-semibold text-gray-700">
                District Wise Grievance Progress Details
                {selectedDistrict && `- ${selectedDistrict}`}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Button
                label="Export"
                icon="pi pi-file-excel"
                className="p-button-outlined p-button-sm text-green-600 border-green-600"
              />
              <div className="flex items-center gap-2 border rounded px-2 py-1 border-gray-300">
                <i className="pi pi-search text-gray-400" />
                <InputText
                  placeholder="Search..."
                  className="p-inputtext-sm border-none shadow-none w-40"
                />
              </div>
            </div>
          </div>
          <Table
            data={detailData}
            columns={detailColumns}
            showPagination
            rowsPerPage={10}
            className="p-datatable-sm text-[12px]"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default DistrictProgressReport;
