import React from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table } from '../../../ui/shared';

const TeacherMappingReport: React.FC = () => {
  return (
    <PageLayout title="Teacher Management Report">
      <div className=" rounded-xl p-6 bg-white relative shadow-sm mb-6">
        <div className="absolute -top-3 left-6 bg-white px-2 border-orange-200  rounded text-blue-800 font-bold text-sm">Filter Mapping Report</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
          <Dropdown label="Academic Year" options={[{label: '2025-26', value: '25-26'}]} />
          <Dropdown label="Class" options={[]} placeholder="All Classes" />
          <Dropdown label="Subject" options={[]} placeholder="All Subjects" />
          <div className="flex items-end"><Button label="Search"  className="w-max" style={{ backgroundColor: '#6366F1', border: 'none' }} /></div>
        </div>
      </div>

      <div className=" rounded-xl bg-white overflow-hidden">
        <div className="p-4 bg-gray-50 flex justify-between items-center">
           <span className="font-bold text-indigo-900 text-sm">Teacher to Class Mapping Details</span>
           <Button label="Export To Excel" icon="pi pi-file-excel" className="p-button-sm p-button-primary" />
        </div>
        <Table columns={[
          {field: 'teacher', header: 'Teacher Name'},
          {field: 'class', header: 'Assigned Class'},
          {field: 'subject', header: 'Subject Name'}
        ]} data={[]} showPagination rowsPerPage={20} />
      </div>
    </PageLayout>
  );
};

export default TeacherMappingReport;