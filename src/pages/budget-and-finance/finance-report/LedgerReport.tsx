import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

interface LedgerReportData {
  srNo: number;
  ledgerName: string;
  ledgerCode: string;
  gstNo: string;
  headName: string;
  createdOfficeName: string;
}

const LedgerReport: React.FC = () => {
  const [step, setStep] = useState(1);

  // Filter States
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
  const ledgerData: LedgerReportData[] = [
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

  const handleSearch = () => setStep(2);

  const handleClear = () => {
    setOicType(null);
    setOfficeType(null);
    setOfficeName(null);
    setStep(1);
  };

  return (
    <PageLayout title="Ledger Report">
      <div className="bg-white p-4 shadow-sm rounded">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
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
        <div className="flex justify-center gap-3 mt-4">
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
            Ledger Report
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
            value={ledgerData}
            className="p-datatable-sm"
            showGridlines
            paginator
            rows={10}
          >
            <Column field="srNo" header="Sr. No." sortable />
            <Column field="ledgerName" header="Ledger Name" sortable />
            <Column field="ledgerCode" header="Ledger Code" sortable />
            <Column field="gstNo" header="GST No." sortable />
            <Column field="headName" header="Head Name" sortable />
            <Column
              field="createdOfficeName"
              header="Created Office Name"
              sortable
            />
            <Column
              header="View"
              body={() => (
                <div className="flex justify-center">
                  <Button
                    icon="pi pi-eye"
                    className="p-button-rounded p-button-sm"
                    style={{ backgroundColor: "#6366f1", color: "white" }}
                  />
                </div>
              )}
            />
          </DataTable>
          <div className="flex justify-between items-center mt-4">
            <div className="text-xs text-gray-500">
              Showing 1 to 2 of 2 entries
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default LedgerReport;
