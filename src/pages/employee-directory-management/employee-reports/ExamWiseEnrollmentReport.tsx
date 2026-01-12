import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { ConfirmDialog } from "primereact/confirmdialog";
import Dropdown from "@/ui/shared/Dropdown";
import { academicYearOptions } from "./data";

const ExamWiseEnrollmentReport: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>("2025-26");
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!selectedYear) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select an Academic Year (*)",
        life: 3000,
      });
      return;
    }
    toast.current?.show({
      severity: "info",
      summary: "No Results",
      detail: "No enrollment records found for the selected academic year.",
      life: 4000,
    });
  };

  const handleClear = () => {
    setSelectedYear(null);
  };

  return (
    <PageLayout title="Employee Enrollment Exam Wise (View Data)">
      <Toast ref={toast} />
      <ConfirmDialog />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <h4 className="text-blue-600 font-bold mb-4 border-b pb-2 text-md">
          Search Details
        </h4>
        <div className="mt-4 flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-500">
            Select Academic Year
            <span className="text-red-500">*</span>
          </label>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Dropdown
              value={selectedYear}
              options={academicYearOptions}
              onChange={(e) => setSelectedYear(e.value)}
              placeholder="Select Academic Year"
              className="w-full border-gray-300 p-inputtext-sm"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-0 pt-6">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-primary px-6 bg-emerald-500 border-none hover:bg-emerald-600"
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
    </PageLayout>
  );
};

export default ExamWiseEnrollmentReport;
