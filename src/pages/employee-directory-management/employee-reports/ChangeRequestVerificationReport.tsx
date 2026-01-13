/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import { statisticReportColumns } from "./table";
import { statisticReportData, oisOptions } from "./data";
import { InputText } from "primereact/inputtext";

const ChangeRequestVerificationStatistic: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [selectedOis, setSelectedOis] = useState<any>(null);

  const handleSearch = () => {
    if (!selectedOis) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please Select OIS Type",
        life: 3000,
      });
      return;
    }
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Statistic report fetched successfully",
      life: 2000,
    });
  };

  const handleClear = () => {
    setSelectedOis(null);
    setStep(1);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Filters reset",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Change Request Verification Statistic Report Detail">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <h4 className="text-blue-600 font-bold mb-4 border-b pb-2 text-md">
          Change Request Verification Statistic Report
        </h4>

        <div className="flex flex-col gap-2 mt-4">
          <label className="text-xs font-bold text-gray-500">
            Select OIS <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-3 items-center">
            <Dropdown
              value={selectedOis}
              options={oisOptions}
              onChange={(e) => setSelectedOis(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full md:w-1/4"
            />
            <Button
              label="Search"
              icon="pi pi-search"
              onClick={handleSearch}
              className="p-button-primary p-button-sm px-6"
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              onClick={handleClear}
              className="p-button-outlined p-button-danger p-button-sm px-6"
            />
          </div>
        </div>
      </div>

      {step === 2 && (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in mt-4">
          <div className="flex justify-end gap-2 mb-4">
            <Button
              label="Export "
              icon="pi pi-file-excel"
              className="p-button-outlined p-button-secondary p-button-sm h-11"
            />
            <span className="p-input-icon-left">
              <InputText className="p-inputtext-sm" placeholder="Search..." />
            </span>
          </div>

          <Table
            title="Details"
            data={statisticReportData}
            columns={statisticReportColumns}
            showPagination={true}
            rowsPerPage={50}
            className="p-datatable-sm "
          />
        </div>
      )}
    </PageLayout>
  );
};

export default ChangeRequestVerificationStatistic;
