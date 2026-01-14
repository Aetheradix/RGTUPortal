import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputTextarea } from "primereact/inputtextarea";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

interface AllocationStatusRecord {
  id: number;
  enrollmentNo: string;
  applicationNo: string;
  course: string;
  collegeName: string;
  category: string;
  quota: string;
  round: string;
  status: string;
  description: string;
}

const ViewAllocationStatus: React.FC = () => {
  
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formTitle, setFormTitle] = useState<string>("Add Seat Allocation Status");
  const [expandedRows, setExpandedRows] = useState<DataTableExpandedRows | undefined>(undefined);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [selectedCollege, setSelectedCollege] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedQuota, setSelectedQuota] = useState<string>("");
  const [selectedRound, setSelectedRound] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const courses = ["B.Tech", "M.Tech", "BCA", "MCA", "B.Sc (IT)"];
  const colleges = ["MANIT, Bhopal", "IET-DAVV, Indore", "GEC, Jabalpur", "LNCT, Bhopal"];
  const categories = ["General", "OBC", "ST", "SC", "EWS"];
  const quotas = ["State Quota", "Central Quota", "NRI Quota"];
  const rounds = ["Round 1", "Round 2", "Round 3"];
  const statusOptions = ["Allocated", "Not Allocated"];

  const [data] = useState<AllocationStatusRecord[]>([
    {
      id: 1,
      enrollmentNo: "2023100123",
      applicationNo: "APPL12345678",
      course: "B.Tech",
      collegeName: "Maulana Azad National Institute of Technology (MANIT), Bhopal",
      category: "General",
      quota: "State Quota",
      round: "Round 1",
      status: "Allocated",
      description: "Seat allotted successfully in Round 1"
    }
  ]);

  
  const confirmSave = () => {
    confirmDialog({
      message: formTitle.includes("Add") ? "Do you want to save this allocation status?" : "Do you want to update this status?",
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-success',
      accept: () => setShowForm(false)
    });
  };

  const confirmDelete = (id: number) => {
    confirmDialog({
      message: 'Are you sure you want to delete this allocation record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-trash',
      acceptClassName: 'p-button-danger',
      accept: () => {
        console.log("Deleted ID:", id);
      }
    });
  };

  
  const handleAddNew = () => {
    setFormTitle("Add Seat Allocation Status");
    setSelectedCourse(""); setSelectedCollege(""); setSelectedCategory("");
    setSelectedQuota(""); setSelectedRound(""); setSelectedStatus("");
    setShowForm(true);
  };

  const handleEdit = (rowData: AllocationStatusRecord) => {
    setFormTitle("Update Allocation Status");
    setSelectedCourse(rowData.course);
    setSelectedCollege(rowData.collegeName);
    setSelectedCategory(rowData.category);
    setSelectedQuota(rowData.quota);
    setSelectedRound(rowData.round);
    setSelectedStatus(rowData.status);
    setShowForm(true);
  };

  
  const ListView = (
    <div className="bg-white p-6 rounded shadow-sm border animate-fadein">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4 border-b pb-4">
        <h2 className="text-xl font-bold text-gray-800">Allocation Status Records</h2>
        <Button 
          label="Add Allocation Status" 
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
        value={data}
        expandedRows={expandedRows}
        onRowToggle={(e) => setExpandedRows(e.data as DataTableExpandedRows)}
        rowExpansionTemplate={(rowData) => (
          <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg m-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm shadow-inner">
            <div>
              <p className="mb-2"><strong>Allocation Round:</strong> {rowData.round}</p>
              <p><strong>Status:</strong> 
                <span className={`ml-2 font-bold ${rowData.status === 'Allocated' ? 'text-green-600' : 'text-red-600'}`}>
                  {rowData.status}
                </span>
              </p>
            </div>
            <div>
              <p><strong>Admin Description:</strong> {rowData.description}</p>
              <div className="flex gap-2 mt-4 justify-end">
                <Button icon="pi pi-pencil" label="Edit" className="p-button-sm p-button-info" onClick={() => handleEdit(rowData)} />
                <Button icon="pi pi-trash" label="Delete" className="p-button-sm p-button-danger" onClick={() => confirmDelete(rowData.id)} />
              </div>
            </div>
          </div>
        )}
        paginator rows={10} globalFilter={globalFilter} className="p-datatable-sm" showGridlines stripedRows dataKey="id"
      >
        <Column expander style={{ width: "3rem" }} />
        <Column field="id" header="Sr No." style={{ width: "4rem" }} />
        <Column field="enrollmentNo" header="Enrollment No." sortable />
        <Column field="applicationNo" header="Application No." sortable />
        <Column field="course" header="Course" sortable />
        <Column field="collegeName" header="Allotted College" sortable className="max-w-xs overflow-hidden text-ellipsis" />
        <Column field="category" header="Category" sortable />
        <Column field="quota" header="Quota" sortable />
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
          <label className="text-sm font-bold mb-2 block">Enrollment Number*</label>
          <InputText placeholder="Ex: 2023..." className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Application Number*</label>
          <InputText placeholder="Ex: APPL..." className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Select Course*</label>
          <Dropdown value={selectedCourse} options={courses} onChange={(e) => setSelectedCourse(e.value)} placeholder="Select" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Allotted College*</label>
          <Dropdown value={selectedCollege} options={colleges} onChange={(e) => setSelectedCollege(e.value)} placeholder="Select" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Cast Category*</label>
          <Dropdown value={selectedCategory} options={categories} onChange={(e) => setSelectedCategory(e.value)} placeholder="Select" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Quota*</label>
          <Dropdown value={selectedQuota} options={quotas} onChange={(e) => setSelectedQuota(e.value)} placeholder="Select" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Allocation Round*</label>
          <Dropdown value={selectedRound} options={rounds} onChange={(e) => setSelectedRound(e.value)} placeholder="Select" className="p-inputtext-sm" />
        </div>
        <div className="field">
          <label className="text-sm font-bold mb-2 block">Allocation Status*</label>
          <Dropdown value={selectedStatus} options={statusOptions} onChange={(e) => setSelectedStatus(e.value)} placeholder="Select" className="p-inputtext-sm" />
        </div>
        <div className="field col-span-full">
          <label className="text-sm font-bold mb-2 block">Description*</label>
          <InputTextarea rows={3} placeholder="Enter details..." className="p-inputtext-sm" />
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-10 pt-6 border-t">
        <Button label="Clear Form" icon="pi pi-refresh" className="p-button-text p-button-secondary w-32" />
        <Button label={formTitle.includes("Add") ? "Save Allocation" : "Update Status"} icon="pi pi-check" className="p-button-success px-8" onClick={confirmSave} />
      </div>
    </div>
  );

  return (
    <PageLayout title="Allocation Status Management">
      <ConfirmDialog />
      {showForm ? FormView : ListView}
    </PageLayout>
  );
};
export default ViewAllocationStatus;