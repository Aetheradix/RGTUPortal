/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import {
  academicYearOptions,
  postTypeOptions,
  districtCountingData,
} from "./administrative.data";

const DistrictCountingReport: React.FC = () => {
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState({
    academicYear: null,
    postType: null,
  });
  const toast = useRef<Toast>(null);

  const handleGenerate = () => {
    if (!filters.academicYear || !filters.postType) {
      toast.current?.show({
        severity: "warn",
        summary: "Validation Required",
        detail:
          "Please select Academic Year and Post Type to generate the report.",
        life: 3000,
      });
      return;
    }
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Report Generated",
      detail: "District-wise summary fetched successfully.",
      life: 2000,
    });
  };

  const handleClear = () => {
    setFilters({ academicYear: null, postType: null });
    setStep(1);
  };

  const districtCountingColumns = [
    { field: "districtName", header: "District Name", sortable: true },
    {
      field: "totalApps",
      header: "Total Applications",
      sortable: true,
    },
    {
      field: "verified",
      header: "Verified",
      sortable: true,
    },
    { field: "rejected", header: "Rejected" },
    {
      field: "pending",
      header: "Pending Action",
      body: (rowData: any) => (
        <span className="p-tag p-tag-warning">{rowData.pending}</span>
      ),
    },
  ];

  return (
    <PageLayout title="District Wise Counting Report">
      <Toast ref={toast} />

      {/* Selection/Filter Section */}
      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Academic Year <span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={filters.academicYear}
              options={academicYearOptions}
              onChange={(e) =>
                setFilters({ ...filters, academicYear: e.value })
              }
              placeholder="Select Year"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Post Type <span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={filters.postType}
              options={postTypeOptions}
              onChange={(e) => setFilters({ ...filters, postType: e.value })}
              placeholder="Select Type"
              className="p-inputtext-sm w-full"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <Button
            label="Generate Report"
            icon="pi pi-chart-bar"
            className="p-button-primary px-6"
            onClick={handleGenerate}
          />
          <Button
            label="Reset"
            icon="pi pi-refresh"
            className="p-button-outlined p-button-danger px-6"
            onClick={handleClear}
          />
        </div>
      </div>

      {/* Results Table Section */}
      {step === 2 && (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-4 border-b pb-4">
            <div>
              <h3 className="text-md font-semibold text-gray-700">
                District Summary Statistics
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Summary of transfer applications and processing status per
                district
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                icon="pi pi-file-excel"
                className="p-button-success p-button-sm"
                label="Export Excel"
                tooltip="Download report as CSV/Excel"
              />
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium text-gray-600">
                  Search District:
                </span>
                <InputText
                  className="p-inputtext-sm w-48"
                  placeholder="Enter district name..."
                />
              </div>
            </div>
          </div>

          <Table
            data={districtCountingData}
            columns={districtCountingColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm custom-table"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default DistrictCountingReport;
