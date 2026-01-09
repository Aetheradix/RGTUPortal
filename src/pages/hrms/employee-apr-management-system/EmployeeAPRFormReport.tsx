import React, { useState, useEffect, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { ProgressSpinner } from "primereact/progressspinner";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Table from "@/ui/shared/Table";

const EmployeePropertyDetailReport: React.FC = () => {
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
      detail: `Preparing Employee Application for Print`,
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

  const reportColumns = [
    { field: "academicYear", header: "Academic Year", sortable: true },
    {
      field: "employeeName",
      header: "Employee Name (Unique ID)",
      sortable: true,
    },
    { field: "oisCode", header: "OIS(Code)", sortable: true },
    {
      field: "viewApplication",
      header: "View Employee Application",
      body: viewTemplate,
    },
  ];

  return (
    <PageLayout title="Employee Annual Property Detail Report">
      <Toast ref={toast} />

      {loading && (
        <div className="flex flex-col items-center justify-center min-h-100 bg-white rounded-lg border border-gray-100 shadow-sm mt-4">
          <ProgressSpinner
            style={{ width: "45px", height: "45px" }}
            strokeWidth="4"
          />
          <p className="mt-4 text-gray-400 font-medium tracking-wide">
            Loading Report Records...
          </p>
        </div>
      )}

      {showTable && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-4 animate-fade-in relative">
          <h3 className="text-indigo-600 font-bold text-[16px] mb-6 flex items-center gap-2">
            <span className="w-1 h-4 bg-indigo-500 rounded-full"></span>
            Employee Annual Property Details Report
          </h3>

          <div className="flex justify-end items-center mb-4">
            <div className="flex items-center gap-3">
              <Button
                label="Export"
                icon="pi pi-file-excel"
                className="p-button-outlined p-button-sm text-indigo-700 border-indigo-700 hover:bg-indigo-50"
              />
              <div className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1 bg-white shadow-sm">
                <i className="pi pi-search text-gray-400 text-sm" />
                <InputText
                  placeholder="Search..."
                  className="p-inputtext-sm border-none outline-none focus:ring-0 w-48 text-sm"
                />
              </div>
            </div>
          </div>

          <Table
            data={[]}
            columns={reportColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm text-[12px] custom-minimal-table border border-gray-200"
            emptyMessage="No Records Found"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default EmployeePropertyDetailReport;
