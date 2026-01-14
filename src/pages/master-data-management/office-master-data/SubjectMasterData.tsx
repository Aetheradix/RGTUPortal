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

import { specialSchoolMockData, vargOptions } from "./data";
import { getSpecialSchoolColumns } from "./table";

const SubjectMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    varg: null,
    subjectNameEn: "",
    subjectNameHi: "",
    subjectCode: "",
    status: true,
  });

  const handleEdit = (data: any) => {
    setFormData({
      varg: data.vargName || null,
      subjectNameEn: data.subjectEn,
      subjectNameHi: data.subjectHi,
      subjectCode: data.subjectCode,
      status: data.status === "Yes",
    });
    setStep(2);
  };

  const handleSave = () => {
    if (
      !formData.subjectNameEn ||
      !formData.subjectNameHi ||
      !formData.subjectCode
    ) {
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
          detail: "Record Saved Successfully",
          life: 3000,
        });
        setStep(1);
        handleClear();
      },
    });
  };

  const handleClear = () => {
    setFormData({
      varg: null,
      subjectNameEn: "",
      subjectNameHi: "",
      subjectCode: "",
      status: true,
    });
  };

  return (
    <PageLayout title="Subject Master Data">
      <Toast ref={toast} />
      <ConfirmDialog />

      {step === 1 && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex justify-end items-center bg-white p-2 rounded shadow-sm">
            <Button
              label="Add New Subject"
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
                Subject Detail
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
              data={specialSchoolMockData}
              columns={getSpecialSchoolColumns(handleEdit)}
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
                Add New Subject
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
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Varg <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={formData.varg}
                  options={vargOptions}
                  onChange={(e) => setFormData({ ...formData, varg: e.value })}
                  placeholder="Select"
                  className="p-inputtext-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Subject Name (In English)
                  <span className="text-red-500">*</span>
                </label>
                <InputText
                  value={formData.subjectNameEn}
                  onChange={(e) =>
                    setFormData({ ...formData, subjectNameEn: e.target.value })
                  }
                  placeholder="Enter Subject Name (In English)"
                  className="p-inputtext-sm border-orange-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Subject Name (In हिन्दी)
                  <span className="text-red-500">*</span>
                </label>
                <InputText
                  value={formData.subjectNameHi}
                  onChange={(e) =>
                    setFormData({ ...formData, subjectNameHi: e.target.value })
                  }
                  placeholder="Enter Subject Name (In Hindi)"
                  className="p-inputtext-sm border-orange-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Subject Code <span className="text-red-500">*</span>
                </label>
                <InputText
                  value={formData.subjectCode}
                  onChange={(e) =>
                    setFormData({ ...formData, subjectCode: e.target.value })
                  }
                  placeholder="Enter Code No."
                  className="p-inputtext-sm border-orange-200"
                />
              </div>
            </div>
            <div className="flex items-center gap-2 mb-4">
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
    </PageLayout>
  );
};

export default SubjectMaster;
