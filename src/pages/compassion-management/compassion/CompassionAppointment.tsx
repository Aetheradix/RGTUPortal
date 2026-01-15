/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Table, Input, Dropdown } from "@/ui/shared";
import { DateInput } from "@/ui/shared/Input";

const genderOptions = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
];

const relationOptions = [
  { label: "Wife", value: "Wife" },
  { label: "Son", value: "Son" },
  { label: "Daughter", value: "Daughter" },
];

export default function CompassionateAppointment() {
  const [activeTab, setActiveTab] = useState<"PERSONAL" | "UPLOAD">("PERSONAL");

  const [formData, setFormData] = useState<any>({
    deathDate: null,
    deathCause: "",
    familyCount: null,
    familyMembers: [],

    tempMemberName: "",
    tempMemberDob: null,
    tempMemberGender: null,
    tempMemberRelation: null,
    tempMemberOccupation: null,

    applicantName: "",
    applicantRelation: "",
    applicantDob: null,
    applicantGender: null,
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const addFamilyMember = () => {
    if (!formData.tempMemberName) return;
    const newMember = {
      sr: formData.familyMembers.length + 1,
      name: formData.tempMemberName,
      dob: formData.tempMemberDob?.toLocaleDateString(),
      gender: formData.tempMemberGender,
      relation: formData.tempMemberRelation,
      occupation: formData.tempMemberOccupation,
    };
    setFormData((prev: any) => ({
      ...prev,
      familyMembers: [...prev.familyMembers, newMember],
      tempMemberName: "", 
      tempMemberDob: null,
    }));
  };

  const documentsList = [
    { sr: 1, name: "Death Certificate", status: "Not Uploaded" },
    { sr: 2, name: "Educational Qualification (10th/12th/Graduation)", status: "Not Uploaded" },
    { sr: 3, name: "Caste Certificate", status: "Not Uploaded" },
    { sr: 4, name: "NOC/Consent certificate of all family members", status: "Not Uploaded" },
    { sr: 5, name: "Aadhar Card of Applicant", status: "Not Uploaded" },
  ];

  return (
    <PageLayout title="Compassionate Appointment Application / अनुकंपा नियुक्ति आवेदन">
      <div className="animate-fadein">
        <div className="flex gap-2 mb-4">
          <Button
            label="1. Personal Information"
            icon="pi pi-user"
            className={`px-4 ${activeTab === "PERSONAL" ? "bg-purple-700 border-purple-700" : "p-button-secondary p-button-outlined"}`}
            onClick={() => setActiveTab("PERSONAL")}
          />
          <Button
            label="2. Upload Documents"
            icon="pi pi-upload"
            className={`px-4 ${activeTab === "UPLOAD" ? "bg-purple-700 border-purple-700" : "p-button-secondary p-button-outlined"}`}
            onClick={() => setActiveTab("UPLOAD")}
          />
        </div>

        {activeTab === "PERSONAL" ? (
          <div className="space-y-6">
            <Card title="Details of Deceased Employee / मृत कर्मचारी का विवरण">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Input label="Employee Code" value="AE7335" readOnly />
                <Input label="Full Name" value="Nandlal Nagle" readOnly />
                <Input label="Gender" value="Male" readOnly />
                <Input label="Caste" value="SC" readOnly />
                <Input label="Posting District" value="Betul" readOnly />
                <Input label="Designation" value="Ucch Madhyamik Shikshak" readOnly />
                
                <DateInput 
                  label="Date of Death" required 
                  value={formData.deathDate} 
                  onChange={(e) => handleInputChange("deathDate", e.value)} 
                />
                <Input 
                  label="Cause of Death" required 
                  value={formData.deathCause} 
                  onChange={(e: any) => handleInputChange("deathCause", e.target.value)} 
                />
                <Dropdown 
                  label="Surviving Members" required 
                  options={[{ label: "1", value: 1 }, { label: "2", value: 2 }]} 
                  value={formData.familyCount}
                  onChange={(e) => handleInputChange("familyCount", e.value)}
                />
              </div>
            </Card>

            <Card title="Add Family Members / परिवार के सदस्यों का विवरण">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <Input 
                  label="Member Name" 
                  value={formData.tempMemberName} 
                  onChange={(e: any) => handleInputChange("tempMemberName", e.target.value)} 
                />
                <DateInput 
                  label="DOB" 
                  value={formData.tempMemberDob} 
                  onChange={(e) => handleInputChange("tempMemberDob", e.value)} 
                />
                <Dropdown 
                  label="Relation" 
                  options={relationOptions} 
                  value={formData.tempMemberRelation} 
                  onChange={(e) => handleInputChange("tempMemberRelation", e.value)} 
                />
                <div className="flex items-end">
                  <Button label="Add Member" icon="pi pi-plus" className="p-button-success w-full" onClick={addFamilyMember} />
                </div>
              </div>
              <Table
                columns={[
                  { field: "sr", header: "Sr.No" },
                  { field: "name", header: "Name" },
                  { field: "relation", header: "Relation" },
                  { field: "dob", header: "Date of Birth" },
                  { field: "gender", header: "Gender" },
                ]}
                data={formData.familyMembers}
              />
            </Card>

            <Card title="Applicant Details / आवेदक का विवरण">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Input label="Name of Applicant" required value={formData.applicantName} onChange={(e:any) => handleInputChange("applicantName", e.target.value)} />
                  <Dropdown label="Gender" options={genderOptions} value={formData.applicantGender} onChange={(e) => handleInputChange("applicantGender", e.value)} />
                  <DateInput label="Applicant DOB" value={formData.applicantDob} onChange={(e) => handleInputChange("applicantDob", e.value)} />
                  <Input label="Relationship" value={formData.applicantRelation} onChange={(e:any) => handleInputChange("applicantRelation", e.target.value)} />
               </div>
            </Card>

            <div className="flex justify-end gap-3">
              <Button label="Save & Next" icon="pi pi-arrow-right" className="bg-blue-600 px-8" onClick={() => setActiveTab("UPLOAD")} />
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <Card title="Upload Required Documents">
              <div className="p-3 mb-4 bg-blue-50 border-l-4 border-blue-500 text-blue-700 text-sm">
                <strong>Instruction:</strong> Scanned documents must be PDF/JPEG and under 2MB.
              </div>
              <Table
                columns={[
                  { field: "sr", header: "Sr.No", style: { width: '80px' } },
                  { field: "name", header: "Document Name" },
                  { 
                    header: "Upload Action", 
                    body: () => <FileUpload mode="basic" chooseLabel="Upload File" className="p-button-sm" auto name="docs" /> 
                  },
                  { 
                    field: "status", 
                    header: "Status",
                    body: (row: any) => <span className="text-orange-600 font-bold">{row.status}</span>
                  },
                ]}
                data={documentsList}
              />
            </Card>

            <div className="flex justify-between">
              <Button label="Back to Information" icon="pi pi-arrow-left" severity="secondary" text onClick={() => setActiveTab("PERSONAL")} />
              <Button label="Submit Application" icon="pi pi-check" className="bg-green-600 px-10" />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}