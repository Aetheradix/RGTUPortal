import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface VoluntaryTransferRow {
  id: number;
  employeeCode: string;
  employeeName: string;
  currentLocation: string;
  requestedLocation: string;
  status: string;
}

const locations = [
  { label: 'Bhopal', value: 'BPL' },
  { label: 'Indore', value: 'IND' },
  { label: 'Jabalpur', value: 'JBP' },
];

const dummyRequests: VoluntaryTransferRow[] = [
  {
    id: 1,
    employeeCode: 'EMP001',
    employeeName: 'Rahul Sharma',
    currentLocation: 'BPL',
    requestedLocation: 'IND',
    status: 'Draft',
  },
];

const ApplyVoluntaryTransfer: React.FC = () => {
  const [formData, setFormData] = useState({
    employeeCode: '',
    employeeName: '',
    currentLocation: 'BPL' as string | null,
    requestedLocation: null as string | null,
    reason: '',
    agree: false,
  });

  const [rows] = useState<VoluntaryTransferRow[]>(dummyRequests);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '60px' } },
    { field: 'employeeCode', header: 'Emp Code', sortable: true },
    { field: 'employeeName', header: 'Employee Name', sortable: true },
    {
      field: 'currentLocation',
      header: 'Current Location',
      body: (row: VoluntaryTransferRow) => locations.find((l) => l.value === row.currentLocation)?.label ?? row.currentLocation,
    },
    {
      field: 'requestedLocation',
      header: 'Requested Location',
      body: (row: VoluntaryTransferRow) => locations.find((l) => l.value === row.requestedLocation)?.label ?? row.requestedLocation,
    },
    { field: 'status', header: 'Status', sortable: true },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Voluntary transfer request:', formData);
  };

  return (
    <PageLayout title="Apply Voluntary Transfer">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Employee Code"
            required
            value={formData.employeeCode}
            onChange={(e) => setFormData({ ...formData, employeeCode: e.target.value.toUpperCase() })}
            placeholder="e.g. EMP001"
          />

          <Input
            label="Employee Name"
            required
            value={formData.employeeName}
            onChange={(e) => setFormData({ ...formData, employeeName: e.target.value })}
            placeholder="Employee full name"
          />

          <Dropdown
            label="Current Location"
            required
            value={formData.currentLocation}
            options={locations}
            onChange={(e) => setFormData({ ...formData, currentLocation: e.value })}
            placeholder="Select current location"
          />

          <Dropdown
            label="Requested Location"
            required
            value={formData.requestedLocation}
            options={locations}
            onChange={(e) => setFormData({ ...formData, requestedLocation: e.value })}
            placeholder="Select requested location"
          />

          <div className="md:col-span-2">
            <Input
              label="Reason for Transfer"
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              placeholder="Brief reason for voluntary transfer"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Checkbox
            inputId="agree"
            checked={formData.agree}
            onChange={(e) => setFormData({ ...formData, agree: e.checked ?? false })}
          />
          <label htmlFor="agree" className="text-sm text-gray-700">
            I confirm that the above details are correct.
          </label>
        </div>

        <div className="flex gap-3">
          <Button type="submit" label="Submit Request" icon="pi pi-send" className="p-button-primary" />
          <Button type="button" label="Reset" icon="pi pi-refresh" className="p-button-outlined" onClick={() => setFormData({ employeeCode: '', employeeName: '', currentLocation: 'BPL', requestedLocation: null, reason: '', agree: false })} />
        </div>
      </form>

      <div className="mt-8">
        <Table title="My Voluntary Transfer Requests" columns={columns} data={rows} showPagination rowsPerPage={10} />
      </div>
    </PageLayout>
  );
};

export default ApplyVoluntaryTransfer;
