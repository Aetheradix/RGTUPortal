import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';

interface DriverItem {
  id: number;
  vehicleNo: string;
  registrationType: string;
  driver: string;
  contact: string;
  licenceNo: string;
  status: boolean;
}

export default function DriverAttenderRegistration() {
  const [showAdd, setShowAdd] = useState(false);
  const [form, setForm] = useState({
    status: true
  });

  const data: DriverItem[] = [
    {
      id: 1,
      vehicleNo: 'MP04AB1196',
      registrationType: 'Attender',
      driver: 'Raj',
      contact: '9797982598',
      licenceNo: 'ABC123',
      status: true,
    },
    {
      id: 2,
      vehicleNo: 'MP04CD5154',
      registrationType: 'Driver',
      driver: 'Rajendra',
      contact: '9797982565',
      licenceNo: 'ABC123',
      status: true,
    }
  ];

  const actionBodyTemplate = () => (
    <div className="flex justify-center gap-3">
      <button type="button" className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-sm">✎</button>
      <button type="button" className="w-8 h-8 rounded bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors shadow-sm">🗑</button>
    </div>
  );

  const statusTemplate = (row: DriverItem) => (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${row.status ? 'bg-green-100 text-green-700 border-green-200' : 'bg-red-100 text-red-700 border-red-200'}`}>
      {row.status ? 'Active' : 'Inactive'}
    </span>
  );

  return (
    <PageLayout title="Driver Attender Registration">
      {!showAdd ? (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">Driver Attender Registration List</h2>
              <Button label="Add Driver Attender Registration" icon="pi pi-plus" onClick={() => setShowAdd(true)} />
            </div>
            <DataTable value={data} paginator rows={10} className="p-datatable-sm">
              <Column header="Sr No." body={(_, { rowIndex }) => rowIndex + 1} style={{ width: '70px' }} />
              <Column field="vehicleNo" header="Vehicle No." sortable />
              <Column field="registrationType" header="Reg. Type" sortable />
              <Column field="driver" header="Driver Name" sortable />
              <Column field="contact" header="Contact Number" />
              <Column field="licenceNo" header="Licence No." />
              <Column header="Status" body={statusTemplate} align="center" />
              <Column header="Actions" body={actionBodyTemplate} align="center" style={{ width: "120px" }} />
            </DataTable>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">Add Driver Attender Registration</h2>
              <Button label="Go Back" icon="pi pi-arrow-left" className="p-button-text p-button-secondary" onClick={() => setShowAdd(false)} />
            </div>

            <div className="space-y-8">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                <h4 className="text-md font-bold mb-6 text-gray-700 border-l-4 border-blue-500 pl-3">Basic Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Vehicle No. *</label>
                    <InputText placeholder="Select Vehicle No" className="w-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Registration Type *</label>
                    <InputText placeholder="Select Type" className="w-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">Driver Name (English) *</label>
                    <InputText placeholder="Enter Name" className="w-full" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">ड्राइवर का नाम (हिंदी) *</label>
                    <InputText placeholder="नाम दर्ज करें" className="w-full" />
                  </div>
                
                </div>
              </div>

          
              <div className="flex flex-col gap-2 mt-6 px-2">
                <label className="text-sm font-semibold text-gray-700">Status *</label>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-700 font-medium">Active</span>
                  <Checkbox
                    checked={form.status}
                    onChange={(e) => setForm({ ...form, status: e.checked ?? false })}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-10 border-t pt-8">
              <Button label="Save Details" icon="pi pi-check" className="px-8" />
              <Button label="Cancel" icon="pi pi-times" className="p-button-secondary p-button-outlined px-8" onClick={() => setShowAdd(false)} />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}