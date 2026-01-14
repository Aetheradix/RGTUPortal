import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import {
  blocksOptions,
  districtsOptions,
} from "../administrative/administrative.data";
import { designationTypeOptions, transferRequestData } from "./data";
import Input from "@/ui/shared/Input";
import { viewRequestColumns } from "./TransferTable";
import Table from "@/ui/shared/Table";

const ViewTransferRequestApprove: React.FC = () => {
  const [step, setStep] = useState(1);
  const [designationType, setDesignationType] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const [employeeName, setEmployeeName] = useState("");
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!selectedDistrict || !employeeName) {
      toast.current?.show({
        severity: "error",
        summary: "Required Fields",
        detail: "District and Employee Name are mandatory (*)",
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
    setEmployeeName("");
    setStep(1);
  };

  return (
    <PageLayout title="View Transfer Request & Approve">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600">
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
            <label className="text-xs font-bold text-gray-600">
              Employee Name <span className="text-red-500">*</span>
            </label>
            <Input
              value={employeeName}
              onChange={(e) => setEmployeeName(e.target.value)}
              placeholder="Enter Employee Name"
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
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
          <h3 className="text-lg font-bold text-gray-700 mb-1">
            Transfer Application Details
          </h3>

          <div className="flex justify-end items-center mb-4">
            <div className="flex items-center gap-2 text-sm">
              <span>Search:</span>
              <InputText className="p-inputtext-sm border-gray-300 w-48" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <Table
              data={transferRequestData}
              columns={viewRequestColumns}
              showPagination={true}
              rowsPerPage={10}
              className="p-datatable-sm text-[11px]"
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default ViewTransferRequestApprove;
