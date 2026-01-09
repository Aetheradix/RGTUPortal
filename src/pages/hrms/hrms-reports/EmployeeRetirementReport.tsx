import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import { officeOptions, retirementData } from "./data";
import { retirementReportColumns } from "./Tables";

const EmployeeRetirementReport: React.FC = () => {
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null);
  const [showReport, setShowReport] = useState(false);
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!selectedOffice) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Select Office Type is required (*)",
        life: 3000,
      });
      return;
    }
    setShowReport(true);
  };

  const handleClear = () => {
    setSelectedOffice(null);
    setShowReport(false);
  };

  return (
    <PageLayout title="Employee Retirement Report">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mb-6">
        <h3 className="text-md font-semibold text-gray-700 mb-6 border-b pb-4">
          Employee Retirement Detail
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600">
              Select Office Type <span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={selectedOffice}
              options={officeOptions}
              onChange={(e) => setSelectedOffice(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full border-gray-300"
            />
          </div>
        </div>
        <div className="flex gap-2 mt-6">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-primary px-6 bg-indigo-500 border-none"
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
      {showReport && (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
          <h3 className="text-md font-semibold text-gray-700 mb-6 border-b pb-4">
            Employee Retirement Report
          </h3>

          <Table
            data={retirementData}
            columns={retirementReportColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm text-xs"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default EmployeeRetirementReport;
