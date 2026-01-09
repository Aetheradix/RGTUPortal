import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import { districtOptions, grievanceData } from "./data";
import { grievanceColumns } from "./table";

const DistrictForwardedGrievances: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showTable, setShowTable] = useState(false);
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!selectedDistrict) {
      toast.current?.show({
        severity: "warn",
        summary: "Validation",
        detail: "Please select a District",
        life: 3000,
      });
      return;
    }
    setShowTable(true);
  };

  return (
    <PageLayout title="District Wise Forwarded Grievances">
      <Toast ref={toast} />

      {/* Filter Section */}
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
              placeholder="Select"
              className="w-full border-gray-300"
            />
          </div>
        </div>
        <div className="flex gap-2 mt-4 mb-6">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-primary px-6 bg-indigo-500 border-none"
            onClick={handleSearch}
          />
        </div>
      </div>

      {/* Table Section */}
      {showTable && (
        <div className="bg-white p-6 rounded shadow-sm border border-gray-100 animate-fade-in">
          <Table
            title="District Wise Forwarded Grievance Details"
            data={grievanceData}
            columns={grievanceColumns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm text-[11px] custom-orange-header"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default DistrictForwardedGrievances;
