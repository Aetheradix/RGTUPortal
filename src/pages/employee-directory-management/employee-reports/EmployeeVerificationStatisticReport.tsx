/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import { InputText } from "primereact/inputtext";

import { verificationStatisticColumns } from "./table";
import { oisOptions, verificationStatisticData } from "./data";

const EmployeeVerificationStatistic: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [selectedOis, setSelectedOis] = useState<any>(null);

  const handleSearch = () => {
    if (!selectedOis) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please Select OIS Type (Code)",
        life: 3000,
      });
      return;
    }
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Verification statistics loaded successfully",
      life: 2000,
    });
  };

  const handleClear = () => {
    setSelectedOis(null);
    setStep(1);
  };

  return (
    <PageLayout title="Employees Verification Statistic Report Detail">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <h4 className="text-blue-600 font-bold mb-4 border-b pb-2 text-md">
          Employees Verification Statistic Report
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
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mt-6 animate-fade-in">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-gray-700">
              School Education Portal 3.0
            </h2>
            <p className="text-sm font-bold text-gray-600 mt-2">
              Total Verified Employee Percentage - 38.45%
            </p>
          </div>
          <div className="flex justify-end gap-2 mb-4">
            <Button
              label="Export"
              icon="pi pi-file-excel"
              className="p-button-outlined p-button-secondary p-button-sm h-11"
            />
            <span className="p-input-icon-left">
              <InputText className="p-inputtext-sm" placeholder="Search..." />
            </span>
          </div>

          <Table
            data={verificationStatisticData}
            columns={verificationStatisticColumns}
            showPagination={true}
            rowsPerPage={50}
            className="p-datatable-sm "
          />
        </div>
      )}
    </PageLayout>
  );
};

export default EmployeeVerificationStatistic;
