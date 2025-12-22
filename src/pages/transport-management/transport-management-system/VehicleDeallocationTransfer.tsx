import { useState } from 'react';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import PageLayout from '@/components/PageLayout';

type VehicleAllotmentItem = {
  id: number;
  employeeName: string;
  orderDate: string;
  district: string;
  vehicleNumber: string;
  designation: string;
  orderNumber: string;
  vehicleType: string;
};

export default function VehicleDeallocationTransfer() {
  const [showList, setShowList] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const officeTypes = [
    { label: 'Type A', value: 'Type A' },
    { label: 'Type B', value: 'Type B' },
  ];

  const officeNames = [
    { label: 'Office 1', value: 'Office 1' },
    { label: 'Office 2', value: 'Office 2' },
  ];

  const vehicles = [
    { label: 'MP04CB4473', value: 'MP04CB4473' },
  ];

  const district = [
    { label: 'Indore', value: 'Indore' },
    { label: 'Bhopal', value: 'Bhopal' },
    { label: 'Jabalpur', value: 'Jabalpur' },
    { label: 'Gwalior', value: 'Gwalior' },
    { label: 'Ujjain', value: 'Ujjain' },
    { label: 'Sagar', value: 'Sagar' },
    { label: 'Dewas', value: 'Dewas' },
    { label: 'Satna', value: 'Satna' },
    { label: 'Ratlam', value: 'Ratlam' },
    { label: 'Rewa', value: 'Rewa' },
  ];

  const vehicleProcessOptions = [
    { label: 'Transfer', value: 'Transfer' },
    { label: 'Deallocate', value: 'Deallocate' },
  ];

  const data: VehicleAllotmentItem[] = [
    {
      id: 1,
      employeeName: 'E0561-Raj',
      orderDate: '13/06/2024',
      district: 'Bawani',
      vehicleNumber: 'MP04CB4473',
      designation: 'Joint Director',
      orderNumber: '56565656',
      vehicleType: 'MARUTI 800',
    },
  ];

  return (
    <PageLayout title="Vehicle Deallocation & Transfer">
      {!showAdd && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-gray-800">Transfer Records</h2>
              <Button
                label="Add Deallocation / Transfer"
                icon="pi pi-plus"
                onClick={() => {
                  setShowAdd(true);
                  setShowList(false);
                }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Office Type *</label>
                <Dropdown options={officeTypes} placeholder="Select Type" className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Office Name *</label>
                <Dropdown options={officeNames} placeholder="Select Office" className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Number *</label>
                <Dropdown options={vehicles} placeholder="Select Vehicle" className="w-full" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">From Date</label>
                <Calendar placeholder="dd/mm/yyyy" className="w-full" showIcon />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">To Date</label>
                <Calendar placeholder="dd/mm/yyyy" className="w-full" showIcon />
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8 border-t pt-6">
              <Button
                label="Clear"
                 icon="pi pi-times" className="p-button-secondary"
                onClick={() => setShowList(false)}
              />
              <Button 
                label="Search" 
                icon="pi pi-search" 
                className="px-6" 
                onClick={() => setShowList(true)} 
              />
            </div>
          </div>

          {showList && (
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
              <DataTable value={data} paginator rows={10} className="p-datatable-sm" responsiveLayout="scroll">
                <Column field="id" header="Sr No." style={{ width: '70px' }} />
                <Column field="employeeName" header="Employee Name (Code)" sortable />
                <Column field="orderDate" header="Order Date" />
                <Column field="district" header="District" />
                <Column field="vehicleNumber" header="Vehicle No." />
                <Column field="designation" header="Designation" />
                <Column field="orderNumber" header="Order No." />
                <Column field="vehicleType" header="Type" />
              </DataTable>
            </div>
          )}
        </div>
      )}

      {showAdd && (
        <div className="space-y-6 pb-10">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex justify-between items-center mb-6 border-b pb-4">
              <h2 className="text-xl font-bold text-blue-700">Deallocation & Transfer Process</h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text p-button-secondary"
                onClick={() => setShowAdd(false)}
              />
            </div>

            <div className="space-y-8">
            
              <div className="p-5 bg-gray-50 rounded-lg border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Select Vehicle to Process *</label>
                    <Dropdown options={vehicles} placeholder="Choose Vehicle" className="w-full" />
                  </div>
                  <div className="flex gap-2">
                    <Button label="Fetch Details" icon="pi pi-search" className="p-button-sm" />
                    <Button icon="pi pi-refresh" className="p-button-outlined p-button-secondary p-button-sm" />
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-md font-bold mb-3 text-gray-700">Current Allotment Status</h4>
                <div className="border rounded-md overflow-hidden">
                  <DataTable value={data} className="p-datatable-sm">
                    <Column field="id" header="Sr.No." style={{ width: '50px' }} />
                    <Column field="employeeName" header="Current Holder" />
                    <Column field="orderDate" header="Allotment Date" />
                    <Column field="vehicleNumber" header="Vehicle Number" />
                    <Column field="designation" header="Designation" />
                    <Column field="vehicleType" header="Vehicle Type" />
                  </DataTable>
                </div>
              </div>

              <div className="p-5 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                <label className="block text-sm font-bold text-blue-900 mb-3 uppercase tracking-wider">Select Action Type</label>
                <Dropdown options={vehicleProcessOptions} placeholder="Deallocate or Transfer" className="w-full md:w-1/3" />
              </div>

              <div className="p-5 bg-white rounded-lg border border-gray-200">
                <h4 className="text-md font-bold mb-4 text-gray-800 border-b pb-2">New Recipient / Employee Details</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex gap-2 items-end">
                    <div className="flex-grow">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Employee ID</label>
                      <InputText placeholder="Search ID" className="w-full" />
                    </div>
                    <Button icon="pi pi-search" className="p-button-secondary" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Employee Name With Code *</label>
                    <InputText placeholder="Auto-populated name" className="w-full" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Select District *</label>
                    <Dropdown options={district} placeholder="Select District" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">DDO/College Code *</label>
                    <InputText placeholder="Enter Code" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Designation *</label>
                    <InputText placeholder="Enter Designation" className="w-full" />
                  </div>
                </div>
              </div>

              <div className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <h4 className="text-md font-bold mb-4 text-gray-800 border-b pb-2">Process Authorization</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Order Number *</label>
                    <InputText placeholder="Enter Order No." className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Order Date *</label>
                    <Calendar placeholder="DD/MM/YYYY" className="w-full" showIcon />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Order Copy *</label>
                    <div className="flex w-full">
                      <InputText placeholder="File path..." className="flex-grow rounded-r-none" />
                      <Button icon="pi pi-upload" className="rounded-l-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Driver Name</label>
                    <InputText placeholder="Name of driver" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Driver's Mobile Number</label>
                    <InputText placeholder="10-digit mobile" className="w-full" />
                  </div>
                  <div className="lg:col-span-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Remarks</label>
                    <InputText placeholder="Any internal notes" className="w-full" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-10 border-t pt-6">
              <Button
                label="Reset"
                icon="pi pi-refresh"
                className="p-button-outlined p-button-danger px-4"
              />
              <Button 
                label="Save & Process" 
                icon="pi pi-check-circle" 
                className="p-button-primary px-8" 
              />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
}