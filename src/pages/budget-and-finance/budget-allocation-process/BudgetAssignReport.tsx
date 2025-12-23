import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

interface BudgetAssignReportData {
  srNo: number;
  assignDate: string;
  budgetLetterNo: string;
  totalAssignLimit: string;
  numberOfOffices: number;
  letterDetail: string;
}

const BudgetAssignReport: React.FC = () => {
  const [step, setStep] = useState(1);
  const toast = useRef<Toast>(null);

  // Filter States - Reusing logic with Date fields
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [oicType, setOicType] = useState<string | null>(null);

  // Dynamic OIC Filter States
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);
  const [division, setDivision] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [block, setBlock] = useState<string | null>(null);
  const [university, setUniversity] = useState<string | null>(null);
  const [college, setCollege] = useState<string | null>(null);

  // Options
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

  // Table Data based on Image 53
  const assignReportData: BudgetAssignReportData[] = [
    {
      srNo: 1,
      assignDate: "01-Apr-2024",
      budgetLetterNo: "BL12345",
      totalAssignLimit: "₹50,00,000",
      numberOfOffices: 5,
      letterDetail: "Allocation for infrastructure development",
    },
    {
      srNo: 2,
      assignDate: "10-Apr-2024",
      budgetLetterNo: "BL12346",
      totalAssignLimit: "₹30,00,000",
      numberOfOffices: 3,
      letterDetail: "Allocation for digital learning resources",
    },
    {
      srNo: 3,
      assignDate: "15-Apr-2024",
      budgetLetterNo: "BL12347",
      totalAssignLimit: "₹40,00,000",
      numberOfOffices: 4,
      letterDetail: "Teacher training and professional development",
    },
    {
      srNo: 4,
      assignDate: "20-Apr-2024",
      budgetLetterNo: "BL12348",
      totalAssignLimit: "₹35,00,000",
      numberOfOffices: 2,
      letterDetail: "Allocation for science lab modernization",
    },
    {
      srNo: 5,
      assignDate: "25-Apr-2024",
      budgetLetterNo: "BL12349",
      totalAssignLimit: "₹25,00,000",
      numberOfOffices: 6,
      letterDetail: "IT infrastructure maintenance and upgrades",
    },
  ];

  const handleSearch = () => {
    if (fromDate && toDate && oicType) {
      setStep(2);
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Budget assign report loaded successfully.",
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Validation Error",
        detail: "Please fill all mandatory fields marked with *",
        life: 3000,
      });
    }
  };

  const handleClear = () => {
    setFromDate(null);
    setToDate(null);
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

  return (
    <PageLayout title="Budget Assign Report">
      <Toast ref={toast} />
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
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

        {/* Dynamic OIC Filters */}
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
                className="p-inputtext-sm w-full border-gray-300"
              />
            </div>
          )}
        </div>

        {/* Action Buttons Aligned LEFT */}
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
            Budget Assign Report List
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
              <InputText className="p-inputtext-sm w-48 border-gray-300" placeholder="Filter details..." />
            </div>
          </div>

          <DataTable
            value={assignReportData}
            className="p-datatable-sm"
            showGridlines
            paginator
            rows={10}
            responsiveLayout="scroll"
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
            <Column field="assignDate" header="Assign Date" sortable />
            <Column
              field="budgetLetterNo"
              header="Budget Letter No."
              sortable
            />
            <Column
              field="totalAssignLimit"
              header="Total Assign Limit"
              sortable
            />
            <Column
              field="numberOfOffices"
              header="Number of Offices"
              sortable
            />
            <Column field="letterDetail" header="Letter Detail" sortable />
            <Column
              header="View Letter"
              style={{ textAlign: "center", width: "100px" }}
              body={() => (
                <Button
                  icon="pi pi-eye"
                  text
                  className="p-button-rounded p-button-info"
                  onClick={() => toast.current?.show({ severity: 'info', summary: 'View', detail: 'Displaying Letter Details', life: 2000 })}
                />
              )}
            />
          </DataTable>
        </div>
      )}
    </PageLayout>
  );
};

export default BudgetAssignReport;