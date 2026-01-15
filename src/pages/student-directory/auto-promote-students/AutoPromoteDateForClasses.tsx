import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";

import { academicYearOptions, classLevelOptions } from "./data";
import { promoteDateColumns } from "./table";

const AutoPromoteDate: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [formData, setFormData] = useState({
    academicYear: "2024-25",
    classLevel: "All",
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
      classLevel: "All",
    });
  };

  return (
    <PageLayout title="Auto Promote Date For Classes">
      <Toast ref={toast} />

      <div className="space-y-6 animate-fade-in">
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
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
                Class Name
              </label>
              <Dropdown
                value={formData.classLevel}
                options={classLevelOptions}
                onChange={(e) =>
                  setFormData({ ...formData, classLevel: e.value })
                }
                className="p-inputtext-sm w-full"
              />
            </div>
          </div>
          <div className="flex gap-2 mt-3 pt-4 ">
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

      <div className="bg-white p-4 rounded shadow-sm border border-gray-100 mt-3">
        <h4 className="text-blue-700 font-bold text-xs border-l-4 border-blue-700 pl-2 mb-4 uppercase">
          Promotion Date Details
        </h4>

        <Table
          data={[]}
          columns={promoteDateColumns}
          showPagination={true}
          rowsPerPage={10}
          className="p-datatable-sm"
        />
      </div>
    </PageLayout>
  );
};

export default AutoPromoteDate;
