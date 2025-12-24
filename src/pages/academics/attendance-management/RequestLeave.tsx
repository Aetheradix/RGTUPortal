import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';
import { Checkbox } from 'primereact/checkbox';

interface LeaveRequestRow {
  srNo: number;
  studentName: string;
  courseName: string;
  teacherName: string;
  semester: string;
  enrollmentNo: string;
  fromDate: string;
  toDate: string;
  leaveType: string;
  reason: string;
}

const RequestLeaveMaster: React.FC = () => {
  // 1. State for Form Data
  const [formData, setFormData] = useState({
    studentName: 'Aryan Sharma',
    courseName: 'B.Tech',
    teacherName: 'Dr. Aarti Mehta',
    semester: '1st',
    enrollmentNo: '',
    fromDate: null as Date | null,
    toDate: null as Date | null,
    leaveType: null as string | null,
    reason: '',
    gender: 'Male',
    isActive: true
  });

  // 2. Mock Data for the Table (From Image 2)
  const [rows] = useState<LeaveRequestRow[]>([
    {
      srNo: 1,
      studentName: 'Aryan Sharma',
      courseName: 'B.Tech',
      teacherName: 'Dr. Aarti Mehta',
      semester: '1st',
      enrollmentNo: '12345678',
      fromDate: '01/12/2024',
      toDate: '03/12/2024',
      leaveType: 'Medical Leave',
      reason: 'Illness',
    },
    {
      srNo: 2,
      studentName: 'Priya Patel',
      courseName: 'M.Tech',
      teacherName: 'Prof. Ravi Kumar',
      semester: '2nd',
      enrollmentNo: '23456789',
      fromDate: '10/12/2024',
      toDate: '12/12/2024',
      leaveType: 'Personal Leave',
      reason: 'Family Event',
    },
    {
      srNo: 3,
      studentName: 'Rohit Kumar',
      courseName: 'B.Tech',
      teacherName: 'Mrs. Neelam Sharma',
      semester: '3rd',
      enrollmentNo: '34567890',
      fromDate: '15/01/2025',
      toDate: '20/01/2025',
      leaveType: 'Internship Leave',
      reason: 'Internship Program',
    },
    {
      srNo: 4,
      studentName: 'Sneha Verma',
      courseName: 'MCA',
      teacherName: 'Mr. Anil Verma',
      semester: '4th',
      enrollmentNo: '45678901',
      fromDate: '01/02/2025',
      toDate: '05/02/2025',
      leaveType: 'Medical Leave',
      reason: 'Health Issues',
    }
  ]);

  // Style for disabled/readonly fields
  const disabledInputStyle = {
    backgroundColor: '#F3F4F6',
    color: '#6B7280',
    cursor: 'not-allowed',
    border: '1px solid #E5E7EB'
  };

  // 3. Table Column Definitions
  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr No.', style: { width: '60px' } },
    { field: 'studentName', header: 'Student Name' },
    { field: 'courseName', header: 'Course Name' },
    { field: 'teacherName', header: 'Teacher Name' },
    { field: 'semester', header: 'Semester' },
    { field: 'enrollmentNo', header: 'Enrollment No.' },
    { field: 'fromDate', header: 'From Date' },
    { field: 'toDate', header: 'To Date' },
    { field: 'leaveType', header: 'Leave Type' },
    { field: 'reason', header: 'Reason' },
      {
              header: 'Action',
              body: () => (
                <div className="flex gap-2">
                  <Button icon="pi pi-pencil" className="p-button-rounded p-button-secondary p-button-sm" style={{ backgroundColor: '#6366F1' }} />
                  <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" />
                </div>
              ),
              field: '',
            },
  ];

  return (
    <PageLayout title="Request Leave">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
       

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <Dropdown 
              label="Student Name" required
              value={formData.studentName} 
              options={[{label: 'Aryan Sharma', value: 'Aryan Sharma'}]}
              disabled style={disabledInputStyle}
            />

            <Dropdown 
              label="Course Name"
              value={formData.courseName} 
              options={[{label: 'B.Tech', value: 'B.Tech'}]}
              disabled style={disabledInputStyle}
            />

            <Dropdown 
              label="Teacher Name" required
              value={formData.teacherName} 
              options={[{label: 'Dr. Aarti Mehta', value: 'Dr. Aarti Mehta'}]}
              disabled style={disabledInputStyle}
            />

            <Dropdown 
              label="Semester" required
              value={formData.semester} 
              options={[{label: '1st', value: '1st'}]}
              disabled style={disabledInputStyle}
            />

            <Input 
              label="Enrollment No." required
              placeholder="Enter Enrollment No."
              value={formData.enrollmentNo}
              onChange={(e) => setFormData({...formData, enrollmentNo: e.target.value})}
            />

            <DateInput 
              label="From Date" required
              placeholder="dd/mm/yyyy"
              value={formData.fromDate}
              onChange={(e) => setFormData({...formData, fromDate: e.value as Date})}
            />

            <DateInput 
              label="To Date" required
              placeholder="dd/mm/yyyy"
              value={formData.toDate}
              onChange={(e) => setFormData({...formData, toDate: e.value as Date})}
            />

            <Dropdown 
              label="Leave Type" required
              placeholder="Select"
              value={formData.leaveType}
              options={[
                {label: 'Medical Leave', value: 'Medical'},
                {label: 'Personal Leave', value: 'Personal'}
              ]}
              onChange={(e) => setFormData({...formData, leaveType: e.value})}
            />

            <Input 
              label="Reason for Leave" required
              placeholder="Enter Reason for Leave"
              value={formData.reason}
              onChange={(e) => setFormData({...formData, reason: e.target.value})}
            />

            <Dropdown 
              label="Gender" required
              value={formData.gender}
              options={[{label: 'Male', value: 'Male'}, {label: 'Female', value: 'Female'}]}
              disabled style={disabledInputStyle}
            />

            {/* File Upload Simulation */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-700">Supporting Documents (optional) *</label>
             <input 
              type="file" 
              className="w-full text-sm text-gray-500 border rounded-md p-2 cursor-pointer
                         file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 
                         file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 
                         hover:file:bg-indigo-100" 
            />
            </div>

            <div className="flex flex-col justify-center">
               <label className="text-sm font-bold text-gray-700 mb-2">Status *</label>
               <div className="flex items-center gap-2">
                <Checkbox inputId="isActive" onChange={e => setFormData({...formData, isActive: e.checked ?? false})} checked={formData.isActive} />
                <label htmlFor="isActive" className="text-sm">IsActive</label>
               </div>
            </div>

          </div>

          <div className="flex gap-3 justify-center pt-4">
            <Button label="Save" className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
            <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-12" />
          </div>
        </form>
      </div>

      {/* TABLE SECTION (From Image 2) */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <Table 
          columns={columns} 
          data={rows} 
          showPagination 
          rowsPerPage={10} 
        />
      </div>
    </PageLayout>
  );
};

export default RequestLeaveMaster;