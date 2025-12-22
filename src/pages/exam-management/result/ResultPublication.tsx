/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Tag } from 'primereact/tag';

interface ResultPublication {
  id: number;
  university: string;
  college: string;
  courseLevel: string;
  course: string;
  examType: string;
  academicYear: string;
  publishedDate: string;
  status: string;
  notification: string;
}

const publicationList: ResultPublication[] = [
  {
    id: 1,
    university: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal',
    college: 'Government Engineering College, Jabalpur',
    courseLevel: 'Under Graduate',
    course: 'B.Tech',
    examType: 'Mid-Term Exams',
    academicYear: '2024-2025',
    publishedDate: '29/11/2024',
    status: 'Published',
    notification: 'Yes',
  },
  {
    id: 2,
    university: 'Dr. Harisingh Gour University, Sagar',
    college: 'Institute of Engineering & Technology',
    courseLevel: 'Post Graduate',
    course: 'M.Tech',
    examType: 'End-Term Exams',
    academicYear: '2024-2025',
    publishedDate: '01/12/2024',
    status: 'Published',
    notification: 'Yes',
  },
  {
    id: 3,
    university: 'Awadhesh Pratap Singh University, Rewa',
    college: 'APS Engineering College',
    courseLevel: 'Under Graduate',
    course: 'BCA',
    examType: 'Semester Exams',
    academicYear: '2024-2025',
    publishedDate: '03/12/2024',
    status: 'Published',
    notification: 'Yes',
  },
];

const selectOptions = [{ label: 'Select', value: '' }];

const ResultPublication: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Result Publication">

 
      {view === 'list' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Result Publication List</h3>
            <Button
              label="Add Result Publication"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

          <DataTable
            value={publicationList}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: ResultPublication) => (
              <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 text-sm">
                <div><strong>College Name:</strong> {row.college}</div>
                <div><strong>Course Level:</strong> {row.courseLevel}</div>
                <div><strong>Course:</strong> {row.course}</div>
                <div><strong>Exam Type:</strong> {row.examType}</div>
                <div><strong>Academic Year:</strong> {row.academicYear}</div>
                <div><strong>Published Date:</strong> {row.publishedDate}</div>
                <div>
                  <strong>Publish Status:</strong>{' '}
                  <Tag value={row.status} severity="success" />
                </div>
                <div>
                  <strong>Notification Sent:</strong>{' '}
                  <Tag value={row.notification} severity="info" />
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="university" header="University Name" />
          </DataTable>
        </Card>
      )}

    
{view === 'add' && (
  <Card>
    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold">Add Result Publication</h3>
      <Button
        label="Go Back"
        icon="pi pi-arrow-left"
        className="p-button-text"
        onClick={() => setView('list')}
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div>
        <label className="block text-sm mb-1">Select University Name *</label>

        <Dropdown options={selectOptions} placeholder="Select" className="w-full" />
      </div>

      <div>
        <label className="block text-sm mb-1">Select College Name *</label>

        <Dropdown options={selectOptions} placeholder="Select" className="w-full" />
      </div>

      <div>
        <label className="block text-sm mb-1">Select Course Level</label>
    
        <Dropdown options={selectOptions} placeholder="Select" className="w-full" />
      </div>

      <div>
        <label className="block text-sm mb-1">Select Course *</label>
    
        <Dropdown options={selectOptions} placeholder="Select" className="w-full" />
      </div>

      <div>
        <label className="block text-sm mb-1">Select Exam Type *</label>

        <Dropdown options={selectOptions} placeholder="Select" className="w-full" />
      </div>

      <div>
        <label className="block text-sm mb-1">Select Academic Year *</label>
   
        <Dropdown options={selectOptions} placeholder="Select" className="w-full" />
      </div>

      <div>
        <label className="block text-sm mb-1">Enter Published Date *</label>
        <Calendar dateFormat="dd/mm/yy" className="w-full" placeholder="dd/mm/yyyy" />
      </div>

      <div>
        <label className="block text-sm mb-1">Notification Sent *</label>
    
        <Dropdown
          options={[
            { label: 'Sent', value: 'Sent' },
            { label: 'No', value: 'No' },
          ]}
          placeholder="Select"
          className="w-full"
        />
      </div>
    </div>

    <div className="flex gap-3">
      <Button label="Publish" icon="pi pi-check" />
      <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary" />
    </div>
  </Card>
)}
    </PageLayout>
  );
};

export default ResultPublication;
