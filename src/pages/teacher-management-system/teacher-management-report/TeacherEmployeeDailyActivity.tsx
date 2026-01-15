import React from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

const TeacherDailyActivity: React.FC = () => {
  return (
    <PageLayout title="Daily Activity Log">
      <div className="border-orange-200 border rounded-xl p-8 bg-white relative">
        <div className="absolute -top-3 left-6 bg-white px-3 border-orange-200  rounded text-blue-900 font-bold text-sm">Work Done / Daily Activity Entry</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          <DateInput label="Activity Date" value={new Date()} />
          <Dropdown label="Time Slot / Period" options={Array.from({length:8}, (_,i)=>({label:`Period ${i+1}`, value:i+1}))} />
          <Dropdown label="Activity Type" options={[
            {label: 'Theory Class', value: 'T'},
            {label: 'Lab/Practical', value: 'L'},
            {label: 'Exam Duty', value: 'E'},
            {label: 'Official Meeting', value: 'M'}
          ]} />
          <div className="md:col-span-3">
             <label className="text-sm font-bold text-gray-700">Detailed Description of Tasks Performed *</label>
             <textarea className="w-full border rounded-lg p-4 h-40 mt-1 border-gray-300 outline-none focus:border-orange-500" placeholder="Enter details of topics covered, student behavior, or administrative work..."></textarea>
          </div>
        </div>
        <div className="flex gap-4 mt-8 pt-4 border-t border-gray-100">
           <Button label="Save" style={{ backgroundColor: '#6366F1', border: 'none' }} className="px-10" />
           <Button label="Clear" className="p-button-danger p-button-outlined px-10" />
        </div>
      </div>
    </PageLayout>
  );
};

export default TeacherDailyActivity;