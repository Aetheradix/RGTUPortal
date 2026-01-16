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
import { InputNumber } from "primereact/inputnumber";

interface RouteStopMapping {
  id: number;
  routeId: string;
  routeName: string;
  stopId: string;
  stopName: string;
  stopOrder: number;
  arrivalTime: string;
  distanceFromStart: number;
}

const RouteStopMappingMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const emptyMapping: RouteStopMapping = {
    id: 0,
    routeId: "",
    routeName: "",
    stopId: "",
    stopName: "",
    stopOrder: 1,
    arrivalTime: "",
    distanceFromStart: 0,
  };

  const [mappings, setMappings] = useState<RouteStopMapping[]>([
    { 
      id: 1, 
      routeId: "R1", 
      routeName: "Route-01 (City to Campus)", 
      stopId: "S1", 
      stopName: "Main Chouraha", 
      stopOrder: 1, 
      arrivalTime: "08:15 AM", 
      distanceFromStart: 0 
    },
    { 
      id: 2, 
      routeId: "R1", 
      routeName: "Route-01 (City to Campus)", 
      stopId: "S5", 
      stopName: "Library Square", 
      stopOrder: 2, 
      arrivalTime: "08:30 AM", 
      distanceFromStart: 3.5 
    }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [formData, setFormData] = useState<RouteStopMapping>(emptyMapping);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const routeOptions = [
    { label: "Route-01 (City to Campus)", value: "R1" },
    { label: "Route-02 (Station to Campus)", value: "R2" }
  ];

  const stopOptions = [
    { label: "Main Chouraha", value: "S1" },
    { label: "Hospital Gate", value: "S2" },
    { label: "Police Chowki", value: "S3" },
    { label: "Railway Station", value: "S4" },
    { label: "Library Square", value: "S5" }
  ];

  const openNew = () => {
    setFormData(emptyMapping);
    setViewMode('form');
  };

  const editMapping = (item: RouteStopMapping) => {
    setFormData({ ...item });
    setViewMode('form');
  };

  const cancelEdit = () => {
    setFormData(emptyMapping);
    setViewMode('list');
  };

  const saveMapping = () => {
    if (formData.routeId && formData.stopId) {
      const _mappings = [...mappings];
      
      const selectedRoute = routeOptions.find(r => r.value === formData.routeId);
      const selectedStop = stopOptions.find(s => s.value === formData.stopId);
      
      const dataToSave = {
        ...formData,
        routeName: selectedRoute?.label || "",
        stopName: selectedStop?.label || ""
      };

      if (formData.id) {
        const index = _mappings.findIndex(m => m.id === formData.id);
        _mappings[index] = dataToSave;
        toast.current?.show({ severity: 'success', summary: 'Updated', detail: 'Stop Order Updated', life: 3000 });
      } else {
        const newEntry = { ...dataToSave, id: Math.floor(Math.random() * 1000) };
        _mappings.push(newEntry);
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Stop Added to Route', life: 3000 });
      }

      setMappings(_mappings);
      setViewMode('list');
    } else {
      toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Route and Stop are required', life: 3000 });
    }
  };

  const deleteMapping = () => {
    setMappings(mappings.filter(val => val.id !== formData.id));
    setDeleteDialog(false);
    toast.current?.show({ severity: 'warn', summary: 'Removed', detail: 'Stop removed from Route', life: 3000 });
  };

  const header = (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold text-gray-700">Route & Stop Configuration</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search Route/Stop..." className="p-inputtext-sm" />
      </span>
    </div>
  );

  const actionTemplate = (rowData: RouteStopMapping) => (
    <div className="flex gap-2 justify-center">
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" onClick={() => editMapping(rowData)} />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" onClick={() => { setFormData(rowData); setDeleteDialog(true); }} />
    </div>
  );

  return (
    <PageLayout title="Transport Master">
      <Toast ref={toast} />

      {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">Route to Stop Mapping Master</div>
            <Button label="Add Stop to Route" icon="pi pi-plus" className="p-button-primary" onClick={openNew} />
          </div>

          <Card>
            <DataTable 
              value={mappings} header={header} globalFilter={globalFilter}
              paginator rows={10} className="p-datatable-sm" showGridlines stripedRows
              sortField="routeName" sortOrder={1}
            >
              <Column field="routeName" header="Route Name" sortable filter />
              <Column field="stopOrder" header="Sequence" sortable className="text-center font-bold" />
              <Column field="stopName" header="Stop Name" sortable />
              <Column field="arrivalTime" header="Arrival Time" />
              <Column field="distanceFromStart" header="Dist. (KM)" body={(r) => `${r.distanceFromStart} KM`} />
              <Column header="Action" body={actionTemplate} style={{ width: '8rem' }} />
            </DataTable>
          </Card>
        </div>
      ) : (
        <div className="animate-fade-in text-left">
          <div className="flex items-center gap-2 mb-4">
            <Button icon="pi pi-arrow-left" className="p-button-text p-button-secondary" onClick={cancelEdit} />
            <div className="text-xl font-bold text-blue-900 uppercase">
              {formData.id ? 'Edit Stop Mapping' : 'Assign Stop to Route'}
            </div>
          </div>

          <Card title="Mapping Details" className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Select Route *</label>
                <Dropdown value={formData.routeId} options={routeOptions} onChange={(e) => setFormData({...formData, routeId: e.value})} placeholder="Choose Route" filter />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Select Bus Stop *</label>
                <Dropdown value={formData.stopId} options={stopOptions} onChange={(e) => setFormData({...formData, stopId: e.value})} placeholder="Choose Stop" filter />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Stop Sequence Order *</label>
                <InputNumber value={formData.stopOrder} onValueChange={(e) => setFormData({...formData, stopOrder: e.value ?? 1})} min={1} showButtons placeholder="e.g. 1" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Expected Arrival Time</label>
                <InputText value={formData.arrivalTime} onChange={(e) => setFormData({...formData, arrivalTime: e.target.value})} placeholder="e.g. 08:30 AM" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Distance from Start (KM)</label>
                <InputNumber value={formData.distanceFromStart} onValueChange={(e) => setFormData({...formData, distanceFromStart: e.value ?? 0})} mode="decimal" minFractionDigits={1} suffix=" KM" />
              </div>

            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Back" icon="pi pi-times" className="p-button-outlined p-button-secondary px-6" onClick={cancelEdit} />
              <Button label={formData.id ? "Update Mapping" : "Save Mapping"} icon="pi pi-save" className="p-button-success px-8" onClick={saveMapping} />
            </div>
          </Card>
        </div>
      )}

      <Dialog visible={deleteDialog} style={{ width: '400px' }} header="Confirm Removal" modal onHide={() => setDeleteDialog(false)}
        footer={
          <div>
            <Button label="No" className="p-button-text" onClick={() => setDeleteDialog(false)} />
            <Button label="Yes" className="p-button-danger" onClick={deleteMapping} />
          </div>
        }>
        <div className="flex items-center gap-3">
          <i className="pi pi-exclamation-circle text-red-500 text-3xl" />
          <span>Remove <b>{formData.stopName}</b> from <b>{formData.routeName}</b>?</span>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default RouteStopMappingMaster;