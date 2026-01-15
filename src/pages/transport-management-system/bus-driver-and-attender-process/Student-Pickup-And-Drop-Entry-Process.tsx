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
import { Calendar } from "primereact/calendar";
import { Divider } from "primereact/divider";
import { Checkbox } from "primereact/checkbox";

interface AttendanceLog {
  id: number;
  date: string;
  route: string;
  tripType: string;
  presentCount: number;
  totalCount: number;
}

interface AttendanceEntry {
  studentId: number;
  rollNo: string;
  name: string;
  stopName: string;
  isPresent: boolean;
}

const StudentPickupDropEntry: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [viewMode, setViewMode] = useState<'list' | 'form'>('list');

  const [logs, setLogs] = useState<AttendanceLog[]>([
    { id: 1, date: "14/01/2026", route: "Route-101 (MP Nagar)", tripType: "Pickup", presentCount: 45, totalCount: 50 },
    { id: 2, date: "14/01/2026", route: "Route-102 (Lalghati)", tripType: "Pickup", presentCount: 38, totalCount: 40 },
    { id: 3, date: "13/01/2026", route: "Route-101 (MP Nagar)", tripType: "Drop", presentCount: 48, totalCount: 50 },
  ]);

  const [selectedRoute, setSelectedRoute] = useState<any>(null);
  const [tripType, setTripType] = useState<string>('Pickup');
  const [entryDate, setEntryDate] = useState<Date>(new Date());

  const [attendanceList, setAttendanceList] = useState<AttendanceEntry[]>([
    { studentId: 1, rollNo: "CS202401", name: "Rahul Verma", stopName: "Chetak Bridge", isPresent: false },
    { studentId: 2, rollNo: "CS202445", name: "Priya Singh", stopName: "Jyoti Cinema", isPresent: false },
    { studentId: 3, rollNo: "ME202412", name: "Amit Sharma", stopName: "Board Office", isPresent: false },
    { studentId: 4, rollNo: "EE202409", name: "Sumit Raj", stopName: "M.P. Nagar", isPresent: false },
  ]);

  const handleAttendanceChange = (id: number, checked: boolean) => {
    setAttendanceList(prev => prev.map(item => 
      item.studentId === id ? { ...item, isPresent: checked } : item
    ));
  };

  const handleSave = () => {
    if (!selectedRoute) {
      toast.current?.show({ severity: 'error', summary: 'Error', detail: 'Please select a route' });
      return;
    }

    const newLog: AttendanceLog = {
      id: Date.now(),
      date: entryDate.toLocaleDateString('en-GB'),
      route: selectedRoute.label,
      tripType: tripType,
      presentCount: attendanceList.filter(s => s.isPresent).length,
      totalCount: attendanceList.length
    };

    setLogs([newLog, ...logs]);
    toast.current?.show({ severity: 'success', summary: 'Saved', detail: 'Attendance Recorded' });
    setViewMode('list');
  };
  const renderListView = () => (
    <Card title="Student Trip Attendance Logs" className="shadow-sm border-t-4 border-blue-900 text-left">
      <div className="flex justify-between items-center mb-4">
        <span className="text-gray-500 font-medium">Showing recent trip records</span>
        <Button label="New Trip Entry" icon="pi pi-plus" className="p-button-primary shadow-md" onClick={() => setViewMode('form')} />
      </div>
      
      <DataTable value={logs} paginator rows={10} className="p-datatable-sm" showGridlines stripedRows>
        <Column field="date" header="Date" sortable />
        <Column field="route" header="Route Name" sortable />
        <Column field="tripType" header="Trip Type" body={(r) => (
            <Tag value={r.tripType} severity={r.tripType === 'Pickup' ? 'info' : 'warning'} />
        )} />
        <Column header="Attendance Stats" body={(r) => (
            <div className="font-bold">
                {r.presentCount} / {r.totalCount} <small className="text-gray-500 font-normal ml-1">Students</small>
            </div>
        )} />
        <Column header="Action" body={() => (
            <div className="flex gap-2">
                <Button icon="pi pi-eye" className="p-button-text p-button-sm" label="View" />
                <Button icon="pi pi-print" className="p-button-text p-button-sm p-button-secondary" />
            </div>
        )} />
      </DataTable>
    </Card>
  );

  const renderFormView = () => (
    <div className="max-w-6xl mx-auto text-left py-2">
      <div className="flex items-center justify-between mb-4 bg-white p-3 rounded shadow-sm border">
        <div className="flex items-center gap-3">
          <Button icon="pi pi-arrow-left" className="p-button-rounded p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
          <h2 className="text-xl font-bold m-0 text-gray-800">New Pickup/Drop Entry</h2>
        </div>
        <div className="flex gap-2">
            <Tag value="Session: 2025-26" severity="secondary" />
            <Tag value={tripType} severity="success" />
        </div>
      </div>

      <Card className="shadow-lg border-t-4 border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="col-span-1 md:col-span-3">
             <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Step 1: Trip Identification</h4>
             <Divider className="my-2" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Service Date</label>
            <Calendar value={entryDate} onChange={(e) => setEntryDate(e.value as Date)} showIcon dateFormat="dd/mm/yy" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Select Route *</label>
            <Dropdown 
                value={selectedRoute} 
                options={[
                    { label: "Route-101 (MP Nagar)", value: "R1" },
                    { label: "Route-102 (Lalghati)", value: "R2" }
                ]} 
                onChange={(e) => setSelectedRoute(e.target.value)} 
                placeholder="Select Bus Route" 
                className="w-full" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-bold text-sm text-gray-700">Trip Category</label>
            <Dropdown 
                value={tripType} 
                options={['Pickup', 'Drop']} 
                onChange={(e) => setTripType(e.value)} 
                className="w-full" 
            />
          </div>

          <div className="col-span-1 md:col-span-3 mt-4">
             <h4 className="m-0 text-gray-800 uppercase text-sm font-black tracking-wider">Step 2: Marking Attendance</h4>
             <Divider className="my-2" />
             
             <DataTable value={attendanceList} className="p-datatable-sm mt-2 border rounded overflow-hidden" showGridlines stripedRows>
                <Column header="Select" body={(r: AttendanceEntry) => (
                    <Checkbox onChange={e => handleAttendanceChange(r.studentId, e.checked ?? false)} checked={r.isPresent} />
                )} style={{ width: '4rem', textAlign: 'center' }} />
                <Column field="rollNo" header="Roll No" />
                <Column field="name" header="Student Name" />
                <Column field="stopName" header="Assigned Stop" />
                <Column header="Status" body={(r: AttendanceEntry) => (
                    r.isPresent ? <Tag value="Present" severity="success" rounded /> : <Tag value="Absent" severity="danger" rounded />
                )} />
             </DataTable>
          </div>
        </div>

        <div className="flex justify-between mt-10 pt-6 border-t border-gray-100">
          <Button label="Mark All Students Present" icon="pi pi-check-circle" className="p-button-outlined p-button-info" onClick={() => setAttendanceList(prev => prev.map(s => ({...s, isPresent: true})))} />
          <div className="flex gap-3">
            <Button label="Cancel" icon="pi pi-times" className="p-button-text p-button-secondary" onClick={() => setViewMode('list')} />
            <Button label="Save Attendance Entry" icon="pi pi-save" className="p-button-success px-8 shadow-md" onClick={handleSave} />
          </div>
        </div>
      </Card>
    </div>
  );

  return (
    <PageLayout title="Transport Trip Process">
      <Toast ref={toast} />
      {viewMode === 'list' ? renderListView() : renderFormView()}
    </PageLayout>
  );
};

export default StudentPickupDropEntry;