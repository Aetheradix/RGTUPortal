/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import PageLayout from "../../../components/PageLayout";
import { ProgressSpinner } from "primereact/progressspinner";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import Table from "@/ui/shared/Table";
import { aprMasterData, aprDetailData } from "./data";
import { aprDistrictMasterColumns, aprDistrictDetailColumns } from "./table";

const APRDistrictWiseReport: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"master" | "detail">("master");
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleViewDetails = (district: string, type: string) => {
    setSelectedDistrict(`${district} (${type})`);
    setView("detail");
  };

  const masterColumns = aprDistrictMasterColumns.map((col) => {
    if (col.field === "filedAPR") {
      return {
        ...col,
        body: (rowData: any) => (
          <button
            onClick={() => handleViewDetails(rowData.districtName, "Filed")}
            className="text-emerald-600 font-bold hover:underline cursor-pointer bg-transparent border-none p-0"
          >
            {rowData.filedAPR}
          </button>
        ),
      };
    }
    if (col.field === "pendingAPR") {
      return {
        ...col,
        body: (rowData: any) => (
          <button
            onClick={() => handleViewDetails(rowData.districtName, "Pending")}
            className="text-red-600 font-bold hover:underline cursor-pointer bg-transparent border-none p-0"
          >
            {rowData.pendingAPR}
          </button>
        ),
      };
    }
    return col;
  });

  return (
    <PageLayout title="APRMS District Wise Report">
      {loading ? (
        <div className="flex flex-col items-center justify-center min-h-100 bg-white rounded-lg border border-gray-100 mt-4">
          <ProgressSpinner
            style={{ width: "45px", height: "45px" }}
            strokeWidth="4"
          />
          <p className="mt-4 text-gray-400 font-medium">Loading Records...</p>
        </div>
      ) : (
        <div className="animate-fade-in">
          {view === "master" ? (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-4 animate-fade-in relative">
              <h3 className="text-indigo-600 font-bold text-[16px] mb-6 flex items-center gap-2">
                <span className="w-1 h-4 bg-indigo-500 rounded-full"></span>
                District Wise Compliance Summary
              </h3>
              <div className="flex justify-end items-center mb-4 gap-3">
                <Button
                  label="Export"
                  icon="pi pi-file-excel"
                  className="p-button-outlined p-button-sm text-green-600 border-green-600"
                />
                <div className="flex items-center gap-2 border rounded px-2 py-1 border-gray-300">
                  <i className="pi pi-search text-gray-400 text-sm" />
                  <InputText
                    placeholder="Search..."
                    className="p-inputtext-sm border-none shadow-none w-40"
                  />
                </div>
              </div>
              <Table
                data={aprMasterData}
                columns={masterColumns}
                showPagination
                rowsPerPage={10}
                className="p-datatable-sm custom-minimal-table"
              />
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-4 relative">
              <span className="absolute -top-3 left-6 bg-white px-3 text-indigo-700 font-bold text-[14px] border border-orange-200 rounded-md">
                Detailed Report: {selectedDistrict}
              </span>
              <div className="flex justify-between items-center mb-4">
                <Button
                  icon="pi pi-arrow-left"
                  label="Back"
                  className="p-button-text p-button-sm text-gray-600"
                  onClick={() => setView("master")}
                />
                <div className="flex items-center gap-2 border rounded px-2 py-1 border-gray-300">
                  <i className="pi pi-search text-gray-400 text-sm" />
                  <InputText
                    placeholder="Search..."
                    className="p-inputtext-sm border-none shadow-none w-40"
                  />
                </div>
              </div>
              <Table
                data={aprDetailData}
                columns={aprDistrictDetailColumns}
                showPagination
                rowsPerPage={10}
                className="p-datatable-sm custom-minimal-table"
              />
            </div>
          )}
        </div>
      )}
    </PageLayout>
  );
};

export default APRDistrictWiseReport;
