import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog"; // Added for pop-up

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  // Filter States
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

  // Options
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
  ];
  const collegeOptions = [{ label: "M.L.B. Girls PG College", value: "MLB" }];
  const officeTypeOptions = [{ label: "Directorate", value: "DIR" }];
  const officeNameOptions = [
    { label: "Directorate of Technical Education (DTE)", value: "DTE" },
  ];

  // Table Data
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

  const handleSearch = () => {
    setStep(2);
  };

  const handleClear = () => {
    setFinancialYear(null);
    setMonth(null);
    setHeadType(null);
    setOicType(null);
    setStep(1);
    setSelectedItems([]);
  };

  // Confirmation Pop-up logic
  const confirmAction = (actionType: "approve" | "reject") => {
    confirmDialog({
      message: `Are you sure you want to ${actionType} the selected requests?`,
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Yes",
      rejectLabel: "No",
      accept: () => {
        console.log(`${actionType} successful`);
      },
      reject: () => {
        console.log("Action cancelled");
      },
    });
  };

  return (
    <PageLayout title="Budget Approval Process (Approval Authority)">
      <ConfirmDialog />{" "}
      {/* Hidden dialog component that pops up when triggered */}
      <div className="bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600">
              Select Financial Year*
            </label>
            <Dropdown
              value={financialYear}
              options={financialYearOptions}
              onChange={(e) => setFinancialYear(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600">
              Select Month*
            </label>
            <Dropdown
              value={month}
              options={monthOptions}
              onChange={(e) => setMonth(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600">
              Select Head Type*
            </label>
            <Dropdown
              value={headType}
              options={headTypeOptions}
              onChange={(e) => setHeadType(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600">
              Select OIC Type*
            </label>
            <Dropdown
              value={oicType}
              options={oicOptions}
              onChange={(e) => setOicType(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {(oicType === "University" || oicType === "College") && (
            <>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Select Division Name*
                </label>
                <Dropdown
                  value={division}
                  options={divisionOptions}
                  onChange={(e) => setDivision(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Select District Name*
                </label>
                <Dropdown
                  value={district}
                  options={districtOptions}
                  onChange={(e) => setDistrict(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Select Block Name*
                </label>
                <Dropdown
                  value={block}
                  options={blockOptions}
                  onChange={(e) => setBlock(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Select University Name*
                </label>
                <Dropdown
                  value={university}
                  options={universityOptions}
                  onChange={(e) => setUniversity(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full"
                />
              </div>
            </>
          )}
          {oicType === "College" && (
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600">
                Select College Name*
              </label>
              <Dropdown
                value={college}
                options={collegeOptions}
                onChange={(e) => setCollege(e.value)}
                placeholder="Select"
                className="p-inputtext-sm w-full"
              />
            </div>
          )}
          {oicType === "Office" && (
            <>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Select Office Type*
                </label>
                <Dropdown
                  value={officeType}
                  options={officeTypeOptions}
                  onChange={(e) => setOfficeType(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600">
                  Select Office Name*
                </label>
                <Dropdown
                  value={officeName}
                  options={officeNameOptions}
                  onChange={(e) => setOfficeName(e.value)}
                  placeholder="Select"
                  className="p-inputtext-sm w-full"
                />
              </div>
            </>
          )}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-sm px-8"
            style={{ backgroundColor: "#6366f1" }}
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-sm px-8 p-button-danger p-button-outlined"
            onClick={handleClear}
          />
        </div>
      </div>
      {step === 2 && (
        <div className="bg-white mt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md font-bold text-gray-700">
              Budget Approval Process Detail
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-sm">Search:</span>
              <InputText className="p-inputtext-sm w-48" />
            </div>
          </div>

          <DataTable
            value={budgetData}
            className="p-datatable-sm"
            showGridlines
            selection={selectedItems}
            onSelectionChange={(e) => setSelectedItems(e.value)}
          >
            <Column field="srNo" header="Sr. No." sortable />
            <Column
              header="Action"
              body={(rowData) => (
                <Checkbox
                  checked={selectedItems.some(
                    (item) => item.srNo === rowData.srNo
                  )}
                  onChange={(e) => {
                    let _selectedItems = [...selectedItems];
                    if (e.checked) _selectedItems.push(rowData);
                    else
                      _selectedItems = _selectedItems.filter(
                        (item) => item.srNo !== rowData.srNo
                      );
                    setSelectedItems(_selectedItems);
                  }}
                />
              )}
            />
            <Column field="headType" header="Head Type" sortable />
            <Column field="budgetHeadName" header="Budget Head Name" sortable />
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
                <span className="px-2 py-1 rounded text-xs font-bold bg-red-100 text-red-600">
                  {data.status}
                </span>
              )}
            />
          </DataTable>

          <div className="flex justify-between p-3 bg-gray-50  font-bold text-sm">
            <span>Total</span>
            <span className="mr-32">743054.00</span>
          </div>

          {/* FOOTER ACTION BUTTONS */}
          <div className="flex justify-center gap-3 mt-8">
            <Button
              label="Approve"
              className="p-button-sm px-8 p-button-success p-button-outlined"
              onClick={() => confirmAction("approve")}
            />
            <Button
              label="Reject"
              className="p-button-sm px-8 p-button-danger p-button-outlined"
              onClick={() => confirmAction("reject")}
            />
            <Button
              label="Clear"
              className="p-button-sm px-8 p-button-danger p-button-outlined"
              onClick={() => setSelectedItems([])}
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default BudgetApprovalProcess;
