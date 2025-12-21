import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

// --- Interface ---
interface TransferInRow {
  sNo: number;
  studentId: string;
  studentName: string;
  previousCollegeName: string;
  previousCourseName: string;
  newCollegeName: string;
  newCourseName: string;
}

// --- Realistic Options ---
const semesterOptions = [
  { label: 'Semester I', value: '1' },
  { label: 'Semester II', value: '2' },
  { label: 'Semester III', value: '3' },
  { label: 'Semester IV', value: '4' },
  { label: 'Semester V', value: '5' },
];

const verificationOptions = [
  { label: 'Pending Verification', value: 'Pending' },
  { label: 'Verified & Approved', value: 'Approved' },
  { label: 'Rejected - Documents Missing', value: 'Rejected' },
];

const dummyData: TransferInRow[] = [
  {
    sNo: 1,
    studentId: 'STU12345',
    studentName: 'Rahul Sharma',
    previousCollegeName: 'IET, DAVV, Indore',
    previousCourseName: 'B.Tech',
    newCollegeName: 'MANIT, Bhopal',
    newCourseName: 'MCA',
  },
  {
    sNo: 2,
    studentId: 'STU67890',
    studentName: 'Priya Singh',
    previousCollegeName: 'ABV-IIITM, Gwalior',
    previousCourseName: 'MBA',
    newCollegeName: 'IIT, Indore',
    newCourseName: 'Ph.D.',
  }
];

const AddTransferIn: React.FC = () => {
  const [formData, setFormData] = useState({
    studentId: '3265988754',
    studentName: 'Aman Verma',
    previousCollegeName: 'MANIT, Bhopal',
    previousCourseName: 'B.Tech',
    transferredCollegeName: 'IET-DAVV, Indore',
    transferredCourseName: 'M.Tech',
    dateOfAdmission: null as Date | null,
    creditsAccepted: '',
    transferredSemester: null,
    enrollmentInNewCollege: '',
    verificationStatus: null,
  });

  // Common Style for Disabled Input Boxes (Grey Box, Black Label)
  const disabledBoxStyle = {
    backgroundColor: '#F3F4F6', // gray-100
    color: '#4B5563', // gray-600
    cursor: 'not-allowed',
    border: '1px solid #E5E7EB'
  };

  const columns: TableColumn[] = [
    { field: 'sNo', header: 'S.No.', style: { width: '70px' } },
    { field: 'studentId', header: 'Student ID' },
    { field: 'studentName', header: 'Student Name' },
    { field: 'previousCollegeName', header: 'Previous College' },
    { field: 'newCollegeName', header: 'New College' },
    { field: 'newCourseName', header: 'New Course' },
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

  const handleReset = () => {
    setFormData({
      ...formData,
      dateOfAdmission: null,
      creditsAccepted: '',
      transferredSemester: null,
      enrollmentInNewCollege: '',
      verificationStatus: null,
    });
  };

  return (
    <PageLayout title="Add Transfer In">
      {/* FORM SECTION */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h2 className="text-lg font-bold text-gray-700">Student Transfer Details</h2>
          </div>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Disabled Fields (Grey Boxes) */}
            <Input label="Student ID" value={formData.studentId} disabled style={disabledBoxStyle} />
            <Input label="Student Name" value={formData.studentName} disabled style={disabledBoxStyle} />
            <Input label="Previous College" value={formData.previousCollegeName} disabled style={disabledBoxStyle} />
            
            <Dropdown 
                label="Previous Course" 
                value={formData.previousCourseName} 
                options={[]} 
                disabled 
                placeholder="B.Tech" 
                style={disabledBoxStyle} 
            />

            <Dropdown 
                label="Transferred College" 
                value={formData.transferredCollegeName} 
                options={[]} 
                disabled 
                placeholder="IET-DAVV, Indore" 
                style={disabledBoxStyle} 
            />

            <Dropdown 
                label="Transferred Course" 
                value={formData.transferredCourseName} 
                options={[]} 
                disabled 
                placeholder="M.Tech" 
                style={disabledBoxStyle} 
            />

            {/* Editable Fields (White Boxes) */}
            <DateInput 
              label="Pick Date of Admission" 
              required 
              value={formData.dateOfAdmission} 
              onChange={(e) => setFormData({...formData, dateOfAdmission: e.value as Date})} 
              showIcon
              placeholder="dd/mm/yyyy"
            />

            <Input 
              label="Credits Accepted" 
              required 
              value={formData.creditsAccepted} 
              onChange={(e) => setFormData({...formData, creditsAccepted: e.target.value})} 
              placeholder="Enter Credits" 
            />

            <Dropdown 
              label="Select Semester" 
              required 
              value={formData.transferredSemester} 
              options={semesterOptions} 
              onChange={(e) => setFormData({...formData, transferredSemester: e.value})} 
              placeholder="Select" 
            />

            <Input 
              label="New Enrollment No." 
              required 
              value={formData.enrollmentInNewCollege} 
              onChange={(e) => setFormData({...formData, enrollmentInNewCollege: e.target.value})} 
              placeholder="Enter Enrollment No." 
            />

            <Dropdown 
              label="Verification Status" 
              required 
              value={formData.verificationStatus} 
              options={verificationOptions} 
              onChange={(e) => setFormData({...formData, verificationStatus: e.value})} 
              placeholder="Select " 
            />
          </div>

          <div className="flex gap-3 justify-center pt-4 border-t">
            <Button type="submit" label="Save " className="px-10" style={{ backgroundColor: '#6366F1', border: 'none' }} />
            <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-10" onClick={handleReset} />
          </div>
        </form>
      </div>

      {/* TABLE SECTION */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex justify-between items-center p-4 bg-gray-50/50 border-b">
          <h2 className="text-lg font-bold text-gray-700">Pending Transfer In Requests</h2>
        </div>
        <Table columns={columns} data={dummyData} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default AddTransferIn;