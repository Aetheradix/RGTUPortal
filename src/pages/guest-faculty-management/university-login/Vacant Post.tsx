/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';

interface JobOpening {
  id: string;
  srNo: number;
  universityName: string;
  utd: string;
  subject: string;
  designation: string;
  noOfPosts: number;
  experienceCertificate: string;
  qualification: string;
  applicationDeadline: string;
}

const UniVacantPost: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<any>(null);

  const [jobs] = useState<JobOpening[]>([
    {
      id: '1001',
      srNo: 1,
      universityName: 'Devi Ahilya Vishwavidhyalaya ,Indore',
      utd: 'School Of Economics',
      subject: 'Economics',
      designation: 'Guest Lecturer - Economics',
      noOfPosts: 8,
      experienceCertificate: 'Minimum 2 years of teaching experience',
      qualification: "Master's in Economics",
      applicationDeadline: '2024-12-31'
    },
    {
      id: '1002',
      srNo: 2,
      universityName: 'Devi Ahilya Vishwavidhyalaya ,Indore',
      utd: 'School Of Statistics',
      subject: 'Statistics',
      designation: 'Guest Lecturer - Statistics',
      noOfPosts: 8,
      experienceCertificate: 'Minimum 2 years of teaching experience',
      qualification: "Master's in Statistics",
      applicationDeadline: '2024-12-31'
    },
    {
      id: '1003',
      srNo: 3,
      universityName: 'Devi Ahilya Vishwavidhyalaya',
      utd: 'School Of Data Science',
      subject: 'Data Science',
      designation: 'Guest Lecturer - Data Science',
      noOfPosts: 10,
      experienceCertificate: 'Minimum 2 years of teaching experience',
      qualification: "Master's in Data Science",
      applicationDeadline: '2025-01-15'
    },
    {
      id: '1004',
      srNo: 4,
      universityName: 'Rajiv Gandhi Proudyogiki Vishvavidhyalaya',
      utd: 'School of Information Technology',
      subject: 'Java Programming',
      designation: 'Guest Lecturer - Java',
      noOfPosts: 10,
      experienceCertificate: 'Minimum 2 years of teaching experience',
      qualification: "M.Tech in IT/CS",
      applicationDeadline: '2024-12-25'
    },
    {
      id: '1005',
      srNo: 5,
      universityName: 'Rajiv Gandhi Proudyogiki Vishvavidhyalaya , Bhopal',
      utd: 'School of Information Technology',
      subject: 'Data Analysis',
      designation: 'Guest Lecturer - Data Analysis',
      noOfPosts: 9,
      experienceCertificate: 'Minimum 2 years of teaching experience',
      qualification: "M.Tech / MBA in Business Analytics",
      applicationDeadline: '2024-12-30'
    }
  ]);

  const rowExpansionTemplate = (data: JobOpening) => {
    return (
      <div className="p-4 bg-gray-50 border-y border-gray-100">
        <div className="space-y-3">
          <div className="flex gap-2">
            <span className="font-bold text-gray-700">Qualification</span>
            <span className="text-gray-600">{data.qualification}</span>
          </div>
          <div className="flex gap-2">
            <span className="font-bold text-gray-700">Application Deadline</span>
            <span className="text-gray-600">{data.applicationDeadline}</span>
          </div>
          <div className="pt-2 flex items-center gap-4">
            <span className="font-bold text-gray-700">Action</span>
            <Button label="Apply" className="p-button-sm px-6" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Vacant Post">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">

        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <div className="flex items-center gap-2 text-sm">
            Show
            <select className="border rounded p-1"><option>10</option></select>
            entries
          </div>
          <div className="flex items-center gap-2 text-sm">
            Search: <input type="text" className="border rounded p-1 outline-none focus:border-indigo-500" />
          </div>
        </div>

        <DataTable
          value={jobs}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          responsiveLayout="scroll"
          className="text-sm custom-expandable-table"
        >
          <Column expander={true} style={{ width: '3rem' }} />
          <Column field="srNo" header="Sr No." sortable />
          <Column field="universityName" header="University Name" sortable />
          <Column field="utd" header="University Teaching Department (UTD)" sortable />
          <Column field="subject" header="Subject" sortable />
          <Column field="designation" header="Designation" sortable />
          <Column field="noOfPosts" header="No. Of Posts" sortable />
          <Column field="experienceCertificate" header="Experience Certificate" sortable />
        </DataTable>

        <div className="flex justify-between items-center p-4 border-t border-gray-100 text-sm">
          <div>Showing 1 to 5 of 5 entries</div>
          <div className="flex gap-1">
            <Button label="Previous" className="p-button-secondary p-button-text p-1 text-gray-500" disabled />
            <Button label="1" className="p-button-sm px-3" style={{ backgroundColor: '#6366F1', border: 'none' }} />
            <Button label="Next" className="p-button-secondary p-button-text p-1 text-gray-500" disabled />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default UniVacantPost;
