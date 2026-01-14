import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";

import {
  academicYearOptions,
  divisionOptions,
  districtOptions,
  blockOptions,
  sankulOptions,
  mgmtTypeOptions,
  mgmtDetailsOptions,
  schoolCatOptions,
  schoolSubCatOptions,
} from "./data";

const EnrollmentCountReport: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [formData, setFormData] = useState({
    academicYear: "2025-26",
    division: "All",
    district: "All",
    block: "All",
    sankul: "All",
    mgmtType: "All",
    mgmtDetails: "All",
    schoolCat: "All",
    subCat: "All",
  });

  const handleSearch = () => {
    if (!formData.academicYear) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select Academic Year",
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
  };

  const handleClear = () => {
    setFormData({
      academicYear: "2025-26",
      division: "All",
      district: "All",
      block: "All",
      sankul: "All",
      mgmtType: "All",
      mgmtDetails: "All",
      schoolCat: "All",
      subCat: "All",
    });
  };

  return (
    <PageLayout title="Enrollment Count Report">
      <Toast ref={toast} />

      <div className="space-y-6 animate-fade-in">
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
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
                Division
              </label>
              <Dropdown
                value={formData.division}
                options={divisionOptions}
                onChange={(e) =>
                  setFormData({ ...formData, division: e.value })
                }
                className="p-inputtext-sm w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">
                District
              </label>
              <Dropdown
                value={formData.district}
                options={districtOptions}
                onChange={(e) =>
                  setFormData({ ...formData, district: e.value })
                }
                className="p-inputtext-sm w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">Block</label>
              <Dropdown
                value={formData.block}
                options={blockOptions}
                onChange={(e) => setFormData({ ...formData, block: e.value })}
                className="p-inputtext-sm w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">Sankul</label>
              <Dropdown
                value={formData.sankul}
                options={sankulOptions}
                onChange={(e) => setFormData({ ...formData, sankul: e.value })}
                className="p-inputtext-sm w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">
                Management Type
              </label>
              <Dropdown
                value={formData.mgmtType}
                options={mgmtTypeOptions}
                onChange={(e) =>
                  setFormData({ ...formData, mgmtType: e.value })
                }
                className="p-inputtext-sm w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">
                Management Type Details
              </label>
              <Dropdown
                value={formData.mgmtDetails}
                options={mgmtDetailsOptions}
                onChange={(e) =>
                  setFormData({ ...formData, mgmtDetails: e.value })
                }
                className="p-inputtext-sm w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">
                School Category
              </label>
              <Dropdown
                value={formData.schoolCat}
                options={schoolCatOptions}
                onChange={(e) =>
                  setFormData({ ...formData, schoolCat: e.value })
                }
                className="p-inputtext-sm w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">
                School Sub Category Details
              </label>
              <Dropdown
                value={formData.subCat}
                options={schoolSubCatOptions}
                onChange={(e) => setFormData({ ...formData, subCat: e.value })}
                className="p-inputtext-sm w-full"
              />
            </div>
          </div>

          <div className="flex gap-2 mt-6 pt-4 border-t">
            <Button
              label="Search"
              icon="pi pi-search"
              onClick={handleSearch}
              className=" p-button-primary px-8 font-bold"
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
    </PageLayout>
  );
};

export default EnrollmentCountReport;
