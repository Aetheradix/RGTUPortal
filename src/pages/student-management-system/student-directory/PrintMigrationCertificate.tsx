/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface PrintMigrationRow {
  srNo: number;
  enrollmentNo: string;
  studentName: string;
  fatherName: string;
  dob: string;
  percentage: string;
  resultStatus: string;
  courseName: string;
  collegeName: string;
  universityName: string;
}

const PrintMigrationCertificate: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<any>(null);


  const migrationYears = [
    { label: "2023", value: "2023" },
    { label: "2024", value: "2024" },
    { label: "2025", value: "2025" },
  ];

  const semesters = [
    { label: "Semester I", value: "1" },
    { label: "Semester II", value: "2" },
    { label: "Semester III", value: "3" },
    { label: "Semester IV", value: "4" },
  ];

  const [filters, setFilters] = useState({
    migrationYear: null,
    semester: null,
  });


  const [migrationData] = useState<PrintMigrationRow[]>([
    { 
      srNo: 1, 
      enrollmentNo: '0115CA221059',
      studentName: 'Rohan Sharma', 
      fatherName: 'Vikram Sharma', 
      dob: '15-02-2001', 
      percentage: '85%', 
      resultStatus: 'Passed',
      courseName: 'B.Tech (CSE)',
      collegeName: 'Oriental Institute of Science and Technology (OIST), Bhopal',
      universityName: 'Maulana Azad National Institute of Technology (MANIT), Bhopal'
    },
    { 
      srNo: 2, 
      enrollmentNo: '0115CA221058',
      studentName: 'Anjali Verma', 
      fatherName: 'Rajesh Verma', 
      dob: '10-06-2000', 
      percentage: '90%', 
      resultStatus: 'Passed',
      courseName: 'B.Sc (Mathematics)',
      collegeName: 'Shri Vaishnav Institute of Technology and Science, Indore',
      universityName: 'Devi Ahilya Vishwavidyalaya, Indore'
    },
  ]);


  const rowExpansionTemplate = (data: PrintMigrationRow) => {
    return (
      <div className="py-4 px-12 bg-gray-50 border-b">
        <div className="mb-3">
          <span className="font-bold text-gray-800">University Name</span>
          <span className="ml-2 text-gray-700">{data.universityName}</span>
        </div>
        <div>
          <div className="font-bold text-gray-800 mb-2 text-sm">Actions</div>
          <Button 
            icon="pi pi-print" 
            className="p-button-sm" 
            style={{ backgroundColor: '#6366F1', border: 'none', borderRadius: '4px' }} 
            onClick={() => console.log("Printing Migration for:", data.studentName)}
          />
        </div>
      </div>
    );
  };

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

  return (
    <PageLayout title="Print Migration Certificate">

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <Dropdown 
            label="Select Migration Year" required
            placeholder="Select"
            value={filters.migrationYear}
            options={migrationYears}
            onChange={(e) => setFilters({ ...filters, migrationYear: e.value })}
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
          <Button label="Search" className="px-12" style={{ backgroundColor: '#4F46E5', border: 'none' }} />
          <Button 
            type="button" label="Clear" 
            className="p-button-danger p-button-outlined px-12"
            style={{ backgroundColor: '#FEE2E2', color: '#EF4444', border: 'none' }}
            onClick={() => setFilters({ migrationYear: null, semester: null })}
          />
        </div>
      </div>


      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="p-2 mb-4">
           <h2 className="text-lg font-medium text-gray-700">Print Migration Certificate List</h2>
        </div>
        
        <Table 
          columns={columns} 
          data={migrationData} 
          showPagination 
          rowsPerPage={10}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="enrollmentNo"
        />
      </div>
    </PageLayout>
  );
};

export default PrintMigrationCertificate;