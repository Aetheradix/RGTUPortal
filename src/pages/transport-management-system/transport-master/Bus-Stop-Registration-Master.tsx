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

interface BusStopMaster {
  id: number;
  stopCode: string;
  stopName: string;
  landmark: string;
  latitude: string;
  longitude: string;
  isActive: boolean;
  address: string;
}

const BusStopRegistrationMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const emptyStop: BusStopMaster = {
    id: 0,
    stopCode: "",
    stopName: "",
    landmark: "",
    latitude: "",
    longitude: "",
    isActive: true,
    address: "",
  };

  const [busStops, setBusStops] = useState<BusStopMaster[]>([
    { id: 1, stopCode: "STP001", stopName: "Main Gate", landmark: "University Entrance", latitude: "23.2599", longitude: "77.4126", isActive: true, address: "Bhopal Bypass Road" },
    { id: 2, stopCode: "STP002", stopName: "Library Square", landmark: "Near Central Library", latitude: "23.2610", longitude: "77.4140", isActive: true, address: "Academic Block Street" }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [formData, setFormData] = useState<BusStopMaster>(emptyStop);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const openNew = () => {
    setFormData(emptyStop);
    setViewMode('form');
  };

  const editStop = (item: BusStopMaster) => {
    setFormData({ ...item });
    setViewMode('form');
  };

  const cancelEdit = () => {
    setFormData(emptyStop);
    setViewMode('list');
  };

  const saveStop = () => {
    if (formData.stopCode.trim() && formData.stopName.trim()) {
      const _stops = [...busStops];
      
      if (formData.id) {
        const index = _stops.findIndex(s => s.id === formData.id);
        _stops[index] = { ...formData };
        toast.current?.show({ severity: 'success', summary: 'Updated', detail: 'Bus Stop Updated', life: 3000 });
      } else {
        const newEntry = { 
            ...formData, 
            id: Math.floor(Math.random() * 1000) 
        };
        _stops.push(newEntry);
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'New Bus Stop Registered', life: 3000 });
      }

      setBusStops(_stops);
      setViewMode('list');
      setFormData(emptyStop);
    } else {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Code and Stop Name are required', life: 3000 });
    }
  };

  const deleteStop = () => {
    const _stops = busStops.filter(val => val.id !== formData.id);
    setBusStops(_stops);
    setDeleteDialog(false);
    toast.current?.show({ severity: 'warn', summary: 'Deleted', detail: 'Bus Stop Removed', life: 3000 });
  };

  const header = (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold text-gray-700">Bus Stops List</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search Stop..." className="p-inputtext-sm" />
      </span>
    </div>
  );

  const actionTemplate = (rowData: BusStopMaster) => (
    <div className="flex gap-2 justify-center">
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" onClick={() => editStop(rowData)} />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" onClick={() => { setFormData(rowData); setDeleteDialog(true); }} />
    </div>
  );

  return (
    <PageLayout title="Transport Master">
      <Toast ref={toast} />

      {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">Bus Stop Registration Master</div>
            <Button label="Register New Stop" icon="pi pi-map-marker" className="p-button-primary" onClick={openNew} />
          </div>

          <Card>
            <DataTable 
              value={busStops} 
              header={header} 
              globalFilter={globalFilter}
              paginator rows={10} 
              className="p-datatable-sm" 
              showGridlines 
              stripedRows
            >
              <Column field="stopCode" header="Stop Code" sortable />
              <Column field="stopName" header="Bus Stop Name" sortable />
              <Column field="landmark" header="Landmark" />
              <Column field="latitude" header="Latitude" />
              <Column field="longitude" header="Longitude" />
              <Column field="isActive" header="Status" body={(r) => r.isActive ? <b className="text-green-600">Active</b> : <b className="text-red-600">Inactive</b>} className="text-center" />
              <Column header="Action" body={actionTemplate} style={{ width: '8rem' }} />
            </DataTable>
          </Card>
        </div>
      ) : (
        <div className="animate-fade-in text-left">
          <div className="flex items-center gap-2 mb-4">
            <Button icon="pi pi-arrow-left" className="p-button-text p-button-secondary" onClick={cancelEdit} />
            <div className="text-xl font-bold text-blue-900 uppercase">
              {formData.id ? 'Edit Bus Stop Details' : 'Register New Bus Stop'}
            </div>
          </div>

          <Card title="Stop Information" className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Bus Stop Code *</label>
                <InputText value={formData.stopCode} onChange={(e) => setFormData({...formData, stopCode: e.target.value})} placeholder="e.g. BS001" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Bus Stop Name *</label>
                <InputText value={formData.stopName} onChange={(e) => setFormData({...formData, stopName: e.target.value})} placeholder="e.g. Railway Station North" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Landmark</label>
                <InputText value={formData.landmark} onChange={(e) => setFormData({...formData, landmark: e.target.value})} placeholder="e.g. Opposite SBI ATM" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Active Status</label>
                <div className="flex items-center gap-2 mt-2">
                    <InputSwitch checked={formData.isActive} onChange={(e) => setFormData({...formData, isActive: e.value})} />
                    <span className="font-semibold">{formData.isActive ? 'Enabled' : 'Disabled'}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Latitude (GPS)</label>
                <InputText value={formData.latitude} onChange={(e) => setFormData({...formData, latitude: e.target.value})} placeholder="e.g. 23.2599" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Longitude (GPS)</label>
                <InputText value={formData.longitude} onChange={(e) => setFormData({...formData, longitude: e.target.value})} placeholder="e.g. 77.4126" />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-sm">Detailed Address / Description</label>
                <InputTextarea value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} rows={2} />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Discard" icon="pi pi-times" className="p-button-outlined p-button-secondary px-6" onClick={cancelEdit} />
              <Button label={formData.id ? "Update Stop" : "Register Stop"} icon="pi pi-save" className="p-button-success px-8" onClick={saveStop} />
            </div>
          </Card>
        </div>
      )}

      <Dialog visible={deleteDialog} style={{ width: '400px' }} header="Delete Stop" modal onHide={() => setDeleteDialog(false)}
        footer={
          <div>
            <Button label="Cancel" className="p-button-text" onClick={() => setDeleteDialog(false)} />
            <Button label="Delete" className="p-button-danger" onClick={deleteStop} />
          </div>
        }>
        <div className="flex items-center gap-3">
          <i className="pi pi-exclamation-triangle text-red-500 text-3xl" />
          <span>Permanently remove <b>{formData.stopName}</b>?</span>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default BusStopRegistrationMaster;