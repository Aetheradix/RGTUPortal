import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Table, type TableColumn } from '../../../ui/shared';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';

interface MappingRow {
  vargName: string;
  schoolSubCategory: string;
  status: boolean;
}

const VargToSubCategoryMapping: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    vargName: null,
    schoolSubCategory: null,
    isActive: true
  });

  const [rows] = useState<MappingRow[]>([
    {  vargName: 'Varg1', schoolSubCategory: 'Higher Secondary with grades 1 to 12 (PRY-UPR-SEC-HSEC)', status: true },
    {  vargName: 'Varg1', schoolSubCategory: 'Higher Secondary with grades 6 to 12 (UPR-SEC-HSEC)', status: true },
    {  vargName: 'Varg1', schoolSubCategory: 'Higher Secondary with grades 9 to 12 (SEC-HSEC)', status: true },
    {  vargName: 'Varg2', schoolSubCategory: 'Upper Primary with grades 1 to 8 (PRY-UPR)', status: true },
    {  vargName: 'Varg2', schoolSubCategory: 'Higher Secondary with grades 1 to 12 (PRY-UPR-SEC-HSEC)', status: true },
  ]);

  const columns: TableColumn[] = [
    { field: 'vargName', header: 'Varg Name', sortable: true },
    { field: 'schoolSubCategory', header: 'School Sub-Category Details', sortable: true },
    {
      header: 'Status(Active - Yes / InActive - No)',
      body: (rowData: MappingRow) => (
        <div className="flex ">
          <div className={`px-4 py-2 rounded text-white text-xs font-bold w-14 text-center ${rowData.status ? 'bg-green-500' : 'bg-red-500'}`}>
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
    <PageLayout title="Varg to School Sub-Category Mapping">
      <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 mb-7 flex justify-between items-center">
        <div className="flex items-center gap-4">
         
          <span className="text-red-500 text-xs font-medium">
           
          </span>
        </div>
        
        {!showForm ? (
          <Button 
            label="Add New Varg School Sub-Category" 
            icon="pi pi-plus" 
            onClick={() => setShowForm(true)} 
            className="p-button-sm"
            style={{ backgroundColor: '#6366f1', border: 'none' }} 
          />
        ) : (
          <Button 
            label="Back to List" 
            icon="pi pi-undo" 
            onClick={() => setShowForm(false)} 
            className="p-button-sm"
            style={{ backgroundColor: '#6366f1', border: 'none' }} 
          />
        )}
      </div>

      {!showForm ? (
        <div className="bg-white rounded-lg shadow-sm border border-orange-200 relative">
          <span className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold text-sm">
            Varg to School Sub-Category Mapping Details
          </span>
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
          <span className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold text-sm">
            Add Varg to School Sub-Category Mapping
          </span>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 items-end">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold">Varg Name (Level) <span className="text-red-500">*</span></label>
              <Dropdown 
                value={formData.vargName} 
                options={[]} 
                onChange={(e) => setFormData({...formData, vargName: e.value})} 
                placeholder="Select" 
                className="w-full border-orange-200"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold">School Sub-Category Details (Code) <span className="text-red-500">*</span></label>
              <Dropdown 
                value={formData.schoolSubCategory} 
                options={[]} 
                onChange={(e) => setFormData({...formData, schoolSubCategory: e.value})} 
                placeholder="Select" 
                className="w-full border-orange-200"
              />
            </div>

            <div className="flex items-center gap-2 pb-3">
              <Checkbox 
                checked={formData.isActive} 
                onChange={e => setFormData({...formData, isActive: e.checked ?? false})} 
              />
              <label className="text-xs text-blue-500 font-bold">Status (Active/InActive)</label>
            </div>
          </div>

          <div className="flex gap-3 mt-10 pt-4 border-t border-gray-100">
            <Button label="Save" className="bg-green-500 p-button px-12 font-bold"  />
            <Button label="Clear" className="p-button-outlined p-button-danger px-12 font-bold" onClick={() => setFormData({vargName: null, schoolSubCategory: null, isActive: true})} />
          </div>
          
          <p className="text-red-500 font-bold text-xs mt-6">
            Note: All Asterisk (*) Marked Fields Are Mandatory
          </p>
        </div>
      )}
    </PageLayout>
  );
};

export default VargToSubCategoryMapping;