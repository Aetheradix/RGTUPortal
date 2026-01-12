import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";

const PrintAnukampaApplication: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [showList, setShowList] = useState(false);

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
      status: "Pending"
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
      status: "Pending"
    }
  ];

  const handleSearch = () => {
    if (selectedDistrict) {
      setShowList(true);
    }
  };

  const handleClear = () => {
    setSelectedDistrict(null);
    setShowList(false);
  };

  return (
    <PageLayout title="Director Anukampa Application Approval - Print Application">
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold text-gray-600">Select District*</label>
            <Dropdown 
              value={selectedDistrict} 
              options={districts} 
              onChange={(e) => setSelectedDistrict(e.value)} 
              placeholder="Select District" 
              filter 
              className="w-full"
            />
          </div>
          <div className="flex gap-2">
            <Button label="Search" icon="pi pi-search" onClick={handleSearch} className="bg-blue-600 border-none" />
            <Button label="Clear" icon="pi pi-refresh" onClick={handleClear} className="p-button-outlined p-button-secondary" />
          </div>
        </div>
      </div>
      {showList && (
        <div className="bg-white p-4 rounded-lg shadow-md border border-gray-100 animate-fade-in">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="text-lg font-bold text-gray-700">Application Details for {selectedDistrict}</h3>
            <span className="text-sm text-gray-500">Showing {mockData.length} entries</span>
          </div>

          <DataTable 
            value={mockData} 
            paginator 
            rows={10} 
            rowsPerPageOptions={[10, 25, 50]}
            className="p-datatable-sm" 
            stripedRows 
            showGridlines
          >
            <Column field="id" header="Sr.No." style={{ width: '3rem' }} />
            <Column field="name" header="Applicant Name" sortable />
            <Column field="gender" header="Gender" />
            <Column field="dob" header="Date of Birth" />
            <Column field="mobile" header="Mobile No." />
            <Column field="relationship" header="Relationship" />
            <Column field="maritalStatus" header="Marital Status" />
            <Column field="cadre" header="Cadre" />
            <Column field="designation" header="Designation" />
            <Column field="tetStatus" header="TET Status" />
            <Column field="tetYear" header="TET Year" />
            <Column field="qualification" header="Qualification" />
            
            <Column 
              header="Print" 
              body={() => (
                <Button icon="pi pi-print" className="p-button-rounded p-button-info p-button-text" tooltip="Print Application" />
              )} 
            />
            
            <Column 
              header="Status" 
              body={(rowData) => (
                <Tag value={rowData.status} severity="warning" />
              )} 
            />
          </DataTable>
        </div>
      )}
    </PageLayout>
  );
};

export default PrintAnukampaApplication;