import React from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown } from '../../../ui/shared';

const StudentDailyActivity: React.FC = () => {
  return (
    <PageLayout title="Daily Logs">
      <div className=" rounded-xl p-6 bg-white relative">
        <div className="absolute -top-3 left-6 bg-white px-3 border-orange-200  rounded text-blue-900 font-bold text-sm">Student Activity / Behavioral Incident Entry</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          <Dropdown label="Academic Class" options={[]} placeholder="Select Class" />
          <Dropdown label="Section" options={[]} placeholder="Select" />
          <Dropdown label="Select Student" options={[]} placeholder="Search Student" />
          <Dropdown label="Observation Type" options={[
            {label: 'Academic Performance', value: 'A'},
            {label: 'Disciplinary Incident', value: 'D'},
            {label: 'Extra Curricular Achievement', value: 'E'}
          ]} />
        </div>
        <div className="mt-6 flex flex-col gap-1">
           <label className="text-sm font-bold text-gray-700">Teacher's Note / Remark *</label>
           <textarea className="w-full border rounded-lg p-3 border-gray-300 h-24 focus:border-orange-500 outline-none" placeholder="Provide context about student's daily performance..."></textarea>
        </div>
        <div className="mt-8 flex gap-3">
           <Button label="Save " className="p-button-primary px-12" />
           <span className="text-blue-700 text-xs italic self-center">* Note: This entry will be visible in the Parent Portal immediately.</span>
        </div>
      </div>
    </PageLayout>
  );
};

export default StudentDailyActivity;