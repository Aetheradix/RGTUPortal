import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputTextarea } from "primereact/inputtextarea";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog"; 

interface AllocationRecord {
  id: number;
  enrollmentNo: string;
  applicationNo: string;
  collegeName: string;
  courseName: string;
  category: string;
  quota: string;
  round: string;
  status: string;
  description: string;
  acceptanceStatus: string;
}

const AcceptRejectAllocation: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | undefined>(undefined);
  const [globalFilter, setGlobalFilter] = useState("");

  const [allocations] = useState<AllocationRecord[]>([
    {
      id: 1,
      enrollmentNo: "2023100123",
      applicationNo: "APPL12345678",
      collegeName: "Maulana Azad National Institute of Technology (MANIT), Bhopal",
      courseName: "B.Tech",
      category: "General",
      quota: "State Quota",
      round: "Round 1",
      status: "Allocated",
      description: "Seat allotted successfully in Round 1",
      acceptanceStatus: "Accepted",
    },
  ]);

  const courses = ["B.Tech", "M.Tech", "BCA", "MCA", "B.Sc (IT)", "M.Sc (IT)", "MBA"];
  const colleges = ["MANIT, Bhopal", "IET-DAVV, Indore", "GEC, Jabalpur", "LNCT, Bhopal"];
  const categories = ["General", "OBC", "ST", "SC", "EWS"];
  const quotas = ["State Quota", "Central Quota", "NRI Quota"];
  const rounds = ["Round 1", "Round 2", "Round 3"];
  const allocationStatuses = ["Allocated", "Not Allocated"];

  const confirmSave = () => {
    confirmDialog({
      message: editMode ? "Do you want to update this record?" : "Are you sure you want to save this allocation?",
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-success',
      acceptLabel: 'Yes, Save it',
      rejectLabel: 'No',
      accept: () => {
        setShowForm(false);
      },
      reject: () => {
      }
    });
  };

  const rowExpansionTemplate = (data: AllocationRecord) => {
    return (
      <div className="p-4 bg-blue-50 border rounded-lg m-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm shadow-inner">
        <div>
          <p className="mb-2"><strong>Confirmation Letter:</strong> <span className="text-blue-600 underline cursor-pointer">Letter.pdf</span></p>
          <Button label="View Letter" icon="pi pi-eye" className="p-button-text p-button-sm p-0" />
        </div>
        <div>
          <p><strong>Acceptance Status:</strong> <span className="text-green-600 font-bold">{data.acceptanceStatus}</span></p>
          <p><strong>Description:</strong> {data.description}</p>
        </div>
        <div className="col-span-full flex gap-2 border-t pt-3">
          <Button 
            icon="pi pi-pencil" 
            label="Edit" 
            className="p-button-sm p-button-info" 
            onClick={() => { setShowForm(true); setEditMode(true); }} 
          />
          <Button icon="pi pi-trash" label="Delete" className="p-button-sm p-button-danger" />
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Accept Reject Allocation">
      <ConfirmDialog /> 

      {!showForm ? (
        <div className="bg-white p-6 rounded shadow-sm border">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <h2 className="text-xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">
              Seat Allocation Records
            </h2>
            <Button
              label="Add Seat Allocation"
              icon="pi pi-plus"
              className="p-button-sm p-button-success"
              onClick={() => { setShowForm(true); setEditMode(false); }}
            />
          </div>

          <div className="flex justify-end mb-4">
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText
                placeholder="Search..."
                className="p-inputtext-sm w-full md:w-64"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
              />
            </span>
          </div>

          <DataTable
            value={allocations}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
            rowExpansionTemplate={rowExpansionTemplate}
            dataKey="id"
            paginator rows={10}
            globalFilter={globalFilter}
            className="p-datatable-sm"
            showGridlines stripedRows
          >
            <Column expander style={{ width: "3rem" }} />
            <Column field="id" header="Sr No." style={{ width: "4rem" }} />
            <Column field="enrollmentNo" header="Enrollment Number" sortable />
            <Column field="applicationNo" header="Application Number" sortable />
            <Column field="collegeName" header="College Name" sortable />
            <Column field="courseName" header="Course" sortable />
            <Column field="round" header="Round" sortable />
          </DataTable>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-sm border animate-fadein">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h2 className="text-xl font-bold uppercase text-blue-700">
              {editMode ? "Update Seat Allocation" : "New Seat Allocation Entry"}
            </h2>
            <Button
              label="Go Back to List"
              icon="pi pi-arrow-left"
              className="p-button-text p-button-sm p-button-secondary"
              onClick={() => setShowForm(false)}
            />
          </div>

          <div className="p-fluid grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="field">
              <label className="text-xs font-bold mb-1 block">Enrollment Number*</label>
              <InputText placeholder="Enter Enrollment No." className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="text-xs font-bold mb-1 block">Application Number*</label>
              <InputText placeholder="Enter Application No." className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="text-xs font-bold mb-1 block">Course Name*</label>
              <Dropdown options={courses} placeholder="Select Course" className="p-inputtext-sm" />
            </div>
            <div className="field md:col-span-2">
              <label className="text-xs font-bold mb-1 block">Allotted College Name*</label>
              <Dropdown options={colleges} placeholder="Select College" className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="text-xs font-bold mb-1 block">Cast Category*</label>
              <Dropdown options={categories} placeholder="Select Category" className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="text-xs font-bold mb-1 block">Quota*</label>
              <Dropdown options={quotas} placeholder="Select Quota" className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="text-xs font-bold mb-1 block">Allocation Round*</label>
              <Dropdown options={rounds} placeholder="Select Round" className="p-inputtext-sm" />
            </div>
            <div className="field">
              <label className="text-xs font-bold mb-1 block">Seat Status*</label>
              <Dropdown options={allocationStatuses} placeholder="Select Status" className="p-inputtext-sm" />
            </div>
            <div className="field col-span-full">
              <label className="text-xs font-bold mb-1 block">Description*</label>
              <InputTextarea rows={3} placeholder="Enter details..." className="p-inputtext-sm" />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-5 border-t">
            <Button
              label="Cancel"
              icon="pi pi-times"
              className="p-button-text p-button-secondary w-32"
              onClick={() => setShowForm(false)}
            />
            <Button
              label={editMode ? "Update Details" : "Save Allocation"}
              icon="pi pi-check"
              className={editMode ? "p-button-info w-40" : "p-button-success w-40"}
              onClick={confirmSave}
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};
export default AcceptRejectAllocation;