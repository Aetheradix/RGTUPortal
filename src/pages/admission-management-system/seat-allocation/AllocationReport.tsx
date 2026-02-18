import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Column } from "primereact/column";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";

interface AllocationReportData {
  id: number;
  date: string;
  universityName: string;
  collegeName: string;
  courseName: string;
  category: string;
  quotaType: string;
  totalSeats: number;
  allocationStatus: string;
  addedBy: string;
}

const AllocationReport: React.FC = () => {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | undefined>(undefined);
  const [globalFilter, setGlobalFilter] = useState("");
  const [showReport, setShowReport] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const universities = ["DAVV, Indore", "Sagar University", "Barkatullah University"];
  const colleges = ["MANIT, Bhopal", "IET-DAVV, Indore", "LNCT, Bhopal"];
  const courses = ["B.Tech", "M.Tech", "BCA", "MCA"];
  const categories = ["General", "OBC", "ST", "SC", "EWS"];
  const acceptanceStatus = ["Open", "Close"];

  const [reportList] = useState<AllocationReportData[]>([
    {
      id: 1,
      date: "21-Nov-2024",
      universityName: "Devi Ahilya Vishwavidyalaya (DAVV), Indore",
      collegeName: "Institute of Engineering and Technology (IET), DAVV, Indore",
      courseName: "MCA",
      category: "OBC",
      quotaType: "State Quota",
      totalSeats: 557,
      allocationStatus: "Rejected",
      addedBy: "Prof. Sharma"
    }
  ]);

  const handleSearch = () => setShowReport(true);

  const handleClear = () => {
    setFromDate(null);
    setToDate(null);
    setShowReport(false);
    setGlobalFilter("");
  };

  const confirmUpdate = () => {
    confirmDialog({
      message: 'Are you sure you want to update this report?',
      header: 'Update Confirmation',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-success',
      accept: () => {
        setIsEditing(false);
      }
    });
  };

  const rowExpansionTemplate = (data: AllocationReportData) => {
    return (
      <div className="p-4 bg-gray-50 border rounded-lg m-2 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm shadow-inner">
        <p><strong>Category:</strong> {data.category}</p>
        <p><strong>Quota Type:</strong> {data.quotaType}</p>
        <p><strong>Total Seats:</strong> {data.totalSeats}</p>
        <p><strong>Status:</strong> <span className={data.allocationStatus === 'Rejected' ? 'text-red-600 font-bold' : 'text-green-600 font-bold'}>{data.allocationStatus}</span></p>
        <div className="flex gap-2 col-span-full border-t pt-3 mt-2">
          <Button icon="pi pi-pencil" label="Edit" className="p-button-sm p-button-info" onClick={() => setIsEditing(true)} />
          <Button icon="pi pi-trash" label="Delete" className="p-button-sm p-button-danger" />
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Allocation Report">
      <ConfirmDialog />

      {!isEditing ? (
        <div className="animate-fade-in">
          <div className="bg-white p-6 rounded shadow-sm border mb-6">
            <h2 className="text-lg font-bold mb-4 border-b pb-2">Seat Allocation Filter</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="field flex flex-col gap-1">
                <label className="text-xs font-bold uppercase">Enter From Date*</label>
                <Calendar value={fromDate} onChange={(e) => setFromDate(e.value as Date)} showIcon className="p-inputtext-sm" placeholder="DD/MM/YYYY" />
              </div>
              <div className="field flex flex-col gap-1">
                <label className="text-xs font-bold uppercase">Enter To Date*</label>
                <Calendar value={toDate} onChange={(e) => setToDate(e.value as Date)} showIcon className="p-inputtext-sm" placeholder="DD/MM/YYYY" />
              </div>
              <div className="field flex flex-col gap-1">
                <label className="text-xs font-bold uppercase">Select University Name*</label>
                <Dropdown options={universities} placeholder="Select" className="p-inputtext-sm" />
              </div>
              <div className="field flex flex-col gap-1">
                <label className="text-xs font-bold uppercase">Select College Name*</label>
                <Dropdown options={colleges} placeholder="Select" className="p-inputtext-sm" />
              </div>
              <div className="field flex flex-col gap-1">
                <label className="text-xs font-bold uppercase">Select Course</label>
                <Dropdown options={courses} placeholder="Select" className="p-inputtext-sm" />
              </div>
              <div className="field flex flex-col gap-1">
                <label className="text-xs font-bold uppercase">Select Category</label>
                <Dropdown options={categories} placeholder="Select" className="p-inputtext-sm" />
              </div>
            </div>
            <div className="flex gap-2 mt-4 justify-start">
              <Button label="Search" icon="pi pi-search" className="p-button-sm px-6" onClick={handleSearch} />
              <Button label="Clear" icon="pi pi-refresh" className="p-button-sm p-button-secondary p-button-outlined px-6" onClick={handleClear} />
            </div>
          </div>

          {showReport && (
            <div className="bg-white p-4 rounded shadow-sm border">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold">Seat Allocation Report Result</h2>
                <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText
                    placeholder="Search..."
                    className="p-inputtext-sm"
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                  />
                </span>
              </div>

              <DataTable
                value={reportList}
                expandedRows={expandedRows}
                onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
                rowExpansionTemplate={rowExpansionTemplate}
                paginator rows={10}
                globalFilter={globalFilter}
                className="p-datatable-sm"
                showGridlines stripedRows dataKey="id"
              >
                <Column expander style={{ width: "3rem" }} />
                <Column field="id" header="Sr No." style={{ width: "4rem" }} />
                <Column field="date" header="Date" sortable />
                <Column field="universityName" header="University Name" sortable />
                <Column field="collegeName" header="College Name" sortable />
                <Column field="courseName" header="Course Name" sortable />
                <Column
                  header="Export"
                  body={() => <Button icon="pi pi-file-pdf" className="p-button-rounded p-button-danger p-button-text" />}
                  style={{ textAlign: 'center' }}
                />
              </DataTable>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-sm border animate-fade-in">
          <div className="flex justify-between items-center mb-6 border-b pb-3">
            <h2 className="text-xl font-bold text-blue-800">Update Seat Acceptance Detail</h2>
            <Button label="Back to Report" icon="pi pi-arrow-left" className="p-button-text p-button-sm" onClick={() => setIsEditing(false)} />
          </div>

          <div className="p-fluid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
            <div className="field">
              <label className="font-bold text-sm">Select University Name*</label>
              <Dropdown options={universities} placeholder="Select" className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="font-bold text-sm">Select College Name*</label>
              <Dropdown options={colleges} placeholder="Select" className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="font-bold text-sm">Select Course*</label>
              <Dropdown options={courses} placeholder="Select" className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="font-bold text-sm">Acceptance Start Date*</label>
              <Calendar showIcon placeholder="DD/MM/YYYY" className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="font-bold text-sm">Acceptance End Date*</label>
              <Calendar showIcon placeholder="DD/MM/YYYY" className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="font-bold text-sm">Total Seats Available*</label>
              <InputText type="number" placeholder="0" className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="font-bold text-sm">Seats Accepted*</label>
              <InputText type="number" placeholder="0" className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="font-bold text-sm">Seats Rejected*</label>
              <InputText type="number" placeholder="0" className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="font-bold text-sm">Select Status*</label>
              <Dropdown options={acceptanceStatus} placeholder="Select" className="p-inputtext-sm" />
            </div>
          </div>

          <div className="flex gap-3 mt-8 border-t pt-4 justify-end">
            <Button label="Clear" icon="pi pi-refresh" className="p-button-outlined p-button-secondary w-32" />
            <Button label="Update Report" icon="pi pi-check" className="p-button-success w-40" onClick={confirmUpdate} />
          </div>
        </div>
      )}
    </PageLayout>
  );
};
export default AllocationReport;
