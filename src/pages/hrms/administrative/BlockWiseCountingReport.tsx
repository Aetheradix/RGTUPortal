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
  districtsOptions,
  blockCountingData,
} from "./administrative.data";

const BlockCountingReport: React.FC = () => {
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState({
    academicYear: null,
    district: null,
    postType: null,
  });
  const toast = useRef<Toast>(null);

  const handleGenerate = () => {
    if (!filters.academicYear || !filters.district || !filters.postType) {
      toast.current?.show({
        severity: "warn",
        summary: "Selection Required",
        detail:
          "Please select Academic Year, District, and Post Type to view block statistics.",
        life: 3000,
      });
      return;
    }
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Data Loaded",
      detail: "Block-wise summary generated successfully.",
      life: 2000,
    });
  };

  const handleClear = () => {
    setFilters({ academicYear: null, district: null, postType: null });
    setStep(1);
  };

  const blockCountingColumns = [
    { field: "blockName", header: "Block Name", sortable: true },
    { field: "districtName", header: "District", sortable: true },
    { field: "totalApps", header: "Total Applications", sortable: true },
    { field: "verified", header: "Verified", sortable: true },
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
    <PageLayout title="Block Wise Counting Report">
      <Toast ref={toast} />

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
              District Name <span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={filters.district}
              options={districtsOptions}
              onChange={(e) => setFilters({ ...filters, district: e.value })}
              placeholder="Select District"
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
            icon="pi pi-chart-line"
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

      {step === 2 && (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-4 border-b pb-4">
            <div>
              <h3 className="text-md font-semibold text-gray-700">
                Block Summary Statistics
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Breakdown of applications and processing status for blocks in{" "}
                <span className="font-bold text-indigo-600">
                  {filters.district}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button
                icon="pi pi-file-pdf"
                className="p-button-success p-button-sm"
                label="Export PDF"
              />
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium text-gray-600">Search Block:</span>
                <InputText
                  className="p-inputtext-sm w-48"
                  placeholder="Enter block name..."
                />
              </div>
            </div>
          </div>

          <Table
            data={blockCountingData}
            columns={blockCountingColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm custom-table"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default BlockCountingReport;
