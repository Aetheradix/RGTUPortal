/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

interface Building {
  id: number;
  campusArea: string;
  builtUpArea: string;
  classRooms: number;
  smartClassRooms: number;
  laboratories: number;
}

interface Committee {
  id: number;
  name: string;
  designation: string;
}

const buildingList: Building[] = [
  {
    id: 1,
    campusArea: '6.68 Acres',
    builtUpArea: '10336.25 Sq Mt.',
    classRooms: 90,
    smartClassRooms: 8,
    laboratories: 32,
  },
];

const committeeList: Committee[] = [
  { id: 1, name: 'Dr. Surinder Kaur Batra', designation: 'Coordinator' },
  { id: 2, name: 'Dr. Rama Singh', designation: 'Member' },
  { id: 3, name: 'Dr. S.B. Goswami', designation: 'Member' },
];

const BuildingPage: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Building">


      {view === 'list' && (
        <>
          <Card className="mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Building</h3>
              <Button
                label="Add Building"
                icon="pi pi-plus"
                onClick={() => setView('add')}
              />
            </div>

            <DataTable
              value={buildingList}
              showGridlines
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data)}
              rowExpansionTemplate={() => (
                <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 text-sm bg-gray-50">
                  <div><b>Office, Faculty & Staff Rooms:</b> 24</div>
                  <div><b>Departmental Libraries:</b> 10</div>
                  <div><b>Common Room:</b> 01</div>
                  <div><b>Gymnasium:</b> 3 Set Open + 1 Indoor</div>
                  <div><b>Rooms for Technical Staff:</b> 09</div>
                  <div><b>Store Rooms:</b> 13</div>
                  <div><b>Auditorium:</b> 2</div>
                  <div className="md:col-span-2">
                    <b>Blocks:</b> Main Block (MB), Saraswati Bhawan (SB), New Block (NB)
                  </div>
                  <div><b>Total:</b> 196</div>
                </div>
              )}
            >
              <Column expander style={{ width: '3rem' }} />
          
              <Column field="campusArea" header="Campus Area" sortable/>
              <Column field="builtUpArea" header="Built Up Area"sortable />
              <Column field="classRooms" header="Class Rooms"sortable />
              <Column field="smartClassRooms" header="Smart Class Rooms / Seminar Hall"sortable />
              <Column field="laboratories" header="Laboratories" sortable/>
            </DataTable>
          </Card>


          <Card>
            <h3 className="font-semibold mb-3">Committee Details</h3>

            <DataTable value={committeeList} paginator rows={10} showGridlines>
              <Column field="name" header="Professor / Employee" sortable/>
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
              <h3 className="font-semibold">Add Building</h3>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text"
                onClick={() => setView('list')}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                'Campus Area',
                'Built Up Area',
                'Class Rooms',
                'Smart Class Rooms / Seminar Hall',
                'Laboratories',
                'Office, Faculty & Staff Rooms',
                'Departmental Libraries',
                'Common Room',
                'Gymnasium',
                'Rooms for Technical Staff',
                'Store Rooms',
                'Canteen / NCC / NSS / IQAC',
                'Auditorium',
                'New Augmented Structure',
                'Blocks of the Institute',
                'Total',
              ].map((label, i) => (
                <div key={i}>
                  <label className="block text-sm mb-1">{label}*</label>
                  <InputText placeholder={`Enter ${label}`} className="w-full" />
                </div>
              ))}
            </div>
          </Card>

 
          <Card>
            <h4 className="font-semibold mb-3">Add Committee</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm mb-1">Professor / Employee*</label>
                <InputText placeholder="Enter Professor / Employee" className="w-full" />
              </div>
              <div>
                <label className="block text-sm mb-1">Designation*</label>
                <InputText placeholder="Enter Designation" className="w-full" />
              </div>
            </div>

            <div className="flex gap-3">
              <Button label="Save" icon="pi pi-save" />
              <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary" />
            </div>
          </Card>
        </>
      )}
    </PageLayout>
  );
};

export default BuildingPage;
