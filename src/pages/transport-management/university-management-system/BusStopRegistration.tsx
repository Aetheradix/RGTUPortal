import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Checkbox } from "primereact/checkbox";
import { useState } from "react";

interface BusStopItem {
  id: number;
  name: string;
  status: boolean;
}

export default function BusStopRegistration() {
  const [showList, setShowList] = useState(true);
  const [showAdd, setShowAdd] = useState(false);

  const [list] = useState<BusStopItem[]>([
    { id: 1, name: "Gautam Nagar", status: true },
    { id: 2, name: "Rachna Nagar", status: false },
    { id: 3, name: "Kasturba Nagar", status: true },
    { id: 4, name: "Ashoka Garden", status: false },
    { id: 5, name: "MP Nagar", status: true },
  ]);

  const [form, setForm] = useState({
    name: "",
    status: true,
  });

  const statusTemplate = (row: BusStopItem) => (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold border ${
        row.status
          ? "bg-green-100 text-green-700 border-green-200"
          : "bg-red-100 text-red-700 border-red-200"
      }`}
    >
      {row.status ? "Active" : "InActive"}
    </span>
  );

 
  const actionBodyTemplate = () => {
    return (
      <div className="flex justify-center gap-3">
        <button
          type="button"
          className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm"
          onClick={() => {}}
        >
          ✎
        </button>
        <button
          type="button"
          className="w-8 h-8 rounded bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-sm"
          onClick={() => {}}
        >
          🗑
        </button>
      </div>
    );
  };

  return (
    <PageLayout title="Bus Stop Registration">
      {showList && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Bus Stop Registration List
              </h2>
              <Button
                label="Add Bus Stop Registration"
                icon="pi pi-plus"
                onClick={() => {
                  setShowList(false);
                  setShowAdd(true);
                }}
              />
            </div>

            <DataTable 
              value={list} 
              paginator 
              rows={10} 
              className="p-datatable-sm"
           
            >
              <Column 
                header="Sr No." 
                body={(_, { rowIndex }) => rowIndex + 1} 
                style={{ width: "90px" }} sortable
              />
              <Column field="name" header="Bus Stop Name" sortable />
              <Column 
                header="Status" 
                body={statusTemplate} 
                align="center"
                style={{ width: "150px" }} 
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
      )}

      {showAdd && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Add Bus Stop Registration
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Enter Bus Stop Name <span className="text-red-500">*</span>
                </label>
                <InputText
                  value={form.name}
                  placeholder="Enter Bus Stop Name"
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full"
                />
              </div>

       
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">
                  Status <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-sm font-medium text-gray-700">Active</span>
                  <Checkbox
                    checked={form.status}
                    onChange={(e) =>
                      setForm({ ...form, status: e.checked ?? false })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 border-t pt-8 mt-4">
              <Button label="Save Registration" icon="pi pi-save" className="px-8" />
              <Button 
                label="Clear" 
                severity="danger" 
                icon="pi pi-refresh"
                className="p-button-outlined px-8" 
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}