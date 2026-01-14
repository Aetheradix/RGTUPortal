import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import { printColumns } from "./AdminTables";
import {
  blocksOptions,
  districtsOptions,
  draftData,
} from "./administrative.data";

const PrintDraftTransferLetter: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!selectedDistrict || !selectedBlock) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select both District and Block",
        life: 3000,
      });
      return;
    }
    setStep(2);
  };

  const handleClear = () => {
    setSelectedDistrict(null);
    setSelectedBlock(null);
    setStep(1);
  };

  return (
    <PageLayout title="Administrative Transfer Draft Letter">
      <Toast ref={toast} />

      {/* Search Section */}
      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Select District Name
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
            <label className="text-sm font-bold text-gray-600">
              Select Block Name
            </label>
            <Dropdown
              value={selectedBlock}
              options={blocksOptions}
              onChange={(e) => setSelectedBlock(e.value)}
              placeholder="Select"
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
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-semibold text-gray-700">
              Draft Letter Details
            </h3>
            <div className="flex items-center gap-2 text-sm">
              <span>Search:</span>
              <InputText className="p-inputtext-sm" />
            </div>
          </div>

          <Table
            data={draftData}
            columns={printColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default PrintDraftTransferLetter;
