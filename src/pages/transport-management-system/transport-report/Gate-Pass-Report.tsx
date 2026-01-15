/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { Toast } from "primereact/toast";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Tag } from "primereact/tag";

interface GatePassLog {
  id: number;
  passNo: string;
  vehicleNo: string;
  driverName: string;
  outTime: string;
  inTime: string | null;
  outReading: number;
  inReading: number | null;
  purpose: string;
  status: "In-Transit" | "Returned";
}

const GatePassReport: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [globalFilter, setGlobalFilter] = useState("");
  const [dates, setDates] = useState<any>(null);

  const [reportData] = useState<GatePassLog[]>([
    { 
      id: 1, 
      passNo: "GP/26/1001", 
      vehicleNo: "MP-04-HE-1234", 
      driverName: "Karan Yadav", 
      outTime: "14/01/2026 08:00 AM", 
      inTime: "14/01/2026 10:30 AM", 
      outReading: 45200, 
      inReading: 45245, 
      purpose: "Regular Student Pickup",
      status: "Returned" 
    },
    { 
      id: 2, 
      passNo: "GP/26/1002", 
      vehicleNo: "MP-04-GB-5678", 
      driverName: "Ramesh Kumar", 
      outTime: "14/01/2026 08:15 AM", 
      inTime: null, 
      outReading: 32100, 
      inReading: null, 
      purpose: "Regular Student Pickup",
      status: "In-Transit" 
    },
    { 
      id: 3, 
      passNo: "GP/26/1003", 
      vehicleNo: "MP-04-AX-0001", 
      driverName: "Sohan Singh", 
      outTime: "14/01/2026 09:00 AM", 
      inTime: "14/01/2026 01:00 PM", 
      outReading: 15600, 
      inReading: 15680, 
      purpose: "Maintenance / Workshop",
      status: "Returned" 
    },
  ]);

  const header = (
    <div className="flex flex-wrap justify-between items-center gap-3">
      <div className="flex gap-2">
        <Calendar 
            value={dates} 
            onChange={(e) => setDates(e.value)} 
            selectionMode="range" 
            readOnlyInput 
            placeholder="Filter Date Range" 
            className="w-64"
            showIcon
        />
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText 
            type="search" 
            onInput={(e: any) => setGlobalFilter(e.target.value)} 
            placeholder="Pass No / Vehicle / Driver" 
            className="w-64"
          />
        </span>
      </div>
      <div className="flex gap-2">
        <Button icon="pi pi-file-excel" label="Excel" className="p-button-success p-button-sm" />
        <Button icon="pi pi-print" label="Print All" className="p-button-secondary p-button-sm" />
      </div>
    </div>
  );

  return (
    <PageLayout title="Security & Compliance">
      <Toast ref={toast} />

      <Card className="shadow-lg border-t-4 border-gray-800 text-left">
        <div className="flex justify-between items-center">
            <div>
                <h3 className="m-0 text-gray-800 uppercase text-sm font-black tracking-widest">
                    Daily Vehicle Gate Pass Report
                </h3>
                <p className="text-gray-500 text-xs font-bold mt-1">Tracks vehicle movement in and out of campus</p>
            </div>
            <Tag value="Official Copy" severity="secondary" />
        </div>
        
        <Divider className="my-3" />
        
        <DataTable 
          value={reportData} 
          header={header}
          paginator rows={10} 
          globalFilter={globalFilter}
          className="p-datatable-sm mt-3" 
          showGridlines 
          stripedRows
        >
          <Column field="passNo" header="Pass No" sortable className="font-bold text-blue-900" />
          <Column field="vehicleNo" header="Vehicle No" sortable />
          <Column field="driverName" header="Driver" sortable />
          
          <Column header="Movement Details" body={(r) => (
            <div className="text-[11px] leading-tight">
                <div className="text-red-600 font-bold uppercase tracking-tighter">OUT: {r.outTime}</div>
                <div className="text-green-700 font-bold uppercase tracking-tighter mt-1">IN: {r.inTime || '---'}</div>
            </div>
          )} />

          <Column header="KMs Traveled" body={(r) => (
            r.inReading && r.outReading ? 
            <span className="font-black text-gray-700">{r.inReading - r.outReading} KMs</span> : 
            <span className="text-gray-400 italic">Running...</span>
          )} />

          <Column field="purpose" header="Purpose" className="text-xs" />
          
          <Column header="Status" body={(r) => (
            <Tag value={r.status} severity={r.status === 'Returned' ? 'success' : 'warning'} />
          )} />

          <Column header="Action" body={() => (
            <Button icon="pi pi-file-pdf" className="p-button-text p-button-danger p-button-sm" label="Pass" />
          )} />
        </DataTable>
      </Card>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded shadow border-l-4 border-gray-800">
              <span className="text-[10px] font-black text-gray-500 uppercase block">Vehicles Still Outside</span>
              <h2 className="m-0 text-xl font-bold">01</h2>
          </div>
          <div className="bg-white p-3 rounded shadow border-l-4 border-gray-800">
              <span className="text-[10px] font-black text-gray-500 uppercase block">Total Movements (Today)</span>
              <h2 className="m-0 text-xl font-bold">15</h2>
          </div>
      </div>
    </PageLayout>
  );
};

export default GatePassReport;