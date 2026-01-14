import React, { useState, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows, type DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
interface NOCReportData {
  id: number;
  deceasedStaff: string;
  designation: string;
  deathDate: string;
  applicantName: string;
  gender: string;
  dob: string;
  mobile: string;
  relation: string;
  maritalStatus: string;
  postOption: string;
  qualification: string;
  tetStatus: string;
  status: string;
  deptName: string;
}
const HODLevelNOCReport: React.FC = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [showList, setShowList] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);
  const districts = [
    "Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Bhopal", "Indore", "Gwalior", "Ujjain"
  ].map(d => ({ label: d, value: d }));
  const mockData: NOCReportData[] = [
    {
      id: 1,
      deceasedStaff: "Puran Singh Kushawah",
      designation: "Asstt Teacher(LDT)",
      deathDate: "28/12/2021",
      applicantName: "BRAJESH KUSHVAH",
      gender: "Male",
      dob: "10/08/1997",
      mobile: "7047770112",
      relation: "Son",
      maritalStatus: "अविवाहित",
      postOption: "शैक्षणिक संवर्ग",
      qualification: "12 PCM B SC COMPUTER SCIENCE",
      tetStatus: "नहीं",
      status: "Pending by collector",
      deptName: "Nil"
    }
  ];
  const header = (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm">Show</span>
        <Dropdown options={[10, 25, 50, 100]} placeholder="10" className="w-20" />
        <span className="text-sm">entries</span>
      </div>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText 
          value={globalFilter} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} 
          placeholder="Search:" 
          className="p-inputtext-sm" 
        />
      </span>
    </div>
  );
  const rowExpansionTemplate = (data: NOCReportData) => {
    return (
      <div className="p-4 bg-gray-50 border-l-4 border-blue-600 ml-12 shadow-inner">
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-start">
            <span className="font-bold text-gray-700 w-96 uppercase">Applicant's Relation with Deceased Teacher</span>
            <span className="text-blue-900 font-semibold">: {data.relation}</span>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-gray-700 w-96 uppercase">Applicant's Marital Status</span>
            <span className="text-blue-900 font-semibold">: {data.maritalStatus}</span>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-gray-700 w-96 uppercase">Selected Option of Post for Appointment</span>
            <span className="text-blue-900 font-semibold">: {data.postOption}</span>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-gray-700 w-96 uppercase">Educational Qualification of Applicant</span>
            <span className="text-blue-900 font-semibold">: {data.qualification}</span>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-gray-700 w-96 uppercase">Status of Passing Primary Teacher Eligibility Test for Primary Teacher</span>
            <span className="text-blue-900 font-semibold">: {data.tetStatus}</span>
          </div>
          <div className="flex items-start text-red-600">
            <span className="font-bold w-96 uppercase">Status</span>
            <span className="font-bold">: {data.status}</span>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-gray-700 w-96 uppercase">Appointment Department Name</span>
            <span className="text-blue-900 font-semibold">: {data.deptName}</span>
          </div>
          <div className="flex items-center gap-8 mt-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-700 uppercase">NOC Document:</span>
              <Button icon="pi pi-file-pdf" label="View PDF" className="p-button-danger p-button-sm p-button-text" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-gray-700 uppercase">Appointment Document:</span>
              <Button icon="pi pi-file-pdf" label="View PDF" className="p-button-danger p-button-sm p-button-text" />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <PageLayout title="HOD level NOC Report">
      <div className="text-xl font-bold text-blue-900 mb-1 uppercase">HOD level NOC Report</div>
      <div className="text-xs text-gray-500 mb-4 font-semibold uppercase tracking-wider">Master &gt; HOD Anukampa Appointment &gt; HOD level NOC Report</div>

      <Card className="mb-6 shadow-sm border-t-4 border-blue-900">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm">District *</label>
            <Dropdown value={selectedDistrict} options={districts} onChange={(e) => setSelectedDistrict(e.value)} placeholder="--Select--" filter className="w-full" />
          </div>
          <div className="flex gap-2">
            <Button label="Search" icon="pi pi-search" className="bg-blue-800 border-none" onClick={() => setShowList(true)} />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-outlined p-button-secondary" onClick={() => {setShowList(false); setSelectedDistrict(null);}} />
          </div>
        </div>
      </Card>
      {showList && (
        <Card title="Details" className="shadow-lg">
          <DataTable
            value={mockData}
            header={header}
            globalFilter={globalFilter}
            paginator
            rows={10}
            className="p-datatable-sm"
            stripedRows
            showGridlines
            dataKey="id"
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          >
            <Column expander style={{ width: '3rem' }} />
            <Column field="id" header="Sr. No." style={{ width: '4rem' }} />
            <Column field="deceasedStaff" header="Deceased Employee / Officer" sortable />
            <Column field="designation" header="Designation" />
            <Column field="deathDate" header="Death Date" />
            <Column field="applicantName" header="Applicant Name" className="font-bold text-blue-700" />
            <Column field="gender" header="Gender" />
            <Column field="dob" header="Applicant D.O.B." />
            <Column field="mobile" header="Mobile Number" />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
};
export default HODLevelNOCReport;