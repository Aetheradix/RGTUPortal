/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface PrintTCRow {
  srNo: number;
  studentName: string;
  fatherName: string;
  dob: string;
  percentage: string;
  resultStatus: string;
  college: any; 
}

const PrintTC: React.FC = () => {
  const academicYears = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  const semesters = [
    { label: "Semester I", value: "1" },
    { label: "Semester II", value: "2" },
    { label: "Semester III", value: "3" },
    { label: "Semester IV", value: "4" },
  ];

  const [filters, setFilters] = useState({
    academicYear: null,
    semester: null,
  });

  const [printTCData] = useState<PrintTCRow[]>([
    { srNo: 1, studentName: 'Aman Yadav', fatherName: 'Raghav Yadav', dob: '12-03-2000', percentage: '78%', resultStatus: 'Passed', college: null },
    { srNo: 2, studentName: 'Neha Sharma', fatherName: 'Vishal Sharma', dob: '22-07-1999', percentage: '85%', resultStatus: 'Passed', college: null },
    { srNo: 3, studentName: 'Rohit Patel', fatherName: 'Mahesh Patel', dob: '05-11-1998', percentage: '65%', resultStatus: 'Passed', college: null },
  ]);

  const actionBodyTemplate = () => {
    return (
      <Button 
        icon="pi pi-print" 
        className="p-button-sm" 
        style={{ backgroundColor: '#6366F1', border: 'none', borderRadius: '4px' }} 
        onClick={() => console.log("Printing TC...")}
      />
    );
  };

  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr No.', sortable: true, style: { width: '80px' } },
    { field: 'studentName', header: 'Student Name', sortable: true },
    { field: 'fatherName', header: 'Father Name', sortable: true },
    { field: 'dob', header: 'Date Of Birth', sortable: true },
    { field: 'percentage', header: 'Percentage %', sortable: true },
    { field: 'resultStatus', header: 'Result Status', sortable: true },
    { field: 'college', header: 'College', body: actionBodyTemplate, style: { textAlign: 'center' } },
  ];

  const handleClear = () => {
    setFilters({
      academicYear: null,
      semester: null,
    });
  };

  return (
    <PageLayout title="Print TC">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <Dropdown 
            label="Select Academic Year" required
            placeholder="Select"
            value={filters.academicYear}
            options={academicYears}
            onChange={(e) => setFilters({ ...filters, academicYear: e.value })}
          />
          <Dropdown 
            label="Select Semester" required
            placeholder="Select"
            value={filters.semester}
            options={semesters}
            onChange={(e) => setFilters({ ...filters, semester: e.value })}
          />
        </div>

        <div className="flex gap-3 justify-center pt-8 border-t mt-6">
          <Button 
            label="Search" 
            className="px-12" 
            style={{ backgroundColor: '#4F46E5', border: 'none' }} 
          />
          <Button 
            type="button" 
            label="Clear" 
            className="p-button-danger p-button-outlined px-12"
            style={{ backgroundColor: '#FFE4E6', color: '#EF4444', border: 'none' }}
            onClick={handleClear}
          />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="p-2 mb-4">
           <h2 className="text-lg font-medium text-gray-700">Print TC List</h2>
        </div>
        
        <Table 
          columns={columns} 
          data={printTCData} 
          showPagination 
          rowsPerPage={10}
        />
      </div>
    </PageLayout>
  );
};

export default PrintTC;