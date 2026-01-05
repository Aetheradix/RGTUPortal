import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { Toast } from "primereact/toast";

interface AlphabeticalLedgerData {
  ledgerName: string;
  openingBalance: string;
  debitAmount: string;
  creditAmount: string;
  closingBalance: string;
}

const AlphabeticalLedgerReport: React.FC = () => {
  const [step, setStep] = useState(1);
  const toast = useRef<Toast>(null);

  // Filter States
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [oicType, setOicType] = useState<string | null>(null);

  // Checkbox
  const [openingBal, setOpeningBal] = useState<boolean>(false);
  const [transaction, setTransaction] = useState<boolean>(false);
  const [closingBal, setClosingBal] = useState<boolean>(false);

  // Dropdowns
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);
  const [division, setDivision] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [block, setBlock] = useState<string | null>(null);
  const [university, setUniversity] = useState<string | null>(null);

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

  // Mock Data
  const reportData: AlphabeticalLedgerData[] = [
    {
      ledgerName: "Laboratory Equipment Fund",
      openingBalance: "13125550.12 Dr.",
      debitAmount: "",
      creditAmount: "",
      closingBalance: "13125550.12 Dr.",
    },
    {
      ledgerName: "Research Grant Payment",
      openingBalance: "1083704.86 Cr.",
      debitAmount: "",
      creditAmount: "",
      closingBalance: "1083704.86 Cr.",
    },
    {
      ledgerName: "Research Grant Payment",
      openingBalance: "12875888.00 Dr.",
      debitAmount: "",
      creditAmount: "",
      closingBalance: "12875888.00 Dr.",
    },
    {
      ledgerName: "Scholarship Payment",
      openingBalance: "1415352.68 Dr.",
      debitAmount: "",
      creditAmount: "",
      closingBalance: "1415352.68 Dr.",
    },
    {
      ledgerName: "Scholarship Payment",
      openingBalance: "38881260.97 Cr.",
      debitAmount: "",
      creditAmount: "",
      closingBalance: "38881260.97 Cr.",
    },
    {
      ledgerName: "Student Fee Fund",
      openingBalance: "26005372.97 Dr.",
      debitAmount: "",
      creditAmount: "",
      closingBalance: "26005372.97 Dr.",
    },
  ];

  const handleSearch = () => {
    if (fromDate && toDate && oicType) {
      setStep(2);
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Ledger report generated successfully",
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
    setOfficeType(null);
    setOfficeName(null);
    setDivision(null);
    setDistrict(null);
    setBlock(null);
    setUniversity(null);
    setOpeningBal(false);
    setTransaction(false);
    setClosingBal(false);
    setStep(1);
    toast.current?.show({
      severity: "info",
      summary: "Cleared",
      detail: "Filters reset successfully",
      life: 2000,
    });
  };

  return (
    <PageLayout title="Alphabetical Ledger Report">
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
              className="p-inputtext-sm w-full border-gray-300"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center border-t pt-4">
          <span className="text-sm font-bold text-gray-600">
            Filter Amount:
          </span>
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="cb1"
              onChange={(e) => setOpeningBal(e.checked ?? false)}
              checked={openingBal}
            />
            <label htmlFor="cb1" className="text-sm font-bold text-gray-600">
              Opening Bal.
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="cb2"
              onChange={(e) => setTransaction(e.checked ?? false)}
              checked={transaction}
            />
            <label htmlFor="cb2" className="text-sm font-bold text-gray-600">
              Transaction
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="cb3"
              onChange={(e) => setClosingBal(e.checked ?? false)}
              checked={closingBal}
            />
            <label htmlFor="cb3" className="text-sm font-bold text-gray-600">
              Closing Bal.
            </label>
          </div>
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
          <h2 className="text-md font-bold text-gray-700 mb-4 border-b pb-2">
            Alphabetical Ledger Report Details
          </h2>
          <div className="text-center mb-6">
            <h4 className="font-bold text-gray-700 text-lg">
              Alphabetical Trial Balance
            </h4>
            <p className="text-sm font-semibold text-gray-600">
              Directorate of Technical Education
            </p>
            <p className="text-sm text-gray-600 font-bold">[Head Office]</p>
            <p className="text-xs text-gray-500 italic">
              Period: 01-04-2024 To 31-06-2023
            </p>
          </div>

          <div className="flex justify-between items-center mb-4 text-sm font-medium text-gray-600">
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
              field="ledgerName"
              header="Ledger Name"
              sortable
              body={(data) => (
                <span className="text-blue-600 font-medium cursor-pointer hover:underline">
                  {data.ledgerName}
                </span>
              )}
            />
            <Column
              field="openingBalance"
              header="Opening Balance"
              sortable
              className="text-right"
            />
            <Column
              field="debitAmount"
              header="Transaction [Debit Amount]"
              sortable
              className="text-right"
            />
            <Column
              field="creditAmount"
              header="Transaction [Credit Amount]"
              sortable
              className="text-right"
            />
            <Column
              field="closingBalance"
              header="Closing Balance"
              sortable
              className="text-right font-bold text-indigo-600"
            />
          </DataTable>

          <div className="text-xs text-gray-500 mt-4 font-medium border-t pt-2">
            Showing 1 to 6 of 6 entries
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default AlphabeticalLedgerReport;
