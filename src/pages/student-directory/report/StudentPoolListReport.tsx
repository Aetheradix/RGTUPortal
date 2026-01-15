import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";

import {
  academicYearOptions,
  districtOptions,
  blockOptions,
  sankulOptions,
  schoolCatOptions,
  schoolOptions,
} from "./data";

const StudentPoolList: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    academicYear: "2025-26",
    district: null,
    block: null,
    sankul: null,
    schoolCat: null,
    school: "All",
  });

  const handleSearch = () => {
    if (!formData.academicYear || !formData.district) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please fill all mandatory fields",
        life: 3000,
      });
      return;
    }
    toast.current?.show({
      severity: "warn",
      summary: "Search Result",
      detail: "Data not found",
      life: 3000,
    });
    setStep(2);
  };

  const handleClear = () => {
    setFormData({
      academicYear: "2025-26",
      district: null,
      block: null,
      sankul: null,
      schoolCat: null,
      school: "All",
    });
    setStep(1);
  };

  return (
    <PageLayout title="Student Pool List">
      <Toast ref={toast} />
      <div className="bg-white p-4 rounded shadow-sm mb-6 animate-fade-in border border-gray-100">
        <div className="bg-white p-4 rounded mb-4">
          <span className="text-blue-700 font-bold text-xs">
            Search Student Pool List
          </span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">
                Academic Year<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={formData.academicYear}
                options={academicYearOptions}
                onChange={(e) =>
                  setFormData({ ...formData, academicYear: e.value })
                }
                placeholder="Select"
                className="p-inputtext-sm w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">
                District<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={formData.district}
                options={districtOptions}
                onChange={(e) =>
                  setFormData({ ...formData, district: e.value })
                }
                placeholder="Select"
                className="p-inputtext-sm w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">
                Block<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={formData.block}
                options={blockOptions}
                onChange={(e) => setFormData({ ...formData, block: e.value })}
                placeholder="Select"
                className="p-inputtext-sm w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">
                Sankul<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={formData.sankul}
                options={sankulOptions}
                onChange={(e) => setFormData({ ...formData, sankul: e.value })}
                placeholder="Select"
                className="p-inputtext-sm w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">
                School Category<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={formData.schoolCat}
                options={schoolCatOptions}
                onChange={(e) =>
                  setFormData({ ...formData, schoolCat: e.value })
                }
                placeholder="Select"
                className="p-inputtext-sm w-full"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">School</label>
              <Dropdown
                value={formData.school}
                options={schoolOptions}
                onChange={(e) => setFormData({ ...formData, school: e.value })}
                className="p-inputtext-sm w-full"
              />
            </div>
          </div>

          <div className="flex gap-2 mt-4 pt-4">
            <Button
              label="Search"
              icon="pi pi-search"
              onClick={handleSearch}
              className="p-button-primary px-8 font-bold"
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              onClick={handleClear}
              className="p-button-outlined p-button-danger px-8 font-bold"
            />
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow-sm animate-fade-in border border-gray-100">
        <h4 className="text-blue-700 font-bold text-xs border-l-4 border-blue-700 pl-2 mb-4 uppercase">
          Student List Details
        </h4>

        {step === 2 ? (
          <Table
            data={[]}
            columns={[]}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm"
          />
        ) : (
          <div className="h-24 flex items-center justify-center text-gray-400 italic text-sm">
            Execute search to retrieve pool list report
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default StudentPoolList;
