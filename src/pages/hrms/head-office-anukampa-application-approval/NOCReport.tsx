import React, { useState, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

interface NOCReportData {
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
  status: string;
  deptName: string;
  hasNocDoc: boolean;
  hasAppointDoc: boolean;
}

const HoLevelNocReport: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const districts = [
    "Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Rewa"
  ].map(d => ({ label: d, value: d }));

  const mockData: NOCReportData[] = [
    {
      id: 1,
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
      status: "Pending by collector",
      deptName: "Nil",
      hasNocDoc: false,
      hasAppointDoc: false
    },
    {
      id: 2,
      deceasedStaff: "Satendra Bahadur Singh",
      designation: "Madhyamik Shaikshak",
      dod: "15/04/2022",
      applicantName: "SHAKSHAM SINGH",
      gender: "Male",
      classType: "S.C.",
      dob: "12/12/1996",
      mobile: "70477701125",
      relationship: "Son",
      maritalStatus: "Unmarried",
      postOption: "Clerical Cadre",
      qualification: "GRADUATE",
      tetStatus: "No",
      status: "Pending by DEO",
      deptName: "Nil",
      hasNocDoc: false,
      hasAppointDoc: false
    },
    {
      id: 3,
      deceasedStaff: "Achhe Lal Patel",
      designation: "Asstt Grade-2",
      dod: "16/01/2023",
      applicantName: "PRAMOD KUMAR PATEL",
      gender: "Male",
      classType: "O.B.C.",
      dob: "02/10/2000",
      mobile: "70477701125",
      relationship: "Son",
      maritalStatus: "Unmarried",
      postOption: "Clerical Cadre",
      qualification: "GRADUATE",
      tetStatus: "No",
      status: "Got a job",
      deptName: "Health department",
      hasNocDoc: true,
      hasAppointDoc: true
    }
  ];

  const getStatusSeverity = (status: string) => {
    switch (status) {
      case 'Got a job': return 'success';
      case 'Pending by collector': return 'warning';
      case 'Pending by DEO': return 'info';
      default: return 'secondary';
    }
  };

  const tableHeader = (
    <div className="flex justify-between items-center py-2">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Show</span>
        <Dropdown options={[10, 25, 50]} placeholder="10" className="w-20 p-inputtext-sm" />
        <span className="text-sm font-medium">entries</span>
      </div>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText 
          value={globalFilter} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} 
          placeholder="Search..." 
          className="p-inputtext-sm" 
        />
      </span>
    </div>
  );

  return (
    <PageLayout title="H.O. level NOC Report">
      <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">
        HRMS &raquo; Head Office Anukampa Application Approval &raquo; NOC Report
      </div>
      
      <h1 className="text-2xl font-bold text-blue-900 mb-6 underline underline-offset-8 decoration-blue-200">
        NOC Report
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <div className="flex flex-wrap items-end gap-6">
          <div className="flex flex-col gap-2 min-w-[250px]">
            <label className="font-bold text-gray-700">Select District *</label>
            <Dropdown 
              value={selectedDistrict} 
              options={districts} 
              onChange={(e: DropdownChangeEvent) => setSelectedDistrict(e.value)} 
              placeholder="Select District" 
              filter 
              className="w-full border-blue-100"
            />
          </div>
          <Button 
            label="Search" 
            icon="pi pi-search" 
            onClick={() => setShowTable(true)} 
            className="p-button-primary px-8 shadow-sm" 
          />
          <Button 
            label="Clear" 
            icon="pi pi-refresh" 
            onClick={() => {setShowTable(false); setSelectedDistrict(null); setGlobalFilter("");}} 
            className="p-button-outlined p-button-secondary" 
          />
        </div>
      </div>

      {showTable && (
        <div className="animate-fade-in">
          <Card title="NOC Status Details" className="shadow-md">
            <DataTable
              value={mockData}
              header={tableHeader}
              globalFilter={globalFilter}
              paginator
              rows={10}
              className="p-datatable-sm"
              stripedRows
              showGridlines
              size="small"
              emptyMessage="No reports found for the selected district."
            >
              <Column field="id" header="Sr.No." style={{ width: '3rem' }} />
              <Column field="deceasedStaff" header="Deceased Staff Officer" sortable style={{ minWidth: '12rem' }} />
              <Column field="designation" header="Designation" style={{ minWidth: '10rem' }} />
              <Column field="dod" header="Date of Death" style={{ minWidth: '8rem' }} />
              <Column field="applicantName" header="Applicant Name" className="font-bold text-blue-800" style={{ minWidth: '10rem' }} />
              <Column field="gender" header="Gender" />
              <Column field="classType" header="Class" />
              <Column field="dob" header="Applicant's D.O.B" />
              <Column field="mobile" header="Mobile No." />
              <Column field="relationship" header="Applicant's Relationship with Deceased Teacher" style={{ minWidth: '12rem' }} />
              <Column field="maritalStatus" header="Applicant Marital Status" />
              <Column field="postOption" header="Selected Option of Post for Appointment" style={{ minWidth: '12rem' }} />
              <Column field="qualification" header="Applicant Educational Qualification" style={{ minWidth: '12rem' }} />
              <Column field="tetStatus" header="Status of Passing Primary Teacher Eligibility Test" style={{ minWidth: '10rem' }} />
              <Column 
                field="status" 
                header="Status" 
                body={(rowData: NOCReportData) => (
                  <Tag value={rowData.status} severity={getStatusSeverity(rowData.status)} className="px-3" />
                )} 
              />
              <Column field="deptName" header="Appointment Department Name" style={{ minWidth: '10rem' }} />
              <Column 
                header="NOC Document" 
                body={(rowData: NOCReportData) => (
                  rowData.hasNocDoc ? 
                  <Button icon="pi pi-file-pdf" className="p-button-rounded p-button-danger p-button-text" tooltip="View NOC" /> : 
                  <span className="text-gray-400 italic">Nil</span>
                )} 
              />
              <Column 
                header="Appointment Document" 
                body={(rowData: NOCReportData) => (
                  rowData.hasAppointDoc ? 
                  <Button icon="pi pi-file-pdf" className="p-button-rounded p-button-success p-button-text" tooltip="View Order" /> : 
                  <span className="text-gray-400 italic">Nil</span>
                )} 
              />
            </DataTable>
          </Card>
        </div>
      )}
    </PageLayout>
  );
};

export default HoLevelNocReport;