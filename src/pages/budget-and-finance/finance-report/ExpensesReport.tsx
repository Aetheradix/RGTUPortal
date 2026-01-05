import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

interface ExpensesReportData {
  srNo: number;
  mainLedgerTitle: string;
  descriptionMain: string;
  ledgerTitle: string;
  descriptionLedger: string;
  subLedgerTitle: string;
  descriptionSub: string;
  budgetEstimateLastYear: string;
  totalExpenditureLastYear: string;
  totalExpenditure: string;
}

const ExpensesReport: React.FC = () => {
  const [step, setStep] = useState(1);
  const toast = useRef<Toast>(null);

  // Filter States
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [headType, setHeadType] = useState<string | null>(null);
  const [budgetType, setBudgetType] = useState<string | null>(null);
  const [oicType, setOicType] = useState<string | null>(null);

  // Dynamic OIC Filter States
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

  // Mock Data
  const reportData: ExpensesReportData[] = [
    {
      srNo: 1,
      mainLedgerTitle: "Technical College 1",
      descriptionMain: "Infrastructure Expenses",
      ledgerTitle: "10.02",
      descriptionLedger: "Maintenance",
      subLedgerTitle: "10.02.01",
      descriptionSub: "Building Repairs",
      budgetEstimateLastYear: "2050130000.00",
      totalExpenditureLastYear: "104323299.00",
      totalExpenditure: "12290955.00",
    },
    {
      srNo: 2,
      mainLedgerTitle: "Technical College 2",
      descriptionMain: "Academic Salaries",
      ledgerTitle: "10.05",
      descriptionLedger: "Payroll",
      subLedgerTitle: "10.05.01",
      descriptionSub: "Faculty Basic Pay",
      budgetEstimateLastYear: "50000000.00",
      totalExpenditureLastYear: "48500000.00",
      totalExpenditure: "15000000.00",
    },
    {
      srNo: 3,
      mainLedgerTitle: "Technical College 3",
      descriptionMain: "Lab Consumables",
      ledgerTitle: "10.08",
      descriptionLedger: "Supplies",
      subLedgerTitle: "10.08.03",
      descriptionSub: "Chemicals & Glassware",
      budgetEstimateLastYear: "1200000.00",
      totalExpenditureLastYear: "950000.00",
      totalExpenditure: "200000.00",
    },
    {
      srNo: 4,
      mainLedgerTitle: "Technical College 4",
      descriptionMain: "Utility Costs",
      ledgerTitle: "10.11",
      descriptionLedger: "Electricity/Water",
      subLedgerTitle: "10.11.02",
      descriptionSub: "Electricity Bill",
      budgetEstimateLastYear: "2500000.00",
      totalExpenditureLastYear: "2400000.00",
      totalExpenditure: "800000.00",
    },
    {
      srNo: 5,
      mainLedgerTitle: "Technical College 5",
      descriptionMain: "IT Services",
      ledgerTitle: "10.12",
      descriptionLedger: "Connectivity",
      subLedgerTitle: "10.12.01",
      descriptionSub: "Internet Leased Line",
      budgetEstimateLastYear: "800000.00",
      totalExpenditureLastYear: "750000.00",
      totalExpenditure: "300000.00",
    },
    {
      srNo: 6,
      mainLedgerTitle: "Technical College 6",
      descriptionMain: "Student Welfare",
      ledgerTitle: "10.15",
      descriptionLedger: "Scholarships",
      subLedgerTitle: "10.15.01",
      descriptionSub: "Merit Scholarships",
      budgetEstimateLastYear: "1500000.00",
      totalExpenditureLastYear: "1400000.00",
      totalExpenditure: "500000.00",
    },
    {
      srNo: 7,
      mainLedgerTitle: "Technical College 7",
      descriptionMain: "Library Resources",
      ledgerTitle: "10.18",
      descriptionLedger: "E-Journals",
      subLedgerTitle: "10.18.05",
      descriptionSub: "Subscription Fees",
      budgetEstimateLastYear: "600000.00",
      totalExpenditureLastYear: "580000.00",
      totalExpenditure: "150000.00",
    },
    {
      srNo: 8,
      mainLedgerTitle: "Technical College 8",
      descriptionMain: "Transport Expenses",
      ledgerTitle: "10.20",
      descriptionLedger: "Vehicle Fuel",
      subLedgerTitle: "10.20.02",
      descriptionSub: "Diesel for Bus",
      budgetEstimateLastYear: "2000000.00",
      totalExpenditureLastYear: "1850000.00",
      totalExpenditure: "450000.00",
    },
    {
      srNo: 9,
      mainLedgerTitle: "Technical College 9",
      descriptionMain: "Audit Fees",
      ledgerTitle: "10.22",
      descriptionLedger: "Professional Services",
      subLedgerTitle: "10.22.01",
      descriptionSub: "Internal Audit",
      budgetEstimateLastYear: "300000.00",
      totalExpenditureLastYear: "250000.00",
      totalExpenditure: "0.00",
    },
    {
      srNo: 10,
      mainLedgerTitle: "Technical College 10",
      descriptionMain: "Staff Training",
      ledgerTitle: "10.25",
      descriptionLedger: "Development",
      subLedgerTitle: "10.25.04",
      descriptionSub: "Pedagogy Workshops",
      budgetEstimateLastYear: "450000.00",
      totalExpenditureLastYear: "400000.00",
      totalExpenditure: "120000.00",
    },
  ];

  const handleSearch = () => {
    if (selectedDate && headType && budgetType && oicType) {
      setStep(2);
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Expenses report fetched successfully",
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
    setSelectedDate(null);
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
    <PageLayout title="Expenses Report">
      <Toast ref={toast} />
      {/* SECTION 1: FILTER FORM (Step 1) */}
      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
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

        {/* Dynamic Row for OIC Specifics */}
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

      {/* SECTION 2: EXPENSES REPORT GRID (Step 2) */}
      {step === 2 && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-6 animate-fade-in">
          <div className="text-center mb-6">
            <h4 className="font-bold text-gray-700 text-lg">[Head Office]</h4>
            <p className="text-sm text-gray-600 font-medium italic">
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
            value={reportData}
            className="p-datatable-sm"
            showGridlines
            paginator
            rows={10}
            responsiveLayout="scroll"
          >
            <Column
              field="srNo"
              header="Sr No."
              body={(rowData) => (
                <div className="flex items-center gap-2 font-medium">
                  <i className="pi pi-plus-circle text-blue-600 cursor-pointer hover:text-blue-800 transition-colors"></i>
                  {rowData.srNo}
                </div>
              )}
            />
            <Column
              field="mainLedgerTitle"
              header="Main Ledger Title"
              sortable
            />
            <Column field="descriptionMain" header="Description" sortable />
            <Column field="ledgerTitle" header="Ledger Title" sortable />
            <Column field="descriptionLedger" header="Description" sortable />
            <Column field="subLedgerTitle" header="Sub Ledger Title" sortable />
            <Column field="descriptionSub" header="Description" sortable />
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
              field="totalExpenditure"
              header="Total Expenditure"
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

export default ExpensesReport;
