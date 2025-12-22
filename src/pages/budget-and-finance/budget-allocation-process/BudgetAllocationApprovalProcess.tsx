import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";

interface BudgetApprovalProcessData {
  srNo: number;
  officeType: string;
  officeName: string;
  processAmount: string;
}

const BudgetAllocationApprovalProcess: React.FC = () => {
  const [step, setStep] = useState(1);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedItems, setSelectedItems] = useState<any[]>([]);

  // Filter States - Reusing logic with new Date fields (Image 52)
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
  ];
  const collegeOptions = [{ label: "M.L.B. Girls PG College", value: "MLB" }];

  // Table Data based on Image 52
  const approvalData: BudgetApprovalProcessData[] = [
    {
      srNo: 1,
      officeType: "Directorate of Technical Education",
      officeName: "Directorate of Technical Education (DTE)",
      processAmount: "₹15,00,000",
    },
    {
      srNo: 2,
      officeType: "Technical University",
      officeName: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
      processAmount: "₹20,00,000",
    },
    {
      srNo: 3,
      officeType: "Skill Development & Employment Board",
      officeName:
        "MP State Skill Development & Employment Generation Board (MPSSDEGB)",
      processAmount: "₹12,00,000",
    },
    {
      srNo: 4,
      officeType: "Regulatory Body",
      officeName: "AICTE Regional Office",
      processAmount: "₹10,00,000",
    },
    {
      srNo: 5,
      officeType: "Skill Development & Employment Board",
      officeName:
        "MP State Skill Development & Employment Generation Board (Regional Office)",
      processAmount: "₹8,00,000",
    },
  ];

  const handleSearch = () => setStep(2);

  const handleClear = () => {
    setFromDate(null);
    setToDate(null);
    setOicType(null);
    setStep(1);
    setSelectedItems([]);
  };

  return (
    <PageLayout title="Budget Allocation Approval Process">
      <div className="bg-white ">
        {/* MINI FORM START (Reused Logic) */}
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
              Select To Date
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

        {/* Dynamic OIC Filters */}
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

      {/* FRESH GRID SECTION (Image 52) */}
      {step === 2 && (
        <div className="bg-white mt-6 ">
          <h3 className="text-md font-bold text-gray-700 mb-4">
            Budget Allocation Approval Process
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
              <InputText className="p-inputtext-sm w-48" />
            </div>
          </div>

          <DataTable
            value={approvalData}
            className="p-datatable-sm"
            showGridlines
            paginator
            rows={10}
            selection={selectedItems}
            onSelectionChange={(e) => setSelectedItems(e.value)}
          >
            <Column
              header="Select"
              body={(rowData) => (
                <Checkbox
                  checked={selectedItems.some(
                    (item) => item.srNo === rowData.srNo
                  )}
                  onChange={(e) => {
                    let _selectedItems = [...selectedItems];
                    if (e.checked) _selectedItems.push(rowData);
                    else
                      _selectedItems = _selectedItems.filter(
                        (item) => item.srNo !== rowData.srNo
                      );
                    setSelectedItems(_selectedItems);
                  }}
                />
              )}
              style={{ width: "3rem", textAlign: "center" }}
            />
            <Column field="srNo" header="Sr No." sortable />
            <Column field="officeType" header="Office Type" sortable />
            <Column field="officeName" header="Office Name" sortable />
            <Column
              field="processAmount"
              header="Budget Allocation Approval Process Amount"
              sortable
            />
          </DataTable>

          {/* FOOTER BUTTONS */}
          <div className="flex justify-center gap-3 mt-8">
            <Button
              label="Generate Letter"
              className="p-button-sm px-10"
              style={{ backgroundColor: "#6366f1" }}
            />
            <Button
              label="Clear"
              className="p-button-sm px-10 p-button-danger"
              onClick={() => setSelectedItems([])}
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default BudgetAllocationApprovalProcess;
