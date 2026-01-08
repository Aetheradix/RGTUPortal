import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import {  Table, type TableColumn } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

interface TourReportRow {
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

const TourReport: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<any>(null);

  const [reportData] = useState<TourReportRow[]>([
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
    },
    {
      srNo: 2,
      employeeName: 'Ram Parihar (EE55770)',
      officeName: 'Associate Professor',
      tourType: 'Study Tour',
      tourStartsFrom: '10/12/2024',
      tourDestination: 'Mumbai',
      duration: '15th December 2024 - 25th December 2024',
      noOfDays: '10 Days',
      status: 'Approved',
      tourPurpose: 'Participating in international tech conference'
    }
  ]);
  const rowExpansionTemplate = (data: TourReportRow) => {
    return (
      <div className="p-4 bg-gray-50 border-y border-gray-100 space-y-4">
        <div className="flex gap-4">
          <span className="font-bold text-sm w-32">No. of Days</span>
          <span className="text-sm">{data.noOfDays}</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="font-bold text-sm w-32">Status</span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-bold uppercase">
            {data.status}
          </span>
        </div>
        <div className="flex gap-4">
          <span className="font-bold text-sm w-32">Tour Purpose</span>
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
    <PageLayout title="Tour Report">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <h3 className="text-lg font-medium text-gray-700 mb-6 pb-2 border-b border-gray-50">Get Tour Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          <DateInput label="From Date" required placeholder="dd/mm/yyyy" />
          <DateInput label="To Date" required placeholder="dd/mm/yyyy" />
        </div>
       <div className="flex gap-3 justify-center pt-4">
            <Button label="Search" className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
            <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-12" />
          </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-white">
          <h2 className="text-xl font-medium text-gray-700">Tour Report</h2>
        </div>

        <div className="p-4 flex justify-between items-center gap-4 border-b border-gray-50">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            Show <select className="border rounded p-1"><option>10</option></select> entries
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            Search: <input type="text" className="border rounded px-2 py-1 outline-none focus:ring-1 focus:ring-blue-400" />
          </div>
        </div>
        <Table 
          columns={columns} 
          data={reportData}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          showPagination 
          rowsPerPage={10} 
        />
        
        <div className="p-4 flex justify-between items-center border-t border-gray-100 text-sm text-gray-500">
          Showing 1 to {reportData.length} of {reportData.length} entries
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

export default TourReport;