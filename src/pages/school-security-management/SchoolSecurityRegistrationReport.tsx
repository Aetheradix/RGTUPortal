import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table, type TableColumn } from '../../ui/shared';
import { DateInput } from '../../ui/shared/Input';

const SchoolSecurityRegistrationReport: React.FC = () => {
 
  const columns: TableColumn[] = [
    { field: 'visitorName', header: 'Visitor Name', sortable: true },
    { field: 'mobile', header: 'Contact No.' },
    { field: 'visitorType', header: 'Type' },
    { field: 'whomToMeet', header: 'Whom To Meet' },
    { field: 'entryTime', header: 'Entry Time' },
    { field: 'exitTime', header: 'Exit Time' },
    { 
      field: 'status', 
      header: 'Status',
      body: (row: any) => (
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${row.status === 'Inside' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
          {row.status}
        </span>
      )
    },
    {
        header: 'Action',
        body: (row: any) => (
            <div className="flex gap-2">
                {row.status === 'Inside' && (
                    <Button label="Exit" className="p-button-xs p-button-warning py-1" style={{ fontSize: '10px' }} />
                )}
                <Button icon="pi pi-eye" className="p-button-text p-button-secondary p-button-sm" />
            </div>
        ),
        field: ''
    },
  ];

  return (
    <PageLayout title="School Security Management">
      <div className="flex justify-between items-center mb-4">
        <div className=" text-white px-4 py-2 rounded-full text-sm font-bold">
         
        </div>
        <div className="flex gap-2">
           <Button label="Export To Excel" icon="pi pi-file-excel" className="p-button-sm p-button-outlined" style={{ color: '#2E7D32', borderColor: '#2E7D32' }} />
           <Button label="Print Daily Log" icon="pi pi-print" className="p-button-sm" style={{ backgroundColor: '#6366F1', border: 'none' }} />
        </div>
      </div>

      <div className=" rounded-xl p-6 bg-white relative mb-8 shadow-sm">
        <div className="absolute -top-3 left-6 bg-white px-3 border-orange-200  rounded text-blue-900 font-bold text-sm">
          Search Filters
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-2">
          <DateInput label="From Date" placeholder='dd/mm/yyyy' />
          <DateInput label="To Date" placeholder='dd/mm/yyyy' />
          <Dropdown label="Visitor Type" options={[{label: 'All', value: 'All'}, {label: 'Parent', value: 'P'}]} placeholder="Select" />
          <Dropdown label="Status" options={[{label: 'All', value: 'All'}, {label: 'Inside', value: 'I'}, {label: 'Checked-Out', value: 'O'}]} placeholder="Select" />
          <div className="flex items-end">
            <Button label="Search" className="w-max" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          </div>
        </div>
      </div>

      <div className=" rounded-xl bg-white overflow-hidden shadow-sm">
         <div className="p-4 border-b bg-indigo-900 flex justify-between items-center">
            <span className="text-white font-bold text-sm">Visitor Log Details</span>
            <span className="text-orange-300 text-xs font-bold">Total Visitors Today: 0</span>
         </div>
         
         <Table 
           columns={columns} 
           data={[]} 
           showPagination 
           rowsPerPage={20} 
           emptyMessage="No visitors found for the selected period."
         />
      </div>

      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
         <p className="text-blue-800 text-xs font-bold leading-relaxed">
            * Security Admin Note: Please ensure all visitors are "Checked-Out" in the system when they leave the premises to maintain accurate campus security data.
         </p>
      </div>
    </PageLayout>
  );
};

export default SchoolSecurityRegistrationReport;