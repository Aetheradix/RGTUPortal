import { useState } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import PageLayout from '../../../components/PageLayout';

type RouteItem = {
  id: number;
  routeCode: string;
  status: boolean;
};

export default function RouteRegistration() {
  const [showList, setShowList] = useState(true);
  const [showAdd, setShowAdd] = useState(false);

  const [form, setForm] = useState({
    routeCode: '',
    status: true,
  });

  const list: RouteItem[] = [
    { id: 1, routeCode: 'RUT001', status: true },
    { id: 2, routeCode: 'RUT002', status: true },
    { id: 3, routeCode: 'RUT003', status: false },
    { id: 4, routeCode: 'RUT004', status: true },
    { id: 5, routeCode: 'RUT005', status: false },
  ];

  const statusTemplate = (rowData: RouteItem) => (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${
        rowData.status
          ? 'bg-green-100 text-green-700'
          : 'bg-red-100 text-red-700'
      }`}
    >
      {rowData.status ? 'Active' : 'Inactive'}
    </span>
  );

  const actionTemplate = () => (
    <div className="flex gap-2">
      <Button icon="pi pi-pencil" rounded text severity="info" />
      <Button icon="pi pi-trash" rounded text severity="danger" />
    </div>
  );

  return (
    <PageLayout title="Route Registration">
      {showList && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Route Registration List
              </h2>
              <Button
                label="Add Route Registration"
                icon="pi pi-plus"
                onClick={() => {
                  setShowAdd(true);
                  setShowList(false);
                }}
              />
            </div>

            <DataTable
              value={list}
              paginator
              rows={10}
              className="p-datatable-sm"
            >
              <Column field="id" header="Sr No." style={{ width: '80px' }} />
              <Column field="routeCode" header="Route Code" sortable />
              <Column
                header="Status"
                body={statusTemplate}
                style={{ width: '150px' }}
              />
              <Column
                header="Actions"
                body={actionTemplate}
                style={{ width: '150px' }}
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
                Add Route Registration
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text p-button-secondary"
                onClick={() => {
                  setShowAdd(false);
                  setShowList(true);
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Enter Route Details *
                </label>
                <InputText
                  value={form.routeCode}
                  placeholder="Enter Route Number"
                  onChange={(e) =>
                    setForm({ ...form, routeCode: e.target.value })
                  }
                  className="w-full"
                />
              </div>

              <div className="flex items-center gap-3 mt-6">
                <Checkbox
                  checked={form.status}
                  onChange={(e) =>
                    setForm({ ...form, status: e.checked ?? false })
                  }
                />
                <label className="text-sm font-semibold text-gray-700">
                  Active *
                </label>
              </div>
            </div>

            <div className="flex justify-center gap-4 border-t pt-6">
              <Button label="Save" icon="pi pi-save" />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                severity="danger"
                className="p-button-outlined"
                onClick={() =>
                  setForm({
                    routeCode: '',
                    status: true,
                  })
                }
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}
