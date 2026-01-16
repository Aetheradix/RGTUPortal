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
import { Tag } from "primereact/tag";

interface RouteStaffReport {
  id: number;
  routeName: string;
  vehicleNo: string;
  driverName: string;
  driverContact: string;
  attenderName: string;
  attenderContact: string;
  shift: string;
  totalStops: number;
}

const DriverAttenderRouteDetail: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [globalFilter, setGlobalFilter] = useState("");

  const [reportData] = useState<RouteStaffReport[]>([
    { 
      id: 1, 
      routeName: "Route-101 (M.P. Nagar)", 
      vehicleNo: "MP-04-HE-1234", 
      driverName: "Karan Yadav", 
      driverContact: "98260XXXXX", 
      attenderName: "Deepak Sahu", 
      attenderContact: "99260XXXXX", 
      shift: "Morning",
      totalStops: 12
    },
    { 
      id: 2, 
      routeName: "Route-102 (Lalghati)", 
      vehicleNo: "MP-04-GB-5678", 
      driverName: "Ramesh Kumar", 
      driverContact: "94250XXXXX", 
      attenderName: "Vijay Goud", 
      attenderContact: "91790XXXXX", 
      shift: "Morning",
      totalStops: 15
    },
    { 
      id: 3, 
      routeName: "Route-205 (Bairagarh)", 
      vehicleNo: "MP-04-AX-0001", 
      driverName: "Sohan Singh", 
      driverContact: "88120XXXXX", 
      attenderName: "Rahul Kushwah", 
      attenderContact: "70005XXXXX", 
      shift: "Evening",
      totalStops: 8
    },
  ]);

  const header = (
    <div className="flex flex-wrap justify-between items-center gap-3">
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText 
          type="search" 
          onInput={(e: any) => setGlobalFilter(e.target.value)} 
          placeholder="Search Route/Driver/Bus..." 
          className="w-80"
        />
      </span>
      <div className="flex gap-2">
        <Button icon="pi pi-file-excel" label="Export" className="p-button-success p-button-sm" />
        <Button icon="pi pi-print" label="Print" className="p-button-secondary p-button-sm" />
      </div>
    </div>
  );

  return (
    <PageLayout title="Transport Staffing Report">
      <Toast ref={toast} />

      <Card className="shadow-lg border-t-4 border-gray-800 text-left">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="m-0 text-gray-800 uppercase text-sm font-black tracking-widest">Driver & Attender Deployment Details</h3>
                <p className="text-gray-500 text-xs mt-1 font-bold">Session 2025-2026 | Active Fleet Staffing</p>
            </div>
            <Tag value="Live Status" severity="info" />
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
          breakpoint="960px"
        >
          <Column field="routeName" header="Route Name" sortable className="font-bold text-gray-800" />
          <Column field="vehicleNo" header="Vehicle No" sortable body={(r) => <Tag value={r.vehicleNo} severity="secondary" />} />
          
          <Column header="Driver Details" body={(r) => (
            <div className="flex flex-col">
                <span className="font-bold text-blue-900">{r.driverName}</span>
                <small className="text-gray-500"><i className="pi pi-phone text-[10px]" /> {r.driverContact}</small>
            </div>
          )} />

          <Column header="Attender Details" body={(r) => (
            <div className="flex flex-col">
                <span className="font-bold text-green-800">{r.attenderName}</span>
                <small className="text-gray-500"><i className="pi pi-phone text-[10px]" /> {r.attenderContact}</small>
            </div>
          )} />

          <Column field="shift" header="Shift" sortable body={(r) => (
            <Tag value={r.shift} severity={r.shift === 'Morning' ? 'warning' : 'info'} />
          )} />
          
          <Column field="totalStops" header="Total Stops" sortable style={{ textAlign: 'center' }} />
          
          <Column header="Action" body={() => (
            <Button icon="pi pi-map" className="p-button-text p-button-sm" label="View Path" />
          )} />
        </DataTable>
      </Card>
      
      <div className="mt-4 flex gap-4">
          <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 flex-1">
              <span className="text-xs font-black text-gray-600 uppercase">Total Drivers on Duty</span>
              <h4 className="m-0 text-xl">12</h4>
          </div>
          <div className="bg-gray-100 p-3 rounded-lg border border-gray-300 flex-1">
              <span className="text-xs font-black text-gray-600 uppercase">Total Attenders on Duty</span>
              <h4 className="m-0 text-xl">10</h4>
          </div>
      </div>
    </PageLayout>
  );
};

export default DriverAttenderRouteDetail;