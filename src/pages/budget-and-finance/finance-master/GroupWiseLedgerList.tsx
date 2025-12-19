import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

interface GroupWiseLedger {
  srNo: number;
  ledgerName: string;
  ledgerCode: string;
  groupName: string;
  createOfficeName: string;
}

const GroupWiseLedgerList: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const ledgerData: GroupWiseLedger[] = [
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
  const groupOptions = [
    { label: "All", value: "All" },
    { label: "Current Assets", value: "Current Assets" },
    { label: "Bank Accounts", value: "Bank Accounts" },
    { label: "Fixed Assets", value: "Fixed Assets" },
    { label: "Direct Income", value: "Direct Income" },
    { label: "Current Account", value: "Current Account" },
    { label: "Saving Accounts", value: "Saving Accounts" },
    { label: "Sales Accounts", value: "Sales Accounts" },
    { label: "Current Liabilities", value: "Current Liabilities" },
    { label: "Indirect Income", value: "Indirect Income" },
  ];

  const handleSearch = () => {
    setStep(2);
  };

  const handleClear = () => {
    setSelectedGroup(null);
    setStep(1);
  };

  return (
    <PageLayout title="Group Wise Ledger">
      <div className="bg-white border-gray-100 mb-6">
        <div className="flex flex-col gap-2 max-w-md">
          <label className="text-sm font-bold text-gray-600">
            Select Group Name<span className="text-red-500">*</span>
          </label>
          <Dropdown
            value={selectedGroup}
            options={groupOptions}
            onChange={(e) => setSelectedGroup(e.value)}
            placeholder="Nothing selected"
            className="w-full border-gray-300"
          />
        </div>
        <div className="flex justify-center gap-3 mt-6">
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
        <div className="bg-white p-4 rounded shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-semibold text-gray-700">
              Group Wise Ledger List
            </h3>
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
              field="ledgerName"
              header="Ledger Name"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              field="ledgerCode"
              header="Ledger Code"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              field="groupName"
              header="Group Name"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              field="createOfficeName"
              header="Create Office Name"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              header="Action"
              style={{ borderBottom: "1px solid #e5e7eb", textAlign: "center" }}
              body={() => (
                <Button
                  icon="pi pi-eye"
                  className="p-button-rounded p-button-text p-button-info p-button-sm border"
                  title="View Details"
                />
              )}
            />
          </DataTable>
        </div>
      )}
    </PageLayout>
  );
};

export default GroupWiseLedgerList;
