import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';

import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface ExamSchedule {
  id: number;
  examDate: string;
  specialization: string;
  subject: string;
}

/* ===== DROPDOWN OPTIONS ===== */
const academicYearOptions = [
  { label: 'Select', value: '' },
  { label: '2022-23', value: '2022-23' },
  { label: '2023-24', value: '2023-24' },
  { label: '2024-25', value: '2024-25' },
];

const courseOptions = [
  { label: 'Select', value: '' },
  { label: 'B.Tech', value: 'B.Tech' },
  { label: 'MBA', value: 'MBA' },
  { label: 'BCA', value: 'BCA' },
  { label: 'B.Sc', value: 'B.Sc' },
];

const specializationOptions = [
  { label: 'Select', value: '' },
  { label: 'Computer Science', value: 'Computer Science' },
  { label: 'Electrical Engineering', value: 'Electrical Engineering' },
  { label: 'Mechanical Engineering', value: 'Mechanical Engineering' },
  { label: 'Civil Engineering', value: 'Civil Engineering' },
];

const semesterOptions = [
  { label: 'Select', value: '' },
  { label: '1st Semester', value: '1st Semester' },
  { label: '2nd Semester', value: '2nd Semester' },
  { label: '3rd Semester', value: '3rd Semester' },
  { label: '4th Semester', value: '4th Semester' },
  { label: '5th Semester', value: '5th Semester' },
  { label: '6th Semester', value: '6th Semester' },
];

const ViewExamSchedule: React.FC = () => {
  const [filters, setFilters] = useState({
    academicYear: '',
    courseName: '',
    specialization: '',
    semester: '',
  });

  const [showList, setShowList] = useState(false);

  const examScheduleList: ExamSchedule[] = [
    {
      id: 1,
      examDate: '15/12/2024',
      specialization: 'Computer Science',
      subject: 'Data Structures',
    },
    {
      id: 2,
      examDate: '16/12/2024',
      specialization: 'Electrical Engineering',
      subject: 'Circuit Theory',
    },
    {
      id: 3,
      examDate: '17/12/2024',
      specialization: 'Mechanical Engineering',
      subject: 'Thermodynamics',
    },
    {
      id: 4,
      examDate: '18/12/2024',
      specialization: 'Civil Engineering',
      subject: 'Structural Analysis',
    },
  ];

  const handleSearch = () => {
    setShowList(true);
  };

  const handleClear = () => {
    setFilters({
      academicYear: '',
      courseName: '',
      specialization: '',
      semester: '',
    });
    setShowList(false);
  };

  return (
    <PageLayout title="Exam Schedule">
      {/* ================= FILTER SECTION ================= */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">

        {/* Academic Year */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Academic Year <span className="text-red-500">*</span>
          </label>
          <Dropdown
            value={filters.academicYear}
            options={academicYearOptions}
            placeholder="Select Academic Year"
            className="w-full"
            onChange={(e) =>
              setFilters({ ...filters, academicYear: e.value })
            }
          />
        </div>

        {/* Course Name */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Course Name <span className="text-red-500">*</span>
          </label>
          <Dropdown
            value={filters.courseName}
            options={courseOptions}
            placeholder="Select Course Name"
            className="w-full"
            onChange={(e) =>
              setFilters({ ...filters, courseName: e.value })
            }
          />
        </div>

        {/* Specialization */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Specialization <span className="text-red-500">*</span>
          </label>
          <Dropdown
            value={filters.specialization}
            options={specializationOptions}
            placeholder="Select Specialization"
            className="w-full"
            onChange={(e) =>
              setFilters({ ...filters, specialization: e.value })
            }
          />
        </div>

        {/* Semester */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Semester <span className="text-red-500">*</span>
          </label>
          <Dropdown
            value={filters.semester}
            options={semesterOptions}
            placeholder="Select Semester"
            className="w-full"
            onChange={(e) =>
              setFilters({ ...filters, semester: e.value })
            }
          />
        </div>
      </div>

      <div className="flex gap-3 mb-8">
        <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
        <Button
          label="Clear"
          icon="pi pi-refresh"
          className="p-button-secondary"
          onClick={handleClear}
        />
      </div>

      {/* ================= LIST ================= */}
      {showList && (
        <>
          <h2 className="text-xl font-semibold mb-4">
            View Exam Schedule List
          </h2>

          <DataTable
            value={examScheduleList}
            paginator
            rows={10}
            showGridlines
            className="p-datatable-sm"
          >
            <Column
              header="Sr No."
              body={(_, options) => options.rowIndex + 1}
            />
            <Column field="examDate" header="Exam Date" sortable />
            <Column field="specialization" header="Specialization" sortable />
            <Column field="subject" header="Subject" sortable />
          </DataTable>
        </>
      )}
    </PageLayout>
  );
};

export default ViewExamSchedule;
