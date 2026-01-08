import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import {  Table, type TableColumn } from '../../../ui/shared';

interface EnquiryRow {
  srNo: number;
  enquiryOrderNo: string;
  enquiryOrderDate: string;
  openRemark: string;
  closeRemark: string;
  closeOrderNo: string;
  closeOrderDate: string;
}

const Report: React.FC = () => {
  // Image me dikhaye gaye data ke anusar rows
  const [rows] = useState<EnquiryRow[]>([
    {
      srNo: 1,
      enquiryOrderNo: '652325',
      enquiryOrderDate: '01/01/2024',
      openRemark: 'The above action is being taken',
      closeRemark: 'Nil',
      closeOrderNo: 'Nil',
      closeOrderDate: 'Nil',
    },
    {
      srNo: 2,
      enquiryOrderNo: '652555',
      enquiryOrderDate: '05/01/2024',
      openRemark: 'Nil',
      closeRemark: 'Employees under court orders is cleared of all defects',
      closeOrderNo: '768594',
      closeOrderDate: '10/01/2024',
    }
  ]);

  // Table Columns Definition as per the image provided
  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr.No.', style: { width: '70px' } },
    { field: 'enquiryOrderNo', header: 'Enquiry Order No.' },
    { field: 'enquiryOrderDate', header: 'Enquiry Order Date' },
    {
        header: 'Remark',
        body: (rowData: EnquiryRow) => (
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <span className="block font-bold text-xs text-gray-500 uppercase">Open Remark</span>
                    <span>{rowData.openRemark}</span>
                </div>
                <div>
                    <span className="block font-bold text-xs text-gray-500 uppercase">Close Remark</span>
                    <span>{rowData.closeRemark}</span>
                </div>
            </div>
        ),
        style: { minWidth: '350px' },
        field: ''
    },
    { field: 'closeOrderNo', header: 'Close Order No.' },
    { field: 'closeOrderDate', header: 'Close Order Date' },
  ];

  return (
    <PageLayout title="Departmental Enquiry Report">
      {/* Search and Entries Control Section */}
      <div className="bg-white p-4 rounded-t-lg border-x border-t border-gray-100 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm">Show</span>
          <select className="border rounded p-1 text-sm bg-gray-50">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
          <span className="text-sm">entries</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm">Search:</span>
          <input 
            type="text" 
            className="border rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500" 
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-b-lg shadow-sm border border-gray-100 overflow-hidden">
        <Table 
          columns={columns} 
          data={rows} 
          showPagination 
          rowsPerPage={10} 
        />
        
        {/* Entries Info (Bottom) */}
        <div className="p-4 border-t border-gray-100 flex justify-between items-center">
          <p className="text-sm text-gray-600">Showing 1 to {rows.length} of {rows.length} entries</p>
          <div className="flex gap-1">
             <Button label="Previous" className="p-button-text p-button-sm text-gray-400" disabled />
             <Button label="1" className="p-button-sm" style={{ backgroundColor: '#6366F1', border: 'none' }} />
             <Button label="Next" className="p-button-text p-button-sm text-gray-400" disabled />
          </div>
        </div>
      </div>

      {/* Action Buttons if needed for the page */}
      <div className="flex gap-3 justify-center pt-8">
        <Button 
          label="Download Report" 
          icon="pi pi-file-pdf"
          className="px-8" 
          style={{ backgroundColor: '#6366F1', border: 'none' }} 
        />
        <Button 
          type="button" 
          label="Back" 
          className="p-button-secondary p-button-outlined px-8" 
        />
      </div>
    </PageLayout>
  );
};

export default Report;