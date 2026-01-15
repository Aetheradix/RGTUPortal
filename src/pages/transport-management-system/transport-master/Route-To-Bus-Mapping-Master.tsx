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
import { Calendar } from "primereact/calendar";
import { InputSwitch } from "primereact/inputswitch";

interface RouteBusMapping {
  id: number;
  routeId: string;
  routeName: string;
  vehicleId: string;
  vehicleNo: string;
  driverName: string;
  shift: string;
  effectiveFrom: Date | null;
  isActive: boolean;
}

const RouteBusMappingMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const emptyMapping: RouteBusMapping = {
    id: 0,
    routeId: "",
    routeName: "",
    vehicleId: "",
    vehicleNo: "",
    driverName: "",
    shift: "",
    effectiveFrom: null,
    isActive: true,
  };

  const [mappings, setMappings] = useState<RouteBusMapping[]>([
    { 
      id: 1, 
      routeId: "R1", 
      routeName: "Ayodhya Nagar to Campus", 
      vehicleId: "V1", 
      vehicleNo: "MP-04-HE-1234", 
      driverName: "Suresh Kumar",
      shift: "Both", 
      effectiveFrom: new Date('2025-01-01'), 
      isActive: true 
    }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [formData, setFormData] = useState<RouteBusMapping>(emptyMapping);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const routeOptions = [
    { label: "Ayodhya Nagar to Campus", value: "R1" },
    { label: "Indrapuri to Campus", value: "R2" },
    { label: "Bairagarh to Campus", value: "R3" }
  ];

  const vehicleOptions = [
    { label: "Bus - MP-04-HE-1234", value: "V1" },
    { label: "Bus - MP-04-HE-5678", value: "V2" },
    { label: "Mini Bus - MP-04-ZE-9900", value: "V3" }
  ];

  const shiftOptions = [
    { label: "Morning Shift", value: "Morning" },
    { label: "Evening Shift", value: "Evening" },
    { label: "Both Shifts", value: "Both" }
  ];

  const openNew = () => {
    setFormData(emptyMapping);
    setViewMode('form');
  };

  const editMapping = (item: RouteBusMapping) => {
    setFormData({ ...item });
    setViewMode('form');
  };

  const cancelEdit = () => {
    setFormData(emptyMapping);
    setViewMode('list');
  };

  const saveMapping = () => {
    if (formData.routeId && formData.vehicleId) {
      const _mappings = [...mappings];
      
      const selectedRoute = routeOptions.find(r => r.value === formData.routeId);
      const selectedVehicle = vehicleOptions.find(v => v.value === formData.vehicleId);
      
      const dataToSave = {
        ...formData,
        routeName: selectedRoute?.label || "",
        vehicleNo: selectedVehicle?.label.split(' - ')[1] || ""
      };

      if (formData.id) {
        const index = _mappings.findIndex(m => m.id === formData.id);
        _mappings[index] = dataToSave;
        toast.current?.show({ severity: 'success', summary: 'Updated', detail: 'Mapping Updated', life: 3000 });
      } else {
        const newEntry = { ...dataToSave, id: Math.floor(Math.random() * 1000) };
        _mappings.push(newEntry);
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Bus Assigned to Route', life: 3000 });
      }

      setMappings(_mappings);
      setViewMode('list');
    } else {
      toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Route and Vehicle selection required', life: 3000 });
    }
  };

  const deleteMapping = () => {
    setMappings(mappings.filter(val => val.id !== formData.id));
    setDeleteDialog(false);
    toast.current?.show({ severity: 'warn', summary: 'Deleted', detail: 'Mapping Removed', life: 3000 });
  };

  const header = (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold text-gray-700">Current Assignments</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search..." className="p-inputtext-sm" />
      </span>
    </div>
  );

  const actionTemplate = (rowData: RouteBusMapping) => (
    <div className="flex gap-2 justify-center">
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" onClick={() => editMapping(rowData)} />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" onClick={() => { setFormData(rowData); setDeleteDialog(true); }} />
    </div>
  );

  return (
    <PageLayout title="Transport Assignment">
      <Toast ref={toast} />

      {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">Route to Bus Mapping Master</div>
            <Button label="Assign Bus to Route" icon="pi pi-link" className="p-button-primary" onClick={openNew} />
          </div>

          <Card>
            <DataTable 
              value={mappings} header={header} globalFilter={globalFilter}
              paginator rows={10} className="p-datatable-sm" showGridlines stripedRows
            >
              <Column field="routeName" header="Route Name" sortable />
              <Column field="vehicleNo" header="Vehicle Number" sortable />
              <Column field="driverName" header="Driver Name" />
              <Column field="shift" header="Shift" />
              <Column field="effectiveFrom" header="From Date" body={(r) => r.effectiveFrom?.toLocaleDateString()} />
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
              {formData.id ? 'Edit Assignment' : 'New Assignment'}
            </div>
          </div>

          <Card title="Mapping Configuration" className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Select Route *</label>
                <Dropdown value={formData.routeId} options={routeOptions} onChange={(e) => setFormData({...formData, routeId: e.value})} placeholder="Choose Route" filter />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Select Vehicle/Bus *</label>
                <Dropdown value={formData.vehicleId} options={vehicleOptions} onChange={(e) => setFormData({...formData, vehicleId: e.value})} placeholder="Choose Vehicle" filter />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Assigned Driver Name</label>
                <InputText value={formData.driverName} onChange={(e) => setFormData({...formData, driverName: e.target.value})} placeholder="Enter Driver Name" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Shift Type *</label>
                <Dropdown value={formData.shift} options={shiftOptions} onChange={(e) => setFormData({...formData, shift: e.value})} placeholder="Select Shift" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Effective From Date</label>
                <Calendar value={formData.effectiveFrom} onChange={(e) => setFormData({...formData, effectiveFrom: e.value as Date})} showIcon placeholder="dd/mm/yyyy" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Mapping Status</label>
                <div className="flex items-center gap-2 mt-2">
                    <InputSwitch checked={formData.isActive} onChange={(e) => setFormData({...formData, isActive: e.value})} />
                    <span className="font-semibold">{formData.isActive ? 'Active Assignment' : 'Inactive'}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary px-6" onClick={cancelEdit} />
              <Button label={formData.id ? "Update Mapping" : "Save Mapping"} icon="pi pi-check" className="p-button-success px-8" onClick={saveMapping} />
            </div>
          </Card>
        </div>
      )}

      <Dialog visible={deleteDialog} style={{ width: '400px' }} header="Remove Assignment" modal onHide={() => setDeleteDialog(false)}
        footer={
          <div>
            <Button label="No" className="p-button-text" onClick={() => setDeleteDialog(false)} />
            <Button label="Remove" className="p-button-danger" onClick={deleteMapping} />
          </div>
        }>
        <div className="flex items-center gap-3">
          <i className="pi pi-link text-red-500 text-3xl" />
          <span>Unlink this Bus from Route <b>{formData.routeName}</b>?</span>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default RouteBusMappingMaster;