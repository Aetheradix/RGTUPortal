import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Table, type TableColumn } from '../../../ui/shared';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';

interface MappingRow {
  srNo: number;
  panelName: string;
  designationName: string;
  status: boolean;
}

const PanelDesignationMapping: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    panelName: null,
    designationName: null,
    isActive: true
  });

  const [rows] = useState<MappingRow[]>([
    { srNo: 1, panelName: 'SSS1-Hindi', designationName: 'Assistant Professor', status: true },
    { srNo: 2, panelName: 'SSS-3 General', designationName: 'Pre Primary Teacher', status: true },
    { srNo: 3, panelName: 'HM-PS', designationName: 'HM(PS)', status: true },
    { srNo: 4, panelName: 'SSS-3 General', designationName: 'Asstt Teacher(LDT)', status: true },
    { srNo: 5, panelName: 'SSS-3 General', designationName: 'Sahayak Adhyapak', status: true },
  ]);

  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr.No.' },
    { field: 'panelName', header: 'Panel Name' },
    { field: 'designationName', header: 'Designation Name' },
    {
      header: 'Status(Active - Yes / InActive - No)',
      body: (rowData: MappingRow) => (
        <div className="flex">
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
        <div className="flex">
          <Button icon="pi pi-pencil" className="p-button-outlined p-button-warning p-button-sm" style={{ color: '#FF8A65', borderColor: '#FF8A65' }} />
        </div>
      ),
      field: ''
    }
  ];

  return (
    <PageLayout title="Panel to Designation Mapping">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-7 flex justify-between items-center">
        <span className="text-orange-600 font-bold text-sm">
        </span>
        {!showForm ? (
          <Button 
            label="Add New Panel to Designation Mapping" 
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
            Panel to Designation Mapping Master Details
          </h3>
          <div className="pt-8 p-4">
            <div className="flex justify-end items-center mb-4">
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
            Add Panel to Designation Mapping
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 items-end">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">Panel Name <span className="text-red-500">*</span></label>
              <Dropdown 
                value={formData.panelName} 
                options={[]} 
                onChange={(e) => setFormData({...formData, panelName: e.value})} 
                placeholder="Select" 
              />
            </div>
            
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold">Designation Name (Code) <span className="text-red-500">*</span></label>
              <Dropdown 
                value={formData.designationName} 
                options={[]} 
                onChange={(e) => setFormData({...formData, designationName: e.value})} 
                placeholder="Select" 
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
            <Button label="Clear" className="p-button-outlined p-button-danger px-10 font-bold" onClick={() => setFormData({panelName: null, designationName: null, isActive: true})} />
          </div>
          
          <p className="text-red-500 font-bold text-xs mt-4">
            Note: All Asterisk (*) Marked Fields Are Mandatory
          </p>
        </div>
      )}
    </PageLayout>
  );
};

export default PanelDesignationMapping;