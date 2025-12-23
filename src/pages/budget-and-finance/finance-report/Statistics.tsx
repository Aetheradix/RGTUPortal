import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";

interface StatisticsData {
  voucherName: string;
  totalVoucher: string;
  typeOfAccounts: string;
  totalNoOfAccounts: string;
}

const Statistics: React.FC = () => {
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
  const statsData: StatisticsData[] = [
    {
      voucherName: "Adjustments Voucher",
      totalVoucher: "27",
      typeOfAccounts: "",
      totalNoOfAccounts: "",
    },
    {
      voucherName: "Faculty Training Voucher",
      totalVoucher: "85",
      typeOfAccounts: "Technical Ledgers",
      totalNoOfAccounts: "277",
    },
    {
      voucherName: "Fee Receipt Voucher",
      totalVoucher: "497",
      typeOfAccounts: "Currencies",
      totalNoOfAccounts: "1",
    },
    {
      voucherName: "GST Service Purchase Voucher",
      totalVoucher: "441",
      typeOfAccounts: "Stock Items",
      totalNoOfAccounts: "4408",
    },
    {
      voucherName: "Laboratory Equipment Purchase Voucher",
      totalVoucher: "0",
      typeOfAccounts: "Technical Groups",
      totalNoOfAccounts: "168",
    },
    {
      voucherName: "Payment Voucher",
      totalVoucher: "0",
      typeOfAccounts: "Voucher Types",
      totalNoOfAccounts: "8",
    },
    {
      voucherName: "Salary Payment Voucher",
      totalVoucher: "1464",
      typeOfAccounts: "Units",
      totalNoOfAccounts: "21",
    },
    {
      voucherName: "Student Fee Voucher",
      totalVoucher: "13",
      typeOfAccounts: "Stock Groups",
      totalNoOfAccounts: "77",
    },
    {
      voucherName: "Total",
      totalVoucher: "4537",
      typeOfAccounts: "",
      totalNoOfAccounts: "",
    },
  ];

  const handleSearch = () => {
    if (fromDate && toDate && oicType) {
      setStep(2);
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Statistics data loaded successfully",
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
    <PageLayout title="Statistics">
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
      {step === 2 && (
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 mt-6 animate-fade-in">
          <h2 className="text-md font-bold text-gray-700 mb-4 border-b pb-2">
            Statistics Details
          </h2>
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
                placeholder="Filter statistics..."
              />
            </div>
          </div>

          <DataTable
            value={statsData}
            className="p-datatable-sm"
            showGridlines
            paginator
            rows={10}
            responsiveLayout="scroll"
            rowClassName={(data) =>
              data.voucherName === "Total"
                ? "font-bold bg-gray-50 text-indigo-700"
                : ""
            }
          >
            <Column
              field="voucherName"
              header="Voucher Name"
              sortable
              body={(data) => (
                <span
                  className={
                    data.voucherName !== "Total"
                      ? "text-blue-600 cursor-pointer hover:underline font-medium"
                      : ""
                  }
                  onClick={() => {
                    if (data.voucherName !== "Total") {
                      toast.current?.show({
                        severity: "info",
                        summary: "Voucher Details",
                        detail: `Opening details for ${data.voucherName}`,
                        life: 2000,
                      });
                    }
                  }}
                >
                  {data.voucherName}
                </span>
              )}
            />
            <Column
              field="totalVoucher"
              header="Total Voucher"
              sortable
              className="text-right"
            />
            <Column field="typeOfAccounts" header="Type of Accounts" sortable />
            <Column
              field="totalNoOfAccounts"
              header="Total No. of Accounts"
              sortable
              className="text-right"
            />
          </DataTable>

          <div className="flex justify-between items-center mt-4 pt-2 border-t font-medium text-gray-500">
            <div className="text-xs">Showing 1 to 9 of 9 entries</div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Statistics;
