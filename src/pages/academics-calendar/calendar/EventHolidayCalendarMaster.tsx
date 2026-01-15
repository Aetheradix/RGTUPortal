import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

const EventAndCircularMaster: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
 
  const columns: TableColumn[] = [
    { field: 'type', header: 'Type' },
    { field: 'date', header: 'Date' },
    { field: 'notificationFor', header: 'Notification For' },
    { field: 'class', header: 'Class' },
    { field: 'description', header: 'Description' },
    { field: 'document', header: 'Document' },
    { field: 'status', header: 'Status (Active - Yes / InActive - No)' },
    {
        header: 'Action',
        body: () => (
            <div className="flex gap-2">
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-secondary p-button-sm" style={{ backgroundColor: '#6366F1' }} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" />
            </div>
        ),
        field: ''
    },
  ];

  return (
    <PageLayout title="Event And Circular">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">
          {showForm ? "Add School Event" : ""}
        </h2>
        <Button 
          label={showForm ? "Back to List" : "Add School Event And Notification"} 
          icon={showForm ? "pi pi-arrow-left" : "pi pi-plus"}
          onClick={() => setShowForm(!showForm)}
          style={{ backgroundColor: '#6366F1', border: 'none' }}
          className="p-button-sm"
        />
      </div>

      {showForm ? (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Dropdown label="Type" required placeholder="Select" options={[{label: 'Event', value: '1'}]} />
            <DateInput label="Date" required placeholder="dd/mm/yyyy" />
            <Dropdown label="Notification For" required placeholder="Select" options={[{label: 'All', value: '1'}]} />
            <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-gray-700">Upload Document *</label>
                 <input 
              type="file" 
              className="w-full text-sm text-gray-500 border rounded-md p-2 cursor-pointer
                         file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 
                         file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 
                         hover:file:bg-indigo-100" 
            />
            </div>
            <div className="md:col-span-2">
                <Input label="Description" required placeholder="Enter Description" />
            </div>
          </div>
         <div className="flex gap-3  pt-6">
                    <Button label="Save" className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
                    <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-12" />
                  </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-white">
             <span className="font-bold text-indigo-900">School Event And Notification Details</span>
             <Button label="Export To Excel" icon="pi pi-file-excel" className="p-button-outlined p-button-sm text-gray-600" />
          </div>
          <Table 
            columns={columns} 
            data={[]} 
            showPagination 
            rowsPerPage={10} 
            emptyMessage="No data"
          />
        </div>
      )}
    </PageLayout>
  );
};

export default EventAndCircularMaster;