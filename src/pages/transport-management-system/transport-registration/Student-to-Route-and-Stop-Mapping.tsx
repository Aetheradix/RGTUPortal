/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Tag } from "primereact/tag";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Divider } from "primereact/divider";

interface StudentMapping {
  id: number;
  studentName: string;
  rollNo: string;
  courseBranch: string;
  routeId: string | null;
  stopId: string | null;
  feeAmount: number;
  startDate: Date | null;
  tripType: string;
  status: "Active" | "Not-Opted";
}

const StudentToRouteMapping: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');

  const [students, setStudents] = useState<StudentMapping[]>([
    { id: 1, studentName: "Rahul Verma", rollNo: "CS202401", courseBranch: "B.Tech (CS)", routeId: "R1", stopId: "S1", feeAmount: 1500, startDate: new Date(), tripType: "Both", status: "Active" },
    { id: 2, studentName: "Priya Singh", rollNo: "CS202445", courseBranch: "B.Tech (CS)", routeId: null, stopId: null, feeAmount: 0, startDate: null, tripType: "Both", status: "Not-Opted" },
  ]);

  const [formData, setFormData] = useState<Partial<StudentMapping>>({
    tripType: "Both",
    status: "Active"
  });

  const routeOptions = [
    { label: "Route-101 (MP Nagar)", value: "R1" }, 
    { label: "Route-102 (Lalghati)", value: "R2" }
  ];

  const stopOptions: any = {
    "R1": [{ label: "Chetak Bridge", value: "S1", fee: 1200 }, { label: "Jyoti Cinema", value: "S2", fee: 1500 }],
    "R2": [{ label: "VIP Road", value: "S3", fee: 1800 }, { label: "Data Colony", value: "S4", fee: 2000 }]
  };

  const handleSave = () => {
    if (!formData.id || !formData.routeId || !formData.stopId) {
      toast.current?.show({ severity: 'error', summary: 'Validation', detail: 'Please fill all mandatory fields' });
      return;
    }
    setStudents(prev => prev.map(s => s.id === formData.id ? { ...s, ...formData as StudentMapping, status: "Active" } : s));
    toast.current?.show({ severity: 'success', summary: 'Success', detail: 'Transport mapped successfully' });
    setViewMode('list');
  };

  const handleClear = () => {
    setFormData({ tripType: "Both", status: "Active" });
  };

  if (viewMode === 'list') {
    return (
      <PageLayout title="Student Transport">
        <Toast ref={toast} />
        <Card title="Student Transport List" className="shadow-sm border-t-4 border-blue-900 text-left">
          <div className="flex justify-end mb-4">
            <Button label="Map Student to Route" icon="pi pi-plus" className="p-button-primary" onClick={() => { handleClear(); setViewMode('form'); }} />
          </div>
          <DataTable value={students} paginator rows={10} className="p-datatable-sm" showGridlines stripedRows>
            <Column field="rollNo" header="Roll No" sortable />
            <Column field="studentName" header="Student Name" sortable />
            <Column field="courseBranch" header="Branch" />
            <Column header="Assigned Route" body={(r: StudentMapping) => {
              const route = routeOptions.find(o => o.value === r.routeId);
              return route ? <span className="font-semibold text-blue-700">{route.label}</span> : <span className="text-gray-400">Not Assigned</span>;
            }} />
            <Column field="feeAmount" header="Fee (₹)" />
            <Column header="Status" body={(r) => <Tag value={r.status} severity={r.status === 'Active' ? 'success' : 'info'} />} />
            <Column header="Action" body={(r) => <Button icon="pi pi-pencil" className="p-button-text" onClick={() => { setFormData(r); setViewMode('form'); }} />} />
          </DataTable>
        </Card>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Transport Mapping Form">
      <Toast ref={toast} />
      <div className="max-w-5xl mx-auto text-left py-2">
        <div className="flex items-center justify-between mb-4 bg-white p-3 rounded shadow-sm">
          <div className="flex items-center gap-3">
            <Button icon="pi pi-arrow-left" className="p-button-rounded p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
            <h2 className="text-xl font-bold m-0 text-gray-800">Assign Student to Route</h2>
          </div>
          <Tag value="Session: 2025-26" severity="warning" className="px-3" />
        </div>

        <Card className="shadow-lg border-t-4 border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           
            <div className="col-span-1 md:col-span-3">
               <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Student Information</h4>
               <Divider className="my-2" />
            </div>

            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="font-bold text-sm text-gray-700">Student Name / Roll No *</label>
              <Dropdown 
                value={formData.id} 
                options={students.map(s => ({ label: `${s.studentName} (${s.rollNo}) - ${s.courseBranch}`, value: s.id }))} 
                onChange={(e) => setFormData({ ...formData, id: e.value })} 
                filter placeholder="Search student..." className="w-full" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-gray-700">Academic Session</label>
              <InputText value="2025-26" disabled className="bg-gray-50" />
            </div>

            <div className="col-span-1 md:col-span-3 mt-2">
               <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Route & Pickup Details</h4>
               <Divider className="my-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-gray-700">Select Route *</label>
              <Dropdown 
                value={formData.routeId} 
                options={routeOptions} 
                onChange={(e) => setFormData({ ...formData, routeId: e.value, stopId: null })} 
                placeholder="Select Route" className="w-full" 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-gray-700">Select Stop *</label>
              <Dropdown 
                value={formData.stopId} 
                options={formData.routeId ? stopOptions[formData.routeId] : []} 
                onChange={(e) => {
                  const selectedStop = stopOptions[formData.routeId!].find((s:any) => s.value === e.value);
                  setFormData({ ...formData, stopId: e.value, feeAmount: selectedStop?.fee });
                }} 
                placeholder="Select Stop" className="w-full" disabled={!formData.routeId} 
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-gray-700">Trip Type</label>
              <Dropdown 
                value={formData.tripType} 
                options={['Both', 'Pickup Only', 'Drop Only']} 
                onChange={(e) => setFormData({ ...formData, tripType: e.value })} 
                className="w-full" 
              />
            </div>

            <div className="col-span-1 md:col-span-3 mt-2">
               <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Billing & Effective Date</h4>
               <Divider className="my-2" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-gray-700">Monthly Transport Fee (₹)</label>
              <InputText 
                value={formData.feeAmount?.toString() || ''} 
                onChange={(e) => setFormData({...formData, feeAmount: Number(e.target.value)})} 
                type="number" 
                className="font-bold text-blue-800"
                placeholder="0.00"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm text-gray-700">Start Date *</label>
              <Calendar 
                value={formData.startDate} 
                onChange={(e) => setFormData({ ...formData, startDate: e.value as Date })} 
                showIcon 
                placeholder="Effective From"
                className="w-full"
              />
            </div>

          </div>

          <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
            <Button label="Clear Form" icon="pi pi-refresh" className="p-button-outlined p-button-secondary" onClick={handleClear} />
            <div className="flex gap-3">
              <Button label="Cancel" icon="pi pi-text p-button-secondary" onClick={() => setViewMode('list')} />
              <Button label="Save Mapping" icon="pi pi-save" className="p-button-success px-8 shadow-sm" onClick={handleSave} />
            </div>
          </div>
        </Card>
      </div>
    </PageLayout>
  );
};

export default StudentToRouteMapping;