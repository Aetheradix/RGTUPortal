import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Calendar } from "primereact/calendar";
import Table from "@/ui/shared/Table";
import Input from "@/ui/shared/Input";
import { albumData } from "./data";
import { albumColumns } from "./DashboardTable";

const PhotoMaster: React.FC = () => {
  const [step, setStep] = useState(1);
  const toast = useRef<Toast>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [albumDate, setAlbumDate] = useState<Date | null>(null);
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  const handleSave = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Photo Album saved successfully",
      life: 3000,
    });
    setStep(1);
  };

  const handleReset = () => {
    setAlbumDate(null);
    setSelectedFileName("No file chosen");
    if (fileInputRef.current) fileInputRef.current.value = "";
    toast.current?.show({
      severity: "warn",
      summary: "Reset",
      detail: "Form cleared",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Photo Master">
      <Toast ref={toast} />
      {step === 1 ? (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-lg font-bold text-gray-700">
              Photo Album Details
            </h2>
            <Button
              label="Add New Photo Album"
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
            data={albumData}
            columns={albumColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm custom-table text-sm"
          />
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <h2 className="text-lg font-bold text-gray-700">Add Photo Album</h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-sm bg-indigo-500 border-none px-4"
              onClick={() => setStep(1)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Enter Album Name
                <span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Enter Album Name"
                className="p-inputtext-sm border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Enter Description of Photo
                <span className="text-red-500">*</span>
              </label>

              <Input
                placeholder="Enter Album Details"
                className="p-inputtext-sm border-gray-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Album Date
                <span className="text-red-500">*</span>
              </label>

              <Calendar
                value={albumDate}
                onChange={(e) => setAlbumDate(e.value as Date)}
                dateFormat="dd/mm/yy"
                placeholder="dd/mm/yyyy"
                showIcon
                className="p-inputtext-sm"
                inputClassName="border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Upload Photo
                <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                ref={fileInputRef}
                onChange={onFileChange}
                className="hidden"
                accept="image/*"
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

export default PhotoMaster;
