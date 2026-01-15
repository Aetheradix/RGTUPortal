import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

interface EventReportRow {
  type: string;
  date: string;
  notificationFor: string;
  description: string;
  document: string;
}

const SchoolEventReport: React.FC = () => {
  const [formData, setFormData] = useState({
    type: 'All',
    month: null as Date | null,
  });

  const [records, setRecords] = useState<EventReportRow[]>([]); 
  const [hasSearched, setHasSearched] = useState(false);

  const columns: TableColumn[] = [
    { field: 'type', header: 'Type' },
    { field: 'date', header: 'Date' },
    { field: 'notificationFor', header: 'Notification For' },
    { field: 'description', header: 'Description' },
    { field: 'document', header: 'Document' },
  ];

  const handleSearch = () => {
    setHasSearched(true);
    setRecords([]); 
  };

  const handleReset = () => {
    setFormData({ type: 'All', month: null });
    setHasSearched(false);
    setRecords([]);
  };

  return (
    <PageLayout title="School Event And Notification Report">
      <div className="flex justify-between items-center mb-4">
       
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-orange-200 mb-8 relative">
        <div className="absolute -top-3 left-6 bg-white px-2  border-orange-300  text-blue-800 font-bold text-sm">
          Event & Holiday Calendar Master Report
        </div>

        <form className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <Dropdown 
              label="Select Type" required
              value={formData.type} 
              options={[
                {label: 'All', value: 'All'},
                {label: 'Event', value: 'Event'},
                {label: 'Circular', value: 'Circular'}
              ]}
              onChange={(e) => setFormData({...formData, type: e.value})}
            />

            <DateInput 
              label="Month" required
              placeholder="Jul/2025"
              view="month" 
              dateFormat="mm/yy"
              value={formData.month}
              onChange={(e) => setFormData({...formData, month: e.value as Date})}
            />
          </div>

          <div className="flex gap-3 pt-4 border-t border-gray-100">
            <Button 
              type="button"
              label="Search" 
              onClick={handleSearch}
              className="px-10 p-button-success p-button-outlined" 
              style={{ color: '#10B981', borderColor: '#10B981' }}
            />
            <Button 
              type="button"
              label="Reset" 
              onClick={handleReset}
              className="px-10 p-button-danger p-button-outlined" 
            />
          </div>
          
          <p className="text-red-500 text-xs font-bold">
            Note: All Asterisk (*) Marked Fields Are Mandatory
          </p>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-indigo-900 font-bold">Report Details</h3>
          {hasSearched && (
             <Button 
               label="Export To Excel" 
               icon="pi pi-file-excel" 
               className="p-button-outlined p-button-secondary p-button-sm" 
             />
          )}
        </div>
        
        <Table 
          columns={columns} 
          data={records} 
          showPagination 
          rowsPerPage={10} 
          emptyMessage="No data found for the selected criteria."
        />
      </div>
    </PageLayout>
  );
};

export default SchoolEventReport;