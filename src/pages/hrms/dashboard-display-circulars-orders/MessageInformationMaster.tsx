import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Calendar } from "primereact/calendar";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import Input from "@/ui/shared/Input";
import { eventTypeOptions, messageData, priorityOptions } from "./data";
import { messageColumns } from "./DashboardTable";
import { InputTextarea } from "primereact/inputtextarea";

const MessageInformationMaster: React.FC = () => {
  const [step, setStep] = useState(1);
  const toast = useRef<Toast>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");
  const [eventType, setEventType] = useState<string | null>(null);
  const [priority, setPriority] = useState<string | null>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [description, setDescription] = useState("");

  const handleUploadClick = () => fileInputRef.current?.click();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name);
    }
  };

  const handleSave = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Message Information saved successfully",
      life: 3000,
    });
    setStep(1);
  };

  const handleReset = () => {
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
    <PageLayout title="Message Information Master">
      <Toast ref={toast} />

      {step === 1 ? (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-lg font-bold text-gray-700">
              Message Information Details
            </h2>
            <Button
              label="Add Message Information Details"
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
            data={messageData}
            columns={messageColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm custom-table text-sm"
          />
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <h2 className="text-lg font-bold text-gray-700">
              Add Event Information
            </h2>
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
                Enter Event Name<span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Enter Event Name"
                className="p-inputtext-sm border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Enter Subject<span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Enter Subject"
                className="p-inputtext-sm border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Select Event Type<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={eventType}
                options={eventTypeOptions}
                onChange={(e) => setEventType(e.value)}
                placeholder="Select"
                className="p-inputtext-sm w-full border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Select Priority<span className="text-red-500">*</span>
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
                Enter Contact Details<span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Enter Email or Phone"
                className="p-inputtext-sm border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Event From Date<span className="text-red-500">*</span>
              </label>
              <Calendar
                value={fromDate}
                onChange={(e) => setFromDate(e.value as Date)}
                dateFormat="dd/mm/yy"
                placeholder="dd/mm/yyyy"
                showIcon
                className="p-inputtext-sm"
                inputClassName="border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Event To Date<span className="text-red-500">*</span>
              </label>
              <Calendar
                value={toDate}
                onChange={(e) => setToDate(e.value as Date)}
                dateFormat="dd/mm/yy"
                placeholder="dd/mm/yyyy"
                showIcon
                className="p-inputtext-sm"
                inputClassName="border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Event Location<span className="text-red-500">*</span>
              </label>
              <Input
                placeholder="Enter Location"
                className="p-inputtext-sm border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Event Description
              </label>
              <InputTextarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={2}
                placeholder="Enter Event Details"
                className="p-inputtext-sm border-gray-300 w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Upload Event Details<span className="text-red-500">*</span>
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

          <div className="flex justify-start gap-3 mt-7">
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

export default MessageInformationMaster;
