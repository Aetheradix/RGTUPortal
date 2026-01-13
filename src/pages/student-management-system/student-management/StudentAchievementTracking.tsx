/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface AchievementRow {
  srNo: number;
  enrollmentNo: string;
  studentName: string;
  semester: string;
  academicYear: string;
  achievement: string;
  achievementTitle: string;
}

const StudentAchievementTracking: React.FC = () => {
  const [formData, setFormData] = useState({
    enrollmentNo: '',
    studentName: '',
    semester: null,
    achievement: null,
    academicYear: null,
    title: '',
  });

  const [rows] = useState<AchievementRow[]>([
    { srNo: 1, enrollmentNo: '0501CS221C01', studentName: 'Aruhi Sharma', semester: '3rd Semester', academicYear: '2023-24', achievement: 'Volunteer Work', achievementTitle: 'Active Participation in NSS Camp' },
    { srNo: 2, enrollmentNo: '0501CS221C02', studentName: 'Arnav Gupta', semester: '5th Semester', academicYear: '2022-23', achievement: 'Sports Achievement', achievementTitle: 'Gold Medal in Athletics' },
    { srNo: 3, enrollmentNo: '0501CS221C03', studentName: 'Neha Sharma', semester: '4th Semester', academicYear: '2023-24', achievement: 'Innovation Award', achievementTitle: 'Best Project in Coding Competition' },
    { srNo: 4, enrollmentNo: '0501CS221C04', studentName: 'Ravi Kumar', semester: '8th Semester', academicYear: '2020-21', achievement: 'Academic Excellence', achievementTitle: 'First Rank in Batch' },
    { srNo: 5, enrollmentNo: '0501CS221C05', studentName: 'Priya Yadav', semester: '7th Semester', academicYear: '2023-24', achievement: 'Cultural Participation', achievementTitle: 'Winner of State-Level Dance Competition' },
  ]);

  const semesterOptions = [
    { label: '1st Semester', value: '1st' },
    { label: '2nd Semester', value: '2nd' },
    { label: '3rd Semester', value: '3rd' },
  ];

  const achievementOptions = [
    { label: 'Volunteer Work', value: 'Volunteer' },
    { label: 'Sports Achievement', value: 'Sports' },
    { label: 'Innovation Award', value: 'Innovation' },
  ];

  const academicYearOptions = [
    { label: '2023-24', value: '2023-24' },
    { label: '2024-25', value: '2024-25' },
  ];

  const actionTemplate = (_rowData: AchievementRow) => (
    <div className="flex gap-2">
      <Button 
        icon="pi pi-pencil" 
        className="p-button-rounded p-button-sm" 
        style={{ backgroundColor: '#6366F1', border: 'none' }} 
      />
      <Button 
        icon="pi pi-trash" 
        className="p-button-rounded p-button-danger p-button-sm" 
      />
    </div>
  );

  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr No.', style: { width: '60px' } },
    { field: 'enrollmentNo', header: 'Enrollment No.', sortable: true },
    { field: 'studentName', header: 'Student Name', sortable: true },
    { field: 'semester', header: 'Semester' },
    { field: 'academicYear', header: 'Academic Year' },
    { field: 'achievement', header: 'Achievement' },
    { field: 'achievementTitle', header: 'Achievement Title' },
    { header: 'Actions', body: actionTemplate, field: '' },
  ];

  return (
    <PageLayout title="Student Achievement Tracking">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
      
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Input 
              label="Enter Student Enrollment No." required
              placeholder="Enter Student Enrollment No."
              value={formData.enrollmentNo}
              onChange={(e) => setFormData({...formData, enrollmentNo: e.target.value})}
            />
            <Input 
              label="Enter Student Name" required
              placeholder="Enter Student Name"
              value={formData.studentName}
              onChange={(e) => setFormData({...formData, studentName: e.target.value})}
            />
            <Dropdown 
              label="Select Semester" required
              placeholder="Select"
              value={formData.semester}
              options={semesterOptions}
              onChange={(e) => setFormData({...formData, semester: e.value})}
            />
            <Dropdown 
              label="Select Achievement " required
              placeholder="Select"
              value={formData.achievement}
              options={achievementOptions}
              onChange={(e) => setFormData({...formData, achievement: e.value})}
            />
            <Dropdown 
              label="Academic Year " required
              placeholder="Select"
              value={formData.academicYear}
              options={academicYearOptions}
              onChange={(e) => setFormData({...formData, academicYear: e.value})}
            />
            <Input 
              label="Enter Title " required
              placeholder="Enter Title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
            
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-700">Upload Document *</label>
               <input 
              type="file" 
              className="w-full text-sm text-gray-500 border rounded-md p-2 cursor-pointer
                         file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 
                         file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 
                         hover:file:bg-indigo-100" 
            />
            </div>
          </div>

          <div className="flex gap-3 justify-center pt-4 ">
            <Button label="Save" className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
            <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-12" />
          </div>
        </form>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-gray-700">Student Achievement Tracking List</h2>
         
        </div>
        
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

export default StudentAchievementTracking;