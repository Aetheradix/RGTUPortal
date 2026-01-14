import React, { useState, useEffect, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { ProgressSpinner } from "primereact/progressspinner";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Table from "@/ui/shared/Table";
import { mockAPRReportData } from "./data";

const EmployeeAPRFormPrint: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showTable, setShowTable] = useState(false);
  const toast = useRef<Toast>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowTable(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const onPrint = () => {
    toast.current?.show({
      severity: "info",
      summary: "Print Initiated",
      detail: `Preparing document for Print`,
      life: 3000,
    });
  };

  const onSave = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: `Document saved successfully`,
      life: 3000,
    });
  };

  const viewTemplate = () => (
    <Button
      icon="pi pi-print"
      className="p-button-outlined p-button-info p-button-sm border-cyan-500 text-cyan-500 hover:bg-cyan-50"
      onClick={onPrint}
    />
  );

  const uploadTemplate = () => (
    <div className="flex items-center gap-2">
      <input type="file" id="file-upload" className="hidden" />
      <label
        htmlFor="file-upload"
        className="cursor-pointer bg-gray-100 border border-gray-300 px-3 py-1 rounded text-[11px] hover:bg-gray-200 transition-colors"
      >
        Choose File
      </label>
      <span className="text-gray-500 text-[11px]">No file chosen</span>
    </div>
  );

  const saveTemplate = () => (
    <Button
      label="Save"
      className="p-button-sm p-button-success p-button-outlined border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-4"
      onClick={onSave}
    />
  );

  const aprReportColumns = [
    { field: "srNo", header: "S.No.", style: { width: "60px" } },
    {
      field: "viewApplication",
      header: "View Employee Application",
      body: viewTemplate,
    },
    { field: "academicYear", header: "Academic Year", sortable: true },
    { field: "employeeName", header: "Employee Name", sortable: true },
    { field: "designation", header: "Designation", sortable: true },
    {
      field: "uploadDoc",
      header: "Upload Document / View",
      body: uploadTemplate,
    },
    { field: "save", header: "Save", body: saveTemplate },
  ];

  return (
    <PageLayout title="Employee APR Form Print">
      <Toast ref={toast} />
      {loading && (
        <div className="flex flex-col items-center justify-center min-h-100 bg-white rounded-lg border border-gray-100 shadow-sm mt-4">
          <ProgressSpinner
            style={{ width: "45px", height: "45px" }}
            strokeWidth="4"
          />
          <p className="mt-4 text-gray-400 font-medium tracking-wide">
            Fetching APR Records...
          </p>
        </div>
      )}
      {showTable && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-4 animate-fade-in relative">
          <h3 className="text-indigo-600 font-bold text-[16px] mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-indigo-500 rounded-full"></span>
            Employee Annual Property Details Print
          </h3>
          <div className="flex justify-end items-center mb-4">
            <div className="flex items-center gap-3">
              <Button
                label="Export"
                icon="pi pi-file-excel"
                className="p-button-outlined p-button-sm text-indigo-700 border-indigo-700 hover:bg-indigo-50"
              />
              <div className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1 bg-white">
                <i className="pi pi-search text-gray-400 text-sm" />
                <InputText
                  placeholder="Search..."
                  className="p-inputtext-sm border-none outline-none focus:ring-0 w-40 text-sm"
                />
              </div>
            </div>
          </div>

          <Table
            data={mockAPRReportData}
            columns={aprReportColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm text-[12px] custom-minimal-table border border-gray-200"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default EmployeeAPRFormPrint;
