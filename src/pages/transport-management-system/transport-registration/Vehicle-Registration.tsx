import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Tag } from "primereact/tag";

interface Vehicle {
  id: number;
  registrationNo: string;
  vehicleType: string;
  transporter: string;
  seatingCapacity: number;
  engineNo: string;
  chassisNo: string;
  status: "Owned" | "Leased";
  isActive: boolean;
}

const VehicleRegistrationTr: React.FC = () => {
  const toast = useRef<Toast>(null);
  
  const emptyVehicle: Vehicle = {
    id: 0, registrationNo: "", vehicleType: "", transporter: "",
    seatingCapacity: 0, engineNo: "", chassisNo: "", status: "Owned", isActive: true
  };

  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { id: 1, registrationNo: "MP-04-HE-1234", vehicleType: "Bus", transporter: "Global Travels", seatingCapacity: 52, engineNo: "ENG998822", chassisNo: "CHS112233", status: "Leased", isActive: true },
    { id: 2, registrationNo: "MP-04-AB-5566", vehicleType: "Van", transporter: "Self Owned", seatingCapacity: 12, engineNo: "ENG445566", chassisNo: "CHS778899", status: "Owned", isActive: true }
  ]);

  const [formData, setFormData] = useState<Vehicle>(emptyVehicle);
  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');

  const typeOptions = ["Bus", "Mini Bus", "Van", "Winger", "Auto"];
  const statusOptions = ["Owned", "Leased"];
  const transporterOptions = ["Self Owned", "Global Travels", "City Bus Services"];

  const saveVehicle = () => {
    if (!formData.registrationNo || !formData.vehicleType) {
      toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Registration No and Type are required' });
      return;
    }

    if (formData.id) {
      setVehicles(vehicles.map(v => v.id === formData.id ? formData : v));
      toast.current?.show({ severity: 'success', summary: 'Updated', detail: 'Vehicle details updated' });
    } else {
      setVehicles([...vehicles, { ...formData, id: Date.now() }]);
      toast.current?.show({ severity: 'success', summary: 'Saved', detail: 'New Vehicle Registered' });
    }
    setViewMode('list');
  };

  const header = (
    <div className="flex justify-between items-center">
      <span className="text-lg font-bold text-gray-700">Registered Vehicles</span>
      <Button label="Register New Vehicle" icon="pi pi-plus" className="p-button-sm" onClick={() => {setFormData(emptyVehicle); setViewMode('form');}} />
    </div>
  );

  return (
    <PageLayout title="Transport Management">
      <Toast ref={toast} />

      <div className="text-xs font-semibold text-gray-500 mb-2 uppercase text-left">
        Registration &raquo; Vehicle Registration
      </div>

      {viewMode === 'list' ? (
        <Card className="shadow-sm border-t-4 border-blue-900">
          <DataTable value={vehicles} header={header} paginator rows={10} className="p-datatable-sm text-left" showGridlines stripedRows>
            <Column field="registrationNo" header="Vehicle No." sortable font-bold />
            <Column field="vehicleType" header="Type" sortable />
            <Column field="transporter" header="Transporter/Owner" />
            <Column field="seatingCapacity" header="Seats" className="text-center" />
            <Column field="status" header="Ownership" body={(r) => <Tag value={r.status} severity={r.status === 'Owned' ? 'info' : 'warning'} />} />
            <Column header="Action" body={(r) => (
              <Button icon="pi pi-pencil" className="p-button-text p-button-sm" onClick={() => {setFormData(r); setViewMode('form');}} />
            )} />
          </DataTable>
        </Card>
      ) : (
        <Card title="Vehicle Registration Form" className="shadow-sm border-t-4 border-blue-900 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Registration Number *</label>
              <InputText value={formData.registrationNo} onChange={(e) => setFormData({...formData, registrationNo: e.target.value.toUpperCase()})} placeholder="e.g. MP-04-HE-1234" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Vehicle Type *</label>
              <Dropdown value={formData.vehicleType} options={typeOptions} onChange={(e) => setFormData({...formData, vehicleType: e.value})} placeholder="Select Type" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Transporter</label>
              <Dropdown value={formData.transporter} options={transporterOptions} onChange={(e) => setFormData({...formData, transporter: e.value})} placeholder="Select Owner" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Seating Capacity</label>
              <InputText value={formData.seatingCapacity.toString()} onChange={(e) => setFormData({...formData, seatingCapacity: Number(e.target.value)})} type="number" placeholder="No. of seats" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Engine Number</label>
              <InputText value={formData.engineNo} onChange={(e) => setFormData({...formData, engineNo: e.target.value})} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Chassis Number</label>
              <InputText value={formData.chassisNo} onChange={(e) => setFormData({...formData, chassisNo: e.target.value})} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Ownership Status</label>
              <Dropdown value={formData.status} options={statusOptions} onChange={(e) => setFormData({...formData, status: e.value})} />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
            <Button label="Back to List" icon="pi pi-arrow-left" className="p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
            <Button label="Save Vehicle" icon="pi pi-save" className="p-button-success px-8" onClick={saveVehicle} />
          </div>
        </Card>
      )}
    </PageLayout>
  );
};

export default VehicleRegistrationTr;