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
const DirectorNocReport: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Agar Malwa", value: "Agar Malwa" },
    { label: "Ujjain", value: "Ujjain" },
  ];
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
      status: "Pending by DEO",
      deptName: "Nil",
      hasNocDoc: false,
      hasAppointDoc: false
    }
  ];
  const handleSearch = () => {
    if (selectedDistrict) {
      setShowTable(true);
    } else {
      alert("Please select a district first");
    }
  };
  const handleClear = () => {
    setSelectedDistrict(null);
    setShowTable(false);
    setGlobalFilter("");
  };
  const getStatusSeverity = (status: string) => {
    switch (status) {
      case 'Got a job': return 'success';
      case 'Pending by collector': return 'warning';
      case 'Pending by DEO': return 'info';
      default: return 'secondary';
    }
  };
  const tableHeader = (
    <div className="flex justify-end items-center">
      <span>
        <InputText 
          value={globalFilter} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} 
          placeholder="Search in results..." 
          className="p-inputtext-sm" 
        />
      </span>
    </div>
  );
  return (
    <PageLayout title="HRMS - Director Anukampa Approval">
      <div className="text-xl font-bold text-blue-800 mb-4 uppercase">NOC Report</div>
      <div className="bg-white p-6 rounded shadow-sm border mb-6">
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex flex-col gap-2 w-full md:w-1/4">
            <label className="font-bold text-sm">Select District *</label>
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
            <Button 
              label="Search" 
              icon="pi pi-search" 
              onClick={handleSearch} 
              className="p-button-primary px-6" 
            />
            <Button 
              label="Clear" 
              icon="pi pi-refresh" 
              onClick={handleClear} 
              className="p-button-outlined p-button-secondary" 
            />
          </div>
        </div>
      </div>
      {showTable && (
        <Card title="Details" className="animate-fade-in">
          <DataTable
            value={mockData}
            header={tableHeader}
            globalFilter={globalFilter}
            paginator
            rows={10}
            className="p-datatable-sm"
            stripedRows
            showGridlines
            dataKey="id"
          >
            <Column field="id" header="Sr.No." />
            <Column field="deceasedStaff" header="Deceased Staff Officer" />
            <Column field="designation" header="Designation" />
            <Column field="dod" header="Date of Death" />
            <Column field="applicantName" header="Applicant Name" className="font-bold" />
            <Column field="gender" header="Gender" />
            <Column field="classType" header="Class" />
            <Column field="dob" header="Applicant's D.O.B" />
            <Column field="mobile" header="Mobile No." />
            <Column field="relationship" header="Relationship" />
            <Column field="maritalStatus" header="Marital Status" />
            <Column field="postOption" header="Post Option" />
            <Column field="qualification" header="Qualification" />
            <Column field="tetStatus" header="TET Status" />            
            <Column 
              field="status" 
              header="Status" 
              body={(rowData: NOCReportData) => (
                <Tag value={rowData.status} severity={getStatusSeverity(rowData.status)} />
              )} 
            />
            <Column field="deptName" header="Appointment Department Name" />
            <Column 
              header="NOC Document" 
              body={(rowData: NOCReportData) => (
                rowData.hasNocDoc ? 
                <Button icon="pi pi-file-pdf" className="p-button-text p-button-danger" label="View" /> : 
                <span className="text-gray-400 text-xs">Nil</span>
              )} 
            />
            <Column 
              header="Appointment Document" 
              body={(rowData: NOCReportData) => (
                rowData.hasAppointDoc ? 
                <Button icon="pi pi-file-pdf" className="p-button-text p-button-success" label="View" /> : 
                <span className="text-gray-400 text-xs">Nil</span>
              )} 
            />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
};
export default DirectorNocReport;