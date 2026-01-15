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

interface TransporterMapping {
  id: number;
  transporterId: string;
  transporterName: string;
  vehicleId: string;
  vehicleNo: string;
  routeId: string;
  routeName: string;
  agreementStartDate: Date | null;
  agreementEndDate: Date | null;
  isActive: boolean;
}

const TransporterToMapping: React.FC = () => {
  const toast = useRef<Toast>(null);
  const emptyMapping: TransporterMapping = {
    id: 0,
    transporterId: "",
    transporterName: "",
    vehicleId: "",
    vehicleNo: "",
    routeId: "",
    routeName: "",
    agreementStartDate: null,
    agreementEndDate: null,
    isActive: true,
  };

  const [mappings, setMappings] = useState<TransporterMapping[]>([
    { 
      id: 1, 
      transporterId: "T1", 
      transporterName: "Global Travels Pvt Ltd", 
      vehicleId: "V1", 
      vehicleNo: "MP-04-HE-1234", 
      routeId: "R1",
      routeName: "Route-01 (Main City)",
      agreementStartDate: new Date('2025-01-01'), 
      agreementEndDate: new Date('2025-12-31'),
      isActive: true 
    }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [formData, setFormData] = useState<TransporterMapping>(emptyMapping);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const transporterOptions = [
    { label: "Global Travels Pvt Ltd", value: "T1" },
    { label: "City Bus Services", value: "T2" },
    { label: "Star Logistics", value: "T3" }
  ];

  const vehicleOptions = [
    { label: "MP-04-HE-1234 (Bus)", value: "V1" },
    { label: "MP-04-HE-5678 (Bus)", value: "V2" },
    { label: "MP-04-ZE-9900 (Mini)", value: "V3" }
  ];

  const routeOptions = [
    { label: "Route-01 (Main City)", value: "R1" },
    { label: "Route-02 (Suburb)", value: "R2" }
  ];

  const openNew = () => {
    setFormData(emptyMapping);
    setViewMode('form');
  };

  const editMapping = (item: TransporterMapping) => {
    setFormData({ ...item });
    setViewMode('form');
  };

  const cancelEdit = () => {
    setFormData(emptyMapping);
    setViewMode('list');
  };

  const saveMapping = () => {
    if (formData.transporterId && formData.vehicleId) {
      const _mappings = [...mappings];
      
      const selectedTrans = transporterOptions.find(t => t.value === formData.transporterId);
      const selectedVeh = vehicleOptions.find(v => v.value === formData.vehicleId);
      const selectedRoute = routeOptions.find(r => r.value === formData.routeId);
      
      const dataToSave = {
        ...formData,
        transporterName: selectedTrans?.label || "",
        vehicleNo: selectedVeh?.label.split(' (')[0] || "",
        routeName: selectedRoute?.label || ""
      };

      if (formData.id) {
        const index = _mappings.findIndex(m => m.id === formData.id);
        _mappings[index] = dataToSave;
        toast.current?.show({ severity: 'success', summary: 'Updated', detail: 'Mapping Updated', life: 3000 });
      } else {
        const newEntry = { ...dataToSave, id: Math.floor(Math.random() * 1000) };
        _mappings.push(newEntry);
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Transporter Linked', life: 3000 });
      }

      setMappings(_mappings);
      setViewMode('list');
    } else {
      toast.current?.show({ severity: 'error', summary: 'Required', detail: 'Transporter and Vehicle are mandatory', life: 3000 });
    }
  };

  const header = (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold text-gray-700">Transporter-Route-Vehicle Matrix</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search..." className="p-inputtext-sm" />
      </span>
    </div>
  );

  return (
    <PageLayout title="Transport Master">
      <Toast ref={toast} />

      {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">Transporter to Mapping Master</div>
            <Button label="Map Transporter" icon="pi pi-link" className="p-button-primary" onClick={openNew} />
          </div>

          <Card>
            <DataTable 
              value={mappings} header={header} globalFilter={globalFilter}
              paginator rows={10} className="p-datatable-sm" showGridlines stripedRows
            >
              <Column field="transporterName" header="Transporter Name" sortable />
              <Column field="vehicleNo" header="Vehicle Number" />
              <Column field="routeName" header="Assigned Route" />
              <Column field="agreementEndDate" header="Agreement Expiry" body={(r) => r.agreementEndDate?.toLocaleDateString()} sortable />
              <Column field="isActive" header="Status" body={(r) => r.isActive ? <b className="text-green-600">Active</b> : <b className="text-red-600">Expired</b>} className="text-center" />
              <Column header="Action" body={(r) => (
                <div className="flex gap-2 justify-center">
                  <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" onClick={() => editMapping(r)} />
                  <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" onClick={() => { setFormData(r); setDeleteDialog(true); }} />
                </div>
              )} style={{ width: '8rem' }} />
            </DataTable>
          </Card>
        </div>
      ) : (
        <div className="animate-fade-in text-left">
          <div className="flex items-center gap-2 mb-4">
            <Button icon="pi pi-arrow-left" className="p-button-text p-button-secondary" onClick={cancelEdit} />
            <div className="text-xl font-bold text-blue-900 uppercase">
              {formData.id ? 'Edit Transporter Assignment' : 'New Transporter Assignment'}
            </div>
          </div>

          <Card title="Mapping Configuration" className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Select Transporter *</label>
                <Dropdown value={formData.transporterId} options={transporterOptions} onChange={(e) => setFormData({...formData, transporterId: e.value})} placeholder="Choose Vendor" filter />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Select Vehicle *</label>
                <Dropdown value={formData.vehicleId} options={vehicleOptions} onChange={(e) => setFormData({...formData, vehicleId: e.value})} placeholder="Choose Vehicle" filter />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Assigned Route</label>
                <Dropdown value={formData.routeId} options={routeOptions} onChange={(e) => setFormData({...formData, routeId: e.value})} placeholder="Assign Route" filter />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Agreement Start Date</label>
                <Calendar value={formData.agreementStartDate} onChange={(e) => setFormData({...formData, agreementStartDate: e.value as Date})} showIcon placeholder="dd/mm/yyyy" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Agreement End Date</label>
                <Calendar value={formData.agreementEndDate} onChange={(e) => setFormData({...formData, agreementEndDate: e.value as Date})} showIcon placeholder="dd/mm/yyyy" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Active Mapping</label>
                <div className="flex items-center gap-2 mt-2">
                    <InputSwitch checked={formData.isActive} onChange={(e) => setFormData({...formData, isActive: e.value})} />
                    <span className="font-semibold">{formData.isActive ? 'Active' : 'Expired/Terminated'}</span>
                </div>
              </div>

            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary px-6" onClick={cancelEdit} />
              <Button label={formData.id ? "Update Mapping" : "Save Mapping"} icon="pi pi-save" className="p-button-success px-8" onClick={saveMapping} />
            </div>
          </Card>
        </div>
      )}

      <Dialog visible={deleteDialog} style={{ width: '400px' }} header="Confirm Removal" modal onHide={() => setDeleteDialog(false)}
        footer={
          <div>
            <Button label="No" className="p-button-text" onClick={() => setDeleteDialog(false)} />
            <Button label="Yes" className="p-button-danger" onClick={() => { setMappings(mappings.filter(m => m.id !== formData.id)); setDeleteDialog(false); }} />
          </div>
        }>
        <div className="flex items-center gap-3">
          <i className="pi pi-exclamation-triangle text-red-500 text-3xl" />
          <span>Remove mapping for <b>{formData.transporterName}</b>?</span>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default TransporterToMapping;