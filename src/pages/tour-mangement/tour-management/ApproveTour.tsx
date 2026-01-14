import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import {  Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface AppliedTourRow {
  srNo: number;
  employeeName: string;
  officeName: string;
  tourType: string;
  tourStartsFrom: string;
  tourDestination: string;
  duration: string;
  noOfDays: string;
  status: string;
  tourPurpose: string;
}

const ApproveTour: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<any>(null);
  const [data] = useState<AppliedTourRow[]>([
    {
      srNo: 1,
      employeeName: 'Sita Dubey (EE00333)',
      officeName: 'Administrator',
      tourType: 'Training and Development Tour',
      tourStartsFrom: '10/12/2024',
      tourDestination: 'Hyderabad',
      duration: '10th December 2024 - 15th December 2024',
      noOfDays: '5 Days',
      status: 'Approved',
      tourPurpose: 'Attending leadership training seminar'
    }
  ]);

  const rowExpansionTemplate = (data: AppliedTourRow) => {
    return (
      <div className="p-4 bg-gray-50 border-y border-gray-100 space-y-3">
        <div className="flex gap-4">
          <span className="font-bold text-sm min-w-[100px]">No. of Days</span>
          <span className="text-sm">{data.noOfDays}</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="font-bold text-sm min-w-[100px]">Status</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
            {data.status}
          </span>
        </div>
        <div className="flex gap-4">
          <span className="font-bold text-sm min-w-[100px]">Tour Purpose</span>
          <span className="text-sm text-gray-600">{data.tourPurpose}</span>
        </div>
      </div>
    );
  };

  const columns: TableColumn[] = [
    { field: 'employeeName', header: 'Employee Name(Code)' },
    { field: 'officeName', header: 'Office Name' },
    { field: 'tourType', header: 'Tour Type' },
    { field: 'tourStartsFrom', header: 'Tour Starts From' },
    { field: 'tourDestination', header: 'Tour Destination' },
    { field: 'duration', header: 'Duration' }
  ];

  return (
    <PageLayout title="Approve Tour">
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Dropdown label="Select Office Type (Code)" placeholder="Select" options={[]} />
          <Dropdown label="Select Office Name (Code)" placeholder="Select" options={[]} />
        </div>
        <div className="flex gap-3 justify-center">
          <Button label="Search" className="px-10" style={{ backgroundColor: '#6366F1' }} />
          <Button label="Clear" className="px-10 p-button-danger p-button-outlined" />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100">
           <h3 className="text-lg font-semibold text-gray-700">Applied Tour Details</h3>
        </div>
        
        <div className="p-4 flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-2 text-sm">
            Show <select className="border rounded p-1"><option>10</option></select> entries
          </div>
          <div className="flex items-center gap-2 text-sm">
            Search: <input type="text" className="border rounded p-1 focus:ring-1 focus:ring-indigo-500 outline-none" />
          </div>
        </div>

      <Table
          data={data}
          columns={columns}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          showPagination
          rowsPerPage={10}
        />
        
        <div className="p-4 flex justify-between items-center text-sm text-gray-500 border-t">
          Showing 1 to 1 of 1 entries
          <div className="flex gap-1">
            <Button label="Previous" className="p-button-text p-button-sm" disabled />
            <Button label="1" className="p-button-sm" style={{ backgroundColor: '#6366F1' }} />
            <Button label="Next" className="p-button-text p-button-sm" disabled />
          </div>
        </div>
      </div>
      
    </PageLayout>
  );
};

export default ApproveTour;