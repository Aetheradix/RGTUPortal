import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import {
  DataTable,
  type DataTableSelectionMultipleChangeEvent,
} from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

interface BudgetApprovalData {
  srNo: number;
  headType: string;
  budgetHeadName: string;
  budgetRequestDate: string;
  budgetAmount: string;
  status: string;
}

const BudgetApprovalProcess: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedItems, setSelectedItems] = useState<BudgetApprovalData[]>([]);
  const toast = useRef<Toast>(null);

  // --- FILTER STATES ---
  const [financialYear, setFinancialYear] = useState<string | null>(null);
  const [month, setMonth] = useState<string | null>(null);
  const [headType, setHeadType] = useState<string | null>(null);
  const [oicType, setOicType] = useState<string | null>(null);
  const [division, setDivision] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [block, setBlock] = useState<string | null>(null);
  const [university, setUniversity] = useState<string | null>(null);
  const [college, setCollege] = useState<string | null>(null);
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);

  // --- OPTIONS ---
  const financialYearOptions = [
    { label: "2024-2025", value: "2024-2025" },
    { label: "2023-2024", value: "2023-2024" },
    { label: "2022-2023", value: "2022-2023" },
  ];
  const monthOptions = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
  ];
  const headTypeOptions = [
    { label: "Expenses", value: "Expenses" },
    { label: "Income", value: "Income" },
  ];
  const oicOptions = [
    { label: "College", value: "College" },
    { label: "Office", value: "Office" },
    { label: "University", value: "University" },
  ];

  const divisionOptions = [{ label: "Bhopal Division", value: "Bhopal" }];
  const districtOptions = [{ label: "Bhopal District", value: "Bhopal_Dist" }];
  const blockOptions = [{ label: "Phanda Block", value: "Phanda" }];
  const universityOptions = [
    { label: "Barkatullah University (BU)", value: "BU" },
    { label: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)", value: "RGPV" },
  ];
  const collegeOptions = [{ label: "M.L.B. Girls PG College", value: "MLB" }];
  const officeTypeOptions = [{ label: "Directorate", value: "DIR" }];
  const officeNameOptions = [
    { label: "Directorate of Technical Education (DTE)", value: "DTE" },
  ];

  // --- TABLE DATA ---
  const budgetData: BudgetApprovalData[] = [
    {
      srNo: 1,
      headType: "Expenses",
      budgetHeadName: "Basic Pay/Special Pay/Dearness Allowance",
      budgetRequestDate: "05-01-2023",
      budgetAmount: "543000.00",
      status: "Pending",
    },
    {
      srNo: 2,
      headType: "Expenses",
      budgetHeadName: "Medical Expense Reimbursement",
      budgetRequestDate: "04-04-2023",
      budgetAmount: "100054.00",
      status: "Pending",
    },
    {
      srNo: 3,
      headType: "Expenses",
      budgetHeadName: "Stationery, Font Copy, Bidding",
      budgetRequestDate: "01-05-2023",
      budgetAmount: "10000.00",
      status: "Pending",
    },
  ];

  // --- HANDLERS ---
  const handleSearch = () => {
    if (financialYear && month && headType && oicType) {
      setStep(2);
      toast.current?.show({
        severity: "success",
        summary: "Search Successful",
        detail: "Budget approval requests loaded.",
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Validation Error",
        detail: "Please select all mandatory fields marked with *",
        life: 3000,
      });
    }
  };

  const handleClear = () => {
    setFinancialYear(null);
    setMonth(null);
    setHeadType(null);
    setOicType(null);
    setDivision(null);
    setDistrict(null);
    setBlock(null);
    setUniversity(null);
    setCollege(null);
    setOfficeType(null);
    setOfficeName(null);
    setStep(1);
    setSelectedItems([]);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Filters and selections have been reset.",
      life: 2000,
    });
  };

  const confirmAction = (actionType: "approve" | "reject") => {
    if (selectedItems.length === 0) {
      toast.current?.show({
        severity: "warn",
        summary: "Selection Required",
        detail: "Please select at least one record to " + actionType,
        life: 3000,
      });
      return;
    }

    confirmDialog({
      message: `Are you sure you want to ${actionType} the selected requests?`,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Yes",
      rejectLabel: "No",
      acceptClassName:
        actionType === "approve" ? "p-button-success" : "p-button-danger",
      accept: () => {
        toast.current?.show({
          severity: "success",
          summary: actionType === "approve" ? "Approved" : "Rejected",
          detail: `Requests have been successfully ${actionType}d.`,
          life: 3000,
        });
        setSelectedItems([]);
      },
    });
  };

  return (
    <PageLayout title="Budget Approval Process (Approval Authority)">
      <Toast ref={toast} />
      <ConfirmDialog />

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-600">
                Select Financial Year<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={financialYear}
                options={financialYearOptions}
                onChange={(e) => setFinancialYear(e.value)}
                placeholder="Select"
                className="p-inputtext-sm w-full border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-600">
                Select Month<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={month}
                options={monthOptions}
                onChange={(e) => setMonth(e.value)}
                placeholder="Select"
                className="p-inputtext-sm w-full border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-600">
                Select Head Type<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={headType}
                options={headTypeOptions}
                onChange={(e) => setHeadType(e.value)}
                placeholder="Select"
                className="p-inputtext-sm w-full border-gray-300"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-600">
                Select OIC Type<span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={oicType}
                options={oicOptions}
                onChange={(e) => setOicType(e.value)}
                placeholder="Select"
                className="p-inputtext-sm w-full border-gray-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {(oicType === "University" || oicType === "College") && (
              <>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-gray-600">
                    Select Division Name
                  </label>
                  <Dropdown
                    value={division}
                    options={divisionOptions}
                    onChange={(e) => setDivision(e.value)}
                    placeholder="Select"
                    className="p-inputtext-sm w-full border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-gray-600">
                    Select District Name
                  </label>
                  <Dropdown
                    value={district}
                    options={districtOptions}
                    onChange={(e) => setDistrict(e.value)}
                    placeholder="Select"
                    className="p-inputtext-sm w-full border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-gray-600">
                    Select Block Name
                  </label>
                  <Dropdown
                    value={block}
                    options={blockOptions}
                    onChange={(e) => setBlock(e.value)}
                    placeholder="Select"
                    className="p-inputtext-sm w-full border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-gray-600">
                    Select University Name
                  </label>
                  <Dropdown
                    value={university}
                    options={universityOptions}
                    onChange={(e) => setUniversity(e.value)}
                    placeholder="Select"
                    className="p-inputtext-sm w-full border-gray-300"
                  />
                </div>
              </>
            )}
            {oicType === "College" && (
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select College Name
                </label>
                <Dropdown
                  value={college}
                  options={collegeOptions}
                  onChange={(e) => setCollege(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full border-gray-300"
                />
              </div>
            )}
            {oicType === "Office" && (
              <>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-gray-600">
                    Select Office Type
                  </label>
                  <Dropdown
                    value={officeType}
                    options={officeTypeOptions}
                    onChange={(e) => setOfficeType(e.value)}
                    placeholder="Select"
                    className="p-inputtext-sm w-full border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-gray-600">
                    Select Office Name
                  </label>
                  <Dropdown
                    value={officeName}
                    options={officeNameOptions}
                    onChange={(e) => setOfficeName(e.value)}
                    placeholder="Select"
                    className="p-inputtext-sm w-full border-gray-300"
                  />
                </div>
              </>
            )}
          </div>

          <div className="flex gap-2 mt-8">
            <Button
              label="Search"
              icon="pi pi-search"
              className="p-button-primary px-8"
              onClick={handleSearch}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-outlined p-button-danger px-8"
              onClick={handleClear}
            />
          </div>
        </div>

        {step === 2 && (
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-md font-bold text-gray-700">
                Budget Approval Process Detail
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-sm">Search:</span>
                <InputText
                  className="p-inputtext-sm w-48 border-gray-300"
                  placeholder="Global Search"
                />
              </div>
            </div>

            <DataTable
              value={budgetData}
              className="p-datatable-sm"
              showGridlines
              selectionMode="multiple"
              selection={selectedItems}
              onSelectionChange={(
                e: DataTableSelectionMultipleChangeEvent<BudgetApprovalData[]>
              ) => setSelectedItems(e.value)}
              dataKey="srNo"
              responsiveLayout="scroll"
            >
              <Column
                selectionMode="multiple"
                headerStyle={{ width: "3rem" }}
              ></Column>
              <Column
                field="srNo"
                header="Sr. No."
                sortable
                style={{ width: "5rem" }}
              />
              <Column field="headType" header="Head Type" sortable />
              <Column
                field="budgetHeadName"
                header="Budget Head Name"
                sortable
              />
              <Column
                field="budgetRequestDate"
                header="Budget Request Date"
                sortable
              />
              <Column field="budgetAmount" header="Budget Amount" sortable />
              <Column
                field="status"
                header="Status"
                body={(data) => (
                  <span className="px-2 py-1 rounded text-xs font-bold bg-orange-100 text-orange-600">
                    {data.status}
                  </span>
                )}
                sortable
              />
            </DataTable>

            <div className="flex justify-between p-3 bg-gray-50 border-x border-b font-bold text-sm">
              <span>Total Amount</span>
              <span className="mr-32 text-blue-700 font-black">653,054.00</span>
            </div>

            <div className="flex gap-2 mt-8 pt-4 border-t">
              <Button
                label="Approve"
                icon="pi pi-check"
                className="p-button-success p-button-outlined px-10"
                onClick={() => confirmAction("approve")}
              />
              <Button
                label="Reject"
                icon="pi pi-times"
                className="p-button-danger p-button-outlined px-10"
                onClick={() => confirmAction("reject")}
              />
              <Button
                label="Clear Selection"
                icon="pi pi-refresh"
                className="p-button-outlined p-button-secondary px-10"
                onClick={() => {
                  setSelectedItems([]);
                  toast.current?.show({
                    severity: "info",
                    summary: "Selection Reset",
                    detail: "Table selections have been cleared.",
                    life: 2000,
                  });
                }}
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default BudgetApprovalProcess;
