import React, { useState, useRef, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Toast } from "primereact/toast";

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

const DecidePendingHoLevel: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showList, setShowList] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [selectedApp, setSelectedApp] = useState<NOCApplication | null>(null);
  const [jobStatus, setJobStatus] = useState<string | null>(null);
  
  const detailRef = useRef<HTMLDivElement>(null);
  const toast = useRef<Toast>(null);

  const districts = [
    "Agar Malwa", "Alirajpur", "Anuppur", "Ashok Nagar", "Balaghat", "Bhopal", "Indore", "Ujjain"
  ].map(d => ({ label: d, value: d }));

  const mockData: NOCApplication[] = [
    { 
      id: 1, deceasedStaff: "Puran Singh Kushawah", designation: "Asstt Teacher (LDT)", dod: "28/12/2021", 
      applicantName: "BRAJESH KUSHVAH", gender: "Male", classType: "S.C.", dob: "10/08/1997", 
      mobile: "70477701125", relationship: "Son", maritalStatus: "Unmarried", postOption: "Academic Cadre", 
      qualification: "12 PCM B SC COMPUTER SCIENCE", tetStatus: "No", deceasedCode: "10023451",
      lastPostingDistrict: "Bhopal", address: "Gram Post Pipaliya, Bhopal", familyCount: 5, 
      department: "School Education Department", receiptDate: "15/02/2022", cadreDesignation: "Laboratory Teacher"
    }
  ];
  const acceptSave = () => {
    toast.current?.show({ severity: 'success', summary: 'Confirmed', detail: 'Decision saved successfully', life: 3000 });
  };

  const confirmSave = () => {
    if (!jobStatus) {
      toast.current?.show({ severity: 'warn', summary: 'Warning', detail: 'Please select Job Status first', life: 3000 });
      return;
    }
    confirmDialog({
      message: 'Are you sure you want to save this decision?',
      header: 'Save Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-success',
      rejectClassName: 'p-button-text p-button-secondary',
      accept: acceptSave,
      reject: () => {}
    });
  };
  const handleActionClick = (rowData: NOCApplication) => {
    setSelectedApp(rowData);
    setJobStatus(null);
    setTimeout(() => detailRef.current?.scrollIntoView({ behavior: 'smooth' }), 150);
  };
  const tableHeader = (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm">Show</span>
        <Dropdown options={[10, 25, 50, 100]} placeholder="10" className="w-20 p-inputtext-sm" />
        <span className="text-sm">entries</span>
      </div>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" value={globalFilter} onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search:" className="p-inputtext-sm" />
      </span>
    </div>
  );
  return (
    <PageLayout title="Decide on Pending Applications at H.O. Level">
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className="text-xs text-gray-500 mb-2 uppercase tracking-tight">
        HRMS &raquo; Head Office Anukampa Application Approval &raquo; NOC Report Sent To District Collector
      </div>
      
      <h1 className="text-xl font-bold text-blue-900 mb-6">Decide on Pending Applications at H.O. Level</h1>
      <div className="bg-white p-6 rounded shadow-sm border border-gray-200 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-700">Select District *</label>
            <Dropdown value={selectedDistrict} options={districts} onChange={(e: DropdownChangeEvent) => setSelectedDistrict(e.value)} placeholder="Select" filter className="w-full" />
          </div>
          <Button label="Search" icon="pi pi-search" onClick={() => setShowList(true)} className="p-button-primary" />
        </div>
      </div>
      {showList && (
        <Card title="Details" className="mb-6 shadow-sm">
          <DataTable value={mockData} header={tableHeader} globalFilter={globalFilter} paginator rows={10} className="p-datatable-sm" showGridlines stripedRows responsiveLayout="scroll">
            <Column field="id" header="Sr.No." style={{ width: '3rem' }} />
            <Column field="deceasedStaff" header="Deceased Staff Officer" />
            <Column field="designation" header="Designation" />
            <Column field="dod" header="Date of Death" />
            <Column field="applicantName" header="Applicant Name" className="font-bold" />
            <Column field="mobile" header="Mobile No." />
            <Column field="relationship" header="Applicant's Relationship with Deceased Teacher" />
            <Column field="postOption" header="Selected Option of Post for Appointment" />
            <Column header="Action" body={(rowData) => <Button label="Action" icon="pi pi-external-link" className="p-button-success p-button-sm" onClick={() => handleActionClick(rowData)} />} />
          </DataTable>
        </Card>
      )}

      {selectedApp && (
        <div ref={detailRef} className="space-y-8 pb-20 animate-fade-in">
          <h2 className="text-lg font-bold text-white bg-blue-800 p-3 rounded">NOC Report was sent to the District Collector at the H.O. level</h2>

          <Card title="Details of Deceased Employee">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex flex-col"><label className="font-bold">Employee Code *</label><InputText value={selectedApp.deceasedCode} readOnly className="bg-gray-100" /></div>
              <div className="flex flex-col"><label className="font-bold">Name of Deceased Employee *</label><InputText value={selectedApp.deceasedStaff} readOnly className="bg-gray-100" /></div>
              <div className="flex flex-col"><label className="font-bold">Gender *</label><InputText value={selectedApp.gender} readOnly className="bg-gray-100" /></div>
              <div className="flex flex-col"><label className="font-bold">Last Posting District *</label><InputText value={selectedApp.lastPostingDistrict} readOnly className="bg-gray-100" /></div>
              <div className="flex flex-col"><label className="font-bold">Deceased Officer/Employee Designation *</label><InputText value={selectedApp.designation} readOnly className="bg-gray-100" /></div>
              <div className="flex flex-col md:col-span-1"><label className="font-bold">Date of Death *</label><InputText value={selectedApp.dod} readOnly className="bg-gray-100" /></div>
              <div className="flex flex-col md:col-span-3"><label className="font-bold">Last Office and Employee Address *</label><InputText value={selectedApp.address} readOnly className="bg-gray-100" /></div>
            </div>
          </Card>

          <Card title="Job Status Update" className="border-t-4 border-t-blue-600 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-blue-900 text-lg">Enter Job Status *</label>
                <Dropdown 
                  value={jobStatus} 
                  options={[
                    { label: "Pending by Collector", value: "Pending by Collector" },
                    { label: "Pending by DEO", value: "Pending by DEO" },
                    { label: "Got a Job", value: "Got a Job" }
                  ]} 
                  onChange={(e: DropdownChangeEvent) => setJobStatus(e.value)} 
                  placeholder="Select Status" 
                  className="w-full border-2"
                />
              </div>
            </div>

            {jobStatus === "Got a Job" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-50 rounded-lg border border-dashed border-blue-300 animate-fade-in">
                <div className="flex flex-col gap-1"><label className="font-bold text-sm">Appointment Letter No. *</label><InputText placeholder="Enter No." /></div>
                <div className="flex flex-col gap-1"><label className="font-bold text-sm">Appointment Order No. *</label><InputText placeholder="Enter Order No." /></div>
                <div className="flex flex-col gap-1"><label className="font-bold text-sm">Date of Letter *</label><InputText type="date" /></div>
                <div className="flex flex-col gap-1"><label className="font-bold text-sm">Position Appointed *</label><InputText placeholder="Designation" /></div>
                <div className="flex flex-col gap-1"><label className="font-bold text-sm">Department Name *</label><InputText placeholder="Dept Name" /></div>
                <div className="flex flex-col gap-1"><label className="font-bold text-sm">Place of Posting *</label><InputText placeholder="Place" /></div>
                <div className="flex flex-col gap-1">
                  <label className="font-bold text-sm">Appointment Letter (PDF) *</label>
                  <input type="file" className="text-xs bg-white p-2 border rounded" />
                </div>
              </div>
            )}

            <div className="flex justify-end mt-8">
              <Button 
                label="Save" 
                icon="pi pi-check-circle" 
                onClick={confirmSave}
                className="p-button-lg p-button-success px-12 shadow-md" 
              />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
};
export default DecidePendingHoLevel;        