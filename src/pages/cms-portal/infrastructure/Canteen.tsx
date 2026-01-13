/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';

interface Canteen {
  id: number;
  name: string;
  menu: string;
  capacity: string;
  startTime: string;
  endTime: string;
  status: string;
}

interface Committee {
  id: number;
  member: string;
  designation: string;
}

const canteenList: Canteen[] = [
  {
    id: 1,
    name: 'Central Canteen',
    menu: 'Snacks, Beverages, Lunch',
    capacity: '150 Seats',
    startTime: '8:00 AM',
    endTime: '5:00 PM',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Hostel Canteen',
    menu: 'Breakfast, Dinner',
    capacity: '80 Seats',
    startTime: '7:00 AM',
    endTime: '4:00 PM',
    status: 'Active',
  },
];

const committeeList: Committee[] = [
  { id: 1, member: 'Dr. Santosh K. Yadav', designation: 'Coordinator' },
  { id: 2, member: 'Dr. Shashi Kiran Nayak', designation: 'D.D.O.' },
  { id: 3, member: 'Dr. Shashi Kiran Nayak', designation: 'Member' },
  { id: 4, member: 'Dr. Pratishtha Khare', designation: 'Member' },
  { id: 5, member: 'Dr. Meenakshi Saxena', designation: 'Member' },
  { id: 6, member: 'Mr. D.P. Rohit', designation: 'Member' },
  { id: 7, member: 'Mrs. Tarulata Sharma', designation: 'Head Clerk' },
  { id: 8, member: 'Mr. L.N. Chandani', designation: 'Accountant' },
];

const CanteenPage: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Canteen">

    
      {view === 'list' && (
        <>
          <Card className="mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Canteen</h3>
              <Button
                label="Add Canteen"
                icon="pi pi-plus"
                onClick={() => setView('add')}
              />
            </div>

            <DataTable
              value={canteenList}
              paginator
              rows={10}
              showGridlines
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data)}
              rowExpansionTemplate={(row: Canteen) => (
                <div className="p-4 bg-gray-50 text-sm grid grid-cols-2 gap-3">
                  <div><b>Photo Gallery:</b> Image Not Available</div>
                  <div>
                    <b>Status:</b>{' '}
                    <Tag value={row.status} severity="success" />
                  </div>
                </div>
              )}
            >
              <Column expander style={{ width: '3rem' }} />
              <Column field="name" header="Canteen Name"sortable />
              <Column field="menu" header="Menu Details" sortable/>
              <Column field="capacity" header="Seating Capacity"sortable />
              <Column field="startTime" header="Start Timing" sortable/>
              <Column field="endTime" header="End Timing" sortable/>
            </DataTable>
          </Card>


          <Card>
            <h3 className="font-semibold mb-3">Committee of Cafeteria</h3>

            <DataTable
              value={committeeList}
              paginator
              rows={10}
              showGridlines
            >
              <Column field="member" header="Professor / Employee"sortable />
              <Column field="designation" header="Designation" sortable/>
              <Column
                header="Actions"
                body={() => (
                  <div className="flex gap-2">
                    <Button icon="pi pi-pencil" className="p-button-text p-button-sm" />
                    <Button icon="pi pi-trash" className="p-button-text p-button-sm p-button-danger" />
                  </div>
                )}
              />
            </DataTable>
          </Card>
        </>
      )}


      {view === 'add' && (
        <>
          <Card className="mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Add Canteen</h3>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text"
                onClick={() => setView('list')}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {[
                'Canteen Name',
                'Menu Details',
                'Seating Capacity',
                'Start Timing',
                'End Timing',
              ].map((label, i) => (
                <div key={i}>
                  <label className="block text-sm mb-1">{label}*</label>
                  <InputText placeholder={`Enter ${label}`} className="w-full" />
                </div>
              ))}

              <div>
                <label className="block text-sm mb-1">Photo Gallery*</label>
                <InputText type="file" className="w-full" />
              </div>
            </div>
          </Card>


          <Card>
            <h4 className="font-semibold mb-3">Add Committee of Cafeteria</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">
                  Professor / Employee*
                </label>
                <InputText placeholder="Enter Professor / Employee" className="w-full" />
              </div>

              <div>
                <label className="block text-sm mb-1">Designation*</label>
                <InputText placeholder="Enter Designation" className="w-full" />
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
        </>
      )}
    </PageLayout>
  );
};

export default CanteenPage;
