import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

interface LedgerAltercationData {
  srNo: number;
  ledgerName: string;
  ledgerCode: string;
  groupName: string;
  createOfficeName: string;
}

const LedgerAltercation: React.FC = () => {
  const [step, setStep] = useState(1);
  const [searchType, setSearchType] = useState<string>("Ledger Name");
  const [mappingStatus, setMappingStatus] = useState<string | null>("Unmapped");
  const [searchValue, setSearchValue] = useState<string>("");
  const toast = useRef<Toast>(null);

  const ledgerData: LedgerAltercationData[] = [
    {
      srNo: 1,
      ledgerName: "Basic Pay/Special Pay/Dearness Allowance",
      ledgerCode: "10.01.01",
      groupName: "Expenses",
      createOfficeName: "Directorate of Technical Education (DTE)",
    },
    {
      srNo: 2,
      ledgerName: "Gratuity Premium Payment",
      ledgerCode: "10.01.02",
      groupName: "Expenses",
      createOfficeName: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
    },
    {
      srNo: 3,
      ledgerName: "Gratuity Payment",
      ledgerCode: "10.00.03",
      groupName: "Expenses",
      createOfficeName: "AICTE Regional Office",
    },
  ];

  const searchTypeOptions = [
    { label: "Ledger Name", value: "Ledger Name" },
    { label: "Ledger Code", value: "Ledger Code" },
  ];

  const mappingOptions = [
    { label: "Mapped", value: "Mapped" },
    { label: "Unmapped", value: "Unmapped" },
  ];

  const handleSearch = () => {
    if (mappingStatus && searchValue.trim() !== "") {
      setStep(2);
      toast.current?.show({
        severity: "success",
        summary: "Search Successful",
        detail: "Ledger altercation records loaded.",
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please fill all mandatory fields.",
        life: 3000,
      });
    }
  };

  const handleClear = () => {
    setSearchType("Ledger Name");
    setMappingStatus("Unmapped");
    setSearchValue("");
    setStep(1);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Filters have been reset.",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Ledger Altercation">
      <Toast ref={toast} />
      <div className="bg-white mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Select Type<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={mappingStatus}
              options={mappingOptions}
              onChange={(e) => setMappingStatus(e.value)}
              placeholder="Select"
              className="w-full border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Select Ledger Search Type<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={searchType}
              options={searchTypeOptions}
              onChange={(e) => setSearchType(e.value)}
              className="w-full border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              {searchType === "Ledger Name"
                ? "Enter Ledger Name "
                : "Enter Ledger Code"}
            </label>
            <InputText
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder={
                searchType === "Ledger Name"
                  ? "Enter Ledger Name"
                  : "Enter Ledger Code"
              }
              className="w-full"
            />
          </div>
        </div>

        {/* Buttons Aligned Left as per your code format */}
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
        <div className="bg-white">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Ledger Altercation List
            </h2>
            <div className="flex items-center gap-2 text-sm">
              <span>Search:</span>
              <InputText
                className="p-inputtext-sm"
                placeholder="Global Search"
              />
            </div>
          </div>

          <DataTable
            value={ledgerData}
            className="p-datatable-sm"
            paginator
            rows={10}
          >
            <Column
              field="srNo"
              header="Sr. No."
              sortable
              style={{ width: "80px" }}
            />
            <Column field="ledgerName" header="Ledger Name" sortable />
            <Column field="ledgerCode" header="Ledger Code" sortable />
            <Column field="groupName" header="Group Name" sortable />
            <Column
              field="createOfficeName"
              header="Create Office Name"
              sortable
            />
            <Column
              header="Action"
              style={{ textAlign: "center", width: "100px" }}
              body={() => (
                <div className="flex gap-2 justify-center">
                  <Button
                    icon="pi pi-pencil"
                    text
                    className="p-button-rounded p-button-info"
                    title="Edit Ledger"
                  />
                </div>
              )}
            />
          </DataTable>
        </div>
      )}
    </PageLayout>
  );
};

export default LedgerAltercation;
