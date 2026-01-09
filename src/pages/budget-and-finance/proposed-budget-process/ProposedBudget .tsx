/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useState, useEffect, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

interface ProposedBudgetData {
  srNo: number;
  headNo: string;
  budgetHead: string;
  budgetHeadCode: string;
  budgetHeadName: string;
  proposedAmount: string;
}

const ProposedSubBudget: React.FC = () => {
  const [step, setStep] = useState(1);
  const [officeName, setOfficeName] = useState<string | null>(null);
  const [headType, setHeadType] = useState<string | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const toast = useRef<Toast>(null);

  const [budgetData, setBudgetData] = useState<ProposedBudgetData[]>([
    {
      srNo: 1,
      headNo: "01",
      budgetHead: "Salary Allowance",
      budgetHeadCode: "01.01",
      budgetHeadName: "Salary Allowance",
      proposedAmount: "",
    },
    {
      srNo: 2,
      headNo: "",
      budgetHead: "",
      budgetHeadCode: "01.02",
      budgetHeadName: "Dearness Allowance",
      proposedAmount: "",
    },
    {
      srNo: 3,
      headNo: "",
      budgetHead: "",
      budgetHeadCode: "01.03",
      budgetHeadName: "House Rent Allowance",
      proposedAmount: "",
    },
    {
      srNo: 4,
      headNo: "",
      budgetHead: "",
      budgetHeadCode: "01.04",
      budgetHeadName: "Medical Reimbursement",
      proposedAmount: "",
    },
    {
      srNo: 5,
      headNo: "",
      budgetHead: "",
      budgetHeadCode: "01.05",
      budgetHeadName: "Festival Advance",
      proposedAmount: "",
    },
    {
      srNo: 6,
      headNo: "",
      budgetHead: "",
      budgetHeadCode: "01.06",
      budgetHeadName: "Central Advance",
      proposedAmount: "",
    },
    {
      srNo: 7,
      headNo: "02",
      budgetHead: "Travel Allowance",
      budgetHeadCode: "02.01",
      budgetHeadName: "Travel Allowance on Tour",
      proposedAmount: "",
    },
    {
      srNo: 8,
      headNo: "",
      budgetHead: "",
      budgetHeadCode: "02.02",
      budgetHeadName: "Travelling Allowance Transfer",
      proposedAmount: "",
    },
    {
      srNo: 9,
      headNo: "03",
      budgetHead: "Office Expenses",
      budgetHeadCode: "03.01",
      budgetHeadName: "Postage and Telegraph Expenses",
      proposedAmount: "",
    },
  ]);

  useEffect(() => {
    const total = budgetData.reduce((acc, row) => {
      const val = parseFloat(row.proposedAmount) || 0;
      return acc + val;
    }, 0);
    setTotalAmount(total);
  }, [budgetData]);

  const onAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    rowIndex: number
  ) => {
    const value = e.target.value;
    setBudgetData((prevData) => {
      const updatedData = [...prevData];
      updatedData[rowIndex] = {
        ...updatedData[rowIndex],
        proposedAmount: value,
      };
      return updatedData;
    });
  };

  const handleSearch = () => {
    if (!headType || !officeName) {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select all mandatory fields marked with *",
        life: 3000,
      });
      return;
    }
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Proposed budget data loaded.",
      life: 3000,
    });
  };

  const handleClear = () => {
    setOfficeName(null);
    setHeadType(null);
    setBudgetData((prev) =>
      prev.map((item) => ({ ...item, proposedAmount: "" }))
    );
    setStep(1);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Search filters and amounts have been reset.",
      life: 2000,
    });
  };

  const handleSave = () => {
    toast.current?.show({
      severity: "success",
      summary: "Saved",
      detail: "Proposed budget record saved successfully.",
      life: 3000,
    });
  };

  const amountInputTemplate = (rowData: ProposedBudgetData, options: any) => {
    return (
      <InputText
        value={rowData.proposedAmount}
        onChange={(e) => onAmountChange(e, options.rowIndex)}
        placeholder="Enter Amount"
        className="p-inputtext-sm w-full"
      />
    );
  };

  return (
    <PageLayout title="Proposed Budget">
      <Toast ref={toast} />
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">
                Proposed Budget Date<span className="text-red-500">*</span>
              </label>
              <InputText value="01/04/2024" disabled className="bg-gray-100" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">
                Select Head Type<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={headType}
                options={[{ label: "Expense", value: "Expense" }]}
                onChange={(e) => setHeadType(e.value)}
                placeholder="Select"
                className="w-full border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">
                Select Office Name<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={officeName}
                options={[
                  {
                    label: "Directorate of Technical Education (DTE)",
                    value: "DTE",
                  },
                  {
                    label: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
                    value: "RGPV",
                  },
                  { label: "AICTE Regional Office", value: "AICTE" },
                ]}
                onChange={(e) => setOfficeName(e.value)}
                placeholder="Select"
                className="w-full border-gray-300"
                filter
              />
            </div>
          </div>

          {/* Action Buttons Aligned Left */}
          <div className="flex gap-2 mt-8">
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
          <div className="bg-white p-4 rounded shadow-sm border border-gray-100 animate-fade-in">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">
              Proposed Budget List
            </h2>
            <DataTable
              value={budgetData}
              className="p-datatable-sm"
              responsiveLayout="scroll"
            >
              <Column
                field="srNo"
                header="Sr. No."
                sortable
                style={{ width: "80px" }}
              />
              <Column field="headNo" header="Head No." sortable />
              <Column field="budgetHead" header="Budget Head" sortable />
              <Column
                field="budgetHeadCode"
                header="Budget Head Code"
                sortable
              />
              <Column
                field="budgetHeadName"
                header="Budget Head Name"
                sortable
              />
              <Column
                header="Enter Proposed Budget Amount"
                body={amountInputTemplate}
                style={{ width: "250px" }}
              />
            </DataTable>

            <div className="grid grid-cols-12 items-center mt-4 p-2 bg-gray-50 rounded border">
              <div className="col-span-10 text-right pr-6 font-bold text-gray-700">
                Total
              </div>
              <div className="col-span-2">
                <InputText
                  value={totalAmount.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                  disabled
                  className="w-full bg-white p-inputtext-sm font-bold text-center text-blue-700 border-blue-200"
                />
              </div>
            </div>

            <div className="flex gap-2 mt-10">
              <Button
                label="Save"
                icon="pi pi-check"
                className="p-button-primary px-10"
                onClick={handleSave}
              />
              <Button
                label="Clear Selection"
                icon="pi pi-refresh"
                className="p-button-outlined p-button-danger px-10"
                onClick={handleClear}
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ProposedSubBudget;
