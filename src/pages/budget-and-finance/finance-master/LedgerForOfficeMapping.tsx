/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";

const LedgerForOfficeMapping: React.FC = () => {
  const [step, setStep] = useState(1);
  const [oicType1, setOicType1] = useState<string | null>(null);
  const [ledgerType, setledgerType] = useState<string | null>(null);
  const [oicType2, setOicType2] = useState<string | null>(null);
  const [division, setDivision] = useState<string | null>(null);
  const [district, setDistrict] = useState<string | null>(null);
  const [block, setBlock] = useState<string | null>(null);
  const [university, setUniversity] = useState<string | null>(null);
  const [college, setCollege] = useState<string | null>(null);
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);

  // --- CHECKBOX STATES ---
  const districtsList = [
    "Vidisha-(VID)",
    "Sehore-(SHR)",
    "Raisen-(RSN)",
    "Bhopal-(BPL)",
    "Obedullaganj-(OBD)",
    "Rajgarh-(RJG)",
    "Hoshangabad-(HBN)",
    "Harda-(HRD)",
    "Betul-(BT)",
    "Jabalpur-(JBP)",
    "Indore-(IDR)",
    "Ujjain-(UJN)",
    "Narsinghpur-(NRS)",
    "Balaghat-(BG)",
    "Chhindwara-(CH)",
    "Gwalior-(GWR)",
    "Seoni-(SE)",
    "Dewas-(DW)",
  ];
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const oicOptions = [
    { label: "College", value: "College" },
    { label: "Office", value: "Office" },
    { label: "University", value: "University" },
  ];
  const ledgerOptions = [
    {
      label: "Basic Pay/Special Pay/Dearness Allowance(10.00.01)",
      value: "10.00.01",
    },
    { label: "Gratuity Premium Payment(10.00.02)", value: "10.00.02" },
    { label: "Medical Expense Reimbursement(10.00.03)", value: "10.00.03" },
    { label: "Stationery, Font Copy, Bidding(10.00.04)", value: "10.00.04" },
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

  // --- CHECKBOX LOGIC ---
  const onDistrictChange = (e: any) => {
    const _selectedDistricts = [...selectedDistricts];
    if (e.checked) _selectedDistricts.push(e.value);
    else _selectedDistricts.splice(_selectedDistricts.indexOf(e.value), 1);
    setSelectedDistricts(_selectedDistricts);
  };

  const onAllChange = (e: any) => {
    if (e.checked) setSelectedDistricts(districtsList);
    else setSelectedDistricts([]);
  };

  const handleSearch = () => {
    if (oicType2) setStep(2);
  };

  const handleClear = () => {
    setOicType1(null);
    setOicType2(null);
    setledgerType(null);
    setDivision(null);
    setDistrict(null);
    setBlock(null);
    setUniversity(null);
    setCollege(null);
    setOfficeType(null);
    setOfficeName(null);
    setSelectedDistricts([]);
    setStep(1);
  };

  return (
    <PageLayout title="Ledger for Office Mapping">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">
            Ledger Office Mapping
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">
                Select OIC Type*
              </label>
              <Dropdown
                value={oicType1}
                options={oicOptions}
                onChange={(e) => setOicType1(e.value)}
                placeholder="Select"
                className="w-full border-gray-300"
              />
            </div>
            {oicType1 === "University" && (
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
            {oicType1 === "College" && (
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
            {oicType1 === "Office" && (
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
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">
                Select Created Ledger Name*
              </label>
              <Dropdown
                value={ledgerType}
                options={ledgerOptions}
                onChange={(e) => setledgerType(e.value)}
                placeholder="Select"
                className="w-full border-gray-300"
                filter
              />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">
            For Office Mapping
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-600">
                Select OIC Type*
              </label>
              <Dropdown
                value={oicType2}
                options={oicOptions}
                onChange={(e) => {
                  setOicType2(e.value);
                  setStep(1);
                }}
                placeholder="Select"
                className="w-full border-gray-300"
              />
            </div>
            {oicType2 === "University" && (
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
            {oicType2 === "College" && (
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
            {oicType2 === "Office" && (
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
          <div className="flex justify-center gap-3">
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
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 animate-fade-in">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">
              Applicable On
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <Checkbox
                inputId="all"
                onChange={onAllChange}
                checked={
                  selectedDistricts.length === districtsList.length &&
                  districtsList.length > 0
                }
              />
              <label
                htmlFor="all"
                className="text-sm font-bold text-gray-700 cursor-pointer"
              >
                All
              </label>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-y-6">
              {districtsList.map((label) => (
                <div key={label} className="flex items-center gap-2">
                  <Checkbox
                    inputId={label}
                    value={label}
                    onChange={onDistrictChange}
                    checked={selectedDistricts.includes(label)}
                  />
                  <label
                    htmlFor={label}
                    className="text-xs text-gray-600 cursor-pointer"
                  >
                    {label}
                  </label>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-3 mt-10">
              <Button
                label="Save"
                className="px-10"
                style={{ backgroundColor: "#6366f1" }}
              />
              <Button
                label="Clear"
                className="px-10 p-button-danger p-button-outlined"
                onClick={() => setSelectedDistricts([])}
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default LedgerForOfficeMapping;
