import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';

interface Objective {
  id: number;
  title: string;
  description: string;
  status: string;
}

const objectivesList: Objective[] = [
  {
    id: 1,
    title: 'Enhancing Academic Excellence',
    description:
      'Improve academic performance through modern techniques and research-based learning.',
    status: 'Active',
  },
  {
    id: 2,
    title: 'Building New Digital Library',
    description:
      'Develop a state-of-the-art digital library to provide students access to global resources.',
    status: 'Active',
  },
  {
    id: 3,
    title: 'Encouraging Student Leadership',
    description:
      'Promote student involvement in decision-making and leadership roles.',
    status: 'Active',
  },
  {
    id: 4,
    title: 'Organizing Awareness Campaigns',
    description:
      'Conduct community-driven campaigns on environmental and social issues.',
    status: 'Active',
  },
];

const Objectives: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Objectives">

      {view === 'list' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Objectives</h3>
            <Button
              label="Add Objectives"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

          <DataTable
            value={objectivesList}
            paginator
            rows={10}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: Objective) => (
              <div className="p-3 bg-gray-50 text-sm">
                <strong>Status:</strong>{' '}
                <Tag value={row.status} severity="success" />
              </div>
            )}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="title" header="Objective Title" />
            <Column field="description" header="Objective Description" />
          </DataTable>
        </Card>
      )}

 
      {view === 'add' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Add Objectives</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">
                Enter Objective Title*
              </label>
              <InputText
                placeholder="Enter Objective Title"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Enter Objective Description*
              </label>
              <InputText
                placeholder="Enter Objective Description"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button label="Save" icon="pi pi-save" />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
            />
          </div>
        </Card>
      )}
    </PageLayout>
  );
};

export default Objectives;
