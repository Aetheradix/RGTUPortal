import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Table, type TableColumn } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

// Interface based on Image aea398
interface AttendanceReportRow {
  srNo: number;
  attendanceDate: string;
  enrollmentNo: string;
  courseName: string;
  studentName: string;
  gender: string;
  semester: string;
  subjectName: string;
  teacherName: string;
  attendance: 'Present' | 'Absent';
}

const dummyReportData: AttendanceReportRow[] = [
  { 
    srNo: 1, 
    attendanceDate: '18/11/2024', 
    enrollmentNo: '0501CS221M01', 
    courseName: 'B.Tech', 
    studentName: 'Aryan Sharma', 
    gender: 'Male', 
    semester: '3rd Semester', 
    subjectName: 'Computer Networks', 
    teacherName: 'Prof. Ravi Kumar', 
    attendance: 'Present' 
  },
  { 
    srNo: 2, 
    attendanceDate: '18/11/2024', 
    enrollmentNo: '0501CS221M02', 
    courseName: 'MCA', 
    studentName: 'Priya Patel', 
    gender: 'Female', 
    semester: '1st Semester', 
    subjectName: 'Database Management', 
    teacherName: 'Dr. Aarti Mehta', 
    attendance: 'Absent' 
  },
];

const AttendanceReport: React.FC = () => {
  const [formData, setSearchData] = useState({
    enrollmentNo: '',
    attendanceDate: null as Date | null,
  });

  const [rows] = useState<AttendanceReportRow[]>(dummyReportData);

  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr No.', sortable: true, style: { width: '60px' } },
    { field: 'attendanceDate', header: 'Attendance Date', sortable: true },
    { field: 'enrollmentNo', header: 'Enrollment No.', sortable: true },
    { field: 'courseName', header: 'Course Name', sortable: true },
    { field: 'studentName', header: 'Student Name', sortable: true },
    { field: 'gender', header: 'Gender', sortable: true },
    { field: 'semester', header: 'Semester', sortable: true },
    { field: 'subjectName', header: 'Subject Name', sortable: true },
    { field: 'teacherName', header: 'Teacher Name', sortable: true },
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching Report for:', formData);
  };

  const handleClear = () => {
    setSearchData({ enrollmentNo: '', attendanceDate: null as Date | null, });
  };

  return (
    <PageLayout title="Attendance Report">
      {/* Search Section - Based on Image aea39a */}
      <form onSubmit={handleSearch} className="space-y-6 bg-white p-4 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          <Input
            label="Enter Enrollment No."
            required
            value={formData.enrollmentNo}
            placeholder="Enter Enrollment No."
          />

            <DateInput  
            label="Attendance Date"
            required
            value={formData.attendanceDate}
            onChange={(e) =>
              setSearchData({
                ...formData,
                attendanceDate: e.value as Date,
              })
            }
            placeholder="dd/mm/yyyy"
            dateFormat="dd/mm/yy"
            showIcon
          />

        </div>

        <div className="flex gap-3 justify-center">
          <Button 
            type="submit" 
            label="Search" 
            className="px-8" 
            style={{ backgroundColor: '#6366F1' }} 
          />
          <Button
            type="button"
            label="Clear"
            className="p-button-danger p-button-outlined px-8"
            onClick={handleClear}
          />
        </div>
      </form>

      {/* Report Table - Based on Image aea398 */}
      <div className="mt-8">
        <Table 
          title="Attendance Report List" 
          columns={columns} 
          data={rows} 
          showPagination 
          rowsPerPage={10} 
        />
      </div>
    </PageLayout>
  );
};

export default AttendanceReport;