/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Checkbox } from "primereact/checkbox";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import Table from "@/ui/shared/Table";

import {
  blockMockData,
  stateOptions,
  divisionOptions,
  districtOptions,
} from "./data";
import { getBlockColumns } from "./table";
import Dropdown from "@/ui/shared/Dropdown";

const BlockMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    state: null,
    division: null,
    district: null,
    blockNameEn: "",
    blockNameHi: "",
    blockCode: "",
    lgdCode: "",
    status: true,
  });

  const handleEdit = (data: any) => {
    setFormData({
      state: null,
      division: null,
      district: null,
      blockNameEn: data.blockNameEn,
      blockNameHi: data.blockNameHi,
      blockCode: data.blockCode,
      lgdCode: data.lgdCode,
      status: data.status === "Yes",
    });
    setStep(2);
  };

  const handleSave = () => {
    if (!formData.blockNameEn || !formData.blockNameHi || !formData.blockCode) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please fill all mandatory fields",
        life: 3000,
      });
      return;
    }

    confirmDialog({
      message: "Are you sure you want to save record?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        toast.current?.show({
          severity: "success",
          summary: "Success",
          detail: "Block Saved Successfully",
          life: 3000,
        });
        setStep(1);
        handleClear();
      },
    });
  };

  const handleClear = () => {
    setFormData({
      state: null,
      division: null,
      district: null,
      blockNameEn: "",
      blockNameHi: "",
      blockCode: "",
      lgdCode: "",
      status: true,
    });
  };

  return (
    <PageLayout title="Block Master Data">
      <Toast ref={toast} />
      <ConfirmDialog />

      {step === 1 && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-white p-2 rounded shadow-sm flex justify-between items-center ">
            <div className="flex flex-col"></div>
            <Button
              label="Add New Block Master"
              icon="pi pi-plus"
              className="p-button-sm p-button-primary"
              onClick={() => {
                handleClear();
                setStep(2);
              }}
            />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-blue-700 font-bold text-sm border-l-4 border-blue-700 pl-2">
                Block Master Details
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
              data={blockMockData}
              columns={getBlockColumns(handleEdit)}
              showPagination={true}
              rowsPerPage={10}
              className="p-datatable-sm"
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white rounded shadow-sm border border-gray-200 animate-fade-in">
          <div className="flex justify-between items-center p-4 border-b bg-gray-50">
            <div className="flex items-center gap-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs">
                Add New Block
              </span>
            </div>
            <Button
              label="Back to List"
              icon="pi pi-undo"
              className="p-button-sm p-button-primary"
              onClick={() => setStep(1)}
            />
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-0">
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  State Name (Code) <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={formData.state}
                  options={stateOptions}
                  onChange={(e) => setFormData({ ...formData, state: e.value })}
                  placeholder="Select"
                  className="p-inputtext-sm w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Division Name (Code) <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={formData.division}
                  options={divisionOptions}
                  onChange={(e) =>
                    setFormData({ ...formData, division: e.value })
                  }
                  placeholder="Select"
                  className="p-inputtext-sm w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  District Name (Code) <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={formData.district}
                  options={districtOptions}
                  onChange={(e) =>
                    setFormData({ ...formData, district: e.value })
                  }
                  placeholder="Select"
                  className="p-inputtext-sm w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Block Name (In English){" "}
                  <span className="text-red-500">*</span>
                </label>
                <InputText
                  value={formData.blockNameEn}
                  onChange={(e) =>
                    setFormData({ ...formData, blockNameEn: e.target.value })
                  }
                  placeholder="Enter Block Name (In English)"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Block Name (In हिन्दी) <span className="text-red-500">*</span>
                </label>
                <InputText
                  value={formData.blockNameHi}
                  onChange={(e) =>
                    setFormData({ ...formData, blockNameHi: e.target.value })
                  }
                  placeholder="Enter Block Name (In Hindi)"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Block Code <span className="text-red-500">*</span>
                </label>
                <InputText
                  value={formData.blockCode}
                  onChange={(e) =>
                    setFormData({ ...formData, blockCode: e.target.value })
                  }
                  placeholder="Enter Block Code"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Lgd Code <span className="text-red-500">*</span>
                </label>
                <InputText
                  value={formData.lgdCode}
                  onChange={(e) =>
                    setFormData({ ...formData, lgdCode: e.target.value })
                  }
                  placeholder="Enter Lgd Code"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex items-center gap-2 md:mt-6">
                <Checkbox
                  inputId="status"
                  checked={formData.status}
                  onChange={(e) =>
                    setFormData({ ...formData, status: e.checked ?? false })
                  }
                />
                <label
                  htmlFor="status"
                  className="text-blue-400 text-xs font-bold"
                >
                  Status (Active/InActive)
                </label>
              </div>
            </div>

            <div className="flex gap-2 pt-6 ">
              <Button
                label="Save"
                icon="pi pi-save"
                className="p-button-primary"
                onClick={handleSave}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-danger p-button-outlined px-10"
                onClick={handleClear}
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default BlockMaster;
