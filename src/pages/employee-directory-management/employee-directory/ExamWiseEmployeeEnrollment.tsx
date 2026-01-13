import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";

const EmployeeEnrollmentUpload: React.FC = () => {
  const toast = useRef<Toast>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] =
    useState<string>("No file chosen");

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  const handleUpload = () => {
    if (selectedFileName === "No file chosen") {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select a file to upload",
        life: 3000,
      });
      return;
    }

    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "File uploaded successfully",
      life: 2000,
    });
  };

  const handleClear = () => {
    setSelectedFileName("No file chosen");
    if (fileInputRef.current) fileInputRef.current.value = "";
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Selection reset",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Employee Enrollment Exam Wise (File Upload)">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-blue-600">
              Upload File
              <span className="text-red-500">*</span>
            </label>

            <div className="flex items-center w-full md:w-1/3 border border-red-300 rounded overflow-hidden">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="bg-gray-100 px-4 py-2 text-sm border-r border-gray-300 hover:bg-gray-200 transition-colors"
              >
                Choose File
              </button>
              <span className="px-3 text-sm text-gray-500 truncate grow italic">
                {selectedFileName}
              </span>
              <div className="px-2">
                <i className="pi pi-exclamation-circle text-red-500"></i>
              </div>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={onFileChange}
              accept=".xls,.xlsx"
            />
            <small className="text-red-600 font-bold">
              Information Required.
            </small>
          </div>
          <div className="mt-2 space-y-2">
            <p className="text-blue-600 font-bold text-sm">Note:</p>
            <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold">
              <span>1. Please Refer the Sample File for proper format</span>
              <i className="pi pi-download cursor-pointer hover:text-blue-800"></i>
            </div>
            <div className="text-blue-600 text-sm font-semibold">
              <span>2. File format should be in '.xls', '.xlsx' format</span>
            </div>
            <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold">
              <span>3. Please Refer the Sample File for Code References</span>
              <i className="pi pi-download cursor-pointer hover:text-blue-800"></i>
            </div>
          </div>

          <hr className="my-4 border-gray-200" />

          <div className="flex gap-2">
            <Button
              label="Upload"
              icon="pi pi-cloud-upload"
              className="p-button-outlined p-button-success "
              onClick={handleUpload}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              onClick={handleClear}
              className="p-button-outlined p-button-danger"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default EmployeeEnrollmentUpload;
