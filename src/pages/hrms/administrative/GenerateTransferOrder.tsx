import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { transferOrderColumns } from "./AdminTables";
import Table from "@/ui/shared/Table";
import {
  blocksOptions,
  districtsOptions,
  transferData,
} from "./administrative.data";

const GenerateTransferOrder: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!selectedDistrict || !selectedBlock) {
      toast.current?.show({
        severity: "warn",
        summary: "Validation Failed",
        detail: "Please select both District and Block to proceed.",
        life: 3000,
      });
      return;
    }
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Transfer details fetched successfully.",
      life: 3000,
    });
    setStep(2);
  };

  const handleClear = () => {
    setSelectedDistrict(null);
    setSelectedBlock(null);
    setStep(1);

    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Form inputs have been reset.",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Administrative Transfer DSC">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Select District Name
            </label>
            <Dropdown
              value={selectedDistrict}
              options={districtsOptions}
              onChange={(e) => setSelectedDistrict(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Select Block Name
            </label>
            <Dropdown
              value={selectedBlock}
              options={blocksOptions}
              onChange={(e) => setSelectedBlock(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full border-gray-300"
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
          <div className="flex justify-between items-center mb-1 pb-4">
            <h3 className="text-md font-semibold text-gray-700">
              Administrative Transfer DSC Details
            </h3>
          </div>

          <div className="flex justify-end items-center mb-4">
            <div className="flex items-center gap-2 text-xs">
              <span>Search:</span>
              <InputText
                className="p-inputtext-sm"
                placeholder="Search in table..."
              />
            </div>
          </div>

          <Table
            data={transferData}
            columns={transferOrderColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm custom-table"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default GenerateTransferOrder;
