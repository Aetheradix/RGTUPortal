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

interface CurriculumActivity {
  id: number;
  activityType: string; 
  activityName: string;
  organization: string;
  year: string;
  level: string;
  achievement: string;
  remarks: string;
}

const EmployeeCurriculumActivities: React.FC = () => {
  const toast = useRef<Toast>(null);
  const emptyActivity: CurriculumActivity = {
    id: 0,
    activityType: "",
    activityName: "",
    organization: "",
    year: "",
    level: "",
    achievement: "",
    remarks: "",
  };

  const [activities, setActivities] = useState<CurriculumActivity[]>([
    { 
      id: 1, 
      activityType: "Sports", 
      activityName: "State Level Badminton", 
      organization: "SGFI", 
      year: "2023", 
      level: "State", 
      achievement: "Winner", 
      remarks: "Awarded by Sports Minister" 
    },
    { 
      id: 2, 
      activityType: "Cultural", 
      activityName: "Folk Dance Competition", 
      organization: "Culture Dept MP", 
      year: "2022", 
      level: "District", 
      achievement: "Runner Up", 
      remarks: "Participated as Group Lead" 
    }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [formData, setFormData] = useState<CurriculumActivity>(emptyActivity);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const activityTypes = [
    { label: "Sports", value: "Sports" },
    { label: "Cultural", value: "Cultural" },
    { label: "NSS", value: "NSS" },
    { label: "NCC", value: "NCC" },
    { label: "Scout & Guide", value: "Scout & Guide" },
    { label: "Social Work", value: "Social Work" },
    { label: "Other", value: "Other" }
  ];

  const levels = [
    { label: "Cluster Level", value: "Cluster" },
    { label: "District Level", value: "District" },
    { label: "State Level", value: "State" },
    { label: "National Level", value: "National" },
    { label: "International Level", value: "International" }
  ];

  const openNew = () => {
    setFormData(emptyActivity);
    setViewMode('form');
  };

  const editActivity = (item: CurriculumActivity) => {
    setFormData({ ...item });
    setViewMode('form');
  };

  const cancelEdit = () => {
    setFormData(emptyActivity);
    setViewMode('list');
  };

  const saveActivity = () => {
    if (formData.activityType && formData.activityName.trim()) {
      const _activities = [...activities];
      
      if (formData.id) {
        const index = _activities.findIndex(a => a.id === formData.id);
        _activities[index] = { ...formData };
        toast.current?.show({ severity: 'success', summary: 'Updated', detail: 'Activity Updated Successfully', life: 3000 });
      } else {
        const newEntry = { 
            ...formData, 
            id: Math.floor(Math.random() * 1000) 
        };
        _activities.push(newEntry);
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Activity Added Successfully', life: 3000 });
      }

      setActivities(_activities);
      setViewMode('list');
      setFormData(emptyActivity);
    } else {
        toast.current?.show({ severity: 'error', summary: 'Required', detail: 'Please fill Activity Type and Name', life: 3000 });
    }
  };

  const deleteActivity = () => {
    const _activities = activities.filter(val => val.id !== formData.id);
    setActivities(_activities);
    setDeleteDialog(false);
    toast.current?.show({ severity: 'warn', summary: 'Deleted', detail: 'Record Removed', life: 3000 });
  };

  const header = (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold text-gray-700">Activities List</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search Activity..." className="p-inputtext-sm" />
      </span>
    </div>
  );

  const actionTemplate = (rowData: CurriculumActivity) => (
    <div className="flex gap-2">
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" onClick={() => editActivity(rowData)} />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" onClick={() => { setFormData(rowData); setDeleteDialog(true); }} />
    </div>
  );

  return (
    <PageLayout title="Other Curriculum Activities">
      <Toast ref={toast} />
      {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">Employee Other Curriculum Activities Report</div>
            <Button label="Add Activity" icon="pi pi-plus-circle" className="p-button-primary" onClick={openNew} />
          </div>

          <Card>
            <DataTable 
              value={activities} 
              header={header} 
              globalFilter={globalFilter}
              paginator rows={10} 
              className="p-datatable-sm" 
              showGridlines 
              stripedRows
            >
              <Column field="activityType" header="Activity Type" sortable />
              <Column field="activityName" header="Activity Name" sortable />
              <Column field="level" header="Level" />
              <Column field="year" header="Year" sortable />
              <Column field="organization" header="Organization" />
              <Column field="achievement" header="Achievement" />
              <Column header="Action" body={actionTemplate} style={{ width: '8rem' }} />
            </DataTable>
          </Card>
        </div>
      ) : (
        <div className="animate-fade-in text-left">
          <div className="flex items-center gap-2 mb-4">
            <Button icon="pi pi-arrow-left" className="p-button-text p-button-secondary" onClick={cancelEdit} />
            <div className="text-xl font-bold text-blue-900 uppercase">
              {formData.id ? 'Edit Activity Record' : 'Add New Activity Record'}
            </div>
          </div>

          <Card title="Activity Information Form" className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Type of Activity *</label>
                <Dropdown value={formData.activityType} options={activityTypes} onChange={(e) => setFormData({...formData, activityType: e.value})} placeholder="Select Activity Type" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Name of Activity/Event *</label>
                <InputText value={formData.activityName} onChange={(e) => setFormData({...formData, activityName: e.target.value})} placeholder="e.g. Annual Sports Meet" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Participation Level *</label>
                <Dropdown value={formData.level} options={levels} onChange={(e) => setFormData({...formData, level: e.value})} placeholder="Select Level" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Year *</label>
                <InputText value={formData.year} onChange={(e) => setFormData({...formData, year: e.target.value})} placeholder="YYYY" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Organized By (Body/Agency)</label>
                <InputText value={formData.organization} onChange={(e) => setFormData({...formData, organization: e.target.value})} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Achievement / Prize Won</label>
                <InputText value={formData.achievement} onChange={(e) => setFormData({...formData, achievement: e.target.value})} placeholder="e.g. Gold Medal, Participant" />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-sm">Additional Remarks</label>
                <InputTextarea value={formData.remarks} onChange={(e) => setFormData({...formData, remarks: e.target.value})} rows={3} placeholder="Any other details..." />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary px-6" onClick={cancelEdit} />
              <Button label={formData.id ? "Update Activity" : "Save Activity"} icon="pi pi-save" className="p-button-success px-8" onClick={saveActivity} />
            </div>
          </Card>
        </div>
      )}

      <Dialog visible={deleteDialog} style={{ width: '450px' }} header="Confirm Deletion" modal onHide={() => setDeleteDialog(false)}
        footer={
          <div className="mt-4">
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={() => setDeleteDialog(false)} />
            <Button label="Yes" icon="pi pi-check" className="p-button-danger" onClick={deleteActivity} />
          </div>
        }>
        <div className="flex items-center gap-3">
          <i className="pi pi-exclamation-triangle text-red-500 text-3xl" />
          <span>Do you want to delete <b>{formData.activityName}</b>?</span>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default EmployeeCurriculumActivities;