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
import { Dropdown } from "primereact/dropdown";

interface RouteOccupancy {
  id: number;
  routeName: string;
  stopName: string;
  pickupCount: number;
  dropCount: number;
  capacity: number;
}

const RouteWisePickupDropReport: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedRoute, setSelectedRoute] = useState<any>(null);

  const [reportData] = useState<RouteOccupancy[]>([
    { id: 1, routeName: "Route-101 (MP Nagar)", stopName: "Chetak Bridge", pickupCount: 12, dropCount: 10, capacity: 50 },
    { id: 2, routeName: "Route-101 (MP Nagar)", stopName: "Jyoti Cinema", pickupCount: 15, dropCount: 15, capacity: 50 },
    { id: 3, routeName: "Route-102 (Lalghati)", stopName: "VIP Road", pickupCount: 8, dropCount: 8, capacity: 40 },
    { id: 4, routeName: "Route-102 (Lalghati)", stopName: "Collectorate", pickupCount: 20, dropCount: 18, capacity: 40 },
  ]);

  const routeOptions = [
    { label: "All Routes", value: null },
    { label: "Route-101 (MP Nagar)", value: "Route-101 (MP Nagar)" },
    { label: "Route-102 (Lalghati)", value: "Route-102 (Lalghati)" }
  ];

  const header = (
    <div className="flex flex-wrap justify-between items-center gap-3">
      <div className="flex gap-2">
        <Dropdown 
          value={selectedRoute} 
          options={routeOptions} 
          onChange={(e) => setSelectedRoute(e.value)} 
          placeholder="Filter by Route" 
          className="w-64"
        />
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText 
            type="search" 
            onInput={(e: any) => setGlobalFilter(e.target.value)} 
            placeholder="Search Stop..." 
            className="w-64"
          />
        </span>
      </div>
      <div className="flex gap-2">
        <Button icon="pi pi-file-pdf" label="Export PDF" className="p-button-danger p-button-sm" />
        <Button icon="pi pi-file-excel" label="Export Excel" className="p-button-success p-button-sm" />
      </div>
    </div>
  );

  return (
    <PageLayout title="Occupancy Analytics">
      <Toast ref={toast} />

      <Card className="shadow-lg border-t-4 border-gray-800 text-left">
        <div className="flex justify-between items-center">
            <h3 className="m-0 text-gray-800 uppercase text-sm font-black tracking-widest">
              Route-wise Student Pickup & Drop Statistics
            </h3>
        </div>
        <Divider className="my-3" />
        
        <DataTable 
          value={reportData} 
          header={header}
          paginator rows={10} 
          globalFilter={globalFilter}
          rowGroupMode="subheader" 
          groupRowsBy="routeName"
          sortMode="single" 
          sortField="routeName" 
          sortOrder={1}
          rowGroupHeaderTemplate={(data) => (
            <React.Fragment>
                <span className="font-black text-blue-900 ml-2 uppercase text-xs tracking-tighter bg-blue-50 px-2 py-1 rounded border border-blue-200">
                    Route: {data.routeName}
                </span>
            </React.Fragment>
          )}
          className="p-datatable-sm mt-3" 
          showGridlines 
          stripedRows
        >
          <Column field="stopName" header="Stop Name" sortable className="font-bold" />
          
          <Column field="pickupCount" header="Morning Pickup" body={(r) => (
            <div className="flex items-center gap-2">
                <i className="pi pi-sign-in text-blue-500 text-sm" />
                <span>{r.pickupCount} Students</span>
            </div>
          )} />

          <Column field="dropCount" header="Evening Drop" body={(r) => (
            <div className="flex items-center gap-2">
                <i className="pi pi-sign-out text-orange-500 text-sm" />
                <span>{r.dropCount} Students</span>
            </div>
          )} />

          <Column header="Utilization (%)" body={(r) => {
            const percentage = ((r.pickupCount / r.capacity) * 100).toFixed(1);
            return (
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
                    <small className="text-[10px] font-bold">{percentage}%</small>
                </div>
            )
          }} />

          <Column header="Status" body={(r) => (
            r.pickupCount > (r.capacity * 0.9) ? 
            <span className="text-red-600 font-bold text-xs"><i className="pi pi-exclamation-triangle mr-1" />Overcrowded</span> : 
            <span className="text-green-600 font-bold text-xs"><i className="pi pi-check mr-1" />Optimal</span>
          )} />
        </DataTable>
      </Card>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-blue-800">
              <p className="text-xs font-black text-gray-500 uppercase m-0">Avg. Morning Load</p>
              <h2 className="m-0 text-xl font-bold">88%</h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-600">
              <p className="text-xs font-black text-gray-500 uppercase m-0">Avg. Evening Load</p>
              <h2 className="m-0 text-xl font-bold">82%</h2>
          </div>
          <div className="bg-white p-4 rounded-lg shadow border-l-4 border-red-600">
              <p className="text-xs font-black text-gray-500 uppercase m-0">Critical Stops (90%+)</p>
              <h2 className="m-0 text-xl font-bold">04</h2>
          </div>
      </div>
    </PageLayout>
  );
};

export default RouteWisePickupDropReport;