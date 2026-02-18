import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Column } from "primereact/column";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";

interface SeatAcceptanceRecord {
  id: number;
  universityName: string;
  collegeName: string;
  courseName: string;
  startDate: string;
  endDate: string;
  totalSeats: number;
  seatsAccepted: number;
  seatsRejected: number;
  status: string;
}

const SeatAcceptanceWindow: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formTitle, setFormTitle] = useState<string>("Add Seat Acceptance");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | undefined>(undefined);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const [selectedUniv, setSelectedUniv] = useState<string>("");
  const [selectedCol, setSelectedCol] = useState<string>("");
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const universities = ["RGPV, Bhopal", "DAVV, Indore", "BU, Bhopal", "MANIT, Bhopal"];
  const colleges = ["IET-DAVV, Indore", "LNCT, Bhopal", "SATI, Vidisha", "OIST, Bhopal"];
  const courses = ["B.Tech", "M.Tech", "BCA", "MCA", "MBA"];
  const statuses = ["Open", "Close"];

  const [acceptanceList] = useState<SeatAcceptanceRecord[]>([
    {
      id: 1,
      universityName: "Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)",
      collegeName: "Institute of Engineering and Technology (IET), DAVV, Indore",
      courseName: "MCA",
      startDate: "21-Nov-2024",
      endDate: "30-Nov-2024",
      totalSeats: 120,
      seatsAccepted: 90,
      seatsRejected: 40,
      status: "Open"
    }
  ]);

  const confirmSave = () => {
    confirmDialog({
      message: formTitle.includes("Add") ? "Do you want to save this record?" : "Do you want to update this record?",
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-success',
      accept: () => setShowForm(false)
    });
  };

  const confirmDelete = (id: number) => {
    confirmDialog({
      message: 'Are you sure you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-trash',
      acceptClassName: 'p-button-danger',
      accept: () => {
        console.log("Deleted record:", id);
      }
    });
  };

  const handleEdit = (data: SeatAcceptanceRecord) => {
    setFormTitle("Update Seat Acceptance");
    setSelectedUniv(data.universityName);
    setSelectedCol(data.collegeName);
    setSelectedCourse(data.courseName);
    setSelectedStatus(data.status);
    setShowForm(true);
  };

  const handleAddNew = () => {
    setFormTitle("Add Seat Acceptance");
    setSelectedUniv("");
    setSelectedCol("");
    setSelectedCourse("");
    setSelectedStatus("");
    setShowForm(true);
  };

  const ListView = (
    <div className="bg-white p-6 rounded shadow-sm border animate-fadein">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b pb-4">
        <h2 className="text-xl font-bold text-gray-800">Seat Acceptance List</h2>
        <Button
          label="Add Seat Acceptance"
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
            placeholder="Quick Search..."
            className="p-inputtext-sm w-full md:w-64"
          />
        </span>
      </div>

      <DataTable
        value={acceptanceList}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
        rowExpansionTemplate={(data) => (
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm shadow-inner">
            <div>
              <p><strong>Start Date:</strong> {data.startDate}</p>
              <p><strong>End Date:</strong> {data.endDate}</p>
            </div>
            <div>
              <p><strong>Total Available:</strong> {data.totalSeats}</p>
              <p className="text-green-700 font-bold"><strong>Accepted:</strong> {data.seatsAccepted}</p>
              <p className="text-red-700 font-bold"><strong>Rejected:</strong> {data.seatsRejected}</p>
            </div>
            <div className="flex flex-col justify-between items-end">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${data.status === 'Open' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{data.status}</span>
              <div className="flex gap-2 mt-4">
                <Button icon="pi pi-pencil" label="Edit Record" className="p-button-sm p-button-info" onClick={() => handleEdit(data)} />
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
        <Column field="courseName" header="Course Name" sortable />
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
          <Dropdown value={selectedUniv} options={universities} onChange={(e) => setSelectedUniv(e.value)} placeholder="Select University" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">College Name*</label>
          <Dropdown value={selectedCol} options={colleges} onChange={(e) => setSelectedCol(e.value)} placeholder="Select College" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Course*</label>
          <Dropdown value={selectedCourse} options={courses} onChange={(e) => setSelectedCourse(e.value)} placeholder="Select Course" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Acceptance Start Date*</label>
          <Calendar showIcon placeholder="DD-MM-YYYY" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Acceptance End Date*</label>
          <Calendar showIcon placeholder="DD-MM-YYYY" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Total Seats Available*</label>
          <InputText type="number" placeholder="0" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Seats Accepted*</label>
          <InputText type="number" placeholder="0" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Seats Rejected*</label>
          <InputText type="number" placeholder="0" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Status*</label>
          <Dropdown value={selectedStatus} options={statuses} onChange={(e) => setSelectedStatus(e.value)} placeholder="Select Status" />
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-10 pt-6 border-t">
        <Button label="Clear Form" icon="pi pi-refresh" className="p-button-text p-button-secondary" />
        <Button label={formTitle.includes("Add") ? "Save Information" : "Update Information"} icon="pi pi-check" className="p-button-success px-8" onClick={confirmSave} />
      </div>
    </div>
  );

  return (
    <PageLayout title="Seat Acceptance Management">
      <ConfirmDialog />
      {showForm ? FormView : ListView}
    </PageLayout>
  );
};
export default SeatAcceptanceWindow;
