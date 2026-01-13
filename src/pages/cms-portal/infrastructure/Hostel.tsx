/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';

interface Hostel {
  id: number;
  type: string;
  name: string;
  year: number;
  intake: number;
  rooms: number;
  wardenName: string;
  wardenContact: string;
  managerName: string;
  managerContact: string;
  asstManagerName: string;
  asstManagerContact: string;
  status: string;
}

const hostelList: Hostel[] = [
  {
    id: 1,
    type: 'Boys',
    name: 'Shivaji Boys Hostel',
    year: 2005,
    intake: 300,
    rooms: 100,
    wardenName: 'Rajesh Sharma',
    wardenContact: '9876543210',
    managerName: 'Vikram Singh',
    managerContact: '9876543211',
    asstManagerName: 'Rohit Verma',
    asstManagerContact: '9876543212',
    status: 'Active',
  },
  {
    id: 2,
    type: 'Girls',
    name: 'Rani Laxmi Bai Girls Hostel',
    year: 2008,
    intake: 250,
    rooms: 80,
    wardenName: 'Sunita Verma',
    wardenContact: '9876543220',
    managerName: 'Anita Singh',
    managerContact: '9876543221',
    asstManagerName: 'Pooja Sharma',
    asstManagerContact: '9876543222',
    status: 'Active',
  },
];

const hostelTypes = [
  { label: 'Boys', value: 'Boys' },
  { label: 'Girls', value: 'Girls' },
  { label: 'Co-ed', value: 'Co-ed' },
];

const HostelPage: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Hostel">


      {view === 'list' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Hostel</h3>
            <Button
              label="Add Hostel"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

          <DataTable
            value={hostelList}
            paginator
            rows={10}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: Hostel) => (
              <div className="p-4 bg-gray-50 text-sm grid grid-cols-2 gap-3">
                <div><b>Warden Name:</b> {row.wardenName}</div>
                <div><b>Warden Contact:</b> {row.wardenContact}</div>
                <div><b>Hostel Manager Name:</b> {row.managerName}</div>
                <div><b>Hostel Manager Contact:</b> {row.managerContact}</div>
                <div><b>Asst. Manager Name:</b> {row.asstManagerName}</div>
                <div><b>Asst. Manager Contact:</b> {row.asstManagerContact}</div>
                <div>
                  <b>Status:</b>{' '}
                  <Tag value={row.status} severity="success" />
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column field="type" header="Hostel Type" sortable/>
            <Column field="name" header="Hostel Name" sortable/>
            <Column field="year" header="Establish Year" sortable/>
            <Column field="intake" header="Total Intake" sortable/>
            <Column field="rooms" header="Total Room" sortable/>
          </DataTable>
        </Card>
      )}

    
      {view === 'add' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Add Hostel</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Hostel Type*</label>
              <Dropdown
                options={hostelTypes}
                placeholder="Select Hostel Type"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Hostel Name*</label>
              <InputText placeholder="Enter Hostel Name" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">Establishment Year*</label>
              <Dropdown
                options={[2005, 2008, 2010, 2012, 2015].map(y => ({ label: y, value: y }))}
                placeholder="Select Year"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Total Intake*</label>
              <InputText placeholder="Enter Total Intake" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">Total Room*</label>
              <InputText placeholder="Enter Total Room" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">Warden Name*</label>
              <InputText placeholder="Enter Warden Name" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">Warden Contact*</label>
              <InputText placeholder="Enter Warden Contact" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">Hostel Manager Name*</label>
              <InputText placeholder="Enter Hostel Manager Name" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">Hostel Manager Contact*</label>
              <InputText placeholder="Enter Hostel Manager Contact" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Hostel Asst. Manager Name*
              </label>
              <InputText placeholder="Enter Asst. Manager Name" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Hostel Asst. Manager Contact*
              </label>
              <InputText placeholder="Enter Asst. Manager Contact" className="w-full" />
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

export default HostelPage;
