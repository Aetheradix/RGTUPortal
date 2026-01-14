import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import { MultiSelect } from "primereact/multiselect";
import { Calendar } from "primereact/calendar";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import {
  categoryOptions,
  circularsData,
  fromWhomOptions,
  issuedByOptions,
  moduleOptions,
  priorityOptions,
} from "./data";
import { circularColumns } from "./DashboardTable";
import Input from "@/ui/shared/Input";

const CircularOrder: React.FC = () => {
  const [step, setStep] = useState(1);
  const toast = useRef<Toast>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [issueDate, setIssueDate] = useState<Date | null>(null);
  const [issuedBy, setIssuedBy] = useState<string | null>(null);
  const [relatedModules, setRelatedModules] = useState<string[] | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [forWhom, setForWhom] = useState<string | null>(null);
  const [priority, setPriority] = useState<string | null>(null);
  const [subject, setSubject] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSave = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Circular Order saved successfully",
      life: 3000,
    });
    setStep(1);
  };

  const handleBack = () => {
    toast.current?.show({
      severity: "info",
      summary: "Back",
      detail: "Returning to circular list",
      life: 2000,
    });
    setStep(1);
  };

  const handleReset = () => {
    setIssueDate(null);
    setIssuedBy(null);
    setRelatedModules(null);
    setCategory(null);
    setForWhom(null);
    setPriority(null);
    setSubject("");
    setSelectedFileName("No file chosen");
    if (fileInputRef.current) fileInputRef.current.value = "";

    toast.current?.show({
      severity: "warn",
      summary: "Reset",
      detail: "All fields and dropdowns have been cleared",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Circular Order">
      <Toast ref={toast} />

      {step === 1 ? (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-lg font-bold text-gray-700">
              Circular Order Detail
            </h2>
            <Button
              label="Add Circular Order"
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
            data={circularsData}
            columns={circularColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm custom-table text-sm"
          />

          <div className="flex justify-center mt-6">
            <Button
              label="View More"
              className="bg-indigo-500 border-none px-8 py-2 rounded-md text-white font-medium"
            />
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <h2 className="text-lg font-bold text-gray-700">
              Add Circular Order
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
                Circular Number<span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Enter Circular Number"
                className="p-inputtext-sm border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Issue Date<span className="text-red-500">*</span>
              </label>
              <Calendar
                value={issueDate}
                onChange={(e) => setIssueDate(e.value as Date)}
                dateFormat="dd/mm/yy"
                placeholder="dd/mm/yyyy"
                showIcon
                className="p-inputtext-sm"
                inputClassName="border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Issued By<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={issuedBy}
                options={issuedByOptions}
                onChange={(e) => setIssuedBy(e.value)}
                placeholder="Select"
                className="p-inputtext-sm w-full border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Related Module<span className="text-red-500">*</span>
              </label>
              <MultiSelect
                value={relatedModules}
                options={moduleOptions}
                onChange={(e) => setRelatedModules(e.value)}
                placeholder="Select"
                className="p-inputtext-sm w-full border-gray-300 custom-multiselect"
                display="chip"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Circular Category<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={category}
                options={categoryOptions}
                onChange={(e) => setCategory(e.value)}
                placeholder="Select"
                className="p-inputtext-sm w-full border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                For Whom<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={forWhom}
                options={fromWhomOptions}
                onChange={(e) => setForWhom(e.value)}
                placeholder="Select"
                className="p-inputtext-sm w-full border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Priority<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={priority}
                options={priorityOptions}
                onChange={(e) => setPriority(e.value)}
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
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs font-bold text-gray-600">
                Subject Description <span className="text-red-500">*</span>
              </label>
              <InputTextarea
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                rows={3}
                placeholder="Enter Subject Description"
                className="p-inputtext-sm border-gray-300 w-full"
              />
            </div>
          </div>

          <div className="flex justify-start gap-3 mt-6">
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

export default CircularOrder;
