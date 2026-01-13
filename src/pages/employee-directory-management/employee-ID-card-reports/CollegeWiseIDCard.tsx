import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";

import { collegeWiseColumns } from "./table";
import {
  collegeIdBlockOptions,
  collegeIdDistrictOptions,
  collegeWiseMockData,
} from "./data";

const CollegeWiseIdCard: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    district: null,
    block: null,
  });

  const handleSearch = () => {
    if (!formData.district || !formData.block) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select both District and Block",
        life: 3000,
      });
      return;
    }
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "School wise details loaded successfully.",
      life: 2000,
    });
  };

  const handleClear = () => {
    setFormData({ district: null, block: null });
    setStep(1);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Filters reset",
      life: 2000,
    });
  };

  return (
    <PageLayout title="College Wise ID Card Progress Report">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <h4 className="text-blue-600 font-bold mb-4 border-b pb-2 text-md">
          Search College Wise ID Card Report
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500">
              Select District
            </label>
            <Dropdown
              value={formData.district}
              options={collegeIdDistrictOptions}
              onChange={(e) => setFormData({ ...formData, district: e.value })}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500">
              Select Block
            </label>
            <Dropdown
              value={formData.block}
              options={collegeIdBlockOptions}
              onChange={(e) => setFormData({ ...formData, block: e.value })}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button
              label="Search"
              icon="pi pi-search"
              onClick={handleSearch}
              className="p-button-primary p-button-sm px-6"
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              onClick={handleClear}
              className="p-button-outlined p-button-danger p-button-sm px-6"
            />
          </div>
        </div>
      </div>
      {step === 2 && (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mt-6 animate-fade-in">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="text-md font-bold text-blue-700">Details</h3>
            <div className="flex gap-2">
              <Button
                label="Export"
                icon="pi pi-file-excel"
                className="p-button-outlined p-button-secondary p-button-sm h-11"
              />
              <span className="p-input-icon-left">
                <InputText className="p-inputtext-sm" placeholder="Search..." />
              </span>
            </div>
          </div>
          <Table
            data={collegeWiseMockData}
            columns={collegeWiseColumns}
            showPagination={true}
            rowsPerPage={50}
            className="p-datatable-sm"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default CollegeWiseIdCard;
