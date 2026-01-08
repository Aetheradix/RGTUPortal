import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Table, type TableColumn } from '../../../ui/shared';

interface APRReportRow {
  financialYear: string;
  employeeNameCode: string;
}

const EmployeeAPRReport: React.FC = () => {
  const [ ] = useState('2026-2027');
  const [ ] = useState<File | null>(null);

  // Table Data (Image 2 ke according)
  const [reportData] = useState<APRReportRow[]>([
    {
      financialYear: '2022-2023',
      employeeNameCode: 'Rajesh Agrawal/AD4545',
    },
    {
      financialYear: '2022-2023',
      employeeNameCode: 'Rajesh Agrawal/AD4545',
    }
  ]);

  const columns: TableColumn[] = [
    { field: 'financialYear', header: 'Financial Year' },
    { field: 'employeeNameCode', header: 'Employee Name/Code' },
    {
      header: 'View Employee Application',
      field: '',
      body: () => (
        <Button 
          icon="pi pi-eye" 
          className="p-button-sm"
          style={{ backgroundColor: '#6366F1', border: 'none', borderRadius: '4px' }} 
        />
      ),
    },
  ];

  return (
    <PageLayout title="Employee APR Form Report">
      
   
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <Table 
          columns={columns} 
          data={reportData} 
          showPagination 
          rowsPerPage={10} 
        />
      </div>

    </PageLayout>
  );
};

export default EmployeeAPRReport;