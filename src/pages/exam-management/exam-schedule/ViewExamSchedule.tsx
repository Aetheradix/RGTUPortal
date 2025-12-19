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

const dropdownOptions = [
  { label: 'Select', value: '' },
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
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
    console.log('Search Filters:', filters);
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
        <Dropdown
          value={filters.academicYear}
          options={dropdownOptions}
          placeholder="Academic Year *"
          className="w-full"
          onChange={(e) =>
            setFilters({ ...filters, academicYear: e.value })
          }
        />

        <Dropdown
          value={filters.courseName}
          options={dropdownOptions}
          placeholder="Select Course Name *"
          className="w-full"
          onChange={(e) =>
            setFilters({ ...filters, courseName: e.value })
          }
        />

        <Dropdown
          value={filters.specialization}
          options={dropdownOptions}
          placeholder="Select Specialization *"
          className="w-full"
          onChange={(e) =>
            setFilters({ ...filters, specialization: e.value })
          }
        />

        <Dropdown
          value={filters.semester}
          options={dropdownOptions}
          placeholder="Select Semester *"
          className="w-full"
          onChange={(e) =>
            setFilters({ ...filters, semester: e.value })
          }
        />
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
