import { Button } from 'primereact/button';
import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { type TableColumn } from '../../../ui/shared';

// Data Interface based on Image 1 & 2
interface RecruitmentRow {
  srNo: number;
  universityName: string;
  utd: string;
  subject: string;
  designation: string;
  noOfPosts: number;
  experienceCertificate: string;
  qualification?: string; // Optional for expanded view
  deadline?: string;      // Optional for expanded view
}

const TEDVacantPost: React.FC = () => {
  // 1. Mock Data from Images
  const [data] = useState<RecruitmentRow[]>([
    {
      srNo: 1,
      universityName: 'Devi Ahilya Vishwavidhyalaya, Indore',
      utd: 'School Of Economics',
      subject: 'Economics',
      designation: 'Guest Lecturer - Economics',
      noOfPosts: 8,
      experienceCertificate: 'Minimum 2 years of teaching experience',
      qualification: "Master's in Economics",
      deadline: '2024-12-31'
    },
    {
      srNo: 2,
      universityName: 'Devi Ahilya Vishwavidhyalaya, Indore',
      utd: 'School Of Statistics',
      subject: 'Statistics',
      designation: 'Guest Lecturer - Statistics',
      noOfPosts: 8,
      experienceCertificate: 'Minimum 2 years of teaching experience',
    },
    {
      srNo: 3,
      universityName: 'Devi Ahilya Vishwavidhyalaya',
      utd: 'School Of Data Science',
      subject: 'Data Science',
      designation: 'Guest Lecturer - Data Science',
      noOfPosts: 10,
      experienceCertificate: 'Minimum 2 years of teaching experience',
    },
    {
      srNo: 4,
      universityName: 'Rajiv Gandhi Proudyogiki Vishvavidhyalaya',
      utd: 'School Of Information Technology',
      subject: 'Java Programming',
      designation: 'Guest Lecturer - Java',
      noOfPosts: 10,
      experienceCertificate: 'Minimum 2 years of teaching experience',
    },
    {
      srNo: 5,
      universityName: 'Rajiv Gandhi Proudyogiki Vishvavidhyalaya, Bhopal',
      utd: 'School Of Information Technology',
      subject: 'Data Analysis',
      designation: 'Guest Lecturer - Data Analysis',
      noOfPosts: 9,
      experienceCertificate: 'Minimum 2 years of teaching experience',
    }
  ]);

  // State to track which row is expanded (for the "+" and "-" icons)
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (srNo: number) => {
    setExpandedRows(prev =>
      prev.includes(srNo) ? prev.filter(id => id !== srNo) : [...prev, srNo]
    );
  };

  // 2. Table Column Definitions
  const columns: TableColumn[] = [
    {
      field: 'srNo',
      header: 'Sr No.',
      body: (rowData: RecruitmentRow) => (
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => toggleRow(rowData.srNo)}
            className={`flex items-center justify-center w-5 h-5 rounded-full text-white text-xs transition-colors ${expandedRows.includes(rowData.srNo) ? 'bg-red-500' : 'bg-indigo-500'
              }`}
          >
            <i className={`pi ${expandedRows.includes(rowData.srNo) ? 'pi-minus' : 'pi-plus'}`} style={{ fontSize: '0.6rem' }}></i>
          </button>
          <span>{rowData.srNo}</span>
        </div>
      ),
      style: { width: '100px' }
    },
    { field: 'universityName', header: 'University Name' },
    { field: 'utd', header: 'University Teaching Department (UTD)' },
    { field: 'subject', header: 'Subject' },
    { field: 'designation', header: 'Designation' },
    { field: 'noOfPosts', header: 'No. Of Posts', style: { textAlign: 'center' } },
    { field: 'experienceCertificate', header: 'Experience Certificate' },
  ];

  // Custom Row Renderer to handle the expanded info (Qualification, Deadline, Apply button)
  const rowRenderer = (rowData: RecruitmentRow) => {
    const isExpanded = expandedRows.includes(rowData.srNo);

    return (
      <React.Fragment key={rowData.srNo}>
        {/* Main Row */}
        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
          {columns.map((col, index) => (
            <td key={index} className="p-4 text-sm text-gray-700" style={col.style}>
              {col.body ? col.body(rowData) : (rowData as any)[col.field]}
            </td>
          ))}
        </tr>

        {/* Expanded Row Content (Image 2 logic) */}
        {isExpanded && rowData.qualification && (
          <tr className="bg-gray-50">
            <td colSpan={columns.length} className="p-6 border-b border-gray-200">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 text-sm">
                  <span className="font-bold text-gray-800">Qualification</span>
                  <span className="text-gray-600">{rowData.qualification}</span>
                </div>
                <div className="flex gap-2 text-sm">
                  <span className="font-bold text-gray-800">Application Deadline</span>
                  <span className="text-gray-600">{rowData.deadline}</span>
                </div>
                <div className="mt-2">
                  <span className="block font-bold text-gray-800 text-sm mb-3">Action</span>
                  <Button
                    label="Apply"
                    className="px-6 py-2 text-sm"
                    style={{ backgroundColor: '#6366F1', border: 'none' }}
                  />
                </div>
              </div>
            </td>
          </tr>
        )}
      </React.Fragment>
    );
  };

  return (
    <PageLayout title="Vacant Post">
      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {columns.map((col, index) => (
                  <th key={index} className="p-4 text-sm font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:bg-gray-100">
                    <div className="flex items-center gap-2">
                      {col.header}
                      <i className="pi pi-sort-alt text-xs text-gray-400"></i>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => rowRenderer(row))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer (As seen in image) */}
        <div className="p-4 flex justify-between items-center bg-white border-t border-gray-100 text-sm text-gray-600">
          <div>Showing 1 to {data.length} of {data.length} entries</div>
          <div className="flex gap-1">
            <Button label="Previous" className="p-button-text text-gray-500 p-0 px-3 py-1 bg-gray-100" />
            <Button label="1" className="p-button-sm" style={{ backgroundColor: '#6366F1', border: 'none' }} />
            <Button label="Next" className="p-button-text text-gray-500 p-0 px-3 py-1 bg-gray-100" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default TEDVacantPost;
