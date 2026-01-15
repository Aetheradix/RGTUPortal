import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

interface StopLocation {
  id: number;
  routeId: string;
  routeName: string;
  stopName: string;
  sequence: number;
  pickupTime: string;
  dropTime: string;
  landmark: string;
}

const RouteStopLocationDetails: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');

  const [stops, setStops] = useState<StopLocation[]>([
    { id: 1, routeId: "R1", routeName: "Route-101 (MP Nagar)", stopName: "Chetak Bridge", sequence: 1, pickupTime: "08:15 AM", dropTime: "05:10 PM", landmark: "Near Railway Overbridge" },
    { id: 2, routeId: "R1", routeName: "Route-101 (MP Nagar)", stopName: "Jyoti Cinema", sequence: 2, pickupTime: "08:25 AM", dropTime: "05:00 PM", landmark: "Main Gate" },
    { id: 3, routeId: "R2", routeName: "Route-102 (Lalghati)", stopName: "VIP Road", sequence: 1, pickupTime: "08:00 AM", dropTime: "05:30 PM", landmark: "Near Lake View" },
  ]);

  const [formData, setFormData] = useState<Partial<StopLocation>>({
    sequence: 1
  });

  const routeOptions = [
    { label: "Route-101 (MP Nagar)", value: "R1" },
    { label: "Route-102 (Lalghati)", value: "R2" }
  ];

  const handleSave = () => {
    if (!formData.routeId || !formData.stopName || !formData.pickupTime) {
      toast.current?.show({ severity: 'error', summary: 'Missing Info', detail: 'Route, Stop Name and Pickup Time are mandatory' });
      return;
    }

    const selectedRoute = routeOptions.find(r => r.value === formData.routeId);
    const newStop = { 
        ...formData, 
        id: Date.now(), 
        routeName: selectedRoute?.label || '' 
    } as StopLocation;

    setStops([...stops, newStop]);
    toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Stop location added to route' });
    setViewMode('list');
  };

  const renderListView = () => (
    <Card title="Route-wise Stop Master" className="shadow-sm border-t-4 border-blue-900 text-left">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500 font-medium italic">Manage pickup/drop points and their timings</span>
        <Button label="Add New Stop" icon="pi pi-map-marker" onClick={() => { setFormData({sequence: 1}); setViewMode('form'); }} />
      </div>
      
      <DataTable value={stops} paginator rows={10} groupRowsBy="routeName" sortMode="single" sortField="routeName" sortOrder={1} className="p-datatable-sm" showGridlines stripedRows>
        <Column field="routeName" header="Route Name" />
        <Column field="sequence" header="Seq #" style={{ width: '5rem' }} />
        <Column field="stopName" header="Stop Name" className="font-bold" />
        <Column field="pickupTime" header="Pickup Time" />
        <Column field="dropTime" header="Drop Time" />
        <Column field="landmark" header="Landmark" />
        <Column header="Action" body={() => (
            <div className="flex gap-2">
                <Button icon="pi pi-pencil" className="p-button-text p-button-sm" />
                <Button icon="pi pi-trash" className="p-button-text p-button-danger p-button-sm" />
            </div>
        )} />
      </DataTable>
    </Card>
  );

  const renderFormView = () => (
    <div className="max-w-5xl mx-auto text-left py-2">
      <div className="flex items-center gap-3 mb-4 bg-white p-3 rounded shadow-sm border">
        <Button icon="pi pi-arrow-left" className="p-button-rounded p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
        <h2 className="text-xl font-bold m-0 text-gray-800">Add Stop to Route</h2>
      </div>

      <Card className="shadow-lg border-t-4 border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="col-span-1 md:col-span-3">
             <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Stop Location Details</h4>
             <Divider className="my-2" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Select Route *</label>
            <Dropdown 
                value={formData.routeId} 
                options={routeOptions} 
                onChange={(e) => setFormData({ ...formData, routeId: e.value })} 
                placeholder="Select Route" className="w-full" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Stop Name *</label>
            <InputText value={formData.stopName || ''} onChange={(e) => setFormData({ ...formData, stopName: e.target.value })} placeholder="e.g. Chetak Bridge" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Sequence No. (Order) *</label>
            <InputNumber value={formData.sequence} onValueChange={(e) => setFormData({ ...formData, sequence: e.value || 1 })} showButtons min={1} />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Pickup Time (Morning)</label>
            <InputText value={formData.pickupTime || ''} onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })} placeholder="e.g. 08:30 AM" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Drop Time (Evening)</label>
            <InputText value={formData.dropTime || ''} onChange={(e) => setFormData({ ...formData, dropTime: e.target.value })} placeholder="e.g. 04:45 PM" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Landmark</label>
            <InputText value={formData.landmark || ''} onChange={(e) => setFormData({ ...formData, landmark: e.target.value })} placeholder="Near ATM/Shop" />
          </div>

        </div>

        <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
          <Button label="Reset" icon="pi pi-refresh" className="p-button-outlined p-button-secondary" />
          <div className="flex gap-3">
            <Button label="Cancel" icon="pi pi-times" className="p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
            <Button label="Save Stop Details" icon="pi pi-save" className="p-button-success px-8 shadow-md" onClick={handleSave} />
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <PageLayout title="Route & Stop Configuration">
      <Toast ref={toast} />
      {viewMode === 'list' ? renderListView() : renderFormView()}
    </PageLayout>
  );
};

export default RouteStopLocationDetails;