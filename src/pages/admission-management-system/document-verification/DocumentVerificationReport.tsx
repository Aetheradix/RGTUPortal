import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableValueArray } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
interface VerificationReport {
  id: number;
  enrollmentNo: string;
  studentName: string;
  courseName: string;
  collegeName: string;
  docName: string;
  status: "Approved" | "Pending" | "Rejected";
  verifiedBy: string;
  remarks: string;
}interface FilterState {
  college: string;
  course: string;
  docName: string;
  year: string;
  status: string;
  fromDate: Date | null;
  toDate: Date | null;
}
const DocVerificationReport: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>({
    college: "",
    course: "",
    docName: "",
    year: "",
    status: "",
    fromDate: null,
    toDate: null,
  });

  const [expandedRows, setExpandedRows] = useState<DataTableValueArray | undefined>(undefined);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const [reportData] = useState<VerificationReport[]>([
    {
      id: 1,
      enrollmentNo: "2021MP12345",
      studentName: "Ravi Kumar",
      courseName: "B.Tech Computer Science",
      collegeName: "UIT RGPV, Bhopal",
      docName: "10th Marksheet",
      status: "Approved",
      verifiedBy: "Dr. Sharma",
      remarks: "All original documents verified physically.",
    },
    {
      id: 2,
      enrollmentNo: "2021MP12347",
      studentName: "Suresh Patel",
      courseName: "Diploma Civil",
      collegeName: "IET DAVV, Indore",
      docName: "12th Marksheet",
      status: "Approved",
      verifiedBy: "Prof. Mishra",
      remarks: "Verified via Digilocker API.",
    },
    {
      id: 3,
      enrollmentNo: "2021MP12348",
      studentName: "Priya Joshi",
      courseName: "B.Tech IT",
      collegeName: "MIT Gwalior",
      docName: "Aadhar Card",
      status: "Pending",
      verifiedBy: "Prof. Sharma",
      remarks: "Aadhar card photo is blur, requested for re-upload.",
    },
  ]);

  const collegeOptions = ["UIT RGPV, Bhopal", "IET DAVV, Indore", "LNCT Bhopal"].map((c) => ({ label: c, value: c }));
  const courseOptions = ["B.Tech", "M.Tech", "BCA", "MCA"].map((c) => ({ label: c, value: c }));
  const docOptions = ["10th Marksheet", "12th Marksheet", "Aadhar Card"].map((d) => ({ label: d, value: d }));
  const yearOptions = ["2024-2025", "2025-2026"].map((y) => ({ label: y, value: y }));
  const statusOptions = ["Pending", "Approved", "Rejected"].map((s) => ({ label: s, value: s }));

  const statusBodyTemplate = (rowData: VerificationReport) => {
    const severityMap = {
      Approved: "bg-green-100 text-green-700 border-green-200",
      Pending: "bg-yellow-100 text-yellow-700 border-yellow-200",
      Rejected: "bg-red-100 text-red-700 border-red-200",
    };

    return (
      <span className={`px-2 py-1 rounded border text-[10px] font-bold uppercase ${severityMap[rowData.status]}`}>
        {rowData.status}
      </span>
    );
  };

  const rowExpansionTemplate = (data: VerificationReport) => {
    return (
      <div className="p-4 bg-gray-50 border-l-4 border-indigo-500 rounded-r-lg mx-2 my-2 shadow-inner">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex-1">
            <h4 className="text-[10px] font-black uppercase text-gray-400 mb-1">Remarks (By {data.verifiedBy}):</h4>
            <p className="text-sm text-gray-800 italic">"{data.remarks}"</p>
          </div>
          <div className="flex gap-2">
            <Button label="Edit" icon="pi pi-pencil" className="p-button-sm p-button-info" />
            <Button label="Delete" icon="pi pi-trash" className="p-button-sm p-button-danger p-button-outlined" />
          </div>
        </div>
      </div>
    );
  };

  const handleReset = () => {
    setFilters({
      college: "",
      course: "",
      docName: "",
      year: "",
      status: "",
      fromDate: null,
      toDate: null,
    });
  };

  return (
    <PageLayout title="Document Verification Report">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <h3 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
          <i className="pi pi-filter text-indigo-600" /> SEARCH FILTERS
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-500 uppercase">College Name</label>
            <Dropdown
              value={filters.college}
              options={collegeOptions}
              onChange={(e: DropdownChangeEvent) => setFilters({ ...filters, college: e.value })}
              placeholder="Select College"
              className="w-full p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Course Name</label>
            <Dropdown
              value={filters.course}
              options={courseOptions}
              onChange={(e: DropdownChangeEvent) => setFilters({ ...filters, course: e.value })}
              placeholder="Select Course"
              className="w-full p-inputtext-sm"
             
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Academic Year</label>
            <Dropdown
              value={filters.year}
              options={yearOptions}
              onChange={(e: DropdownChangeEvent) => setFilters({ ...filters, year: e.value })}
              placeholder="Select Year"
              className="w-full p-inputtext-sm"
              
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Document Name</label>
            <Dropdown
              value={filters.docName}
              options={docOptions}
              onChange={(e: DropdownChangeEvent) => setFilters({ ...filters, docName: e.value })}
              placeholder="Select Document"
              className="w-full p-inputtext-sm"
              
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-500 uppercase">Status</label>
            <Dropdown
              value={filters.status}
              options={statusOptions}
              onChange={(e: DropdownChangeEvent) => setFilters({ ...filters, status: e.value })}
              placeholder="Select Status"
              className="w-full p-inputtext-sm"
          
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-500 uppercase">From Date</label>
            <Calendar
              value={filters.fromDate}
              onChange={(e) => setFilters({ ...filters, fromDate: e.value as Date })}
              dateFormat="dd/mm/yy"
              showIcon
              className="p-inputtext-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-500 uppercase">To Date</label>
            <Calendar
              value={filters.toDate}
              onChange={(e) => setFilters({ ...filters, toDate: e.value as Date })}
              dateFormat="dd/mm/yy"
              showIcon
              className="p-inputtext-sm"
            />
          </div>
        </div>

        <div className="flex gap-2 mt-6">
          <Button label="Generate Report" icon="pi pi-file" className="p-button-sm px-6" />
          <Button label="Reset Filters" icon="pi pi-refresh" className="p-button-sm p-button-outlined" onClick={handleReset} />
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-800">Verification Records</h3>
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              type="search"
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Quick Search..."
              className="p-inputtext-sm"
            />
          </span>
        </div>

        <DataTable
          value={reportData}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data as DataTableValueArray)}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          paginator
          rows={10}
          globalFilter={globalFilter}
          className="p-datatable-sm text-sm"
          stripedRows
          removableSort
        >
          <Column expander style={{ width: "3rem" }} />
          <Column field="enrollmentNo" header="Enrollment No" sortable className="font-bold text-indigo-600" />
          <Column field="studentName" header="Student Name" sortable />
          <Column field="courseName" header="Course" sortable />
          <Column field="docName" header="Document" sortable />
          <Column field="status" header="Status" body={statusBodyTemplate} sortable />
          <Column field="verifiedBy" header="Officer" sortable />
        </DataTable>
      </div>
    </PageLayout>
  );
};

export default DocVerificationReport;