import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Table from "@/ui/shared/Table";

import {
  villageMockData,
  divisionOptions,
  districtOptions,
  blockOptions,
} from "./data";
import { getVillageColumns } from "./table";
import Dropdown from "@/ui/shared/Dropdown";

const VillageMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [showGrid, setShowGrid] = useState(false);
  const [formData, setFormData] = useState({
    division: null,
    district: null,
    block: null,
  });

  const handleSearch = () => {
    if (!formData.division) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select Division",
        life: 3000,
      });
      return;
    }
    setShowGrid(true);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Records fetched successfully",
      life: 2000,
    });
  };

  const handleClear = () => {
    setFormData({ division: null, district: null, block: null });
    setShowGrid(false);
  };

  const showDeniedToast = () => {
    toast.current?.show({
      severity: "error",
      summary: "Access Denied",
      detail: "Access to this page denied",
      life: 3000,
    });
  };

  return (
    <PageLayout title="Village Master Data">
      <Toast ref={toast} />

      <div className="space-y-4 animate-fade-in">
        <div className="bg-white p-2 rounded shadow-sm flex justify-end items-center ">
          <Button
            label="Add New Village"
            icon="pi pi-plus"
            className="p-button-sm p-button-primary"
            onClick={showDeniedToast}
          />
        </div>

        <div className="bg-white p-4 rounded shadow-sm">
          <div className="flex items-center gap-2 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <div className="flex flex-col gap-2">
              <label className="text-blue-600 text-sm font-bold">
                Division (Code)<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={formData.division}
                options={divisionOptions}
                onChange={(e) =>
                  setFormData({ ...formData, division: e.value })
                }
                placeholder="Select Division"
                className="p-inputtext-sm w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-blue-600 text-sm font-bold">
                District (Code)<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={formData.district}
                options={districtOptions}
                onChange={(e) =>
                  setFormData({ ...formData, district: e.value })
                }
                placeholder="Select District"
                className="p-inputtext-sm w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-blue-600 text-sm font-bold">
                Block (Code)<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={formData.block}
                options={blockOptions}
                onChange={(e) => setFormData({ ...formData, block: e.value })}
                placeholder="Select Block"
                className="p-inputtext-sm w-full"
              />
            </div>
          </div>
          <div className="flex gap-2  pt-4">
            <Button
              label="Search"
              icon="pi pi-search"
              className="p-button-primary p-button-sm px-6"
              onClick={handleSearch}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-danger p-button-outlined p-button-sm px-6"
              onClick={handleClear}
            />
          </div>
        </div>

        {showGrid && (
          <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-blue-700 font-bold text-sm border-l-4 border-blue-700 pl-2">
                Village Master Details
              </h3>
              <div className="flex gap-2">
                <Button
                  label="Export"
                  icon="pi pi-file-excel"
                  className="p-button-sm p-button-secondary"
                />
                <span className="p-input-icon-left">
                  <InputText
                    placeholder="Search..."
                    className="p-inputtext-sm"
                  />
                </span>
              </div>
            </div>
            <Table
              data={villageMockData}
              // eslint-disable-next-line react-hooks/refs
              columns={getVillageColumns(showDeniedToast)}
              showPagination={true}
              rowsPerPage={50}
              className="p-datatable-sm"
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default VillageMaster;
