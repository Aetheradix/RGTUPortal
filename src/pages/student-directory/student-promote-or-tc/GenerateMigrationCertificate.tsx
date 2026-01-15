import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Dropdown, Table, Input } from "../../../ui/shared";

import { migrationYearOptions, migrationMockData } from "./data";
import { migrationColumns } from "./table";

const GenerateMigration: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState({
    migrationYear: null,
    enrollmentNo: "",
  });

  const handleSearch = () => {
    if (!filters.migrationYear || !filters.enrollmentNo.trim()) {
      toast.current?.show({
        severity: "error",
        summary: "Validation Error",
        detail: "Please select Migration Year and enter Enrollment No.",
        life: 3000,
      });
      return;
    }
    setStep(2);
  };

  const handleClear = () => {
    setFilters({ migrationYear: null, enrollmentNo: "" });
    setStep(1);
  };

  const handleGenerate = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Migration Certificate Generated Successfully",
      life: 3000,
    });
  };

  return (
    <PageLayout title="Generate Migration Certificate">
      <Toast ref={toast} />
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8 animate-fade-in">
        <div className="p-2 mb-4">
          <h2 className="text-lg font-medium text-gray-700 border-l-4 border-indigo-500 pl-3">
            Generate Migration Certificate
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-3">
          <Dropdown
            label="Select Migration Year"
            required
            placeholder="Select"
            value={filters.migrationYear}
            options={migrationYearOptions}
            onChange={(e) => setFilters({ ...filters, migrationYear: e.value })}
          />
          <Input
            label="Enter Enrollment No."
            required
            placeholder="Enter Enrollment No."
            value={filters.enrollmentNo}
            onChange={(e) =>
              setFilters({ ...filters, enrollmentNo: e.target.value })
            }
          />
        </div>
        <div className="flex gap-3 pt-8">
          <Button
            label="Search"
            className="p-button-primary"
            icon="pi pi-search"
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-danger p-button-outlined"
            onClick={handleClear}
          />
        </div>
      </div>
      {step === 2 && (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-4 p-2">
            <h2 className="text-lg font-medium text-gray-700">
              Generate Migration Certificate List
            </h2>
            <Button
              label="Back to Search"
              icon="pi pi-arrow-left"
              className="p-button-text p-button-sm"
              onClick={() => setStep(1)}
            />
          </div>

          <Table
            columns={migrationColumns}
            data={migrationMockData}
            showPagination
            rowsPerPage={10}
            className="p-datatable-sm"
          />

          <div className="flex gap-3 justify-center pt-8 mt-2">
            <Button
              label="Generate"
              className="px-10"
              style={{ backgroundColor: "#6366F1", border: "none" }}
              onClick={handleGenerate}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-danger p-button-outlined"
              onClick={handleClear}
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default GenerateMigration;
