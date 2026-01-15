import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";

import { academicYearOptions } from "./data";

const SchoolWiseAdmissionReport: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [formData, setFormData] = useState({
    academicYear: "2025-26",
    schoolUdiseCode: "",
  });

  const handleSearch = () => {
    if (!formData.academicYear || !formData.schoolUdiseCode.trim()) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please fill all mandatory fields marked with *",
        life: 3000,
      });
      return;
    }
    toast.current?.show({
      severity: "warn",
      summary: "Search Result",
      detail: "Data not found",
      life: 3000,
    });
  };

  const handleClear = () => {
    setFormData({
      academicYear: "2025-26",
      schoolUdiseCode: "",
    });
  };

  return (
    <PageLayout title="School Wise Admission Report">
      <Toast ref={toast} />

      <div className="space-y-6 animate-fade-in">
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">
                Academic Year<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={formData.academicYear}
                options={academicYearOptions}
                onChange={(e) =>
                  setFormData({ ...formData, academicYear: e.value })
                }
                placeholder="Select"
                className="p-inputtext-sm w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">
                School Udise Code <span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.schoolUdiseCode}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    schoolUdiseCode: e.target.value,
                  })
                }
                placeholder="Enter School Udise Code"
                className="p-inputtext-sm border-orange-200"
              />
            </div>
          </div>

          <div className="flex gap-3 mt-6 pt-4 ">
            <Button
              label="Search"
              icon="pi pi-search"
              onClick={handleSearch}
              className="p-button-primary px-8 font-bold"
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              onClick={handleClear}
              className="p-button-outlined p-button-danger px-8 font-bold"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SchoolWiseAdmissionReport;
