import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Table, type TableColumn } from '../../../ui/shared';

interface DraftApplicationRow {
  id: number;
  applicationNo: string;
  type: 'Voluntary' | 'Mutual';
  createdOn: string;
  status: string;
}

const dummyDrafts: DraftApplicationRow[] = [
  { id: 1, applicationNo: 'VT-2025-0001', type: 'Voluntary', createdOn: '2025-01-10', status: 'Draft' },
  { id: 2, applicationNo: 'MT-2025-0005', type: 'Mutual', createdOn: '2025-01-12', status: 'Draft' },
];

const PrintDraftApplication: React.FC = () => {
  const [rows] = useState<DraftApplicationRow[]>(dummyDrafts);

  const columns: TableColumn[] = [
    { field: 'id', header: 'ID', sortable: true, style: { width: '60px' } },
    { field: 'applicationNo', header: 'Application No', sortable: true },
    { field: 'type', header: 'Type', sortable: true },
    { field: 'createdOn', header: 'Created On', sortable: true },
    { field: 'status', header: 'Status', sortable: true },
    {
      header: 'Actions',
      body: (row: DraftApplicationRow) => (
        <div className="flex gap-2">
          <Button
            icon="pi pi-print"
            label="Print Draft"
            className="p-button-text p-button-sm"
            onClick={() => console.log('Print draft for', row.applicationNo)}
          />
        </div>
      ),
      field: '',
    },
  ];

  return (
    <PageLayout title="Print Draft Application">
      <Table title="Draft Transfer Applications" columns={columns} data={rows} showPagination rowsPerPage={10} />
    </PageLayout>
  );
};

export default PrintDraftApplication;
