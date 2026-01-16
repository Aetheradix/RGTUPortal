import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Tag } from "primereact/tag";
import { Calendar } from "primereact/calendar";
import { SelectButton } from "primereact/selectbutton";

interface Staff {
  id: number;
  role: "Driver" | "Attender";
  name: string;
  mobile: string;
  licenseNo?: string;
  licenseExpiry?: Date | null;
  aadharNo: string;
  address: string;
  isActive: boolean;
}

const DriverAttenderRegistration: React.FC = () => {
  const toast = useRef<Toast>(null);
  
  const emptyStaff: Staff = {
    id: 0, role: "Driver", name: "", mobile: "", licenseNo: "", 
    licenseExpiry: null, aadharNo: "", address: "", isActive: true
  };

  const [staffList, setStaffList] = useState<Staff[]>([
    { id: 1, role: "Driver", name: "Ram Singh", mobile: "9826012345", licenseNo: "MP04-2015-001", licenseExpiry: new Date("2030-12-31"), aadharNo: "1234-5678-9012", address: "Bhopal", isActive: true },
    { id: 2, role: "Attender", name: "Sohan Lal", mobile: "9425054321", aadharNo: "9876-5432-1098", address: "Sehore", isActive: true }
  ]);

  const [formData, setFormData] = useState<Staff>(emptyStaff);
  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');

  const roleOptions = [
    { label: 'Driver', value: 'Driver' },
    { label: 'Attender', value: 'Attender' }
  ];

  const saveStaff = () => {
    if (!formData.name || !formData.mobile || (formData.role === 'Driver' && !formData.licenseNo)) {
      toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Please fill all mandatory fields' });
      return;
    }

    if (formData.id) {
      setStaffList(staffList.map(s => s.id === formData.id ? formData : s));
    } else {
      setStaffList([...staffList, { ...formData, id: Date.now() }]);
    }
    
    toast.current?.show({ severity: 'success', summary: 'Success', detail: `${formData.role} details saved` });
    setViewMode('list');
  };

  const header = (
    <div className="flex justify-between items-center">
      <span className="text-lg font-bold text-gray-700">Staff Directory</span>
      <Button label="New Staff Entry" icon="pi pi-user-plus" onClick={() => {setFormData(emptyStaff); setViewMode('form');}} />
    </div>
  );

  return (
    <PageLayout title="Transport Staff">
      <Toast ref={toast} />

      <div className="text-xs font-semibold text-gray-500 mb-2 uppercase text-left">
        Registration &raquo; Driver & Attender
      </div>

      {viewMode === 'list' ? (
        <Card className="shadow-sm border-t-4 border-blue-900">
          <DataTable value={staffList} header={header} paginator rows={10} className="p-datatable-sm text-left" showGridlines stripedRows>
            <Column field="role" header="Role" body={(r) => <Tag value={r.role} severity={r.role === 'Driver' ? 'info' : 'warning'} />} sortable />
            <Column field="name" header="Name" sortable />
            <Column field="mobile" header="Mobile" />
            <Column field="licenseNo" header="License No." body={(r) => r.licenseNo || "N/A"} />
            <Column field="isActive" header="Status" body={(r) => r.isActive ? <b className="text-green-600">Active</b> : <b className="text-red-600">Inactive</b>} />
            <Column header="Action" body={(r) => (
              <Button icon="pi pi-pencil" className="p-button-text" onClick={() => {setFormData(r); setViewMode('form');}} />
            )} />
          </DataTable>
        </Card>
      ) : (
        <Card title="Staff Details Form" className="shadow-sm border-t-4 border-blue-900 text-left">
          <div className="mb-6">
            <label className="block font-bold mb-2">Registration Type *</label>
            <SelectButton value={formData.role} options={roleOptions} onChange={(e) => setFormData({...formData, role: e.value})} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Full Name *</label>
              <InputText value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Full Name" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Mobile Number *</label>
              <InputText value={formData.mobile} onChange={(e) => setFormData({...formData, mobile: e.target.value})} maxLength={10} placeholder="10 Digit Number" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Aadhar Number</label>
              <InputText value={formData.aadharNo} onChange={(e) => setFormData({...formData, aadharNo: e.target.value})} placeholder="XXXX-XXXX-XXXX" />
            </div>

            {formData.role === "Driver" && (
              <>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-sm">License Number *</label>
                  <InputText value={formData.licenseNo} onChange={(e) => setFormData({...formData, licenseNo: e.target.value.toUpperCase()})} placeholder="e.g. MP04-XXXXX" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-sm">License Expiry Date</label>
                  <Calendar value={formData.licenseExpiry} onChange={(e) => setFormData({...formData, licenseExpiry: e.value as Date})} showIcon />
                </div>
              </>
            )}

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-bold text-sm">Residential Address</label>
              <InputText value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} />
            </div>
          </div>

          <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
            <Button label="Cancel" className="p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
            <Button label="Save Details" icon="pi pi-check" className="p-button-success px-8" onClick={saveStaff} />
          </div>
        </Card>
      )}
    </PageLayout>
  );
};

export default DriverAttenderRegistration;