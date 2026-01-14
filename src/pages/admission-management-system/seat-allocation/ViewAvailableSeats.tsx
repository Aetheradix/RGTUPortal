import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";


interface AvailableSeatRecord {
  id: number;
  universityName: string;
  collegeName: string;
  courseName: string;
  category: string;
  quotaType: string;
  totalSeats: number;
  seatsAllocated: number;
  seatsRemaining: number;
}

const ViewAvailableSeats: React.FC = () => {

  const [showForm, setShowForm] = useState<boolean>(false);
  const [formTitle, setFormTitle] = useState<string>("Add Available Seats");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | undefined>(undefined);
  const [globalFilter, setGlobalFilter] = useState<string>("");


  const [selectedUniv, setSelectedUniv] = useState<string>("");
  const [selectedCol, setSelectedCol] = useState<string>("");
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedQuota, setSelectedQuota] = useState<string>("");

  const universities = ["RGPV, Bhopal", "MANIT, Bhopal", "DAVV, Indore", "Barkatullah University"];
  const colleges = ["IET-DAVV, Indore", "SGSITS, Indore", "LNCT, Bhopal", "Oriental College"];
  const courses = ["B.Tech", "M.Tech", "BCA", "MCA", "B.Sc (IT)"];
  const categories = ["General", "OBC", "ST", "SC", "EWS"];
  const quotas = ["State Quota", "Management Quota", "NRI Quota"];

  const [seatsList] = useState<AvailableSeatRecord[]>([
    {
      id: 1,
      universityName: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal",
      collegeName: "Institute of Engineering and Technology (IET), DAVV, Indore",
      courseName: "MCA",
      category: "OBC",
      quotaType: "State Quota",
      totalSeats: 60,
      seatsAllocated: 35,
      seatsRemaining: 25
    }
  ]);


  const confirmSave = () => {
    confirmDialog({
      message: formTitle.includes("Add") ? "Are you sure you want to save this seat entry?" : "Are you sure you want to update this inventory?",
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-success',
      accept: () => setShowForm(false)
    });
  };

  const confirmDelete = (id: number) => {
    confirmDialog({
      message: 'Do you want to delete this seat record from inventory?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => {
        console.log("Deleted Seat ID:", id);
      }
    });
  };

  
  const handleAddNew = () => {
    setFormTitle("Add Available Seats");
    setSelectedUniv(""); setSelectedCol(""); setSelectedCourse("");
    setSelectedCategory(""); setSelectedQuota("");
    setShowForm(true);
  };

  const handleEdit = (data: AvailableSeatRecord) => {
    setFormTitle("Update Available Seats");
    setSelectedUniv(data.universityName);
    setSelectedCol(data.collegeName);
    setSelectedCourse(data.courseName);
    setSelectedCategory(data.category);
    setSelectedQuota(data.quotaType);
    setShowForm(true);
  };

  
  const ListView = (
    <div className="bg-white p-6 rounded shadow-sm border animate-fadein">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b pb-4">
        <h2 className="text-xl font-bold text-gray-800">Available Seats Inventory</h2>
        <Button 
          label="Add New Entry" 
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
            placeholder="Search university, college or course..." 
            className="p-inputtext-sm w-full md:w-80" 
          />
        </span>
      </div>

      <DataTable
        value={seatsList}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
        rowExpansionTemplate={(data) => (
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg m-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm shadow-inner">
            <div className="space-y-1">
              <p><strong>Quota Type:</strong> {data.quotaType}</p>
              <p><strong>Total Capacity:</strong> {data.totalSeats}</p>
            </div>
            <div className="space-y-1">
              <p><strong>Seats Allocated:</strong> {data.seatsAllocated}</p>
              <p className="text-green-700 font-bold"><strong>Seats Remaining:</strong> {data.seatsRemaining}</p>
            </div>
            <div className="col-span-full flex gap-2 border-t pt-3 border-blue-200 justify-end">
              <Button icon="pi pi-pencil" label="Edit" className="p-button-sm p-button-info" onClick={() => handleEdit(data)} />
              <Button icon="pi pi-trash" label="Delete" className="p-button-sm p-button-danger" onClick={() => confirmDelete(data.id)} />
            </div>
          </div>
        )}
        paginator rows={10} globalFilter={globalFilter} className="p-datatable-sm" showGridlines stripedRows dataKey="id"
      >
        <Column expander style={{ width: "3rem" }} />
        <Column field="id" header="Sr No." style={{ width: "4rem" }} />
        <Column field="universityName" header="University" sortable />
        <Column field="collegeName" header="College" sortable />
        <Column field="courseName" header="Course" sortable />
        <Column field="category" header="Category" sortable />
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
          <label className="text-sm font-bold mb-2 block">University Name*</label>
          <Dropdown value={selectedUniv} options={universities} onChange={(e) => setSelectedUniv(e.value)} placeholder="Select University" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">College Name*</label>
          <Dropdown value={selectedCol} options={colleges} onChange={(e) => setSelectedCol(e.value)} placeholder="Select College" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Course Name*</label>
          <Dropdown value={selectedCourse} options={courses} onChange={(e) => setSelectedCourse(e.value)} placeholder="Select Course" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Cast Category*</label>
          <Dropdown value={selectedCategory} options={categories} onChange={(e) => setSelectedCategory(e.value)} placeholder="Select Category" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Quota Type*</label>
          <Dropdown value={selectedQuota} options={quotas} onChange={(e) => setSelectedQuota(e.value)} placeholder="Select Quota" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Total Seats*</label>
          <InputText type="number" placeholder="0" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Seats Allocated*</label>
          <InputText type="number" placeholder="0" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Seats Remaining*</label>
          <InputText type="number" placeholder="0" className="p-inputtext-sm" />
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-10 pt-6 border-t">
        <Button label="Clear Form" icon="pi pi-refresh" className="p-button-text p-button-secondary w-32" />
        <Button label={formTitle.includes("Add") ? "Save Entry" : "Update Inventory"} icon="pi pi-check" className="p-button-success px-8" onClick={confirmSave} />
      </div>
    </div>
  );

  return (
    <PageLayout title="Seat Availability Dashboard">
      <ConfirmDialog />
      {showForm ? FormView : ListView}
    </PageLayout>
  );
};

export default ViewAvailableSeats;