/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import { FileUpload } from 'primereact/fileupload';

interface HowToReach {
  id: number;
  address: string;
  phone: string;
  email: string;
  website: string;
  googleMap: string;
  status: string;
}

const howToReachList: HowToReach[] = [
  {
    id: 1,
    address:
      'Govt Nehru P G College, Sarangpur Road, Agar Malwa (MP), Pin – 465441',
    phone: '07362 – 258033',
    email: 'hegnpgcagasha@mp.gov.in',
    website: 'https://hegnpgcagasha.mp.gov.in',
    googleMap: 'See Location',
    status: 'Active',
  },
];

const HowToReachPage: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="How to Reach">


      {view === 'list' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">How to Reach</h3>
            <Button
              label="Add How to Reach"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

          <DataTable
            value={howToReachList}
            paginator
            rows={10}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: HowToReach) => (
              <div className="p-3 bg-gray-50 text-sm space-y-2">
                <div>
                  <strong>College Website:</strong>{' '}
                  <a href={row.website} target="_blank" className="text-blue-600">
                    {row.website}
                  </a>
                </div>

                <div>
                  <strong>Google Map:</strong>{' '}
                  <span className="text-blue-600 cursor-pointer">
                    {row.googleMap}
                  </span>
                </div>

                <div>
                  <strong>Status:</strong>{' '}
                  <Tag value={row.status} severity="success" />
                </div>

                <div>
                  <strong>Action:</strong>{' '}
                  <Button
                    icon="pi pi-pencil"
                    className="p-button-text p-button-sm"
                  />
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column header="Sr.No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="address" header="Address" />
            <Column field="phone" header="Telephone No." />
            <Column field="email" header="E-Mail" />
          </DataTable>
        </Card>
      )}


      {view === 'add' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Add How to Reach</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Enter Address*</label>
              <InputText placeholder="Enter Address" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Enter Telephone No.*
              </label>
              <InputText placeholder="Enter Telephone No." className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">Enter E-Mail*</label>
              <InputText placeholder="Enter E-Mail" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Enter College Website*
              </label>
              <FileUpload
                mode="basic"
                chooseLabel="No file chosen"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Enter Google Map*</label>
              <InputText placeholder="Enter Google Map Link" className="w-full" />
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

export default HowToReachPage;
