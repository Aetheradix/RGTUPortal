import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { DataTable, type DataTableExpandedRows, type DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
interface HODApplication {
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
const HodAnukampaAction: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showList, setShowList] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [selectedApp, setSelectedApp] = useState<HODApplication | null>(null);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);
  const detailRef = useRef<HTMLDivElement>(null);
  const toast = useRef<Toast>(null);
  const districts = ["Bhopal", "Raisen", "Rajgarh", "Sehore", "Vidisha", "Indore", "Jabalpur", "Sagar"].map(d => ({ label: d, value: d }));
  const mockData: HODApplication[] = [
    {
      id: 1, deceasedCode: "10023451", deceasedStaff: "Puran Singh Kushawah", designation: "Lecturer", dod: "28/12/2021",
      applicantName: "BRAJESH KUSHVAH", gender: "Male", classType: "S.C.", dob: "10/08/1997", mobile: "70477701125",
      relationship: "Son", maritalStatus: "Unmarried", postOption: "Academic Cadre", qualification: "12 PCM B SC COMPUTER SCIENCE",
      tetStatus: "No", lastPostingDistrict: "Bhopal", address: "Gram Post Pipaliya, Tehsil Huzur, Dist Bhopal",
      familyCount: 5, department: "Higher Education", receiptDate: "15/02/2022"
    }
  ];
  const familyMembers = [
    { sr: 1, name: "KHILONI KUSHWAH", relation: "Wife/ Husband", business: "No Business", dob: "01/01/1973" },
    { sr: 2, name: "RAHUL KUSHWAH", relation: "Son", business: "No Business", dob: "17/07/1995" },
    { sr: 3, name: "BRAJESH KUSHWAH", relation: "Son", business: "No Business", dob: "10/08/1997" }
  ];
  const documents = [
    { sr: 1, name: "Death certificate of deceased government servant" },
    { sr: 2, name: "Mark sheet or birth certificate" },
    { sr: 3, name: "Certificate of being a local/native" }
  ];
  const handleActionClick = (rowData: HODApplication) => {
    setSelectedApp(rowData);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth' }), 200);
  };
  const handleSave = () => {
    confirmDialog({
      message: 'Are you sure you want to proceed with this action?',
      header: 'Confirmation',
      icon: 'pi pi-question-circle',
      acceptClassName: 'p-button-success',
      accept: () => {
        toast.current?.show({ severity: 'success', summary: 'HOD Action', detail: 'Application Processed Successfully!', life: 3000 });
        setSelectedApp(null);
      }
    });
  };
  const rowExpansionTemplate = (data: HODApplication) => (
    <div className="p-4 bg-orange-50 border-l-4 border-orange-400 ml-12 text-sm grid grid-cols-2 gap-2">
      <p><strong>Relationship:</strong> {data.relationship}</p>
      <p><strong>Marital Status:</strong> {data.maritalStatus}</p>
      <p><strong>Post Option:</strong> {data.postOption}</p>
      <p><strong>Qualification:</strong> {data.qualification}</p>
      <p><strong>TET Status:</strong> {data.tetStatus}</p>
    </div>
  );
  return (
    <PageLayout title="HOD Anukampa Action">
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className="bg-white p-6 rounded shadow-sm border mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold">Select District Name*</label>
            <Dropdown value={selectedDistrict} options={districts} onChange={(e) => setSelectedDistrict(e.value)} placeholder="--Select--" filter className="w-full" />
          </div>
          <div className="flex gap-2">
            <Button label="Search" icon="pi pi-search" onClick={() => setShowList(true)} className="bg-blue-800" />
            <Button label="Clear" icon="pi pi-refresh" onClick={() => {setShowList(false); setSelectedDistrict(null); setSelectedApp(null);}} className="p-button-outlined" />
          </div>
        </div>
      </div>
      {showList && (
        <Card title="Details" className="mb-6">
          <DataTable 
            value={mockData} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate} dataKey="id"
            paginator rows={10} showGridlines stripedRows className="p-datatable-sm"
            globalFilter={globalFilter} header={<div className="flex justify-end"><span className="p-input-icon-left"><i className="pi pi-search"/><InputText value={globalFilter} onChange={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." className="p-inputtext-sm"/></span></div>}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column field="id" header="Sr. No." />
            <Column field="deceasedStaff" header="Deceased Staff Officer" sortable />
            <Column field="designation" header="Designation" />
            <Column field="dod" header="Date of Death" />
            <Column field="applicantName" header="Applicant Name" />
            <Column field="gender" header="Gender" />
            <Column field="classType" header="Class" />
            <Column field="dob" header="Applicant's D.O.B" />
            <Column header="Print" body={() => <Button icon="pi pi-print" className="p-button-text p-button-info" onClick={() => window.print()} />} />
            <Column header="Action" body={(rowData: HODApplication) => <Button label="Action" icon="pi pi-external-link" className="p-button-success p-button-sm" onClick={() => handleActionClick(rowData)} />} />
          </DataTable>
        </Card>
      )}
      {selectedApp && (
        <div ref={detailRef} className="space-y-6 animate-fade-in pb-10">
          <h2 className="text-xl font-bold text-blue-900 border-b-2 border-blue-200 pb-2">Register appropriate action on Anukampa application at H.O. level</h2>
          
          <Card title="Details of Deceased Employee">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex flex-col"><label className="font-bold text-gray-600">Employee Code*</label><InputText value={selectedApp.deceasedCode} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="font-bold text-gray-600">Name*</label><InputText value={selectedApp.deceasedStaff} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="font-bold text-gray-600">Gender*</label><InputText value={selectedApp.gender} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="font-bold text-gray-600">Last Posting District*</label><InputText value={selectedApp.lastPostingDistrict} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="font-bold text-gray-600">Designation*</label><InputText value={selectedApp.designation} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="font-bold text-gray-600">Date of Death*</label><InputText value={selectedApp.dod} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col md:col-span-2"><label className="font-bold text-gray-600">Address*</label><InputText value={selectedApp.address} readOnly className="bg-gray-50" /></div>
              <div className="flex flex-col"><label className="font-bold text-gray-600">Receipt Date*</label><InputText value={selectedApp.receiptDate} readOnly className="bg-gray-50" /></div>
            </div>
          </Card>
          <Card title="Information of Family Members">
            <DataTable value={familyMembers} showGridlines className="p-datatable-sm mb-4">
              <Column field="sr" header="Sr.No." />
              <Column field="name" header="Name of Member" />
              <Column field="relation" header="Relationship" />
              <Column field="business" header="Business" />
              <Column field="dob" header="Date Of Birth" />
            </DataTable>
          </Card>
          <Card title="Details of Documents">
            <DataTable value={documents} showGridlines className="p-datatable-sm">
              <Column field="sr" header="Sr. No" style={{width: '4rem'}} />
              <Column field="name" header="Document Name" />
              <Column header="View" body={() => <Button icon="pi pi-file-pdf" className="p-button-text p-button-danger p-0" />} />
            </DataTable>
          </Card>
          <Card title="Final Action Selection" className="bg-blue-50 border-2 border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-bold">Action*</label>
                <Dropdown 
                  options={[
                    { label: "Objection/Pending", value: "objection" },
                    { label: "Accept Application", value: "accept" },
                    { label: "Forward to Divisional Director", value: "div_dir" },
                    { label: "Forward to District Officer", value: "dist_off" }
                  ]} 
                  placeholder="- Select -" className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold">Remarks</label>
                <InputTextarea rows={2} placeholder="Enter your remarks here..." />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <Button label="Clear" icon="pi pi-times" className="p-button-outlined p-button-secondary" onClick={() => setSelectedApp(null)} />
              <Button label="Save" icon="pi pi-check" className="p-button-success px-10" onClick={handleSave} />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
};
export default HodAnukampaAction;