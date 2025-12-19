import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";

interface OfficeLedgerData {
  srNo: number;
  ledgerName: string;
  ledgerCode: string;
  groupName: string;
  createOfficeName: string;
}

const OfficeWiseLedger: React.FC = () => {
  const [step, setStep] = useState(1);
  const [oicType, setOicType] = useState<string | null>(null);
  const [division, setDivision] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [block, setBlock] = useState<string | null>(null);
  const [university, setUniversity] = useState<string | null>(null);
  const [college, setCollege] = useState<string | null>(null);
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);

  const oicOptions = [
    { label: "College", value: "College" },
    { label: "Office", value: "Office" },
    { label: "University", value: "University" },
  ];

  const divisionOptions = [{ label: "Bhopal Division", value: "Bhopal" }];
  const districtOptions = [{ label: "Bhopal District", value: "Bhopal_Dist" }];
  const blockOptions = [
    { label: "Phanda Block", value: "Phanda" },
    { label: "Berasia Block", value: "Berasia" },
  ];
  const universityOptions = [
    { label: "Barkatullah University (BU)", value: "BU" },
    { label: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)", value: "RGPV" },
  ];
  const collegeOptions = [
    { label: "M.L.B. Girls PG College", value: "MLB" },
    { label: "Satiya College of Education", value: "SCE" },
  ];
  const officeTypeOptions = [
    { label: "Directorate", value: "DIR" },
    { label: "Regional Office", value: "RO" },
  ];
  const officeNameOptions = [
    { label: "Directorate of Technical Education (DTE)", value: "DTE" },
    { label: "AICTE Regional Office", value: "AICTE_RO" },
  ];

  const ledgerData: OfficeLedgerData[] = [
    {
      srNo: 1,
      ledgerName: "Basic Pay/Special Pay/DA",
      ledgerCode: "10.01.01",
      groupName: "Expenses",
      createOfficeName: "Directorate of Technical Education (DTE)",
    },
    {
      srNo: 2,
      ledgerName: "Gratuity Premium Payment",
      ledgerCode: "10.01.02",
      groupName: "Expenses",
      createOfficeName: "RGPV",
    },
    {
      srNo: 3,
      ledgerName: "Gratuity Payment",
      ledgerCode: "10.01.03",
      groupName: "Expenses",
      createOfficeName: "AICTE Regional Office",
    },
  ];

  const handleSearch = () => {
    if (oicType) setStep(2);
  };

  const handleClear = () => {
    setOicType(null);
    setDivision(null);
    setDistrict(null);
    setBlock(null);
    setUniversity(null);
    setCollege(null);
    setOfficeType(null);
    setOfficeName(null);
    setStep(1);
  };

  return (
    <PageLayout title="Office Wise Ledger">
      <div className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-600">
              Select OIC Type*
            </label>
            <Dropdown
              value={oicType}
              options={oicOptions}
              onChange={(e) => {
                setOicType(e.value);
                setStep(1);
              }}
              placeholder="Select"
              className="w-full border-gray-300"
            />
          </div>

          {oicType === "University" && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select Division Name*
                </label>
                <Dropdown
                  value={division}
                  options={divisionOptions}
                  onChange={(e) => setDivision(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select District Name*
                </label>
                <Dropdown
                  value={district}
                  options={districtOptions}
                  onChange={(e) => setDistrict(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select Block Name*
                </label>
                <Dropdown
                  value={block}
                  options={blockOptions}
                  onChange={(e) => setBlock(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select University Name*
                </label>
                <Dropdown
                  value={university}
                  options={universityOptions}
                  onChange={(e) => setUniversity(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
            </>
          )}

          {oicType === "College" && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select Division Name*
                </label>
                <Dropdown
                  value={division}
                  options={divisionOptions}
                  onChange={(e) => setDivision(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select District Name*
                </label>
                <Dropdown
                  value={district}
                  options={districtOptions}
                  onChange={(e) => setDistrict(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select Block Name*
                </label>
                <Dropdown
                  value={block}
                  options={blockOptions}
                  onChange={(e) => setBlock(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select University Name*
                </label>
                <Dropdown
                  value={university}
                  options={universityOptions}
                  onChange={(e) => setUniversity(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select College Name*
                </label>
                <Dropdown
                  value={college}
                  options={collegeOptions}
                  onChange={(e) => setCollege(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
            </>
          )}

          {oicType === "Office" && (
            <>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select Office Type*
                </label>
                <Dropdown
                  value={officeType}
                  options={officeTypeOptions}
                  onChange={(e) => setOfficeType(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-gray-600">
                  Select Office Name*
                </label>
                <Dropdown
                  value={officeName}
                  options={officeNameOptions}
                  onChange={(e) => setOfficeName(e.value)}
                  placeholder="Select"
                  className="w-full"
                />
              </div>
            </>
          )}
        </div>

        <div className="flex justify-center gap-3 mt-8">
          <Button
            label="Search"
            className="px-8"
            style={{ backgroundColor: "#6366f1" }}
            onClick={handleSearch}
          />
          <Button
            label="Clear"
            className="px-8 p-button-danger p-button-outlined"
            onClick={handleClear}
          />
        </div>
      </div>

      {step === 2 && (
        <>
          <div className="flex justify-between items-center mb-4 text-sm">
            <div className="flex items-center gap-2"></div>
            <div className="flex items-center gap-2">
              <span>Search:</span>
              <InputText className="p-inputtext-sm" />
            </div>
          </div>
          <DataTable
            value={ledgerData}
            className="p-datatable-sm"
            paginator
            rows={10}
          >
            <Column
              field="srNo"
              header="Sr.No."
              style={{ borderBottom: "1px solid #e5e7eb" }}
              sortable
            />
            <Column
              field="ledgerName"
              header="Ledger Name"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              field="ledgerCode"
              header="Ledger Code"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              field="groupName"
              header="Group Name"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              field="createOfficeName"
              header="Create office Name"
              sortable
              style={{ borderBottom: "1px solid #e5e7eb" }}
            />
            <Column
              header="Action"
              style={{ borderBottom: "1px solid #e5e7eb", textAlign: "center" }}
              body={() => (
                <div className="flex gap-2">
                  <Button
                    icon="pi pi-eye"
                    className="p-button-rounded p-button-text p-button-sm p-button-info border"
                    title="View Details"
                  />
                </div>
              )}
            />
          </DataTable>
        </>
      )}
    </PageLayout>
  );
};

export default OfficeWiseLedger;
