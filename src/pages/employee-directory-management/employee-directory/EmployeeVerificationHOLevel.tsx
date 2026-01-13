/* eslint-disable react-hooks/refs */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { RadioButton } from "primereact/radiobutton";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";

import {
  oisOptions,
  divisionOptions,
  districtOptions,
  blockOptions,
  hoVerificationData,
} from "./data";
import { getHoVerificationColumns } from "./table";

const EmployeeVerificationHO: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [searchType, setSearchType] = useState("filter");
  const [formData, setFormData] = useState({
    oisType: null,
    division: null,
    district: null,
    block: null,
  });

  const handleSearch = () => {
    if (!formData.division || !formData.district || !formData.block) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select all required fields",
        life: 3000,
      });
      return;
    }
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "HO Level records fetched successfully",
      life: 2000,
    });
  };

  const handleClear = () => {
    setFormData({ oisType: null, division: null, district: null, block: null });
    setStep(1);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Filters reset",
      life: 2000,
    });
  };

  const onResetStatus = (data: any) => {
    toast.current?.show({
      severity: "warn",
      summary: "Reset Initiated",
      detail: `Status reset for ${data.employeeName}`,
      life: 3000,
    });
  };

  return (
    <PageLayout title="Employee Verification HO Level">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <h4 className="text-blue-600 font-bold mb-4 border-b pb-2">
          Search Employee Details
        </h4>

        <div className="flex gap-8 mb-6">
          <div className="flex items-center">
            <RadioButton
              inputId="code"
              value="code"
              onChange={(e) => setSearchType(e.value)}
              checked={searchType === "code"}
            />
            <label
              htmlFor="code"
              className="ml-2 text-sm font-bold text-gray-600"
            >
              By Employee Code
            </label>
          </div>
          <div className="flex items-center">
            <RadioButton
              inputId="filter"
              value="filter"
              onChange={(e) => setSearchType(e.value)}
              checked={searchType === "filter"}
            />
            <label
              htmlFor="filter"
              className="ml-2 text-sm font-bold text-gray-600"
            >
              By Filter
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500">
              Select OIS Type (Code)<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={formData.oisType}
              options={oisOptions}
              onChange={(e) => setFormData({ ...formData, oisType: e.value })}
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500">
              Select Division Name (Code){" "}
              <span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={formData.division}
              options={divisionOptions}
              onChange={(e) => setFormData({ ...formData, division: e.value })}
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500">
              Select District Name (Code){" "}
              <span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={formData.district}
              options={districtOptions}
              onChange={(e) => setFormData({ ...formData, district: e.value })}
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500">
              Select Block Name (Code) <span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={formData.block}
              options={blockOptions}
              onChange={(e) => setFormData({ ...formData, block: e.value })}
              className="p-inputtext-sm w-full"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Button
            label="Search"
            icon="pi pi-search"
            onClick={handleSearch}
            className="px-6 bg-indigo-600 border-none"
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            onClick={handleClear}
            className="p-button-outlined p-button-danger"
          />
        </div>
      </div>

      {step === 2 && (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mt-6 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-bold text-gray-700">
              Employee Verification Details
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm">Search:</span>
              <InputText className="p-inputtext-sm" placeholder="Search..." />
            </div>
          </div>

          <Table
            data={hoVerificationData}
            columns={getHoVerificationColumns(onResetStatus)}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default EmployeeVerificationHO;
