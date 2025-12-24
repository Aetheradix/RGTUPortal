import { useState } from "react";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import PageLayout from "@/components/PageLayout";

interface RouteVehicleMapping {
  id: number;
  routeNo: string;
  vehicleNo: string;
  status: string;
}

export default function RouteToVehicleMapping() {
  const [showForm, setShowForm] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const routeOptions = [
    { label: "RUT001", value: "RUT001" },
    { label: "RUT002", value: "RUT002" },
  ];

  const vehicleOptions = [
    { label: "MP04AB1196", value: "MP04AB1196" },
    { label: "MP04CD5154", value: "MP04CD5154" },
  ];

  const mappingList: RouteVehicleMapping[] = [
    {
      id: 1,
      routeNo: "RUT001",
      vehicleNo: "MP04AB1196",
      status: "Active",
    },
    {
      id: 2,
      routeNo: "RUT002",
      vehicleNo: "MP04CD5154",
      status: "Active",
    },
  ];

  const actionBodyTemplate = () => (
    <div className="flex justify-center gap-3">
      <button
        type="button"
        className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm"
      >
        ✎
      </button>
      <button
        type="button"
        className="w-8 h-8 rounded bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-sm"
      >
        🗑
      </button>
    </div>
  );

  const statusBodyTemplate = (rowData: RouteVehicleMapping) => (
    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold border border-green-200">
      {rowData.status}
    </span>
  );

  return (
    <PageLayout title="Route To Vehicle Mapping">
      {!showForm ? (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Route To Vehicle Mapping List
              </h2>
              <Button
                label="Add Route To Vehicle Mapping"
                icon="pi pi-plus"
                onClick={() => setShowForm(true)}
              />
            </div>

            <DataTable
              value={mappingList}
              paginator
              rows={10}
              className="p-datatable-sm"
            >
              <Column
                header="Sr No."
                body={(_, { rowIndex }) => rowIndex + 1}
                style={{ width: "90px" }}
                sortable
              />
              <Column field="routeNo" header="Route No." sortable />
              <Column field="vehicleNo" header="Vehicle No." sortable />
              <Column
                field="status"
                header="Status"
                body={statusBodyTemplate}
                align="center"
              />
              <Column
                header="Actions"
                body={actionBodyTemplate}
                align="center"
                style={{ width: "120px" }}
              />
            </DataTable>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Add Route To Vehicle Mapping
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-secondary p-button-text"
                onClick={() => setShowForm(false)}
              />
            </div>

            <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Select Route No. <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    options={routeOptions}
                    placeholder="Select Route"
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Select Vehicle No. <span className="text-red-500">*</span>
                  </label>
                  <Dropdown
                    options={vehicleOptions}
                    placeholder="Select Vehicle"
                    className="w-full"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Status <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-sm text-gray-700 font-medium">
                      Active
                    </span>
                    <Checkbox
                      onChange={(e) => setIsActive(e.checked ?? false)}
                      checked={isActive}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-10 border-t pt-8">
              <Button
                label="Save Mapping"
                icon="pi pi-check"
                className="px-8 shadow-md"
                onClick={() => setShowForm(false)}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                severity="danger"
                outlined
                className="px-8"
                onClick={() => setIsActive(true)}
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
