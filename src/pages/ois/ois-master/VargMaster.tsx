import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import {  Input, Table, type TableColumn } from '../../../ui/shared';
import { Checkbox } from 'primereact/checkbox';

interface VargRow {
  vargName: string;
  vargLevel: number;
  status: boolean;
}

const VargMaster: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    vargName: '',
    vargLevel: '',
    isActive: true
  });

  const [rows] = useState<VargRow[]>([
    {  vargName: 'Varg1', vargLevel: 1, status: true },
    {  vargName: 'Varg2', vargLevel: 2, status: true },
    {  vargName: 'Varg3', vargLevel: 3, status: true },
    {  vargName: 'HM-PS', vargLevel: 4, status: true },
    {  vargName: 'HM-MS', vargLevel: 5, status: true },
    {  vargName: 'PR-HS', vargLevel: 6, status: true },
    {  vargName: 'PR-HSS', vargLevel: 7, status: false },
  ]);

  const columns: TableColumn[] = [
    { field: 'vargName', header: 'Varg Name' },
    { field: 'vargLevel', header: 'Varg Level' },
    {
      header: 'Status(Active - Yes / InActive - No)',
      body: (rowData: VargRow) => (
        <div className="flex ">
          <div className={`px-4 py-2 rounded text-white text-xs font-bold w-16 text-center ${rowData.status ? 'bg-green-500' : 'bg-red-500'}`}>
            {rowData.status ? 'Yes' : 'No'}
          </div>
        </div>
      ),
      field: 'status'
    },
    {
      header: 'Action',
      body: () => (
        <div className="flex ">
          <Button icon="pi pi-pencil" className="p-button-outlined p-button-warning p-button-sm" style={{ color: '#FF8A65', borderColor: '#FF8A65' }} />
        </div>
      ),
      field: ''
    }
  ];

  return (
    <PageLayout title="Varg Master">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-7 flex justify-between items-center">
        <span className="text-orange-600 font-bold text-sm">
        </span>
        {!showForm ? (
          <Button 
            label="Add New Varg" 
            icon="pi pi-plus" 
            onClick={() => setShowForm(true)} 
            style={{ backgroundColor: '#6366f1 ', border: 'none' }} 
          />
        ) : (
          <Button 
            label="Back to List" 
            icon="pi pi-undo" 
            onClick={() => setShowForm(false)} 
            style={{ backgroundColor: '#6366f1', border: 'none' }} 
          />
        )}
      </div>

      {!showForm ? (
        <div className="bg-white rounded-lg shadow-sm border border-orange-200 relative ">
          <h3 className="absolute -top-3 left-4 bg-white px-3 text-blue-600 font-bold border-2 border-blue-600 rounded-full text-xs py-1 z-10">
            Varg Master Details
          </h3>
          <div className="pt-8 p-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
               
               
              </div>
              <div className="flex gap-2">
                <Button label="Export To Excel" icon="pi pi-file-excel" className="p-button-outlined p-button-secondary p-button-sm" />
                <span className="p-input-icon-left">
                  <Input placeholder="Search..." className="p-inputtext-sm w-64" />
                </span>
              </div>
            </div>
            <Table columns={columns} data={rows} showPagination rowsPerPage={50} />
          </div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg border border-orange-200 relative mt-4">
          <h4 className="absolute -top-3 left-4 bg-white px-3 text-blue-600 font-bold border-2 border-blue-600 rounded-full text-xs py-1">
            Add Varg
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 items-end">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">Varg Name <span className="text-red-500">*</span></label>
              <Input 
                value={formData.vargName} 
                onChange={(e) => setFormData({...formData, vargName: e.target.value})} 
                placeholder="Enter Varg Name" 
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">Varg Level <span className="text-red-500">*</span></label>
              <Input 
                value={formData.vargLevel} 
                onChange={(e) => setFormData({...formData, vargLevel: e.target.value})} 
                placeholder="Enter Varg level" 
              />
            </div>

            <div className="flex items-center gap-2 pb-2">
              <Checkbox 
                checked={formData.isActive} 
                onChange={e => setFormData({...formData, isActive: e.checked ?? false})} 
              />
              <label className="text-xs text-blue-500 font-bold">Status (Active/InActive)</label>
            </div>
          </div>

          <div className="flex gap-3 mt-8 pt-4 border-t border-gray-100">
            <Button label="Save" className="bg-green-500 border-none px-10 text-white font-bold" />
            <Button label="Clear" className="p-button-outlined p-button-danger px-10 font-bold" onClick={() => setFormData({vargName:'', vargLevel:'', isActive:true})} />
          </div>
          
          <p className="text-red-500 font-bold text-xs mt-4">
            Note: All Asterisk (*) Marked Fields Are Mandatory
          </p>
        </div>
      )}
    </PageLayout>
  );
};

export default VargMaster;