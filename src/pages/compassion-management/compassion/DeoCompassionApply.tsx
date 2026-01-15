/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
// Using your shared components
import { Dropdown, Input } from "@/ui/shared";
import { DateInput } from "@/ui/shared/Input";

export default function DEOCompassionApply() {
  const initialFormState = {
    applicationNo: "",
    nocNo: "",
    applicantName: "",
    deceasedName: "",
    designation: "",
    district: null,
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
    <PageLayout title="DEO Compassion Appointment / डीईओ अनुकंपा नियुक्ति">
      <div className="animate-fadein flex justify-center">
        <Card className="w-full max">
          <h3 className="text-xl font-bold text-gray-700 mb-6  pb-2">
            Application Details / आवेदन विवरण
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            
            <Input 
              label="Application No." 
              required 
              value={formData.applicationNo} 
              onChange={(e: any) => handleChange("applicationNo", e.target.value)} 
              placeholder="e.g. APP/2026/001"
            />

            <Input 
              label="NOC Certificate No." 
              required 
              value={formData.nocNo} 
              onChange={(e: any) => handleChange("nocNo", e.target.value)} 
              placeholder="Enter NOC Number"
            />

            <Input 
              label="Applicant Name" 
              required 
              value={formData.applicantName} 
              onChange={(e: any) => handleChange("applicantName", e.target.value)} 
              placeholder="Full name of applicant"
            />

            <Input 
              label="Deceased Employee Name" 
              required 
              value={formData.deceasedName} 
              onChange={(e: any) => handleChange("deceasedName", e.target.value)} 
              placeholder="Name of deceased employee"
            />

            <Input 
              label="Designation" 
              required 
              value={formData.designation} 
              onChange={(e: any) => handleChange("designation", e.target.value)} 
              placeholder="e.g. Prathmik Shikshak"
            />

            <Dropdown
              label="District"
              required
              options={districtList}
              value={formData.district}
              onChange={(e) => handleChange("district", e.value)}
              placeholder="Select District"
            />

            <DateInput 
              label="Proposed Posting Date" 
              required 
              value={formData.postingDate}
              onChange={(e) => handleChange("postingDate", e.value)}
              placeholder="Select Date"
              dateFormat="dd/mm/yy"
            />
          </div>

          <div className="flex justify-center mt-10 gap-4 pt-6 border-t">
            <Button 
              label="Submit Application" 
              icon="pi pi-check" 
              className="bg-blue-600 px-8 py-3" 
              onClick={handleSubmit} 
            />
            <Button 
              label="Clear Form" 
              icon="pi pi-refresh" 
              severity="secondary"
              outlined 
              className="px-8 py-3" 
              onClick={handleClear}
            />
          </div>
        </Card>
      </div>
    </PageLayout>
  );
}