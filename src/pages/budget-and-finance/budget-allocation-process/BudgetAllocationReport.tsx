import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

interface BudgetReportData {
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

const BudgetAllocationReport: React.FC = () => {
  const [step, setStep] = useState(1);
  const toast = useRef<Toast>(null);

  // Filter States - Updated for Report
  const [fromDate, setFromDate] = useState<Date | null>(new Date(2025, 11, 21));
  const [toDate, setToDate] = useState<Date | null>(new Date(2025, 11, 22));
  const [headType, setHeadType] = useState<string | null>("Expense");
  const [oicType, setOicType] = useState<string | null>(null);

  // Dynamic Filter States (OIC Logic)
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
    { label: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)", value: "RGPV" },
  ];
  const collegeOptions = [{ label: "M.L.B. Girls PG College", value: "MLB" }];

  // Table Data
  const reportData: BudgetReportData[] = [
    {
      srNo: 1,
      mainAccountTitle: "Education Department",
      descriptionMain: "Infrastructure Development",
      accountTitle: "School Buildings",
      descriptionAccount: "Construction and renovation of schools",
      subAccountTitle: "Building Maintenance",
      budgetHeadName: "Infrastructure Development",
      expenditureLastYear: "₹20,00,000",
      amountRequested: "₹15,00,000",
    },
    {
      srNo: 2,
      mainAccountTitle: "Education Department",
      descriptionMain: "Digital Learning",
      accountTitle: "Online Resources",
      descriptionAccount: "Procurement of digital tools and platforms",
      subAccountTitle: "E-Learning Tools",
      budgetHeadName: "Digital Learning Support",
      expenditureLastYear: "₹12,00,000",
      amountRequested: "₹10,00,000",
    },
    {
      srNo: 3,
      mainAccountTitle: "Education Department",
      descriptionMain: "Teacher Training",
      accountTitle: "Workshops",
      descriptionAccount: "Training for teachers in new techniques",
      subAccountTitle: "Skill Development",
      budgetHeadName: "Professional Development",
      expenditureLastYear: "₹10,00,000",
      amountRequested: "₹8,00,000",
    },
    {
      srNo: 4,
      mainAccountTitle: "Education Department",
      descriptionMain: "Lab Upgradation",
      accountTitle: "Science Labs",
      descriptionAccount: "Modernization of lab equipment",
      subAccountTitle: "Laboratory Tools",
      budgetHeadName: "Technical Resources",
      expenditureLastYear: "₹18,00,000",
      amountRequested: "₹16,00,000",
    },
    {
      srNo: 5,
      mainAccountTitle: "Education Department",
      descriptionMain: "IT Support",
      accountTitle: "Hardware Maintenance",
      descriptionAccount: "Maintenance of computers and networking",
      subAccountTitle: "IT Infrastructure",
      budgetHeadName: "Technology Support",
      expenditureLastYear: "₹8,00,000",
      amountRequested: "₹6,50,000",
    },
  ];

  const handleSearch = () => {
    if (fromDate && toDate && headType && oicType) {
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
    setFromDate(null);
    setToDate(null);
    setOicType(null);
    setHeadType(null);
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
      summary: "Reset",
      detail: "Filters cleared successfully",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Budget Allocation Report">
      <Toast ref={toast} />
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
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

        {/* Dynamic OIC Inputs */}
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
                  className="p-inputtext-sm w-full"
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
                  className="p-inputtext-sm w-full"
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
                  className="p-inputtext-sm w-full"
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
                  className="p-inputtext-sm w-full"
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

        {/* Buttons Aligned LEFT */}
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
        <div className="bg-white mt-6 p-6 rounded-lg shadow-md border border-gray-100 animate-fade-in">
          <h3 className="text-md font-bold text-gray-700 mb-4">
            Budget Allocation Report Details
          </h3>
          <div className="flex justify-between items-center mb-4 text-sm">
            <div className="flex items-center gap-2">
              <span>Show</span>
              <Dropdown
                value={10}
                options={[10, 25, 50]}
                className="p-inputtext-sm"
              />
              <span>entries</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Search:</span>
              <InputText
                className="p-inputtext-sm w-48"
                placeholder="Search report..."
              />
            </div>
          </div>

          <DataTable
            value={reportData}
            className="p-datatable-sm"
            showGridlines
            paginator
            rows={10}
          >
            <Column
              field="srNo"
              header="Sr. No."
              style={{ width: "5rem" }}
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
            <Column field="descriptionMain" header="Description" sortable />
            <Column field="accountTitle" header="Account Title" sortable />
            <Column field="descriptionAccount" header="Description" sortable />
            <Column
              field="subAccountTitle"
              header="Sub-Account Title"
              sortable
            />
            <Column field="budgetHeadName" header="Budget Head Name" sortable />
            <Column
              field="expenditureLastYear"
              header="Expenditure Last Year"
              sortable
            />
            <Column
              field="amountRequested"
              header="Amount Requested by Office"
              sortable
            />
          </DataTable>
        </div>
      )}
    </PageLayout>
  );
};

export default BudgetAllocationReport;
