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
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";

interface SpecialTrainingData {
  id: number;
  subject: string;
  trainerName: string;
  fundingAgency: string;
  startDate: Date | null;
  endDate: Date | null;
  outcomes: string;
  status: string;
}

const SpecialTrainingDetails: React.FC = () => {
  const toast = useRef<Toast>(null);
  const emptyData: SpecialTrainingData = {
    id: 0,
    subject: "",
    trainerName: "",
    fundingAgency: "",
    startDate: null,
    endDate: null,
    outcomes: "",
    status: "",
  };

  const [trainings, setTrainings] = useState<SpecialTrainingData[]>([
    { 
        id: 1, 
        subject: "Inclusive Education Strategies", 
        trainerName: "Dr. Alok Sharma", 
        fundingAgency: "UNESCO", 
        startDate: new Date('2023-10-01'), 
        endDate: new Date('2023-10-10'), 
        outcomes: "Better understanding of student diversity",
        status: "Completed"
    }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [formData, setFormData] = useState<SpecialTrainingData>(emptyData);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const statusOptions = [
    { label: "Completed", value: "Completed" },
    { label: "In-Progress", value: "In-Progress" },
    { label: "Planned", value: "Planned" }
  ];

  const openNew = () => {
    setFormData(emptyData);
    setViewMode('form');
  };

  const editData = (item: SpecialTrainingData) => {
    setFormData({ ...item });
    setViewMode('form');
  };

  const cancelEdit = () => {
    setFormData(emptyData);
    setViewMode('list');
  };

  const saveTraining = () => {
    if (formData.subject.trim() && formData.startDate) {
      const _trainings = [...trainings];
      
      if (formData.id) {
        const index = _trainings.findIndex(t => t.id === formData.id);
        _trainings[index] = { ...formData };
        toast.current?.show({ severity: 'success', summary: 'Updated', detail: 'Special Training Updated', life: 3000 });
      } else {
        const newEntry = { 
            ...formData, 
            id: Math.floor(Math.random() * 1000) 
        };
        _trainings.push(newEntry);
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'New Special Training Added', life: 3000 });
      }

      setTrainings(_trainings);
      setViewMode('list');
      setFormData(emptyData);
    } else {
        toast.current?.show({ severity: 'error', summary: 'Missing Info', detail: 'Subject and Dates are required', life: 3000 });
    }
  };

  const deleteRecord = () => {
    const _trainings = trainings.filter(val => val.id !== formData.id);
    setTrainings(_trainings);
    setDeleteDialog(false);
    toast.current?.show({ severity: 'warn', summary: 'Deleted', detail: 'Record Removed', life: 3000 });
  };

  const header = (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold">Special Training List</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search Subject..." className="p-inputtext-sm" />
      </span>
    </div>
  );

  const actionTemplate = (rowData: SpecialTrainingData) => (
    <div className="flex gap-2">
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" onClick={() => editData(rowData)} />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" onClick={() => { setFormData(rowData); setDeleteDialog(true); }} />
    </div>
  );

  return (
    <PageLayout title="Special Training Management">
      <Toast ref={toast} />
      {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">Special Training Details</div>
            <Button label="Add Special Training" icon="pi pi-book" className="p-button-primary" onClick={openNew} />
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
              <Column field="subject" header="Training Subject" sortable />
              <Column field="trainerName" header="Expert/Trainer" />
              <Column field="fundingAgency" header="Funding Agency" />
              <Column field="startDate" header="From Date" body={(d) => d.startDate?.toLocaleDateString()} sortable />
              <Column field="endDate" header="To Date" body={(d) => d.endDate?.toLocaleDateString()} />
              <Column field="status" header="Status" />
              <Column header="Action" body={actionTemplate} style={{ width: '8rem' }} />
            </DataTable>
          </Card>
        </div>
      ) : (
        <div className="animate-fade-in text-left">
          <div className="flex items-center gap-2 mb-4">
            <Button icon="pi pi-arrow-left" className="p-button-text p-button-secondary" onClick={cancelEdit} />
            <div className="text-xl font-bold text-blue-900 uppercase">
              {formData.id ? 'Edit Special Training' : 'Register New Special Training'}
            </div>
          </div>

          <Card title="Training Specifics Form" className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-sm">Subject of Training *</label>
                <InputText value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} placeholder="e.g. Advanced Digital Literacy" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Expert / Trainer Name</label>
                <InputText value={formData.trainerName} onChange={(e) => setFormData({...formData, trainerName: e.target.value})} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Funding Agency</label>
                <InputText value={formData.fundingAgency} onChange={(e) => setFormData({...formData, fundingAgency: e.target.value})} placeholder="e.g. Samagra Shiksha" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Start Date *</label>
                <Calendar value={formData.startDate} onChange={(e) => setFormData({...formData, startDate: e.value as Date})} showIcon placeholder="dd/mm/yyyy" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">End Date</label>
                <Calendar value={formData.endDate} onChange={(e) => setFormData({...formData, endDate: e.value as Date})} showIcon placeholder="dd/mm/yyyy" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Training Status</label>
                <Dropdown value={formData.status} options={statusOptions} onChange={(e) => setFormData({...formData, status: e.value})} placeholder="Select Status" />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-sm">Expected Learning Outcomes</label>
                <InputTextarea value={formData.outcomes} onChange={(e) => setFormData({...formData, outcomes: e.target.value})} rows={3} placeholder="Describe what was learned..." />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Discard" icon="pi pi-times" className="p-button-outlined p-button-secondary px-6" onClick={cancelEdit} />
              <Button label={formData.id ? "Update Details" : "Save Training"} icon="pi pi-save" className="p-button-success px-8" onClick={saveTraining} />
            </div>
          </Card>
        </div>
      )}
      <Dialog visible={deleteDialog} style={{ width: '450px' }} header="Delete Record" modal onHide={() => setDeleteDialog(false)}
        footer={
          <div className="mt-4">
            <Button label="No" icon="pi pi-text" onClick={() => setDeleteDialog(false)} />
            <Button label="Yes" className="p-button-danger" onClick={deleteRecord} />
          </div>
        }>
        <div className="flex items-center gap-3">
          <i className="pi pi-exclamation-circle text-red-500 text-3xl" />
          <span>Confirm delete for <b>{formData.subject}</b>?</span>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default SpecialTrainingDetails;