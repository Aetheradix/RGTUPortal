/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { Dropdown, Table } from "../../../ui/shared";

import { academicYearOptions, semesterOptions, printTCMockData } from "./data";
import { getPrintTCColumns } from "./table";

const PrintTC: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState({
    academicYear: null,
    semester: null,
  });

  const handleSearch = () => {
    if (!filters.academicYear || !filters.semester) {
      toast.current?.show({
        severity: "error",
        summary: "Validation Error",
        detail: "Please select both Academic Year and Semester",
        life: 3000,
      });
      return;
    }
    setStep(2);
  };

  const handleClear = () => {
    setFilters({ academicYear: null, semester: null });
    setStep(1);
  };

  const handlePrint = (data: any) => {
    toast.current?.show({
      severity: "info",
      summary: "Printing",
      detail: `Printing TC for ${data.studentName}`,
      life: 2000,
    });
  };

  return (
    <PageLayout title="Print TC">
      <Toast ref={toast} />
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8 animate-fade-in">
        <div className="p-2 mb-4">
          <h2 className="text-lg font-medium text-gray-700">Print TC Search</h2>
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
          <Dropdown
            label="Select Semester"
            required
            placeholder="Select"
            value={filters.semester}
            options={semesterOptions}
            onChange={(e) => setFilters({ ...filters, semester: e.value })}
          />
        </div>

        <div className="flex gap-3  pt-6 ">
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
            <h2 className="text-lg font-medium text-gray-700">Print TC List</h2>
            <Button
              label="Back to Search"
              icon="pi pi-arrow-left"
              className="p-button-text p-button-sm"
              onClick={() => setStep(1)}
            />
          </div>

          <Table
            // eslint-disable-next-line react-hooks/refs
            columns={getPrintTCColumns(handlePrint)}
            data={printTCMockData}
            showPagination
            rowsPerPage={10}
            className="p-datatable-sm"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default PrintTC;
