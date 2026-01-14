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
  college: string;
  applicantName: string;
  gender: string;
  category: string;
  dob: string;
  mobile: string;
  relation: string;
  maritalStatus: string;
  qualification: string;
  cadre: string;
  designation: string;
  tetStatus: string;
}
const DisposeCasesDetails: React.FC = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);
  const mockData: DisposedCase[] = [
    {
      id: 1,
      district: "Bhopal",
      block: "Badi",
      college: "Govt. College Bhopal",
      applicantName: "TARUN KUMAR",
      gender: "Male",
      category: "SCHEDULED CASTES",
      dob: "30/12/1997",
      mobile: "8708442245",
      relation: "Son",
      maritalStatus: "Unmarried",
      qualification: "8th",
      cadre: "Group D",
      designation: "Group D",
      tetStatus: "Not Passed"
    }
  ];
  const header = (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm">Show</span>
        <Dropdown options={[10, 25, 50]} placeholder="10" className="w-20" />
        <span className="text-sm">entries</span>
      </div>
      <span>
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
      <div className="p-4 bg-gray-50 border-l-4 border-blue-500 ml-8 shadow-sm">
        <div className="flex flex-col gap-2">
          <p><strong>Relation with Deceased Teacher:</strong> {data.relation}</p>
          <p><strong>Marital Status:</strong> {data.maritalStatus}</p>
          <p><strong>Educational Qualification:</strong> {data.qualification}</p>
          <p><strong>Cadre for Appointment:</strong> {data.cadre}</p>
          <p><strong>Designation for Appointment:</strong> {data.designation}</p>
          <p><strong>Status of Passing Primary Teacher Eligibility Test:</strong> {data.tetStatus}</p>
        </div>
      </div>
    );
  };
  return (
    <PageLayout title="Director Anukampa Application Approval">
      <div className="text-xl font-bold text-blue-900 mb-4 uppercase">Dispose Cases Details</div>
      
      <Card title="Dispose Cases">
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
          <Column field="district" header="District" sortable />
          <Column field="block" header="Block" />
          <Column field="college" header="College" sortable />
          <Column field="applicantName" header="Applicant Name" sortable className="font-bold text-blue-700" />
          <Column field="gender" header="Gender" />
          <Column field="category" header="Category" />
          <Column field="dob" header="Date of Birth" />
          <Column field="mobile" header="Mobile No." />
        </DataTable>
      </Card>
    </PageLayout>
  );
};
export default DisposeCasesDetails;