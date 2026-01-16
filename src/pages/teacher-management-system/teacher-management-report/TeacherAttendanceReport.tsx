import React from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

const TeacherAttendanceReport: React.FC = () => {
  return (
    <PageLayout title="Teacher Management Report">
      <div className=" rounded-xl p-6 bg-white relative shadow-sm mb-6">
        <div className="absolute -top-3 left-6 bg-white px-2 border-orange-200  rounded text-blue-800 font-bold text-sm">Attendance Summary Report</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
          <DateInput label="From Date" placeholder='dd/mm/yyyy' />
          <DateInput label="To Date" placeholder='dd/mm/yyyy' />
          <Dropdown label="Department" options={[]} placeholder="All Departments" />
          <div className="flex items-end"><Button label="Search " className="w-max" style={{ backgroundColor: '#6366F1', border: 'none' }} /></div>
        </div>
      </div>

      <div className=" rounded-xl bg-white overflow-hidden shadow-sm">
         <div className="p-4 flex justify-between items-center">
            <span className="font-bold text-sm">Attendance Log Details</span>
            <Button label="Print PDF" className="p-button-sm p-button-primary" />
         </div>
         <Table columns={[
           {field: 'date', header: 'Date'},
           {field: 'name', header: 'Teacher Name'},
           {field: 'status', header: 'Status'},
           {field: 'in', header: 'In Time'},
           {field: 'out', header: 'Out Time'}
         ]} data={[]} showPagination rowsPerPage={25} />
      </div>
    </PageLayout>
  );
};

export default TeacherAttendanceReport;