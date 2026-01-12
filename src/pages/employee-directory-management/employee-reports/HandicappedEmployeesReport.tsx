import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";

import { oisOptions, handicappedTypeOptions } from "./data";
import {
  blockOptions,
  districtOptions,
  divisionOptions,
} from "../employee-directory/data";

const HandicappedEmployeeReport: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [formData, setFormData] = useState({
    division: null,
    district: null,
    block: null,
    oisType: null,
    handicappedType: null,
  });

  const handleSearch = () => {
    if (!formData.division || !formData.oisType) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select * fields",
        life: 3000,
      });
      return;
    }

    toast.current?.show({
      severity: "warn",
      summary: "No Data Found",
      detail: "No records found for the selected criteria.",
      life: 4000,
    });
  };

  const handleClear = () => {
    setFormData({
      division: null,
      district: null,
      block: null,
      oisType: null,
      handicappedType: null,
    });
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Search filters reset",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Handicapped Employee's Report">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <h4 className="text-blue-600 font-bold mb-4 border-b pb-2 text-md">
          Search Details
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-500">
              Select Division (Code) <span className="text-red-500">*</span>
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
              Select District (Code)<span className="text-red-500">*</span>
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
              Select Block (Code)<span className="text-red-500">*</span>
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
              Select OIS Type<span className="text-red-500">*</span>
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
              Select Handicapped Type<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={formData.handicappedType}
              options={handicappedTypeOptions}
              onChange={(e) =>
                setFormData({ ...formData, handicappedType: e.value })
              }
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-0  pt-6">
          <Button
            label="Search"
            icon="pi pi-search"
            onClick={handleSearch}
            className="p-button-primary p-button-sm px-8"
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            onClick={handleClear}
            className="p-button-outlined p-button-danger p-button-sm px-8"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default HandicappedEmployeeReport;
