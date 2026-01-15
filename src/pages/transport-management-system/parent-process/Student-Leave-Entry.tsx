import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Calendar } from "primereact/calendar";
import { InputTextarea } from "primereact/inputtextarea";
import { Tag } from "primereact/tag";

interface StudentLeave {
  id: number;
  studentName: string;
  rollNo: string;
  leaveType: string;
  fromDate: Date | null;
  toDate: Date | null;
  reason: string;
  status: "Pending" | "Approved" | "Rejected";
  appliedOn: Date;
}

const StudentLeaveEntry: React.FC = () => {
  const toast = useRef<Toast>(null);
  
  const emptyLeave: StudentLeave = {
    id: 0,
    studentName: "",
    rollNo: "",
    leaveType: "",
    fromDate: null,
    toDate: null,
    reason: "",
    status: "Pending",
    appliedOn: new Date(),
  };

  const [leaveList, setLeaveList] = useState<StudentLeave[]>([
    {
      id: 1,
      studentName: "Aditya Sharma",
      rollNo: "STU101",
      leaveType: "Sick Leave",
      fromDate: new Date("2025-02-10"),
      toDate: new Date("2025-02-12"),
      reason: "High Fever",
      status: "Approved",
      appliedOn: new Date("2025-02-08"),
    }
  ]);

  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');
  const [formData, setFormData] = useState<StudentLeave>(emptyLeave);

  const leaveTypes = [
    { label: "Sick Leave", value: "Sick Leave" },
    { label: "Casual Leave", value: "Casual Leave" },
    { label: "Family Function", value: "Family Function" },
    { label: "Other", value: "Other" }
  ];

  const studentOptions = [
    { label: "Aditya Sharma (STU101)", value: "Aditya Sharma", roll: "STU101" },
    { label: "Riya Verma (STU105)", value: "Riya Verma", roll: "STU105" }
  ];

  const saveLeaveRequest = () => {
    if (formData.studentName && formData.fromDate && formData.toDate && formData.reason) {
      const _leaves = [...leaveList];
      const newEntry = { ...formData, id: Math.floor(Math.random() * 1000) };
      _leaves.unshift(newEntry);
      
      setLeaveList(_leaves);
      setViewMode('list');
      toast.current?.show({ 
        severity: 'success', 
        summary: 'Request Submitted', 
        detail: 'Leave request sent to Admin/Teacher', 
        life: 3000 
      });
    } else {
      toast.current?.show({ severity: 'error', summary: 'Error', detail: 'All fields are required', life: 3000 });
    }
  };

  const getStatusSeverity = (status: string) => {
    switch (status) {
      case 'Approved': return 'success';
      case 'Pending': return 'warning';
      case 'Rejected': return 'danger';
      default: return null;
    }
  };

  return (
    <PageLayout title="Parent Portal">
      <Toast ref={toast} />

      {viewMode === 'list' ? (
        <div className="animate-fade-in">
          <div className="flex justify-between items-center mb-4">
            <div className="text-xl font-bold text-blue-900 uppercase">My Child's Leave History</div>
            <Button label="Apply New Leave" icon="pi pi-calendar-plus" className="p-button-primary" onClick={() => { setFormData(emptyLeave); setViewMode('form'); }} />
          </div>

          <Card>
            <DataTable value={leaveList} paginator rows={5} className="p-datatable-sm" showGridlines stripedRows>
              <Column field="studentName" header="Student" sortable />
              <Column field="leaveType" header="Type" />
              <Column field="fromDate" header="From" body={(r) => r.fromDate?.toLocaleDateString()} />
              <Column field="toDate" header="To" body={(r) => r.toDate?.toLocaleDateString()} />
              <Column field="status" header="Status" body={(r) => <Tag value={r.status} severity={getStatusSeverity(r.status)} />} className="text-center" />
              <Column field="appliedOn" header="Applied On" body={(r) => r.appliedOn.toLocaleDateString()} />
            </DataTable>
          </Card>
        </div>
      ) : (
        <div className="animate-fade-in text-left">
          <div className="flex items-center gap-2 mb-4">
            <Button icon="pi pi-arrow-left" className="p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
            <div className="text-xl font-bold text-blue-900 uppercase">Apply for Leave</div>
          </div>

          <Card title="Leave Application Form" className="shadow-sm border-t-4 border-blue-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Select Student *</label>
                <Dropdown 
                  value={formData.studentName} 
                  options={studentOptions} 
                  onChange={(e) => {
                    const sel = studentOptions.find(s => s.value === e.value);
                    setFormData({...formData, studentName: e.value, rollNo: sel?.roll || ""});
                  }} 
                  placeholder="Select Child" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">Leave Type *</label>
                <Dropdown 
                  value={formData.leaveType} 
                  options={leaveTypes} 
                  onChange={(e) => setFormData({...formData, leaveType: e.value})} 
                  placeholder="Select Reason Type" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">From Date *</label>
                <Calendar 
                  value={formData.fromDate} 
                  onChange={(e) => setFormData({...formData, fromDate: e.value as Date})} 
                  showIcon 
                  minDate={new Date()}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-bold text-sm">To Date *</label>
                <Calendar 
                  value={formData.toDate} 
                  onChange={(e) => setFormData({...formData, toDate: e.value as Date})} 
                  showIcon 
                  minDate={formData.fromDate || new Date()}
                />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-bold text-sm">Reason for Leave *</label>
                <InputTextarea 
                  value={formData.reason} 
                  onChange={(e) => setFormData({...formData, reason: e.target.value})} 
                  rows={3} 
                  placeholder="Describe the reason clearly..." 
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 pt-4 border-t">
              <Button label="Cancel" className="p-button-outlined p-button-secondary px-6" onClick={() => setViewMode('list')} />
              <Button label="Submit Application" icon="pi pi-send" className="p-button-success px-8" onClick={saveLeaveRequest} />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
};

export default StudentLeaveEntry;