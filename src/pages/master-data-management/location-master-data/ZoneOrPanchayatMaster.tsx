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
  zonePanchayatMockData,
  divisionOptions,
  districtOptions,
  blockOptions,
  localBodyOptions,
} from "./data";
import { getZonePanchayatColumns } from "./table";

const ZonePanchayatMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    division: null,
    district: null,
    block: null,
    localBody: null,
    zoneEn: "",
    zoneHi: "",
    zoneCode: "",
    status: true,
  });

  const handleEdit = (data: any) => {
    setFormData({
      division: data.divisionName,
      district: data.districtName,
      block: data.blockName,
      localBody: data.localBodyName,
      zoneEn: data.zonePanchayatEn,
      zoneHi: data.zonePanchayatHi,
      zoneCode: data.zonePanchayatCode,
      status: data.status === "Yes",
    });
    setStep(2);
  };

  const handleSave = () => {
    if (!formData.zoneEn || !formData.zoneCode) {
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
      localBody: null,
      zoneEn: "",
      zoneHi: "",
      zoneCode: "",
      status: true,
    });
  };

  return (
    <PageLayout title="Zone or Panchayat Master Data">
      <Toast ref={toast} />
      <ConfirmDialog />

      <div className="space-y-4 animate-fade-in">
        {step === 1 && (
          <>
            <div className="bg-white p-2 rounded shadow-sm flex justify-end items-center border border-gray-200">
              <Button
                label="Add New Zone Panchayat"
                icon="pi pi-plus"
                className="p-button-sm p-button-primary"
                onClick={() => {
                  handleClear();
                  setStep(2);
                }}
              />
            </div>

            <div className="bg-white p-4 rounded shadow-sm border border-gray-100 animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-blue-700 font-bold text-sm border-l-4 border-blue-700 pl-2">
                  Zone Panchayat Details
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
                data={zonePanchayatMockData}
                columns={getZonePanchayatColumns(handleEdit)}
                showPagination
                rowsPerPage={10}
                className="p-datatable-sm"
              />
            </div>
          </>
        )}
        {step === 2 && (
          <div className="bg-white rounded shadow-sm border border-gray-200 animate-fade-in">
            <div className="flex justify-between items-center p-4 border-b bg-gray-50">
              <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">
                Add New Zone Panchayat
              </span>
              <Button
                label="Back to List"
                icon="pi pi-undo"
                className="p-button-sm p-button-primary"
                onClick={() => setStep(1)}
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
                    Local Body Name (Code)
                    <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={formData.localBody}
                    options={localBodyOptions}
                    onChange={(e) =>
                      setFormData({ ...formData, localBody: e.value })
                    }
                    placeholder="Select"
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-blue-600 text-xs font-bold">
                    Zone Panchayat Name (In English)
                    <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={formData.zoneEn}
                    onChange={(e) =>
                      setFormData({ ...formData, zoneEn: e.target.value })
                    }
                    placeholder="Enter Zone Name"
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-blue-600 text-xs font-bold">
                    Zone Panchayat Name (In हिन्दी)
                    <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={formData.zoneHi}
                    onChange={(e) =>
                      setFormData({ ...formData, zoneHi: e.target.value })
                    }
                    placeholder="Enter Zone Name"
                    className="p-inputtext-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-blue-600 text-xs font-bold">
                    Zone Panchayat Code <span className="text-red-500">*</span>
                  </label>
                  <InputText
                    value={formData.zoneCode}
                    onChange={(e) =>
                      setFormData({ ...formData, zoneCode: e.target.value })
                    }
                    placeholder="Enter Zone Code"
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

export default ZonePanchayatMaster;
