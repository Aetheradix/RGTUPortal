import { Button } from 'primereact/button';
import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Dropdown, type TableColumn } from '../../../ui/shared';

interface ApprovedProfileRow {
  srNo: number;
  college: string;
  guestFacultyApplicant: string;
  verificationRequestId: string;
  assessment: string;
  status: 'Approved' | 'Rejected';
}

const ViewApprovedProfile: React.FC = () => {
  // 1. Filter State
  const [filters, setFilters] = useState({
    academicYear: null,
    university: null,
  });


  const [data] = useState<ApprovedProfileRow[]>([
    {
      srNo: 1,
      college: 'Institute of Engineering and Technology (IET-DAVV), Indore',
      guestFacultyApplicant: 'Ram singh',
      verificationRequestId: '7859685484',
      assessment: '',
      status: 'Approved'
    },
    {
      srNo: 2,
      college: 'Government Engineering College',
      guestFacultyApplicant: 'Arvind Sharma',
      verificationRequestId: '8839664805',
      assessment: '',
      status: 'Approved'
    },
    {
      srNo: 3,
      college: 'Lakshmi Narain College of Technology (LNCT)',
      guestFacultyApplicant: 'Devansh Patidar',
      verificationRequestId: '8839664805',
      assessment: '',
      status: 'Rejected'
    },
    {
      srNo: 4,
      college: 'Oriental Institute of Science and Technology (OIST), Bhopal',
      guestFacultyApplicant: 'Harsh Jain',
      verificationRequestId: '8839664805',
      assessment: '',
      status: 'Rejected'
    },
    {
      srNo: 5,
      college: 'Shri Vaishnav Institute of Technology and Science, Indore',
      guestFacultyApplicant: 'Mukesh Verma',
      verificationRequestId: '788455115',
      assessment: '',
      status: 'Approved'
    },
    {
      srNo: 6,
      college: 'Acropolis Institute of Technology and Research, Indore',
      guestFacultyApplicant: 'Arjun Kushwaha',
      verificationRequestId: '788455115',
      assessment: '',
      status: 'Approved'
    }
  ]);

  // 3. Table Column Definitions
  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr. no', style: { width: '80px' } },
    { field: 'college', header: 'College' },
    { field: 'guestFacultyApplicant', header: 'Guest Faculty Applicant' },
    { field: 'verificationRequestId', header: 'Verification Request ID' },
    { 
      field: 'assessment', 
      header: 'Assessment',
      body: () => (
        <Button 
          icon="pi pi-eye" 
          className="p-button-sm" 
          style={{ backgroundColor: '#6366F1', border: 'none', borderRadius: '4px' }} 
        />
      ),
      style: { textAlign: 'center', width: '120px' }
    },
    { 
      field: 'status', 
      header: 'Status',
      body: (rowData: ApprovedProfileRow) => (
        <Button 
          label={rowData.status} 
          className={`p-button-sm px-4 ${rowData.status === 'Approved' ? 'bg-indigo-500' : 'bg-red-500'}`}
          style={{ border: 'none', borderRadius: '4px', minWidth: '100px' }} 
        />
      ),
      style: { textAlign: 'center', width: '150px' }
    },
  ];

  return (
    <PageLayout title="View Approved / Registered Profile (All University And Colleges )">
      {/* FILTER CARD */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Dropdown 
            label="Select Academic Year" required
            placeholder="Select"
            value={filters.academicYear}
            options={[{label: '2024-25', value: '2024-25'}]}
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
        
        <div className="flex justify-center gap-3  pt-6">
          <Button label="Search" className="px-10" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          <Button label="Clear" className="px-10" style={{ backgroundColor: '#FEE2E2', color: '#EF4444', border: 'none' }} />
        </div>
      </div>

      {/* DATA TABLE CARD */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-50 bg-white">
            <h3 className="text-gray-700 font-medium">College Guest-Faculty Applicants</h3>
        </div>

        <div className="p-4 flex justify-between items-center text-sm">
           <div className="flex items-center gap-2">
             Show 
             <select className="border rounded p-1 mx-1"><option>10</option></select> 
             entries
           </div>
           <div className="flex items-center gap-2">
             Search: <input type="text" className="border border-gray-300 rounded p-1 outline-none focus:border-indigo-500" />
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                {columns.map((col, i) => (
                  <th key={i} className="p-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      {col.header}
                      <i className="pi pi-sort-alt text-gray-300 text-xs"></i>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.map((row, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  {columns.map((col, i) => (
                    <td key={i} className="p-4 text-sm text-gray-700" style={col.style}>
                      {col.body ? col.body(row) : (row as any)[col.field]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* PAGINATION FOOTER */}
        <div className="p-4 flex justify-between items-center bg-white border-t border-gray-100 text-sm text-gray-500">
          <div>Showing 1 to {data.length} of {data.length} entries</div>
          <div className="flex gap-1">
            <Button label="Previous" className="p-button-text text-gray-500 bg-gray-100 px-3 py-1 text-xs" />
            <Button label="1" className="p-button-sm bg-indigo-500 border-none px-3 py-1 text-white text-xs" />
            <Button label="Next" className="p-button-text text-gray-500 bg-gray-100 px-3 py-1 text-xs" />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ViewApprovedProfile;
