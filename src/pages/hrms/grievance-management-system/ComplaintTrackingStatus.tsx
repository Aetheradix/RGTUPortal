import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";

const GrievanceTrackingReport: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!searchValue) {
      toast.current?.show({
        severity: "warn",
        summary: "Validation",
        detail: "Please enter Employee Unique ID / Grievance No.",
        life: 3000,
      });
      return;
    }

    toast.current?.show({
      severity: "info",
      summary: "No Results Found",
      detail: "No grievance records match the provided ID or Number.",
      life: 4000,
    });
  };

  return (
    <PageLayout title="Grievance Tracking Report">
      <Toast ref={toast} />

      <div className="bg-white mt-3 p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Employee Unique ID / Grievance No.
              <span className="text-red-500">*</span>
            </label>
            <InputText
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Enter ID or Grievance Number"
              className="w-full border-gray-300 p-inputtext-sm"
            />
          </div>

          <div className="flex gap-2">
            <Button
              label="Search"
              icon="pi pi-search"
              className="bg-indigo-600 border-none px-4"
              onClick={handleSearch}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GrievanceTrackingReport;
