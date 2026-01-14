/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Table from "@/ui/shared/Table";
import { officeTypeMockData } from "./data";
import { getOfficeTypeColumns } from "./table";

const OfficeTypeMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    oisType: "",
    officeLevel: "",
    officeTypeNameEn: "",
    officeTypeNameHi: "",
    officeTypeCode: "",
    status: true,
  });

  const handleAddNew = () => {
    toast.current?.show({
      severity: "error",
      summary: "Access Denied",
      detail: "Access to this page denied",
      life: 3000,
    });
  };

  const handleEdit = (data: any) => {
    setFormData({
      oisType: data.oisType,
      officeLevel: data.officeLevel,
      officeTypeNameEn: data.officeTypeNameEn,
      officeTypeNameHi: data.officeTypeNameHi,
      officeTypeCode: data.officeTypeCode,
      status: data.status === "Yes",
    });
    setStep(2);
  };

  return (
    <PageLayout title="Office Type Master Data">
      <Toast ref={toast} />

      {step === 1 && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex justify-end items-center bg-white p-2 rounded shadow-sm">
            <Button
              label="Add New Office Type Master"
              icon="pi pi-plus"
              className="p-button-sm p-button-primary"
              onClick={handleAddNew}
            />
          </div>
          <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-blue-700 font-bold text-md border-l-4 border-blue-700 pl-2">
                Office Type Details
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
              data={officeTypeMockData}
              columns={getOfficeTypeColumns(handleEdit)}
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
                Edit Office Type
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
                  OIS Type
                </label>
                <InputText
                  value={formData.oisType}
                  disabled
                  className="p-inputtext-sm bg-gray-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Office Type Level
                </label>
                <InputText
                  value={formData.officeLevel}
                  disabled
                  className="p-inputtext-sm bg-gray-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Office Type Name (English)
                </label>
                <InputText
                  value={formData.officeTypeNameEn}
                  disabled
                  className="p-inputtext-sm bg-gray-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Office Type Code
                </label>
                <InputText
                  value={formData.officeTypeCode}
                  disabled
                  className="p-inputtext-sm bg-gray-100"
                />
              </div>
            </div>
            <div className="flex gap-2 pt-6">
              <Button
                label="Cancel"
                icon="pi pi-times"
                className="p-button-danger p-button-outlined px-6"
                onClick={() => setStep(1)}
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default OfficeTypeMaster;
