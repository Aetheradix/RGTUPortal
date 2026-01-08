import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Input, Dropdown, Table, type TableColumn } from "../../../ui/shared";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
interface MainMenuRow {
  module: string;
  mainMenuEn: string;
  mainMenuHi: string;
  sequenceNo: number;
  icon: string;
  status: boolean;
}

const MainMenuCreation: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    module: null,
    mainMenuEn: "",
    mainMenuHi: "",
    sequenceNo: "",
    icon: null,
    isActive: true,
  });

  const [rows] = useState<MainMenuRow[]>([
    {
      module: "File Tracking System",
      mainMenuEn: "File Tracking",
      mainMenuHi: "फ़ाइल ट्रैकिंग",
      sequenceNo: 1,
      icon: "ri-menu-line",
      status: true,
    },
    {
      module: "Medical Bills Reimbursement",
      mainMenuEn: "Report",
      mainMenuHi: "Report",
      sequenceNo: 2,
      icon: "ri-menu-line",
      status: true,
    },
    {
      module: "Civil Construction VSK",
      mainMenuEn: "Transactions",
      mainMenuHi: "Transactions",
      sequenceNo: 2,
      icon: "ri-menu-line",
      status: true,
    },
    {
      module: "Civil Construction VSK",
      mainMenuEn: "Master",
      mainMenuHi: "Master",
      sequenceNo: 1,
      icon: "ri-menu-line",
      status: true,
    },
    {
      module: "Hostel Management",
      mainMenuEn: "Staff Management",
      mainMenuHi: "Staff Management",
      sequenceNo: 5,
      icon: "ri-menu-line",
      status: true,
    },
    {
      module: "Hostel Management",
      mainMenuEn: "Mapping Masters",
      mainMenuHi: "Mapping Masters",
      sequenceNo: 10,
      icon: "ri-menu-line",
      status: false,
    },
  ]);

  const columns: TableColumn[] = [
    { field: "module", header: "Module/मॉड्यूल" },
    { field: "mainMenuEn", header: "Main Menu (In English)" },
    { field: "mainMenuHi", header: "मुख्य मेन्यू (हिंदी में)" },
    {
      field: "sequenceNo",
      header: "Main Menu Sequence No. / मुख्य मेन्यू क्रम",
    },
    { field: "icon", header: "Main Menu Icon / मुख्य मेन्यू आइकन" },
    {
      field: "status",
      header: "Status (Active - Yes / InActive - No)",
      body: (rowData: MainMenuRow) => (
        <div className="flex justify-center">
          <span
            className={`px-4 py-2 rounded text-white font-bold text-xs ${
              rowData.status ? "bg-green-600" : "bg-red-500"
            }`}
          >
            {rowData.status ? "Yes" : "No"}
          </span>
        </div>
      ),
    },
  ];

  return (
    <PageLayout title="Main Menu Details ">
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
      </div>

      <Table columns={columns} data={rows} showPagination rowsPerPage={10} />

      <Dialog
        header="Main Menu Details "
        visible={visible}
        onHide={() => setVisible(false)}
        style={{ width: "85vw" }}
      >
        <div className="border border-gray-300 rounded p-6 mt-4 relative bg-white">
          <span className="absolute -top-3 left-4 bg-white px-2 text-blue-800 font-bold border border-gray-300 rounded text-sm">
            Add New Main Menu
          </span>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Dropdown
              label="Select Module / मॉड्यूल चयन करें"
              required
              placeholder="Select"
              value={formData.module}
              options={[]}
            />

            <Input
              label="Enter Main Menu / (In English)"
              required
              placeholder="Enter Main Menu"
              value={formData.mainMenuEn}
              onChange={(e) =>
                setFormData({ ...formData, mainMenuEn: e.target.value })
              }
            />

            <Input
              label="मुख्य मेन्यू दर्ज करें / (हिंदी में)"
              required
              placeholder="मुख्य मेन्यू दर्ज करे"
              value={formData.mainMenuHi}
              onChange={(e) =>
                setFormData({ ...formData, mainMenuHi: e.target.value })
              }
            />

            <Input
              label="Enter Main Menu Sequence No."
              required
              placeholder="Enter Main Menu Sequence No."
              value={formData.sequenceNo}
              onChange={(e) =>
                setFormData({ ...formData, sequenceNo: e.target.value })
              }
            />

            <Dropdown
              label="Select Main Menu Icon "
              required
              placeholder="Select"
              value={formData.icon}
              options={[]}
            />

            <div className="flex flex-col justify-end pb-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  inputId="status"
                  onChange={(e) =>
                    setFormData({ ...formData, isActive: e.checked ?? false })
                  }
                  checked={formData.isActive}
                />
                <label
                  htmlFor="status"
                  className="text-blue-600 text-sm font-semibold"
                >
                  Status (Active/InActive)
                </label>
              </div>
            </div>
          </div>

          <div className="flex gap-4  pt-6">
            <Button
              label="Save"
              style={{ backgroundColor: "#6366F1", border: "none" }}
            />
            <Button
              label="Clear"
              className="p-button-danger p-button-outlined px-12"
            />
          </div>

          <p className="text-red-600 font-bold text-sm mt-4">
            Note: All Asterisk (*) Marked Fields Are Mandatory
          </p>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default MainMenuCreation;
