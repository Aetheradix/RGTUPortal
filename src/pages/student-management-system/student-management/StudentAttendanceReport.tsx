import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface AttendanceReportRow {
  srNo: number;
  enrollmentNo: string;
  studentName: string;
  totalMonthDays: number;
  totalPresentDays: number;
  totalAbsentDays: number;
  attendancePercentage: string;
}

const StudentAttendanceReport: React.FC = () => {
  // --- Dropdown Options ---
  const academicYears = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  const months = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  const courses = [
    { label: "B.Tech (CSE)", value: "BTECH_CSE" },
    { label: "B.Tech (IT)", value: "BTECH_IT" },
    { label: "M.C.A", value: "MCA" },
    { label: "M.B.A", value: "MBA" },
  ];

  const specializations = [
    { label: "Artificial Intelligence", value: "AI" },
    { label: "Cyber Security", value: "CYBER" },
    { label: "Cloud Computing", value: "CLOUD" },
  ];

  const semesters = [
    { label: "Semester I", value: "1" },
    { label: "Semester II", value: "2" },
    { label: "Semester III", value: "3" },
    { label: "Semester IV", value: "4" },
  ];

  const subjects = [
    { label: "Data Structures", value: "DS" },
    { label: "Operating Systems", value: "OS" },
    { label: "Database Management", value: "DBMS" },
  ];

  // --- States for Filters ---
  const [filters, setFilters] = useState({
    academicYear: null,
    month: null,
    courseName: null,
    specialization: null,
    semester: null,
    subjectName: null,
  });

  // --- Mock Data for Table ---
  const [reportData] = useState<AttendanceReportRow[]>([
    { srNo: 1, enrollmentNo: '0501CS221C01', studentName: 'Arnav Gupta', totalMonthDays: 30, totalPresentDays: 28, totalAbsentDays: 2, attendancePercentage: '93%' },
    { srNo: 2, enrollmentNo: '0501CS221C02', studentName: 'Ananya Sharma', totalMonthDays: 30, totalPresentDays: 25, totalAbsentDays: 5, attendancePercentage: '83%' },
    { srNo: 3, enrollmentNo: '0501CS221C03', studentName: 'Ravi Kumar', totalMonthDays: 30, totalPresentDays: 18, totalAbsentDays: 12, attendancePercentage: '60%' },
    { srNo: 4, enrollmentNo: '0501CS221C04', studentName: 'Priya Yadav', totalMonthDays: 30, totalPresentDays: 20, totalAbsentDays: 10, attendancePercentage: '66%' },
    { srNo: 5, enrollmentNo: '0501CS221C05', studentName: 'Alok Verma', totalMonthDays: 30, totalPresentDays: 22, totalAbsentDays: 8, attendancePercentage: '73%' },
    { srNo: 6, enrollmentNo: '0501CS221C06', studentName: 'Simran Singh', totalMonthDays: 30, totalPresentDays: 26, totalAbsentDays: 4, attendancePercentage: '86%' },
    { srNo: 7, enrollmentNo: '0501CS221C07', studentName: 'Manish Kumar', totalMonthDays: 30, totalPresentDays: 30, totalAbsentDays: 0, attendancePercentage: '100%' },
    { srNo: 8, enrollmentNo: '0501CS221C08', studentName: 'Anjali Sharma', totalMonthDays: 30, totalPresentDays: 18, totalAbsentDays: 12, attendancePercentage: '60%' },
    { srNo: 9, enrollmentNo: '0501CS221C09', studentName: 'Vikash Yadav', totalMonthDays: 30, totalPresentDays: 20, totalAbsentDays: 10, attendancePercentage: '66%' },
    { srNo: 10, enrollmentNo: '0501CS221C10', studentName: 'Kavita Rani', totalMonthDays: 30, totalPresentDays: 29, totalAbsentDays: 1, attendancePercentage: '96%' },
  ]);

  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr.No.', style: { width: '80px' } },
    { field: 'enrollmentNo', header: 'Enrollment No' },
    { field: 'studentName', header: 'Student Name' },
    { field: 'totalMonthDays', header: 'Total Month Days' },
    { field: 'totalPresentDays', header: 'Total Present Days' },
    { field: 'totalAbsentDays', header: 'Total Absent Days' },
    { field: 'attendancePercentage', header: 'Attendance Percentage' },
  ];

  return (
    <PageLayout title="Student Attendance Report">
      {/* FILTER SECTION*/}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Dropdown 
            label="Academic Year" required
            placeholder="Select"
            value={filters.academicYear}
            options={academicYears}
            onChange={(e) => setFilters({ ...filters, academicYear: e.value })}
          />
          <Dropdown 
            label="Select Month" required
            placeholder="Select"
            value={filters.month}
            options={months} 
            onChange={(e) => setFilters({ ...filters, month: e.value })}
          />
          <Dropdown 
            label="Select Course Name" required
            placeholder="Select"
            value={filters.courseName}
            options={courses} 
            onChange={(e) => setFilters({ ...filters, courseName: e.value })}
          />
          <Dropdown 
            label="Select Specialization" required
            placeholder="Select"
            value={filters.specialization}
            options={specializations} 
            onChange={(e) => setFilters({ ...filters, specialization: e.value })}
          />
          <Dropdown 
            label="Select Semester" required
            placeholder="Select"
            value={filters.semester}
            options={semesters} 
            onChange={(e) => setFilters({ ...filters, semester: e.value })}
          />
          <Dropdown 
            label="Select Subject Name" required
            placeholder="Select"
            value={filters.subjectName}
            options={subjects} 
            onChange={(e) => setFilters({ ...filters, subjectName: e.value })}
          />
        </div>

        <div className="flex gap-3 justify-center pt-8 border-t mt-6">
          <Button label="Search" className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          <Button 
            type="button" 
            label="Clear" 
            className="p-button-danger p-button-outlined px-12 py-3"
            style={{ borderRadius: "8px" }}
            onClick={() => setFilters({
              academicYear: null,
              month: null,
              courseName: null,
              specialization: null,
              semester: null,
              subjectName: null,
            })}
          />
        </div>
      </div>

      {/* REPORT TABLE SECTION*/}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="p-2 mb-4">
           <h2 className="text-lg font-bold text-gray-700">Student Attendance Report</h2>
        </div>
        
        <Table 
          columns={columns} 
          data={reportData} 
          showPagination 
          rowsPerPage={10}
        />
      </div>
    </PageLayout>
  );
};

export default StudentAttendanceReport;