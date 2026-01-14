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
  jskMockData,
  divisionOptions,
  districtOptions,
  blockOptions,
  schoolOptions,
} from "./data";
import { getJSKColumns } from "./table";

const JSKMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    division: null,
    district: null,
    block: null,
    school: null,
    jskNameEn: "",
    jskCode: "",
    status: true,
  });

  const handleEdit = (data: any) => {
    setFormData({
      division: data.divisionName,
      district: data.districtName,
      block: data.blockName,
      school: data.jskCode,
      jskNameEn: data.jskNameEn,
      jskCode: data.jskCode,
      status: data.status === "Yes",
    });
    setStep(2);
  };

  const handleSave = () => {
    if (!formData.division || !formData.jskNameEn || !formData.jskCode) {
      toast.current?.show({
        severity: "error",
        summary: "Validation Error",
        detail: "Please fill all mandatory fields marked with *",
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
          detail: "JSK Saved Successfully",
          life: 3000,
        });
        setStep(1);
        handleClear();
      },
    });
  };

  const handleClear = () => {
    setFormData({
      division: null,
      district: null,
      block: null,
      school: null,
      jskNameEn: "",
      jskCode: "",
      status: true,
    });
  };

  return (
    <PageLayout title="Jan Shiksha Kendra Master Data">
      <Toast ref={toast} />
      <ConfirmDialog />

      {step === 1 && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex justify-end items-center bg-white p-2 rounded shadow-sm border border-gray-200">
            <Button
              label="Add New JSK"
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
                Jan Shiksha Kendra Master Details
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
              data={jskMockData}
              columns={getJSKColumns(handleEdit)}
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
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">
                Add New Jan Shiksha Kendra
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="flex flex-col gap-1">
                <label className="text-blue-600 text-xs font-bold">
                  Division (Code) <span className="text-red-500">*</span>
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
                  onChange={(e) => setFormData({ ...formData, block: e.value })}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-blue-600 text-xs font-bold">
                  School/UDISE (Code) <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={formData.school}
                  options={schoolOptions}
                  onChange={(e) =>
                    setFormData({ ...formData, school: e.value })
                  }
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-blue-600 text-xs font-bold">
                  Jan Shiksha Kendra Name (In English){" "}
                  <span className="text-red-500">*</span>
                </label>
                <InputText
                  value={formData.jskNameEn}
                  onChange={(e) =>
                    setFormData({ ...formData, jskNameEn: e.target.value })
                  }
                  placeholder="Enter Jan Shiksha Kendra Name (In English)"
                  className="p-inputtext-sm border-orange-200 bg-gray-50"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-blue-600 text-xs font-bold">
                  Jan Shiksha Kendra Code{" "}
                  <span className="text-red-500">*</span>
                </label>
                <InputText
                  value={formData.jskCode}
                  onChange={(e) =>
                    setFormData({ ...formData, jskCode: e.target.value })
                  }
                  placeholder="Enter Jan Shiksha Kendra Code No."
                  className="p-inputtext-sm border-orange-200 bg-gray-50"
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
                className="text-blue-600 text-xs font-bold"
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
    </PageLayout>
  );
};

export default JSKMaster;
