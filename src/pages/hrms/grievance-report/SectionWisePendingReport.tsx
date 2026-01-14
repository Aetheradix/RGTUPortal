import React, { useRef, useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import { sectionData, sectionOption } from "./data";
import { sectionColumns } from "./table";
import { Toast } from "primereact/toast";

const SectionWiseProgressReport: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string>("");
  const [showTable, setShowTable] = useState(false);
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!selectedSection) {
      toast.current?.show({
        severity: "warn",
        summary: "Validation Required",
        detail: "Please select both Circular and Category fields.",
        life: 3000,
      });
      return;
    }
    toast.current?.show({
      severity: "success",
      summary: "Search Successful",
      detail: "Displaying Section records.",
      life: 3000,
    });
    setShowTable(true);
  };

  const handleClear = () => {
    setShowTable(false);

    toast.current?.show({
      severity: "info",
      summary: "Form Cleared",
      detail: "All filters have been reset.",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Section Wise Progress Grievance Report">
      <Toast ref={toast} />
      <div className="bg-white mt-2 mb-8 pd-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Section Name<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={selectedSection}
              options={sectionOption}
              onChange={(e) => setSelectedSection(e.value)}
              placeholder="Select Section"
              className="w-full border-gray-300"
            />
          </div>
          <div className="flex gap-2">
            <Button
              label="Search"
              icon="pi pi-search"
              className="p-button-sm bg-emerald-500 border-none px-6"
              onClick={handleSearch}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-sm p-button-outlined p-button-danger px-6"
              onClick={handleClear}
            />
          </div>
        </div>
      </div>
      {showTable && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Section Wise Progress Grievance Report Details
            </h2>
            <div className="flex items-center gap-3">
              <Button
                label="Export"
                icon="pi pi-file-excel"
                className="p-button-outlined p-button-sm text-indigo-600 border-indigo-600"
              />
              <div className="flex items-center gap-2 border rounded px-2 py-1 border-gray-300 bg-gray-50">
                <i className="pi pi-search text-gray-400 text-sm" />
                <InputText
                  placeholder="Search..."
                  className="p-inputtext-sm border-none bg-transparent shadow-none w-40"
                />
              </div>
            </div>
          </div>

          <Table
            data={sectionData}
            columns={sectionColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm text-[12px]"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default SectionWiseProgressReport;
