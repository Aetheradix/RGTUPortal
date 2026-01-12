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
}

interface FamilyMember {
  srNo: number;
  name: string;
  relationship: string;
  business: string;
  dob: string;
}

interface DocumentItem {
  srNo: number;
  docName: string;
}

const ActionAnukampaAppointmentHo: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showList, setShowList] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [selectedApp, setSelectedApp] = useState<AnukampaApplication | null>(null);
  const [actionValue, setActionValue] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const districts = [
    "Agar Malwa", "Alirajpur", "Anuppur", "Ashok Nagar", "Balaghat", "Barwani",
    "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara",
    "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior",
    "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa",
    "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch",
    "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna",
    "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri",
    "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"
  ].map(d => ({ label: d, value: d }));

  const divisions = [
    "Bhopal", "Indore", "Jabalpur", "Gwalior", "Rewa", "Sagar", "Ujjain", "Chambal", "Shahdol"
  ].map(d => ({ label: d, value: d }));

  const mockData: AnukampaApplication[] = [
    {
      id: 1,
      deceasedCode: "10023451",
      deceasedStaff: "Puran Singh Kushawah",
      designation: "Asstt Teacher (LDT)",
      dod: "28/12/2021",
      applicantName: "BRAJESH KUSHVAH",
      gender: "Male",
      classType: "S.C.",
      dob: "10/08/1997",
      mobile: "70477701125",
      relationship: "Son",
      maritalStatus: "Unmarried",
      postOption: "Academic Cadre",
      qualification: "12 PCM B SC COMPUTER SCIENCE",
      tetStatus: "No",
      lastPostingDistrict: "Bhopal",
      address: "Gram Post Pipaliya, Tehsil Huzur, Dist Bhopal",
      familyCount: 5,
      department: "School Education Department",
      receiptDate: "15/02/2022"
    }
  ];

  const familyMembers: FamilyMember[] = [
    { srNo: 1, name: "KHILONI KUSHWAH", relationship: "Wife/ Husband", business: "No Business", dob: "01/01/1973" },
    { srNo: 2, name: "RAHUL KUSHWAH", relationship: "Son", business: "No Business", dob: "17/07/1995" },
    { srNo: 3, name: "BRAJESH KUSHWAH", relationship: "Son", business: "No Business", dob: "10/08/1997" },
    { srNo: 4, name: "CHHAYA KUSHWAH", relationship: "Daughter", business: "No Business", dob: "02/08/2002" },
    { srNo: 5, name: "Nitin Kushwah", relationship: "Son", business: "No Business", dob: "30/07/2003" }
  ];

  const documents: DocumentItem[] = [
    { srNo: 1, docName: "Death certificate of the deceased employee" },
    { srNo: 2, docName: "High school mark sheet or birth certificate" },
    { srNo: 3, docName: "Certificate of local/permanent residence" },
    { srNo: 4, docName: "Caste certificate (SC/ST/OBC)" },
    { srNo: 5, docName: "Educational Qualification Certificate" },
    { srNo: 6, docName: "Family Consent Affidavit" },
    { srNo: 7, docName: "Applicant's Photo" },
    { srNo: 8, docName: "Ration card/authenticated family documents" }
  ];

  const handleActionClick = (rowData: AnukampaApplication): void => {
    setSelectedApp(rowData);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  };

  const header = (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Show</span>
        <Dropdown options={[10, 25, 50, 100]} placeholder="10" className="w-20" />
        <span className="text-sm font-medium">entries</span>
      </div>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText 
          type="search" 
          value={globalFilter}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} 
          placeholder="Search..." 
          className="p-inputtext-sm"
        />
      </span>
    </div>
  );

  return (
    <PageLayout title="Action Report on Compassionate Appointment at H.O. Level">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600 uppercase">Select District*</label>
            <Dropdown 
              value={selectedDistrict} 
              options={districts} 
              onChange={(e: DropdownChangeEvent) => setSelectedDistrict(e.value)} 
              placeholder="Select District" 
              filter 
              className="w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button label="Search" icon="pi pi-search" onClick={() => setShowList(true)} className="bg-blue-700 border-none px-6" />
            <Button label="Clear" icon="pi pi-refresh" onClick={() => {setShowList(false); setSelectedDistrict(null); setSelectedApp(null);}} className="p-button-outlined p-button-secondary" />
          </div>
        </div>
      </div>

      {showList && (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 overflow-hidden mb-6">
          <DataTable 
            value={mockData} header={header} globalFilter={globalFilter}
            paginator rows={10} className="p-datatable-sm" stripedRows showGridlines responsiveLayout="scroll"
          >
            <Column field="id" header="Sr.No." style={{ width: '3rem' }} />
            <Column field="deceasedStaff" header="Deceased Staff Officer" sortable />
            <Column field="designation" header="Designation" />
            <Column field="dod" header="Date of Death" />
            <Column field="applicantName" header="Applicant Name" />
            <Column field="gender" header="Gender" />
            <Column field="classType" header="Class" />
            <Column field="dob" header="Applicant's D.O.B" />
            <Column field="mobile" header="Mobile No." />
            <Column field="relationship" header="Relationship" />
            <Column field="maritalStatus" header="Marital Status" />
            <Column field="postOption" header="Selected Post Option" />
            <Column field="qualification" header="Educational Qualification" />
            <Column field="tetStatus" header="TET Passing Status" />
            <Column header="Print Note Sheet" body={() => <Button label="Print" icon="pi pi-print" className="p-button-sm p-button-info p-button-outlined" />} />
            <Column header="Action" body={(rowData: AnukampaApplication) => <Button label="Action" icon="pi pi-external-link" className="p-button-sm p-button-success" onClick={() => handleActionClick(rowData)} />} />
          </DataTable>
        </div>
      )}

      {selectedApp && (
        <div ref={detailRef} className="space-y-6 pb-10 animate-fade-in">
          <h2 className="text-xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2">Register appropriate action on compassionate application at H.O. level</h2>
          
          <Card title="Details of Deceased Employee">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col"><label className="text-xs font-bold text-gray-500 uppercase">Employee Code*</label><InputText value={selectedApp.deceasedCode} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold text-gray-500 uppercase">Name of Deceased Employee*</label><InputText value={selectedApp.deceasedStaff} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold text-gray-500 uppercase">Gender*</label><InputText value={selectedApp.gender} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold text-gray-500 uppercase">Last Posting District*</label><InputText value={selectedApp.lastPostingDistrict} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold text-gray-500 uppercase">Deceased Staff Cadre*</label><InputText value={selectedApp.postOption} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold text-gray-500 uppercase">Deceased Officer Designation*</label><InputText value={selectedApp.designation} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col md:col-span-2"><label className="text-xs font-bold text-gray-500 uppercase">Last Office and Employee Address*</label><InputText value={selectedApp.address} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold text-gray-500 uppercase">Cause of Death*</label><InputText value="Natural" readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold text-gray-500 uppercase">Date of Death*</label><InputText value={selectedApp.dod} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold text-gray-500 uppercase">Family Count*</label><InputText value={selectedApp.familyCount.toString()} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold text-gray-500 uppercase">Department Name*</label><InputText value={selectedApp.department} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold text-gray-500 uppercase">Date of Receipt of Application*</label><InputText value={selectedApp.receiptDate} readOnly className="bg-gray-50" /></div>
            </div>
          </Card>

          <Card title="Details of Family Members">
            <DataTable value={familyMembers} className="p-datatable-sm" showGridlines stripedRows>
              <Column field="srNo" header="Sr.No." style={{ width: '4rem' }} />
              <Column field="name" header="Name of Member" />
              <Column field="relationship" header="Relationship" />
              <Column field="business" header="Business" />
              <Column field="dob" header="Date Of Birth" />
            </DataTable>
          </Card>

          <Card title="Details of Documents">
            <DataTable value={documents} className="p-datatable-sm" showGridlines stripedRows>
              <Column field="srNo" header="Sr. No" style={{ width: '4rem' }} />
              <Column field="docName" header="Document Name" />
              <Column header="View Document" body={() => <Button icon="pi pi-file-pdf" className="p-button-text p-button-danger p-0" />} />
            </DataTable>
          </Card>
          <Card title="Action Section" className="bg-yellow-50 border-yellow-200">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-2 w-full md:w-1/2">
                <label className="font-bold">Action *</label>
                <Dropdown 
                  value={actionValue} 
                  options={[
                    { label: "Objection/Liability in Application", value: "objection" },
                    { label: "Accept Application", value: "accept" },
                    { label: "Forward Application to Divisional Director", value: "fwd_director" },
                    { label: "Forward Application to District Education Officer", value: "fwd_deo" }
                  ]} 
                  onChange={(e) => setActionValue(e.value)} 
                  placeholder="Select" 
                  className="w-full" 
                />
              </div>

              {actionValue === "objection" && (
                <div className="p-4 border rounded bg-white">
                  <p className="font-bold mb-3 text-blue-800">Details of Action Taken for Application and Objection</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="font-semibold">If there is Any Objection *</label>
                        <Dropdown options={["No Regular Position Vacant", "Application Submitted Late", "Incomplete Application", "Required Documents Not Attached", "Applicant Lacks Educational Qualification", "Dependent is a Minor (Under 21 Years)"].map(o=>({label:o, value:o}))} placeholder="Select" />
                    </div>
                    <div className="flex flex-col gap-2"><label className="font-semibold">Objection Details *</label><InputText placeholder="Enter details..." /></div>
                    <div className="flex flex-col gap-2 md:col-span-2"><label className="font-semibold">Description of Action Taken *</label><InputTextarea rows={2} placeholder="Describe action..." /></div>
                  </div>
                </div>
              )}

              {actionValue === "fwd_director" && (
                <div className="p-4 border rounded bg-white">
                  <p className="font-bold mb-3 text-blue-800">Divisional Director and Remark</p>
                  <div className="flex flex-col gap-2 md:w-1/2">
                    <label className="font-semibold">Division *</label>
                    <Dropdown options={divisions} placeholder="Select Division" />
                  </div>
                </div>
              )}

              {actionValue === "fwd_deo" && (
                <div className="p-4 border rounded bg-white">
                  <p className="font-bold mb-3 text-blue-800">District and Remark</p>
                  <div className="flex flex-col gap-2 md:w-1/2">
                    <label className="font-semibold">District *</label>
                    <Dropdown options={districts} placeholder="Select District" filter />
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="font-bold">Remark *</label>
                <InputTextarea rows={3} placeholder="Enter your remarks here..." className="w-full" />
              </div>

              <div className="flex justify-end">
                <Button label="Submit Action" icon="pi pi-check-circle" className="p-button-success px-8 shadow-md" />
              </div>
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
};

export default ActionAnukampaAppointmentHo;
