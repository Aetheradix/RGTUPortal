/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { InputSwitch } from "primereact/inputswitch";
import { InputTextarea } from "primereact/inputtextarea";

interface Transporter {
  id: number;
  code: string;
  name: string;
  contactPerson: string;
  mobile: string;
  gstNo: string;
  address: string;
  isActive: boolean;
}

const TransporterRegistrationUni: React.FC = () => {
  const toast = useRef<Toast>(null);
  
  const emptyTransporter: Transporter = {
    id: 0, code: "", name: "", contactPerson: "", mobile: "", gstNo: "", address: "", isActive: true
  };

  const [transporters, setTransporters] = useState<Transporter[]>([
    { id: 1, code: "TR001", name: "Global Travels", contactPerson: "Rajesh Kumar", mobile: "9826012345", gstNo: "23AAAAA0000A1Z5", address: "M.P. Nagar, Bhopal", isActive: true },
    { id: 2, code: "TR002", name: "City Bus Services", contactPerson: "Suresh Singh", mobile: "9425054321", gstNo: "23BBBBB1111B2Z6", address: "Indrapuri, Bhopal", isActive: true }
  ]);

  const [formData, setFormData] = useState<Transporter>(emptyTransporter);
  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');

  const saveTransporter = () => {
    if (!formData.name || !formData.mobile) {
      toast.current?.show({ severity: 'error', summary: 'Validation', detail: 'Name and Mobile are required' });
      return;
    }

    if (formData.id) {
      setTransporters(transporters.map(t => t.id === formData.id ? formData : t));
      toast.current?.show({ severity: 'success', summary: 'Updated', detail: 'Transporter updated successfully' });
    } else {
      setTransporters([...transporters, { ...formData, id: Date.now(), code: 'TR' + (transporters.length + 1).toString().padStart(3, '0') }]);
      toast.current?.show({ severity: 'success', summary: 'Registered', detail: 'New Transporter added' });
    }
    setViewMode('list');
  };

  const editTransporter = (t: Transporter) => {
    setFormData(t);
    setViewMode('form');
  };

  return (
    <PageLayout title="Transport Master">
      <Toast ref={toast} />

      <div className="flex justify-between items-center mb-4">
        <div>
           <h2 className="text-xl font-bold text-blue-900 m-0 uppercase tracking-tight">Transporter Registration</h2>
           <small className="text-gray-500">Manage vendors and service providers</small>
        </div>
        {viewMode === 'list' && (
          <Button label="Add Transporter" icon="pi pi-plus" className="p-button-primary" onClick={() => {setFormData(emptyTransporter); setViewMode('form');}} />
        )}
      </div>

      {viewMode === 'list' ? (
        <Card className="shadow-sm border-t-4 border-blue-800">
          <DataTable value={transporters} paginator rows={10} className="p-datatable-sm" stripedRows showGridlines>
            <Column field="code" header="Code" style={{ width: '10%' }} />
            <Column field="name" header="Agency Name" sortable />
            <Column field="contactPerson" header="Contact Person" />
            <Column field="mobile" header="Mobile No." />
            <Column field="gstNo" header="GST Number" />
            <Column field="isActive" header="Status" body={(r) => (
              <Tag value={r.isActive ? "Active" : "Inactive"} severity={r.isActive ? "success" : "danger"} />
            )} />
            <Column header="Action" body={(r) => (
              <Button icon="pi pi-pencil" className="p-button-text p-button-primary" onClick={() => editTransporter(r)} />
            )} />
          </DataTable>
        </Card>
      ) : (
        <Card className="shadow-sm border-t-4 border-blue-800 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Agency/Transporter Name *</label>
              <InputText value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Full Agency Name" />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Contact Person Name</label>
              <InputText value={formData.contactPerson} onChange={(e) => setFormData({...formData, contactPerson: e.target.value})} placeholder="Manager/Owner Name" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Mobile Number *</label>
              <InputText value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} maxLength={10} placeholder="10 Digit Mobile" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">GST Number</label>
              <InputText value={formData.gstNo} onChange={(e) => setFormData({...formData, gstNo: e.target.value})} placeholder="GSTIN" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Status</label>
              <div className="flex items-center gap-2 mt-2">
                 <InputSwitch checked={formData.isActive} onChange={(e) => setFormData({...formData, isActive: e.value})} />
                 <span className="text-sm font-semibold">{formData.isActive ? 'Active Provider' : 'Blacklisted/Inactive'}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:col-span-2 lg:col-span-3">
              <label className="font-bold text-sm">Office Address</label>
              <InputTextarea value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} rows={2} />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
            <Button label="Discard" icon="pi pi-times" className="p-button-outlined p-button-secondary" onClick={() => setViewMode('list')} />
            <Button label="Save Transporter" icon="pi pi-save" className="p-button-success px-6" onClick={saveTransporter} />
          </div>
        </Card>
      )}
    </PageLayout>
  );
};

const Tag = ({ value, severity }: { value: string, severity: string }) => {
  const styles: any = {
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700"
  };
  return <span className={`px-2 py-1 rounded text-xs font-bold ${styles[severity]}`}>{value}</span>;
};

export default TransporterRegistrationUni;