import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";

import {
  academicYearOptions,
  districtOptions,
  blockOptions,
  villageOptions,
  studentSummaryMockData,
} from "./data";
import { getStudentSummaryColumns } from "./table";

const StudentSummaryReport: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    academicYear: null,
    district: null,
    block: null,
    village: null,
    enrollmentNo: "",
  });

  const handleSearch = () => {
    if (!formData.academicYear || !formData.district) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please fill all required fields marked with *",
        life: 3000,
      });
      return;
    }
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Report generated successfully",
      life: 2000,
    });
  };

  const handleClear = () => {
    setFormData({
      academicYear: null,
      district: null,
      block: null,
      village: null,
      enrollmentNo: "",
    });
    setStep(1);
  };

  return (
    <PageLayout title="Student Summary Report">
      <Toast ref={toast} />
      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mb-6 animate-fade-in">
        <h4 className="text-gray-700 font-bold mb-6 border-b pb-2">
          Student Summary Report
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-700">
              Select Academic Year<span className="text-red-500">*</span>
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
            <label className="text-xs font-bold text-gray-700">
              Select District Name<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={formData.district}
              options={districtOptions}
              onChange={(e) => setFormData({ ...formData, district: e.value })}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-700">
              Select Block Name<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={formData.block}
              options={blockOptions}
              onChange={(e) => setFormData({ ...formData, block: e.value })}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-700">
              Select Village Name<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={formData.village}
              options={villageOptions}
              onChange={(e) => setFormData({ ...formData, village: e.value })}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-700">
              Enter Enrollment No.<span className="text-red-500">*</span>
            </label>
            <InputText
              value={formData.enrollmentNo}
              onChange={(e) =>
                setFormData({ ...formData, enrollmentNo: e.target.value })
              }
              placeholder="Enter Enrollment No."
              className="p-inputtext-sm w-full"
            />
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            label="Search"
            icon="pi pi-search"
            onClick={handleSearch}
            className="px-8 bg-indigo-600 border-none"
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            onClick={handleClear}
            className="p-button-outlined p-button-danger px-8"
          />
        </div>
      </div>
      {step === 2 && (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-md font-bold text-gray-700">
              Student Summary Report List
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm">Search:</span>
              <InputText
                className="p-inputtext-sm"
                placeholder="Search records..."
              />
            </div>
          </div>

          <Table
            data={studentSummaryMockData}
            columns={getStudentSummaryColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default StudentSummaryReport;
