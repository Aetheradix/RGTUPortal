import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Calendar } from "primereact/calendar";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import Input from "@/ui/shared/Input";
import {
  importanceOptions,
  newsData,
  targetAudienceOptions,
  uploadedByOptions,
} from "./data";
import { newsColumns } from "./DashboardTable";

const NewsMaster: React.FC = () => {
  const [step, setStep] = useState(1);
  const toast = useRef<Toast>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [newsDate, setNewsDate] = useState<Date | null>(null);
  const [uploadedBy, setUploadedBy] = useState<string | null>(null);
  const [importanceLevel, setImportanceLevel] = useState<string | null>(null);
  const [targetAudience, setTargetAudience] = useState<string | null>(null);
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  // Trigger Hidden Input
  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSave = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "News Information saved successfully",
      life: 3000,
    });
    setStep(1);
  };

  const handleBack = () => {
    toast.current?.show({
      severity: "info",
      summary: "Back",
      detail: "Returning to news list",
      life: 2000,
    });
    setStep(1);
  };

  const handleReset = () => {
    setNewsDate(null);
    setUploadedBy(null);
    setImportanceLevel(null);
    setTargetAudience(null);
    setSelectedFileName("No file chosen");
    if (fileInputRef.current) fileInputRef.current.value = "";

    toast.current?.show({
      severity: "warn",
      summary: "Reset",
      detail: "Form fields cleared",
      life: 2000,
    });
  };

  return (
    <PageLayout title="News Master">
      <Toast ref={toast} />

      {step === 1 ? (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-lg font-bold text-gray-700">
              News Information
            </h2>
            <Button
              label="Add News Information"
              icon="pi pi-plus"
              className="p-button-sm bg-indigo-500 border-none px-4"
              onClick={() => setStep(2)}
            />
          </div>

          <div className="flex justify-end items-center mb-2 text-sm text-gray-600">
            <div className="flex items-center gap-2 mb-3">
              <span>Search:</span>
              <InputText className="p-inputtext-sm border-gray-300 w-48" />
            </div>
          </div>

          <Table
            data={newsData}
            columns={newsColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm custom-table text-sm"
          />
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <h2 className="text-lg font-bold text-gray-700">
              Add News Information
            </h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-sm bg-indigo-500 border-none px-4"
              onClick={handleBack}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Enter Newspaper Name<span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Enter Newspaper or Source Name"
                className="p-inputtext-sm border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                News Date<span className="text-red-500">*</span>
              </label>
              <Calendar
                value={newsDate}
                onChange={(e) => setNewsDate(e.value as Date)}
                dateFormat="dd/mm/yy"
                placeholder="dd/mm/yyyy"
                showIcon
                className="p-inputtext-sm"
                inputClassName="border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                News/Announcement Title<span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Enter News Title"
                className="p-inputtext-sm border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Uploaded By<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={uploadedBy}
                options={uploadedByOptions}
                onChange={(e) => setUploadedBy(e.value)}
                placeholder="Select"
                className="p-inputtext-sm w-full border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Importance Level<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={importanceLevel}
                options={importanceOptions}
                onChange={(e) => setImportanceLevel(e.value)}
                placeholder="Select"
                className="p-inputtext-sm w-full border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Target Audience<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={targetAudience}
                options={targetAudienceOptions}
                onChange={(e) => setTargetAudience(e.value)}
                placeholder="Select"
                className="p-inputtext-sm w-full border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Upload File<span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={onFileChange}
                className="hidden"
              />
              <div className="flex border rounded overflow-hidden border-gray-300 h-8.5">
                <button
                  type="button"
                  onClick={handleUploadClick}
                  className="bg-gray-100 px-3 py-1 text-xs border-r border-gray-300 hover:bg-gray-200"
                >
                  Choose File
                </button>
                <span className="px-3 py-1 text-xs text-gray-400 self-center truncate">
                  {selectedFileName}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-start gap-3 mt-8">
            <Button
              label="Save"
              icon="pi pi-save"
              className="px-8 bg-indigo-500 border-none"
              onClick={handleSave}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-outlined p-button-danger px-6"
              onClick={handleReset}
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default NewsMaster;
