import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Toast } from "primereact/toast";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Dropdown from "@/ui/shared/Dropdown";
import { officeOption, postOption } from "../arrear-process/data";

const EmployeeBonus: React.FC = () => {
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);
  const [postType, setPostType] = useState<string | null>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [showTable, setShowTable] = useState<boolean>(false);

  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!officeType || !postType || !fromDate || !toDate) {
      setShowTable(false);
      toast.current?.show({
        severity: "warn",
        summary: "Validation",
        detail: "Please fill all mandatory fields (*)",
        life: 3000,
      });
      return;
    }
    setShowTable(true);
    toast.current?.show({
      severity: "info",
      summary: "No Results",
      detail: "No records found for the selected criteria.",
      life: 3000,
    });
  };

  const handleClear = () => {
    setOfficeType(null);
    setOfficeName(null);
    setPostType(null);
    setFromDate(null);
    setToDate(null);
    setShowTable(false);
  };

  return (
    <PageLayout title="Employee Bonus">
      <Toast ref={toast} />

      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mt-3 animate-fade-in">
        <div className="border-b border-gray-100 pb-3 mb-6 flex items-center">
          <span className="text-indigo-600 font-bold border-l-4 border-indigo-500 pl-3">
            Employee Bonus
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Office Type (Code)<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={officeType}
              onChange={(e) => setOfficeType(e.value)}
              placeholder="Select"
              className="w-full border-gray-300"
              options={officeOption}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Office Name (Code)<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={officeName}
              onChange={(e) => setOfficeName(e.value)}
              placeholder="Select"
              className="w-full border-gray-300"
              options={[]}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Post Type<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={postType}
              onChange={(e) => setPostType(e.value)}
              placeholder="Select"
              className="w-full border-gray-300"
              options={postOption}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              From Date<span className="text-red-500">*</span>
            </label>
            <Calendar
              value={fromDate}
              onChange={(e) => setFromDate(e.value as Date)}
              dateFormat="dd-mm-yy"
              placeholder="DD-MM-YYYY"
              showIcon
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              To Date<span className="text-red-500">*</span>
            </label>
            <Calendar
              value={toDate}
              onChange={(e) => setToDate(e.value as Date)}
              dateFormat="dd-mm-yy"
              placeholder="DD-MM-YYYY"
              showIcon
              className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-2 border-t mt-6 pt-5">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-primary px-8 bg-indigo-500 border-none"
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-outlined p-button-danger px-8"
            onClick={handleClear}
          />
        </div>
      </div>

      {showTable && (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mt-6 animate-fade-in">
          <div className="border-b border-gray-100 pb-3 mb-4 flex items-center">
            <span className="text-indigo-600 font-bold border-l-4 border-indigo-500 pl-3">
              Employee List
            </span>
          </div>

          <DataTable
            value={[]}
            emptyMessage="No Record Found"
            className="p-datatable-sm"
          >
            <Column
              field="sNo"
              header="S.No."
              style={{ width: "5rem" }}
            ></Column>
            <Column field="bonusDate" header="Bonus Date"></Column>
            <Column field="employeeName" header="Employee Name"></Column>
            <Column field="fromMonth" header="From Month"></Column>
            <Column field="toMonth" header="To Month"></Column>
            <Column field="bonusAmount" header="Bonus Amount(₹)"></Column>
            <Column field="action" header="Action"></Column>
          </DataTable>
        </div>
      )}
    </PageLayout>
  );
};

export default EmployeeBonus;
