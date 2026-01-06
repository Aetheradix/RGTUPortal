/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

interface Sports {
  id: number;
  outdoor: string;
  indoor: string;
  gym: string;
}

interface Committee {
  id: number;
  name: string;
  designation: string;
}

interface Achievement {
  id: number;
  year: string;
  award: string;
  team: string;
  level: string;
  event: string;
  student: string;
}

const sportsList: Sports[] = [
  { id: 1, outdoor: 'Playground for Kabaddi', indoor: 'Badminton Hall', gym: '04 Trade Mills' },
  { id: 2, outdoor: 'Kho-Kho ground', indoor: 'Table Tennis', gym: '05 Elliptical Cross Trainer' },
  { id: 3, outdoor: 'Volley ball ground', indoor: 'Chess', gym: '04 Upright bike' },
];

const committeeList: Committee[] = [
  { id: 1, name: 'Dr. Rashmi Kala Holani', designation: 'Coordinator' },
  { id: 2, name: 'Dr. Mukesh Dixit', designation: 'Member' },
];

const achievementList: Achievement[] = [
  {
    id: 1,
    year: '2019-20',
    award: 'Gold Medal',
    team: 'Team',
    level: 'National',
    event: 'Chess',
    student: 'Ravi Kumar',
  },
];

const SportsDetailsPage: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Sports Details">

 
      {view === 'list' && (
        <>

          <Card className="mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Sports Details</h3>
              <Button label="Add Sports" icon="pi pi-plus" onClick={() => setView('add')} />
            </div>

            <DataTable value={sportsList} paginator rows={10} showGridlines>
              <Column field="outdoor" header="Outdoor" sortable/>
              <Column field="indoor" header="Indoor"sortable />
              <Column field="gym" header="Gym Facilities" sortable/>
            </DataTable>
          </Card>


          <Card className="mb-4">
            <h3 className="font-semibold mb-3">Sports Committee</h3>
            <DataTable value={committeeList} paginator rows={10} showGridlines>
              <Column field="name" header="Professor / Employee" sortable/>
              <Column field="designation" header="Designation" sortable />
            </DataTable>
          </Card>


          <Card>
            <h3 className="font-semibold mb-3">Achievements</h3>
            <DataTable
              value={achievementList}
              paginator
              rows={10}
              showGridlines
              expandedRows={expandedRows}
              onRowToggle={(e) => setExpandedRows(e.data)}
              rowExpansionTemplate={(row: Achievement) => (
                <div className="p-4 bg-gray-50 grid grid-cols-2 gap-3 text-sm">
                  <div><b>Name of the Event:</b> {row.event}</div>
                  <div><b>Name of the Student:</b> {row.student}</div>
                </div>
              )}
            >
              <Column expander style={{ width: '3rem' }} />
              <Column field="year" header="Year" sortable/>
              <Column field="award" header="Name of the award / medal" sortable/>
              <Column field="team" header="Team / Individual"sortable />
              <Column field="level" header="Inter / State / National / International" sortable/>
            </DataTable>
          </Card>
        </>
      )}


      {view === 'add' && (
        <>

          <Card className="mb-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Add Sports</h3>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-text"
                onClick={() => setView('list')}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <InputText placeholder="Enter Outdoor*" />
              <InputText placeholder="Enter Indoor*" />
              <InputText placeholder="Enter Gym Facilities*" />
            </div>
          </Card>


          <Card className="mb-4">
            <h3 className="font-semibold mb-3">Add Sports Committee</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <InputText placeholder="Enter Professor / Employee*" />
              <InputText placeholder="Enter Designation*" />
            </div>
          </Card>

          <Card>
            <h3 className="font-semibold mb-3">Add Achievements</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <InputText placeholder="Enter Name of Award / Medal*" />
              <InputText placeholder="Enter Team / Individual*" />
              <InputText placeholder="Enter Level*" />
              <InputText placeholder="Enter Name of Event*" />
              <InputText placeholder="Enter Name of Student*" />
            </div>

            <div className="flex gap-3 mt-4">
              <Button label="Save" icon="pi pi-save" />
              <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary" />
            </div>
          </Card>
        </>
      )}
    </PageLayout>
  );
};

export default SportsDetailsPage;
