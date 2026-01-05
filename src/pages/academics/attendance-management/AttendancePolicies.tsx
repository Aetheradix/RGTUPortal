import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Table, type TableColumn } from '../../../ui/shared';

interface AttendancePolicyRow {
  id: number;
  minAttendance: string;
  leavePolicy: string;
  latePolicy: string;
  absenteeismPolicy: string;
  holidayPolicy: string;
  specialConsiderations: string;
  penaltyLowAttendance: string;
  isActive: boolean;
}

const dummyPolicies: AttendancePolicyRow[] = [
  { 
    id: 1, 
    minAttendance: '75%', 
    leavePolicy: '3 days leave allowed per semester', 
    latePolicy: 'Late by more than 15 minutes will be considered absent',
    absenteeismPolicy: 'Excessive absence leads to parent notification',
    holidayPolicy: 'Standard public holidays apply',
    specialConsiderations: 'Medical certificates required',
    penaltyLowAttendance: 'Fine of 500 INR',
    isActive: true 
  },
];

const AttendancePolicyMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    minAttendance: '',
    leavePolicy: '',
    latePolicy: '',
    absenteeismPolicy: '',
    holidayPolicy: '',
    specialConsiderations: '',
    penaltyLowAttendance: '',
    isActive: true,
  });

  const [rows] = useState<AttendancePolicyRow[]>(dummyPolicies);

  const columns: TableColumn[] = [
    { field: 'id', header: 'S.No', sortable: true, style: { width: '70px' } },
    { field: 'minAttendance', header: 'Minimum Attendance Requirement (%)', sortable: true },
    { field: 'leavePolicy', header: 'Leave Policy', sortable: true },
    { field: 'latePolicy', header: 'Late Policy', sortable: true },
   {
        header: 'Action',
        body: () => (
          <div className="flex gap-2">
            <Button icon="pi pi-pencil" className="p-button-rounded p-button-secondary p-button-sm" style={{ backgroundColor: '#6366F1' }} />
            <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" />
          </div>
        ),
        field: '',
      },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Attendance Policy saved:', formData);
  };

  const handleReset = () => {
    setFormData({
      minAttendance: '',
      leavePolicy: '',
      latePolicy: '',
      absenteeismPolicy: '',
      holidayPolicy: '',
      specialConsiderations: '',
      penaltyLowAttendance: '',
      isActive: true,
    });
  };

  return (
    <PageLayout title="Add Attendance Policies">
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-4 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Input
            label="Minimum Attendance Requirement (%)"
            required
            value={formData.minAttendance}
            onChange={(e) => setFormData({ ...formData, minAttendance: e.target.value })}
            placeholder="Minimum Attendance Requirement (%)"
          />

          <Input
            label="Leave Policy (Maximum Leaves Allowed)"
            required
            value={formData.leavePolicy}
            onChange={(e) => setFormData({ ...formData, leavePolicy: e.target.value })}
            placeholder="Leave Policy"
          />

          <Input
            label="Late Policy (Penalties for Late Attendance)"
            required
            value={formData.latePolicy}
            onChange={(e) => setFormData({ ...formData, latePolicy: e.target.value })}
            placeholder="Late Policy"
          />

          <Input
            label="Absenteeism Policy (Excessive Absence Actions)"
            required
            value={formData.absenteeismPolicy}
            onChange={(e) => setFormData({ ...formData, absenteeismPolicy: e.target.value })}
            placeholder="Absenteeism Policy"
          />

          <Input
            label="Holiday Policy (Public Holidays)"
            required
            value={formData.holidayPolicy}
            onChange={(e) => setFormData({ ...formData, holidayPolicy: e.target.value })}
            placeholder="Holiday Policy"
          />

          <Input
            label="Special Considerations (Health and Other)"
            required
            value={formData.specialConsiderations}
            onChange={(e) => setFormData({ ...formData, specialConsiderations: e.target.value })}
            placeholder="Special Considerations"
          />

          <Input
            label="Penalty for Low Attendance"
            required
            value={formData.penaltyLowAttendance}
            onChange={(e) => setFormData({ ...formData, penaltyLowAttendance: e.target.value })}
            placeholder="Penalty for Low Attendance"
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Status</label>
            <div className="flex items-center gap-2 mt-2">
              <Checkbox
                inputId="policyActive"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
              />
              <label htmlFor="policyActive" className="text-sm">Active</label>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          <Button type="submit" label="Save" className="px-8" style={{ backgroundColor: '#6366F1' }} />
          <Button
            type="button"
            label="Clear"
            className="p-button-danger p-button-outlined px-8"
            onClick={handleReset}
          />
        </div>
      </form>

      {/* List Section - From Image aeb262 */}
      <div className="mt-8">
        <Table 
          title="Attendance Policies List" 
          columns={columns} 
          data={rows} 
          showPagination 
          rowsPerPage={10} 
        />
      </div>
    </PageLayout>
  );
};

export default AttendancePolicyMaster;