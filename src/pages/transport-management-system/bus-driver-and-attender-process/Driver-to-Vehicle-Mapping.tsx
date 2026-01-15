import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Tag } from "primereact/tag";
import { Calendar } from "primereact/calendar";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";

interface DriverMapping {
  id: number;
  driverId: string;
  driverName: string;
  vehicleNo: string;
  vehicleModel: string;
  assignedDate: Date | null;
  shift: string;
  status: "Assigned" | "Released";
}

const DriverToVehicleMapping: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');

  const [mappings, setMappings] = useState<DriverMapping[]>([
    { id: 1, driverId: "DRV-001", driverName: "Karan Yadav", vehicleNo: "MP-04-HE-1234", vehicleModel: "TATA Starbus 50S", assignedDate: new Date(), shift: "Morning", status: "Assigned" },
    { id: 2, driverId: "DRV-045", driverName: "Ramesh Kumar", vehicleNo: "MP-04-GB-5678", vehicleModel: "Eicher Skyline", assignedDate: new Date(), shift: "Evening", status: "Assigned" },
  ]);

  const [formData, setFormData] = useState<Partial<DriverMapping>>({
    shift: "Full-Day",
    status: "Assigned"
  });

  const driverOptions = [
    { label: "Karan Yadav (DRV-001)", value: "Karan Yadav" },
    { label: "Ramesh Kumar (DRV-045)", value: "Ramesh Kumar" },
    { label: "Sohan Singh (DRV-012)", value: "Sohan Singh" }
  ];

  const vehicleOptions = [
    { label: "MP-04-HE-1234 (Bus 50 Seater)", value: "MP-04-HE-1234" },
    { label: "MP-04-GB-5678 (Bus 40 Seater)", value: "MP-04-GB-5678" }
  ];

  const handleSave = () => {
    if (!formData.driverName || !formData.vehicleNo) {
      toast.current?.show({ severity: 'error', summary: 'Required', detail: 'Driver and Vehicle selection is mandatory' });
      return;
    }

    const newMapping = { ...formData, id: Date.now(), assignedDate: new Date() } as DriverMapping;
    setMappings([newMapping, ...mappings]);
    toast.current?.show({ severity: 'success', summary: 'Mapped', detail: 'Driver assigned to vehicle successfully' });
    setViewMode('list');
  };

  const renderListView = () => (
    <Card title="Active Driver Assignments" className="shadow-sm border-t-4 border-blue-900 text-left">
      <div className="flex justify-end mb-4">
        <Button label="New Assignment" icon="pi pi-link" onClick={() => { setFormData({shift: 'Full-Day'}); setViewMode('form'); }} />
      </div>
      <DataTable value={mappings} paginator rows={10} className="p-datatable-sm" showGridlines stripedRows>
        <Column field="vehicleNo" header="Vehicle Number" sortable className="font-bold" />
        <Column field="driverName" header="Driver Name" sortable />
        <Column field="shift" header="Shift" />
        <Column field="assignedDate" header="Assigned Date" body={(r) => r.assignedDate?.toLocaleDateString()} />
        <Column header="Status" body={(r) => <Tag value={r.status} severity="success" />} />
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
        <h2 className="text-xl font-bold m-0 text-gray-800">Assign Driver to Vehicle</h2>
      </div>

      <Card className="shadow-lg border-t-4 border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="col-span-1 md:col-span-2">
             <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Mapping Details</h4>
             <Divider className="my-2" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Select Driver *</label>
            <Dropdown 
                value={formData.driverName} 
                options={driverOptions} 
                onChange={(e) => setFormData({ ...formData, driverName: e.value })} 
                filter placeholder="Search Driver" className="w-full" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Select Vehicle *</label>
            <Dropdown 
                value={formData.vehicleNo} 
                options={vehicleOptions} 
                onChange={(e) => setFormData({ ...formData, vehicleNo: e.value })} 
                filter placeholder="Search Vehicle No" className="w-full" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Assignment Date</label>
            <Calendar value={formData.assignedDate || new Date()} onChange={(e) => setFormData({ ...formData, assignedDate: e.value as Date })} showIcon />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Work Shift</label>
            <Dropdown 
                value={formData.shift} 
                options={['Morning', 'Evening', 'Full-Day']} 
                onChange={(e) => setFormData({ ...formData, shift: e.value })} 
                className="w-full" 
            />
          </div>

          <div className="col-span-1 md:col-span-2 mt-4">
             <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Remarks / Special Instructions</h4>
             <Divider className="my-2" />
             <InputText placeholder="Any specific instruction for the driver..." className="w-full" />
          </div>
        </div>

        <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
          <Button label="Clear" icon="pi pi-refresh" className="p-button-outlined p-button-secondary" />
          <div className="flex gap-3">
            <Button label="Cancel" icon="pi pi-times" className="p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
            <Button label="Confirm Mapping" icon="pi pi-save" className="p-button-success px-8 shadow-md" onClick={handleSave} />
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <PageLayout title="Driver & Vehicle Management">
      <Toast ref={toast} />
      {viewMode === 'list' ? renderListView() : renderFormView()}
    </PageLayout>
  );
};

export default DriverToVehicleMapping;