import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Dropdown } from "primereact/dropdown";
import Table from "@/ui/shared/Table";

import {
  courseOptions,
  promotionMockData,
  promotionYears,
  semesterOptions,
  specializationOptions,
} from "./data";
import { getPromotionColumns, getAddPromotionColumns } from "./table";

const StudentPromotionTC: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [viewMode, setViewMode] = useState<"list" | "add">("list");
  const [filters, setFilters] = useState({
    year: null,
    course: null,
    sem: null,
    specialization: null,
  });

  const showDeniedToast = () => {
    toast.current?.show({
      severity: "error",
      summary: "Access Denied",
      detail: "Access to this action is denied",
      life: 3000,
    });
  };

  const handleSearch = () => {
    if (!filters.year) {
      toast.current?.show({
        severity: "warn",
        summary: "Required",
        detail: "Please select Academic Year",
      });
      return;
    }
    setStep(2);
  };

  const handleSave = () => {
    confirmDialog({
      message: "Are you sure you want to save promotion records?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => showDeniedToast(),
    });
  };

  return (
    <PageLayout title="Student Promotion & TC">
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6 animate-fade-in">
        <div className="flex justify-end items-center mb-6">
          <Button
            label={viewMode === "list" ? "Add New Promotion" : "Back to List"}
            icon={viewMode === "list" ? "pi pi-plus" : "pi pi-arrow-left"}
            className={`p-button-sm ${
              viewMode === "list" ? "p-button-primary" : "p-button-outlined"
            }`}
            onClick={() => {
              setViewMode(viewMode === "list" ? "add" : "list");
              setStep(1);
            }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-blue-600 text-xs font-bold uppercase">
              Academic Year <span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={filters.year}
              options={promotionYears}
              onChange={(e) => setFilters({ ...filters, year: e.value })}
              placeholder="Select"
              className="w-full p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-blue-600 text-xs font-bold uppercase">
              Course Name
            </label>
            <Dropdown
              placeholder="Select"
              className="w-full p-inputtext-sm"
              value={filters.course}
              options={courseOptions}
              onChange={(e) => setFilters({ ...filters, course: e.value })}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-blue-600 text-xs font-bold uppercase">
              Select Specialization
            </label>
            <Dropdown
              options={specializationOptions}
              placeholder="Select"
              className="w-full p-inputtext-sm"
              onChange={(e) =>
                setFilters({ ...filters, specialization: e.value })
              }
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-blue-600 text-xs font-bold uppercase">
              Semester
            </label>
            <Dropdown
              options={semesterOptions}
              placeholder="Select"
              className="w-full p-inputtext-sm"
              onChange={(e) => setFilters({ ...filters, sem: e.value })}
            />
          </div>

          <div className="flex flex-col gap-1 pt-5">
            <div className="flex gap-2">
              <Button
                label="Search"
                className="p-button-primary"
                icon="pi pi-search"
                onClick={handleSearch}
              />
              <Button
                type="button"
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-danger p-button-outlined "
                onClick={() => setStep(1)}
              />
            </div>
          </div>
        </div>
      </div>

      {step === 2 && (
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-blue-700 font-bold text-md border-l-4 border-blue-700 pl-2">
              {viewMode === "list"
                ? "Student Promotion & TC List"
                : "Add Student Promotion Details"}
            </h3>
            {viewMode === "add" && (
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  placeholder="Filter list..."
                  className="p-inputtext-sm"
                />
              </span>
            )}
          </div>

          <Table
            data={promotionMockData}
            columns={
              viewMode === "list"
                ? // eslint-disable-next-line react-hooks/refs
                  getPromotionColumns(showDeniedToast)
                : getAddPromotionColumns()
            }
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm"
          />

          {viewMode === "add" && (
            <div className="flex justify-center gap-3 mt-8 pt-6 border-t">
              <Button
                label="Save Changes"
                icon="pi pi-save"
                className="p-button-success px-10"
                onClick={handleSave}
              />
              <Button
                label="Cancel"
                icon="pi pi-times"
                className="p-button-secondary p-button-outlined px-10"
                onClick={() => setViewMode("list")}
              />
            </div>
          )}
        </div>
      )}
    </PageLayout>
  );
};

export default StudentPromotionTC;
