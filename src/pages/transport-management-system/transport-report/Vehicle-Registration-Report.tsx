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
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";

interface VehicleReport {
  id: number;
  regNo: string;
  vehicleType: string;
  model: string;
  chassisNo: string;
  rcExpiry: string;
  insuranceExpiry: string;
  fitnessExpiry: string;
  status: "Active" | "Maintenance" | "Out of Service";
}

const VehicleRegistrationReport: React.FC = () => {
  const toast = useRef<Toast>(null);
  const [globalFilter, setGlobalFilter] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const [data] = useState<VehicleReport[]>([
    { 
      id: 1, 
      regNo: "MP-04-HE-1234", 
      vehicleType: "Bus (50 Seater)", 
      model: "TATA Starbus 2023", 
      chassisNo: "CH-9981273645", 
      rcExpiry: "2030-12-31", 
      insuranceExpiry: "2026-06-15", 
      fitnessExpiry: "2026-05-20",
      status: "Active" 
    },
    { 
      id: 2, 
      regNo: "MP-04-GB-5678", 
      vehicleType: "Bus (40 Seater)", 
      model: "Eicher Skyline 2022", 
      chassisNo: "CH-8812734412", 
      rcExpiry: "2029-05-10", 
      insuranceExpiry: "2025-11-20", 
      fitnessExpiry: "2026-01-10",
      status: "Maintenance" 
    },
    { 
      id: 3, 
      regNo: "MP-04-AX-0001", 
      vehicleType: "Van", 
      model: "Force Traveller 2024", 
      chassisNo: "CH-1122334455", 
      rcExpiry: "2034-01-01", 
      insuranceExpiry: "2027-02-28", 
      fitnessExpiry: "2027-01-15",
      status: "Active" 
    },
  ]);

  const vehicleTypes = [
    { label: "All Types", value: null },
    { label: "Bus", value: "Bus" },
    { label: "Van", value: "Van" },
    { label: "Ambulance", value: "Ambulance" }
  ];

  const getExpirySeverity = (dateStr: string) => {
    const expiryDate = new Date(dateStr);
    const today = new Date();
    const diffDays = Math.ceil((expiryDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return "danger"; 
    if (diffDays < 30) return "warning";
    return "success";
  };

  const header = (
    <div className="flex flex-wrap justify-between items-center gap-3">
      <div className="flex items-center gap-3">
        <Dropdown 
            value={selectedType} 
            options={vehicleTypes} 
            onChange={(e) => setSelectedType(e.value)} 
            placeholder="Filter by Type" 
            className="w-48"
        />
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText 
            type="search" 
            onInput={(e: any) => setGlobalFilter(e.target.value)} 
            placeholder="Search Reg No/Model..." 
            className="w-64"
          />
        </span>
      </div>
      <div className="flex gap-2">
        <Button icon="pi pi-file-excel" label="Export Excel" className="p-button-success p-button-sm" />
        <Button icon="pi pi-file-pdf" label="Print Report" className="p-button-danger p-button-sm" />
      </div>
    </div>
  );

  return (
    <PageLayout title="Transport Analytics">
      <Toast ref={toast} />
      
      <div className="mb-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-2 border-l-4 border-blue-600 shadow-sm">
          <p className="m-0 text-sm text-gray-500 font-bold uppercase">Total Fleet</p>
          <h2 className="m-0 text-2xl font-black">08</h2>
        </Card>
        <Card className="p-2 border-l-4 border-green-600 shadow-sm">
          <p className="m-0 text-sm text-gray-500 font-bold uppercase">Active Vehicles</p>
          <h2 className="m-0 text-2xl font-black text-green-700">06</h2>
        </Card>
        <Card className="p-2 border-l-4 border-orange-600 shadow-sm">
          <p className="m-0 text-sm text-gray-500 font-bold uppercase">Expiring Soon</p>
          <h2 className="m-0 text-2xl font-black text-orange-600">02</h2>
        </Card>
        <Card className="p-2 border-l-4 border-red-600 shadow-sm">
          <p className="m-0 text-sm text-gray-500 font-bold uppercase">Maintenance</p>
          <h2 className="m-0 text-2xl font-black text-red-600">01</h2>
        </Card>
      </div>

      <Card className="shadow-lg border-t-4 border-gray-800 text-left">
        <h3 className="m-0 mb-2 text-gray-800 uppercase text-sm font-black tracking-widest">Vehicle Master Registration Report</h3>
        <Divider className="my-2" />
        
        <DataTable 
          value={data} 
          header={header}
          paginator rows={10} 
          globalFilter={globalFilter}
          className="p-datatable-sm mt-3" 
          showGridlines 
          stripedRows
        >
          <Column field="regNo" header="Registration No" sortable className="font-bold text-blue-900" />
          <Column field="vehicleType" header="Type" sortable />
          <Column field="model" header="Make & Model" />
          <Column field="insuranceExpiry" header="Insurance Expiry" body={(r) => (
             <Tag value={r.insuranceExpiry} severity={getExpirySeverity(r.insuranceExpiry)} />
          )} />
          <Column field="fitnessExpiry" header="Fitness Expiry" body={(r) => (
             <Tag value={r.fitnessExpiry} severity={getExpirySeverity(r.fitnessExpiry)} />
          )} />
          <Column header="Vehicle Status" body={(r) => (
            <Tag value={r.status} severity={r.status === 'Active' ? 'success' : r.status === 'Maintenance' ? 'warning' : 'danger'} />
          )} />
          <Column header="Action" body={() => <Button icon="pi pi-external-link" className="p-button-text" label="Details" />} />
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default VehicleRegistrationReport;