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
  designationMappingMockData,
  officeLevelOptions,
  districtOptions,
} from "./data";
import { getDesignationMappingColumns } from "./table";

const DesignationMappingMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    officeLevel: null,
    district: null,
    status: true,
  });

  const handleEdit = (data: any) => {
    setFormData({
      officeLevel: data.levelName,
      district: null,
      status: data.status === "Yes",
    });
    setStep(2);
  };

  const handleSave = () => {
    if (!formData.officeLevel) {
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
          detail: "Mapping Saved Successfully",
          life: 3000,
        });
        setStep(1);
        handleClear();
      },
    });
  };

  const handleClear = () => {
    setFormData({
      officeLevel: null,
      district: null,
      status: true,
    });
  };

  return (
    <PageLayout title="Office TypeLevel To Designation Mapping">
      <Toast ref={toast} />
      <ConfirmDialog />

      <div className="space-y-4 animate-fade-in">
        {step === 1 && (
          <>
            <div className="bg-white p-2 rounded shadow-sm flex justify-end items-center border border-gray-200">
              <Button
                label="Add New Mapping"
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
                  Office TypeLevel To Designation Mapping
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
                data={designationMappingMockData}
                columns={getDesignationMappingColumns(handleEdit)}
                showPagination={true}
                rowsPerPage={10}
                className="p-datatable-sm"
              />
            </div>
          </>
        )}
        {step === 2 && (
          <div className="bg-white rounded shadow-sm border border-gray-200 animate-fade-in">
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <div className="flex items-center gap-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">
                  Add New Mapping
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="flex flex-col gap-1">
                  <label className="text-blue-600 text-xs font-bold">
                    Office Type Level <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={formData.officeLevel}
                    options={officeLevelOptions}
                    onChange={(e) =>
                      setFormData({ ...formData, officeLevel: e.value })
                    }
                    placeholder="Select"
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-blue-600 text-xs font-bold">
                    District Name (Code)
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
                <div className="flex items-center gap-2 mt-6">
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
              </div>
              <div className="flex gap-2 pt-6 ">
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

export default DesignationMappingMaster;
