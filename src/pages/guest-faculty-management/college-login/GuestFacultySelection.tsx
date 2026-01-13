import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

interface ApplicantDetail {
  srNo: number;
  guestFacultyName: string;
  verificationRequestId: string;
  remark: string;
}

interface AssessmentMarks {
  srNo: number;
  assessmentBreakdown: string;
  totalMarks: string | number;
  obtainedMarks: number;
}

const GuestFacultySelection: React.FC = () => {
  const [searchData, setSearchData] = useState({
    academicYear: null as string | null,
    facultyId: '',
    dob: null as Date | null,
  });

  const [selectionStatus, setSelectionStatus] = useState<string | null>(null);

  const [applicantDetails] = useState<ApplicantDetail[]>([
    {
      srNo: 1,
      guestFacultyName: 'Ram singh',
      verificationRequestId: '7859685484',
      remark: 'Reason',
    }
  ]);

  const [assessmentMarks] = useState<AssessmentMarks[]>([
    { srNo: 1, assessmentBreakdown: 'Written Exam Marks', totalMarks: 100, obtainedMarks: 79 },
    { srNo: 2, assessmentBreakdown: 'Interview Marks', totalMarks: 50, obtainedMarks: 40 },
    { srNo: 3, assessmentBreakdown: 'Have Phd', totalMarks: 'Yes(10) /No(0)', obtainedMarks: 10 },
    { srNo: 4, assessmentBreakdown: 'Have masters', totalMarks: 'Yes(10) /No(0)', obtainedMarks: 5 },
    { srNo: 5, assessmentBreakdown: 'Graduation Aggregate CGPA', totalMarks: 10, obtainedMarks: 7.9 },
    { srNo: 6, assessmentBreakdown: '12th Grade Marks', totalMarks: 100, obtainedMarks: 80 },
    { srNo: 7, assessmentBreakdown: 'Total Aggregate Marks', totalMarks: 280, obtainedMarks: 221.9 },
  ]);

  const applicantColumns: TableColumn[] = [
    { field: 'srNo', header: 'Sr. no', style: { width: '80px' } },
    { field: 'guestFacultyName', header: 'Guest Faculty Name' },
    { field: 'verificationRequestId', header: 'Verification Request ID' },
    { field: 'remark', header: 'Remark' },
    {
      header: 'Resume',
      body: () => <Button label="View" className="p-button-sm px-6" style={{ backgroundColor: '#6366F1', border: 'none' }} />,
      field: '',
    },
  ];

  const assessmentColumns: TableColumn[] = [
    { field: 'srNo', header: 'Sr. no', style: { width: '80px' } },
    { field: 'assessmentBreakdown', header: 'Assessment Breakdown' },
    { field: 'totalMarks', header: 'Total Marks (Out of )' },
    { field: 'obtainedMarks', header: 'Obtained Marks' },
  ];

  return (
    <PageLayout title="Selection And Register Profile For Guest Faculty">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <Dropdown
            label="Select Academic Year"
            required
            placeholder="Select"
            value={searchData.academicYear}
            options={[{ label: '2024-25', value: '2024-25' }]}
            onChange={(e) => setSearchData({ ...searchData, academicYear: e.value })}
          />

          <Input
            label="Guest Faculty ID/ Mobile Number"
            required
            placeholder="Guest Faculty ID/ Mobile Number"
            value={searchData.facultyId}
            onChange={(e) => setSearchData({ ...searchData, facultyId: e.target.value })}
          />

          <DateInput
            label="Date Of Birth"
            required
            placeholder="dd/mm/yyyy"
            value={searchData.dob}
            onChange={(e) => setSearchData({ ...searchData, dob: e.value as Date })}
          />
        </div>

        <div className="flex gap-3 justify-center mt-8">
          <Button label="View" className="px-10" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          <Button label="Clear" className="p-button-danger p-button-outlined px-10" style={{ backgroundColor: '#FEE2E2', color: '#EF4444', border: 'none' }} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6 overflow-hidden">
        <div className="p-4 border-b border-gray-100 font-bold text-gray-700">Applicant Details</div>
        <Table
          columns={applicantColumns}
          data={applicantDetails}
          showPagination
          rowsPerPage={10}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6 overflow-hidden">
        <div className="p-4 border-b border-gray-100 font-bold text-gray-700">Applicant Marks Detail</div>
        <Table
          columns={assessmentColumns}
          data={assessmentMarks}
          showPagination
          rowsPerPage={10}
        />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6 overflow-hidden">
        <div className="p-4 border-b border-gray-100 font-bold text-gray-700">Selection Status</div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <span className="text-sm font-medium">1</span>
            <Dropdown
              label="Select"
              placeholder="Select"
              value={selectionStatus}
              options={[
                { label: 'Selected', value: 'Selected' },
                { label: 'Rejected', value: 'Rejected' }
              ]}
              onChange={(e) => setSelectionStatus(e.value)}
            />
          </div>
          
          <div className="flex justify-center mt-8">
            <Button 
                label="Save Status" 
                className="px-10 border-1 border-green-500" 
                style={{ backgroundColor: 'white', color: '#22C55E' }} 
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default GuestFacultySelection;