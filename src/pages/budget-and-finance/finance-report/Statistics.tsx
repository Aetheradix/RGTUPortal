import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";

interface StatisticsData {
  voucherName: string;
  totalVoucher: string;
  typeOfAccounts: string;
  totalNoOfAccounts: string;
}

const Statistics: React.FC = () => {
  const [step, setStep] = useState(1);

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

  const handleSearch = () => setStep(2);

  const handleClear = () => {
    setFromDate(null);
    setToDate(null);
    setOicType(null);
    setOfficeType(null);
    setOfficeName(null);
    setStep(1);
  };

  return (
    <PageLayout title="Statistics">
      <div className="bg-white p-4 shadow-sm rounded">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600">
              Select From Date*
            </label>
            <Calendar
              value={fromDate}
              onChange={(e) => setFromDate(e.value as Date)}
              placeholder="dd/mm/yyyy"
              className="p-inputtext-sm w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600">
              Select To Date*
            </label>
            <Calendar
              value={toDate}
              onChange={(e) => setToDate(e.value as Date)}
              placeholder="dd/mm/yyyy"
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
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-6 overflow-x-auto">
          <h2 className="text-md font-bold text-gray-700 mb-4 border-b pb-2">
            Statistics
          </h2>
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
              <InputText className="p-inputtext-sm w-48" />
            </div>
          </div>

          <DataTable
            value={statsData}
            className="p-datatable-sm"
            showGridlines
            paginator
            rows={10}
            rowClassName={(data) =>
              data.voucherName === "Total" ? "font-bold bg-gray-50" : ""
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
                      ? "text-blue-600 cursor-pointer hover:underline"
                      : ""
                  }
                >
                  {data.voucherName}
                </span>
              )}
            />
            <Column field="totalVoucher" header="Total Voucher" sortable />
            <Column field="typeOfAccounts" header="Type of Accounts" sortable />
            <Column
              field="totalNoOfAccounts"
              header="Total No. of Accounts"
              sortable
            />
          </DataTable>

          <div className="flex justify-between items-center mt-4">
            <div className="text-xs text-gray-500">
              Showing 1 to 9 of 9 entries
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default Statistics;
