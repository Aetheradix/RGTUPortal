import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import { vacancyColumns } from "./AdminTables";
import {
  blocksOptions,
  districtsOptions,
  postTypeOptions,
  subjectOptions,
  vacancyData,
} from "./administrative.data";

const ViewPostCodeVacancies: React.FC = () => {
  const [step, setStep] = useState(1);
  const [filters, setFilters] = useState({
    district: null,
    block: null,
    postType: null,
    subject: null,
  });
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!filters.district || !filters.block || !filters.postType) {
      toast.current?.show({
        severity: "warn",
        summary: "Missing Information",
        detail: "Please select District, Block, and Post Type.",
        life: 3000,
      });
      return;
    }
    setStep(2);
  };

  const handleClear = () => {
    setFilters({ district: null, block: null, postType: null, subject: null });
    setStep(1);
  };

  return (
    <PageLayout title="View Post Code With Vacancies">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              District Name
            </label>
            <Dropdown
              value={filters.district}
              options={districtsOptions}
              onChange={(e) => setFilters({ ...filters, district: e.value })}
              placeholder="Select District"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Block Name
            </label>
            <Dropdown
              value={filters.block}
              options={blocksOptions}
              onChange={(e) => setFilters({ ...filters, block: e.value })}
              placeholder="Select Block"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">Post Type</label>
            <Dropdown
              value={filters.postType}
              options={postTypeOptions}
              onChange={(e) => setFilters({ ...filters, postType: e.value })}
              placeholder="Select Type"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Subject (Optional)
            </label>
            <Dropdown
              value={filters.subject}
              options={subjectOptions}
              onChange={(e) => setFilters({ ...filters, subject: e.value })}
              placeholder="Select Subject"
              className="p-inputtext-sm w-full"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-primary px-6"
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
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mt-6 animate-fade-in">
          <div className="flex justify-between items-center mb-4 border-b pb-4">
            <div>
              <h3 className="text-md font-semibold text-gray-700">
                Available Vacancies List
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Showing post codes and current vacancy status
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium text-gray-600">Quick Filter:</span>
              <InputText
                className="p-inputtext-sm w-64"
                placeholder="Search by School or Post Code..."
              />
            </div>
          </div>

          <Table
            data={vacancyData}
            columns={vacancyColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm custom-table"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default ViewPostCodeVacancies;
