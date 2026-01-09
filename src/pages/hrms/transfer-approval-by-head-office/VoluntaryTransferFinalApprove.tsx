/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import Dropdown from "@/ui/shared/Dropdown";
import Table, { type TableColumn } from "@/ui/shared/Table";
import {
  blocksOptions,
  districtsOptions,
} from "../administrative/administrative.data";
import { designationTypeOptions, voluntaryTransferData } from "./data";
import Input from "@/ui/shared/Input";

const VoluntaryTransferFinalApprove: React.FC = () => {
  const [step, setStep] = useState(1);
  const [designationType, setDesignationType] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [employeeId, setEmployeeId] = useState("");
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [showOtpDialog, setShowOtpDialog] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!selectedDistrict || !employeeId) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please fill required fields (*) before searching.",
        life: 3000,
      });
      return;
    }
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Data fetched successfully.",
      life: 2000,
    });
    setStep(2);
  };

  const handleClear = () => {
    setDesignationType(null);
    setSelectedDistrict(null);
    setSelectedBlock(null);
    setEmployeeId("");
    setStep(1);
    setSelectedRows([]);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Search filters reset.",
      life: 2000,
    });
  };

  const toggleSelection = (data: any) => {
    const _selectedRows = [...selectedRows];
    const index = _selectedRows.findIndex((row) => row.srNo === data.srNo);

    if (index === -1) {
      _selectedRows.push(data);
      toast.current?.show({
        severity: "info",
        summary: "Selected",
        detail: `${data.employeeName} added to list.`,
        life: 1500,
      });
    } else {
      _selectedRows.splice(index, 1);
    }
    setSelectedRows(_selectedRows);
  };

  const handleGetDscClick = () => {
    if (selectedRows.length === 0) {
      toast.current?.show({
        severity: "warn",
        summary: "No Selection",
        detail: "Please select at least one record to proceed.",
        life: 3000,
      });
      return;
    }
    setShowOtpDialog(true);
  };

  const checkboxTemplate = (rowData: any) => {
    return (
      <div className="flex justify-center items-center">
        <div className="p-checkbox p-component">
          <Checkbox
            onChange={() => toggleSelection(rowData)}
            checked={selectedRows.some((row) => row.srNo === rowData.srNo)}
            className="cursor-pointer"
          />
        </div>
      </div>
    );
  };

  const finalApproveColumns: TableColumn[] = [
    {
      field: "getDsc",
      header: "Get DSC",
      body: checkboxTemplate,
      style: { width: "80px" },
    },
    { field: "applicationNo", header: "Application NO.", sortable: true },
    { field: "employeeName", header: "Employee Name", sortable: true },
    { field: "uniqueId", header: "Unique Id", sortable: true },
    { field: "currentDdo", header: "Current DDO/Shankul", sortable: true },
    { field: "newDdo", header: "New DDO/Shankul", sortable: true },
  ];

  return (
    <PageLayout title="Voluntary Transfer Final Approve">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600 font-bold">
              Designation Type
            </label>
            <Dropdown
              value={designationType}
              options={designationTypeOptions}
              onChange={(e) => setDesignationType(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600 font-bold">
              Select District <span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={selectedDistrict}
              options={districtsOptions}
              onChange={(e) => setSelectedDistrict(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600 font-bold">
              Select Block
            </label>
            <Dropdown
              value={selectedBlock}
              options={blocksOptions}
              onChange={(e) => setSelectedBlock(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600 font-bold">
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
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mt-6 animate-fade-in">
          <h3 className="text-md font-medium text-gray-700 mb-6 border-b pb-4">
            Voluntary Transfer Final Approve Details
          </h3>

          <Table
            data={voluntaryTransferData}
            columns={finalApproveColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm"
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

      {/* OTP Verification Popup */}
      <Dialog
        header="OTP Verification"
        visible={showOtpDialog}
        style={{ width: "400px" }}
        position="top"
        onHide={() => setShowOtpDialog(false)}
        draggable={false}
        resizable={false}
        className="custom-otp-dialog"
      >
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">Enter OTP</label>
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
                  summary: "OTP Verified",
                  detail: "Transfer has been successfully approved.",
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

export default VoluntaryTransferFinalApprove;
