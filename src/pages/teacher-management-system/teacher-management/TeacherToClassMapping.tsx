import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table } from '../../../ui/shared';

const TeacherClassMapping: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const teacherOptions = [
    { label: 'Dr. Aarti Mehta (Senior Faculty)', value: 'T001' },
    { label: 'Prof. Ravi Kumar (Dept Head)', value: 'T002' },
    { label: 'Mrs. Neelam Sharma (PRT)', value: 'T003' },
    { label: 'Mr. Anil Verma (PGT)', value: 'T004' }
  ];

  const classOptions = Array.from({ length: 12 }, (_, i) => ({ label: `Class ${i + 1}`, value: `${i + 1}` }));
  const subjectOptions = [
    { label: 'Mathematics', value: 'Math' }, { label: 'Physics', value: 'Phy' },
    { label: 'Chemistry', value: 'Chem' }, { label: 'English Literature', value: 'Eng' },
    { label: 'Social Science', value: 'SST' }, { label: 'Biology', value: 'Bio' }
  ];

  return (
    <PageLayout title="Teacher To Class Mapping">
      <div className="flex justify-between items-center mb-4">
        <div className=" text-white px-4 py-1 rounded-full text-sm font-semibold "></div>
        <Button 
          label={showForm ? "Back to List" : "Add New Mapping"} 
          icon={showForm ? "pi pi-undo" : "pi pi-plus"} 
          onClick={() => setShowForm(!showForm)}
          style={{ backgroundColor: '#6366F1', border: 'none' }}
          className="p-button-sm"
        />
      </div>

      {showForm ? (
        <div className="border-orange-200 border rounded-xl p-8 bg-white relative mt-4">
          <div className="absolute -top-3 left-6 bg-white px-3 border-orange-200  rounded text-blue-900 font-bold text-sm">Assign Class & Subject</div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
            <Dropdown label="Select Teacher" required options={teacherOptions} placeholder="Search Teacher..." />
            <Dropdown label="Academic Year" required options={[{label: '2025-26', value: '1'}]} value="1" />
            <Dropdown label="Class" required options={classOptions} placeholder="Select Class" />
            <Dropdown label="Section" required options={[{label: 'A', value: 'A'}, {label: 'B', value: 'B'}, {label: 'C', value: 'C'}]} />
            <Dropdown label="Subject" required options={subjectOptions} placeholder="Select Subject" />
            <Dropdown label="Class Teacher Responsibility" options={[{label: 'Yes', value: 'Y'}, {label: 'No', value: 'N'}]} placeholder="Select" />
          </div>
          <div className="flex gap-4 mt-8 pt-4 border-t border-gray-100">
            <Button label="Save " className="px-10" style={{ backgroundColor: '#6366F1', border: 'none' }} />
            <Button label="Clear" className="p-button-danger p-button-outlined px-10" />
          </div>
        </div>
      ) : (
        <div className="border-orange-200 border rounded-xl bg-white overflow-hidden mt-6">
          <div className="p-4   font-bold text-sm flex justify-between">
            <span>Current Mapping Details (2025-26)</span>
            <Button icon="pi pi-file-excel" className="p-button-text p-button-sm text-white" label="Export" />
          </div>
          <Table columns={[
            { field: 'teacher', header: 'Teacher Name' },
            { field: 'class', header: 'Class' },
            { field: 'subject', header: 'Subject' },
            { field: 'isCT', header: 'Class Teacher' }
          ]} data={[]} showPagination rowsPerPage={10} emptyMessage="No mappings found" />
        </div>
      )}
    </PageLayout>
  );
};

export default TeacherClassMapping;