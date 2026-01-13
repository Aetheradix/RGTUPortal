import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import Dropdown from '@/ui/shared/Dropdown';

interface Society {
  id: number;
  societyName: string;
  memberName: string;
  designation: string;
  workArea: string;
  status: string;
}

const societiesList: Society[] = [
  {
    id: 1,
    societyName: 'Anurodh GNPGC Alumini Agar',
    memberName: 'Girish Nagar',
    designation: 'Secretary',
    workArea: 'Business',
    status: 'Active',
  },
  {
    id: 2,
    societyName: 'Anurodh GNPGC Alumini Agar',
    memberName: 'Nutan Yadav',
    designation: 'Deputy Chairman',
    workArea: 'Education and Politics',
    status: 'Active',
  },
  {
    id: 3,
    societyName: 'Anurodh GNPGC Alumini Agar',
    memberName: 'Mr Mahendra Singh Tomar',
    designation: 'President',
    workArea: 'Social Work',
    status: 'Active',
  },
];

const workAreaOptions = [
  { label: 'Select', value: '' },
  { label: 'Business', value: 'Business' },
  { label: 'Education', value: 'Education' },
  { label: 'Politics', value: 'Politics' },
  { label: 'Social Work', value: 'Social Work' },
];

const Societies: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');

  return (
    <PageLayout title="Societies">

      {view === 'list' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Societies</h3>
            <Button
              label="Add Societies"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

          <DataTable
            value={societiesList}
            paginator
            rows={10}
            showGridlines
          >
            <Column header="S.No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="societyName" header="Society Name" />
            <Column field="memberName" header="Member Name" />
            <Column field="designation" header="Designation" />
            <Column field="workArea" header="Work Area" />
            <Column
              field="status"
              header="Status"
              body={(row) => (
                <Tag value={row.status} severity="success" />
              )}
            />
          </DataTable>
        </Card>
      )}

      {view === 'add' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Add Societies</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Enter Society Name*</label>
              <InputText placeholder="Enter Society Name" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">Enter Member Name*</label>
              <InputText placeholder="Enter Member Name" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">Enter Designation*</label>
              <InputText placeholder="Enter Designation" className="w-full" />
            </div>

            <div>
              <label className="block text-sm mb-1">Enter Work Area*</label>
              <Dropdown
                options={workAreaOptions}
                placeholder="Select"
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

export default Societies;
