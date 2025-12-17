import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface MutualTransferRow {
  id: number;
  employeeCode: string;
  employeeName: string;
  counterpartCode: string;
  counterpartName: string;
  locationA: string;
  locationB: string;
  status: string;
}

const locations = [
  { label: 'Bhopal', value: 'BPL' },
  { label: 'Indore', value: 'IND' },
  { label: 'Jabalpur', value: 'JBP' },
];

const dummyMutual: MutualTransferRow[] = [
  {
    id: 1,
    employeeCode: 'EMP001',
    employeeName: 'Rahul Sharma',
    counterpartCode: 'EMP010',
    counterpartName: 'Ankit Verma',
    locationA: 'BPL',
    locationB: 'IND',
    status: 'Draft',
  },
];

const ApplyMutualTransfer: React.FC = () => {
  const [formData, setFormData] = useState({
    employeeCode: '',
    employeeName: '',
    counterpartCode: '',
    counterpartName: '',
    locationA: 'BPL' as string | null,
    locationB: null as string | null,
    agree: false,
  });

  const [rows] = useState<MutualTransferRow[]>(dummyMutual);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '60px' } },
    { field: 'employeeCode', header: 'Emp Code', sortable: true },
    { field: 'employeeName', header: 'Employee Name', sortable: true },
    { field: 'counterpartCode', header: 'Counterpart Code', sortable: true },
    { field: 'counterpartName', header: 'Counterpart Name', sortable: true },
    {
      field: 'locationA',
      header: 'Location A',
      body: (row: MutualTransferRow) => locations.find((l) => l.value === row.locationA)?.label ?? row.locationA,
    },
    {
      field: 'locationB',
      header: 'Location B',
      body: (row: MutualTransferRow) => locations.find((l) => l.value === row.locationB)?.label ?? row.locationB,
    },
    { field: 'status', header: 'Status', sortable: true },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Mutual transfer request:', formData);
  };

  return (
    <PageLayout title="Apply Mutual Transfer">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Your Employee Code"
            required
            value={formData.employeeCode}
            onChange={(e) => setFormData({ ...formData, employeeCode: e.target.value.toUpperCase() })}
            placeholder="e.g. EMP001"
          />

          <Input
            label="Your Name"
            required
            value={formData.employeeName}
            onChange={(e) => setFormData({ ...formData, employeeName: e.target.value })}
            placeholder="Your full name"
          />

          <Input
            label="Counterpart Employee Code"
            required
            value={formData.counterpartCode}
            onChange={(e) => setFormData({ ...formData, counterpartCode: e.target.value.toUpperCase() })}
            placeholder="e.g. EMP010"
          />

          <Input
            label="Counterpart Name"
            required
            value={formData.counterpartName}
            onChange={(e) => setFormData({ ...formData, counterpartName: e.target.value })}
            placeholder="Counterpart full name"
          />

          <Dropdown
            label="Your Current Location"
            required
            value={formData.locationA}
            options={locations}
            onChange={(e) => setFormData({ ...formData, locationA: e.value })}
            placeholder="Select your location"
          />

          <Dropdown
            label="Counterpart Location"
            required
            value={formData.locationB}
            options={locations}
            onChange={(e) => setFormData({ ...formData, locationB: e.value })}
            placeholder="Select counterpart location"
          />
        </div>

        <div className="flex items-center gap-3">
          <Checkbox
            inputId="mtAgree"
            checked={formData.agree}
            onChange={(e) => setFormData({ ...formData, agree: e.checked ?? false })}
          />
          <label htmlFor="mtAgree" className="text-sm text-gray-700">
            We both agree for this mutual transfer request.
          </label>
        </div>

        <div className="flex gap-3">
          <Button type="submit" label="Submit Mutual Request" icon="pi pi-send" className="p-button-primary" />
          <Button
            type="button"
            label="Reset"
            icon="pi pi-refresh"
            className="p-button-outlined"
            onClick={() =>
              setFormData({
                employeeCode: '',
                employeeName: '',
                counterpartCode: '',
                counterpartName: '',
                locationA: 'BPL',
                locationB: null,
                agree: false,
              })
            }
          />
        </div>
      </form>

      <div className="mt-8">
        <Table title="My Mutual Transfer Requests" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default ApplyMutualTransfer;
