/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Dropdown, Table } from "../../../ui/shared";

import {
  migrationYearOptions,
  semesterOptions,
  printMigrationMockData,
} from "./data";
import { getPrintMigrationColumns } from "./table";

const PrintMigration: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState({
    year: null,
    semester: null,
  });

  const handleSearch = () => {
    if (!filters.year || !filters.semester) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select both Year and Semester",
        life: 3000,
      });
      return;
    }
    setStep(2);
  };

  const handleClear = () => {
    setFilters({ year: null, semester: null });
    setStep(1);
  };

  const handlePrint = (data: any) => {
    toast.current?.show({
      severity: "success",
      summary: "Printing",
      detail: `Initiating print for Enrollment: ${data.enrollmentNo}`,
      life: 2000,
    });
  };

  return (
    <PageLayout title="Print Migration Certificate">
      <Toast ref={toast} />
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8 animate-fade-in">
        <div className="p-2 mb-4 border-l-4 border-indigo-500 pl-3">
          <h2 className="text-lg font-medium text-gray-700">
            Print Migration Search
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mb-3">
          <Dropdown
            label="Select Migration Year"
            required
            placeholder="Select"
            value={filters.year}
            options={migrationYearOptions}
            onChange={(e) => setFilters({ ...filters, year: e.value })}
          />
          <Dropdown
            label="Select Semester"
            required
            placeholder="Select"
            value={filters.semester}
            options={semesterOptions}
            onChange={(e) => setFilters({ ...filters, semester: e.value })}
          />
        </div>
        <div className="flex gap-3 pt-8">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-primary"
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-danger p-button-outlined px-12"
            onClick={handleClear}
          />
        </div>
      </div>
      {step === 2 && (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-4 p-2">
            <h2 className="text-lg font-medium text-gray-700">
              Print Migration Certificate List
            </h2>
            <Button
              label="Back to Search"
              icon="pi pi-arrow-left"
              className="p-button-text p-button-sm text-indigo-600"
              onClick={() => setStep(1)}
            />
          </div>

          <Table
            // eslint-disable-next-line react-hooks/refs
            columns={getPrintMigrationColumns(handlePrint)}
            data={printMigrationMockData}
            showPagination
            rowsPerPage={10}
            className="p-datatable-sm"
          />
          <div className="flex gap-3 justify-center pt-8 border-t mt-6">
            <Button
              label="Print Selected"
              icon="pi pi-print"
              className="px-10 bg-indigo-600 border-none font-bold"
              onClick={() => handlePrint({ enrollmentNo: "Selected Batch" })}
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

export default PrintMigration;
