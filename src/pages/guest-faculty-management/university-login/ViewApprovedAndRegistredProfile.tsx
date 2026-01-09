/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown } from '../../../ui/shared';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface CollegeGuestApplicant {
  id: string;
  srNo: number;
  guestFacultyName: string;
  verificationRequestId: string;
  status: 'Approved' | 'Rejected';
  universityName: string;
  subject: string;
}

interface AssessmentMark {
  srNo: number;
  assessmentBreakdown: string;
  totalMarks: string;
  obtainedMarks: number | string;
}

const ApprovedProfilesAllColleges: React.FC = () => {
  const [currentView, setCurrentView] = useState<'list' | 'marks'>('list');
  const [expandedRows, setExpandedRows] = useState<any>(null);
  
  const [filterData, setFilterData] = useState({
    academicYear: null,
    college: null
  });

  const [applicants] = useState<CollegeGuestApplicant[]>([
    { id: '1', srNo: 1, guestFacultyName: 'Ram singh', verificationRequestId: '7859685484', status: 'Approved', universityName: 'DAVV Indore', subject: 'Economics' },
    { id: '2', srNo: 2, guestFacultyName: 'Arvind Sharma', verificationRequestId: '8839664805', status: 'Approved', universityName: 'RGPV Bhopal', subject: 'IT' },
    { id: '3', srNo: 3, guestFacultyName: 'Devansh Patidar', verificationRequestId: '8839664805', status: 'Rejected', universityName: 'DAVV Indore', subject: 'Commerce' },
    { id: '4', srNo: 4, guestFacultyName: 'Harsh Jain', verificationRequestId: '8839664805', status: 'Rejected', universityName: 'DAVV Indore', subject: 'Maths' },
    { id: '5', srNo: 5, guestFacultyName: 'Mukesh Verma', verificationRequestId: '788455115', status: 'Approved', universityName: 'RGPV Bhopal', subject: 'Physics' },
    { id: '6', srNo: 6, guestFacultyName: 'Arjun Kushwaha', verificationRequestId: '788455115', status: 'Approved', universityName: 'RGPV Bhopal', subject: 'Chemistry' },
  ]);

  const assessmentMarks: AssessmentMark[] = [
    { srNo: 1, assessmentBreakdown: 'Written Exam Marks', totalMarks: '100', obtainedMarks: 79 },
    { srNo: 2, assessmentBreakdown: 'Interview Marks', totalMarks: '50', obtainedMarks: 40 },
    { srNo: 3, assessmentBreakdown: 'Have Phd', totalMarks: 'Yes(10) /No(0)', obtainedMarks: 10 },
    { srNo: 4, assessmentBreakdown: 'Have masters', totalMarks: 'Yes(10) /No(0)', obtainedMarks: 5 },
    { srNo: 5, assessmentBreakdown: 'Graduation Aggregate CGPA', totalMarks: '10', obtainedMarks: 7.9 },
    { srNo: 6, assessmentBreakdown: '12th Grade Marks', totalMarks: '100', obtainedMarks: 80 },
    { srNo: 7, assessmentBreakdown: 'Total Aggregate Marks', totalMarks: '280', obtainedMarks: 221.9 },
  ];

  const rowExpansionTemplate = (data: CollegeGuestApplicant) => {
    return (
      <div className="p-4 bg-gray-50 border-y border-gray-100 space-y-2">
        <p><span className="font-bold">University:</span> {data.universityName}</p>
        <p><span className="font-bold">Subject:</span> {data.subject}</p>
      </div>
    );
  };

  return (
    <PageLayout title="View Approved / Registered Profile (All Colleges)">
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Dropdown 
            label="Select Academic Year" required
            placeholder="Select"
            value={filterData.academicYear}
            options={[{label: '2024-25', value: '2024-25'}]}
            onChange={(e) => setFilterData({...filterData, academicYear: e.value})}
          />
          <Dropdown 
            label="Select College" required
            placeholder="Select"
            value={filterData.college}
            options={[{label: 'College A', value: 'A'}]}
            onChange={(e) => setFilterData({...filterData, college: e.value})}
          />
        </div>
        <div className="flex gap-3 justify-center">
          <Button label="Search" className="px-10" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          <Button label="Clear" className="px-10" style={{ backgroundColor: '#FEE2E2', color: '#EF4444', border: 'none' }} />
        </div>
      </div>

      {currentView === 'list' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 font-bold text-gray-700">College Guest Applicants</div>
          
          <DataTable 
            value={applicants} 
            expandedRows={expandedRows} 
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate}
            dataKey="id"
            className="text-sm"
          >
            <Column expander style={{ width: '3rem' }} />
            <Column field="srNo" header="Sr. no" />
            <Column field="guestFacultyName" header="Guest Faculty Name" />
            <Column field="verificationRequestId" header="Verification Request ID" />
            
            <Column 
              header="Assessment" 
              body={() => (
                <Button 
                  icon="pi pi-eye" 
                  className="p-button-sm" 
                  style={{ backgroundColor: '#6366F1', border: 'none' }}
                  onClick={() => setCurrentView('marks')} 
                />
              )} 
            />
            <Column 
              header="Status" 
              body={(rowData: CollegeGuestApplicant) => (
                <Button 
                  label={rowData.status} 
                  className={`p-button-sm px-4 w-24 ${rowData.status === 'Approved' ? 'p-button-primary' : 'p-button-danger'}`}
                  style={rowData.status === 'Approved' ? { backgroundColor: '#6366F1' } : {}}
                />
              )} 
            />
          </DataTable>
        </div>
      )}

      {currentView === 'marks' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 font-bold text-gray-700">Applicant Marks Detail</div>
          
          <DataTable value={assessmentMarks} className="text-sm">
            <Column field="srNo" header="Sr. no" />
            <Column field="assessmentBreakdown" header="Assessment Breakdown" />
            <Column field="totalMarks" header="Total Marks (Out of )" />
            <Column field="obtainedMarks" header="Obtained Marks" />
          </DataTable>

          <div className="p-6 flex justify-center">
            <Button 
              label="Back" 
              className="px-10" 
              style={{ backgroundColor: '#84CC16', border: 'none' }} 
              onClick={() => setCurrentView('list')}
            />
          </div>
        </div>
      )}

    </PageLayout>
  );
};

export default ApprovedProfilesAllColleges;