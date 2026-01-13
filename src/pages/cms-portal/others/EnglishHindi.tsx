import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';

interface Language {
  id: number;
  name: string;
  level: string;
  status: string;
}

const languageList: Language[] = [
  {
    id: 1,
    name: 'English',
    level: 'Intermediate',
    status: 'Ongoing',
  },
  {
    id: 2,
    name: 'Hindi',
    level: 'Advanced',
    status: 'Completed',
  },
];

const EnglishHindi: React.FC = () => {
  const statusTemplate = (row: Language) => (
    <Tag
      value={row.status}
      severity={row.status === 'Completed' ? 'success' : 'warning'}
    />
  );

  return (
    <PageLayout title="Languages">
      <Card>
        <DataTable
          value={languageList}
          paginator
          rows={10}
          showGridlines
        >
          <Column field="name" header="Language Name"sortable />
          <Column field="level" header="Level" sortable/>
          <Column
            field="status"
            header="Status"
            body={statusTemplate}
          />
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default EnglishHindi;
