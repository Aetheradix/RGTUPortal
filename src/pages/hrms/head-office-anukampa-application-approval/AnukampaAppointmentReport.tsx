import React, { useState, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";

interface AppointmentReportData {
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
}

const HoAnukampaAppointmentReport: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [showTable, setShowTable] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const districts = [
    "Agar Malwa", "Alirajpur", "Anuppur", "Ashok Nagar", "Balaghat", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"
  ].map(d => ({ label: d, value: d }));

  const statusOptions = [
    { label: "All", value: "All" },
    { label: "Approve", value: "Approve" },
    { label: "Pending", value: "Pending" },
    { label: "Reject", value: "Reject" }
  ];

  const mockData: AppointmentReportData[] = [
    { id: 1, deceasedStaff: "Puran Singh Kushawah", designation: "Asstt Teacher (LDT)", dod: "28/12/2021", applicantName: "BRAJESH KUSHVAH", gender: "Male", classType: "S.C.", dob: "10/08/1997", mobile: "7047770112", relationship: "Son", maritalStatus: "Unmarried", postOption: "Academic Cadre", qualification: "12 PCM B SC COMPUTER SCIENCE", tetStatus: "No", status: "Pending" },
    { id: 2, deceasedStaff: "Satendra Bahadur Singh", designation: "Madhyamik Shaikshak", dod: "15/04/2022", applicantName: "SHAKSHAM SINGH", gender: "Male", classType: "S.C.", dob: "12/12/1996", mobile: "7047770112", relationship: "Son", maritalStatus: "Unmarried", postOption: "Clerical Cadre", qualification: "GRADUATE", tetStatus: "No", status: "Pending" }
  ];

  const handleSearch = () => {
    setShowTable(true);
  };

  const handleClear = () => {
    setSelectedDistrict(null);
    setSelectedStatus(null);
    setFromDate(null);
    setToDate(null);
    setShowTable(false);
  };

  const header = (
    <div className="flex justify-between items-center">
      <span className="text-lg font-bold text-gray-700">Details</span>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText value={globalFilter} onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search:" className="p-inputtext-sm" />
      </span>
    </div>
  );

  const statusBodyTemplate = (rowData: AppointmentReportData) => {
    return (
      <span className={`px-3 py-1 rounded-full text-xs font-bold ${rowData.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
        {rowData.status}
      </span>
    );
  };

  return (
    <PageLayout title="HO Anukampa Appointment Report">
      <Card className="mb-6 shadow-sm border-t-4 border-blue-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm">Select District *</label>
            <Dropdown value={selectedDistrict} options={districts} onChange={(e: DropdownChangeEvent) => setSelectedDistrict(e.value)} placeholder="Select District" filter className="w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm">Appointment Status *</label>
            <Dropdown value={selectedStatus} options={statusOptions} onChange={(e: DropdownChangeEvent) => setSelectedStatus(e.value)} placeholder="Select" className="w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm">From Date *</label>
            <Calendar value={fromDate} onChange={(e) => setFromDate(e.value as Date)} showIcon placeholder="dd/mm/yyyy" className="w-full" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm">To Date *</label>
            <Calendar value={toDate} onChange={(e) => setToDate(e.value as Date)} showIcon placeholder="dd/mm/yyyy" className="w-full" />
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          <Button label="Search" icon="pi pi-search" onClick={handleSearch} className="bg-blue-800 px-8" />
          <Button label="Clear" icon="pi pi-refresh" onClick={handleClear} className="p-button-outlined p-button-secondary px-8" />
        </div>
      </Card>
      {showTable && (
        <Card className="shadow-sm">
          <DataTable
            value={mockData}
            header={header}
            globalFilter={globalFilter}
            paginator
            rows={10}
            rowsPerPageOptions={[10, 25, 50, 100]}
            className="p-datatable-sm"
            stripedRows
            showGridlines
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
          >
            <Column field="id" header="Sr.No." style={{ width: '3rem' }} />
            <Column field="deceasedStaff" header="Deceased Staff Officer" sortable style={{ minWidth: '12rem' }} />
            <Column field="designation" header="Designation" />
            <Column field="dod" header="Date of Death" />
            <Column field="applicantName" header="Applicant Name" sortable />
            <Column field="gender" header="Gender" />
            <Column field="classType" header="Class" />
            <Column field="dob" header="Applicant's D.O.B" />
            <Column field="mobile" header="Mobile No." />
            <Column field="relationship" header="Relationship" />
            <Column field="maritalStatus" header="Marital Status" />
            <Column field="postOption" header="Post Option" />
            <Column field="qualification" header="Educational Qualification" />
            <Column field="tetStatus" header="TET Status" />
            <Column field="status" header="Status" body={statusBodyTemplate} className="text-center font-bold" />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
};

export default HoAnukampaAppointmentReport;