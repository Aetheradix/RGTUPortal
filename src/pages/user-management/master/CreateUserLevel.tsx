import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Input, Dropdown, Table, type TableColumn } from "../../../ui/shared";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";

interface UserLevelRow {
  userType: string;
  userLevel: string;
  status: boolean;
}

const CreateUserLevel: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    userType: null as string | null,
    userLevel: "",
    isActive: true,
  });

  const [rows] = useState<UserLevelRow[]>([
    { userType: "Office", userLevel: "RSK ADMIN", status: true },
    { userType: "Sub-Engineer", userLevel: "Sub Engineer", status: true },
    { userType: "School", userLevel: "Dpi", status: true },
    { userType: "Admin", userLevel: "CPI Admin", status: true },
    { userType: "Office", userLevel: "CPI", status: false },
    { userType: "Hostel", userLevel: "Hostel", status: true },
    { userType: "Student", userLevel: "Principal", status: false },
  ]);

  const columns: TableColumn[] = [
    { field: "userType", header: "User Type" },
    { field: "userLevel", header: "User Level" },
    {
      field: "status",
      header: "Status (Active - Yes / InActive - No)",
      body: (rowData: UserLevelRow) => (
        <div className="flex ">
          <span
            className={`px-4 py-2 rounded text-white font-bold  ${
              rowData.status ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {rowData.status ? "Yes" : "No"}
          </span>
        </div>
      ),
    },
    {
      header: "Actions",
      body: () => (
        <Button
          icon="pi pi-pencil"
          className="p-button-outlined p-button-warning p-button-sm"
          style={{ color: "#f97316" }}
        />
      ),
      style: { width: "80px" },
      field: "",
    },
  ];

  return (
    <PageLayout title="User Level Details">
      <div className="flex justify-between items-center mb-4 bg-white p-3 rounded shadow-sm border border-gray-200">
        <Button
          label="Add New User Level"
          icon="pi pi-plus"
          className="p-button-outlined p-button-sm"
          onClick={() => setVisible(true)}
          style={{ color: "#1e40af", border: "1px solid #1e40af" }}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 flex justify-between items-center bg-gray-50 border-b">
          <div className="flex gap-2">
            <Button
              label="Export To Excel"
              icon="pi pi-file-excel"
              className="p-button-sm p-button-outlined"
            />
          </div>
          <span className="p-input-icon-left">
            <input
              className="p-inputtext p-component p-2 border rounded"
              placeholder="Search..."
            />
          </span>
        </div>

        <Table columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>

      <Dialog
        header="Add New User Level"
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "60vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
         <div className="border border-gray-300 rounded p-6 mt-4 relative bg-white">
          <span className="absolute -top-3 left-4 bg-white px-2 text-blue-800 font-bold border border-gray-300 rounded text-sm">
            Add New Main Menu
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mb-8">
            <Dropdown
              label="Select User Type"
              required
              placeholder="Select"
              value={formData.userType}
              options={[
                { label: "Office", value: "Office" },
                { label: "Admin", value: "Admin" },
              ]}
              onChange={(e) => setFormData({ ...formData, userType: e.value })}
            />

            <Input
              label="Enter User Level"
              required
              placeholder="Enter User Level"
              value={formData.userLevel}
              onChange={(e) =>
                setFormData({ ...formData, userLevel: e.target.value })
              }
            />

            <div className="flex items-center gap-2 mb-2">
              <Checkbox
                inputId="statusCheck"
                onChange={(e) =>
                  setFormData({ ...formData, isActive: e.checked ?? false })
                }
                checked={formData.isActive}
              />
              <label
                htmlFor="statusCheck"
                className="text-blue-600 text-sm font-semibold"
              >
                Status (Active/InActive)
              </label>
            </div>
          </div>

          <div className="flex gap-4 ">
            <Button
              label="Save"
              style={{ backgroundColor: "#6366F1", border: "none" }}
            />
            <Button
              label="Clear"
              className="p-button-danger p-button-outlined px-12"
            />
          </div>

          <p className="text-red-600 font-bold text-sm mt-4 italic">
            Note: All Asterisk (*) Marked Fields Are Mandatory
          </p>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default CreateUserLevel;
