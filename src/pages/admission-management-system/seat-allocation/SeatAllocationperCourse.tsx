import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

interface SeatAllocationRecord {
  id: number;
  universityName: string;
  collegeName: string;
  courseName: string;
  totalSeats: number;
  reservedSeats: number;
  generalSeats: number;
  allocationDate: string;
  approvalStatus: string;
  description: string;
}

const SeatAllocationPerCourse: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formTitle, setFormTitle] = useState<string>("Add Seat Allocation Per Course");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | undefined>(undefined);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const [selectedUniv, setSelectedUniv] = useState<string>("");
  const [selectedCol, setSelectedCol] = useState<string>("");
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const universities = ["RGPV, Bhopal", "DAVV, Indore", "Sagar University", "Barkatullah University"];
  const colleges = ["MANIT, Bhopal", "IET-DAVV, Indore", "LNCT, Bhopal", "SITS, Indore"];
  const courses = ["B.Tech", "M.Tech", "BCA", "MCA", "MBA"];
  const statusList = ["Approved", "Rejected"];

  const [dataList] = useState<SeatAllocationRecord[]>([
    {
      id: 1,
      universityName: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
      collegeName: "Maulana Azad National Institute of Technology (MANIT), Bhopal",
      courseName: "MCA",
      totalSeats: 120,
      reservedSeats: 50,
      generalSeats: 70,
      allocationDate: "21-Nov-2024",
      approvalStatus: "Active",
      description: "Seats distributed as per quota policy"
    }
  ]);

  const confirmAction = () => {
    confirmDialog({
      message: formTitle.includes("Add") ? "Are you sure you want to save this allocation?" : "Are you sure you want to update this allocation?",
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-success',
      accept: () => setShowForm(false),
    });
  };

  const confirmDelete = (id: number) => {
    confirmDialog({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => {
        console.log("Deleted:", id);
      },
    });
  };

  const handleAddNew = () => {
    setFormTitle("Add Seat Allocation Per Course");
    setSelectedUniv("");
    setSelectedCol("");
    setSelectedCourse("");
    setSelectedStatus("");
    setShowForm(true);
  };

  const handleEdit = (data: SeatAllocationRecord) => {
    setFormTitle("Update Seat Allocation Per Course");
    setSelectedUniv(data.universityName);
    setSelectedCol(data.collegeName);
    setSelectedCourse(data.courseName);
    setSelectedStatus(data.approvalStatus);
    setShowForm(true);
  };

  const ListView = (
    <div className="bg-white p-6 rounded shadow-sm border animate-fadein">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b pb-4">
        <h2 className="text-xl font-bold text-gray-800">Seat Allocation List</h2>
        <Button 
          label="Add Allocation" 
          icon="pi pi-plus" 
          className="p-button-sm p-button-success px-4" 
          onClick={handleAddNew} 
        />
      </div>

      <div className="flex justify-end mb-4">
        <span className="p-input-icon-left w-full md:w-auto">
          <i className="pi pi-search" />
          <InputText 
            value={globalFilter} 
            onChange={(e) => setGlobalFilter(e.target.value)} 
            placeholder="Search allocation..." 
            className="p-inputtext-sm w-full md:w-64" 
          />
        </span>
      </div>

      <DataTable
        value={dataList}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
        rowExpansionTemplate={(data) => (
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg m-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm shadow-inner">
            <div className="space-y-1">
              <p><strong>General Seats:</strong> {data.generalSeats}</p>
              <p><strong>Allocation Date:</strong> {data.allocationDate}</p>
              <p><strong>Status:</strong> <span className="text-green-600 font-bold">{data.approvalStatus}</span></p>
            </div>
            <div>
              <p><strong>Description:</strong> {data.description}</p>
              <div className="flex gap-2 mt-4 justify-end">
                <Button icon="pi pi-pencil" label="Edit" className="p-button-sm p-button-info" onClick={() => handleEdit(data)} />
                <Button icon="pi pi-trash" label="Delete" className="p-button-sm p-button-danger" onClick={() => confirmDelete(data.id)} />
              </div>
            </div>
          </div>
        )}
        paginator rows={10} globalFilter={globalFilter} className="p-datatable-sm" showGridlines stripedRows dataKey="id"
      >
        <Column expander style={{ width: "3rem" }} />
        <Column field="id" header="Sr No." style={{ width: "4rem" }} />
        <Column field="universityName" header="University Name" sortable />
        <Column field="collegeName" header="College Name" sortable />
        <Column field="courseName" header="Course" sortable />
        <Column field="totalSeats" header="Total" sortable />
        <Column field="reservedSeats" header="Reserved" sortable />
      </DataTable>
    </div>
  );

  const FormView = (
    <div className="bg-white p-6 rounded shadow-sm border animate-fadein">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-xl font-bold uppercase text-blue-700 border-l-4 border-blue-700 pl-3">{formTitle}</h2>
        <Button label="Back to List" icon="pi pi-arrow-left" className="p-button-text p-button-sm" onClick={() => setShowForm(false)} />
      </div>

      <div className="p-fluid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Allotted University Name*</label>
          <Dropdown value={selectedUniv} options={universities} onChange={(e) => setSelectedUniv(e.value)} placeholder="Select" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Allotted College Name*</label>
          <Dropdown value={selectedCol} options={colleges} onChange={(e) => setSelectedCol(e.value)} placeholder="Select" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Select Course*</label>
          <Dropdown value={selectedCourse} options={courses} onChange={(e) => setSelectedCourse(e.value)} placeholder="Select" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Total Seats*</label>
          <InputText type="number" placeholder="Enter Total" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Reserved Seats*</label>
          <InputText type="number" placeholder="Enter Reserved" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">General Seats*</label>
          <InputText type="number" placeholder="Enter General" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Allocation Date*</label>
          <Calendar showIcon placeholder="DD/MM/YYYY" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Approval Status*</label>
          <Dropdown value={selectedStatus} options={statusList} onChange={(e) => setSelectedStatus(e.value)} placeholder="Select" className="p-inputtext-sm" />
        </div>
        <div className="field col-span-full">
          <label className="text-sm font-bold mb-2 block">Description*</label>
          <InputTextarea rows={3} placeholder="Write allocation details..." className="p-inputtext-sm" />
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-10 pt-6 border-t">
        <Button label="Clear Form" icon="pi pi-refresh" className="p-button-text p-button-secondary" />
        <Button label={formTitle.includes("Add") ? "Save Allocation" : "Update Allocation"} icon="pi pi-check" className="p-button-success px-8" onClick={confirmAction} />
      </div>
    </div>
  );

  return (
    <PageLayout title="Course-wise Seat Allocation">
      <ConfirmDialog />
      {showForm ? FormView : ListView}
    </PageLayout>
  );
};
export default SeatAllocationPerCourse;