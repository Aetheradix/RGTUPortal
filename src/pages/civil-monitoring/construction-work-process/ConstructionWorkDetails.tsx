import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown, Input, Table, type TableColumn } from "../../../ui/shared";

interface ConstructionRow {
  workType: string;
  workTypeEng: string;
  workTypeHindi: string;
  status: boolean;
}

const ConstructionWorkTypeDetails: React.FC = () => {
  const [view, setView] = useState<"form" | "list">("list");
  const [showResults] = useState(true);

  const [formData, setFormData] = useState({
    workType: "",
    workTypeEng: "",
    workTypeHindi: "",
    status: true,
  });

  const tableData: ConstructionRow[] = [
    {
      workType: "Maintenance",
      workTypeEng: "Construction of School Building",
      workTypeHindi: "स्कूल भवन का निर्माण कार्य",
      status: true,
    },
    {
      workType: "New Construction",
      workTypeEng: "Construction of Office Building",
      workTypeHindi: "कार्यालय भवन का निर्माण",
      status: true,
    },
    {
      workType: "New Construction",
      workTypeEng: "Construction of Playground",
      workTypeHindi: "खेल के मैदान का निर्माण",
      status: true,
    },
    {
      workType: "New Construction",
      workTypeEng: "Electrical Installation",
      workTypeHindi: "विद्युत स्थापना",
      status: true,
    },
    {
      workType: "New Construction",
      workTypeEng: "Construction of Washroom",
      workTypeHindi: "शौचालय का निर्माण",
      status: true,
    },
    {
      workType: "Maintenance",
      workTypeEng: "Repair of School Building",
      workTypeHindi: "स्कूल भवन की मरम्मत",
      status: true,
    },
    {
      workType: "Maintenance",
      workTypeEng: "Repair of Office Building",
      workTypeHindi: "कार्यालय भवन की मरम्मत",
      status: false,
    },
    {
      workType: "Maintenance",
      workTypeEng: "Repair of Playground",
      workTypeHindi: "खेल के मैदान की मरम्मत",
      status: true,
    },
    {
      workType: "Maintenance",
      workTypeEng: "Electrical Repair",
      workTypeHindi: "विद्युत मरम्मत",
      status: true,
    },
    {
      workType: "Maintenance",
      workTypeEng: "Repair of Washroom",
      workTypeHindi: "शौचालय की मरम्मत",
      status: true,
    },
    {
      workType: "New Construction",
      workTypeEng: "Wooden Table",
      workTypeHindi: "लकड़ी की मेज",
      status: true,
    },
    {
      workType: "Maintenance",
      workTypeEng: "Electric Board",
      workTypeHindi: "विद्युत बोर्ड",
      status: true,
    },
    {
      workType: "New Construction",
      workTypeEng: "Boundary Wall",
      workTypeHindi: "बाउंड्री वाल",
      status: true,
    },
    {
      workType: "Maintenance",
      workTypeEng: "Electrical Maintenance",
      workTypeHindi: "विद्युत मरम्मत",
      status: true,
    },
    {
      workType: "Maintenance",
      workTypeEng: "Water Tanker Repair",
      workTypeHindi: "पानी टैंकर मरम्मत",
      status: true,
    },
    {
      workType: "Maintenance",
      workTypeEng: "School terrace repair",
      workTypeHindi: "विद्यालय की छत मरम्मत",
      status: true,
    },
    {
      workType: "New Construction",
      workTypeEng: "Construction of school playground wall",
      workTypeHindi: "स्कूल प्लेग्राउंड दीवार निर्माण",
      status: true,
    },
  ];

  const columns: TableColumn[] = [
    { field: "workType", header: "Work Type" },
    { field: "workTypeEng", header: "Construction Work Type" },
    { field: "workTypeHindi", header: "Construction Work Type(In Hindi)" },
    {
      field: "status",
      header: "Status(Active - Yes / InActive - No)",
      body: (rowData: ConstructionRow) => (
        <div className={`flex justify-center items-center`}>
          <span
            className={`${
              rowData.status ? "bg-green-600" : "bg-red-600"
            } text-white px-4 py-2 rounded text-[13px] font-bold min-w-10 text-center`}
          >
            {rowData.status ? "Yes" : "No"}
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
            className="p-button-outlined p-button-sm text-orange-400 border border-orange-200 p-1 h-7 w-7"
          />
        </div>
      ),
    },
  ];

  return (
    <PageLayout title="Construction Work Type Details">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center relative">
          <div className=" "></div>
          <div className="flex items-center gap-4">
            <Button
              label={
                view === "list" ? "Add Construction Work Type" : "Back to List"
              }
              icon={view === "list" ? "pi pi-plus" : "pi pi-undo"}
              className="p-button-sm p-2 text-[10px] bg-orange-400 border-none h-7"
              onClick={() => setView(view === "list" ? "form" : "list")}
            />
          </div>
        </div>

        {view === "form" ? (
          <div className="flex flex-col gap-6">
           <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
              <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg ">
                <span className="text-blue-600 font-bold text-sm">
                   Add Construction Work Type Details
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium ">
                    Select Work Type<span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    value={formData.workType}
                    options={[
                      { label: "Maintenance", value: "Maintenance" },
                      { label: "New Construction", value: "New Construction" },
                    ]}
                    onChange={(e) =>
                      setFormData({ ...formData, workType: e.value })
                    }
                    placeholder="Select"
                    className="w-full text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium ">
                    Enter Construction Work Type(In English)
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Enter Construction Work Type(In English)"
                    className="w-full text-sm"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium ">
                    Enter Construction Work Type(In हिन्दी)
                    <span className="text-red-500">*</span>
                  </label>
                  <Input
                    placeholder="Enter Construction Work Type(In Hindi)"
                    className="w-full text-sm"
                  />
                </div>
                <div className="flex items-center gap-2 mt-6">
                  <input
                    type="checkbox"
                    checked={formData.status}
                    className="accent-blue-600 h-4 w-4"
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.checked })
                    }
                  />
                  <label className="text-sm font-medium text-blue-500">
                    Status (Active/InActive)
                  </label>
                </div>
              </div>
              <div className="flex gap-4 mt-8 pt-4 ">
                <Button
                  label="Save"
                  className="px-10 bg-[#00bfa5] border-none text-sm"
                />
                <Button
                  label="Clear"
                  className="p-button-danger p-button-outlined px-10 text-sm border-pink-200 text-pink-500"
                />
              </div>
              <div className="mt-4">
                <p className="text-[#ff0000] font-bold text-xs ">
                  Note: All Asterisk (*) Marked Fields Are Mandatory
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4">
              <div className="absolute -top-4 left-6 bg-white px-4 py-1 rounded-lg ">
                <span className="text-blue-600 font-bold text-sm">
                  Construction Work Type Details
                </span>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 text-xs"></div>
                <div className="flex gap-2">
                  <Button
                    label="Export To Excel"
                    icon="pi pi-file-excel"
                    className="p-button-outlined p-button-secondary p-button-sm text-xs"
                  />
                  <span className="p-input-icon-left">
                    <Input
                      placeholder="Search..."
                      className="p-inputtext-sm text-xs"
                    />
                  </span>
                </div>
              </div>

              {showResults && (
                <div className="overflow-x-auto">
                  <Table
                    columns={columns}
                    data={tableData}
                    className="custom-construction-table border border-gray-200"
                  />

                  <div className="flex justify-between items-center mt-4 text-[10px] text-gray-500">
                    <span>Page 1 of 1 (17 items)</span>
                    <div className="flex items-center gap-1">
                      <Button
                        icon="pi pi-chevron-left"
                        className="p-button-text p-button-sm p-0 h-6 w-6"
                      />
                      <span className="px-2 py-1 border rounded bg-white">
                        1
                      </span>
                      <span>of 1</span>
                      <Button
                        icon="pi pi-chevron-right"
                        className="p-button-text p-button-sm p-0 h-6 w-6"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-6 right-6">
        <Button
          icon="pi pi-arrow-up"
          className="rounded-md shadow-lg p-2"
          style={{ backgroundColor: "#f97316", border: "none" }}
        />
      </div>

      <style>{`
        .custom-construction-table .p-datatable-thead > tr > th {
            font-size: 15px;
            padding: 10px;
            border: 1px solid #e5e7eb;
        }
        .custom-construction-table .p-datatable-tbody > tr > td {
            font-size: 13px;
            padding: 8px;
            color: #374151;
            border: 1px solid #e5e7eb;
        }
       
      `}</style>
    </PageLayout>
  );
};

export default ConstructionWorkTypeDetails;
