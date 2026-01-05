import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Table, type TableColumn } from '../../../ui/shared';
import { Button } from 'primereact/button';

interface VacantPostRow {
  id: number;
  collegeName: string;
  department: string;
  designation: string;
  posts: number;
  experience: string;
  qualification: string;
  deadline: string;
}

const VacantPost: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const rows: VacantPostRow[] = [
    {
      id: 1,
      collegeName: 'Maulana Azad National Institute of Technology (MANIT), Bhopal',
      department: 'Computer Science',
      designation: 'Guest Lecturer - Computer Science',
      posts: 8,
      experience: 'Minimum 2 years of teaching experience',
      qualification: "Master's in Computer Science",
      deadline: '2024-12-31',
    },
    {
      id: 2,
      collegeName: 'Institute of Engineering and Technology (IET-DAVV), Indore',
      department: 'Electrics',
      designation: 'Guest Lecturer - Electrics',
      posts: 10,
      experience: 'Minimum 2 years of teaching experience',
      qualification: "Master's in Computer Science",
      deadline: '2024-12-31',
    },
    {
      id: 3,
      collegeName: 'Government Engineering College, Jabalpur',
      department: 'Electrics',
      designation: 'Guest Lecturer - Electrics',
      posts: 10,
      experience: 'Minimum 2 years of teaching experience',
      qualification: "Master's Degree in Engineering",
      deadline: '2024-12-31',
    },
    {
      id: 4,
      collegeName: 'Lakshmi Narain College of Technology (LNCT), Bhopal',
      department: 'Computer Science',
      designation: 'Guest Lecturer - Computer Science',
      posts: 9,
      experience: 'Minimum 2 years of teaching experience',
      qualification: "Master's in Computer Science",
      deadline: '2024-12-31',
    },
  ];

  const toggleRow = (id: number) => {
    setExpandedRows(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  const columns: TableColumn[] = [
    {
      header: 'Sr No.',
      body: (row: VacantPostRow) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => toggleRow(row.id)}
            className="w-5 h-5 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: expandedRows.includes(row.id) ? '#EF4444' : '#6366F1' }}
          >
            {expandedRows.includes(row.id) ? '−' : '+'}
          </button>
          {row.id}
        </div>
      ),
      field: ''
    },
    { header: 'College Name', field: 'collegeName' },
    { header: 'Department / Subject', field: 'department' },
    { header: 'Designation', field: 'designation' },
    { header: 'No. Of Posts', field: 'posts' },
    { header: 'Experience Certificate', field: 'experience' },
    { header: 'Qualification', field: 'qualification' },
    { header: 'Application Deadline', field: 'deadline' },
  ];

  return (
    <PageLayout title="Vacant Post">

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <Table
          columns={columns}
          data={rows}
          showPagination
          expandedRows
          expandedRowTemplate={(row: VacantPostRow) =>
            expandedRows.includes(row.id) && (
              <div className="flex items-center gap-6 px-6 py-4 bg-gray-50">
                <span className="font-semibold">Action</span>
                <Button
                  label="Apply"
                  className="px-6"
                  style={{ backgroundColor: '#6366F1', border: 'none' }}
                />
              </div>
            )
          }
        />
      </div>

    </PageLayout>
  );
};

export default VacantPost;
