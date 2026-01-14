/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import {
  districtsOptions,
  blocksOptions,
  academicYearOptions,
  transferReportData,
} from "./administrative.data";

const AdministrativeTransferReport: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [showResults, setShowResults] = useState(false);
  const [filters, setFilters] = useState({
    district: null,
    block: null,
    academicYear: "2024-25",
  });

  const handleSearch = () => {
    if (!filters.district || !filters.block) {
      toast.current?.show({
        severity: "warn",
        summary: "Missing Fields",
        detail: "Please select District and Block",
        life: 3000,
      });
      return;
    }
    setShowResults(true);
  };

  const handleClear = () => {
    setFilters({ district: null, block: null, academicYear: "2024-25" });
    setShowResults(false);
  };

  const reportColumns = [
    { field: "orderNo", header: "Order No." },
    { field: "employeeName", header: "Employee Name (ID)" },
    { field: "designation", header: "Designation" },
    { field: "fromOffice", header: "From Office" },
    { field: "toOffice", header: "To Office" },
    { field: "transferDate", header: "Date" },
    {
      field: "status",
      header: "Status",
      body: (rowData: any) => (
        <span
          className={`px-2 py-1 rounded-full text-[10px] font-bold ${
            rowData.status === "Completed"
              ? "bg-emerald-100 text-emerald-600"
              : "bg-amber-100 text-amber-600"
          }`}
        >
          {rowData.status}
        </span>
      ),
    },
    {
      field: "",
      header: "Action",
      body: () => (
        <Button
          icon="pi pi-file-pdf"
          className="p-button-text p-button-sm p-button-danger"
          tooltip="View Transfer Order"
        />
      ),
    },
  ];

  return (
    <PageLayout title="Transfer Report">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Academic Year
            </label>
            <Dropdown
              value={filters.academicYear}
              options={academicYearOptions}
              onChange={(e) =>
                setFilters({ ...filters, academicYear: e.value })
              }
              className="p-inputtext-sm w-full border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              District Name
            </label>
            <Dropdown
              value={filters.district}
              options={districtsOptions}
              onChange={(e) => setFilters({ ...filters, district: e.value })}
              placeholder="Select District"
              className="p-inputtext-sm w-full border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">
              Block Name
            </label>
            <Dropdown
              value={filters.block}
              options={blocksOptions}
              onChange={(e) => setFilters({ ...filters, block: e.value })}
              placeholder="Select Block"
              className="p-inputtext-sm w-full border-gray-300"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <Button
            label="Generate Report"
            icon="pi pi-search"
            className="p-button-primary px-6"
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-outlined p-button-danger px-6"
            onClick={handleClear}
          />
        </div>
      </div>

      {showResults && (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h3 className="text-sm font-bold text-gray-700 uppercase">
              Transfer Orders List - {filters.district} ({filters.block})
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500">
                Search:
              </span>
              <InputText
                className="p-inputtext-sm w-48"
                placeholder="Filter records..."
              />
              <Button
                icon="pi pi-file-excel"
                className="p-button-success p-button-sm"
                tooltip="Export to Excel"
              />
            </div>
          </div>

          <Table
            data={transferReportData}
            columns={reportColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm text-xs"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default AdministrativeTransferReport;
