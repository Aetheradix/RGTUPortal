import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

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
          <div>
            <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
              Department <span className="text-red-500">*</span>
            </label>
            <Dropdown
              id="department"
              value={formData.department}
              options={departments}
              onChange={(e) => setFormData({ ...formData, department: e.value })}
              className="w-full"
              placeholder="Select department"
              required
            />
          </div>

          <div>
            <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700 mb-2">
              Select Incharge <span className="text-red-500">*</span>
            </label>
            <Dropdown
              id="employeeId"
              value={formData.employeeId}
              options={employees}
              onChange={(e) => {
                const selectedEmployee = employees.find(emp => emp.value === e.value);
                setFormData({ 
                  ...formData, 
                  employeeId: e.value,
                  inchargeName: selectedEmployee?.label.split(' (')[0] || ''
                });
              }}
              className="w-full"
              placeholder="Select incharge"
              required
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit" label="Save" icon="pi pi-save" className="p-button-primary" />
          <Button type="button" label="Cancel" icon="pi pi-times" className="p-button-secondary" />
          <Button type="button" label="Reset" icon="pi pi-refresh" className="p-button-outlined" />
        </div>
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Incharge Mappings List</h2>
        <DataTable value={inchargeMappings} paginator rows={10}>
          <Column field="id" header="ID" sortable style={{ width: '80px' }} />
          <Column field="department" header="Department" sortable />
          <Column field="inchargeName" header="Incharge Name" sortable />
          <Column field="employeeId" header="Employee ID" sortable />
          <Column field="status" header="Status" />
          <Column
            header="Actions"
            body={() => (
              <div className="flex gap-2">
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-text p-button-sm" />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-text p-button-danger p-button-sm" />
              </div>
            )}
          />
        </DataTable>
      </div>
    </PageLayout>
  );
};

export default InchargeMapping;
