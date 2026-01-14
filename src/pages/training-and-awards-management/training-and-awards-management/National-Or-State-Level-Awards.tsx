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

interface AwardData {
  id: number;
  awardName: string;
  level: string;
  category: string;
  year: string;
  awardedBy: string;
  prizeDetails: string;
}

const NationalStateAwards: React.FC = () => {
  const toast = useRef<Toast>(null);
  const emptyAward: AwardData = {
    id: 0,
    awardName: "",
    level: "",
    category: "",
    year: "",
    awardedBy: "",
    prizeDetails: "",
  };

  const [awards, setAwards] = useState<AwardData[]>([
    { id: 1, awardName: "President's National Award", level: "National", category: "Best Teacher", year: "2023", awardedBy: "Ministry of Education", prizeDetails: "Certificate, Medal & 50,000/- Cash" },
    { id: 2, awardName: "State Excellence Award", level: "State", category: "Innovative Teaching", year: "2022", awardedBy: "School Education Dept, MP", prizeDetails: "Certificate & Shield" }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [award, setAward] = useState<AwardData>(emptyAward);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const levels = [
    { label: "National Level", value: "National" },
    { label: "State Level", value: "State" }
  ];

  const categories = [
    { label: "Best Teacher", value: "Best Teacher" },
    { label: "Innovative Teaching", value: "Innovative Teaching" },
    { label: "Academic Achievement", value: "Academic Achievement" },
    { label: "Special Contribution", value: "Special Contribution" }
  ];

  const openNew = () => {
    setAward(emptyAward);
    setViewMode('form');
  };

  const editAward = (item: AwardData) => {
    setAward({ ...item });
    setViewMode('form');
  };

  const cancelEdit = () => {
    setAward(emptyAward);
    setViewMode('list');
  };

  const saveAward = () => {
    if (award.awardName.trim() && award.level) {
      const _awards = [...awards];
      
      if (award.id) {
        const index = _awards.findIndex(a => a.id === award.id);
        _awards[index] = { ...award };
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Award Updated', life: 3000 });
      } else {
        const newAward = { 
            ...award, 
            id: Math.floor(Math.random() * 1000) 
        };
        _awards.push(newAward);
        toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Award Added', life: 3000 });
      }

      setAwards(_awards);
      setViewMode('list');
      setAward(emptyAward);
    } else {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Award Name and Level are required', life: 3000 });
    }
  };

  const deleteSelectedAward = () => {
    const _awards = awards.filter(val => val.id !== award.id);
    setAwards(_awards);
    setDeleteDialog(false);
    toast.current?.show({ severity: 'warn', summary: 'Deleted', detail: 'Award Record Deleted', life: 3000 });
  };

  const header = (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold">Award Achievement List</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search Awards..." className="p-inputtext-sm" />
      </span>
    </div>
  );

  const actionTemplate = (rowData: AwardData) => (
    <div className="flex gap-2">
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" onClick={() => editAward(rowData)} />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" onClick={() => { setAward(rowData); setDeleteDialog(true); }} />
    </div>
  );

  return (
    <PageLayout title="Awards Management">
      <Toast ref={toast} />
      {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">National or State Level Awards</div>
            <Button label="Add New Award" icon="pi pi-trophy" className="p-button-primary" onClick={openNew} />
          </div>

          <Card>
            <DataTable 
              value={awards} 
              header={header} 
              globalFilter={globalFilter}
              paginator rows={10} 
              className="p-datatable-sm" 
              showGridlines 
              stripedRows
            >
              <Column field="awardName" header="Award Name" sortable />
              <Column field="level" header="Level" sortable />
              <Column field="category" header="Category" />
              <Column field="year" header="Year" sortable />
              <Column field="awardedBy" header="Awarded By" />
              <Column field="prizeDetails" header="Prize/Honor Details" />
              <Column header="Action" body={actionTemplate} style={{ width: '8rem' }} />
            </DataTable>
          </Card>
        </div>
      ) : (
        <div className="animate-fade-in text-left">
          <div className="flex items-center gap-2 mb-4">
            <Button icon="pi pi-arrow-left" className="p-button-text p-button-secondary" onClick={cancelEdit} />
            <div className="text-xl font-bold text-blue-900 uppercase">
              {award.id ? 'Edit Award Achievement' : 'Add New Award Achievement'}
            </div>
          </div>

          <Card title="Award Details Form" className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-sm">Name of Award *</label>
                <InputText value={award.awardName} onChange={(e) => setAward({...award, awardName: e.target.value})} placeholder="e.g. National Teacher Award" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Award Level *</label>
                <Dropdown value={award.level} options={levels} onChange={(e) => setAward({...award, level: e.value})} placeholder="Select Level" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Award Category</label>
                <Dropdown value={award.category} options={categories} onChange={(e) => setAward({...award, category: e.value})} placeholder="Select Category" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Year of Award *</label>
                <InputText value={award.year} onChange={(e) => setAward({...award, year: e.target.value})} placeholder="YYYY" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Awarded By (Authority) *</label>
                <InputText value={award.awardedBy} onChange={(e) => setAward({...award, awardedBy: e.target.value})} placeholder="e.g. State Government" />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-sm">Prize / Honor Details</label>
                <InputTextarea value={award.prizeDetails} onChange={(e) => setAward({...award, prizeDetails: e.target.value})} rows={3} placeholder="Describe the prize, certificate, or cash award received..." />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Back to List" icon="pi pi-times" className="p-button-outlined p-button-secondary px-6" onClick={cancelEdit} />
              <Button label={award.id ? "Update Award" : "Save Award"} icon="pi pi-check-circle" className="p-button-success px-8" onClick={saveAward} />
            </div>
          </Card>
        </div>
      )}

      <Dialog visible={deleteDialog} style={{ width: '450px' }} header="Confirm Deletion" modal onHide={() => setDeleteDialog(false)}
        footer={
          <div className="mt-4">
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={() => setDeleteDialog(false)} />
            <Button label="Yes" icon="pi pi-check" className="p-button-danger" onClick={deleteSelectedAward} />
          </div>
        }>
        <div className="flex items-center gap-3">
          <i className="pi pi-exclamation-triangle text-red-500 text-3xl" />
          <span>Are you sure you want to delete this record for <b>{award.awardName}</b>?</span>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default NationalStateAwards;