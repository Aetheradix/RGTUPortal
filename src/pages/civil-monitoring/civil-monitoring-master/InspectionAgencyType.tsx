import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown, Input, Table, type TableColumn } from "../../../ui/shared";

interface AgencyTypeRow {
  category: string;
  agencyTypeEng: string;
  agencyTypeHindi: string;
  status: boolean;
}

const InspectionAgencyTypeDetails: React.FC = () => {
  const [view, setView] = useState<"form" | "list">("list");

  const [formData, setFormData] = useState({
    category: "",
    agencyTypeEng: "",
    agencyTypeHindi: "",
    status: true,
  });

  const tableData: AgencyTypeRow[] = [
    {
      category: "Government",
      agencyTypeEng: "State Quality Monitor",
      agencyTypeHindi: "राज्य गुणवत्ता मॉनिटर",
      status: true,
    },
    {
      category: "Third Party",
      agencyTypeEng: "Independent Engineer",
      agencyTypeHindi: "स्वतंत्र इंजीनियर",
      status: true,
    },
  ];

  const columns: TableColumn[] = [
    { field: "category", header: "Agency Category" },
    { field: "agencyTypeEng", header: "Agency Type (English)" },
    { field: "agencyTypeHindi", header: "Agency Type (Hindi)" },
    {
      field: "status",
      header: "Status",
      body: (rowData: AgencyTypeRow) => (
        <div className="flex justify-center items-center">
          <span
            className={`${
              rowData.status ? "bg-green-600" : "bg-red-600"
            } text-white  rounded text-[12px] font-bold min-w-10 text-center`}
          >
            {rowData.status ? "Active" : "Inactive"}
          </span>
        </div>
      ),
    },
    {
      field: "action",
      header: "Action",
      body: () => (
        <div className="flex justify-center">
          <Button
            icon="pi pi-pencil"
            className="p-button-outlined p-button-sm text-orange-400  p-1 h-7 w-7"
          />
        </div>
      ),
    },
  ];

  const handleClear = () => {
    setFormData({
      category: "",
      agencyTypeEng: "",
      agencyTypeHindi: "",
      status: true,
    });
  };

  return (
    <PageLayout title="Inspection Agency Type Details">
      <div className="flex flex-col gap-4">
        <div className="flex justify-end items-center">
          <Button
            label={view === "list" ? "Add Agency Type" : "Back to List"}
            icon={view === "list" ? "pi pi-plus" : "pi pi-undo"}
            className="p-button-sm p-2 text-[10px] bg-orange-400 border-none h-7"
            onClick={() => setView(view === "list" ? "form" : "list")}
          />
        </div>

        {view === "form" ? (
          <div className="flex flex-col gap-6">
            <div className=" rounded-xl p-6 relative bg-white mt-4">
            <div className="absolute -top-4 left-6 bg-white  rounded-lg">
              <span className="font-bold">
                 Add Inspection Agency Type
              </span>
            </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Select Agency Category<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={formData.category}
                    options={[
                      { label: "Government", value: "Government" },
                      { label: "Private", value: "Private" },
                      { label: "Third Party", value: "Third Party" },
                    ]}
                    onChange={(e) => setFormData({ ...formData, category: e.value })}
                    placeholder="Select Category"
                    className="w-full text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Agency Type (In English)<span className="text-red-500">*</span>
                  </label>
                  <Input
                    value={formData.agencyTypeEng}
                    onChange={(e) => setFormData({ ...formData, agencyTypeEng: e.target.value })}
                    placeholder="e.g. State Quality Monitor"
                    className="w-full text-sm"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium">
                    Agency Type (In हिन्दी)<span className="text-red-500">*</span>
                  </label>
                  <Input
                    value={formData.agencyTypeHindi}
                    onChange={(e) => setFormData({ ...formData, agencyTypeHindi: e.target.value })}
                    placeholder="हिन्दी में दर्ज करें"
                    className="w-full text-sm"
                  />
                </div>

                <div className="flex items-center gap-2 md:mt-6">
                  <input
                    type="checkbox"
                    checked={formData.status}
                    className="accent-blue-600 h-4 w-4"
                    onChange={(e) => setFormData({ ...formData, status: e.target.checked })}
                  />
                  <label className="text-sm font-medium text-blue-500">
                    Is Active?
                  </label>
                </div>
              </div>

              <div className="flex gap-4 mt-8 pt-4 border-t border-gray-50">
                <Button
                  label="Save Agency Type"
                  className="px-10 bg-[#00bfa5] border-none text-sm"
                  onClick={() => console.log("Saving...", formData)}
                />
                <Button
                  label="Clear"
                  onClick={handleClear}
                  className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500"
                />
              </div>

              <div className="mt-4">
                <p className="text-[#ff0000] font-bold text-xs">
                  Note: All Asterisk (*) Marked Fields Are Mandatory
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className=" rounded-xl p-6 relative bg-white mt-4">
            <div className="absolute -top-4 left-6 bg-white  rounded-lg">
              <span className="font-bold">
                Inspection Agency Type List
              </span>
            </div>
            
            <div className="flex justify-end mb-4">
               <span className="p-input-icon-left">
                  <Input placeholder="Search Agency Types..." className="p-inputtext-sm text-xs" />
               </span>
            </div>

            <Table
              columns={columns}
              data={tableData}
              className="custom-agency-table border border-gray-200"
            />
          </div>
        )}
      </div>
      <style>{`
        .custom-agency-table .p-datatable-thead > tr > th {
            font-size: 14px;
            padding: 12px 10px;
            background: #f8fafc;
            border: 1px solid #e5e7eb;
        }
        .custom-agency-table .p-datatable-tbody > tr > td {
            font-size: 13px;
            padding: 10px;
            border: 1px solid #e5e7eb;
        }
      `}</style>
    </PageLayout>
  );
};

export default InspectionAgencyTypeDetails;