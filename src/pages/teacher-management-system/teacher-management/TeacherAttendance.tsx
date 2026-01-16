import React from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

const TeacherAttendance: React.FC = () => {
  return (
    <PageLayout title="Teacher Attendance">
      <div className=" rounded-xl p-6 bg-white shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <DateInput label="Attendance Date" value={new Date()} />
          <Dropdown label="Department" options={[{label: 'Primary', value: 'P'}, {label: 'Secondary', value: 'S'}]} />
          <div className="flex items-end md:col-span-2"><Button label="Search" style={{ backgroundColor: '#6366F1', border: 'none' }} /></div>
        </div>
      </div>

      <div className=" rounded-xl bg-white overflow-hidden">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr>
              <th className="p-3 border">Emp ID</th>
              <th className="p-3 border">Teacher Name</th>
              <th className="p-3 border text-center">Status (P/A/L)</th>
              <th className="p-3 border">In-Time</th>
              <th className="p-3 border">Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-3 border">EMP101</td>
              <td className="p-3 border">Rajesh Sharma</td>
              <td className="p-3 border text-center">
                 <div className="flex gap-1 justify-center">
                    <button className="bg-green-500 text-white w-8 h-8 rounded shadow">P</button>
                    <button className="bg-red-600 text-white w-8 h-8 rounded">A</button>
                    <button className=" bg-yellow-500 text-white w-8 h-8 rounded">L</button>
                 </div>
              </td>
              <td className="p-3 border"><input type="time" className="border rounded p-1" /></td>
              <td className="p-3 border"><input className="border rounded p-1 w-full" placeholder="Late/Early" /></td>
            </tr>
          </tbody>
        </table>
        <div className="p-4 bg-gray-50 flex gap-4">
           <Button label="Submit Attendance" className="p-button-primary px-8" />
           <Button label="Cancel" className="p-button-outlined p-button-danger px-8" />
        </div>
      </div>
    </PageLayout>
  );
};

export default TeacherAttendance;