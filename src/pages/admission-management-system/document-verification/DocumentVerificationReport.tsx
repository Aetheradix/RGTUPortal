import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
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
}

const DocVerificationReport: React.FC = () => {
  const [filters, setFilters] = useState({
    college: "",
    course: "",
    docName: "",
    year: "",
    status: "",
    fromDate: null as Date | null,
    toDate: null as Date | null,
  });

  const [expandedRows, setExpandedRows] = useState<
    DataTableExpandedRows | any[] | undefined
  >(undefined);
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

  // Options
  const collegeOptions = [
    "UIT RGPV, Bhopal",
    "IET DAVV, Indore",
    "LNCT Bhopal",
  ].map((c) => ({ label: c, value: c }));
  const courseOptions = ["B.Tech", "M.Tech", "BCA", "MCA"].map((c) => ({
    label: c,
    value: c,
  }));
  const docOptions = ["10th Marksheet", "12th Marksheet", "Aadhar Card"].map(
    (d) => ({ label: d, value: d })
  );
  const yearOptions = ["2024-2025", "2025-2026"].map((y) => ({
    label: y,
    value: y,
  }));
  const statusOptions = ["Pending", "Approved", "Rejected"].map((s) => ({
    label: s,
    value: s,
  }));

  const statusBodyTemplate = (rowData: VerificationReport) => {
    const severity =
      rowData.status === "Approved"
        ? "bg-green-100 text-green-700"
        : rowData.status === "Pending"
        ? "bg-yellow-100 text-yellow-700"
        : "bg-red-100 text-red-700";
    return (
      <span className={`px-2 py-1 rounded text-xs font-bold ${severity}`}>
        {rowData.status}
      </span>
    );
  };

  const rowExpansionTemplate = (data: VerificationReport) => {
    return (
      <div className="p-4 bg-gray-50 border-l-4 border-indigo-500 rounded-r-lg mx-2 my-2 shadow-inner">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex-1">
            <h4 className="text-xs font-bold uppercase text-gray-500 mb-1">
              Remarks from {data.verifiedBy}:
            </h4>
            <p className="text-sm text-gray-800 italic">"{data.remarks}"</p>
          </div>
          <div className="flex gap-2">
            <Button
              label="Edit"
              icon="pi pi-pencil"
              className="p-button-sm p-button-info p-button-outlined"
              onClick={() => alert("Edit ID: " + data.id)}
            />
            <Button
              label="Delete"
              icon="pi pi-trash"
              className="p-button-sm p-button-danger p-button-outlined"
              onClick={() => alert("Delete ID: " + data.id)}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Document Verification Report">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <h3 className="text-md font-bold text-indigo-700 mb-4 flex items-center gap-2">
          <i className="pi pi-filter" /> Report Filters
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600">
              Select College Name*
            </label>
            <Dropdown
              value={filters.college}
              options={collegeOptions}
              onChange={(e: DropdownChangeEvent) =>
                setFilters({ ...filters, college: e.value })
              }
              placeholder="Select"
              className="w-full p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600">
              Select Course Name
            </label>
            <Dropdown
              value={filters.course}
              options={courseOptions}
              onChange={(e: DropdownChangeEvent) =>
                setFilters({ ...filters, course: e.value })
              }
              placeholder="Select"
              className="w-full p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600">
              Select Document Name*
            </label>
            <Dropdown
              value={filters.docName}
              options={docOptions}
              onChange={(e: DropdownChangeEvent) =>
                setFilters({ ...filters, docName: e.value })
              }
              placeholder="Select"
              className="w-full p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600">
              Academic Year*
            </label>
            <Dropdown
              value={filters.year}
              options={yearOptions}
              onChange={(e: DropdownChangeEvent) =>
                setFilters({ ...filters, year: e.value })
              }
              placeholder="Select"
              className="w-full p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600">
              Verification Status
            </label>
            <Dropdown
              value={filters.status}
              options={statusOptions}
              onChange={(e: DropdownChangeEvent) =>
                setFilters({ ...filters, status: e.value })
              }
              placeholder="Select"
              className="w-full p-inputtext-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600">
                From Date:*
              </label>
              <Calendar
                value={filters.fromDate}
                onChange={(e) =>
                  setFilters({ ...filters, fromDate: e.value as Date })
                }
                dateFormat="dd/mm/yy"
                showIcon
                className="p-inputtext-sm"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-gray-600">
                To Date:*
              </label>
              <Calendar
                value={filters.toDate}
                onChange={(e) =>
                  setFilters({ ...filters, toDate: e.value as Date })
                }
                dateFormat="dd/mm/yy"
                showIcon
                className="p-inputtext-sm"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <Button
            label="Generate Report"
            icon="pi pi-file-export"
            className="p-button-sm p-button-primary px-6"
          />
          <Button
            label="Reset Filters"
            icon="pi pi-refresh"
            className="p-button-sm p-button-outlined p-button-secondary"
            onClick={() =>
              setFilters({
                college: "",
                course: "",
                docName: "",
                year: "",
                status: "",
                fromDate: null,
                toDate: null,
              })
            }
          />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          <h3 className="text-lg font-bold text-gray-800">
            Verification Details
          </h3>
          <span className="p-input-icon-left w-full md:w-auto">
            <i className="pi pi-search" />
            <InputText
              type="search"
              value={globalFilter}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setGlobalFilter(e.target.value)
              }
              placeholder="Search Enrollment/Name..."
              className="p-inputtext-sm w-full"
            />
          </span>
        </div>

        <DataTable
          value={reportData}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          paginator
          rows={10}
          rowsPerPageOptions={[10, 25, 50]}
          globalFilter={globalFilter}
          className="p-datatable-sm text-sm"
          stripedRows
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        >
          <Column expander={true} style={{ width: "3rem" }} />
          <Column field="enrollmentNo" header="Enrollment Number" sortable />
          <Column field="studentName" header="Student Name" sortable />
          <Column field="courseName" header="Course" sortable />
          <Column field="collegeName" header="College" sortable />
          <Column field="docName" header="Document" sortable />
          <Column
            field="status"
            header="Status"
            body={statusBodyTemplate}
            sortable
          />
          <Column field="verifiedBy" header="Verified By" sortable />
        </DataTable>
      </div>
    </PageLayout>
  );
};

export default DocVerificationReport;
