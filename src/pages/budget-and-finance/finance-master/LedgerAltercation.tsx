import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

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
    setStep(2);
  };

  const handleClear = () => {
    setSearchType("Ledger Name");
    setMappingStatus("Unmapped");
    setStep(1);
  };

  return (
    <PageLayout title="Ledger Altercation">
      <div className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Select Type*
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
              Select Ledger Search Type*
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
                ? "Enter Ledger Name*"
                : "Enter Ledger Code*"}
            </label>
            <InputText
              placeholder={
                searchType === "Ledger Name"
                  ? "Enter Ledger Name"
                  : "Enter Ledger Code"
              }
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-8">
          <Button
            label="Search"
            className="px-8"
            style={{ backgroundColor: "#6366f1" }}
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            className="px-8 p-button-danger p-button-outlined"
            style={{
              color: "#ef4444",
              borderColor: "#fee2e2",
              backgroundColor: "#fef2f2",
            }}
            onClick={handleClear}
          />
        </div>
      </div>
      {step === 2 && (
        <div className="bg-white p-4 rounded shadow-sm border border-gray-100 animate-fade-in mt-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700">
              Ledger Altercation List
            </h2>
          </div>
          <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-2"></div>
            <div className="flex items-center gap-2">
              <span>Search:</span>
              <InputText className="p-inputtext-sm" />
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
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              sortable
              field="ledgerName"
              header="Ledger Name"
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              sortable
              field="ledgerCode"
              header="Ledger Code"
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              sortable
              field="groupName"
              header="Group Name"
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              sortable
              field="createOfficeName"
              header="Create Office Name"
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              header="Action"
              style={{ borderBottom: "1px solid #e5e7eb", textAlign: "center" }}
              body={() => (
                <div className="flex gap-2 justify-center">
                  <Button
                    icon="pi pi-pencil"
                    className="p-button-rounded p-button-text p-button-info p-button-sm border"
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
