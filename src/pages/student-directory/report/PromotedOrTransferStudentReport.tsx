import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";

import {
  academicYearOptions,
  transitionTypeOptions,
  classOptions,
} from "./data";

const PromotedTransferReport: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [formData, setFormData] = useState({
    academicYear: "2024-25",
    transitionType: "All",
    fromClass: "All",
    toClass: "All",
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
      academicYear: "2024-25",
      transitionType: "All",
      fromClass: "All",
      toClass: "All",
    });
  };

  return (
    <PageLayout title="Promoted Or Transfer Student Report">
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
                Transition Type
              </label>
              <Dropdown
                value={formData.transitionType}
                options={transitionTypeOptions}
                onChange={(e) =>
                  setFormData({ ...formData, transitionType: e.value })
                }
                className="p-inputtext-sm w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">
                From Class
              </label>
              <Dropdown
                value={formData.fromClass}
                options={classOptions}
                onChange={(e) =>
                  setFormData({ ...formData, fromClass: e.value })
                }
                className="p-inputtext-sm w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-blue-600">
                To Class
              </label>
              <Dropdown
                value={formData.toClass}
                options={classOptions}
                onChange={(e) => setFormData({ ...formData, toClass: e.value })}
                className="p-inputtext-sm w-full"
              />
            </div>
          </div>

          <div className="flex gap-2 mt-4 pt-4 ">
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

export default PromotedTransferReport;
