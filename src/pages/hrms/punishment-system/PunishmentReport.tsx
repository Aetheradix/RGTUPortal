import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import { reportColumns } from "./PunishmentTable";
import { punishmentOrderData, reportOptions, restoreOrderData } from "./data"; // Your mock data

const PunishmentReport: React.FC = () => {
  const [selectedStatus, setSelectedStatus] = useState<
    "punishment" | "restore" | null
  >(null);
  const [showTable, setShowTable] = useState<"punishment" | "restore" | null>(
    null
  );
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (selectedStatus) {
      setShowTable(selectedStatus);
    } else {
      toast.current?.show({
        severity: "warn",
        summary: "Required",
        detail: "Please select a Punishment Status",
        life: 3000,
      });
    }
  };

  return (
    <PageLayout title="Punishment Report">
      <Toast ref={toast} />

      <div className="space-y-6">
        {/* SEARCH SECTION */}
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <h2 className="text-lg font-bold text-gray-700 border-b pb-4 mb-6">
            Generate Punishment Order
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">
                Select Punishment Status <span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={selectedStatus}
                options={reportOptions}
                onChange={(e) => setSelectedStatus(e.value)}
                placeholder="Select"
                className="p-inputtext-sm w-full border-gray-300"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <Button
              label="Search"
              icon="pi pi-search"
              className="p-button-primary px-6 bg-indigo-500 border-none"
              onClick={handleSearch}
            />
          </div>
        </div>

        {/* DYNAMIC TABLE SECTION */}
        {showTable && (
          <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
            <h2 className="text-lg font-bold text-gray-700 mb-6">
              {showTable === "punishment"
                ? "Punishment Order Details"
                : "Restore Punishment Order Details"}
            </h2>
            <Table
              data={
                showTable === "punishment"
                  ? punishmentOrderData
                  : restoreOrderData
              }
              columns={reportColumns[showTable]}
              showPagination={true}
              rowsPerPage={10}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default PunishmentReport;
