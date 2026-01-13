/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';

interface VisionMission {
  id: number;
  headType: 'Vision' | 'Mission';
  description: string;
  status: string;
}

const visionMissionList: VisionMission[] = [
  {
    id: 1,
    headType: 'Vision',
    description:
      'To provide high-quality technical education and vocational training',
    status: 'Active',
  },
  {
    id: 2,
    headType: 'Vision',
    description:
      'To assist in providing employment opportunities to the youth of Madhya Pradesh in a free economic market.',
    status: 'Active',
  },
  {
    id: 3,
    headType: 'Vision',
    description:
      'To collaborate with industry leaders for updated curriculum and hands-on training opportunities.',
    status: 'Active',
  },
  {
    id: 4,
    headType: 'Mission',
    description: 'To offer emerging technology courses.',
    status: 'Active',
  },
  {
    id: 5,
    headType: 'Mission',
    description:
      'To provide infrastructure for development on a need-based foundation.',
    status: 'Active',
  },
  {
    id: 6,
    headType: 'Mission',
    description:
      'To act as a coordinator between industries and technical institutions in a dynamic industrial environment.',
    status: 'Active',
  },
];

const VisionMission: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Vision & Mission">
      {view === 'list' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Vision & Mission</h3>
            <Button
              label="Add Vision & Mission"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>
          <DataTable
            value={visionMissionList}
            paginator
            rows={10}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: VisionMission) => (
              <div className="p-3 bg-gray-50 text-sm">
                <strong>Status:</strong>{' '}
                <Tag value={row.status} severity="success" />
              </div>
            )}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column field="headType" header="Head Type" sortable/>
            <Column field="description" header="Description" sortable/>
          </DataTable>
        </Card>
      )}

      {view === 'add' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Add Vision & Mission</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Enter Head Type*</label>
              <InputText placeholder="Enter Head Type" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">Enter Description*</label>
              <InputText
                placeholder="Enter Description"
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

export default VisionMission;
