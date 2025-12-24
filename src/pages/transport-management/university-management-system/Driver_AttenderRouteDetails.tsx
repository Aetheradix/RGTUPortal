import { useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import PageLayout from "@/components/PageLayout";

interface DriverRouteDetail {
  id: number;
  routeNo: string;
  registrationType: string;
  nameDriverAttender: string;
  status: string;
}

export default function DriverAttenderRouteDetails() {
  const [showList, setShowList] = useState(false);
  const [filters, setFilters] = useState({ routeNo: null, busStop: null });

  const routeOptions = [
    { label: "RUT001", value: "RUT001" },
    { label: "RUT002", value: "RUT002" },
  ];

  const busStopOptions = [
    { label: "All", value: "ALL" },
    { label: "Gautam Nagar", value: "GAUTAM_NAGAR" },
  ];

  const listData: DriverRouteDetail[] = [
    {
      id: 1,
      routeNo: "RUT001",
      registrationType: "Driver",
      nameDriverAttender: "Pankaj Pandey",
      status: "Active",
    },
    {
      id: 2,
      routeNo: "RUT002",
      registrationType: "Attender",
      nameDriverAttender: "Ravi Shukla",
      status: "Active",
    },
  ];

  const statusBodyTemplate = (rowData: DriverRouteDetail) => {
    return (
      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">
        {rowData.status}
      </span>
    );
  };

  return (
    <PageLayout title="Driver Attender Route Details">
      <div className="space-y-6">
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Driver Attender Route Details
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Select Route No. <span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={filters.routeNo}
                options={routeOptions}
                placeholder="Select Route"
                className="w-full"
                onChange={(e) => setFilters({ ...filters, routeNo: e.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Select Bus Stop Name <span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={filters.busStop}
                options={busStopOptions}
                placeholder="Select Bus Stop"
                className="w-full"
                onChange={(e) => setFilters({ ...filters, busStop: e.value })}
              />
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              label="Search Details"
              icon="pi pi-search"
              className="bg-blue-700 px-8 shadow-md"
              onClick={() => setShowList(true)}
            />
            <Button
              label="Clear Filters"
              icon="pi pi-refresh"
              severity="danger"
              outlined
              className="px-8"
              onClick={() => {
                setShowList(false);
                setFilters({ routeNo: null, busStop: null });
              }}
            />
          </div>
        </div>

       
        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">
                Driver Attender Route Details List
              </h3>
              <div className="flex gap-2">
                <Button icon="pi pi-file-pdf" severity="warning" tooltip="Export PDF" className="p-button-rounded p-button-text" />
                <Button icon="pi pi-file-excel" severity="success" tooltip="Export Excel" className="p-button-rounded p-button-text" />
              </div>
            </div>
            
            <DataTable
              value={listData}
              paginator
              rows={10}
              className="p-datatable-sm"
             
            >
              <Column header="Sr No." body={(_, { rowIndex }) => rowIndex + 1} style={{ width: "90px" }} sortable/>
              <Column field="routeNo" header="Route No." sortable />
              <Column field="registrationType" header="Registration Type" sortable />
              <Column field="nameDriverAttender" header="Name Driver / Attender" sortable />
              <Column
                field="status"
                header="Status"
                body={statusBodyTemplate}
                align="center"
              />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
}