import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { Checkbox } from "primereact/checkbox";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

const OtherDepartmentForm: React.FC = () => {
  const toast = useRef<Toast>(null);

  const [formData, setFormData] = useState({
    nameEn: "",
    nameHi: "",
    code: "",
    forScheme: false,
    status: true,
  });

  const showDeniedToast = () => {
    toast.current?.show({
      severity: "error",
      summary: "Access Denied",
      detail: "Access to this action is denied",
      life: 3000,
    });
  };

  const handleSave = () => {
    confirmDialog({
      message: "Are you sure you want to save this record?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptClassName: "p-button-primary",
      rejectClassName: "p-button-outlined",
      accept: () => showDeniedToast(),
    });
  };

  const handleClear = () => {
    setFormData({
      nameEn: "",
      nameHi: "",
      code: "",
      forScheme: false,
      status: true,
    });
  };

  return (
    <PageLayout title="Other Department Master">
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className="bg-white rounded shadow-sm border border-gray-200 animate-fade-in">
        <div className="flex justify-between items-center p-4 border-b bg-gray-50">
          <div className="flex items-center gap-2">
            <span className="bg-blue-600 text-white px-3 py-1 rounded text-xs">
              Add Other Department
            </span>
          </div>
          <Button
            label="Back to List"
            icon="pi pi-undo"
            className="p-button-sm p-button-primary"
          />
        </div>
        <div className="p-6">
          <div className="bg-white p-2 rounded border border-blue-200 mb-6 inline-block">
            <span className="text-blue-700 font-bold text-xs">
              Add Other Department
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex flex-col gap-1">
              <label className="text-blue-600 text-xs font-bold">
                Other Department Name (In English)
                <span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.nameEn}
                onChange={(e) =>
                  setFormData({ ...formData, nameEn: e.target.value })
                }
                placeholder="Enter Other Department Name (In English)"
                className="p-inputtext-sm border-orange-200"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-blue-600 text-xs font-bold">
                Other Department Name (In हिन्दी)
                <span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.nameHi}
                onChange={(e) =>
                  setFormData({ ...formData, nameHi: e.target.value })
                }
                placeholder="Enter Other Department Name (In Hindi)"
                className="p-inputtext-sm border-orange-200"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-blue-600 text-xs font-bold">
                Other Department Code No.
                <span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.code}
                onChange={(e) =>
                  setFormData({ ...formData, code: e.target.value })
                }
                placeholder="Enter Other Department Code No."
                className="p-inputtext-sm border-orange-200"
              />
            </div>
          </div>
          <div className="flex gap-10 mb-2">
            <div className="flex items-center gap-2">
              <Checkbox
                inputId="forScheme"
                checked={formData.forScheme}
                onChange={(e) =>
                  setFormData({ ...formData, forScheme: e.checked ?? false })
                }
              />
              <label
                htmlFor="forScheme"
                className="text-blue-400 text-xs font-bold"
              >
                For Scheme
              </label>
            </div>
            <div className="flex items-center gap-2">
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
          <div className="flex gap-2 pt-6 mt-1">
            <Button
              label="Save"
              icon="pi pi-save"
              className="p-button-primary"
              onClick={handleSave}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-danger p-button-outlined "
              onClick={handleClear}
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default OtherDepartmentForm;
