import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Tag } from "primereact/tag";
import { InputText } from "primereact/inputtext";
import { Divider } from "primereact/divider";
import { InputTextarea } from "primereact/inputtextarea";
import { Dropdown } from "primereact/dropdown";

interface TransportIncharge {
  id: number;
  empId: string;
  name: string;
  mobile: string;
  email: string;
  shift: string;
  emergencyContact: string;
  address: string;
  status: "Active" | "Inactive";
}

const TransportInchargeRegistration: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');

  const [incharges, setIncharges] = useState<TransportIncharge[]>([
    { 
      id: 1, 
      empId: "EMP-TR-01", 
      name: "Vikram Singh", 
      mobile: "9826012345", 
      email: "vikram@college.edu", 
      shift: "Morning", 
      emergencyContact: "9826011111",
      address: "M.P. Nagar Zone-2, Bhopal",
      status: "Active" 
    },
    { 
      id: 2, 
      empId: "EMP-TR-05", 
      name: "Suresh Patidar", 
      mobile: "9425012345", 
      email: "suresh@college.edu", 
      shift: "Full-Day", 
      emergencyContact: "9425022222",
      address: "Indrapuri C-Sector, Bhopal",
      status: "Active" 
    },
  ]);

  const [formData, setFormData] = useState<Partial<TransportIncharge>>({
    status: "Active",
    shift: "Full-Day"
  });

  const handleSave = () => {
    if (!formData.empId || !formData.name || !formData.mobile) {
      toast.current?.show({ severity: 'error', summary: 'Required', detail: 'Employee ID, Name and Mobile are mandatory' });
      return;
    }

    if (formData.id) {
      setIncharges(prev => prev.map(i => i.id === formData.id ? { ...i, ...formData as TransportIncharge } : i));
    } else {
      setIncharges([...incharges, { ...formData as TransportIncharge, id: Date.now() }]);
    }

    toast.current?.show({ severity: 'success', summary: 'Saved', detail: 'Transport Incharge Registered Successfully' });
    setViewMode('list');
  };

  const handleClear = () => {
    setFormData({ status: "Active", shift: "Full-Day" });
  };

  if (viewMode === 'list') {
    return (
      <PageLayout title="Transport Administration">
        <Toast ref={toast} />
        <Card title="Transport Incharge Master" className="shadow-sm border-t-4 border-blue-900 text-left">
          <div className="flex justify-end mb-4">
            <Button label="Add New Incharge" icon="pi pi-user-plus" onClick={() => { handleClear(); setViewMode('form'); }} />
          </div>
          <DataTable value={incharges} paginator rows={10} className="p-datatable-sm" showGridlines stripedRows>
            <Column field="empId" header="Employee ID" sortable />
            <Column field="name" header="Incharge Name" sortable />
            <Column field="mobile" header="Mobile Number" />
            <Column field="shift" header="Duty Shift" />
            <Column header="Status" body={(r) => <Tag value={r.status} severity={r.status === 'Active' ? 'success' : 'danger'} />} />
            <Column header="Action" body={(r) => <Button icon="pi pi-pencil" className="p-button-text" onClick={() => { setFormData(r); setViewMode('form'); }} />} />
          </DataTable>
        </Card>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Incharge Registration">
      <Toast ref={toast} />
      <div className="max-w-5xl mx-auto text-left py-2">
        <div className="flex items-center gap-3 mb-4 bg-white p-3 rounded shadow-sm">
          <Button icon="pi pi-arrow-left" className="p-button-rounded p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
          <h2 className="text-xl font-bold m-0 text-gray-800">Registration Form</h2>
        </div>

        <Card className="shadow-lg border-t-4 border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="col-span-1 md:col-span-3">
               <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Personal & Official Details</h4>
               <Divider className="my-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-gray-700">Employee ID *</label>
              <InputText value={formData.empId || ''} onChange={(e) => setFormData({ ...formData, empId: e.target.value.toUpperCase() })} placeholder="e.g. EMP-101" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-gray-700">Full Name *</label>
              <InputText value={formData.name || ''} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Enter Name" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-gray-700">Mobile Number *</label>
              <InputText value={formData.mobile || ''} onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} maxLength={10} placeholder="Primary Contact" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-gray-700">Email Address</label>
              <InputText value={formData.email || ''} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Official Email" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-gray-700">Duty Shift</label>
              <InputText value={formData.shift || ''} onChange={(e) => setFormData({ ...formData, shift: e.target.value })} placeholder="e.g. Morning / Night / Full-Day" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-gray-700">Emergency Contact</label>
              <InputText value={formData.emergencyContact || ''} onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })} placeholder="Backup Number" />
            </div>

            <div className="col-span-1 md:col-span-3 mt-2">
               <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Additional Information</h4>
               <Divider className="my-2" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-bold text-sm text-gray-700">Residential Address</label>
              <InputTextarea value={formData.address || ''} onChange={(e) => setFormData({ ...formData, address: e.target.value })} rows={2} autoResize />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-gray-700">Status</label>
              <Dropdown 
                value={formData.status} 
                options={['Active', 'Inactive']} 
                onChange={(e) => setFormData({ ...formData, status: e.value })} 
                className="w-full" 
              />
            </div>

          </div>

          <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
            <Button label="Clear Form" icon="pi pi-refresh" className="p-button-outlined p-button-secondary" onClick={handleClear} />
            <div className="flex gap-3">
              <Button label="Cancel" icon="pi pi-text p-button-secondary" onClick={() => setViewMode('list')} />
              <Button label="Save Incharge" icon="pi pi-save" className="p-button-success px-8 shadow-sm" onClick={handleSave} />
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default TransportInchargeRegistration;