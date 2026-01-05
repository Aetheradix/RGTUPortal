import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { RadioButton } from 'primereact/radiobutton';
import { DateInput } from '../../../ui/shared/Input'; // Ensure this matches your file structure

// Interface for Student Attendance Row
interface MarkAttendanceRow {
  id: number;
  enrollmentNo: string;
  studentName: string;
  specialization: string;
  semester: string;
  status: 'Present' | 'Absent';
}

const courses = [
  { label: "B.Tech ", value: "B.Tech " },
  { label: "M.Tech ", value: "M.Tech " },
  { label: "BCA", value: "BCA" },
  { label: "MCA", value: "MCA" },
];

const specializations = [
  { label: "Computer Science", value: "CS" },
  { label: "Internet of Things(IoT)", value: "IoT" },
  { label: "Artificial Intelligence(AIR)", value: "AIR" },
];

const semesters = [
  { label: "I", value: "I" },
  { label: "II", value: "II" },
  { label: "III", value: "III" },
];

const subjects = [{ label: 'Software Engineering', value: 'SE' }];

const dummyStudents: MarkAttendanceRow[] = [
  { id: 1, enrollmentNo: '0501CS221M01', studentName: 'Rahul Verma', specialization: 'Computer Science', semester: '5th', status: 'Present' },
  { id: 2, enrollmentNo: '0501CS221M02', studentName: 'Priya Sharma', specialization: 'Computer Science', semester: '5th', status: 'Present' },
  { id: 3, enrollmentNo: '0501CS221M03', studentName: 'Ankit Joshi', specialization: 'Computer Science', semester: '5th', status: 'Present' },
  { id: 4, enrollmentNo: '0501CS221M04', studentName: 'Neha Gupta', specialization: 'Computer Science', semester: '5th', status: 'Present' },
];

const MarkAttendance: React.FC = () => {
  const [formData, setFormData] = useState({
    attendanceDate: null as Date | null, 
    courseName: null as string | null,
    specialization: null as string | null,
    semester: null as string | null,
    subject: null as string | null,
  });

  const [studentList, setStudentList] = useState<MarkAttendanceRow[]>(dummyStudents);

  const handleStatusChange = (id: number, newStatus: 'Present' | 'Absent') => {
    setStudentList(prev => 
      prev.map(row => row.id === id ? { ...row, status: newStatus } : row)
    );
  };

  const columns: TableColumn[] = [
    { field: 'id', header: 'Sr No.', sortable: true, style: { width: '70px' } },
    { field: 'enrollmentNo', header: 'Enrollment No.', sortable: true },
    { field: 'studentName', header: 'Student Name', sortable: true },
    { field: 'specialization', header: 'Specialization', sortable: true },
    { field: 'semester', header: 'Semester', sortable: true },
    {
      field: 'status',
      header: 'Attendance',
      body: (row: MarkAttendanceRow) => (
        <div className="flex gap-4 items-center">
          <div className="flex items-center">
            <RadioButton 
              inputId={`pres-${row.id}`} 
              name={`status-${row.id}`} 
              value="Present" 
              onChange={() => handleStatusChange(row.id, 'Present')} 
              checked={row.status === 'Present'} 
            />
            <label htmlFor={`pres-${row.id}`} className="ml-2 text-sm cursor-pointer">Present</label>
          </div>
          <div className="flex items-center">
            <RadioButton 
              inputId={`abs-${row.id}`} 
              name={`status-${row.id}`} 
              value="Absent" 
              onChange={() => handleStatusChange(row.id, 'Absent')} 
              checked={row.status === 'Absent'} 
            />
            <label htmlFor={`abs-${row.id}`} className="ml-2 text-sm cursor-pointer">Absent</label>
          </div>
        </div>
      )
    },
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

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Fetching students for:', formData);
  };

  const onSave = () => {
    console.log('Attendance Saved:', studentList);
    // Add success message/toast here
  };

  return (
    <PageLayout title="Mark Attendance">
      <form onSubmit={onSearch} className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DateInput
            label="Attendance Date"
            required
            value={formData.attendanceDate}
            onChange={(e) => setFormData({ ...formData, attendanceDate: e.value as Date })}
            dateFormat="dd/mm/yy"
            showIcon
            placeholder="dd/mm/yyyy"
          />

          <Dropdown
            label="Select Course Name"
            required
            value={formData.courseName}
            options={courses}
            onChange={(e) => setFormData({ ...formData, courseName: e.value })}
            placeholder="Select"
          />

          <Dropdown
            label="Select Specialization"
            required
            value={formData.specialization}
            options={specializations}
            onChange={(e) => setFormData({ ...formData, specialization: e.value })}
            placeholder="Select"
          />

          <Dropdown
            label="Select Semester"
            required
            value={formData.semester}
            options={semesters}
            onChange={(e) => setFormData({ ...formData, semester: e.value })}
            placeholder="Select"
          />

          <Dropdown
            label="Select Subject"
            required
            value={formData.subject}
            options={subjects}
            onChange={(e) => setFormData({ ...formData, subject: e.value })}
            placeholder="Select"
          />
        </div>

        <div className="flex gap-3 justify-center">
                 <Button
                   type="submit"
                   label="Search"
                   className="px-6"
                   style={{ backgroundColor: "#6366F1" }}
                 />
                 <Button
                   type="button"
                   label="Clear"
                   className="p-button-danger p-button-outlined px-6"
                   
                   style={{ color: "#ff4d4d", borderColor: "#ff4d4d" }}
                   onClick={onClear}
                 />
               </div>
      </form>

      {/* Student List Table */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <Table columns={columns} data={studentList} showPagination rowsPerPage={10} />
        
        {/* Footer Action Buttons */}
        <div className="flex gap-3 justify-center mt-6 p-4 border-t border-gray-50">
          <Button label="Save "  className="px-8" style={{ backgroundColor: '#6366F1', border: 'none' }} onClick={onSave} />
          <Button label="Clear "  className="p-button-danger p-button-outlined px-8"  />
        </div>
      </div>
    </PageLayout>
  );
};

export default MarkAttendance;