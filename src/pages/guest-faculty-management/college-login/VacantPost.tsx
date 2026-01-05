import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';

/* 1. Interface */
interface VacantPostRow {
  id: string;

  collegeName: string;
  department: string;
  designation: string;
  posts: number;
  experience: string;
  qualification: string;
  deadline: string;
}
  
const VacantPost: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<any>(null);

  /* 2. Data */
  const [rows] = useState<VacantPostRow[]>([
    {
      id: '1',

      collegeName: 'Maulana Azad National Institute of Technology (MANIT), Bhopal',
      department: 'Computer Science',
      designation: 'Guest Lecturer - Computer Science',
      posts: 8,
      experience: 'Minimum 2 years of teaching experience',
      qualification: "Master's in Computer Science",
      deadline: '2024-12-31',
    },
    {
      id: '2',

      collegeName: 'Institute of Engineering and Technology (IET-DAVV), Indore',
      department: 'Electrics',
      designation: 'Guest Lecturer - Electrics',
      posts: 10,
      experience: 'Minimum 2 years of teaching experience',
      qualification: "Master's in Electrical Engineering",
      deadline: '2024-12-31',
    },
    {
      id: '3',

      collegeName: 'Government Engineering College, Jabalpur',
      department: 'Electrics',
      designation: 'Guest Lecturer - Electrics',
      posts: 10,
      experience: 'Minimum 2 years of teaching experience',
      qualification: "Master's Degree in Engineering",
      deadline: '2024-12-31',
    },
    {
      id: '4',

      collegeName: 'Lakshmi Narain College of Technology (LNCT), Bhopal',
      department: 'Computer Science',
      designation: 'Guest Lecturer - Computer Science',
      posts: 9,
      experience: 'Minimum 2 years of teaching experience',
      qualification: "Master's in Computer Science",
      deadline: '2024-12-31',
    },
  ]);

  /* 3. Expansion Template */
  const rowExpansionTemplate = (data: VacantPostRow) => {
    return (
      <div className="p-4 bg-gray-50 border-y border-gray-100">
        <div className="space-y-3">
          <div className="flex gap-2">
            <span className="font-semibold">Qualification:</span>
            <span>{data.qualification}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-semibold">Application Deadline:</span>
            <span>{data.deadline}</span>
          </div>
          <div className="pt-2 flex items-center gap-4">
            <span className="font-semibold">Action:</span>
            <Button
              label="Apply"
              className="p-button-sm px-6"
              style={{ backgroundColor: '#6366F1', border: 'none' }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Vacant Post">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">

        {/* Expandable Table */}
        <DataTable
          value={rows}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          scrollable={true}
          className="text-sm"
        >
          <Column expander style={{ width: '3rem' }} />

          <Column field="collegeName" header="College Name"  headerStyle={{ whiteSpace: 'nowrap' }} />
          <Column field="department" header="Department / Subject"  headerStyle={{ whiteSpace: 'nowrap' }} />
          <Column field="designation" header="Designation"  headerStyle={{ whiteSpace: 'nowrap' }}/>
          <Column field="posts" header="No. Of Posts"  headerStyle={{ whiteSpace: 'nowrap' }}/>
          <Column field="experience" header="Experience Certificate"  headerStyle={{ whiteSpace: 'nowrap' }}/>
        </DataTable>

      </div>
    </PageLayout>
  );
};

export default VacantPost;
