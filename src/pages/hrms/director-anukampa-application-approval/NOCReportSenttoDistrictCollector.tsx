import React, { useState, useRef, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
interface NOCApplication {
  id: number;
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
  deceasedCode: string;
  lastPostingDistrict: string;
  address: string;
  familyCount: number;
  department: string;
  receiptDate: string;
  cadreDesignation: string;
}
const NOCReportDistrictCollector: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showList, setShowList] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [selectedApp, setSelectedApp] = useState<NOCApplication | null>(null);
  const [jobStatus, setJobStatus] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const districts = [
    "Agar Malwa", "Alirajpur", "Anuppur", "Ashok Nagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", 
    "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", 
    "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", 
    "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", 
    "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", 
    "Ujjain", "Umaria", "Vidisha"
  ].map(d => ({ label: d, value: d }));
  const mockData: NOCApplication[] = [
    { 
      id: 1, deceasedStaff: "Puran Singh Kushawah", designation: "Asstt Teacher (LDT)", dod: "28/12/2021", 
      applicantName: "BRAJESH KUSHVAH", gender: "Male", classType: "S.C.", dob: "10/08/1997", 
      mobile: "70477701125", relationship: "Son", maritalStatus: "Unmarried", postOption: "Academic Cadre", 
      qualification: "12 PCM B SC COMPUTER SCIENCE", tetStatus: "No", deceasedCode: "10023451",
      lastPostingDistrict: "Bhopal", address: "Gram Post Pipaliya, Bhopal", familyCount: 5, 
      department: "School Education", receiptDate: "15/02/2022", cadreDesignation: "Laboratory Teacher"
    }
  ];
  const handleActionClick = (rowData: NOCApplication) => {
    setSelectedApp(rowData);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth' }), 150);
  };
  const header = (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm">Show</span>
        <Dropdown options={[10, 25, 50]} placeholder="10" className="w-20" />
        <span className="text-sm">entries</span>
      </div>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" value={globalFilter} onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search:" className="p-inputtext-sm" />
      </span>
    </div>
  );
  return (
    <PageLayout title="Director Anukampa Application Approval">
      <div className="text-lg font-bold text-blue-800 mb-4">NOC Report Sent To District Collector</div>

      <div className="bg-white p-6 rounded shadow-sm border mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase">Select District *</label>
            <Dropdown value={selectedDistrict} options={districts} onChange={(e: DropdownChangeEvent) => setSelectedDistrict(e.value)} placeholder="Select" filter className="w-full" />
          </div>
          <div className="flex gap-2">
            <Button label="Search" icon="pi pi-search" onClick={() => setShowList(true)} className="bg-blue-700 border-none" />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-outlined p-button-secondary" onClick={() => {setShowList(false); setSelectedApp(null);}} />
          </div>
        </div>
      </div>
      {showList && (
        <Card title="Details" className="mb-6">
          <DataTable value={mockData} header={header} globalFilter={globalFilter} paginator rows={10} className="p-datatable-sm" showGridlines stripedRows>
            <Column field="id" header="Sr.No." />
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
            <Column header="Action" body={(rowData) => <Button label="Action" className="p-button-success p-button-sm" onClick={() => handleActionClick(rowData)} />} />
          </DataTable>
        </Card>
      )}
      {selectedApp && (
        <div ref={detailRef} className="space-y-6 pb-20 animate-fade-in">
          <h2 className="text-xl font-bold text-blue-700 border-b-2 border-blue-100 pb-2">NOC Report was sent to the District Collector at the Director level</h2>

          <Card title="Details of Deceased Employee">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex flex-col"><label className="text-xs font-bold uppercase">Employee Code*</label><InputText value={selectedApp.deceasedCode} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold uppercase">Name of Deceased Employee*</label><InputText value={selectedApp.deceasedStaff} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold uppercase">Gender*</label><InputText value={selectedApp.gender} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold uppercase">Last Posting District*</label><InputText value={selectedApp.lastPostingDistrict} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold uppercase">Deceased Staff Cadre*</label><InputText value={selectedApp.postOption} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold uppercase">Designation*</label><InputText value={selectedApp.designation} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col md:col-span-2"><label className="text-xs font-bold uppercase">Address*</label><InputText value={selectedApp.address} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold uppercase">Cause of Death*</label><InputText value="Natural" readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold uppercase">Date of Death*</label><InputText value={selectedApp.dod} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold uppercase">Family Count*</label><InputText value={selectedApp.familyCount.toString()} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold uppercase">Department*</label><InputText value={selectedApp.department} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="text-xs font-bold uppercase">Receipt Date*</label><InputText value={selectedApp.receiptDate} readOnly className="bg-gray-50" /></div>
            </div>
          </Card>

          <Card title="Information About All the Family Members">
            <DataTable value={[{srNo: 1, name: "KHILONI KUSHWAH", rel: "Wife/Husband", biz: "No Business", dob: "01/01/1973"}]} className="p-datatable-sm" showGridlines stripedRows>
              <Column field="srNo" header="Sr.No." />
              <Column field="name" header="Name of Member" />
              <Column field="rel" header="Relationship" />
              <Column field="biz" header="Business" />
              <Column field="dob" header="Date Of Birth" />
            </DataTable>
          </Card>

          <Card title="Details of the Family Member who has Applied for Appointment">
            <DataTable value={[selectedApp]} className="p-datatable-sm" showGridlines stripedRows>
              <Column field="applicantName" header="Applicant Name" />
              <Column field="gender" header="Gender" />
              <Column field="dob" header="Date of Birth" />
              <Column field="mobile" header="Mobile No." />
              <Column field="relationship" header="Relation" />
              <Column field="maritalStatus" header="Marital Status" />
              <Column field="qualification" header="Educational Qualification" />
              <Column field="postOption" header="Cadre for Appointment" />
              <Column field="cadreDesignation" header="Cadre for Designation" />
              <Column field="tetStatus" header="TET Status" />
            </DataTable>
          </Card>

          <Card title="Documents">
            <DataTable value={[{srNo: 1, doc: "Death certificate"}]} className="p-datatable-sm" showGridlines stripedRows>
              <Column field="srNo" header="Sr. No" style={{width: '60px'}} />
              <Column field="doc" header="Document" />
              <Column header="View Document" body={() => <Button icon="pi pi-file-pdf" className="p-button-text p-button-danger" label="View" />} />
            </DataTable>
          </Card>

          <Card title="Job Status" className="bg-blue-50 border-2 border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-bold">Enter Job Status *</label>
                <Dropdown 
                  value={jobStatus} 
                  options={[
                    { label: "Pending by Collector", value: "pending_collector" },
                    { label: "Pending by DEO", value: "pending_deo" },
                    { label: "Got a Job", value: "got_job" }
                  ]} 
                  onChange={(e: DropdownChangeEvent) => setJobStatus(e.value)} 
                  placeholder="Select" 
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Remark *</label>
                <InputText value="" placeholder="Enter remark..." />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Button label="Save" icon="pi pi-save" className="p-button-success px-10 shadow-md" />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
};

export default NOCReportDistrictCollector;