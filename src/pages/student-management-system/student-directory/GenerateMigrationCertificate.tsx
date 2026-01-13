import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table, type TableColumn, Input } from '../../../ui/shared';

interface MigrationRow {
  srNo: number;
  enrollmentNo: string;
  studentName: string;
  fatherName: string;
  dob: string;
  percentage: string;
  resultStatus: string;
  courseName: string;
  collegeName: string;
  universityName?: string; 
}

const GenerateMigrationCertificate: React.FC = () => {

  const migrationYears = [
    { label: "2023", value: "2023" },
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
  ];

 
  const [filters, setFilters] = useState({
    migrationYear: null,
    enrollmentNo: '',
  });

  
  const [migrationData] = useState<MigrationRow[]>([
    { 
      srNo: 1, 
      enrollmentNo: '0115CA221055',
      studentName: 'Amit Dubey', 
      fatherName: 'Mahesh Dubey', 
      dob: '05-09-2002', 
      percentage: '88%', 
      resultStatus: 'Passed',
      courseName: 'B.Com',
      collegeName: 'Acropolis Institute of Technology and Research, Indore',
      universityName: 'Oriental University, Indore'
    },
  ]);

  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr No.', style: { width: '60px' } },
    { field: 'enrollmentNo', header: 'Enrollment No.' },
    { field: 'studentName', header: 'Student Name' },
    { field: 'fatherName', header: 'Father Name' },
    { field: 'dob', header: 'Date Of Birth' },
    { field: 'percentage', header: 'Percentage' },
    { field: 'resultStatus', header: 'Result Status' },
    { field: 'courseName', header: 'Course Name' },
    { field: 'collegeName', header: 'College Name' },
  ];

  
  const rowExpansionTemplate = (data: MigrationRow) => {
    return (
      <div className="p-3 bg-gray-50">
        <p><strong>University Name:</strong> {data.universityName}</p>
      </div>
    );
  };

  const handleClear = () => {
    setFilters({ migrationYear: null, enrollmentNo: '' });
  };

  return (
    <PageLayout title="Generate Migration Certificate">
     
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <Dropdown 
            label="Select Migration Year" required
            placeholder="Select"
            value={filters.migrationYear}
            options={migrationYears}
            onChange={(e) => setFilters({ ...filters, migrationYear: e.value })}
          />
          <Input 
            label="Enter Enrollment No." required
            placeholder="Enter Enrollment No."
            value={filters.enrollmentNo}
            onChange={(e) => setFilters({ ...filters, enrollmentNo: e.target.value })}
          />
        </div>

        <div className="flex gap-3 justify-center pt-8 border-t mt-6">
          <Button label="Search" className="px-12" style={{ backgroundColor: '#4F46E5', border: 'none' }} />
          <Button 
            type="button" label="Clear" 
            className="p-button-danger p-button-outlined px-12"
            style={{ backgroundColor: '#FEE2E2', color: '#EF4444', border: 'none' }}
            onClick={handleClear}
          />
        </div>
      </div>

  
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="p-2 mb-4">
           <h2 className="text-lg font-medium text-gray-700">Generate Migration Certificate List</h2>
        </div>
        
        <Table 
          columns={columns} 
          data={migrationData} 
          showPagination 
          rowsPerPage={10}
      
          rowExpansionTemplate={rowExpansionTemplate}
        />

        <div className="flex gap-3 justify-center pt-8 border-t mt-6">
          <Button 
            label="Generate" 
            className="px-12" 
            style={{ backgroundColor: '#6366F1', border: 'none' }} 
          />
          <Button 
            type="button" label="Clear" 
            className="p-button-danger p-button-outlined px-12"
            style={{ backgroundColor: '#FEE2E2', color: '#EF4444', border: 'none' }}
            onClick={() => {}} 
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default GenerateMigrationCertificate;