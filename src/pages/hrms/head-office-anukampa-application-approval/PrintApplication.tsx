/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { InputText } from "primereact/inputtext";

const PrintAnukampaApplicationHoLevel: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");

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

  const mockData = [
    {
      id: 1,
      name: "Aniket Kumar",
      gender: "Male",
      dob: "15/10/1995",
      mobile: "9856325685",
      relationship: "Son",
      maritalStatus: "Unmarried",
      cadre: "Academic Cadre",
      designation: "Laboratory Teacher",
      tetStatus: "Yes",
      tetYear: "2015",
      qualification: "B.Ed",
      status: "Panding"
    },
    {
      id: 2,
      name: "Raj Kumar",
      gender: "Male",
      dob: "15/10/1999",
      mobile: "8856325685",
      relationship: "Son",
      maritalStatus: "Unmarried",
      cadre: "Academic Cadre",
      designation: "Laboratory Teacher",
      tetStatus: "Yes",
      tetYear: "2016",
      qualification: "B.Sc",
      status: "Panding"
    }
  ];

  const handleSearch = () => {
    if (selectedDistrict) setShowList(true);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm">Show</span>
          <Dropdown options={[10, 25, 50, 100]} placeholder="10" className="w-20 p-inputtext-sm" />
          <span className="text-sm">entries</span>
        </div>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText 
            type="search" 
            onInput={(e: any) => setGlobalFilter(e.target.value)} 
            placeholder="Search:" 
            className="p-inputtext-sm" 
          />
        </span>
      </div>
    );
  };

  return (
    <PageLayout title="Register Application For Compassionate Appointment on HO Level">
      <div className="text-xs font-semibold text-gray-500 mb-2 uppercase">
        HRMS &raquo; Head Office Anukampa Application Approval &raquo; Print Application
      </div>

      <div className="text-lg font-bold text-blue-800 mb-4 border-b pb-2">
        Print Application
      </div>
      <div className="bg-white p-6 rounded shadow-sm border mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase">Select District *</label>
            <Dropdown 
              value={selectedDistrict} 
              options={districts} 
              onChange={(e) => setSelectedDistrict(e.value)} 
              placeholder="Select" 
              filter 
              className="w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button label="Search" icon="pi pi-search" onClick={handleSearch} className="bg-blue-700 border-none" />
            <Button label="Clear" icon="pi pi-refresh" onClick={() => {setSelectedDistrict(null); setShowList(false);}} className="p-button-outlined p-button-secondary" />
          </div>
        </div>
      </div>
      {showList && (
        <Card title="Details" className="shadow-sm border">
          <DataTable 
            value={mockData} 
            header={renderHeader()}
            globalFilter={globalFilter}
            paginator 
            rows={10} 
            className="p-datatable-sm" 
            stripedRows 
            showGridlines
          >
            <Column field="id" header="Sr.No." style={{ width: '3rem' }} />
            <Column field="name" header="Applicant Name" />
            <Column field="gender" header="Gender" />
            <Column field="dob" header="Date of Birth" />
            <Column field="mobile" header="Mobile No." />
            <Column field="relationship" header="Applicant's Relationship with Deceased Teacher" />
            <Column field="maritalStatus" header="Marital Status" />
            <Column field="cadre" header="Cadre For Appointment" />
            <Column field="designation" header="Designation For Appointment" />
            <Column field="tetStatus" header="Status of Passing Primary Teacher Eligibility Test for Primary Teacher" />
            <Column field="tetYear" header="Year of Eligibility Test" />
            <Column field="qualification" header="Professional Qualification" />
            
            <Column 
              header="Print" 
              body={() => (
                <Button icon="pi pi-print" className="p-button-rounded p-button-info p-button-text" />
              )} 
            />
            
            <Column 
              header="Status" 
              body={(rowData) => (
                <Tag value={rowData.status} severity="warning" style={{ backgroundColor: '#fff4e5', color: '#b98900' }} />
              )} 
            />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
};

const Card = ({ children, title, className }: any) => (
  <div className={`bg-white rounded-lg border ${className}`}>
    <div className="p-4 border-b bg-gray-50">
      <h3 className="font-bold text-gray-700">{title}</h3>
    </div>
    <div className="p-4">{children}</div>
  </div>
);

export default PrintAnukampaApplicationHoLevel;