import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";

import { sankulOptions } from "./data";
import {
  blockOptions,
  districtOptions,
  divisionOptions,
} from "../employee-directory/data";
import { printIdColumns } from "./table";

const PrintEmployeeCard: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    division: null,
    district: null,
    block: null,
    sankul: null,
  });

  const handleSearch = () => {
    if (!formData.division || !formData.district || !formData.block) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select Division, District, and Block",
        life: 3000,
      });
      return;
    }
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Columns loaded. No records found.",
      life: 2000,
    });
  };

  const handleClear = () => {
    setFormData({ division: null, district: null, block: null, sankul: null });
    setStep(1);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Filters reset",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Print Employee Card Details">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <h4 className="text-blue-600 font-bold mb-4 border-b pb-2">Search</h4>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500">
              Select Division Name<span className="text-red-500">*</span>
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
              Select District Name<span className="text-red-500">*</span>
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
              Select Block Name
            </label>
            <Dropdown
              value={formData.block}
              options={blockOptions}
              onChange={(e) => setFormData({ ...formData, block: e.value })}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500">
              Select Sankul
            </label>
            <Dropdown
              value={formData.sankul}
              options={sankulOptions}
              onChange={(e) => setFormData({ ...formData, sankul: e.value })}
              placeholder="Select"
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
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="text-md font-bold text-blue-700">
              Print Employee Details
            </h3>
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
            data={[]}
            columns={printIdColumns}
            showPagination={true}
            rowsPerPage={50}
            className="p-datatable-sm"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default PrintEmployeeCard;
