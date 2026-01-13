/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { RadioButton } from "primereact/radiobutton";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";

import { employeeCustomizedData } from "./data";
import { employeeCustomizedColumns } from "./table";
import {
  blockOptions,
  districtOptions,
  divisionOptions,
  oisOptions,
} from "../employee-directory/data";

const EmployeeCustomizedReport: React.FC = () => {
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
    if (!formData.oisType || !formData.district) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please Select OIS Type",
        life: 3000,
      });
      return;
    }
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Employee Details fetched successfully",
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

  const onViewDetail = (data: any) =>
    console.log("Viewing detailed info for:", data.nameCode);
  return (
    <PageLayout title="Employee Customized Report">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <h4 className="text-blue-600 font-bold mb-4 border-b pb-2 text-md">
          Search Employee Customized Report
        </h4>

        <div className="flex justify-center gap-10 mb-6">
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
              Select OIS Type (Code) <span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={formData.oisType}
              options={oisOptions}
              onChange={(e) => setFormData({ ...formData, oisType: e.value })}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500">
              Select Division Name (Code)
              <span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={formData.division}
              options={divisionOptions}
              onChange={(e) => setFormData({ ...formData, division: e.value })}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500">
              Select District Name (Code)
              <span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={formData.district}
              options={districtOptions}
              onChange={(e) => setFormData({ ...formData, district: e.value })}
              placeholder="Select"
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
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-6">
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

      {step === 2 && (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mt-6 animate-fade-in">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <div className="text-center w-full">
              <h3 className="text-lg font-bold text-gray-800">
                स्कूल शिक्षा विभाग (मध्य प्रदेश)
              </h3>
              <div className="flex justify-center gap-12 mt-4 text-sm font-bold">
                <p>
                  Division : <span className="text-blue-600">Bhopal</span>
                </p>
                <p>
                  District : <span className="text-blue-600">Bhopal</span>
                </p>
                <p>
                  Block : <span className="text-blue-600">Berasia</span>
                </p>
                <p>
                  OIS Type : <span className="text-blue-600">Office</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end items-center mb-4">
            <div className="flex gap-2">
              <Button
                label="Export"
                icon="pi pi-file-excel"
                className="p-button-outlined p-button-secondary p-button-sm"
              />
              <span className="p-input-icon-left">
                <InputText className="p-inputtext-sm" placeholder="Search..." />
              </span>
            </div>
          </div>

          <Table
            data={employeeCustomizedData}
            columns={employeeCustomizedColumns(onViewDetail)}
            showPagination={true}
            rowsPerPage={50}
            className="p-datatable-sm"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default EmployeeCustomizedReport;
