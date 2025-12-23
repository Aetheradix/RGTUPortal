import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

interface BudgetUtilizationData {
  srNo: number;
  mainAccountTitle: string;
  description: string;
  accountTitle: string;
  accountDescription: string;
  subAccountTitle: string;
  budgetHeadName: string;
  expenditureLastYear: string;
  amountRequested: string;
}

const BudgetUtilizationReport: React.FC = () => {
  const [step, setStep] = useState(1);
  const toast = useRef<Toast>(null);

  // Filter States
  const [academicYear, setAcademicYear] = useState<string | null>(null);
  const [month, setMonth] = useState<string | null>("June");
  const [headType, setHeadType] = useState<string | null>(null);
  const [oicType, setOicType] = useState<string | null>(null);

  // Dynamic OIC Filter States
  const [division, setDivision] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [block, setBlock] = useState<string | null>(null);
  const [university, setUniversity] = useState<string | null>(null);
  const [college, setCollege] = useState<string | null>(null);
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);

  // Options
  const academicYearOptions = [
    { label: "2024-2025", value: "2024-2025" },
    { label: "2023-2024", value: "2023-2024" },
  ];
  const monthOptions = [
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
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
  const utilizationData: BudgetUtilizationData[] = [
    {
      srNo: 1,
      mainAccountTitle: "Education Department",
      description: "Infrastructure Development",
      accountTitle: "School Buildings",
      accountDescription: "Construction and renovation of schools",
      subAccountTitle: "Building Maintenance",
      budgetHeadName: "Infrastructure Development",
      expenditureLastYear: "₹20,00,000",
      amountRequested: "₹15,00,000",
    },
    {
      srNo: 2,
      mainAccountTitle: "Education Department",
      description: "Digital Learning",
      accountTitle: "Online Resources",
      accountDescription: "Procurement of digital tools and platforms",
      subAccountTitle: "E-Learning Tools",
      budgetHeadName: "Digital Learning Support",
      expenditureLastYear: "₹12,00,000",
      amountRequested: "₹10,00,000",
    },
    {
      srNo: 3,
      mainAccountTitle: "Education Department",
      description: "Teacher Training",
      accountTitle: "Workshops",
      accountDescription: "Training for teachers in new techniques",
      subAccountTitle: "Skill Development",
      budgetHeadName: "Professional Development",
      expenditureLastYear: "₹10,00,000",
      amountRequested: "₹8,00,000",
    },
    {
      srNo: 4,
      mainAccountTitle: "Education Department",
      description: "Lab Upgradation",
      accountTitle: "Science Labs",
      accountDescription: "Modernization of lab equipment",
      subAccountTitle: "Laboratory Tools",
      budgetHeadName: "Technical Resources",
      expenditureLastYear: "₹18,00,000",
      amountRequested: "₹16,00,000",
    },
    {
      srNo: 5,
      mainAccountTitle: "Education Department",
      description: "IT Support",
      accountTitle: "Hardware Maintenance",
      accountDescription: "Maintenance of computers and networking",
      subAccountTitle: "IT Infrastructure",
      budgetHeadName: "Technology Support",
      expenditureLastYear: "₹8,00,000",
      amountRequested: "₹6,50,000",
    },
  ];

  const handleSearch = () => {
    if (academicYear && headType && oicType) {
      setStep(2);
      toast.current?.show({
        severity: "success",
        summary: "Search Successful",
        detail: "Utilization report has been generated.",
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
    setAcademicYear(null);
    setMonth("June");
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
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Filters have been reset successfully.",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Budget Utilization Report">
      <Toast ref={toast} />
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-bold text-gray-600">
              Select Academic Year<span className="text-red-500">*</span>
            </label>
            <Dropdown
              value={academicYear}
              options={academicYearOptions}
              onChange={(e) => setAcademicYear(e.value)}
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

        {/* Dynamic OIC Row */}
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

        {/* Buttons Aligned LEFT */}
        <div className="flex gap-2 mt-8">
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
        <div className="bg-white mt-6 p-6 rounded-lg shadow-md border border-gray-100 animate-fade-in">
          <h3 className="text-md font-bold text-gray-700 mb-4">
            Budget Utilization Report Details
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
                className="p-inputtext-sm w-48 border-gray-300"
                placeholder="Filter details..."
              />
            </div>
          </div>

          <DataTable
            value={utilizationData}
            className="p-datatable-sm"
            showGridlines
            paginator
            rows={10}
            responsiveLayout="scroll"
          >
            <Column
              field="srNo"
              header="Sr No."
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
            <Column field="description" header="Description" sortable />
            <Column field="accountTitle" header="Account Title" sortable />
            <Column
              field="accountDescription"
              header="Account Description"
              sortable
            />
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

export default BudgetUtilizationReport;
