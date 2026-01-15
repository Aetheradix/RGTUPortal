import React, { useState, useRef, type ChangeEvent } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { InputSwitch } from "primereact/inputswitch";
import { InputTextarea } from "primereact/inputtextarea";

interface VehicleCompany {
  id: number;
  companyCode: string;
  companyName: string;
  shortName: string;
  originCountry: string;
  isActive: boolean;
  remarks: string;
}

const VehicleCompanyMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const emptyCompany: VehicleCompany = {
    id: 0,
    companyCode: "",
    companyName: "",
    shortName: "",
    originCountry: "India",
    isActive: true,
    remarks: "",
  };

  const [companies, setCompanies] = useState<VehicleCompany[]>([
    { id: 1, companyCode: "VC001", companyName: "Tata Motors Ltd", shortName: "TATA", originCountry: "India", isActive: true, remarks: "Primary Bus Provider" },
    { id: 2, companyCode: "VC002", companyName: "Ashok Leyland", shortName: "AL", originCountry: "India", isActive: true, remarks: "" },
    { id: 3, companyCode: "VC003", companyName: "Mahindra & Mahindra", shortName: "M&M", originCountry: "India", isActive: true, remarks: "Jeep and Light Vehicles" }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [formData, setFormData] = useState<VehicleCompany>(emptyCompany);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const openNew = () => {
    setFormData(emptyCompany);
    setViewMode('form');
  };

  const editCompany = (item: VehicleCompany) => {
    setFormData({ ...item });
    setViewMode('form');
  };

  const cancelEdit = () => {
    setFormData(emptyCompany);
    setViewMode('list');
  };

  const saveCompany = () => {
    if (formData.companyCode.trim() && formData.companyName.trim()) {
      const _companies = [...companies];
      
      if (formData.id) {
        const index = _companies.findIndex(c => c.id === formData.id);
        _companies[index] = { ...formData };
        toast.current?.show({ severity: 'success', summary: 'Updated', detail: 'Company Details Updated', life: 3000 });
      } else {
        const newEntry = { 
            ...formData, 
            id: Math.floor(Math.random() * 1000) 
        };
        _companies.push(newEntry);
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'New Vehicle Company Added', life: 3000 });
      }

      setCompanies(_companies);
      setViewMode('list');
      setFormData(emptyCompany);
    } else {
        toast.current?.show({ severity: 'error', summary: 'Required', detail: 'Code and Name are mandatory', life: 3000 });
    }
  };

  const deleteCompany = () => {
    setCompanies(companies.filter(val => val.id !== formData.id));
    setDeleteDialog(false);
    toast.current?.show({ severity: 'warn', summary: 'Deleted', detail: 'Company Removed', life: 3000 });
  };

  const header = (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold text-gray-700">Manufacturers List</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search Company..." className="p-inputtext-sm" />
      </span>
    </div>
  );

  return (
    <PageLayout title="Transport Master">
      <Toast ref={toast} />

      {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">Vehicle Company Master</div>
            <Button label="Add Company" icon="pi pi-briefcase" className="p-button-primary" onClick={openNew} />
          </div>

          <Card>
            <DataTable 
              value={companies} header={header} globalFilter={globalFilter}
              paginator rows={10} className="p-datatable-sm" showGridlines stripedRows
            >
              <Column field="companyCode" header="Code" sortable />
              <Column field="companyName" header="Full Name" sortable />
              <Column field="shortName" header="Short Name" />
              <Column field="originCountry" header="Origin" />
              <Column field="isActive" header="Status" body={(r) => r.isActive ? <span className="text-green-600 font-bold">Active</span> : <span className="text-red-600 font-bold">Inactive</span>} className="text-center" />
              <Column header="Action" body={(r) => (
                <div className="flex gap-2 justify-center">
                  <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" onClick={() => editCompany(r)} />
                  <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" onClick={() => { setFormData(r); setDeleteDialog(true); }} />
                </div>
              )} style={{ width: '8rem' }} />
            </DataTable>
          </Card>
        </div>
      ) : (
        <div className="animate-fade-in text-left">
          <div className="flex items-center gap-2 mb-4">
            <Button icon="pi pi-arrow-left" className="p-button-text p-button-secondary" onClick={cancelEdit} />
            <div className="text-xl font-bold text-blue-900 uppercase">
              {formData.id ? 'Modify Company Details' : 'Register Vehicle Manufacturer'}
            </div>
          </div>

          <Card title="Manufacturer Details Form" className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Company Code *</label>
                <InputText value={formData.companyCode} onChange={(e) => setFormData({...formData, companyCode: e.target.value})} placeholder="e.g. VC001" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Company Name *</label>
                <InputText value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} placeholder="e.g. Tata Motors Ltd" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Short Name / Brand</label>
                <InputText value={formData.shortName} onChange={(e) => setFormData({...formData, shortName: e.target.value})} placeholder="e.g. TATA" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Origin Country</label>
                <InputText value={formData.originCountry} onChange={(e) => setFormData({...formData, originCountry: e.target.value})} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Status</label>
                <div className="flex items-center gap-2 mt-2">
                    <InputSwitch checked={formData.isActive} onChange={(e) => setFormData({...formData, isActive: e.value})} />
                    <span className="font-semibold">{formData.isActive ? 'Active' : 'Inactive'}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-sm">Remarks</label>
                <InputTextarea value={formData.remarks} onChange={(e) => setFormData({...formData, remarks: e.target.value})} rows={2} />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Discard" icon="pi pi-times" className="p-button-outlined p-button-secondary px-6" onClick={cancelEdit} />
              <Button label={formData.id ? "Update Master" : "Save Master"} icon="pi pi-save" className="p-button-success px-8" onClick={saveCompany} />
            </div>
          </Card>
        </div>
      )}

      <Dialog visible={deleteDialog} style={{ width: '400px' }} header="Delete Manufacturer" modal onHide={() => setDeleteDialog(false)}
        footer={
          <div className="mt-2">
            <Button label="Cancel" className="p-button-text" onClick={() => setDeleteDialog(false)} />
            <Button label="Delete" className="p-button-danger" onClick={deleteCompany} />
          </div>
        }>
        <div className="flex items-center gap-3">
          <i className="pi pi-exclamation-triangle text-red-500 text-3xl" />
          <span>Permanently remove <b>{formData.companyName}</b>?</span>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default VehicleCompanyMaster;