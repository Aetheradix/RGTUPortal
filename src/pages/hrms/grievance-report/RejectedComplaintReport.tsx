import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import { districtOptions, sectionOptions } from "./data";

const RejectedComplaintReport: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!selectedDistrict || !selectedSection) {
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

  return (
    <PageLayout title="Grievance Rejected Report">
      <Toast ref={toast} />

      <div className="bg-white mt-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              District<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={selectedDistrict}
              options={districtOptions}
              onChange={(e) => setSelectedDistrict(e.value)}
              placeholder="Select District"
              className="w-full border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Section Name<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={selectedSection}
              options={sectionOptions}
              onChange={(e) => setSelectedSection(e.value)}
              placeholder="Select Section"
              className="w-full border-gray-300"
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
        </div>
      </div>
    </PageLayout>
  );
};

export default RejectedComplaintReport;
