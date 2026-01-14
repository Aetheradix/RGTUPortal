/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Checkbox } from "primereact/checkbox";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import Table from "@/ui/shared/Table";
import { Dropdown } from "primereact/dropdown";
import {
  localBodyMockData,
  divisionOptions,
  districtOptions,
  blockOptions,
} from "./data";
import { getLocalBodyColumns } from "./table";

const LocalBodyMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    division: null,
    district: null,
    block: null,
    localBodyEn: "",
    localBodyHi: "",
    localBodyCode: "",
    status: true,
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
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Records fetched successfully",
      life: 2000,
    });
  };

  const handleEdit = (data: any) => {
    setFormData({
      division: data.divisionName,
      district: data.districtName,
      block: data.blockName,
      localBodyEn: data.localBodyEn,
      localBodyHi: data.localBodyHi,
      localBodyCode: data.localBodyCode,
      status: data.status === "Yes",
    });
    setStep(3);
  };

  const handleSave = () => {
    if (!formData.localBodyEn || !formData.localBodyCode) {
      toast.current?.show({
        severity: "error",
        summary: "Validation Error",
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
          detail: "Record Saved Successfully",
        });
        setStep(2);
        handleClear();
      },
    });
  };

  const handleClear = () => {
    setFormData({
      division: null,
      district: null,
      block: null,
      localBodyEn: "",
      localBodyHi: "",
      localBodyCode: "",
      status: true,
    });
    if (step === 2) setStep(1);
  };

  return (
    <PageLayout title="Local Body Master Data">
      <Toast ref={toast} />
      <ConfirmDialog />

      <div className="space-y-4 animate-fade-in">
        {(step === 1 || step === 2) && (
          <div className="bg-white p-2 rounded shadow-sm flex justify-between items-center border border-gray-200">
            <div className="flex flex-col"></div>
            <Button
              label="Add New Local Body"
              icon="pi pi-plus"
              className="p-button-sm p-button-primary"
              onClick={() => {
                handleClear();
                setStep(3);
              }}
            />
          </div>
        )}
        {(step === 1 || step === 2) && (
          <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 mt-3">
              <div className="flex flex-col gap-1">
                <label className="text-blue-600 text-sm font-bold">
                  Division Name (Code) <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={formData.division}
                  options={divisionOptions}
                  onChange={(e) =>
                    setFormData({ ...formData, division: e.value })
                  }
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-blue-600 text-sm font-bold">
                  District Name (Code) <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={formData.district}
                  options={districtOptions}
                  onChange={(e) =>
                    setFormData({ ...formData, district: e.value })
                  }
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-blue-600 text-sm font-bold">
                  Block Name (Code) <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={formData.block}
                  options={blockOptions}
                  onChange={(e) => setFormData({ ...formData, block: e.value })}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                label="Search"
                icon="pi pi-search"
                className="p-button-sm px-6"
                onClick={handleSearch}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-sm p-button-outlined p-button-danger px-6"
                onClick={handleClear}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="bg-white p-4 rounded shadow-sm border border-gray-100 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-blue-700 font-bold text-sm border-l-4 border-blue-700 pl-2">
                Local Body Details
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
              data={localBodyMockData}
              columns={getLocalBodyColumns(handleEdit)}
              showPagination
              rowsPerPage={50}
              className="p-datatable-sm"
            />
          </div>
        )}
        {step === 3 && (
          <div className="bg-white rounded shadow-sm border border-gray-200 animate-fade-in">
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">
                Add New Local Body
              </span>
              <Button
                label="Back to List"
                icon="pi pi-undo"
                className="p-button-sm p-button-primary"
                onClick={() => setStep(2)}
              />
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="flex flex-col gap-1">
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
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
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
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-blue-600 text-xs font-bold">
                    Block Name (Code) <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={formData.block}
                    options={blockOptions}
                    onChange={(e) =>
                      setFormData({ ...formData, block: e.value })
                    }
                    placeholder="Select"
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-blue-600 text-xs font-bold">
                    Local Body Name (In English){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={formData.localBodyEn}
                    onChange={(e) =>
                      setFormData({ ...formData, localBodyEn: e.target.value })
                    }
                    placeholder="Enter Local Body Name"
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-blue-600 text-xs font-bold">
                    Local Body Name (In हिन्दी){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={formData.localBodyHi}
                    onChange={(e) =>
                      setFormData({ ...formData, localBodyHi: e.target.value })
                    }
                    placeholder="Enter Local Body Name"
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-blue-600 text-xs font-bold">
                    Local Body Code <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={formData.localBodyCode}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        localBodyCode: e.target.value,
                      })
                    }
                    placeholder="Enter Local Body Code"
                    className="p-inputtext-sm"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2 mb-2">
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
              <div className="flex gap-2 pt-6">
                <Button
                  label="Save"
                  icon="pi pi-save"
                  className="p-button-primary px-6"
                  onClick={handleSave}
                />
                <Button
                  label="Clear"
                  icon="pi pi-refresh"
                  className="p-button-danger p-button-outlined px-6"
                  onClick={handleClear}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default LocalBodyMaster;
