import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import PageLayout from '@/components/PageLayout';

interface ExamFeeDate {
  id: number;
  academicYear: string;
  examType: string;
  examName: string;
  courseName: string;
  semester: string;
  withoutLateDate: string;
  withLateDate: string;
  lateFee: number;
}

const selectOptions = [
  { label: 'Select', value: '' },
  { label: '2024-25', value: '2024-25' },
  { label: '2025-26', value: '2025-26' },
];

const SetExamFeeLastDate: React.FC = () => {
  const [view, setView] = useState<'list' | 'details' | 'add'>('list');
  const [selectedRow, setSelectedRow] = useState<ExamFeeDate | null>(null);

  const examFeeList: ExamFeeDate[] = [
    {
      id: 1,
      academicYear: '2024-25',
      examType: 'Theory Exam',
      examName: 'Final Exam',
      courseName: 'B.Tech',
      semester: '1st Semester',
      withoutLateDate: '01/11/2024',
      withLateDate: '15/11/2024',
      lateFee: 500,
    },
  ];

  return (
    <PageLayout title="Set last date (with / Without late fees)">
     
      {view === 'list' && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Set last date (with / Without late fees) List
            </h2>
            <Button
              label="Add Exam Fee Last Date"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

          <DataTable
  value={examFeeList}
  paginator
  rows={10}
  showGridlines
  dataKey="id"
  className="p-datatable-sm"
>
  <Column
    header="Sr No."
    body={(_, opt) => opt.rowIndex + 1}
    style={{ width: "80px" }}
    sortable
  />

  <Column
    field="academicYear"
    header="Academic Year"
    sortable
  />

  <Column
    field="examType"
    header="Exam Type"
    sortable
  />

  <Column
    field="examName"
    header="Exam Name"
    sortable
    body={(row) => (
      <span
        className="text-blue-600 cursor-pointer font-medium hover:underline"
        onClick={() => {
          setSelectedRow(row);
          setView("details");
        }}
      >
        {row.examName}
      </span>
    )}
  />
</DataTable>

        </>
      )}

      {view === 'details' && selectedRow && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Exam Fee Last Date Details</h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
            <div><strong>Course Name:</strong> {selectedRow.courseName}</div>
            <div><strong>Semester:</strong> {selectedRow.semester}</div>
            <div>
              <strong>Last Date (Without Late Fees):</strong>{' '}
              {selectedRow.withoutLateDate}
            </div>
            <div>
              <strong>Last Date (With Late Fees):</strong>{' '}
              {selectedRow.withLateDate}
            </div>
            <div>
              <strong>Late Fee Amount:</strong> ₹{selectedRow.lateFee}
            </div>
          </div>
        </>
      )}

      {view === 'add' && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">
              Add Set last date (with / Without late fees)
            </h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Dropdown placeholder="Academic Year *" options={selectOptions} />
            <Dropdown placeholder="Select Exam Type Name *" options={selectOptions} />
            <Dropdown placeholder="Select Exam Name *" options={selectOptions} />
            <Dropdown placeholder="Select Course Name *" options={selectOptions} />
            <Dropdown placeholder="Select Semester *" options={selectOptions} />

            <Calendar
              placeholder="Set Last Date (Without Late Fees) *"
              dateFormat="dd/mm/yy"
              className="w-full"
            />
            <Calendar
              placeholder="Set Last Date (With Late Fees) *"
              dateFormat="dd/mm/yy"
              className="w-full"
            />
            <InputText placeholder="Late Fee Amount *" />
          </div>

          <div className="flex gap-3 mt-6">
            <Button label="Save" icon="pi pi-save" />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
            />
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default SetExamFeeLastDate;
