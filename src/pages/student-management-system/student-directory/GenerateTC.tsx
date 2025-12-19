import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table, type TableColumn, Input } from '../../../ui/shared';

interface TCRow {
  srNo: number;
  name: string;
  fatherName: string;
  motherName: string;
  dob: string;
  gender: string;
  category: string;
}

const GenerateTC: React.FC = () => {
  // --- Dropdown Options ---
  const academicYears = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  // --- States for Filters ---
  const [filters, setFilters] = useState({
    academicYear: null,
    enrollmentNo: '',
  });

  // --- Mock Data based on Image ---
  const [tcListData] = useState<TCRow[]>([
    { 
      srNo: 1, 
      name: 'Ravi Kumar', 
      fatherName: 'Rajesh Kumar', 
      motherName: 'Sita Devi', 
      dob: '15-08-1998', 
      gender: 'Male', 
      category: 'General' 
    },
  ]);

  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr No.', sortable: true },
    { field: 'name', header: 'Name', sortable: true },
    { field: 'fatherName', header: 'Father Name', sortable: true },
    { field: 'motherName', header: 'Mother Name', sortable: true },
    { field: 'dob', header: 'Date Of Birth', sortable: true },
    { field: 'gender', header: 'Gender', sortable: true },
    { field: 'category', header: 'Category', sortable: true },
  ];

  const handleClear = () => {
    setFilters({
      academicYear: null,
      enrollmentNo: '',
    });
  };

  return (
    <PageLayout title="Generate TC">
      {/* FILTER SECTION */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <Dropdown 
            label="Select Academic Year" required
            placeholder="Select"
            value={filters.academicYear}
            options={academicYears}
            onChange={(e) => setFilters({ ...filters, academicYear: e.value })}
          />
          <Input 
            label="Enter Enrollment No." required
            placeholder="Enter Enrollment No."
            value={filters.enrollmentNo}
            onChange={(e) => setFilters({ ...filters, enrollmentNo: e.target.value })}
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
            style={{ backgroundColor: '#FEE2E2', color: '#EF4444', border: 'none' }}
            onClick={handleClear}
          />
        </div>
      </div>

      {/* LIST SECTION */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="p-2 mb-4">
           <h2 className="text-lg font-medium text-gray-700">Generate TC List</h2>
        </div>
        
        <Table 
          columns={columns} 
          data={tcListData} 
          showPagination 
          rowsPerPage={10}
        />

        {/* FOOTER ACTIONS */}
        <div className="flex gap-3 justify-center pt-8 border-t mt-6">
          <Button 
            label="Generate Tc" 
            className="px-10" 
            style={{ backgroundColor: '#6366F1', border: 'none' }} 
          />
          <Button 
            type="button" 
            label="Clear" 
            className="p-button-danger p-button-outlined px-10"
            style={{ backgroundColor: '#FEE2E2', color: '#EF4444', border: 'none' }}
            onClick={() => {}} 
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default GenerateTC;