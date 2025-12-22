import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import PageLayout from '../../../components/PageLayout';

const VehicleAllotment: React.FC = () => {
  const [showAdd, setShowAdd] = useState(false);
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    employeeId: '',
    employeeName: 'Raj Shahu',
    district: 'Agar Malwa',
    ddoCode: '23090107701',
    designation: 'Joint Director',
    vehicleSearch: '',
    vehicleCompany: 'Tata Motors',
    vehicleModel: 'Tiago',
    vehicleColor: 'Midnight Plum',
    fuelType: 'Diesel',
    bodyType: 'Hatchback',
    vehicleNumber: 'MP04CB4473',
    orderNumber: '',
    orderDate: null as Date | null,
    driverName: '',
    driverMobile: '',
    remark: '',
  });

  const list = [
    {
      id: 1,
      employeeId: 'EMP12347',
      employeeName: 'Raj Shahu',
      district: 'Agar Malwa',
      ddoCode: '23090',
      designation: 'Joint Director',
      vehicleNumber: 'MP04CB4473',
      orderNumber: 'ORD123455',
      orderDate: '12/05/2023',
      driverName: 'Lakshmi Narayan',
      driverMobile: '7411655945',
    },
  ];

  return (
    <PageLayout title="Vehicle Allotment">
      {!showAdd ? (
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4 border-b pb-4">
            <h3 className="text-lg font-semibold text-gray-700">Vehicle Allotment List</h3>
            <Button
              label="Add New Allotment"
              icon="pi pi-plus"
              onClick={() => {
                setShowAdd(true);
                setStep(1);
              }}
            />
          </div>

          <DataTable value={list} className="p-datatable-sm" paginator rows={10}>
            <Column field="id" header="Sr No." style={{ width: '70px' }} />
            <Column field="employeeId" header="Employee ID" sortable />
            <Column field="employeeName" header="Employee Name" sortable />
            <Column field="district" header="District" />
            <Column field="designation" header="Designation" />
            <Column field="vehicleNumber" header="Vehicle No." />
          </DataTable>
        </div>
      ) : (
        <div className="space-y-6">
        
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border">
            <h2 className="text-xl font-bold text-blue-700">New Vehicle Allotment</h2>
            <Button 
              label="Go Back" 
              icon="pi pi-arrow-left" 
              className="p-button-text p-button-secondary" 
              onClick={() => setShowAdd(false)} 
            />
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="text-md font-bold mb-4 flex items-center gap-2 text-gray-800">
              <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">1</span>
              Search Employee
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div className="md:col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Employee ID *</label>
                <div className="p-inputgroup">
                  <InputText
                    placeholder="Enter ID (e.g. EMP123)"
                    value={form.employeeId}
                    onChange={(e) => setForm({ ...form, employeeId: e.target.value })}
                  />
                  <Button icon="pi pi-search" onClick={() => setStep(2)} />
                </div>
              </div>
              
              {step >= 2 && (
                <>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Employee Name</label>
                    <InputText value={form.employeeName} disabled className="w-full bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">District</label>
                    <InputText value={form.district} disabled className="w-full bg-gray-50" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Designation</label>
                    <InputText value={form.designation} disabled className="w-full bg-gray-50" />
                  </div>
                </>
              )}
            </div>
          </div>
          {step >= 2 && (
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fade-in">
              <h4 className="text-md font-bold mb-4 flex items-center gap-2 text-gray-800">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">2</span>
                Vehicle Assignment
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end mb-6">
                <div className="md:col-span-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Number *</label>
                  <div className="p-inputgroup">
                    <InputText
                      placeholder="e.g. MP04CB4473"
                      value={form.vehicleSearch}
                      onChange={(e) => setForm({ ...form, vehicleSearch: e.target.value })}
                    />
                    <Button icon="pi pi-search" className="p-button-success" onClick={() => setStep(3)} />
                  </div>
                </div>

                {step >= 3 && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2">Company</label>
                      <InputText value={form.vehicleCompany} disabled className="w-full bg-gray-50" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2">Model</label>
                      <InputText value={form.vehicleModel} disabled className="w-full bg-gray-50" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2">Fuel Type</label>
                      <InputText value={form.fuelType} disabled className="w-full bg-gray-50" />
                    </div>
                  </>
                )}
              </div>
            </div>
          )}

          {step >= 3 && (
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fade-in">
              <h4 className="text-md font-bold mb-4 flex items-center gap-2 text-gray-800">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">3</span>
                Allotment Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Order Number *</label>
                  <InputText
                    placeholder="Enter Order No."
                    value={form.orderNumber}
                    onChange={(e) => setForm({ ...form, orderNumber: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Order Date *</label>
                  <Calendar
                    value={form.orderDate}
                    onChange={(e) => setForm({ ...form, orderDate: e.value as Date })}
                    placeholder="Select Date"
                    className="w-full"
                    showIcon
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Driver Name *</label>
                  <InputText
                    placeholder="Full Name"
                    value={form.driverName}
                    onChange={(e) => setForm({ ...form, driverName: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Driver Mobile *</label>
                  <InputText
                    placeholder="10 digit number"
                    value={form.driverMobile}
                    onChange={(e) => setForm({ ...form, driverMobile: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Upload Allotment Copy *</label>
                  <input type="file" className="w-full text-xs p-2 border rounded bg-gray-50" />
                </div>
                <div className="md:col-span-3">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Remark</label>
                  <InputText
                    placeholder="Enter any additional notes..."
                    value={form.remark}
                    onChange={(e) => setForm({ ...form, remark: e.target.value })}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-8 border-t pt-6">
                <Button type="button" label="Cancel" icon="pi pi-times" className="p-button-secondary" />
                <Button label="Save Allotment" icon="pi pi-check" className="p-button-primary px-6" />
              </div>
            </div>
          )}
        </div>
      )}
    </PageLayout>
  );
};

export default VehicleAllotment;