/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Table from "@/ui/shared/Table";

import { divisionMockData } from "./data";
import { getDivisionColumns } from "./table";

const DivisionMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    stateName: "Madhya Pradesh",
    divisionNameEn: "",
    divisionNameHi: "",
    divisionCode: "",
    lgdCode: "",
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
      stateName: data.stateName,
      divisionNameEn: data.divisionNameEn,
      divisionNameHi: data.divisionNameHi,
      divisionCode: data.divisionCode,
      lgdCode: data.lgdCode,
      status: data.status === "Yes",
    });
    setStep(2);
  };

  return (
    <PageLayout title="Division Master Data">
      <Toast ref={toast} />

      {step === 1 && (
        <div className="space-y-4 animate-fade-in">
          <div className="bg-white p-3 rounded shadow-sm flex justify-between items-center">
            <div className="flex flex-col"></div>
            <Button
              label="Add New Division"
              icon="pi pi-plus"
              className="p-button-sm p-button-primary"
              onClick={handleAddNew}
            />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-blue-700 font-bold text-sm border-l-4 border-blue-700 pl-2">
                Division Details
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
              data={divisionMockData}
              columns={getDivisionColumns(handleEdit)}
              showPagination={true}
              rowsPerPage={50}
              className="p-datatable-sm"
            />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white rounded shadow-sm border border-gray-200 animate-fade-in">
          <div className="flex justify-between items-center p-4 border-b bg-gray-50">
            <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-bold">
              Edit Division
            </span>
            <Button
              label="Back to List"
              icon="pi pi-undo"
              className="p-button-sm p-button-primary"
              onClick={() => setStep(1)}
            />
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-3">
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  State Name
                </label>
                <InputText
                  value={formData.stateName}
                  disabled
                  className="p-inputtext-sm bg-gray-100"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Division Name (In English)
                  <span className="text-red-500">*</span>
                </label>
                <InputText
                  value={formData.divisionNameEn}
                  onChange={(e) =>
                    setFormData({ ...formData, divisionNameEn: e.target.value })
                  }
                  className="p-inputtext-sm border-orange-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Division Name (In हिन्दी){" "}
                  <span className="text-red-500">*</span>
                </label>
                <InputText
                  value={formData.divisionNameHi}
                  onChange={(e) =>
                    setFormData({ ...formData, divisionNameHi: e.target.value })
                  }
                  className="p-inputtext-sm border-orange-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Division Code <span className="text-red-500">*</span>
                </label>
                <InputText
                  value={formData.divisionCode}
                  onChange={(e) =>
                    setFormData({ ...formData, divisionCode: e.target.value })
                  }
                  className="p-inputtext-sm border-orange-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-blue-600 text-xs font-bold">
                  Lgd Code
                </label>
                <InputText
                  value={formData.lgdCode}
                  onChange={(e) =>
                    setFormData({ ...formData, lgdCode: e.target.value })
                  }
                  className="p-inputtext-sm border-orange-200"
                />
              </div>
            </div>
            <div className="flex gap-2 pt-6">
              <Button
                label="Save"
                icon="pi pi-save"
                className="p-button-primary"
                onClick={() => setStep(1)}
              />
              <Button
                label="Cancel"
                icon="pi pi-refresh"
                className="p-button-danger p-button-outlined"
                onClick={() => setStep(1)}
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default DivisionMaster;
