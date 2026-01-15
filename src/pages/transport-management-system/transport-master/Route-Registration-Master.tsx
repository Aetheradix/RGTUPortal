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
import { InputNumber } from "primereact/inputnumber";

interface RouteMaster {
  id: number;
  routeCode: string;
  routeName: string;
  startPoint: string;
  endPoint: string;
  totalDistance: number;
  approxTime: string;
  isActive: boolean;
  remarks: string;
}

const RouteRegistrationMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const emptyRoute: RouteMaster = {
    id: 0,
    routeCode: "",
    routeName: "",
    startPoint: "",
    endPoint: "",
    totalDistance: 0,
    approxTime: "",
    isActive: true,
    remarks: "",
  };

  const [routes, setRoutes] = useState<RouteMaster[]>([
    { 
      id: 1, 
      routeCode: "R-101", 
      routeName: "Ayodhya Nagar to University", 
      startPoint: "Ayodhya Nagar", 
      endPoint: "RGTU Campus", 
      totalDistance: 12.5, 
      approxTime: "40 Mins", 
      isActive: true, 
      remarks: "Via Minal Residency" 
    },
    { 
      id: 2, 
      routeCode: "R-102", 
      routeName: "Indrapuri to University", 
      startPoint: "Indrapuri C-Sector", 
      endPoint: "RGTU Campus", 
      totalDistance: 8.2, 
      approxTime: "25 Mins", 
      isActive: true, 
      remarks: "Direct Route" 
    }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [formData, setFormData] = useState<RouteMaster>(emptyRoute);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const openNew = () => {
    setFormData(emptyRoute);
    setViewMode('form');
  };

  const editRoute = (item: RouteMaster) => {
    setFormData({ ...item });
    setViewMode('form');
  };

  const cancelEdit = () => {
    setFormData(emptyRoute);
    setViewMode('list');
  };

  const saveRoute = () => {
    if (formData.routeCode.trim() && formData.routeName.trim()) {
      const _routes = [...routes];
      
      if (formData.id) {
        const index = _routes.findIndex(r => r.id === formData.id);
        _routes[index] = { ...formData };
        toast.current?.show({ severity: 'success', summary: 'Updated', detail: 'Route Updated Successfully', life: 3000 });
      } else {
        const newEntry = { 
            ...formData, 
            id: Math.floor(Math.random() * 1000) 
        };
        _routes.push(newEntry);
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'New Route Registered', life: 3000 });
      }

      setRoutes(_routes);
      setViewMode('list');
      setFormData(emptyRoute);
    } else {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Route Code and Name are required', life: 3000 });
    }
  };

  const deleteRoute = () => {
    const _routes = routes.filter(val => val.id !== formData.id);
    setRoutes(_routes);
    setDeleteDialog(false);
    toast.current?.show({ severity: 'warn', summary: 'Deleted', detail: 'Route Removed', life: 3000 });
  };

  const header = (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold text-gray-700">Routes Directory</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search Route..." className="p-inputtext-sm" />
      </span>
    </div>
  );

  const actionTemplate = (rowData: RouteMaster) => (
    <div className="flex gap-2 justify-center">
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" onClick={() => editRoute(rowData)} />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" onClick={() => { setFormData(rowData); setDeleteDialog(true); }} />
    </div>
  );

  return (
    <PageLayout title="Transport Master">
      <Toast ref={toast} />
      {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">Route Registration Master</div>
            <Button label="Create New Route" icon="pi pi-directions" className="p-button-primary" onClick={openNew} />
          </div>

          <Card>
            <DataTable 
              value={routes} 
              header={header} 
              globalFilter={globalFilter}
              paginator rows={10} 
              className="p-datatable-sm" 
              showGridlines 
              stripedRows
            >
              <Column field="routeCode" header="Route Code" sortable />
              <Column field="routeName" header="Route Name" sortable />
              <Column field="startPoint" header="Start Point" />
              <Column field="endPoint" header="End Point" />
              <Column field="totalDistance" header="Distance (KM)" body={(r) => `${r.totalDistance} KM`} />
              <Column field="approxTime" header="Est. Time" />
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
              {formData.id ? 'Modify Route Details' : 'Register New Route'}
            </div>
          </div>

          <Card title="Route Mapping Form" className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Route Code *</label>
                <InputText value={formData.routeCode} onChange={(e) => setFormData({...formData, routeCode: e.target.value})} placeholder="e.g. RT-01" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Route Name *</label>
                <InputText value={formData.routeName} onChange={(e) => setFormData({...formData, routeName: e.target.value})} placeholder="e.g. Station to Campus" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Start Point *</label>
                <InputText value={formData.startPoint} onChange={(e) => setFormData({...formData, startPoint: e.target.value})} placeholder="Pick-up Start" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">End Point *</label>
                <InputText value={formData.endPoint} onChange={(e) => setFormData({...formData, endPoint: e.target.value})} placeholder="Destination" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Total Distance (KM)</label>
                <InputNumber value={formData.totalDistance} onValueChange={(e) => setFormData({...formData, totalDistance: e.value ?? 0})} mode="decimal" minFractionDigits={1} suffix=" KM" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Approximate Travel Time</label>
                <InputText value={formData.approxTime} onChange={(e) => setFormData({...formData, approxTime: e.target.value})} placeholder="e.g. 45 Mins" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Route Status</label>
                <div className="flex items-center gap-2 mt-2">
                    <InputSwitch checked={formData.isActive} onChange={(e) => setFormData({...formData, isActive: e.value})} />
                    <span className="font-semibold">{formData.isActive ? 'Operating' : 'Suspended'}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-sm">Route Description / Remarks</label>
                <InputTextarea value={formData.remarks} onChange={(e) => setFormData({...formData, remarks: e.target.value})} rows={2} />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary px-6" onClick={cancelEdit} />
              <Button label={formData.id ? "Update Route" : "Save Route"} icon="pi pi-save" className="p-button-success px-8" onClick={saveRoute} />
            </div>
          </Card>
        </div>
      )}

      <Dialog visible={deleteDialog} style={{ width: '400px' }} header="Delete Route" modal onHide={() => setDeleteDialog(false)}
        footer={
          <div>
            <Button label="No" className="p-button-text" onClick={() => setDeleteDialog(false)} />
            <Button label="Yes" className="p-button-danger" onClick={deleteRoute} />
          </div>
        }>
        <div className="flex items-center gap-3">
          <i className="pi pi-map text-red-500 text-3xl" />
          <span>Confirm deletion of Route: <b>{formData.routeName}</b>?</span>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default RouteRegistrationMaster;