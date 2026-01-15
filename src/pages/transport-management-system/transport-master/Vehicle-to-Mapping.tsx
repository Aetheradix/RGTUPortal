import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Calendar } from "primereact/calendar";
import { InputSwitch } from "primereact/inputswitch";
import { InputText } from "primereact/inputtext";

interface VehicleMapping {
  id: number;
  vehicleId: string;
  vehicleNo: string;
  routeId: string;
  routeName: string;
  driverId: string;
  driverName: string;
  assignmentDate: Date | null;
  shift: string;
  isActive: boolean;
}

const VehicleToMapping: React.FC = () => {
  const toast = useRef<Toast>(null);
  const emptyMapping: VehicleMapping = {
    id: 0, vehicleId: "", vehicleNo: "", routeId: "", routeName: "",
    driverId: "", driverName: "", assignmentDate: new Date(),
    shift: "Both", isActive: true,
  };

  const [mappings, setMappings] = useState<VehicleMapping[]>([
    { 
      id: 1, vehicleId: "V1", vehicleNo: "MP-04-HE-1234", 
      routeId: "R1", routeName: "Route-01 (Ayodhya Nagar)", 
      driverId: "D1", driverName: "Ram Singh",
      assignmentDate: new Date(), shift: "Both", isActive: true 
    }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [formData, setFormData] = useState<VehicleMapping>(emptyMapping);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const vehicleOptions = [
    { label: "MP-04-HE-1234 (Bus)", value: "V1" },
    { label: "MP-04-HE-5678 (Mini Bus)", value: "V2" }
  ];

  const routeOptions = [
    { label: "Route-01 (Ayodhya Nagar)", value: "R1" },
    { label: "Route-02 (Indrapuri)", value: "R2" }
  ];

  const driverOptions = [
    { label: "Ram Singh (Lic: 4522)", value: "D1" },
    { label: "Mohan Lal (Lic: 9982)", value: "D2" }
  ];

  const shiftOptions = [
    { label: "Morning", value: "Morning" },
    { label: "Evening", value: "Evening" },
    { label: "Both", value: "Both" }
  ];

  const openNew = () => {
    setFormData(emptyMapping);
    setViewMode('form');
  };

  const editMapping = (item: VehicleMapping) => {
    setFormData({ ...item });
    setViewMode('form');
  };

  const saveMapping = () => {
    if (formData.vehicleId && formData.routeId && formData.driverId) {
      const _mappings = [...mappings];
      const selVeh = vehicleOptions.find(v => v.value === formData.vehicleId);
      const selRoute = routeOptions.find(r => r.value === formData.routeId);
      const selDriver = driverOptions.find(d => d.value === formData.driverId);

      const dataToSave = {
        ...formData,
        vehicleNo: selVeh?.label || "",
        routeName: selRoute?.label || "",
        driverName: selDriver?.label || ""
      };

      if (formData.id) {
        const index = _mappings.findIndex(m => m.id === formData.id);
        _mappings[index] = dataToSave;
      } else {
        _mappings.push({ ...dataToSave, id: Math.floor(Math.random() * 1000) });
      }

      setMappings(_mappings);
      setViewMode('list');
      toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Mapping Saved', life: 3000 });
    } else {
      toast.current?.show({ severity: 'error', summary: 'Required', detail: 'Please select all mandatory fields', life: 3000 });
    }
  };

  const header = (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold text-gray-700">Assignments</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText 
          type="search" 
          value={globalFilter} 
          onChange={(e) => setGlobalFilter(e.target.value)} 
          placeholder="Global Search..." 
          className="p-inputtext-sm" 
        />
      </span>
    </div>
  );

  return (
    <PageLayout title="Transport Operations">
      <Toast ref={toast} />
      {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">Vehicle Assignment Mapping</div>
            <Button label="New Assignment" icon="pi pi-plus" onClick={openNew} />
          </div>

          <Card>
            <DataTable 
              value={mappings} 
              paginator rows={10} 
              className="p-datatable-sm" 
              showGridlines 
              header={header}
              globalFilter={globalFilter}
            >
              <Column field="vehicleNo" header="Vehicle" sortable />
              <Column field="routeName" header="Route" sortable />
              <Column field="driverName" header="Driver" sortable />
              <Column field="shift" header="Shift" />
              <Column field="isActive" header="Status" body={(r) => r.isActive ? "Active" : "Inactive"} />
              <Column header="Action" body={(r) => <Button icon="pi pi-pencil" className="p-button-sm p-button-success" onClick={() => editMapping(r)} />} />
            </DataTable>
          </Card>
        </div>
      ) : (
        <div className="animate-fade-in text-left">
          <Button label="Back" icon="pi pi-arrow-left" className="p-button-text mb-4" onClick={() => setViewMode('list')} />
          <Card className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Select Vehicle *</label>
                <Dropdown value={formData.vehicleId} options={vehicleOptions} onChange={(e) => setFormData({...formData, vehicleId: e.value})} placeholder="Choose Vehicle" filter />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Select Route *</label>
                <Dropdown value={formData.routeId} options={routeOptions} onChange={(e) => setFormData({...formData, routeId: e.value})} placeholder="Choose Route" filter />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Select Driver *</label>
                <Dropdown value={formData.driverId} options={driverOptions} onChange={(e) => setFormData({...formData, driverId: e.value})} placeholder="Choose Driver" filter />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Shift</label>
                <Dropdown value={formData.shift} options={shiftOptions} onChange={(e) => setFormData({...formData, shift: e.value})} />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Assignment Date</label>
                <Calendar value={formData.assignmentDate} onChange={(e) => setFormData({...formData, assignmentDate: e.value as Date})} showIcon />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Active</label>
                <InputSwitch checked={formData.isActive} onChange={(e) => setFormData({...formData, isActive: e.value})} />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Save Mapping" icon="pi pi-save" className="p-button-success" onClick={saveMapping} />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
};

export default VehicleToMapping;