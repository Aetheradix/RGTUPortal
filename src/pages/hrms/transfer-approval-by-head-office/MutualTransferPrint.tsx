import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Dialog } from "primereact/dialog";
import { mutualTransferPrintData } from "./data";
import Input from "@/ui/shared/Input";
import { mutualTranasferPrintColumns } from "./TransferTable";
import Table from "@/ui/shared/Table";

const MutualTransferPrint: React.FC = () => {
  const [step, setStep] = useState(1);
  const [employeeId, setEmployeeId] = useState("");
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!employeeId) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Employee Unique ID is required (*)",
        life: 3000,
      });
      return;
    }
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Application details fetched.",
      life: 2000,
    });
    setStep(2);
  };

  const handleClear = () => {
    setEmployeeId("");
    setStep(1);
  };

  const handleGetDscClick = () => {
    setShowOtpDialog(true);
  };

  return (
    <PageLayout title="Mutual Transfer Print">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mb-6">
        <h2 className="text-lg font-bold text-gray-700 mb-6">
          HO Mutual Transfer Print
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 tracking-wide">
              Employee Unique ID <span className="text-red-500">*</span>
            </label>
            <Input
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="Enter Unique ID"
              className="p-inputtext-sm w-full"
            />
          </div>
        </div>
        <div className="flex gap-2 mt-6">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-primary px-6"
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-outlined p-button-danger px-6"
            onClick={handleClear}
          />
        </div>
      </div>

      {step === 2 && (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mt-6 animate-fade-in overflow-x-auto">
          <h3 className="text-lg font-bold text-gray-700 mb-1">
            Transfer Application Detail
          </h3>

          <div className="flex justify-end items-center mb-4">
            <div className="flex items-center gap-2 text-sm">
              <span>Search:</span>
              <InputText className="p-inputtext-sm border-gray-300 w-48" />
            </div>
          </div>

          <Table
            data={mutualTransferPrintData}
            columns={mutualTranasferPrintColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm text-[11px]"
          />

          <div className="flex justify-center mt-10">
            <Button
              label="GET DSC"
              icon="pi pi-lock"
              className="p-button-primary px-12 py-3 border-none bg-blue-700 font-bold shadow-md"
              onClick={handleGetDscClick}
            />
          </div>
        </div>
      )}

      <Dialog
        header="OTP Verification"
        visible={showOtpDialog}
        style={{ width: "400px" }}
        position="top"
        onHide={() => setShowOtpDialog(false)}
        draggable={false}
        resizable={false}
      >
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600 tracking-tight">
              Enter OTP
            </label>
            <InputText
              value={otpValue}
              onChange={(e) => setOtpValue(e.target.value)}
              placeholder="Enter One Time Password"
              className="p-inputtext-sm w-full border-gray-400"
            />
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <Button
              label="Submit"
              className="bg-blue-600 px-8 py-2 border-none text-white font-bold"
              onClick={() => {
                setShowOtpDialog(false);
                toast.current?.show({
                  severity: "success",
                  summary: "Verified",
                  detail: "Transfer Application Printed successfully.",
                  life: 3000,
                });
                setOtpValue("");
              }}
            />
            <Button
              label="Close"
              className="bg-purple-700 px-8 py-2 border-none text-white font-bold"
              onClick={() => setShowOtpDialog(false)}
            />
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default MutualTransferPrint;
