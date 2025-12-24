import { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";

interface RouteLocation {
  id: number;
  routeNo: string;
  busStopName: string;
  arrivalTime: string;
  departureTime: string;
}

const ROUTE_OPTIONS = [
  { label: "RTU001", value: "RTU001" },
  { label: "RTU002", value: "RTU002" },
  { label: "RTU003", value: "RTU003" },
];

const ALL_DATA: RouteLocation[] = [
  {
    id: 1,
    routeNo: "RTU001",
    busStopName: "Aadesh Nagar",
    arrivalTime: "08:15 AM",
    departureTime: "08:17 AM",
  },
  {
    id: 2,
    routeNo: "RTU002",
    busStopName: "Rahul Nagar",
    arrivalTime: "08:20 AM",
    departureTime: "08:22 AM",
  },
  {
    id: 3,
    routeNo: "RTU003",
    busStopName: "Gautam Nagar",
    arrivalTime: "08:27 AM",
    departureTime: "08:30 AM",
  },
];

export default function ViewRouteLocation() {
  const [routeCode, setRouteCode] = useState<string>("");
  const [list, setList] = useState<RouteLocation[]>([]);

  const onSearch = () => {
    if (!routeCode) {
      setList([]);
      return;
    }
    setList(ALL_DATA.filter((x) => x.routeNo === routeCode));
  };

  const onClear = () => {
    setRouteCode("");
    setList([]);
  };

  return (
    <PageLayout title="View Route Location">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            View Route Location
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-2 items-end">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Select Route Code <span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={routeCode}
                options={ROUTE_OPTIONS}
                onChange={(e) => setRouteCode(e.value)}
                placeholder="Select Route"
                className="w-full"
              />
            </div>

            <div className="flex gap-4">
              <Button
                label="Search"
                icon="pi pi-search"
                className="bg-blue-700 px-8 shadow-md"
                onClick={onSearch}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                severity="danger"
                outlined
                className="px-8"
                onClick={onClear}
              />
            </div>
          </div>
        </div>

        {list.length > 0 && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h3 className="text-lg font-bold text-gray-800 uppercase tracking-tight">
                View Route Location List
              </h3>
              <div className="flex gap-2">
                <Button
                  icon="pi pi-file-excel"
                  severity="success"
                  text
                  tooltip="Export Excel"
                />
                <Button
                  icon="pi pi-print"
                  severity="secondary"
                  text
                  tooltip="Print"
                />
              </div>
            </div>

            <DataTable
              value={list}
              paginator
              rows={10}
              className="p-datatable-sm"
              stripedRows
            >
              <Column
                header="Sr No."
                body={(_, options) => options.rowIndex + 1}
                style={{ width: "90px" }} sortable
              />
              <Column field="routeNo" header="Route No." sortable />
              <Column field="busStopName" header="Bus Stop Name" sortable />
              <Column field="arrivalTime" header="Arrival In Time" sortable />
              <Column
                field="departureTime"
                header="Departure Out Time"
                sortable
              />
            </DataTable>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
