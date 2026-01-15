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
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";

interface CancellationLog {
  id: number;
  studentName: string;
  rollNo: string;
  routeName: string;
  cancelFrom: Date | null;
  cancelTo: Date | null;
  type: "Temporary" | "Permanent";
  reason: string;
  status: "Processed" | "Pending";
}

const PickupCancellationDetails: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');

  const [cancelLogs, setCancelLogs] = useState<CancellationLog[]>([
    { 
      id: 1, 
      studentName: "Aditya Jain", 
      rollNo: "CS202410", 
      routeName: "Route-101 (MP Nagar)", 
      cancelFrom: new Date(2026, 0, 15), 
      cancelTo: new Date(2026, 0, 20), 
      type: "Temporary", 
      reason: "Health Issues", 
      status: "Processed" 
    },
    { 
      id: 2, 
      studentName: "Sana Khan", 
      rollNo: "EC202455", 
      routeName: "Route-105 (Indrapuri)", 
      cancelFrom: new Date(2026, 0, 14), 
      cancelTo: null, 
      type: "Permanent", 
      reason: "Shifted to Private Vehicle", 
      status: "Pending" 
    },
  ]);

  const [formData, setFormData] = useState<Partial<CancellationLog>>({
    type: "Temporary",
    status: "Pending"
  });

  const handleSave = () => {
    if (!formData.studentName || !formData.cancelFrom || !formData.reason) {
      toast.current?.show({ severity: 'error', summary: 'Missing Input', detail: 'Student, Date and Reason are mandatory' });
      return;
    }

    const newLog = { ...formData, id: Date.now() } as CancellationLog;
    setCancelLogs([newLog, ...cancelLogs]);
    toast.current?.show({ severity: 'success', summary: 'Recorded', detail: 'Cancellation request saved successfully' });
    setViewMode('list');
  };

  const renderListView = () => (
    <Card title="Transport Cancellation Logs" className="shadow-sm border-t-4 border-blue-900 text-left">
      <div className="flex justify-end mb-4">
        <Button label="Request Cancellation" icon="pi pi-calendar-minus" onClick={() => { setFormData({type: 'Temporary'}); setViewMode('form'); }} />
      </div>
      <DataTable value={cancelLogs} paginator rows={10} className="p-datatable-sm" showGridlines stripedRows>
        <Column field="studentName" header="Student Name" sortable />
        <Column field="rollNo" header="Roll No" />
        <Column field="routeName" header="Route" />
        <Column field="type" header="Type" body={(r) => (
            <Tag value={r.type} severity={r.type === 'Permanent' ? 'danger' : 'warning'} />
        )} />
        <Column header="Period" body={(r) => (
            <span className="text-sm">
                {r.cancelFrom?.toLocaleDateString()} {r.cancelTo ? `to ${r.cancelTo.toLocaleDateString()}` : '(Ongoing)'}
            </span>
        )} />
        <Column field="status" header="Status" body={(r) => <Tag value={r.status} severity={r.status === 'Processed' ? 'success' : 'info'} />} />
        <Column header="Action" body={() => <Button icon="pi pi-info-circle" className="p-button-text" />} />
      </DataTable>
    </Card>
  );

  const renderFormView = () => (
    <div className="max-w-5xl mx-auto text-left py-2">
      <div className="flex items-center gap-3 mb-4 bg-white p-3 rounded shadow-sm border">
        <Button icon="pi pi-arrow-left" className="p-button-rounded p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
        <h2 className="text-xl font-bold m-0 text-gray-800">New Cancellation Request</h2>
      </div>

      <Card className="shadow-lg border-t-4 border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="col-span-1 md:col-span-3">
             <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Student & Route Info</h4>
             <Divider className="my-2" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Search Student (Roll/Name) *</label>
            <InputText value={formData.studentName || ''} onChange={(e) => setFormData({ ...formData, studentName: e.target.value })} placeholder="e.g. CS202401" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Route Assigned</label>
            <InputText value={formData.routeName || ''} onChange={(e) => setFormData({ ...formData, routeName: e.target.value })} placeholder="Fetch Auto on selection" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Cancellation Type</label>
            <Dropdown 
                value={formData.type} 
                options={['Temporary', 'Permanent']} 
                onChange={(e) => setFormData({ ...formData, type: e.value })} 
                className="w-full" 
            />
          </div>

          <div className="col-span-1 md:col-span-3 mt-4">
             <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Duration & Reason</h4>
             <Divider className="my-2" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Effective From *</label>
            <Calendar value={formData.cancelFrom} onChange={(e) => setFormData({ ...formData, cancelFrom: e.value as Date })} showIcon className="w-full" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Effective Up To {formData.type === 'Permanent' && '(N/A)'}</label>
            <Calendar value={formData.cancelTo} onChange={(e) => setFormData({ ...formData, cancelTo: e.value as Date })} showIcon className="w-full" disabled={formData.type === 'Permanent'} />
          </div>

          <div className="col-span-1 md:col-span-3">
            <label className="font-bold text-sm text-gray-700">Reason for Cancellation *</label>
            <InputTextarea rows={3} value={formData.reason || ''} onChange={(e) => setFormData({ ...formData, reason: e.target.value })} className="w-full" placeholder="Specify reason (Medical/Relocating/etc.)" />
          </div>

        </div>

        <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
          <Button label="Clear" icon="pi pi-refresh" className="p-button-outlined p-button-secondary" />
          <div className="flex gap-3">
            <Button label="Cancel" icon="pi pi-times" className="p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
            <Button label="Submit Request" icon="pi pi-check" className="p-button-danger px-8 shadow-md" onClick={handleSave} />
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <PageLayout title="Transport Service Cancellation">
      <Toast ref={toast} />
      {viewMode === 'list' ? renderListView() : renderFormView()}
    </PageLayout>
  );
};

export default PickupCancellationDetails;