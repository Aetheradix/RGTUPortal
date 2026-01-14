import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import { categoryOptions, circularIssuedByOptions, ordersData } from "./data";
import { orderColumns } from "./DashboardTable";

const AllOrders: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedCircular, setSelectedCircular] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!selectedCircular || !selectedCategory) {
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
      detail: "Displaying order records.",
      life: 3000,
    });
    setStep(2);
  };

  const handleClear = () => {
    setSelectedCircular(null);
    setSelectedCategory(null);
    setStep(1);

    toast.current?.show({
      severity: "info",
      summary: "Form Cleared",
      detail: "All filters have been reset.",
      life: 2000,
    });
  };

  return (
    <PageLayout title="All Orders">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-gray-700">
              Select Circular Issued By<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={selectedCircular}
              options={circularIssuedByOptions}
              onChange={(e) => setSelectedCircular(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-[13px] font-bold text-gray-700">
              Select Category<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={selectedCategory}
              options={categoryOptions}
              onChange={(e) => setSelectedCategory(e.value)}
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
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-outlined p-button-danger px-6"
            onClick={handleClear}
          />
        </div>
      </div>
      {step === 2 && (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-end items-center mb-2 text-sm text-gray-600">
            <div className="flex items-center gap-2 mb-3">
              <span>Search:</span>
              <InputText className="p-inputtext-sm border-gray-300 w-48" />
            </div>
          </div>

          <Table
            title="All Information List"
            data={ordersData}
            columns={orderColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm custom-table text-sm"
          />

          <div className="flex justify-center mt-6">
            <Button
              label="View Less..."
              className="bg-[#8cc63f] border-none px-6 py-2 rounded-md text-white font-medium"
              onClick={() => setStep(1)}
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default AllOrders;
