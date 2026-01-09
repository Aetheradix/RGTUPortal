import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import { Calendar } from "primereact/calendar";
import Dropdown from "@/ui/shared/Dropdown";
import Input from "@/ui/shared/Input";
import { punishmentOptions } from "./data";

const GeneratePunishment: React.FC = () => {
  const [showForms, setShowForms] = useState(false);
  const [searchId, setSearchId] = useState("");
  const toast = useRef<Toast>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [punishmentType, setPunishmentType] = useState<string | null>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [orderNo, setOrderNo] = useState("");
  const [orderDate, setOrderDate] = useState<Date | null>(null);
  const [remark, setRemark] = useState("");
  const [selectedFileName, setSelectedFileName] = useState("No file chosen");

  const handleSearch = () => {
    if (searchId.trim()) {
      setShowForms(true);
    } else {
      toast.current?.show({
        severity: "warn",
        summary: "Required",
        detail: "Please enter Employee Unique ID",
        life: 3000,
      });
    }
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
      detail: "Punishment Order saved successfully",
      life: 3000,
    });
    handleReset();
    setShowForms(false);
    setSearchId("");
  };

  const handleReset = () => {
    setPunishmentType(null);
    setFromDate(null);
    setToDate(null);
    setOrderNo("");
    setShowForms(false);
    setOrderDate(null);
    setRemark("");
    setSelectedFileName("No file chosen");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleClearSearch = () => {
    setSearchId("");
    setShowForms(false);
    handleReset();
  };

  return (
    <PageLayout title="Generate Punishment Order">
      <Toast ref={toast} />

      <div className="space-y-6">
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Enter Employee Unique ID <span className="text-red-500">*</span>
              </label>
              <Input
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                placeholder="Search"
                className="p-inputtext-sm border-gray-300"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <Button
              label="Search"
              icon="pi pi-search"
              className="p-button-primary px-6 bg-indigo-500 border-none"
              onClick={handleSearch}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-outlined p-button-danger px-6"
              onClick={handleReset}
            />
          </div>
        </div>

        {showForms && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
              <div className="flex justify-between items-center border-b pb-4 mb-6">
                <h2 className="text-lg font-bold text-gray-700">
                  Employee Information
                </h2>
                <Button
                  label="Go Back"
                  icon="pi pi-arrow-left"
                  className="p-button-sm bg-indigo-500 border-none px-4"
                  onClick={() => handleClearSearch()}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Employee Name
                  </label>
                  <div className="p-2 bg-gray-200 border border-gray-200 rounded text-sm text-gray-700">
                    Arjun Talwar
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Unique ID
                  </label>
                  <div className="p-2 bg-gray-200 border border-gray-200 rounded text-sm text-gray-700">
                    AR4781
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Designation
                  </label>
                  <div className="p-2 bg-gray-200 border border-gray-200 rounded text-sm text-gray-700">
                    Professor(UDT)
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    District
                  </label>
                  <div className="p-2 bg-gray-200 border border-gray-200 rounded text-sm text-gray-700">
                    Bhopal
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Block
                  </label>
                  <div className="p-2 bg-gray-200 border border-gray-200 rounded text-sm text-gray-700">
                    GovindPura
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:col-span-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    Sankul Code / Name
                  </label>
                  <div className="p-2 bg-gray-200 border border-gray-200 rounded text-sm text-gray-700">
                    15151235256-PVT VINAYAK TARRAKHURD COLLEGE
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-bold text-gray-500 uppercase">
                    School
                  </label>
                  <div className="p-2 bg-gray-200 border border-gray-200 rounded text-sm text-gray-700">
                    VINAYAK TARRAKHURD COLLEGE
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-700 border-b pb-4 mb-6">
                Generate Punishment Order
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Select Punishment Type
                    <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={punishmentType}
                    options={punishmentOptions}
                    onChange={(e) => setPunishmentType(e.value)}
                    placeholder="Select"
                    className="p-inputtext-sm w-full border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Punishment From Date<span className="text-red-500">*</span>
                  </label>
                  <Calendar
                    value={fromDate}
                    onChange={(e) => setFromDate(e.value as Date)}
                    dateFormat="dd/mm/yy"
                    placeholder="dd/mm/yyyy"
                    showIcon
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Punishment To Date<span className="text-red-500">*</span>
                  </label>
                  <Calendar
                    value={toDate}
                    onChange={(e) => setToDate(e.value as Date)}
                    dateFormat="dd/mm/yy"
                    placeholder="dd/mm/yyyy"
                    showIcon
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Enter Order No.<span className="text-red-500">*</span>
                  </label>
                  <Input
                    value={orderNo}
                    onChange={(e) => setOrderNo(e.target.value)}
                    placeholder="Enter Order No"
                    className="p-inputtext-sm border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Select Order Date<span className="text-red-500">*</span>
                  </label>
                  <Calendar
                    value={orderDate}
                    onChange={(e) => setOrderDate(e.value as Date)}
                    dateFormat="dd/mm/yy"
                    placeholder="dd/mm/yyyy"
                    showIcon
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Upload Document<span className="text-red-500">*</span>
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
                      onClick={() => fileInputRef.current?.click()}
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
                    Enter Remark<span className="text-red-500">*</span>
                  </label>
                  <InputTextarea
                    value={remark}
                    onChange={(e) => setRemark(e.target.value)}
                    rows={3}
                    placeholder="Enter remark details"
                    className="p-inputtext-sm border-gray-300 w-full"
                  />
                </div>
              </div>

              <div className="flex justify-start gap-3 mt-10">
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
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default GeneratePunishment;
