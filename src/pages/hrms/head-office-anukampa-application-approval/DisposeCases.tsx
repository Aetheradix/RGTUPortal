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

const DisposeCasesDetailsHoLevel: React.FC = () => {
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | DataTableValueArray>([]);

  const mockData: DisposedCase[] = [
    { id: 1, district: "Bhopal", block: "Badi", college: "Govt. College Bhopal", applicantName: "TARUN KUMAR", gender: "Male", category: "SCHEDULED CASTES", dob: "30/12/1997", mobile: "8708442245", relation: "Son", maritalStatus: "Unmarried", qualification: "8th", cadre: "Group D", designation: "Group D", tetStatus: "Not Passed" },
    { id: 2, district: "Bhopal", block: "Seoni", college: "Seoni College", applicantName: "RAJESH KUMAR UKREY", gender: "Male", category: "SCHEDULED CASTES", dob: "09/07/1992", mobile: "7697454609", relation: "Son", maritalStatus: "Unmarried", qualification: "12th", cadre: "Academic", designation: "Teacher", tetStatus: "Passed" },
    { id: 3, district: "Bhopal", block: "Narsinghpur", college: "Govt. College Narsinghpur", applicantName: "ASHI JAT", gender: "Female", category: "SCHEDULED CASTES", dob: "30/07/1988", mobile: "6260125629", relation: "Daughter", maritalStatus: "Married", qualification: "Graduate", cadre: "Clerical", designation: "Assistant", tetStatus: "Not Passed" },
    { id: 4, district: "Bhopal", block: "Jawwa", college: "Jawwa College", applicantName: "ABHISHEK KUMAR VARMA", gender: "Male", category: "O.B.C.", dob: "29/10/1998", mobile: "8085313209", relation: "Son", maritalStatus: "Unmarried", qualification: "Post Graduate", cadre: "Academic", designation: "Lab Teacher", tetStatus: "Passed" },
    { id: 5, district: "Bhopal", block: "Gango", college: "Gango College", applicantName: "Rohit Dubey", gender: "Male", category: "O.B.C.", dob: "01/03/1991", mobile: "7067772101", relation: "Brother", maritalStatus: "Unmarried", qualification: "10th", cadre: "Group D", designation: "Peon", tetStatus: "Not Passed" }
  ];

  const header = (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm">Show</span>
        <Dropdown options={[10, 25, 50, 100]} placeholder="10" className="w-20 p-inputtext-sm" />
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
  const rowExpansionTemplate = (data: DisposedCase) => {
    return (
      <div className="p-4 bg-gray-50 border-l-4 border-blue-600 ml-12 shadow-inner">
        <div className="grid grid-cols-1 gap-1 text-sm">
          <div className="flex gap-2"><strong>Relation with Deceased Teacher :</strong> <span>{data.relation}</span></div>
          <div className="flex gap-2"><strong>Marital Status :</strong> <span>{data.maritalStatus}</span></div>
          <div className="flex gap-2"><strong>Educational Qualification :</strong> <span>{data.qualification}</span></div>
          <div className="flex gap-2"><strong>Cadre for Appointment :</strong> <span>{data.cadre}</span></div>
          <div className="flex gap-2"><strong>Designation for Appointment :</strong> <span>{data.designation}</span></div>
          <div className="flex gap-2"><strong>Status of Passing Primary Teacher Eligibility Test :</strong> <span>{data.tetStatus}</span></div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Director Anukampa Application Approval">
      <div className="text-xs font-semibold text-gray-500 mb-2 uppercase">
        HRMS &raquo; Head Office Anukampa Application Approval &raquo; Head Office Dispose Cases
      </div>

      <div className="text-xl font-bold text-blue-900 mb-6 border-b pb-2 uppercase tracking-wide">
        Dispose Cases Details
      </div>
      
      <Card title="Details" className="shadow-sm border border-gray-200">
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
          <Column field="district" header="District" sortable />
          <Column field="block" header="Block" />
          <Column field="college" header="College" sortable />
          <Column field="applicantName" header="Applicant Name" sortable className="font-bold text-black" />
          <Column field="gender" header="Gender" />
          <Column field="category" header="Category" />
          <Column field="dob" header="Date of Birth" />
          <Column field="mobile" header="Mobile No." />
        </DataTable>
      </Card>

      <style>{`
        .p-datatable-sm .p-datatable-thead > tr > th {
          background-color: #f1f5f9;
          color: #334155;
          font-weight: 700;
          font-size: 12px;
          text-transform: none;
        }
        .p-datatable-sm .p-datatable-tbody > tr > td {
            font-size: 13px;
        }
      `}</style>
    </PageLayout>
  );
};

export default DisposeCasesDetailsHoLevel;