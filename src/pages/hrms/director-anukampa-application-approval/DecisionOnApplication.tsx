import React, { useState, useRef, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";

interface AnukampaApplication {
  id: number;
  deceasedCode: string;
  deceasedStaff: string;
  designation: string;
  dod: string;
  district: string;
  applicantName: string;
  gender: string;
  classType: string;
  dob: string;
  mobile: string;
  relationship: string;
  maritalStatus: string;
  postOption: string;
  qualification: string;
  tetStatus: string;
  lastPostingDistrict: string;
  address: string;
  familyCount: number;
  department: string;
  receiptDate: string;
  cadreDesignation?: string;
}
const DecisionOnPendingApplications: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showList, setShowList] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [selectedApp, setSelectedApp] = useState<AnukampaApplication | null>(null);
  const [actionValue, setActionValue] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const districts = [
    "Agar Malwa", "Alirajpur", "Anuppur", "Ashok Nagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", 
    "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", 
    "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", 
    "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", 
    "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", 
    "Ujjain", "Umaria", "Vidisha"
  ].map(d => ({ label: d, value: d }));
  const mockData: AnukampaApplication[] = [
    { id: 1, deceasedCode: "10023451", deceasedStaff: "Dariyav Singh Malviya", designation: "Asstt Teacher(LDT)", dod: "23/05/2020", district: "Shajapur", applicantName: "ANIL BAMNIYAM", gender: "Male", classType: "GENERAL", dob: "18/05/1994", mobile: "7047770112", relationship: "Son", maritalStatus: "Married", postOption: "Academic Cadre", qualification: "12th PCM", tetStatus: "No", lastPostingDistrict: "Shajapur", address: "Gram Post Pipaliya", familyCount: 3, department: "School Education", receiptDate: "15/02/2022", cadreDesignation: "Laboratory Teacher" }
  ];
  const familyMembers = [
    { srNo: 1, name: "NASREEN MANSURI", relationship: "Wife Husband", business: "No Business", dob: "23/04/1968" },
    { srNo: 2, name: "ARSHAD MANSURI", relationship: "Son", business: "No Business", dob: "06/05/1993" }
  ];
  const documents = [
    { srNo: 1, docName: "Death certificate of the deceased government employee" },
    { srNo: 2, docName: "High school mark sheet or birth certificate" },
    { srNo: 3, docName: "Certificate of local/permanent residence" },
    { srNo: 4, docName: "Caste certificate" },
    { srNo: 5, docName: "Certificate of passing Higher Secondary/Graduation" },
    { srNo: 6, docName: "Affidavit of consent by all family members" },
    { srNo: 7, docName: "Upload applicant's photo" },
    { srNo: 8, docName: "Ration card/service book" }
  ];
  const handleDispose = (rowData: AnukampaApplication) => {
    setSelectedApp(rowData);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth' }), 150);
  };
  const header = (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span>Show</span>
        <Dropdown options={[10, 25, 50]} placeholder="10" className="w-20" />
        <span>entries</span>
      </div>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" value={globalFilter} onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search:" className="p-inputtext-sm" />
      </span>
    </div>
  );
  return (
    <PageLayout title="Director Anukampa Application Approval">
      <div className="text-xl font-bold text-blue-900 mb-4 uppercase">Decide on Pending Applications at Director Level</div>
      
      <Card className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm">Select District *</label>
            <Dropdown value={selectedDistrict} options={districts} onChange={(e: DropdownChangeEvent) => setSelectedDistrict(e.value)} placeholder="Select" filter className="w-full" />
          </div>
          <div className="flex gap-2">
            <Button label="Search" icon="pi pi-search" onClick={() => setShowList(true)} className="bg-blue-800" />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-outlined" onClick={() => {setShowList(false); setSelectedApp(null);}} />
          </div>
        </div>
      </Card>
      {showList && (
        <Card title="Details" className="mb-6">
          <DataTable value={mockData} header={header} globalFilter={globalFilter} paginator rows={10} className="p-datatable-sm" showGridlines stripedRows>
            <Column field="id" header="Sr.No." />
            <Column field="deceasedStaff" header="Deceased Employee / Officer" sortable />
            <Column field="designation" header="Designation" />
            <Column field="dod" header="Date of Death" />
            <Column field="district" header="District" />
            <Column field="applicantName" header="Applicant Name" />
            <Column field="gender" header="Gender" />
            <Column field="classType" header="Class" />
            <Column field="maritalStatus" header="Marital Status" />
            <Column field="dob" header="Date of Birth" />
            <Column field="relationship" header="Relation with Deceased" />
            <Column header="Dispose" body={(rowData) => <Button label="Dispose" className="p-button-success p-button-sm" onClick={() => handleDispose(rowData)} />} />
          </DataTable>
        </Card>
      )}
      {selectedApp && (
        <div ref={detailRef} className="space-y-6 animate-fade-in pb-20">
          <h2 className="text-xl font-bold border-b pb-2">Decide on Pending Applications at Director Level</h2>
          
          <Card title="PERSONAL INFORMATION">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Employee Code *</label><InputText value={selectedApp.deceasedCode} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Name of Deceased Employee *</label><InputText value={selectedApp.deceasedStaff} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Gender *</label><InputText value={selectedApp.gender} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Category *</label><InputText value={selectedApp.classType} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Last Posting District *</label><InputText value={selectedApp.lastPostingDistrict} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Deceased Staff Cadre *</label><InputText value={selectedApp.postOption} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Designation *</label><InputText value={selectedApp.designation} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col gap-1 md:col-span-2"><label className="text-xs font-bold uppercase">Last Office and Employee Address *</label><InputText value={selectedApp.address} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Cause of Death *</label><InputText value="Natural" readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Date of Death *</label><InputText value={selectedApp.dod} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Family Count *</label><InputText value={selectedApp.familyCount.toString()} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Department Name *</label><InputText value={selectedApp.department} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Date of Receipt of Application *</label><InputText value={selectedApp.receiptDate} readOnly className="bg-gray-50" /></div>
            </div>
          </Card>
          <Card title="Details">
            <DataTable value={familyMembers} className="p-datatable-sm" showGridlines stripedRows paginator rows={5}>
              <Column field="srNo" header="Sr.No." />
              <Column field="name" header="Member Name" sortable />
              <Column field="relationship" header="Relation with Deceased" sortable />
              <Column field="business" header="Business" />
              <Column field="dob" header="Date of Birth" />
            </DataTable>
          </Card>

          <Card title="Details of Family Member who has Applied for Appointment">
            <DataTable value={[selectedApp]} className="p-datatable-sm" showGridlines stripedRows>
              <Column field="applicantName" header="Applicant Name" />
              <Column field="gender" header="Gender" />
              <Column field="dob" header="Date of Birth" />
              <Column field="mobile" header="Mobile No." />
              <Column field="relationship" header="Relation Deceased Teacher" />
              <Column field="maritalStatus" header="Marital Status" />
              <Column field="qualification" header="Educational Qualification" />
              <Column field="postOption" header="Cadre for Appointment" />
              <Column field="cadreDesignation" header="Cadre for Designation" />
              <Column field="tetStatus" header="Status of TET" />
            </DataTable>
            <br />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-bold">application status*</label>
             <InputText placeholder="The application has been forwarded to the Division" className="bg-gray-50" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Remark *</label>
                <InputTextarea rows={3} placeholder="Enter your remarks here..." />
              </div>
            </div>
          </Card>
          <Card title="Document Details">
            <DataTable value={documents} className="p-datatable-sm" showGridlines stripedRows paginator rows={10}>
              <Column field="srNo" header="Sr. No" style={{width: '50px'}} />
              <Column field="docName" header="Document" />
              <Column header="View Document" body={() => <Button icon="pi pi-file-pdf" className="p-button-text p-button-danger" label="View" />} />
            </DataTable>
          </Card>
          <Card title="Action" className="bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-bold">Take Action *</label>
                <Dropdown 
                  value={actionValue} 
                  options={[
                    { label: "Appointment order issued", value: "issued" },
                    { label: "Paid Amount", value: "paid" },
                    { label: "NOC has been released", value: "noc" }
                  ]} 
                  onChange={(e) => setActionValue(e.value)} 
                  placeholder="Select" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Remark *</label>
                <InputTextarea rows={3} placeholder="Enter your remarks here..." />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button label="Submit" className="p-button-success px-6" />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
};

export default DecisionOnPendingApplications;