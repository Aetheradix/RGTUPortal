/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";

export default function DEOCompassionApply() {
  const initialFormState = {
    applicationNo: "",
    nocNo: "",
    applicantName: "",
    deceasedName: "",
    designation: "",
    district: "",
    postingDate: null
  };

  const [formData, setFormData] = useState<any>(initialFormState);

  const districtList = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Gwalior", value: "Gwalior" }
  ];

  const handleChange = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = () => {
    console.log("DEO Compassion Apply Data:", formData);
  };

  const handleClear = () => {
    setFormData(initialFormState);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex justify-center">
      <Card title="DEO Compassion Appointment Application" className="w-full max-w-4xl shadow-md">
        <div className="p-fluid grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          
          <div className="flex flex-col gap-2">
            <label htmlFor="applicationNo" className="font-semibold text-sm text-gray-700">
              Application No. <span className="text-red-500">*</span>
            </label>
            <InputText 
              id="applicationNo"
              value={formData.applicationNo} 
              onChange={(e) => handleChange("applicationNo", e.target.value)} 
              placeholder="e.g. APP/2026/001"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="nocNo" className="font-semibold text-sm text-gray-700">
              NOC Certificate No. <span className="text-red-500">*</span>
            </label>
            <InputText 
              id="nocNo"
              value={formData.nocNo} 
              onChange={(e) => handleChange("nocNo", e.target.value)} 
              placeholder="Enter NOC Number"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="applicantName" className="font-semibold text-sm text-gray-700">
              Applicant Name <span className="text-red-500">*</span>
            </label>
            <InputText 
              id="applicantName"
              value={formData.applicantName} 
              onChange={(e) => handleChange("applicantName", e.target.value)} 
              placeholder="Full name of applicant"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="deceasedName" className="font-semibold text-sm text-gray-700">
              Deceased Employee Name <span className="text-red-500">*</span>
            </label>
            <InputText 
              id="deceasedName"
              value={formData.deceasedName} 
              onChange={(e) => handleChange("deceasedName", e.target.value)} 
              placeholder="Name of deceased employee"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="designation" className="font-semibold text-sm text-gray-700">
              Designation <span className="text-red-500">*</span>
            </label>
            <InputText 
              id="designation"
              value={formData.designation} 
              onChange={(e) => handleChange("designation", e.target.value)} 
              placeholder="e.g. Prathmik Shikshak"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="district" className="font-semibold text-sm text-gray-700">
              District <span className="text-red-500">*</span>
            </label>
            <Dropdown
              id="district"
              value={formData.district}
              options={districtList}
              onChange={(e) => handleChange("district", e.value)}
              placeholder="Select District"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="postingDate" className="font-semibold text-sm text-gray-700">
              Proposed Posting Date <span className="text-red-500">*</span>
            </label>
            <Calendar
              id="postingDate"
              value={formData.postingDate}
              onChange={(e) => handleChange("postingDate", e.value)}
              placeholder="Select Date"
              showIcon
              dateFormat="dd/mm/yy"
            />
          </div>
        </div>
        <div className="flex justify-start mt-8 gap-3">
          <Button 
            label="Submit Application" 
            icon="pi pi-check" 
            className="p-button-primary px-6" 
            onClick={handleSubmit} 
          />
          <Button 
            label="Clear" 
            icon="pi pi-refresh" 
            className="p-button-outlined p-button-secondary px-4" 
            onClick={handleClear}
          />
        </div>

      </Card>
    </div>
  );
}