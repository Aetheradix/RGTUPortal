import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import {  Table, type TableColumn } from '../../../ui/shared';
interface ModuleRow {
  moduleNameEn: string;
  moduleNameHi: string;
  sequenceNo: number;
  moduleIcon: string;
  status: boolean;
}

const ModuleMapping: React.FC = () => {
  const [] = useState({
    moduleNameEn: '',
    moduleNameHi: '',
    sequenceNo: '',
    moduleIcon: '',
    isActive: true
  });

  const [rows] = useState<ModuleRow[]>([
    {moduleNameEn: 'File Tracking System', moduleNameHi: 'फाइल ट्रैकिंग सिस्टम', sequenceNo: 43, moduleIcon: 'ri-stack-line', status: true },
    {moduleNameEn: 'Civil Construction VSK', moduleNameHi: 'Civil Construction VSK', sequenceNo: 16, moduleIcon: 'ri-stack-line', status: true },
    {moduleNameEn: 'Medical Bills Reimbursement', moduleNameHi: 'Medical Bills Reimbursement', sequenceNo: 39, moduleIcon: 'ri-menu-line', status: true },
    {moduleNameEn: 'RSK', moduleNameHi: 'RSK', sequenceNo: 37, moduleIcon: 'ri-menu-line', status: true },
    {moduleNameEn: 'E Shala', moduleNameHi: 'E Shala', sequenceNo: 38, moduleIcon: 'ri-menu-line', status: true },
    {moduleNameEn: 'Mission One Click', moduleNameHi: 'Mission One Click', sequenceNo: 16, moduleIcon: 'ri-stack-line', status: true },
    {moduleNameEn: 'Outsource Employee', moduleNameHi: 'Outsource Employee', sequenceNo: 65, moduleIcon: 'ri-stack-line', status: true },
  ]);

  const columns: TableColumn[] = [
    { field: 'moduleNameEn', header: 'Module Name (In English)' },
    { field: 'moduleNameHi', header: 'मॉड्यूल का नाम (हिंदी में)' },
    { field: 'sequenceNo', header: 'Module Sequence No. / मॉड्यूल क्रम' },
    { field: 'moduleIcon', header: 'Module Icon / मॉड्यूल आइकन' },
    { 
      field: 'status', 
      header: 'Status (Active - Yes / InActive - No)',
      body: (rowData: ModuleRow) => (
        <div className="flex ">
            <span className={`px-4 py-2 rounded text-white font-bold text-xs ${rowData.status ? 'bg-green-500' : 'bg-red-500'}`}>
                {rowData.status ? 'Yes' : 'No'}
            </span>
        </div>
      )
    },
  ];

  return (
    <PageLayout title="Module Details ">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      
          
           <div className="p-4 flex justify-between items-center bg-gray-50 border-b">
                       <div className="flex gap-2">
                           <Button label="Export To Excel" icon="pi pi-file-excel" className="p-button-sm p-button-outlined" />
                       </div>
                       <span className="p-input-icon-left">
                           <input className="p-inputtext p-component p-2 border rounded" placeholder="Search..." />
                       </span>
                   </div>
       
        <Table 
          columns={columns} 
          data={rows} 
          showPagination 
          rowsPerPage={10} 
        />
      </div>
    </PageLayout>
  );
};

export default ModuleMapping;