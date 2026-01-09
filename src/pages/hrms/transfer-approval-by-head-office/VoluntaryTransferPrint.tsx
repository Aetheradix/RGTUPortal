/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Calendar } from "primereact/calendar";
import Dropdown from "@/ui/shared/Dropdown";
import {
  blocksOptions,
  districtsOptions,
} from "../administrative/administrative.data";
import { designationTypeOptions, voluntaryPrintData } from "./data";
import { transferPrintColumns } from "./TransferTable";
import Table from "@/ui/shared/Table";
import Input from "@/ui/shared/Input";

const VoluntaryTransferPrint: React.FC = () => {
  const [step, setStep] = useState(1);
  const [designationType, setDesignationType] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [employeeId, setEmployeeId] = useState("");
  const [fromDate, setFromDate] = useState<any>(null);
  const [toDate, setToDate] = useState<any>(null);

  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!designationType || !selectedDistrict) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please fill all required fields marked with (*)",
        life: 3000,
      });
      return;
    }
    setStep(2);
  };

  const handleClear = () => {
    setDesignationType(null);
    setSelectedDistrict(null);
    setSelectedBlock(null);
    setEmployeeId("");
    setFromDate(null);
    setToDate(null);
    setStep(1);
  };

  return (
    <PageLayout title="HO Transfer Print Order">
      <Toast ref={toast} />

      {/* Search Filter Section */}
      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <h2 className="text-md font-medium text-gray-700 mb-6">
          Voluntary Transfer Print
        </h2>

        {/* Row 1: Designation, District, Block, Employee ID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600">
              Designation Type <span className="text-red-500">*</span>
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
            <label className="text-xs font-bold text-gray-600">
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
            <label className="text-xs font-bold text-gray-600">
              Select Block <span className="text-red-500">*</span>
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
            <label className="text-xs font-bold text-gray-600">
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600">
              From Date <span className="text-red-500">*</span>
            </label>
            <Calendar
              value={fromDate}
              onChange={(e) => setFromDate(e.value)}
              dateFormat="dd/mm/yy"
              placeholder="dd/mm/yyyy"
              showIcon
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600">
              To Date <span className="text-red-500">*</span>
            </label>
            <Calendar
              value={toDate}
              onChange={(e) => setToDate(e.value)}
              dateFormat="dd/mm/yy"
              placeholder="dd/mm/yyyy"
              showIcon
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
          <h3 className="text-lg font-medium text-gray-700 mb-1 pb-4">
            Transfer Order Detail
          </h3>

          <div className="flex justify-end items-center mb-4">
            <div className="flex items-center gap-2 text-sm">
              <span>Search:</span>
              <InputText className="p-inputtext-sm border-gray-300 w-48" />
            </div>
          </div>

          <Table
            data={voluntaryPrintData}
            columns={transferPrintColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default VoluntaryTransferPrint;
