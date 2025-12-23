import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Toast } from "primereact/toast";

interface GroupData {
  srNo: number;
  groupName: string;
  groupCode: string;
  groupOrderNo: string;
  parentGroup: string;
  closingForward: string;
  status: "Active" | "Inactive";
}

interface GroupForm {
  parentGroup: string | null;
  nameEnglish: string;
  nameHindi: string;
  groupCode: string;
  orderNo: string;
  closingForward: string | null;
  isActive: boolean;
}

const GroupManagement: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const toast = useRef<Toast>(null);

  const [formData, setFormData] = useState<GroupForm>({
    parentGroup: null,
    nameEnglish: "",
    nameHindi: "",
    groupCode: "",
    orderNo: "",
    closingForward: null,
    isActive: true,
  });

  const [groups] = useState<GroupData[]>([
    {
      srNo: 1,
      groupName: "Bank Accounts",
      groupCode: "12",
      groupOrderNo: "01",
      parentGroup: "Current Assets",
      closingForward: "Yes",
      status: "Active",
    },
    {
      srNo: 2,
      groupName: "Cash-in-hand",
      groupCode: "25",
      groupOrderNo: "02",
      parentGroup: "Current Assets",
      closingForward: "Yes",
      status: "Active",
    },
    {
      srNo: 3,
      groupName: "Sundry Debtors",
      groupCode: "01",
      groupOrderNo: "03",
      parentGroup: "Current Assets",
      closingForward: "No",
      status: "Active",
    },
    {
      srNo: 4,
      groupName: "Saving Accounts",
      groupCode: "02",
      groupOrderNo: "04",
      parentGroup: "Bank Accounts",
      closingForward: "Yes",
      status: "Active",
    },
    {
      srNo: 5,
      groupName: "Current Account",
      groupCode: "06",
      groupOrderNo: "05",
      parentGroup: "Bank Accounts",
      closingForward: "Yes",
      status: "Inactive",
    },
  ]);

  const groupOptions = [
    { label: "Current Assets", value: "CA" },
    { label: "Current Liabilities", value: "CL" },
    { label: "Bank Accounts", value: "BA" },
    { label: "Fixed Assets", value: "AS" },
    { label: "Direct Income", value: "DI" },
  ];

  const handleSearch = () => {
    if (!selectedGroup) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select a group",
        life: 3000,
      });
      return;
    }
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Search results updated",
      life: 3000,
    });
  };

  const handleClearSearch = () => {
    setSelectedGroup(null);
    setStep(1);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Filters have been reset",
      life: 2000,
    });
  };

  const handleSave = () => {
    toast.current?.show({
      severity: "success",
      summary: "Saved",
      detail: "Group management record saved",
      life: 3000,
    });
    setStep(2);
  };

  const statusBodyTemplate = (rowData: GroupData) => {
    const isActive = rowData.status === "Active";
    return (
      <span
        className={`px-2 py-1 rounded text-xs font-semibold ${
          isActive ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}
      >
        {rowData.status}
      </span>
    );
  };

  const actionBodyTemplate = () => (
    <div className="flex gap-1">
      <Button
        icon="pi pi-pencil"
        text
        className="p-button-sm p-button-info"
        style={{ padding: "0", width: "2rem" }}
      />
      <Button
        icon="pi pi-trash"
        text
        className="p-button-sm p-button-danger"
        style={{ padding: "0", width: "2rem" }}
      />
    </div>
  );

  return (
    <PageLayout title="Group Management">
      <Toast ref={toast} />

      {step !== 3 ? (
        <div className="space-y-6">
          <div className="flex justify-end">
            <Button
              label="Add Group Management"
              icon="pi pi-plus"
              className="p-button-sm bg-indigo-600 border-none"
              onClick={() => setStep(3)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold">
                Select Group<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={selectedGroup}
                options={groupOptions}
                onChange={(e) => setSelectedGroup(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>
            <div className="flex gap-2">
              <Button
                label="Search"
                icon="pi pi-search"
                onClick={handleSearch}
                className="px-6 bg-indigo-600 border-none"
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                onClick={handleClearSearch}
                className="p-button-outlined p-button-danger"
              />
            </div>
          </div>

          {step === 2 && (
            <div className="mt-8 animate-fade-in">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Group List
              </h2>
              <DataTable
                value={groups}
                paginator
                rows={10}
                className="p-datatable-sm shadow-1"
                responsiveLayout="scroll"
              >
                <Column
                  field="srNo"
                  header="Sr. No."
                  style={{ width: "80px" }}
                  sortable
                />
                <Column field="groupName" header="Group Name" sortable />
                <Column field="groupCode" header="Group Code" sortable />
                <Column
                  field="groupOrderNo"
                  header="Group Order No."
                  sortable
                />
                <Column field="parentGroup" header="Parent Group" sortable />
                <Column
                  field="closingForward"
                  header="Closing Forward"
                  sortable
                />
                <Column
                  field="status"
                  header="Status"
                  body={statusBodyTemplate}
                  sortable
                />
                <Column header="Actions" body={actionBodyTemplate} />
              </DataTable>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white space-y-6 animate-fade-in">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Add Group Management
            </h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-sm p-button-secondary bg-indigo-600 border-none"
              onClick={() => setStep(2)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Select Group <span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={formData.parentGroup}
                options={groupOptions}
                onChange={(e) =>
                  setFormData({ ...formData, parentGroup: e.value })
                }
                placeholder="Select"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Group Name (English) <span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.nameEnglish}
                onChange={(e) =>
                  setFormData({ ...formData, nameEnglish: e.target.value })
                }
                placeholder="Enter Name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Group Name (Hindi) <span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.nameHindi}
                onChange={(e) =>
                  setFormData({ ...formData, nameHindi: e.target.value })
                }
                placeholder="नाम हिंदी में"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Group Code <span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.groupCode}
                onChange={(e) =>
                  setFormData({ ...formData, groupCode: e.target.value })
                }
                placeholder="Enter Code"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Group Order No. <span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.orderNo}
                onChange={(e) =>
                  setFormData({ ...formData, orderNo: e.target.value })
                }
                placeholder="Enter Order No"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Closing Balanced Forward?{" "}
                <span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={formData.closingForward}
                options={[
                  { label: "Yes", value: "Yes" },
                  { label: "No", value: "No" },
                ]}
                onChange={(e) =>
                  setFormData({ ...formData, closingForward: e.value })
                }
                placeholder="Select"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">Status</label>
              <div className="flex items-center gap-2 mt-2">
                <Checkbox
                  inputId="activeStatus"
                  checked={formData.isActive}
                  onChange={(e) =>
                    setFormData({ ...formData, isActive: e.checked ?? false })
                  }
                />
                <label htmlFor="activeStatus" className="text-sm">
                  Active
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-3 mt-10">
            <Button
              label="Save"
              className="px-8 bg-indigo-600 border-none"
              onClick={handleSave}
            />
            <Button
              label="Clear"
              className="px-8 p-button-outlined p-button-danger"
              onClick={() =>
                setFormData({
                  parentGroup: null,
                  nameEnglish: "",
                  nameHindi: "",
                  groupCode: "",
                  orderNo: "",
                  closingForward: null,
                  isActive: true,
                })
              }
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default GroupManagement;
