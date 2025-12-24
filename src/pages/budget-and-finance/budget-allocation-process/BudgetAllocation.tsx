import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

interface BudgetAllocationData {
  srNo: number;
  mainAccountTitle: string;
  descriptionMain: string;
  accountTitle: string;
  descriptionAccount: string;
  subAccountTitle: string;
  budgetHeadName: string;
  expenditureLastYear: string;
  amountRequested: string;
}

const BudgetAllocation: React.FC = () => {
  const [step, setStep] = useState(1);
  const toast = useRef<Toast>(null);

  // Filter States
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    new Date(1923, 11, 12)
  );
  const [headType, setHeadType] = useState<string | null>("Expense");
  const [budgetType, setBudgetType] = useState<string | null>(
    "Non-Plan Budget"
  );
  const [oicType, setOicType] = useState<string | null>("Office");

  // Dynamic Filter States
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);
  const [division, setDivision] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [block, setBlock] = useState<string | null>(null);
  const [university, setUniversity] = useState<string | null>(null);
  const [college, setCollege] = useState<string | null>(null);

  // Options
  const headTypeOptions = [
    { label: "Expense", value: "Expense" },
    { label: "Income", value: "Income" },
  ];
  const budgetTypeOptions = [
    { label: "Non-Plan Budget", value: "Non-Plan Budget" },
    { label: "Plan Budget", value: "Plan Budget" },
  ];
  const oicOptions = [
    { label: "College", value: "College" },
    { label: "Office", value: "Office" },
    { label: "University", value: "University" },
  ];

  const officeTypeOptions = [{ label: "Directorate", value: "DIR" }];
  const officeNameOptions = [
    { label: "Directorate of Technical Education (DTE)", value: "DTE" },
  ];
  const divisionOptions = [{ label: "Bhopal Division", value: "Bhopal" }];
  const districtOptions = [{ label: "Bhopal District", value: "Bhopal_Dist" }];
  const blockOptions = [{ label: "Phanda Block", value: "Phanda" }];
  const universityOptions = [
    { label: "Barkatullah University (BU)", value: "BU" },
  ];
  const collegeOptions = [{ label: "M.L.B. Girls PG College", value: "MLB" }];

  const allocationData: BudgetAllocationData[] = [
    {
      srNo: 1,
      mainAccountTitle: "Education Department",
      descriptionMain: "Budget for technical training",
      accountTitle: "Skill Development",
      descriptionAccount: "Programs for enhancing skills",
      subAccountTitle: "Technical Training",
      budgetHeadName: "Training Infrastructure",
      expenditureLastYear: "₹15,00,000",
      amountRequested: "₹12,00,000",
    },
    {
      srNo: 3,
      mainAccountTitle: "Education Department",
      descriptionMain: "Budget for lab upgradation",
      accountTitle: "Lab Equipment",
      descriptionAccount: "Upgradation of technical labs",
      subAccountTitle: "Workshop Training",
      budgetHeadName: "Laboratory Facilities",
      expenditureLastYear: "₹20,00,000",
      amountRequested: "₹18,00,000",
    },
    {
      srNo: 4,
      mainAccountTitle: "Education Department",
      descriptionMain: "Budget for faculty improvement",
      accountTitle: "Faculty Development",
      descriptionAccount: "Training for teaching staff",
      subAccountTitle: "Professional Development",
      budgetHeadName: "Staff Training",
      expenditureLastYear: "₹12,00,000",
      amountRequested: "₹10,00,000",
    },
    {
      srNo: 5,
      mainAccountTitle: "Education Department",
      descriptionMain: "Budget for IT infrastructure",
      accountTitle: "IT Infrastructure",
      descriptionAccount: "Licenses for software",
      subAccountTitle: "Software Licenses",
      budgetHeadName: "Technology Support",
      expenditureLastYear: "₹8,00,000",
      amountRequested: "₹5,00,000",
    },
    {
      srNo: 2,
      mainAccountTitle: "Education Department",
      descriptionMain: "Budget for online learning",
      accountTitle: "E-Learning",
      descriptionAccount: "Digital education infrastructure",
      subAccountTitle: "Online Courses",
      budgetHeadName: "IT Support",
      expenditureLastYear: "₹10,00,000",
      amountRequested: "₹8,00,000",
    },
  ];

  const handleSearch = () => {
    setStep(2);
    toast.current?.show({
      severity: "success",
      summary: "Search Complete",
      detail: "Budget allocation records loaded.",
      life: 3000,
    });
  };

  const handleClear = () => {
    setOicType(null);
    setOfficeType(null);
    setOfficeName(null);
    setDivision(null);
    setDistrict(null);
    setBlock(null);
    setUniversity(null);
    setCollege(null);
    setStep(1);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Filters have been reset.",
      life: 2000,
    });
  };

  const handleSave = () => {
    toast.current?.show({
      severity: "success",
      summary: "Saved",
      detail: "Budget allocation saved successfully.",
      life: 3000,
    });
  };

  return (
    <PageLayout title="Budget Allocation">
      <Toast ref={toast} />

      <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-gray-600">
              Select Date<span className="text-red-500">*</span>
            </label>
            <Calendar
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.value as Date)}
              placeholder="dd/mm/yyyy"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-gray-600">
              Head Type<span className="text-red-500">*</span>
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
            <label className="text-sm font-bold text-gray-600">
              Budget Type<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={budgetType}
              options={budgetTypeOptions}
              onChange={(e) => setBudgetType(e.value)}
              placeholder="Select"
              className="p-inputtext-sm w-full"
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
              className="p-inputtext-sm w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {oicType === "Office" && (
            <>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select Office Type<span className="text-red-500">*</span>
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
                <label className="text-sm font-bold text-gray-600">
                  Select Office Name<span className="text-red-500">*</span>
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
          {(oicType === "University" || oicType === "College") && (
            <>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select Division Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={division}
                  options={divisionOptions}
                  onChange={(e) => setDivision(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select District Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={district}
                  options={districtOptions}
                  onChange={(e) => setDistrict(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select Block Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={block}
                  options={blockOptions}
                  onChange={(e) => setBlock(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-600">
                  Select University Name<span className="text-red-500">*</span>
                </label>
                <Dropdown
                  value={university}
                  options={universityOptions}
                  onChange={(e) => setUniversity(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
            </>
          )}
          {oicType === "College" && (
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-600">
                Select College Name<span className="text-red-500">*</span>
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
        </div>

        {/* Action Buttons - Left Aligned */}
        <div className="flex gap-3 mt-8">
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
        <div className="bg-white mt-6 p-4 rounded shadow-sm border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-4 text-sm">
            <h3 className="text-md font-bold text-gray-700">
              Allocation Details
            </h3>
            <div className="flex items-center gap-2">
              <span>Search:</span>
              <InputText
                className="p-inputtext-sm w-48"
                placeholder="Filter records"
              />
            </div>
          </div>

          <DataTable
            value={allocationData}
            className="p-datatable-sm"
            showGridlines
            paginator
            rows={10}
          >
            <Column
              field="srNo"
              header="Sr. No."
              body={(rowData) => (
                <div className="flex items-center gap-2">
                  <i className="pi pi-plus-circle text-blue-600 cursor-pointer"></i>
                  {rowData.srNo}
                </div>
              )}
            />
            <Column
              field="mainAccountTitle"
              header="Main Account Title"
              sortable
            />
            <Column field="descriptionMain" header="Description" />
            <Column field="accountTitle" header="Account Title" sortable />
            <Column field="descriptionAccount" header="Description" />
            <Column
              field="subAccountTitle"
              header="Sub-Account Title"
              sortable
            />
            <Column field="budgetHeadName" header="Budget Head Name" sortable />
            <Column
              field="expenditureLastYear"
              header="Expenditure Last Year"
            />
            <Column
              field="amountRequested"
              header="Amount Requested by Office"
            />
          </DataTable>

          {/* Table Footer Buttons - Left Aligned */}
          <div className="flex gap-3 mt-8 pt-4 border-t">
            <Button
              label="Save"
              icon="pi pi-check"
              className="p-button-sm px-10 p-button-primary"
              style={{ backgroundColor: "#6366f1" }}
              onClick={handleSave}
            />
            <Button
              label="Clear Selection"
              icon="pi pi-refresh"
              className="p-button-sm px-10 p-button-danger p-button-outlined"
              onClick={() =>
                toast.current?.show({
                  severity: "info",
                  summary: "Reset",
                  detail: "Table selections cleared.",
                  life: 2000,
                })
              }
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default BudgetAllocation;
