import { Button } from 'primereact/button';
import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Dropdown, Input, Table, type TableColumn } from '../../../ui/shared';
import { Textarea } from '../../../ui/shared/Input';

interface CollegeTransferRow {
  srNo: number;
  department: string;
  courseLevel: string;
  studentName: string;
  enrollmentNo: string;
  emailId: string;
  mobileNumber: string;
  faculty: string;
  currentUniversity: string;
}

const facultyOptions = [
  { label: 'Faculty of Engineering', value: 'Engineering' },
  { label: 'Faculty of Management', value: 'Management' },
  { label: 'Faculty of Commerce', value: 'Commerce' },
  { label: 'Faculty of Science', value: 'Science' },
  { label: 'Faculty of Arts', value: 'Arts' },
  { label: 'Faculty of Law', value: 'Law' },
  { label: 'Faculty of Education', value: 'Education' },
];

const universityOptions = [
  { label: 'Devi Ahilya Vishwavidyalaya (DAVV)', value: 'DAVV' },
  { label: 'Rajiv Gandhi Technological University (RGPV)', value: 'RGPV' },
  { label: 'Barkatullah University (BU)', value: 'BU' },
  { label: 'Jiwaji University', value: 'Jiwaji' },
  { label: 'Vikram University', value: 'Vikram' },
  { label: 'Rani Durgavati Vishwavidyalaya', value: 'RDVV' },
  { label: 'APS University', value: 'APSU' },
];

const courseOptions = [
  { label: 'B.Tech (CSE)', value: 'BTECH_CSE' },
  { label: 'B.Tech (Mechanical)', value: 'BTECH_ME' },
  { label: 'M.B.A (Finance)', value: 'MBA' },
  { label: 'M.C.A', value: 'MCA' },
  { label: 'B.Com (Honors)', value: 'BCOM' },
  { label: 'M.Sc (Physics)', value: 'MSC' },
  { label: 'L.L.B', value: 'LLB' },
];

const semesterOptions = [
  { label: 'Semester I', value: '1' },
  { label: 'Semester II', value: '2' },
  { label: 'Semester III', value: '3' },
  { label: 'Semester IV', value: '4' },
  { label: 'Semester V', value: '5' },
  { label: 'Semester VI', value: '6' },
  { label: 'Semester VII', value: '7' },
  { label: 'Semester VIII', value: '8' },
];

const dummyData: CollegeTransferRow[] = [
  {
    srNo: 1,
    department: 'Higher Education Department (HED)',
    courseLevel: 'Post Graduate',
    studentName: 'Meera Sharma',
    enrollmentNo: '0501CS221M03',
    emailId: 'meera.sharma@example.com',
    mobileNumber: '8765432109',
    faculty: 'Management',
    currentUniversity: 'Devi Ahilya Vishwavidyalaya (DAVV)',
  },
];

const ApplyCollegeTransfer: React.FC = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    enrollmentNo: '',
    emailId: '',
    mobileNumber: '',
    currentFaculty: null as string | null,
    currentUniversity: null as string | null,
    currentCollege: null as string | null,
    currentCourse: null as string | null,
    currentSemester: null as string | null,
    transferFaculty: null as string | null,
    transferUniversity: null as string | null,
    desiredCollege: null as string | null,
    desiredCourse: null as string | null,
    transferSemester: null as string | null,
    transferLetter: null as File | null,
    supportingDocs: null as File | null,
    reason: '',
    description: '',
  });

  const [rows] = useState<CollegeTransferRow[]>(dummyData);

  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr No.', sortable: true, style: { width: '70px' } },
    { field: 'studentName', header: 'Student Name' },
    { field: 'enrollmentNo', header: 'Enrollment No.' },
    { field: 'courseLevel', header: 'Course Level' },
    { field: 'faculty', header: 'Faculty' },
    { field: 'currentUniversity', header: 'Current University' },
    { field: 'mobileNumber', header: 'Mobile' },
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
      studentName: '', enrollmentNo: '', emailId: '', mobileNumber: '',
      currentFaculty: null, currentUniversity: null, currentCollege: null, currentCourse: null, currentSemester: null,
      transferFaculty: null, transferUniversity: null, desiredCollege: null, desiredCourse: null, transferSemester: null,
      transferLetter: null, supportingDocs: null, reason: '', description: '',
    });
  };

  return (
    <PageLayout title="Apply College Transfer">
      <form className="space-y-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">

        <div className="space-y-4">
          <h3 className="text-md font-bold text-indigo-700 border-b pb-2 flex items-center gap-2">
            <i className="pi pi-user"></i> Student Basic Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Input label="Student Name" required value={formData.studentName} onChange={(e) => setFormData({ ...formData, studentName: e.target.value })} placeholder="Enter Student Name" />
            <Input label="Enrollment No." required value={formData.enrollmentNo} onChange={(e) => setFormData({ ...formData, enrollmentNo: e.target.value })} placeholder="Enter Enrollment No." />
            <Input label="Email ID" required value={formData.emailId} onChange={(e) => setFormData({ ...formData, emailId: e.target.value })} placeholder="Enter Email" />
            <Input label="Mobile Number" required value={formData.mobileNumber} onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })} placeholder="Enter Mobile No." />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-md font-bold text-indigo-700 border-b pb-2 flex items-center gap-2">
            <i className="pi pi-building"></i> Current College Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Dropdown label="Select Faculty" required options={facultyOptions} value={formData.currentFaculty} onChange={(e) => setFormData({ ...formData, currentFaculty: e.value })} placeholder="Select" />
            <Dropdown label="Select University" required options={universityOptions} value={formData.currentUniversity} onChange={(e) => setFormData({ ...formData, currentUniversity: e.value })} placeholder="Select" />
            <Dropdown label="Select Course" required options={courseOptions} value={formData.currentCourse} onChange={(e) => setFormData({ ...formData, currentCourse: e.value })} placeholder="Select" />
            <Dropdown label="Select Semester" required options={semesterOptions} value={formData.currentSemester} onChange={(e) => setFormData({ ...formData, currentSemester: e.value })} placeholder="Select" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-md font-bold text-indigo-700 border-b pb-2 flex items-center gap-2">
            <i className="pi pi-directions"></i> Transfer College Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Dropdown label="Select Faculty" required options={facultyOptions} value={formData.transferFaculty} onChange={(e) => setFormData({ ...formData, transferFaculty: e.value })} placeholder="Select" />
            <Dropdown label="Select University" required options={universityOptions} value={formData.transferUniversity} onChange={(e) => setFormData({ ...formData, transferUniversity: e.value })} placeholder="Select" />
            <Dropdown label="Desired Course" required options={courseOptions} value={formData.desiredCourse} onChange={(e) => setFormData({ ...formData, desiredCourse: e.value })} placeholder="Select" />
            <Dropdown label="Desired Semester" required options={semesterOptions} value={formData.transferSemester} onChange={(e) => setFormData({ ...formData, transferSemester: e.value })} placeholder="Select" />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-md font-bold text-indigo-700 border-b pb-2 flex items-center gap-2">
            <i className="pi pi-file-pdf"></i> Document Uploads & Reason
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Transfer Request Letter *</label>
              <input type="file" className="text-sm border p-2 rounded w-full file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Supporting Docs *</label>
              <input type="file" className="text-sm border p-2 rounded w-full file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            </div>
            <Input label="Reason for Transfer" required value={formData.reason} onChange={(e) => setFormData({ ...formData, reason: e.target.value })} placeholder="Enter Reason" />
            <div className="flex flex-col gap-2">
              <Textarea label="Enter Description" required value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} placeholder="विवरण दर्ज करें" rows={1} />
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-center pt-4">
          <Button type="submit" label="Save " className="px-10 py-3" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          <Button type="button" label="Clear " className="p-button-danger p-button-outlined px-10" onClick={handleReset} />
        </div>
      </form>

      {/* List Section */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex justify-between items-center p-4 bg-gray-50/50 border-b">
          <h2 className="text-lg font-semibold text-gray-700">College Transfer Applications</h2>
        </div>
        <Table columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default ApplyCollegeTransfer;
