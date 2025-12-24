import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';

interface RevaluationConfig {
  id: number;
  examName: string;
  courseName: string;
  academicYear: string;
  semester: string;
  maxDays: number;
  startDate: string;
  endDate: string;
  status: string;
}

const examOptions = [
  { label: 'Select', value: '' },
  { label: 'Mid-Semester', value: 'Mid-Semester' },
  { label: 'End-Semester', value: 'End-Semester' },
  { label: 'Practical-Exam', value: 'Practical-Exam' },
];

const courseOptions = [
  { label: 'Select', value: '' },
  { label: 'B.Tech', value: 'B.Tech' },
  { label: 'M.Tech', value: 'M.Tech' },
  { label: 'BCA', value: 'BCA' },
];

const academicYearOptions = [
  { label: 'Select', value: '' },
  { label: '2023-24', value: '2023-24' },
  { label: '2024-25', value: '2024-25' },
];

const semesterOptions = [
  { label: 'Select', value: '' },
  { label: '1st', value: '1st' },
  { label: '2nd', value: '2nd' },
  { label: '3rd', value: '3rd' },
];

const revaluationList: RevaluationConfig[] = [
  {
    id: 1,
    examName: 'Mid-Semester',
    courseName: 'B.Tech',
    academicYear: '2023-24',
    semester: '1st',
    maxDays: 10,
    startDate: '2024-01-01',
    endDate: '2024-01-10',
    status: 'Active',
  },
  {
    id: 2,
    examName: 'End-Semester',
    courseName: 'M.Tech',
    academicYear: '2024-25',
    semester: '2nd',
    maxDays: 15,
    startDate: '2024-02-01',
    endDate: '2024-02-15',
    status: 'Active',
  },
  {
    id: 3,
    examName: 'Practical-Exam',
    courseName: 'BCA',
    academicYear: '2023-24',
    semester: '3rd',
    maxDays: 7,
    startDate: '2024-03-05',
    endDate: '2024-03-12',
    status: 'Active',
  },
];

const MaximumDaysForRevaluation: React.FC = () => {
  const [view, setView] = useState<'list' | 'details' | 'add'>('list');
  const [selectedRow, setSelectedRow] = useState<RevaluationConfig | null>(null);

  return (
    <PageLayout title="Maximum Days for Revaluation">

      {view === 'list' && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              Maximum Days for Revaluation List
            </h3>
            <Button
              label="Add Maximum Days for Revaluation"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

          <DataTable value={revaluationList} paginator rows={10} showGridlines>
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} />
            <Column
              header="Exam Name"
              body={(row: RevaluationConfig) => (
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => {
                    setSelectedRow(row);
                    setView('details');
                  }}
                >
                  {row.examName}
                </span>
              )}
            />
            <Column field="courseName" header="Course Name" />
            <Column field="academicYear" header="Academic Year" />
          </DataTable>
        </Card>
      )}


      {view === 'details' && selectedRow && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              Revaluation Configuration Details
            </h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block mb-1">Semester</label>
              <div>{selectedRow.semester}</div>
            </div>

            <div>
              <label className="block mb-1">Max Days Allowed</label>
              <div>{selectedRow.maxDays}</div>
            </div>

            <div>
              <label className="block mb-1">Application Start Date</label>
              <div>{selectedRow.startDate}</div>
            </div>

            <div>
              <label className="block mb-1">Application End Date</label>
              <div>{selectedRow.endDate}</div>
            </div>

            <div>
              <label className="block mb-1">Status</label>
              <Tag value={selectedRow.status} severity="success" />
            </div>
          </div>
        </Card>
      )}

 
{view === 'add' && (
  <Card>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">
        Add Maximum Days for Revaluation
      </h3>
      <Button
        label="Go Back"
        icon="pi pi-arrow-left"
        className="p-button-text"
        onClick={() => setView('list')}
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div>
        <label className="block mb-1">Select Exam Name *</label>
     
        <Dropdown options={examOptions} placeholder="Select" className="w-full" />
      </div>

      <div>
        <label className="block mb-1">Select Course *</label>
 
        <Dropdown options={courseOptions} placeholder="Select" className="w-full" />
      </div>

      <div>
        <label className="block mb-1">Select Academic Year *</label>
 
        <Dropdown options={academicYearOptions} placeholder="Select" className="w-full" />
      </div>

      <div>
        <label className="block mb-1">Select Semester *</label>
    
        <Dropdown options={semesterOptions} placeholder="Select" className="w-full" />
      </div>

      <div>
        <label className="block mb-1">Enter Maximum Days Allowed *</label>
      
        <InputText placeholder="Enter Maximum Days Allowed" className="w-full" />
      </div>

      <div>
        <label className="block mb-1">Application Start Date *</label>
        <Calendar
          placeholder="dd/mm/yyyy"
          dateFormat="dd/mm/yy"
          className="w-full"
        />
      </div>

      <div>
        <label className="block mb-1">Application End Date *</label>
        <Calendar
          placeholder="dd/mm/yyyy"
          dateFormat="dd/mm/yy"
          className="w-full"
        />
      </div>

      <div>
        <label className="block mb-1">Status *</label>
   
        <Dropdown
          options={[
            { label: 'Active', value: 'Active' },
            { label: 'Inactive', value: 'Inactive' },
          ]}
          placeholder="Select"
          className="w-full"
        />
      </div>
    </div>

    <div className="flex gap-3">
      <Button label="Save" icon="pi pi-save" />
      <Button
        label="Clear"
        icon="pi pi-refresh"
        className="p-button-secondary"
      />
    </div>
  </Card>
)}

    </PageLayout>
  );
};

export default MaximumDaysForRevaluation;
