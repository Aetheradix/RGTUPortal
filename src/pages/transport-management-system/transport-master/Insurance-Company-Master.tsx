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

interface InsuranceCompany {
  id: number;
  companyCode: string;
  companyName: string;
  contactPerson: string;
  mobileNo: string;
  emailId: string;
  address: string;
  isActive: boolean;
}

const InsuranceCompanyMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const emptyCompany: InsuranceCompany = {
    id: 0,
    companyCode: "",
    companyName: "",
    contactPerson: "",
    mobileNo: "",
    emailId: "",
    address: "",
    isActive: true,
  };

  const [companies, setCompanies] = useState<InsuranceCompany[]>([
    { 
      id: 1, 
      companyCode: "INS001", 
      companyName: "New India Assurance", 
      contactPerson: "Rajesh Kumar", 
      mobileNo: "9876543210", 
      emailId: "support@newindia.com", 
      address: "Mumbai, Maharashtra",
      isActive: true 
    },
    { 
      id: 2, 
      companyCode: "INS002", 
      companyName: "HDFC ERGO", 
      contactPerson: "Amit Shah", 
      mobileNo: "9988776655", 
      emailId: "info@hdfcergo.com", 
      address: "Pune, Maharashtra",
      isActive: true 
    }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [formData, setFormData] = useState<InsuranceCompany>(emptyCompany);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const openNew = () => {
    setFormData(emptyCompany);
    setViewMode('form');
  };

  const editCompany = (item: InsuranceCompany) => {
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
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'New Insurance Company Added', life: 3000 });
      }

      setCompanies(_companies);
      setViewMode('list');
      setFormData(emptyCompany);
    } else {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Code and Name are required', life: 3000 });
    }
  };

  const deleteCompany = () => {
    const _companies = companies.filter(val => val.id !== formData.id);
    setCompanies(_companies);
    setDeleteDialog(false);
    toast.current?.show({ severity: 'warn', summary: 'Deleted', detail: 'Company Removed', life: 3000 });
  };

  const header = (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold text-gray-700">Insurance Providers List</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search Company..." className="p-inputtext-sm" />
      </span>
    </div>
  );

  const actionTemplate = (rowData: InsuranceCompany) => (
    <div className="flex gap-2 text-center justify-center">
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" onClick={() => editCompany(rowData)} />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" onClick={() => { setFormData(rowData); setDeleteDialog(true); }} />
    </div>
  );

  return (
    <PageLayout title="Transport Master">
      <Toast ref={toast} />
    {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">Insurance Company Master</div>
            <Button label="Add New Company" icon="pi pi-plus" className="p-button-primary" onClick={openNew} />
          </div>

          <Card>
            <DataTable 
              value={companies} 
              header={header} 
              globalFilter={globalFilter}
              paginator rows={10} 
              className="p-datatable-sm" 
              showGridlines 
              stripedRows
            >
              <Column field="companyCode" header="Code" sortable />
              <Column field="companyName" header="Company Name" sortable />
              <Column field="contactPerson" header="Contact Person" />
              <Column field="mobileNo" header="Mobile No." />
              <Column field="emailId" header="Email ID" />
              <Column field="isActive" header="Status" body={(r) => r.isActive ? <span className="text-green-600 font-bold">Active</span> : <span className="text-red-600 font-bold">Inactive</span>} className="text-center" />
              <Column header="Action" body={actionTemplate} style={{ width: '8rem' }} />
            </DataTable>
          </Card>
        </div>
      ) : (
        <div className="animate-fade-in text-left">
          <div className="flex items-center gap-2 mb-4">
            <Button icon="pi pi-arrow-left" className="p-button-text p-button-secondary" onClick={cancelEdit} />
            <div className="text-xl font-bold text-blue-900 uppercase">
              {formData.id ? 'Edit Insurance Company' : 'Add Insurance Company'}
            </div>
          </div>

          <Card title="Insurance Company Registration" className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Company Code *</label>
                <InputText value={formData.companyCode} onChange={(e) => setFormData({...formData, companyCode: e.target.value})} placeholder="e.g. INS001" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Company Name *</label>
                <InputText value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} placeholder="e.g. LIC / Tata AIG" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Contact Person Name</label>
                <InputText value={formData.contactPerson} onChange={(e) => setFormData({...formData, contactPerson: e.target.value})} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Mobile Number</label>
                <InputText value={formData.mobileNo} onChange={(e) => setFormData({...formData, mobileNo: e.target.value})} maxLength={10} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Email ID</label>
                <InputText value={formData.emailId} onChange={(e) => setFormData({...formData, emailId: e.target.value})} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Active Status</label>
                <div className="flex items-center gap-2 mt-2">
                    <InputSwitch checked={formData.isActive} onChange={(e) => setFormData({...formData, isActive: e.value})} />
                    <span className="font-semibold">{formData.isActive ? 'Active' : 'Inactive'}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-sm">Company Address</label>
                <InputTextarea value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} rows={2} />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Back" icon="pi pi-times" className="p-button-outlined p-button-secondary px-6" onClick={cancelEdit} />
              <Button label={formData.id ? "Update Company" : "Save Company"} icon="pi pi-save" className="p-button-success px-8" onClick={saveCompany} />
            </div>
          </Card>
        </div>
      )}

      <Dialog visible={deleteDialog} style={{ width: '400px' }} header="Confirm Delete" modal onHide={() => setDeleteDialog(false)}
        footer={
          <div>
            <Button label="No" className="p-button-text" onClick={() => setDeleteDialog(false)} />
            <Button label="Yes" className="p-button-danger" onClick={deleteCompany} />
          </div>
        }>
        <div className="flex items-center gap-3">
          <i className="pi pi-exclamation-triangle text-red-500 text-3xl" />
          <span>Delete <b>{formData.companyName}</b> from master?</span>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default InsuranceCompanyMaster;