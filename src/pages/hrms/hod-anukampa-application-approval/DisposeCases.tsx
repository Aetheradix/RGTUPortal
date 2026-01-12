import React, { useState, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows, type DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
interface DisposedCase {
  id: number;
  district: string;
  block: string;
  school: string;
  applicantName: string;
  gender: string;
  cast: string;
  dob: string;
  mobile: string;
  relation: string;
  maritalStatus: string;
  qualification: string;
  cadre: string;
  designation: string;
  tetStatus: string;
}
const HodDisposeCasesDetails: React.FC = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);
  const mockData: DisposedCase[] = [
    {
      id: 1,
      district: "Bhopal",
      block: "Badi",
      school: "GMS BARELI (CLASS 1 TO 8)[23340103043]",
      applicantName: "TARUN KUMAR",
      gender: "Male",
      cast: "SCHEDULED CASTES",
      dob: "30/12/1999",
      mobile: "8770844225",
      relation: "Son",
      maritalStatus: "अविवाहित",
      qualification: "8TH",
      cadre: "चतुर्थ श्रेणी",
      designation: "",
      tetStatus: ""
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
          type="search" 
          value={globalFilter} 
          onChange={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} 
          placeholder="Search:" 
          className="p-inputtext-sm" 
        />
      </span>
    </div>
  );
  const rowExpansionTemplate = (data: DisposedCase) => {
    return (
      <div className="p-4 bg-gray-50 border-l-4 border-blue-600 ml-12 shadow-inner">
        <div className="flex flex-col gap-3 text-sm max-w-2xl">
          <div className="flex items-start">
            <span className="font-bold text-gray-700 w-80">District</span>
            <span className="text-blue-900 font-semibold">: {data.district}</span>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-gray-700 w-80">Applicant's Relation with Deceased Teacher</span>
            <span className="text-blue-900 font-semibold">: {data.relation}</span>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-gray-700 w-80">Marital Status</span>
            <span className="text-blue-900 font-semibold">: {data.maritalStatus}</span>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-gray-700 w-80">Educational Qualification</span>
            <span className="text-blue-900 font-semibold">: {data.qualification}</span>
          </div>

          <div className="flex items-start">
            <span className="font-bold text-gray-700 w-80">Cadre For Appointment</span>
            <span className="text-blue-900 font-semibold">: {data.cadre}</span>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-gray-700 w-80">Designation For Appointment</span>
            <span className="text-blue-900 font-semibold">: {data.designation}</span>
          </div>
          <div className="flex items-start">
            <span className="font-bold text-gray-700 w-80 leading-tight">
                Status of Passing Primary Teacher Eligibility Test for Primary Teacher
            </span>
            <span className="text-blue-900 font-semibold">: {data.tetStatus}</span>
          </div>
        </div>
      </div>
    );
  };
  return (
    <PageLayout title="Dispose Cases Details">
      <div className="text-xl font-bold text-blue-900 mb-2 uppercase">Dispose Cases Details</div>
      <div className="text-xs text-gray-500 mb-4">Master &gt; HOD Anukampa Appointment &gt; Dispose Cases Details</div>
      <Card>
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
          <Column field="id" header="Sr. No." />
          <Column field="block" header="Block" />
          <Column field="school" header="School" />
          <Column field="applicantName" header="Applicant Name" className="font-bold text-blue-700" />
          <Column field="gender" header="Gender" />
          <Column field="cast" header="Cast" />
          <Column 
            header={<div>Date of Birth <br/><small className="font-normal text-xs text-gray-500">जन्म तिथि</small></div>} 
            field="dob"
          />
          <Column field="mobile" header="Mobile No." />
        </DataTable>
      </Card>
    </PageLayout>
  );
};
export default HodDisposeCasesDetails;