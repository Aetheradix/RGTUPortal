import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Table, type TableColumn } from '../../../ui/shared';

interface LockApplicationRow {
  id: number;
  applicationNo: string;
  type: 'Voluntary' | 'Mutual';
  submittedOn: string;
  isLocked: boolean;
}

const dummyApps: LockApplicationRow[] = [
  { id: 1, applicationNo: 'VT-2025-0001', type: 'Voluntary', submittedOn: '2025-01-15', isLocked: false },
  { id: 2, applicationNo: 'MT-2025-0005', type: 'Mutual', submittedOn: '2025-01-18', isLocked: true },
];

const LockApplication: React.FC = () => {
  const [rows, setRows] = useState<LockApplicationRow[]>(dummyApps);

  const handleLock = (app: LockApplicationRow) => {
    setRows((prev) => prev.map((r) => (r.id === app.id ? { ...r, isLocked: true } : r)));
  };

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '60px' } },
    { field: 'applicationNo', header: 'Application No', sortable: true },
    { field: 'type', header: 'Type', sortable: true },
    { field: 'submittedOn', header: 'Submitted On', sortable: true },
    {
      field: 'isLocked',
      header: 'Locked',
      body: (row: LockApplicationRow) => (row.isLocked ? 'Yes' : 'No'),
    },
    {
      header: 'Actions',
      body: (row: LockApplicationRow) => (
        <div className="flex gap-2">
          <Button
            icon="pi pi-lock"
            label="Lock"
            className="p-button-text p-button-sm"
            disabled={row.isLocked}
            onClick={() => handleLock(row)}
          />
        </div>
      ),
      field: '',
    },
  ];

  return (
    <PageLayout title="Lock Application">
      <Table title="Submitted Applications" columns={columns} data={rows} showPagination rowsPerPage={10} />
    </PageLayout>
  );
};

export default LockApplication;
