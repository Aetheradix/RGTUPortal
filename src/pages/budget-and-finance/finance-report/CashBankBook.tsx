import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

interface CashBankBookData {
  srNo: number;
  ledgerName: string;
  ledgerCode: string;
  gstNo: string;
  headName: string;
  createdOfficeName: string;
}

const CashBankBook: React.FC = () => {
  const [step, setStep] = useState(1);
  const toast = useRef<Toast>(null);

  // Filter States
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [oicType, setOicType] = useState<string | null>(null);

  // dropdowns
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);
  const [division, setDivision] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [block, setBlock] = useState<string | null>(null);
  const [university, setUniversity] = useState<string | null>(null);
  const [college, setCollege] = useState<string | null>(null);

  // Options
  const oicOptions = [
    { label: "Office", value: "Office" },
    { label: "College", value: "College" },
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

  // Mock Data
  const cashBankData: CashBankBookData[] = [
    {
      srNo: 1,
      ledgerName: "Laboratory Equipment Purchase",
      ledgerCode: "20.01.01",
      gstNo: "GST12345XYZ",
      headName: "Expenses",
      createdOfficeName: "Technical College",
    },
    {
      srNo: 2,
      ledgerName: "Faculty Training Program",
      ledgerCode: "20.01.02",
      gstNo: "GST67890ABC",
      headName: "Expenses",
      createdOfficeName: "Technical College",
    },
  ];

  const handleSearch = () => {
    if (fromDate && toDate && oicType) {
      setStep(2);
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Cash Bank book entries loaded",
        life: 3000,
      });
    } else {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Please select mandatory fields marked with *",
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
      detail: "Filters have been reset",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Cash Bank Book">
      <Toast ref={toast} />
      <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
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
              className="p-inputtext-sm w-full"
            />
          </div>
        </div>

        {/* DYNAMIC OIC ROW */}
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

      {/* SECTION 2: CASH BANK BOOK GRID */}
      {step === 2 && (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mt-6 animate-fade-in">
          <h2 className="text-md font-bold text-gray-700 mb-4 border-b pb-2">
            Cash Bank Book
          </h2>
          <div className="flex justify-between items-center mb-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-600">Show</span>
              <Dropdown
                value={10}
                options={[10, 25, 50]}
                className="p-inputtext-sm"
              />
              <span className="font-medium text-gray-600">entries</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-600">Search:</span>
              <InputText
                className="p-inputtext-sm w-48 border-gray-300"
                placeholder="Filter book..."
              />
            </div>
          </div>

          <DataTable
            value={cashBankData}
            className="p-datatable-sm"
            showGridlines
            paginator
            rows={10}
            responsiveLayout="scroll"
          >
            <Column
              field="srNo"
              header="Sr. No."
              sortable
              style={{ width: "5rem" }}
            />
            <Column
              field="ledgerName"
              header="Ledger Name"
              sortable
              className="font-medium"
            />
            <Column
              field="ledgerCode"
              header="Ledger Code"
              sortable
              className="text-indigo-600 font-semibold"
            />
            <Column field="gstNo" header="GST No." sortable />
            <Column field="headName" header="Head Name" sortable />
            <Column
              field="createdOfficeName"
              header="Created Office Name"
              sortable
            />
            <Column
              header="Action"
              style={{ width: "5rem", textAlign: "center" }}
              body={() => (
                <div className="flex justify-center">
                  <Button
                    icon="pi pi-eye"
                    text
                    className="p-button-rounded p-button-info p-button-sm"
                    onClick={() =>
                      toast.current?.show({
                        severity: "info",
                        summary: "View",
                        detail: "Opening book details...",
                        life: 2000,
                      })
                    }
                  />
                </div>
              )}
            />
          </DataTable>

          <div className="flex justify-between items-center mt-4 pt-2 border-t font-medium text-gray-500">
            <div className="text-xs">Showing 1 to 2 of 2 entries</div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default CashBankBook;
