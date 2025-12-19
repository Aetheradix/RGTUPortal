import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

interface CollegeVerificationReport {
  id: number;
  courseName: string;
  collegeName: string;
  academicYear: string;
  verificationDate: string;
  verifiedBy: string;
  remarks: string;
  status: "Verified" | "Pending" | "Rejected";
}

const CollegeWiseReport: React.FC = () => {
  const [filters, setFilters] = useState({
    college: "",
    course: "",
    year: "",
    status: "",
    fromDate: null as Date | null,
    toDate: null as Date | null,
  });

  const [expandedRows, setExpandedRows] = useState<
    DataTableExpandedRows | any[] | undefined
  >(undefined);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const [reportData] = useState<CollegeVerificationReport[]>([
    {
      id: 1,
      courseName: "B.Tech Computer Science",
      collegeName: "MP College of Engineering, Bhopal",
      academicYear: "2023-2024",
      verificationDate: "20-Nov-2024",
      verifiedBy: "Dr. Sharma",
      remarks: "All documents are correct",
      status: "Verified",
    },
    {
      id: 2,
      courseName: "Diploma in Civil Engineering",
      collegeName: "Government Polytechnic College, Indore",
      academicYear: "2023-2024",
      verificationDate: "20-Nov-2024",
      verifiedBy: "Prof. Mishra",
      remarks: "All documents are correct",
      status: "Verified",
    },
    {
      id: 3,
      courseName: "B.Tech Information Technology",
      collegeName: "MIT College, Gwalior",
      academicYear: "2024-2025",
      verificationDate: "20-Nov-2024",
      verifiedBy: "Prof. Sharma",
      remarks: "Waiting for additional documents",
      status: "Pending",
    },
  ]);
  const collegeOptions = [
    "UIT RGPV, Bhopal",
    "IET DAVV, Indore",
    "LNCT Bhopal",
    "JEC Gwalior",
    "MIT Ujjain",
    "TIT Bhopal",
    "Medicaps Indore",
    "Oriental Bhopal",
  ].map((c) => ({ label: c, value: c }));

  const courseOptions = [
    "B.Tech",
    "M.Tech",
    "BCA",
    "MCA",
    "B.Sc (IT)",
    "M.Sc (IT)",
    "MBA",
  ].map((c) => ({ label: c, value: c }));

  const yearOptions = ["2024-2025", "2025-2026"].map((y) => ({
    label: y,
    value: y,
  }));
  const statusOptions = ["Pending", "Verified", "Rejected"].map((s) => ({
    label: s,
    value: s,
  }));
  const statusBodyTemplate = (rowData: CollegeVerificationReport) => {
    const severity =
      rowData.status === "Verified"
        ? "bg-green-100 text-green-700 border-green-200"
        : rowData.status === "Pending"
        ? "bg-yellow-100 text-yellow-700 border-yellow-200"
        : "bg-red-100 text-red-700 border-red-200";
    return (
      <span
        className={`px-3 py-1 rounded-full border text-[11px] font-bold uppercase ${severity}`}
      >
        {rowData.status}
      </span>
    );
  };
  const rowExpansionTemplate = (data: CollegeVerificationReport) => {
    return (
      <div className="p-4 bg-gray-50 border-x-2 border-b-2 border-indigo-100 rounded-b-lg mx-2 mb-2 shadow-inner">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex-1">
            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">
              Verification Remarks
            </span>
            <p className="text-sm text-gray-700 font-medium mt-1">
              "{data.remarks}"
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              label="Edit"
              icon="pi pi-pencil"
              className="p-button-sm p-button-info p-button-raised"
              onClick={() => alert("Editing ID: " + data.id)}
            />
            <Button
              label="Delete"
              icon="pi pi-trash"
              className="p-button-sm p-button-danger p-button-outlined"
              onClick={() => alert("Deleting ID: " + data.id)}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="College Wise Verification Report">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <h3 className="text-md font-bold text-gray-700 mb-5 border-b pb-2 flex items-center gap-2">
          <i className="pi pi-sliders-h text-indigo-500" /> Report Filter
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              placeholder="Select College"
              className="w-full p-inputtext-sm"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-gray-600">
              Select Course
            </label>
            <Dropdown
              value={filters.course}
              options={courseOptions}
              onChange={(e: DropdownChangeEvent) =>
                setFilters({ ...filters, course: e.value })
              }
              placeholder="Select Course"
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
              placeholder="Select Year"
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
              placeholder="Select Status"
              className="w-full p-inputtext-sm"
            />
          </div>
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
            <label className="text-xs font-bold text-gray-600">To Date:*</label>
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
        <div className="flex gap-2 mt-6">
          <Button
            label="Search Report"
            icon="pi pi-search"
            className="p-button-sm p-button-primary px-8"
          />
          <Button
            label="Reset"
            icon="pi pi-refresh"
            className="p-button-sm p-button-outlined p-button-secondary"
            onClick={() =>
              setFilters({
                college: "",
                course: "",
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
            College Wise Verification Report List
          </h3>
          <span className="p-input-icon-left w-full md:w-auto">
            <i className="pi pi-search" />
            <InputText
              type="search"
              value={globalFilter}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setGlobalFilter(e.target.value)
              }
              placeholder="Quick Search..."
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
          rowsPerPageOptions={[10, 25, 50, 100]}
          globalFilter={globalFilter}
          className="p-datatable-sm text-sm"
          stripedRows
          paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
        >
          <Column expander={true} style={{ width: "3rem" }} header="Action" />

          <Column
            field="id"
            header="Sr No."
            sortable
            style={{ width: "4rem" }}
          />
          <Column field="courseName" header="Courses Name" sortable />
          <Column field="collegeName" header="College Name" sortable />
          <Column field="academicYear" header="Academic Year" sortable />
          <Column field="verificationDate" header="Date" sortable />
          <Column field="verifiedBy" header="Verified By" sortable />
          <Column
            field="status"
            header="Verification Status"
            body={statusBodyTemplate}
            sortable
          />
        </DataTable>
      </div>
    </PageLayout>
  );
};

export default CollegeWiseReport;
