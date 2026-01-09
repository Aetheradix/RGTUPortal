import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";

const arrearTypeOptions = [
  { label: "Salary Arrear", value: "salary" },
  { label: "DA Arrear", value: "da" },
];

const ArrearSalaryDetails: React.FC = () => {
  const [arrearType, setArrearType] = useState<string | null>(null);
  const [employeeCode, setEmployeeCode] = useState<string>("");
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [totalDays, setTotalDays] = useState<string>("");

  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!arrearType || !employeeCode || !fromDate || !toDate) {
      toast.current?.show({
        severity: "warn",
        summary: "Validation",
        detail: "Please fill all mandatory fields (*)",
        life: 3000,
      });
      return;
    }

    toast.current?.show({
      severity: "info",
      summary: "No Results",
      detail: "No records found for the selected criteria.",
      life: 4000,
    });
  };

  const handleClear = () => {
    setArrearType(null);
    setEmployeeCode("");
    setFromDate(null);
    setToDate(null);
    setTotalDays("");
  };

  return (
    <PageLayout title="Arrear Details">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-3">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Arrear Type<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={arrearType}
              options={arrearTypeOptions}
              onChange={(e) => setArrearType(e.value)}
              placeholder="Select"
              className="w-full border-gray-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Employee Code<span className="text-red-500">*</span>
            </label>
            <InputText
              value={employeeCode}
              onChange={(e) => setEmployeeCode(e.target.value)}
              placeholder="Enter Employee Code"
              className="w-full border-gray-300 p-inputtext-sm"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              From Date<span className="text-red-500">*</span>
            </label>
            <Calendar
              value={fromDate}
              onChange={(e) => setFromDate(e.value as Date)}
              placeholder="DD/MM/YYYY"
              dateFormat="dd/mm/yy"
              showIcon
              className="w-full border-gray-300"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              To Date<span className="text-red-500">*</span>
            </label>
            <Calendar
              value={toDate}
              onChange={(e) => setToDate(e.value as Date)}
              placeholder="DD/MM/YYYY"
              dateFormat="dd/mm/yy"
              showIcon
              className="w-full border-gray-300"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Total Days
            </label>
            <InputText
              value={totalDays}
              readOnly
              placeholder="Total Days"
              className="w-full bg-gray-50 border-gray-300 p-inputtext-sm"
            />
          </div>
        </div>

        <div className="flex gap-2 border-t mt-6 pt-5">
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
    </PageLayout>
  );
};

export default ArrearSalaryDetails;
