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

interface FuelTypeMaster {
  id: number;
  fuelCode: string;
  fuelName: string;
  unit: string;
  isActive: boolean;
  remarks: string;
}

const FuelTypeMaster: React.FC = () => {
  const toast = useRef<Toast>(null);
  const emptyFuel: FuelTypeMaster = {
    id: 0,
    fuelCode: "",
    fuelName: "",
    unit: "",
    isActive: true,
    remarks: "",
  };

  const [fuelTypes, setFuelTypes] = useState<FuelTypeMaster[]>([
    { id: 1, fuelCode: "PET01", fuelName: "Petrol", unit: "Litre", isActive: true, remarks: "Regular Petrol" },
    { id: 2, fuelCode: "DSL02", fuelName: "Diesel", unit: "Litre", isActive: true, remarks: "High Speed Diesel" },
    { id: 3, fuelCode: "CNG03", fuelName: "CNG", unit: "Kg", isActive: true, remarks: "Compressed Natural Gas" },
    { id: 4, fuelCode: "ELE04", fuelName: "Electric", unit: "kWh", isActive: true, remarks: "Electric Battery Charge" }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [formData, setFormData] = useState<FuelTypeMaster>(emptyFuel);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const openNew = () => {
    setFormData(emptyFuel);
    setViewMode('form');
  };

  const editFuel = (item: FuelTypeMaster) => {
    setFormData({ ...item });
    setViewMode('form');
  };

  const cancelEdit = () => {
    setFormData(emptyFuel);
    setViewMode('list');
  };

  const saveFuel = () => {
    if (formData.fuelCode.trim() && formData.fuelName.trim() && formData.unit.trim()) {
      const _fuelTypes = [...fuelTypes];
      
      if (formData.id) {
        const index = _fuelTypes.findIndex(f => f.id === formData.id);
        _fuelTypes[index] = { ...formData };
        toast.current?.show({ severity: 'success', summary: 'Updated', detail: 'Fuel Type Updated', life: 3000 });
      } else {
        const newEntry = { 
            ...formData, 
            id: Math.floor(Math.random() * 1000) 
        };
        _fuelTypes.push(newEntry);
        toast.current?.show({ severity: 'success', summary: 'Success', detail: 'New Fuel Type Added', life: 3000 });
      }

      setFuelTypes(_fuelTypes);
      setViewMode('list');
      setFormData(emptyFuel);
    } else {
        toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Code, Name and Unit are required', life: 3000 });
    }
  };

  const deleteFuel = () => {
    const _fuelTypes = fuelTypes.filter(val => val.id !== formData.id);
    setFuelTypes(_fuelTypes);
    setDeleteDialog(false);
    toast.current?.show({ severity: 'warn', summary: 'Deleted', detail: 'Fuel Type Removed', life: 3000 });
  };

  const header = (
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold text-gray-700">Fuel Types List</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e: ChangeEvent<HTMLInputElement>) => setGlobalFilter(e.target.value)} placeholder="Search Fuel..." className="p-inputtext-sm" />
      </span>
    </div>
  );

  const actionTemplate = (rowData: FuelTypeMaster) => (
    <div className="flex gap-2 justify-center">
      <Button icon="pi pi-pencil" className="p-button-rounded p-button-success p-button-sm" onClick={() => editFuel(rowData)} />
      <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" onClick={() => { setFormData(rowData); setDeleteDialog(true); }} />
    </div>
  );

  return (
    <PageLayout title="Transport Master">
      <Toast ref={toast} />
      {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">Fuel Type Master</div>
            <Button label="Add Fuel Type" icon="pi pi-plus" className="p-button-primary" onClick={openNew} />
          </div>

          <Card>
            <DataTable 
              value={fuelTypes} 
              header={header} 
              globalFilter={globalFilter}
              paginator rows={10} 
              className="p-datatable-sm" 
              showGridlines 
              stripedRows
            >
              <Column field="fuelCode" header="Fuel Code" sortable />
              <Column field="fuelName" header="Fuel Name" sortable />
              <Column field="unit" header="Measurement Unit" sortable />
              <Column field="remarks" header="Remarks" />
              <Column field="isActive" header="Status" body={(r) => r.isActive ? <span className="text-green-600 font-bold">Active</span> : <span className="text-red-600 font-bold">Inactive</span>} className="text-center" />
              <Column header="Action" body={actionTemplate} style={{ width: '8rem' }} />
            </DataTable>
          </Card>
        </div>
      ) : (
        <div className="animate-fade-in text-left">
          <div className="flex items-center gap-2 mb-4">
            <Button icon="pi pi-arrow-left" className="p-button-text p-button-secondary" onClick={cancelEdit} />
            <div className="text-xl font-bold text-blue-900 uppercase">
              {formData.id ? 'Edit Fuel Type' : 'Add New Fuel Type'}
            </div>
          </div>

          <Card title="Fuel Configuration" className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Fuel Code *</label>
                <InputText value={formData.fuelCode} onChange={(e) => setFormData({...formData, fuelCode: e.target.value})} placeholder="e.g. DSL01" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Fuel Name *</label>
                <InputText value={formData.fuelName} onChange={(e) => setFormData({...formData, fuelName: e.target.value})} placeholder="e.g. Diesel / CNG" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Measurement Unit *</label>
                <InputText value={formData.unit} onChange={(e) => setFormData({...formData, unit: e.target.value})} placeholder="e.g. Litre / Kg / kWh" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Active Status</label>
                <div className="flex items-center gap-2 mt-2">
                    <InputSwitch checked={formData.isActive} onChange={(e) => setFormData({...formData, isActive: e.value})} />
                    <span className="font-semibold">{formData.isActive ? 'Active' : 'Inactive'}</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-sm">Remarks</label>
                <InputText value={formData.remarks} onChange={(e) => setFormData({...formData, remarks: e.target.value})} />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Back to List" icon="pi pi-times" className="p-button-outlined p-button-secondary px-6" onClick={cancelEdit} />
              <Button label={formData.id ? "Update Master" : "Save Master"} icon="pi pi-save" className="p-button-success px-8" onClick={saveFuel} />
            </div>
          </Card>
        </div>
      )}

      <Dialog visible={deleteDialog} style={{ width: '400px' }} header="Confirm Delete" modal onHide={() => setDeleteDialog(false)}
        footer={
          <div>
            <Button label="No" className="p-button-text" onClick={() => setDeleteDialog(false)} />
            <Button label="Yes" className="p-button-danger" onClick={deleteFuel} />
          </div>
        }>
        <div className="flex items-center gap-3">
          <i className="pi pi-exclamation-triangle text-red-500 text-3xl" />
          <span>Are you sure you want to delete <b>{formData.fuelName}</b>?</span>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default FuelTypeMaster;