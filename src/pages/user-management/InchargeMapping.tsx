import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, type DropdownOption } from '../../ui/shared';
import { Table, type TableColumn } from '../../ui/shared';

interface InchargeMapping {
  id: number;
  department: string;
  inchargeName: string;
  employeeId: string;
  status: string;
}

const InchargeMapping: React.FC = () => {
  const [formData, setFormData] = useState({
    department: '',
    inchargeName: '',
    employeeId: '',
  });

  const departments = ['HR', 'Finance', 'Library', 'Transport', 'Hostel', 'Examinations', 'Admissions'];
  const employees = [
    { label: 'John Doe (EMP001)', value: 'EMP001' },
    { label: 'Jane Smith (EMP002)', value: 'EMP002' },
    { label: 'Mike Johnson (EMP003)', value: 'EMP003' },
    { label: 'Sarah Williams (EMP004)', value: 'EMP004' },
  ];

  const departmentOptions: DropdownOption[] = departments.map((d) => ({ label: d, value: d }));

  const [inchargeMappings] = useState<InchargeMapping[]>([
    { id: 1, department: 'HR', inchargeName: 'John Doe', employeeId: 'EMP001', status: 'Active' },
    { id: 2, department: 'Finance', inchargeName: 'Jane Smith', employeeId: 'EMP002', status: 'Active' },
    { id: 3, department: 'Library', inchargeName: 'Mike Johnson', employeeId: 'EMP003', status: 'Active' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <PageLayout title="Incharge Mapping">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Dropdown
            label="Department"
            required
            value={formData.department}
            options={departmentOptions}
            onChange={(e) => setFormData({ ...formData, department: e.value })}
            placeholder="Select department"
          />

          <Dropdown
            label="Select Incharge"
            required
            value={formData.employeeId}
            options={employees}
            optionLabel="label"
            optionValue="value"
            onChange={(e) => {
              const selectedEmployee = employees.find((emp) => emp.value === e.value);
              setFormData({
                ...formData,
                employeeId: e.value,
                inchargeName: selectedEmployee?.label.split(' (')[0] || '',
              });
            }}
            placeholder="Select incharge"
          />
        </div>

        <div className="flex gap-3">
          <Button type="submit" label="Save" icon="pi pi-save" className="p-button-primary" />
          <Button type="button" label="Cancel" icon="pi pi-times" className="p-button-secondary" />
          <Button type="button" label="Reset" icon="pi pi-refresh" className="p-button-outlined" />
        </div>
      </form>

      <div className="mt-8">
        <Table
          title="Incharge Mappings List"
          columns={[
            {
              field: 'id',
              header: 'ID',
              sortable: true,
              style: { width: '80px' },
            },
            {
              field: 'department',
              header: 'Department',
              sortable: true,
            },
            {
              field: 'inchargeName',
              header: 'Incharge Name',
              sortable: true,
            },
            {
              field: 'employeeId',
              header: 'Employee ID',
              sortable: true,
            },
            {
              field: 'status',
              header: 'Status',
            },
            {
              header: 'Actions',
              body: () => (
                <div className="flex gap-2">
                  <Button icon="pi pi-pencil" className="p-button-rounded p-button-text p-button-sm" />
                  <Button icon="pi pi-trash" className="p-button-rounded p-button-text p-button-danger p-button-sm" />
                </div>
              ),
            },
          ] as TableColumn[]}
          data={inchargeMappings}
          showPagination={true}
          rowsPerPage={10}
        />
      </div>
    </PageLayout>
  );
};

export default InchargeMapping;
