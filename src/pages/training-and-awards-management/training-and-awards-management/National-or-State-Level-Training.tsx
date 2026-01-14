import React, { useState, useRef, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";

interface TrainingData {
  id: number;
  trainingName: string;
  level: string; 
  year: string;
  organizer: string;
  duration: string;
  location: string;
}

const NationalStateTraining: React.FC = () => {
  const toast = useRef<Toast>(null);
  const emptyTraining: TrainingData = {
    id: 0,
    trainingName: "",
    level: "",
    year: "",
    organizer: "",
    duration: "",
    location: "",
  };

  const [trainings, setTrainings] = useState<TrainingData[]>([
    { id: 1, trainingName: "ICT in Education", level: "National", year: "2023", organizer: "NCERT", duration: "15 Days", location: "New Delhi" },
    { id: 2, trainingName: "Pedagogy Excellence", level: "State", year: "2022", organizer: "SCERT", duration: "7 Days", location: "Bhopal" }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [training, setTraining] = useState<TrainingData>(emptyTraining);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const levels = [
    { label: "National Level", value: "National" },
    { label: "State Level", value: "State" }
  ];

  const openNew = () => {
    setTraining(emptyTraining);
    setViewMode('form');
  };

  const editTraining = (item: TrainingData) => {
    setTraining({ ...item });
    setViewMode('form');
  };

  const cancelEdit = () => {
    setTraining(emptyTraining);
    setViewMode('list');
  };

  const confirmDelete = (item: TrainingData) => {
    setTraining(item);
    setDeleteDialog(true);
  };

  const saveTraining = () => {
    if (training.trainingName.trim()) {
      const _trainings = [...trainings];
      
      if (training.id) {
        const index = _trainings.findIndex(t => t.id === training.id);
        _trainings[index] = { ...training };
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Training Updated', life: 3000 });
      } else {
        const newTraining = { 
            ...training, 
            id: Math.floor(Math.random() * 1000) 
        };
        _trainings.push(newTraining);
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Training Added', life: 3000 });
      }

      setTrainings(_trainings);
      setViewMode('list');
      setTraining(emptyTraining);
    } else {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Please fill training name', life: 3000 });
    }
  };

  const deleteSelectedTraining = () => {
    const _trainings = trainings.filter(val => val.id !== training.id);
    setTrainings(_trainings);
    setDeleteDialog(false);
    toast.current?.show({ severity: 'warn', summary: 'Deleted', detail: 'Record Deleted', life: 3000 });
  };

  const header = (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold">Training Records</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search..." className="p-inputtext-sm" />
      </span>
    </div>
  );

  const actionTemplate = (rowData: TrainingData) => (
    <div className="flex gap-2">
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" onClick={() => editTraining(rowData)} />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" onClick={() => confirmDelete(rowData)} />
    </div>
  );

  return (
    <PageLayout title="Training Management">
      <Toast ref={toast} />
      {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">National or State Level Training</div>
            <Button label="Add New Training" icon="pi pi-plus" className="p-button-primary" onClick={openNew} />
          </div>

          <Card>
            <DataTable 
              value={trainings} 
              header={header} 
              globalFilter={globalFilter}
              paginator rows={10} 
              className="p-datatable-sm" 
              showGridlines 
              stripedRows
            >
              <Column field="trainingName" header="Training Name" sortable />
              <Column field="level" header="Level" sortable />
              <Column field="year" header="Year" sortable />
              <Column field="organizer" header="Organizer" />
              <Column field="duration" header="Duration" />
              <Column field="location" header="Location" />
              <Column header="Action" body={actionTemplate} style={{ width: '8rem' }} />
            </DataTable>
          </Card>
        </div>
      ) : (
        <div className="animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <Button icon="pi pi-arrow-left" className="p-button-text p-button-secondary" onClick={cancelEdit} />
            <div className="text-xl font-bold text-blue-900 uppercase">
              {training.id ? 'Edit Training Details' : 'Add New Training'}
            </div>
          </div>

          <Card title="Training Information Form" className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-sm">Training Name *</label>
                <InputText value={training.trainingName} onChange={(e) => setTraining({...training, trainingName: e.target.value})} placeholder="Enter name of training" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Level *</label>
                <Dropdown value={training.level} options={levels} onChange={(e) => setTraining({...training, level: e.value})} placeholder="Select Level" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Year *</label>
                <InputText value={training.year} onChange={(e) => setTraining({...training, year: e.target.value})} placeholder="YYYY" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Organizer *</label>
                <InputText value={training.organizer} onChange={(e) => setTraining({...training, organizer: e.target.value})} placeholder="Name of organization" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Duration *</label>
                <InputText value={training.duration} onChange={(e) => setTraining({...training, duration: e.target.value})} placeholder="e.g. 10 Days" />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-sm">Location *</label>
                <InputText value={training.location} onChange={(e) => setTraining({...training, location: e.target.value})} placeholder="Enter training location" />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary px-6" onClick={cancelEdit} />
              <Button label={training.id ? "Update Training" : "Save Training"} icon="pi pi-save" className="p-button-success px-8" onClick={saveTraining} />
            </div>
          </Card>
        </div>
      )}

      <Dialog visible={deleteDialog} style={{ width: '450px' }} header="Confirm Delete" modal onHide={() => setDeleteDialog(false)}
        footer={
          <div className="mt-4">
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={() => setDeleteDialog(false)} />
            <Button label="Yes" icon="pi pi-check" className="p-button-danger" onClick={deleteSelectedTraining} />
          </div>
        }>
        <div className="flex items-center gap-3">
          <i className="pi pi-exclamation-triangle text-red-500 text-3xl" />
          <span>Are you sure you want to delete <b>{training.trainingName}</b>?</span>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default NationalStateTraining;