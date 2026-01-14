import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Dropdown, Table, Input } from "../../../ui/shared";

import { academicYearOptions, generateTCMockData } from "./data";
import { generateTCColumns } from "./table";

const GenerateTC: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState({
    academicYear: null,
    enrollmentNo: "",
  });

  const handleSearch = () => {
    if (!filters.academicYear || !filters.enrollmentNo.trim()) {
      toast.current?.show({
        severity: "error",
        summary: "Validation Error",
        detail: "Please fill all required search fields",
        life: 3000,
      });
      return;
    }
    setStep(2);
  };

  const handleClear = () => {
    setFilters({
      academicYear: null,
      enrollmentNo: "",
    });
    setStep(1);
  };

  const handleGenerateTC = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Transfer Certificate Generated Successfully",
      life: 3000,
    });
  };

  return (
    <PageLayout title="Generate TC">
      <Toast ref={toast} />
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8 animate-fade-in">
        <div className="p-2 mb-4">
          <h2 className="text-lg font-medium text-gray-700 border-l-4 border-indigo-500 pl-3">
            Find Student for TC Generation
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-3">
          <Dropdown
            label="Select Academic Year"
            required
            placeholder="Select"
            value={filters.academicYear}
            options={academicYearOptions}
            onChange={(e) => setFilters({ ...filters, academicYear: e.value })}
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
            type="button"
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-danger p-button-outlined "
            onClick={handleClear}
          />
        </div>
      </div>
      {step === 2 && (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-4 p-2">
            <h2 className="text-lg font-bold text-gray-700">
              Generate TC List
            </h2>
            <Button
              label="Back to Search"
              icon="pi pi-arrow-left"
              className="p-button-text p-button-sm"
              onClick={() => setStep(1)}
            />
          </div>

          <Table
            columns={generateTCColumns}
            data={generateTCMockData}
            showPagination
            rowsPerPage={10}
            className="p-datatable-sm"
          />

          <div className="flex gap-3 justify-center pt-8 border-t mt-2">
            <Button
              label="Generate Transfer Certificate"
              className="px-10"
              style={{ backgroundColor: "#6366F1", border: "none" }}
              onClick={handleGenerateTC}
            />
            <Button
              type="button"
              label="Clear Results"
              className="p-button-danger p-button-outlined px-10"
              style={{
                backgroundColor: "#FEE2E2",
                color: "#EF4444",
                border: "none",
              }}
              onClick={handleClear}
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default GenerateTC;
