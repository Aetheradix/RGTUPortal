import React, { useState, useRef, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { FileUpload } from "primereact/fileupload";

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

const DecisionOnPendingApplicationsHo: React.FC = () => {
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
    { srNo: 2, name: "ARSHAD MANSURI", relationship: "Son", business: "No Business", dob: "06/05/1993" },
    { srNo: 3, name: "ASHRAF MANSURI", relationship: "Son", business: "No Business", dob: "21/09/1993" }
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
      <div className="flex items-center gap-2 text-sm font-semibold">
        <span>Show Details</span>
      </div>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" value={globalFilter} onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search:" className="p-inputtext-sm" />
      </span>
    </div>
  );

  return (
    <PageLayout title="Head Office Anukampa Application Approval">
      <div className="text-xl font-bold text-blue-900 mb-4 uppercase text-left">
        Decide on pending applications at H.O. Level
      </div>
      
      <Card className="mb-6 shadow-sm">
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
        <Card title="Application Details" className="mb-6">
          <DataTable value={mockData} header={header} globalFilter={globalFilter} paginator rows={10} className="p-datatable-sm" showGridlines stripedRows>
            <Column field="id" header="Sr.No." />
            <Column field="deceasedStaff" header="Deceased Employee / Officer" />
            <Column field="designation" header="Designation" />
            <Column field="dod" header="Date of Death" />
            <Column field="district" header="District" />
            <Column field="applicantName" header="Applicant Name" />
            <Column field="relationship" header="Relation" />
            <Column header="Dispose" body={(rowData) => <Button label="Dispose" className="p-button-success p-button-sm" onClick={() => handleDispose(rowData)} />} />
          </DataTable>
        </Card>
      )}

      {selectedApp && (
        <div ref={detailRef} className="space-y-6 animate-fade-in pb-20">
          <Card title="PERSONAL INFORMATION">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Employee Code *</label><InputText value={selectedApp.deceasedCode} readOnly className="bg-gray-100" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Name of Deceased Employee *</label><InputText value={selectedApp.deceasedStaff} readOnly className="bg-gray-100" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Gender *</label><InputText value={selectedApp.gender} readOnly className="bg-gray-100" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Category *</label><InputText value={selectedApp.classType} readOnly className="bg-gray-100" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Last Posting District *</label><InputText value={selectedApp.lastPostingDistrict} readOnly className="bg-gray-100" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Designation *</label><InputText value={selectedApp.designation} readOnly className="bg-gray-100" /></div>
              <div className="flex flex-col gap-1 md:col-span-2"><label className="text-xs font-bold uppercase">Address *</label><InputText value={selectedApp.address} readOnly className="bg-gray-100" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-bold uppercase">Date of Death *</label><InputText value={selectedApp.dod} readOnly className="bg-gray-100" /></div>
            </div>
          </Card>

          <Card title="Family Member Details">
            <DataTable value={familyMembers} className="p-datatable-sm" showGridlines stripedRows>
              <Column field="srNo" header="Sr.No." />
              <Column field="name" header="Member Name" />
              <Column field="relationship" header="Relation" />
              <Column field="business" header="Business" />
              <Column field="dob" header="Date of Birth" />
            </DataTable>
          </Card>

          <Card title="Applicant Details & Status">
             <DataTable value={[selectedApp]} className="p-datatable-sm mb-4" showGridlines stripedRows>
                <Column field="applicantName" header="Applicant Name" />
                <Column field="mobile" header="Mobile No." />
                <Column field="qualification" header="Qualification" />
                <Column field="postOption" header="Cadre" />
             </DataTable>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1"><label className="font-bold">Application Status*</label><InputText value="Forwarded to Division" readOnly className="bg-gray-100" /></div>
                <div className="flex flex-col gap-1"><label className="font-bold">H.O. Remark *</label><InputTextarea rows={2} /></div>
             </div>
          </Card>

          <Card title="Document Details">
            <DataTable value={documents} className="p-datatable-sm" showGridlines stripedRows>
              <Column field="srNo" header="Sr. No" style={{width: '50px'}} />
              <Column field="docName" header="Document Name" />
              <Column header="Action" body={() => <Button icon="pi pi-eye" className="p-button-text p-button-info" label="View" />} />
            </DataTable>
          </Card>

          <Card title="Action & Decision" className="bg-blue-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2 text-left">
                <label className="font-bold">Take Action *</label>
                <Dropdown 
                  value={actionValue} 
                  options={[
                    { label: "Appointment order issued", value: "issued" },
                    { label: "Paid Amount", value: "paid" },
                    { label: "NOC has been released, the case has been sent to the District Collector", value: "noc" }
                  ]} 
                  onChange={(e) => setActionValue(e.value)} 
                  placeholder="Select" 
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t pt-4">
              {actionValue === 'issued' && (
                <>
                  <div className="flex flex-col gap-1 text-left"><label className="font-bold text-sm">Letter Number *</label><InputText /></div>
                  <div className="flex flex-col gap-1 text-left"><label className="font-bold text-sm">Order Number *</label><InputText /></div>
                  <div className="flex flex-col gap-1 text-left"><label className="font-bold text-sm">Date *</label><Calendar showIcon /></div>
                  <div className="flex flex-col gap-1 md:col-span-2 text-left"><label className="font-bold text-sm">Place of Posting *</label><InputText /></div>
                </>
              )}

              {actionValue === 'paid' && (
                <>
                  <div className="flex flex-col gap-1 text-left"><label className="font-bold text-sm">Order No. *</label><InputText /></div>
                  <div className="flex flex-col gap-1 text-left"><label className="font-bold text-sm">Check No. *</label><InputText /></div>
                  <div className="flex flex-col gap-1 text-left"><label className="font-bold text-sm">Payment Date *</label><Calendar showIcon /></div>
                </>
              )}
              {actionValue === 'noc' && (
                <div className="md:col-span-3 bg-white p-4 rounded border text-left">
                   <label className="font-bold block mb-2 text-sm">Upload Document (PDF/JPG &lt; 500KB) *</label>
                   <FileUpload 
                     mode="basic" 
                     name="nocDoc" 
                     accept="image/*,application/pdf" 
                     maxFileSize={500000} 
                     chooseLabel="Choose File" 
                     className="p-button-outlined"
                   />
                </div>
              )}
            </div>

            <div className="flex justify-end mt-6">
              <Button label="Save Decision" icon="pi pi-save" className="p-button-success" />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
};

export default DecisionOnPendingApplicationsHo;