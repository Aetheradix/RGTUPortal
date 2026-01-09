/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import { Toast } from "primereact/toast";
import { processingData } from "./data";
import { districtOptions, sectionOptions } from "../grievance-report/data";

const GrievanceResolution: React.FC = () => {
  const [view, setView] = useState<"list" | "form">("list");
  const [selectedGrievance, setSelectedGrievance] = useState<any>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<string>("");
  const [showTable, setShowTable] = useState(false);
  const toast = useRef<Toast>(null);
  const [disposalStatus, setDisposalStatus] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [fileName, setFileName] = useState<string>("No file chosen");

  const handleSearch = () => {
    toast.current?.show({
      severity: "success",
      summary: "Search Successful",
      detail: "Displaying grievances for resolution.",
      life: 3000,
    });
    setShowTable(true);
  };

  const handleClear = () => {
    setSelectedDistrict("");
    setSelectedSection("");
    setShowTable(false);
  };

  const openResolutionForm = (rowData: any) => {
    setSelectedGrievance(rowData);
    setView("form");
  };

  const resolutionColumns = [
    { field: "grievanceNo", header: "Grievance No." },
    { field: "employeeName", header: "Employee Name" },
    { field: "grievanceType", header: "Grievance Type" },
    { field: "grievanceTopic", header: "Grievance Topic" },
    { field: "registerDate", header: "Register Date" },
    { field: "requestedBy", header: "Requested By" },
    { field: "requestDate", header: "Request Date" },
    {
      field: "",
      header: "Action",
      body: (rowData: any) => (
        <Button
          icon="pi pi-pencil"
          className="p-button-text p-button-sm text-indigo-600"
          onClick={() => openResolutionForm(rowData)}
          tooltip="Resolve Grievance"
        />
      ),
    },
  ];

  return (
    <PageLayout title="Grievance Resolution">
      <Toast ref={toast} />

      {view === "list" ? (
        <>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  District Name (Code) <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={selectedDistrict}
                  options={districtOptions}
                  onChange={(e) => setSelectedDistrict(e.value)}
                  placeholder="All"
                  className="w-full border-gray-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Section Name <span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={selectedSection}
                  options={sectionOptions}
                  onChange={(e) => setSelectedSection(e.value)}
                  placeholder="All"
                  className="w-full border-gray-300"
                />
              </div>
              <div className="flex gap-2 mt-6">
                <Button
                  label="Search"
                  icon="pi pi-search"
                  className="p-button-primary px-6 bg-indigo-500 border-none"
                  onClick={handleSearch}
                />
                <Button
                  label="Clear"
                  icon="pi pi-refresh"
                  className="p-button-outlined p-button-danger px-6"
                  onClick={handleClear}
                />
              </div>
            </div>
          </div>
          {showTable && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-700">
                  Pending Resolutions
                </h2>
                <div className="flex items-center gap-3">
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
                data={processingData}
                columns={resolutionColumns}
                showPagination={true}
                rowsPerPage={10}
                className="p-datatable-sm text-[11px]"
              />
            </div>
          )}
        </>
      ) : (
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
            <div>
              <h2 className="text-xl font-bold text-gray-800">
                Resolve Grievance
              </h2>
              <p className="text-sm text-indigo-600 font-medium">
                No: {selectedGrievance?.grievanceNo || "GMSCF914902004"}
              </p>
            </div>
            <Button
              icon="pi pi-times"
              className="p-button-rounded p-button-text text-gray-400"
              onClick={() => setView("list")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">
                Disposal Status Type <span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={disposalStatus}
                options={[
                  { label: "Resolved", value: "resolved" },
                  { label: "Rejected", value: "rejected" },
                ]}
                onChange={(e) => setDisposalStatus(e.value)}
                placeholder="Select Status"
                className="w-full border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">
                Note Here <span className="text-red-500">*</span>
              </label>
              <InputTextarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Enter details of the resolution..."
                rows={2}
                className="w-full border-gray-300"
              />
              <span className="text-[11px] text-gray-400">
                Maximum 150 characters allowed.
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">
                File Upload <span className="text-red-500">*</span>
              </label>
              <div className="flex items-center border rounded-md border-gray-300 overflow-hidden">
                <label className="bg-gray-100 px-4 py-2 border-r cursor-pointer hover:bg-gray-200 text-sm font-medium text-gray-600">
                  Choose File
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) =>
                      setFileName(e.target.files?.[0]?.name || "No file chosen")
                    }
                  />
                </label>
                <span className="px-4 text-sm text-gray-400 truncate">
                  {fileName}
                </span>
              </div>
              <p className="text-[11px] text-red-500 font-medium italic">
                Note: Document should be in PDF format up to 500 KB
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col gap-4">
            <div className="flex gap-3">
              <Button
                label="Resolve Grievance"
                icon="pi pi-check"
                className="p-button-primary px-8 bg-green-600 border-none"
                onClick={() => {
                  toast.current?.show({
                    severity: "success",
                    summary: "Success",
                    detail: "Grievance resolved successfully",
                  });
                  setView("list");
                }}
              />
              <Button
                label="Cancel"
                className="p-button-outlined p-button-secondary px-6"
                onClick={() => setView("list")}
              />
            </div>
            <p className="text-[11px] text-gray-400 font-bold">
              Note: All Asterisk (<span className="text-red-500">*</span>)
              Marked Fields Are Mandatory
            </p>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default GrievanceResolution;
