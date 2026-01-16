import React from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table } from '../../ui/shared';
import { DateInput } from '../../ui/shared/Input';

const StudentDiary: React.FC = () => {
  const classOptions = Array.from({ length: 12 }, (_, i) => ({ label: `Class ${i + 1}`, value: `${i + 1}` }));
  const sectionOptions = [{ label: 'Section A', value: 'A' }, { label: 'Section B', value: 'B' }];
  const subjectOptions = [
    { label: 'Mathematics', value: 'Maths' },
    { label: 'Science', value: 'Science' },
    { label: 'English', value: 'English' },
    { label: 'Hindi', value: 'Hindi' }
  ];

  return (
    <PageLayout title="Student Diary">
      <div className="flex justify-between items-center mb-4">
        <div className=" text-white px-4 py-1 rounded-full text-sm font-semibold"></div>
        <span className="text-blue-700 font-bold text-sm">Post Daily Homework & Updates</span>
      </div>

      <div className=" rounded-xl p-6 bg-white mb-8 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Dropdown label="Academic Class" required placeholder="Select" options={classOptions} />
          <Dropdown label="Section" required placeholder="Select" options={sectionOptions} />
          <Dropdown label="Subject" required placeholder="Select" options={subjectOptions} />
          <DateInput label="Date" required value={new Date()} />
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <label className="text-sm font-bold text-gray-700">Homework / Daily Tasks *</label>
          <textarea className="w-full border rounded-lg p-4 h-32 focus:ring-2 focus:ring-orange-200 outline-none border-gray-300" placeholder="Type homework details here..."></textarea>
        </div>
        <div className="mt-6 flex gap-3">
          <Button label="Submit & Notify Parents" icon="pi pi-bell" className="px-8" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          <Button label="Clear" className="p-button-outlined p-button-danger px-8" />
        </div>
      </div>

      <div className=" rounded-xl bg-white overflow-hidden shadow-sm">
        <div className="p-4 border-b bg-gray-50 flex justify-between items-center">
          <span className="font-bold text-indigo-900">Recent Diary Posts</span>
          <Button label="View History" className="p-button-text p-button-sm text-orange-600" />
        </div>
        <Table columns={[
          { field: 'date', header: 'Date' },
          { field: 'class', header: 'Class' },
          { field: 'subject', header: 'Subject' },
          { field: 'content', header: 'Homework Snippet' }
        ]} data={[]} showPagination rowsPerPage={5} />
      </div>
    </PageLayout>
  );
};

export default StudentDiary;