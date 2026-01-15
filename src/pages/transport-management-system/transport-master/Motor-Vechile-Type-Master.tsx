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
import { InputSwitch } from "primereact/inputswitch";

interface VehicleTypeMaster {
  id: number;
  vehicleTypeCode: string;
  vehicleTypeName: string;
  category: string; 
  description: string;
  isActive: boolean;
}

const MotorVehicleTypeMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const emptyVehicleType: VehicleTypeMaster = {
    id: 0,
    vehicleTypeCode: "",
    vehicleTypeName: "",
    category: "",
    description: "",
    isActive: true,
  };

  const [vehicleTypes, setVehicleTypes] = useState<VehicleTypeMaster[]>([
    { id: 1, vehicleTypeCode: "VT001", vehicleTypeName: "Bus", category: "Heavy", description: "Standard Transport Bus", isActive: true },
    { id: 2, vehicleTypeCode: "VT002", vehicleTypeName: "Jeep", category: "Light", description: "4 Wheeler Light Vehicle", isActive: true },
    { id: 3, vehicleTypeCode: "VT003", vehicleTypeName: "Motorcycle", category: "Two-Wheeler", description: "Standard 2 Wheeler", isActive: true }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [formData, setFormData] = useState<VehicleTypeMaster>(emptyVehicleType);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const categories = [
    { label: "Heavy Motor Vehicle (HMV)", value: "Heavy" },
    { label: "Light Motor Vehicle (LMV)", value: "Light" },
    { label: "Two-Wheeler", value: "Two-Wheeler" },
    { label: "Other", value: "Other" }
  ];

  const openNew = () => {
    setFormData(emptyVehicleType);
    setViewMode('form');
  };

  const editVehicleType = (item: VehicleTypeMaster) => {
    setFormData({ ...item });
    setViewMode('form');
  };

  const cancelEdit = () => {
    setFormData(emptyVehicleType);
    setViewMode('list');
  };

  const saveVehicleType = () => {
    if (formData.vehicleTypeCode.trim() && formData.vehicleTypeName.trim()) {
      const _vehicleTypes = [...vehicleTypes];
      
      if (formData.id) {
        const index = _vehicleTypes.findIndex(v => v.id === formData.id);
        _vehicleTypes[index] = { ...formData };
        toast.current?.show({ severity: 'success', summary: 'Updated', detail: 'Vehicle Type Updated', life: 3000 });
      } else {
        const newEntry = { 
            ...formData, 
            id: Math.floor(Math.random() * 1000) 
        };
        _vehicleTypes.push(newEntry);
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'New Vehicle Type Added', life: 3000 });
      }

      setVehicleTypes(_vehicleTypes);
      setViewMode('list');
      setFormData(emptyVehicleType);
    } else {
        toast.current?.show({ severity: 'error', summary: 'Required', detail: 'Code and Name are mandatory', life: 3000 });
    }
  };

  const deleteVehicleType = () => {
    const _vehicleTypes = vehicleTypes.filter(val => val.id !== formData.id);
    setVehicleTypes(_vehicleTypes);
    setDeleteDialog(false);
    toast.current?.show({ severity: 'warn', summary: 'Deleted', detail: 'Vehicle Type Deleted', life: 3000 });
  };

  const statusBodyTemplate = (rowData: VehicleTypeMaster) => {
    return (
      <span className={`px-2 py-1 rounded text-xs font-bold ${rowData.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {rowData.isActive ? 'ACTIVE' : 'INACTIVE'}
      </span>
    );
  };

  const header = (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold text-gray-700">Vehicle Type Master List</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search Vehicle Type..." className="p-inputtext-sm" />
      </span>
    </div>
  );

  const actionTemplate = (rowData: VehicleTypeMaster) => (
    <div className="flex gap-2">
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" onClick={() => editVehicleType(rowData)} />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" onClick={() => { setFormData(rowData); setDeleteDialog(true); }} />
    </div>
  );

  return (
    <PageLayout title="Transport Master">
      <Toast ref={toast} />
      {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">Motor Vehicle Type Master</div>
            <Button label="Add Vehicle Type" icon="pi pi-car" className="p-button-primary" onClick={openNew} />
          </div>

          <Card>
            <DataTable 
              value={vehicleTypes} 
              header={header} 
              globalFilter={globalFilter}
              paginator rows={10} 
              className="p-datatable-sm" 
              showGridlines 
              stripedRows
            >
              <Column field="vehicleTypeCode" header="Code" sortable />
              <Column field="vehicleTypeName" header="Vehicle Type Name" sortable />
              <Column field="category" header="Category" />
              <Column field="description" header="Description" />
              <Column field="isActive" header="Status" body={statusBodyTemplate} className="text-center" />
              <Column header="Action" body={actionTemplate} style={{ width: '8rem' }} />
            </DataTable>
          </Card>
        </div>
      ) : (
        <div className="animate-fade-in text-left">
          <div className="flex items-center gap-2 mb-4">
            <Button icon="pi pi-arrow-left" className="p-button-text p-button-secondary" onClick={cancelEdit} />
            <div className="text-xl font-bold text-blue-900 uppercase">
              {formData.id ? 'Edit Vehicle Type' : 'Create New Vehicle Type'}
            </div>
          </div>

          <Card title="Vehicle Type Details" className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Vehicle Type Code *</label>
                <InputText value={formData.vehicleTypeCode} onChange={(e) => setFormData({...formData, vehicleTypeCode: e.target.value})} placeholder="e.g. VT001" disabled={!!formData.id} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Vehicle Type Name *</label>
                <InputText value={formData.vehicleTypeName} onChange={(e) => setFormData({...formData, vehicleTypeName: e.target.value})} placeholder="e.g. Mini Bus" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Category *</label>
                <Dropdown value={formData.category} options={categories} onChange={(e) => setFormData({...formData, category: e.value})} placeholder="Select Category" />
              </div>

              <div className="flex flex-col gap-2 items-start">
                <label className="font-bold text-sm mb-1">Active Status</label>
                <div className="flex items-center gap-2 mt-2">
                    <InputSwitch checked={formData.isActive} onChange={(e) => setFormData({...formData, isActive: e.value})} />
                    <span className="text-sm font-semibold">{formData.isActive ? 'Active' : 'Inactive'}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-sm">Description</label>
                <InputText value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} placeholder="Additional info about vehicle type..." />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary px-6" onClick={cancelEdit} />
              <Button label={formData.id ? "Update Master" : "Save Master"} icon="pi pi-save" className="p-button-success px-8" onClick={saveVehicleType} />
            </div>
          </Card>
        </div>
      )}

      <Dialog visible={deleteDialog} style={{ width: '400px' }} header="Confirm Deletion" modal onHide={() => setDeleteDialog(false)}
        footer={
          <div className="mt-2">
            <Button label="No" icon="pi pi-times" className="p-button-text" onClick={() => setDeleteDialog(false)} />
            <Button label="Yes" icon="pi pi-check" className="p-button-danger" onClick={deleteVehicleType} />
          </div>
        }>
        <div className="flex items-center gap-3">
          <i className="pi pi-exclamation-triangle text-red-500 text-3xl" />
          <span>Confirm delete <b>{formData.vehicleTypeName}</b>?</span>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default MotorVehicleTypeMaster;