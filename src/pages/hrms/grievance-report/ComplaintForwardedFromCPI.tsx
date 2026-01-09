import React, { useState, useEffect } from "react";
import PageLayout from "../../../components/PageLayout";
import { ProgressSpinner } from "primereact/progressspinner";
import { Button } from "primereact/button";
import Table from "@/ui/shared/Table";
import { grievanceCPIColumns } from "./table";
import { mockGrievanceData } from "./data";
import { InputText } from "primereact/inputtext";

const GrievancesForwardedCPI: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowTable(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <PageLayout title="Grievances Forwarded from CPI">
      {loading && (
        <div className="flex flex-col items-center justify-center min-h-100 bg-white rounded-lg border border-gray-100 shadow-sm mt-4">
          <ProgressSpinner
            style={{ width: "45px", height: "45px" }}
            strokeWidth="4"
            animationDuration=".8s"
          />
          <p className="mt-4 text-gray-400 font-medium tracking-wide">
            Loading Grievance Records...
          </p>
        </div>
      )}
      {showTable && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-4 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-700">
              Grievance Forwarded Details
            </h2>
            <div className="flex justify-end items-center text-sm text-gray-600 gap-2">
              <Button
                label="Export"
                icon="pi pi-file-excel"
                className="p-button-outlined p-button-sm text-green-600 border-green-600 hover:bg-green-50"
              />
              <div className="flex items-center gap-2">
                <span>Search:</span>
                <InputText className="p-inputtext-sm border-gray-300 w-48" />
              </div>
            </div>
          </div>

          <Table
            data={mockGrievanceData}
            columns={grievanceCPIColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm text-[12px] custom-minimal-table"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default GrievancesForwardedCPI;
