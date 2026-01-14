import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import { Calendar } from "primereact/calendar";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import Input from "@/ui/shared/Input";
import { tenderData, tenderIssueOptions, tenderTypeOptions } from "./data";
import { tenderColumns } from "./DashboardTable";

const TenderMaster: React.FC = () => {
  const [step, setStep] = useState(1);
  const toast = useRef<Toast>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [tenderIssueDate, setTenderIssueDate] = useState<Date | null>(null);
  const [lastSubmissionDate, setLastSubmissionDate] = useState<Date | null>(
    null
  );
  const [tenderExpiryDate, setTenderExpiryDate] = useState<Date | null>(null);
  const [tenderType, setTenderType] = useState<string | null>(null);
  const [tenderIssuedBy, setTenderIssuedBy] = useState<string | null>(null);
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
      detail: "Tender record saved successfully",
      life: 3000,
    });
    setStep(1);
  };

  const handleReset = () => {
    setTenderIssueDate(null);
    setLastSubmissionDate(null);
    setTenderExpiryDate(null);
    setTenderType(null);
    setTenderIssuedBy(null);
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
    <PageLayout title="Tender Master">
      <Toast ref={toast} />

      {step === 1 ? (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <div className="flex justify-between items-center border-b pb-3 mb-4">
            <h2 className="text-lg font-bold text-gray-700">
              Tender Order Details
            </h2>
            <Button
              label="Add New Tender"
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
            data={tenderData}
            columns={tenderColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm custom-table text-sm"
          />
        </div>
      ) : (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
            <div className="flex justify-between items-center border-b pb-4 mb-5">
              <h2 className="text-lg font-bold text-gray-700">
                Add Tender Order
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-sm bg-indigo-500 border-none px-4"
                onClick={() => setStep(1)}
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-600">
                  Enter Name and Address of The Issuing Office
                  <span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter Name and Address of The Issuing Office"
                  className="p-inputtext-sm border-gray-300"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Tender Issue Date<span className="text-red-500">*</span>
                  </label>
                  <Calendar
                    value={tenderIssueDate}
                    onChange={(e) => setTenderIssueDate(e.value as Date)}
                    dateFormat="dd/mm/yy"
                    placeholder="dd/mm/yyyy"
                    showIcon
                    className="p-inputtext-sm"
                    inputClassName="border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Last Date Of Submission
                    <span className="text-red-500">*</span>
                  </label>
                  <Calendar
                    value={lastSubmissionDate}
                    onChange={(e) => setLastSubmissionDate(e.value as Date)}
                    dateFormat="dd/mm/yy"
                    placeholder="dd/mm/yyyy"
                    showIcon
                    className="p-inputtext-sm"
                    inputClassName="border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Tender Expiry Date<span className="text-red-500">*</span>
                  </label>
                  <Calendar
                    value={tenderExpiryDate}
                    onChange={(e) => setTenderExpiryDate(e.value as Date)}
                    dateFormat="dd/mm/yy"
                    placeholder="dd/mm/yyyy"
                    showIcon
                    className="p-inputtext-sm"
                    inputClassName="border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Enter Tender Reference No.
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Enter Tender Reference No."
                    className="p-inputtext-sm border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Select Tender Type<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={tenderType}
                    options={tenderTypeOptions}
                    onChange={(e) => setTenderType(e.value)}
                    placeholder="Select"
                    className="p-inputtext-sm w-full border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Enter Tender Title<span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="E.g., Construction of New Library Building"
                    className="p-inputtext-sm border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Enter Tender Value<span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Enter Tender Value"
                    className="p-inputtext-sm border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Enter EMD<span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Enter EMD"
                    className="p-inputtext-sm border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Enter Document Cost<span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Enter Document Cost"
                    className="p-inputtext-sm border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Enter Search Key Words
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Enter Search Key Words"
                    className="p-inputtext-sm border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-600">
                    Tender Issued By<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={tenderIssuedBy}
                    options={tenderIssueOptions}
                    onChange={(e) => setTenderIssuedBy(e.value)}
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

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-600">
                  Enter Work Description<span className="text-red-500">*</span>
                </label>
                <InputTextarea
                  placeholder="E.g., Procurement of laboratory equipment for research labs"
                  rows={3}
                  className="p-inputtext-sm border-gray-300 w-full"
                />
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
            <h3 className="text-md font-bold text-gray-700 border-b pb-3 mb-4">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-600">
                  Enter Name<span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter Name"
                  className="p-inputtext-sm border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-600">
                  Enter Email<span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter Email-ID"
                  className="p-inputtext-sm border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-600">
                  Enter Phone No.<span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter Phone No"
                  className="p-inputtext-sm border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-600">
                  Enter Mobile No<span className="text-red-500">*</span>
                </label>
                <Input
                  placeholder="Enter Phone No"
                  className="p-inputtext-sm border-gray-300"
                />
              </div>
            </div>

            <div className="flex justify-start gap-3 mt-5">
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
    </PageLayout>
  );
};

export default TenderMaster;
