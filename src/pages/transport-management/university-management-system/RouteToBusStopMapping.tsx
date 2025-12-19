import { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

type MappingItem = {
  id: number;
  routeNo: string;
  busStop: string;
  arrivalTime: string;
  departureTime: string;
  status: boolean;
};

export default function RouteToBusStopMapping() {
  const [showAdd, setShowAdd] = useState(false);

  const [form, setForm] = useState({
    routeNo: null as string | null,
    busStop: null as string | null,
    arrivalTime: '07:00',
    departureTime: '07:00',
    status: true,
  });

  const routes = [
    { label: 'RUT001', value: 'RUT001' },
    { label: 'RUT002', value: 'RUT002' },
  ];

  const busStops = [
    { label: 'Gautam Nagar', value: 'Gautam Nagar' },
    { label: 'Rachna Nagar', value: 'Rachna Nagar' },
  ];

  const list: MappingItem[] = [
    {
      id: 1,
      routeNo: 'RUT001',
      busStop: 'Gautam Nagar',
      arrivalTime: '8:30 AM',
      departureTime: '6:30 PM',
      status: true,
    },
    {
      id: 2,
      routeNo: 'RUT002',
      busStop: 'Rachna Nagar',
      arrivalTime: '8:30 AM',
      departureTime: '6:30 PM',
      status: true,
    },
  ];


  const actionBodyTemplate = () => {
    return (
      <div className="flex justify-center gap-3">
        <button
          type="button"
          className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
          onClick={() => {}}
        >
          ✎
        </button>
        <button
          type="button"
          className="w-8 h-8 rounded bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
          onClick={() => {}}
        >
          🗑
        </button>
      </div>
    );
  };

  const statusTemplate = (row: MappingItem) => (
    <span className={`px-3 py-1 rounded-full text-xs ${row.status ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
      {row.status ? 'Active' : 'Inactive'}
    </span>
  );

  return (
    <PageLayout title="Route To Bus Stop Mapping">
      {!showAdd && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Route To Bus Stop Mapping List
              </h2>
              <Button
                label="Add Route To Bus Stop Mapping"
                icon="pi pi-plus"
                onClick={() => setShowAdd(true)}
              />
            </div>

            <DataTable 
              value={list} 
              paginator 
              rows={10} 
              className="p-datatable-sm"
            
            >
              <Column header="Sr No." body={(_, { rowIndex }) => rowIndex + 1} style={{ width: '80px' }} />
              <Column field="routeNo" header="Route Number" sortable />
              <Column field="busStop" header="Bus Stop Name" sortable />
              <Column field="arrivalTime" header="Arrival Time" />
              <Column field="departureTime" header="Departure Time" />
              <Column header="Status" body={statusTemplate} />
              <Column
                header="Actions"
                body={actionBodyTemplate}
                align="center"
                style={{ width: "120px" }}
              />
            </DataTable>
          </div>
        </div>
      )}

      {showAdd && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Add Route To Bus Stop Mapping
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text p-button-secondary"
                onClick={() => setShowAdd(false)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Select Route No. *
                </label>
                <Dropdown
                  value={form.routeNo}
                  options={routes}
                  placeholder="Select"
                  className="w-full"
                  onChange={(e) => setForm({ ...form, routeNo: e.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Select Bus Stop Name *
                </label>
                <Dropdown
                  value={form.busStop}
                  options={busStops}
                  placeholder="Select"
                  className="w-full"
                  onChange={(e) => setForm({ ...form, busStop: e.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Arrival Time *
                </label>
                <input
                  type="time"
                  value={form.arrivalTime}
                  className="w-full p-[7px] border rounded border-gray-300 focus:outline-blue-500"
                  onChange={(e) => setForm({ ...form, arrivalTime: e.target.value })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Departure Time *
                </label>
                <input
                  type="time"
                  value={form.departureTime}
                  className="w-full p-[7px] border rounded border-gray-300 focus:outline-blue-500"
                  onChange={(e) => setForm({ ...form, departureTime: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-6">
              <label className="text-sm font-semibold text-gray-700">
                Status *
              </label>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm text-gray-700">Active</span >
                <Checkbox
                  checked={form.status}
                  onChange={(e) => setForm({ ...form, status: e.checked ?? false })}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t pt-6 mt-10">
              <Button
                type="button"
                label="Cancel"
                icon="pi pi-times"
                className="p-button-secondary p-button-outlined"
                onClick={() => setShowAdd(false)}
              />
              <Button
                label="Save"
                icon="pi pi-save"
                className="px-6"
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}