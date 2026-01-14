import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { ColumnGroup } from "primereact/columngroup";
import { Column } from "primereact/column";
import Dropdown from "@/ui/shared/Dropdown";
import {
  blocksOptions,
  districtsOptions,
} from "../administrative/administrative.data";
import { mutualTableColumns, mutualTransferData } from "./tables";
import Table from "@/ui/shared/Table";

const MutualTransferApproval: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedBlock, setSelectedBlock] = useState<string | null>(null);
  const toast = useRef<Toast>(null);

  const handleSearch = () => {
    if (!selectedDistrict || !selectedBlock) {
      toast.current?.show({
        severity: "warn",
        summary: "Validation Failed",
        detail: "Please select both District and Block.",
        life: 3000,
      });
      return;
    }
    setStep(2);
  };

  const handleClear = () => {
    setSelectedDistrict(null);
    setSelectedBlock(null);
    setStep(1);

    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Form inputs have been reset.",
      life: 2000,
    });
  };
  const headerGroup = (
    <ColumnGroup>
      <tr>
        <Column header="Transfer Request Date" rowSpan={2} />
        <Column
          header="First Employee"
          colSpan={7}
          className="text-center bg-gray-100 font-bold border-b"
        />
        <Column
          header="Second Employee"
          colSpan={7}
          className="text-center bg-gray-100 font-bold border-b"
        />
        <Column header="View Application" rowSpan={2} />
        <Column header="Approve Request" rowSpan={2} />
      </tr>
      <tr>
        <Column header="Name(Unique ID)" />
        <Column header="Designation" />
        <Column header="Panel Name" />
        <Column header="District (Code)" />
        <Column header="Block (Code)" />
        <Column header="Office (Code)" />
        <Column header="New Office (Code)" />
        <Column header="Name(Unique ID)" />
        <Column header="Designation" />
        <Column header="Panel Name" />
        <Column header="District (Code)" />
        <Column header="Block (Code)" />
        <Column header="Office (Code)" />
        <Column header="New Office (Code)" />
      </tr>
    </ColumnGroup>
  );

  return (
    <PageLayout title="Mutual Transfer Approval">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Select District Name
            </label>
            <Dropdown
              value={selectedDistrict}
              options={districtsOptions}
              onChange={(e) => setSelectedDistrict(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Select Block Name
            </label>
            <Dropdown
              value={selectedBlock}
              options={blocksOptions}
              onChange={(e) => setSelectedBlock(e.value)}
              placeholder="Select"
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
        <div className="bg-white p-4 rounded shadow-sm border border-gray-100 mt-6 overflow-x-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-semibold text-gray-700">Details</h3>
            <div className="flex items-center gap-2 text-xs">
              <span>Search:</span>
              <InputText className="p-inputtext-sm w-48" />
            </div>
          </div>

          <Table
            data={mutualTransferData}
            columns={mutualTableColumns}
            headerColumnGroup={headerGroup}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm text-[10px]"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default MutualTransferApproval;
