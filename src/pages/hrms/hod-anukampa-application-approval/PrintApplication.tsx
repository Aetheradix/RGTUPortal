import React, { useState, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { DataTable, type DataTableExpandedRows, type DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
interface PrintApplicationData {
  id: number;
  applicantName: string;
  gender: string;
  dob: string;
  mobile: string;
  relationship: string;
  maritalStatus: string;
  postOption: string;
  qualification: string;
  tetStatus: string;
}
const HodPrintAnukampaApplication: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showList, setShowList] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);
  const districts = [
    "Bhopal", "Raisen", "Rajgarh", "Sehore", "Vidisha", "Gwalior", "Indore", "Jabalpur", "Ujjain"
  ].map(d => ({ label: d, value: d }));
  const mockData: PrintApplicationData[] = [
    {
      id: 1,
      applicantName: "BRAJESH KUSHVAH",
      gender: "Male",
      dob: "10/08/1997",
      mobile: "7047770112",
      relationship: "Son",
      maritalStatus: "अविवाहित",
      postOption: "शैक्षणिक संवर्ग",
      qualification: "12 PCM B SC COMPUTER SCIENCE",
      tetStatus: "नहीं"
    }
  ];
  const handleSearch = () => {
    if (selectedDistrict) setShowList(true);
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
        <InputText 
          type="search" 
          value={globalFilter} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} 
          placeholder="Search:" 
          className="p-inputtext-sm" 
        />
      </span>
    </div>
  );
  const rowExpansionTemplate = (data: PrintApplicationData) => (
    <div className="p-4 bg-gray-50 border-l-4 border-blue-600 ml-12 shadow-inner">
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex items-start">
          <span className="font-bold text-gray-700 w-96 uppercase">Applicant's Relation with Deceased Teacher</span>
          <span className="text-blue-900 font-semibold">: {data.relationship}</span>
        </div>
        <div className="flex items-start">
          <span className="font-bold text-gray-700 w-96 uppercase">Applicant Marital Status</span>
          <span className="text-blue-900 font-semibold">: {data.maritalStatus}</span>
        </div>
        <div className="flex items-start">
          <span className="font-bold text-gray-700 w-96 uppercase">Selected Option of Post for Appointment</span>
          <span className="text-blue-900 font-semibold">: {data.postOption}</span>
        </div>
        <div className="flex items-start">
          <span className="font-bold text-gray-700 w-96 uppercase">Applicant Educational Qualification</span>
          <span className="text-blue-900 font-semibold">: {data.qualification}</span>
        </div>
        <div className="flex items-start">
          <span className="font-bold text-gray-700 w-96 uppercase leading-tight">Status of Passing Primary Teacher Eligibility Test for Primary Teacher</span>
          <span className="text-blue-900 font-semibold">: {data.tetStatus}</span>
        </div>
        <div className="flex items-start mt-2">
          <span className="font-bold text-gray-700 w-96 uppercase">Action</span>
          <span className="font-semibold">: <Button icon="pi pi-print" label="Print Application" className="p-button-info p-button-sm py-1 ml-1" /></span>
        </div>
      </div>
    </div>
  );

  return (
    <PageLayout title="Print Application">
      <div className="flex justify-between items-start mb-4">
        <div className="text-xl font-bold text-blue-900 uppercase">HOD Anukampa Appointment Print Application</div>
        <div className="text-xs text-gray-500 font-semibold uppercase tracking-wider text-right">
          Master &gt; HOD Anukampa Appointment &gt; Print Application
        </div>
      </div>
      <Card title="Print Application" className="mb-6 shadow-sm border-t-4 border-blue-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase">Select District Name*</label>
            <Dropdown 
              value={selectedDistrict} 
              options={districts} 
              onChange={(e: DropdownChangeEvent) => setSelectedDistrict(e.value)} 
              placeholder="--Select--" 
              filter 
              className="w-full" 
            />
          </div>
          <div className="flex gap-2">
            <Button label="Search" icon="pi pi-search" onClick={handleSearch} className="bg-blue-800 border-none px-6" />
            <Button label="Clear" icon="pi pi-refresh" onClick={() => {setShowList(false); setSelectedDistrict(null);}} className="p-button-outlined p-button-secondary" />
          </div>
        </div>
      </Card>
      {showList && (
        <Card title="Details" className="shadow-lg animate-fade-in">
          <DataTable 
            value={mockData} 
            header={header}
            expandedRows={expandedRows} 
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate} 
            dataKey="id" 
            paginator 
            rows={10} 
            className="p-datatable-sm" 
            showGridlines 
            stripedRows
          >
            <Column expander style={{ width: '3rem' }} />
            <Column field="id" header="Sr.No." style={{ width: '4rem' }} />
            <Column field="applicantName" header="Applicant Name" className="font-bold text-blue-700" sortable />
            <Column field="gender" header="Gender" />
            <Column field="dob" header="Applicant D.O.B." />
            <Column field="mobile" header="Mobile Number" />
            <Column 
                header="Print" 
                body={() => <Button icon="pi pi-print" className="p-button-rounded p-button-text p-button-info" tooltip="Print" />} 
                style={{ width: '5rem', textAlign: 'center' }}
            />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
};
export default HodPrintAnukampaApplication;