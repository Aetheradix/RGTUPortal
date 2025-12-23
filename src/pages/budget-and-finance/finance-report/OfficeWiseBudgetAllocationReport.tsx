import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

interface OfficeWiseAllocationData {
  srNo: number;
  officeType: string;
  officeName: string;
  budgetEstimateLastYear: string;
  totalExpenditureLastYear: string;
  totalAllocation: string;
}

const OfficeWiseBudgetAllocationReport: React.FC = () => {
  const [step, setStep] = useState(1);
  const toast = useRef<Toast>(null);

  // dropdowns
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [headType, setHeadType] = useState<string | null>(null);
  const [budgetType, setBudgetType] = useState<string | null>(null);
  const [oicType, setOicType] = useState<string | null>(null);

  // Dynamic Filter
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);
  const [division, setDivision] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [block, setBlock] = useState<string | null>(null);
  const [university, setUniversity] = useState<string | null>(null);

  // Options
  const headTypeOptions = [
    { label: "Expense", value: "Expense" },
    { label: "Income", value: "Income" },
  ];
  const budgetTypeOptions = [
    { label: "Non-Plan Budget", value: "Non-Plan" },
    { label: "Plan Budget", value: "Plan" },
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

  // 10 Mock Data entries matching Image 64/65
  const reportData: OfficeWiseAllocationData[] = [
    {
      srNo: 1,
      officeType: "Directorate of Technical Education",
      officeName: "Directorate of Technical Education (DTE)",
      budgetEstimateLastYear: "2050130000.00",
      totalExpenditureLastYear: "104323299.00",
      totalAllocation: "12290955.00",
    },
    {
      srNo: 2,
      officeType: "Technical University",
      officeName: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
      budgetEstimateLastYear: "50000000.00",
      totalExpenditureLastYear: "48500000.00",
      totalAllocation: "15000000.00",
    },
    {
      srNo: 3,
      officeType: "College Level",
      officeName: "M.L.B. Girls PG College",
      budgetEstimateLastYear: "1200000.00",
      totalExpenditureLastYear: "950000.00",
      totalAllocation: "200000.00",
    },
    {
      srNo: 4,
      officeType: "Technical University",
      officeName: "Barkatullah University (BU)",
      budgetEstimateLastYear: "2500000.00",
      totalExpenditureLastYear: "2400000.00",
      totalAllocation: "800000.00",
    },
    {
      srNo: 5,
      officeType: "Directorate",
      officeName: "Directorate Office Unit A",
      budgetEstimateLastYear: "800000.00",
      totalExpenditureLastYear: "750000.00",
      totalAllocation: "300000.00",
    },
    {
      srNo: 6,
      officeType: "Regional Office",
      officeName: "DTE Regional Office Bhopal",
      budgetEstimateLastYear: "1500000.00",
      totalExpenditureLastYear: "1400000.00",
      totalAllocation: "500000.00",
    },
    {
      srNo: 7,
      officeType: "College Level",
      officeName: "Government Polytechnic College",
      budgetEstimateLastYear: "600000.00",
      totalExpenditureLastYear: "580000.00",
      totalAllocation: "150000.00",
    },
    {
      srNo: 8,
      officeType: "Engineering College",
      officeName: "SATI Engineering College",
      budgetEstimateLastYear: "2000000.00",
      totalExpenditureLastYear: "1850000.00",
      totalAllocation: "450000.00",
    },
    {
      srNo: 9,
      officeType: "Technical University",
      officeName: "Jiwaji University (Technical Dept)",
      budgetEstimateLastYear: "300000.00",
      totalExpenditureLastYear: "250000.00",
      totalAllocation: "0.00",
    },
    {
      srNo: 10,
      officeType: "Regional Office",
      officeName: "DTE Regional Office Indore",
      budgetEstimateLastYear: "450000.00",
      totalExpenditureLastYear: "400000.00",
      totalAllocation: "120000.00",
    },
  ];

  const handleSearch = () => {
    if (fromDate && toDate && headType && budgetType && oicType) {
      setStep(2);
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Report generated successfully",
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please fill all mandatory fields marked with *",
        life: 3000,
      });
    }
  };

  const handleClear = () => {
    setOicType(null);
    setFromDate(null);
    setToDate(null);
    setHeadType(null);
    setBudgetType(null);
    setOfficeType(null);
    setOfficeName(null);
    setDivision(null);
    setDistrict(null);
    setBlock(null);
    setUniversity(null);
    setStep(1);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Filters reset successfully",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Office Wise Budget Allocation Report">
      <Toast ref={toast} />
      <div className="bg-white p-6 shadow-sm rounded border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-gray-600">
              Select From Date<span className="text-red-500">*</span>
            </label>
            <Calendar
              value={fromDate}
              onChange={(e) => setFromDate(e.value as Date)}
              placeholder="dd/mm/yyyy"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-gray-600">
              Select To Date<span className="text-red-500">*</span>
            </label>
            <Calendar
              value={toDate}
              onChange={(e) => setToDate(e.value as Date)}
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
              className="p-inputtext-sm w-full border-gray-300"
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
                  className="p-inputtext-sm w-full border-gray-300"
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
                  className="p-inputtext-sm w-full border-gray-300"
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
                  className="p-inputtext-sm w-full border-gray-300"
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
                  className="p-inputtext-sm w-full border-gray-300"
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
                  className="p-inputtext-sm w-full border-gray-300"
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
                  className="p-inputtext-sm w-full border-gray-300"
                />
              </div>
            </>
          )}
        </div>

        <div className="flex justify-start gap-3 mt-8">
          <Button
            label="Search"
            icon="pi pi-search"
            className="p-button-sm px-8"
            style={{ backgroundColor: "#6366f1", border: "none" }}
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
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mt-6 animate-fade-in">
          <div className="text-center mb-6">
            <h4 className="font-bold text-gray-700 text-lg">
              Office Wise Budget Allocation Report
            </h4>
            <p className="text-sm text-gray-600 italic">
              Period: 01-04-2024 To 31-03-2025
            </p>
          </div>

          <div className="flex justify-between items-center mb-4 text-sm">
            <div className="flex items-center gap-2 font-medium text-gray-600">
              <span>Show</span>
              <Dropdown
                value={10}
                options={[10, 25, 50]}
                className="p-inputtext-sm"
              />
              <span>entries</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-600">Search:</span>
              <InputText
                className="p-inputtext-sm w-48 border-gray-300"
                placeholder="Filter records..."
              />
            </div>
          </div>

          <DataTable
            paginator
            rows={10}
            value={reportData}
            className="p-datatable-sm"
            showGridlines
            responsiveLayout="scroll"
          >
            <Column
              field="srNo"
              header="Sr No."
              sortable
              style={{ width: "5rem" }}
            />
            <Column field="officeType" header="Office Type" sortable />
            <Column field="officeName" header="Office Name" sortable />
            <Column
              field="budgetEstimateLastYear"
              header="Budget Estimate (Last Financial Year)"
              sortable
              className="font-semibold text-right"
            />
            <Column
              field="totalExpenditureLastYear"
              header="Total Expenditure (Last Financial Year)"
              sortable
              className="font-semibold text-right"
            />
            <Column
              field="totalAllocation"
              header="Total Allocation"
              sortable
              className="font-bold text-right text-indigo-600"
            />
          </DataTable>

          <div className="text-xs text-gray-500 mt-4 font-medium border-t pt-2">
            Showing 1 to 10 of 10 entries
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default OfficeWiseBudgetAllocationReport;
