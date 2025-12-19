import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

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
    {
      srNo: 6,
      groupName: "Stock-in-hand",
      groupCode: "09",
      groupOrderNo: "06",
      parentGroup: "Investments",
      closingForward: "No",
      status: "Active",
    },
    {
      srNo: 7,
      groupName: "Sundry Creditors",
      groupCode: "07",
      groupOrderNo: "07",
      parentGroup: "Current Liabilities",
      closingForward: "Yes",
      status: "Active",
    },
    {
      srNo: 8,
      groupName: "Duties & Taxes",
      groupCode: "08",
      groupOrderNo: "08",
      parentGroup: "Current Liabilities",
      closingForward: "No",
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

  const handleSearch = () => setStep(2);
  const handleClear = () => {
    setSelectedGroup(null);
    setStep(1);
  };
  const openAddForm = () => setStep(3);

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
  return (
    <PageLayout title="Group Management">
      {step !== 3 && (
        <div>
          <div className="flex justify-end items-center mb-2">
            <Button
              label="Add Group Management"
              icon="pi pi-plus"
              className="p-button-sm"
              style={{ backgroundColor: "#6366f1" }}
              onClick={openAddForm}
            />
          </div>
          <div className="mb-5 pb-5">
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
                  className="w-full border-gray-300"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  label="Search"
                  icon="pi pi-search"
                  onClick={handleSearch}
                  className="px-6"
                  style={{ backgroundColor: "#4f46e5" }}
                />
                <Button
                  label="Clear"
                  onClick={handleClear}
                  className="p-button-secondary p-button-outlined"
                  style={{ color: "#ef4444", borderColor: "#fee2e2" }}
                />
              </div>
            </div>
          </div>
          {step === 2 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Group List
              </h2>
              <DataTable
                value={groups}
                paginator
                rows={10}
                className="p-datatable-sm"
              >
                <Column
                  field="srNo"
                  header="Sr. No."
                  sortable
                  style={{ borderBottom: "1px solid #e5e7eb" }}
                />
                <Column
                  field="groupName"
                  header="Group Name"
                  sortable
                  style={{ borderBottom: "1px solid #e5e7eb" }}
                />
                <Column
                  field="groupCode"
                  header="Group Code"
                  sortable
                  style={{ borderBottom: "1px solid #e5e7eb" }}
                />
                <Column
                  field="groupOrderNo"
                  header="Group Order No."
                  sortable
                  style={{ borderBottom: "1px solid #e5e7eb" }}
                />
                <Column
                  field="parentGroup"
                  header="Parent Group"
                  sortable
                  style={{ borderBottom: "1px solid #e5e7eb" }}
                />
                <Column
                  field="closingForward"
                  header="Closing Forward"
                  sortable
                  style={{ borderBottom: "1px solid #e5e7eb" }}
                />
                <Column
                  field="status"
                  header="Status"
                  body={statusBodyTemplate}
                  sortable
                  style={{ borderBottom: "1px solid #e5e7eb" }}
                />
                <Column
                  header="Actions"
                  style={{ borderBottom: "1px solid #e5e7eb" }}
                  body={() => (
                    <div className="flex gap-2">
                      <Button
                        icon="pi pi-pencil"
                        className="p-button-rounded p-button-text p-button-sm"
                      />
                      <Button
                        icon="pi pi-trash"
                        className="p-button-rounded p-button-text p-button-danger p-button-sm"
                      />
                    </div>
                  )}
                />
              </DataTable>
            </div>
          )}
        </div>
      )}
      {step === 3 && (
        <div className="bg-white ">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Add Group Management
            </h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-sm p-button-secondary"
              style={{ backgroundColor: "#6366f1" }}
              onClick={() => setStep(2)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Select Group<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={formData.parentGroup}
                options={groupOptions}
                onChange={(e) =>
                  setFormData({ ...formData, parentGroup: e.value })
                }
                placeholder="Select"
                className="w-full border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Enter Group Name in English
                <span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.nameEnglish}
                onChange={(e) =>
                  setFormData({ ...formData, nameEnglish: e.target.value })
                }
                placeholder="Enter Group Name in English"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Enter Group Name in Hindi<span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.nameHindi}
                onChange={(e) =>
                  setFormData({ ...formData, nameHindi: e.target.value })
                }
                placeholder="समूह का नाम हिंदी में दर्ज करें"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Enter Group Code<span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.groupCode}
                onChange={(e) =>
                  setFormData({ ...formData, groupCode: e.target.value })
                }
                placeholder="Enter Group Code"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Enter Group Order No.<span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.orderNo}
                onChange={(e) =>
                  setFormData({ ...formData, orderNo: e.target.value })
                }
                placeholder="Enter Group Order No."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-600">
                Will the closing be balanced forward?
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
                className="w-full border-gray-300"
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
              className="px-8"
              style={{ backgroundColor: "#6366f1" }}
            />
            <Button
              label="Clear"
              className="px-8 p-button-danger p-button-outlined"
              style={{
                color: "#ef4444",
                borderColor: "#fee2e2",
                backgroundColor: "#fef2f2",
              }}
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default GroupManagement;
