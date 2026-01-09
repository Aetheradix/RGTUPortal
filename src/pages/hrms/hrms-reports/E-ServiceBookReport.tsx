import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";
import {
  annualColumns,
  approvalColumn,
  awardColumn,
  disciplineColumn,
  earnedColumn,
  halfPayColumn,
  nominationColumn,
  payscaleColumns,
  promotionColumns,
  punishmentColumn,
  resourceColumn,
  trainingColumn,
  transferColumn,
  unauthorColumn,
} from "./Tables";
import {
  annualData,
  designationOptions,
  empIdOptions,
  halfPayData,
  IdOptions,
  officetypeOptions,
  payscaleData,
} from "./data";

const ReadOnlyField = ({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string | number;
  className?: string;
}) => (
  <div className={`flex flex-col gap-1 w-full ${className}`}>
    <label className="text-xs font-semibold text-gray-600">{label}</label>
    <div className="bg-[#f3f4f6] p-2 rounded text-sm text-gray-700 min-h-9.5 flex items-center border border-gray-200 shadow-sm">
      {value || "N/A"}
    </div>
  </div>
);

const SectionHeader = ({ title }: { title: string }) => (
  <h3 className="text-md font-bold text-gray-700 mb-4 mt-8 pb-2 border-b border-gray-200 uppercase tracking-wide">
    {title}
  </h3>
);

const EServiceBookReport: React.FC = () => {
  const [showReport, setShowReport] = useState(false);
  const [officetype, setOfficeType] = useState<string | null>(null);
  const [designation, setSelectedDesignation] = useState<string | null>(null);
  const [uniId, setSelectedUniId] = useState<string | null>(null);
  const [empId, setSelectedEmpId] = useState<string | null>(null);
  const toast = useRef<Toast>(null);

  const handleClear = () => {
    setShowReport(false);
    setOfficeType(null);
    setSelectedDesignation(null);
    setSelectedUniId(null);
    setSelectedEmpId(null);
  };

  return (
    <PageLayout title="E-Service Book Report">
      <Toast ref={toast} />

      <div className="bg-white p-6 rounded shadow-sm border border-gray-100 mb-6">
        <h3 className="text-md font-semibold text-gray-700 mb-6 border-b pb-4">
          E-Service Book Report
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600">
              Select Office Type
            </label>
            <Dropdown
              value={officetype}
              options={officetypeOptions}
              placeholder="Select"
              className="p-inputtext-sm w-full"
              onChange={(e) => setOfficeType(e.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600">
              Select Designation
            </label>
            <Dropdown
              value={designation}
              options={designationOptions}
              placeholder="Select"
              className="p-inputtext-sm w-full"
              onChange={(e) => setSelectedDesignation(e.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600">
              Select University ID
            </label>
            <Dropdown
              value={uniId}
              options={IdOptions}
              placeholder="Select"
              className="p-inputtext-sm w-full"
              onChange={(e) => setSelectedUniId(e.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600">
              Select Employee ID
            </label>
            <Dropdown
              value={empId}
              options={empIdOptions}
              placeholder="Select"
              className="p-inputtext-sm w-full"
              onChange={(e) => setSelectedEmpId(e.value)}
            />
          </div>
        </div>
        <div className="flex gap-2 mt-6">
          <Button
            label="Search"
            icon="pi pi-search"
            className="bg-indigo-600 border-none px-6"
            onClick={() => setShowReport(true)}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-outlined p-button-danger px-6"
            onClick={handleClear}
          />
        </div>
      </div>

      {showReport && (
        <div className="bg-white p-8 rounded shadow-md border border-gray-200 animate-fade-in">
          <h2 className="text-2xl font-bold text-indigo-900 mb-6">
            Service Book
          </h2>

          <SectionHeader title="Personal Information" />
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-4">
              <ReadOnlyField label="Employee Unique ID" value="4534543536" />
              <div className="hidden md:block"></div> {/* Image Spacer */}
              <ReadOnlyField label="Employee Name" value="Krishna Mishra" />
              <div className="hidden md:block"></div> {/* Image Spacer */}
              <ReadOnlyField
                label="Father's/Husband Name"
                value="Pulkit Mishra"
              />
              <div className="hidden md:block"></div> {/* Image Spacer */}
              <ReadOnlyField label="Date of Birth" value="02/12/1980" />
              <ReadOnlyField label="Age" value="40 Year" />
              <ReadOnlyField label="Gender" value="Male" />
              <ReadOnlyField label="Height" value="162 cm" />
              <ReadOnlyField label="Caste" value="GENERAL" />
              <ReadOnlyField label="Sub Caste" value="No" />
            </div>

            <div className="col-span-12 md:col-span-3 flex flex-col items-center justify-start pt-6">
              <div className="w-40 h-48 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center bg-gray-50">
                <i className="pi pi-user text-gray-300 text-5xl mb-2"></i>
                <span className="text-gray-400 text-xs uppercase font-bold tracking-widest">
                  Photo
                </span>
              </div>
            </div>

            <div className="col-span-12 grid grid-cols-1 md:grid-cols-4 gap-4">
              <ReadOnlyField label="Religion" value="Hindu" />
              <ReadOnlyField label="Blood Group" value="A+" />
              <ReadOnlyField label="Identification Mark" value="Mole on face" />
              <ReadOnlyField label="Handicapped (PWD)" value="Yes" />
              <ReadOnlyField label="Handicapped Type" value="Blindness" />
              <ReadOnlyField label="Handicapped Percentage" value="50%" />
              <ReadOnlyField label="Critical Illness" value="No" />
              <ReadOnlyField label="Employee Treasury Code" value="48854465" />
              <ReadOnlyField label="PAN No." value="GKPPD6591D" />
              <ReadOnlyField label="Aadhaar No." value="859626458596" />
              <ReadOnlyField label="Samagra ID No." value="4651649845864" />
              <ReadOnlyField label="Mobile No." value="9685975856" />
              <div className="md:col-span-2">
                <ReadOnlyField label="Email Id" value="krishna38@gmail.com" />
              </div>
              <div className="md:col-span-2">
                <ReadOnlyField label="Hobbies" value="Cricket, Swimming" />
              </div>
            </div>
          </div>
          {/* --- Address & Qualification --- */}
          <SectionHeader title="Present Address" />
          <div className="grid grid-cols-4 gap-4">
            <ReadOnlyField label="State" value="Madhya Pradesh" />
            <ReadOnlyField label="Division" value="Bhopal" />
            <ReadOnlyField label="District" value="Bhopal" />
            <ReadOnlyField label="City" value="Bhopal" />
            <ReadOnlyField label="Pincode" value="462020" />
            <div className="col-span-3">
              <ReadOnlyField
                label="Address Line 1"
                value="85 Arera Hills, Near Sobhagya Residency"
              />
            </div>
          </div>
          {/* --- Appointment Sections --- */}
          <SectionHeader title="Current Appointment Details" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <ReadOnlyField
              label="Current Appointment District"
              value="Bhopal"
            />
            <ReadOnlyField label="Order No." value="56464652" />
            <ReadOnlyField
              label="Current Appointment Order Date"
              value="12/05/2022"
            />
            <ReadOnlyField
              label="Current Appointment Department"
              value="Engineering"
            />
            <ReadOnlyField
              label="Employee's Designation Type"
              value="Teaching"
            />
            <ReadOnlyField
              label="Current Appointment Designation"
              value="Maths Teacher"
            />
            <ReadOnlyField
              label="Appointment Joining Date"
              value="02/08/2024"
            />
            <ReadOnlyField label="Subject" value="Maths" />
          </div>
          <SectionHeader title="Bank Account Details" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <ReadOnlyField label="Bank Name" value="Punjab National Bank" />
            <ReadOnlyField label="Branch Name" value="Arera Hills" />
            <ReadOnlyField label="IFSC Code" value="BARB0ASH548" />
            <ReadOnlyField label="Account No." value="64168496816416" />
            <ReadOnlyField label="EPF No." value="98189849844865" />
            <ReadOnlyField label="GPF No." value="64168496816416" />
            <ReadOnlyField label="NPS No." value="84894849894198" />
            <ReadOnlyField label="Salary Account" value="Yes" />
          </div>
          {/* --- NEW SECTIONS FROM THE REMAINING IMAGES --- */}

          <div className="bg-white p-4 rounded shadow-sm border mt-4 border-gray-100">
            <SectionHeader title="Promotion Details" />
            <Table data={[]} columns={promotionColumns} />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border mt-4 border-gray-100">
            <SectionHeader title="Pay Scale Details" />
            <Table data={payscaleData} columns={payscaleColumns} />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border mt-4 border-gray-100">
            <SectionHeader title="Annual Increment Details" />
            <Table data={annualData} columns={annualColumns} />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border mt-4 border-gray-100">
            <SectionHeader title="Transfer Details" />
            <Table data={[]} columns={transferColumn} />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border mt-4 border-gray-100">
            <SectionHeader title="Nomination Details" />
            <Table data={[]} columns={nominationColumn} />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border mt-4 border-gray-100">
            <SectionHeader title="Earned Leave Records" />
            <Table data={[]} columns={earnedColumn} />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border mt-4 border-gray-100">
            <SectionHeader title="Half Pay Leave Record" />
            <Table data={halfPayData} columns={halfPayColumn} />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border mt-4 border-gray-100">
            <SectionHeader title="Approved Leave Details" />
            <Table data={[]} columns={approvalColumn} />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border mt-4 border-gray-100">
            <SectionHeader title="Unauthorized Absence Details" />
            <Table data={[]} columns={unauthorColumn} />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border mt-4 border-gray-100">
            <SectionHeader title="Punishment Details" />
            <Table data={[]} columns={punishmentColumn} />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border mt-4 border-gray-100">
            <SectionHeader title="Disciplinary Action Details" />
            <Table data={[]} columns={disciplineColumn} />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border mt-4 border-gray-100">
            <SectionHeader title="Award Details" />
            <Table data={[]} columns={awardColumn} />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border mt-4 border-gray-100">
            <SectionHeader title="Training Details" />
            <Table data={[]} columns={trainingColumn} />
          </div>

          <div className="bg-white p-4 rounded shadow-sm border mt-4 border-gray-100">
            <SectionHeader title="Resourcse Group Details" />
            <Table data={[]} columns={resourceColumn} />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default EServiceBookReport;
