/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';

interface Library {
  id: number;
  name: string;
  totalBooks: number;
  journals: number;
  newspapers: number;
  magazines: number;
  computers: number;
  email: string;
  contact: string;
  description: string;
  status: string;
}

const libraryList: Library[] = [
  {
    id: 1,
    name: 'Dipti Library',
    totalBooks: 21840,
    journals: 1,
    newspapers: 4,
    magazines: 11,
    computers: 9,
    email: 'dipti22@gmail.com',
    contact: '851236974',
    description: 'No Description',
    status: 'Active',
  },
];

const LibraryPage: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Library">

      {view === 'list' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Library</h3>
            <Button
              label="Add Library"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

          <DataTable
            value={libraryList}
            paginator
            rows={10}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: Library) => (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-50 text-sm">
                <div><b>No. of Magazines / Month:</b> {row.magazines}</div>
                <div><b>Total Computers in Library:</b> {row.computers}</div>
                <div><b>Email:</b> {row.email}</div>
                <div><b>Contact No.:</b> {row.contact}</div>
                <div className="md:col-span-2">
                  <b>Library Description:</b> {row.description}
                </div>
                <div><b>Library Photo:</b> Image Not Available</div>
                <div>
                  <b>Status:</b>{' '}
                  <Tag value={row.status} severity="success" />
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="name" header="Library Name" />
            <Column field="totalBooks" header="Total No. of Available Books" />
            <Column field="journals" header="Total Available Journals" />
            <Column field="newspapers" header="No. of News Paper / Day" />
          </DataTable>
        </Card>
      )}

      {view === 'add' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Add Library</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {[
              'Library Name',
              'Total No. of Available Books',
              'Total Available Journals',
              'No. of News Paper / Day',
              'No. of Magazines / Month',
              'Total Computers in Library',
              'Email Id',
              'Contact No.',
              'Library Description',
            ].map((label, i) => (
              <div key={i}>
                <label className="block text-sm mb-1">{label}*</label>
                <InputText
                  placeholder={`Enter ${label}`}
                  className="w-full"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm mb-1">
                Upload Library Photo*
              </label>
              <InputText type="file" className="w-full" />
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

export default LibraryPage;



