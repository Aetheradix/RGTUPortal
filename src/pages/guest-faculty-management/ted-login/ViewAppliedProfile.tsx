/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, type TableColumn } from '../../../ui/shared';

interface AppliedProfileRow {
  srNo: number;
  collegeName: string;
  applicationId: string;
  postId: string;
  applicantName: string;
  gender: string;
  email: string;
  highestQualification?: string; 
}

const ViewAppliedProfile: React.FC = () => {
  const [filters, setFilters] = useState({
    academicYear: null,
    university: null,
  });

  const [data] = useState<AppliedProfileRow[]>([
    {
      srNo: 1,
      collegeName: 'Institute of Engineering and Technology (IET-DAVV)',
      applicationId: '633',
      postId: '2',
      applicantName: 'Vikas Upadhyay',
      gender: 'Male',
      email: 'Vikas123@gmail.com',
      highestQualification: "Master's in Computer Science"
    },
    {
      srNo: 2,
      collegeName: 'Government Engineering College, Jabalpur',
      applicationId: '123',
      postId: '4',
      applicantName: 'Arvind Sharma',
      gender: 'Male',
      email: 'arvind123@gmail.com',
    },
    {
      srNo: 3,
      collegeName: 'Government Engineering College, Rewa',
      applicationId: '153',
      postId: '3',
      applicantName: 'Munawwar Ali',
      gender: 'Male',
      email: 'Munnarwar123@gmail.com',
    },
    {
      srNo: 4,
      collegeName: 'Lakshmi Narain College of Technology (LNCT), Bhopal',
      applicationId: '144',
      postId: '7',
      applicantName: 'Manoj Patidar',
      gender: 'Male',
      email: 'Manojpatidar@123@gmail.com',
    },
    {
      srNo: 5,
      collegeName: 'Acropolis Institute of Technology and Research, Indore',
      applicationId: '124',
      postId: '8',
      applicantName: 'Arjun Kushwah',
      gender: 'Male',
      email: 'Arjun123@gmail.com',
    }
  ]);

  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (srNo: number) => {
    setExpandedRows(prev => 
      prev.includes(srNo) ? prev.filter(id => id !== srNo) : [...prev, srNo]
    );
  };

  const columns: TableColumn[] = [
    { 
      field: 'srNo', 
      header: 'Sr No.', 
      body: (rowData: AppliedProfileRow) => (
        <div className="flex items-center gap-3">
          <button 
            type="button"
            onClick={() => toggleRow(rowData.srNo)}
            className={`flex items-center justify-center w-5 h-5 rounded-full text-white text-xs ${
              expandedRows.includes(rowData.srNo) ? 'bg-red-500' : 'bg-indigo-500'
            }`}
          >
            <i className={`pi ${expandedRows.includes(rowData.srNo) ? 'pi-minus' : 'pi-plus'}`} style={{ fontSize: '0.6rem' }}></i>
          </button>
          <span>{rowData.srNo}</span>
        </div>
      ),
      style: { width: '100px' } 
    },
    { field: 'collegeName', header: 'College Name' },
    { field: 'applicationId', header: 'Application ID' },
    { field: 'postId', header: 'Post ID' },
    { field: 'applicantName', header: 'Applicant Name' },
    { field: 'gender', header: 'Gender' },
    { field: 'email', header: 'Email Address' },
  ];

  return (
    <PageLayout title="View Applied Profile All University And Colleges">
      <div className="bg-white p-6 rounded-t-lg border border-gray-100 shadow-sm mb-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <Dropdown 
            label="Select Academic Year" required
            placeholder="Select"
            value={filters.academicYear}
            options={[{label: '2023-24', value: '2023-24'}]}
            onChange={(e) => setFilters({...filters, academicYear: e.value})}
          />
          <Dropdown 
            label="Select University" required
            placeholder="Select"
            value={filters.university}
            options={[{label: 'DAVV', value: 'DAVV'}]}
            onChange={(e) => setFilters({...filters, university: e.value})}
          />
        </div>
        
        <div className="flex justify-center gap-3 pt-6">
          <Button label="Search" className="px-8" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          <Button label="Clear" className="px-8 p-button-danger p-button-outlined" style={{ backgroundColor: '#FEE2E2', color: '#EF4444', border: 'none' }} />
        </div>
      </div>
      <div className="bg-white rounded-b-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 flex justify-between items-center text-sm border-b border-gray-50">
           <div className="flex items-center gap-2">
             Show <select className="border rounded p-1"><option>10</option></select> entries
           </div>
           <div className="flex items-center gap-2">
             Search: <input type="text" className="border rounded p-1" />
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b">
              <tr>
                {columns.map((col, i) => (
                  <th key={i} className="p-4 text-xs font-bold text-gray-600 uppercase">
                    {col.header} <i className="pi pi-sort-alt ml-1 text-gray-300"></i>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <React.Fragment key={row.srNo}>
                  <tr className="border-b hover:bg-gray-50 transition-colors">
                    {columns.map((col, i) => (
                      <td key={i} className="p-4 text-sm text-gray-700">
                        {col.body ? col.body(row) : (row as any)[col.field]}
                      </td>
                    ))}
                  </tr>
                  {expandedRows.includes(row.srNo) && row.highestQualification && (
                    <tr className="bg-gray-50">
                      <td colSpan={columns.length} className="p-6">
                        <div className="flex flex-col gap-4">
                          <div className="text-sm">
                            <span className="font-bold">Highest Qualification </span> 
                            <span className="text-gray-600">{row.highestQualification}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-bold text-sm">Resume/CV</span>
                            <Button label="View" className="p-button-sm px-4" style={{ backgroundColor: '#6366F1', border: 'none' }} />
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 flex justify-between items-center bg-white text-xs text-gray-500">
          <div>Showing 1 to 5 of 5 entries</div>
          <div className="flex gap-1">
            <Button label="Previous" className="p-button-text text-gray-400 bg-gray-100 px-3 py-1" />
            <Button label="1" className="p-button-sm bg-indigo-500 border-none px-3 py-1 text-white" />
            <Button label="Next" className="p-button-text text-gray-400 bg-gray-100 px-3 py-1" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ViewAppliedProfile;