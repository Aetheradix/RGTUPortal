/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
// Using your shared components
import { Table, Input } from '@/ui/shared';

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
  const [formData, setFormData] = useState<any>({});

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const achievementExpansion = (row: Achievement) => (
    <div className="p-4 bg-orange-50/50 border border-orange-100 rounded-lg animate-fadein grid grid-cols-1 gap-4 text-sm">
      <div>
        <span className="text-orange-700 font-bold block text-[10px] tracking-widest uppercase">Event Details</span>
        <p className="mt-1 font-medium text-gray-700">{row.event}</p>
      </div>
      <div>
        <span className="text-orange-700 font-bold block text-[10px] tracking-widest uppercase">Representative Student</span>
        <p className="mt-1 font-medium text-gray-700">{row.student}</p>
      </div>
    </div>
  );

  const sportsCols = [
    { field: "outdoor", header: "Outdoor Facilities", sortable: true },
    { field: "indoor", header: "Indoor Facilities", sortable: true },
    { field: "gym", header: "Gym Equipment", sortable: true }
  ];

  const committeeCols = [
    { field: "name", header: "Faculty/Staff Name", sortable: true },
    { field: "designation", header: "Role", sortable: true }
  ];

  const achievementCols: any[] = [
    { expander: true, header: "", style: { width: '3rem' } },
    { field: "year", header: "Academic Year", sortable: true },
    { field: "award", header: "Award/Medal", sortable: true },
    { field: "team", header: "Category", sortable: true },
    { field: "level", header: "Competition Level", sortable: true }
  ];

  return (
    <PageLayout title="Sports & Athletics Management">
      {view === 'list' && (
        <div className="space-y-6 animate-fadein">
          <Card>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold   underline-offset-8">Infrastructure & Facilities</h3>
              <Button label="Add Entry" icon="pi pi-plus" className="bg-blue-600 shadow-md" onClick={() => setView('add')} />
            </div>
            <Table data={sportsList} columns={sportsCols}  />
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-lg font-bold text-gray-700 mb-6 border-l-4 border-green-500 pl-3">Sports Committee</h3>
              <Table data={committeeList} columns={committeeCols}  />
            </Card>

            <Card>
              <h3 className="text-lg font-bold text-gray-700 mb-6 border-l-4 border-orange-500 pl-3">Recent Achievements</h3>
              <Table 
                data={achievementList} 
                columns={achievementCols} 
                rowExpansionTemplate={achievementExpansion} 
              
              />
            </Card>
          </div>
        </div>
      )}

      {view === 'add' && (
        <div className="space-y-6 animate-slide-up">
          <Card>
            <div className="flex justify-between items-center mb-6 pb-4">
              <h3 className="text-xl font-bold text-gray-800 italic">New Sports Record</h3>
              <Button label="Cancel & Exit" icon="pi pi-times" text severity="danger" onClick={() => setView('list')} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Input label="Outdoor Facilities" required value={formData.outdoor} onChange={(e: any) => handleInputChange('outdoor', e.target.value)} placeholder="e.g., Kabaddi Ground" />
              <Input label="Indoor Facilities" required value={formData.indoor} onChange={(e: any) => handleInputChange('indoor', e.target.value)} placeholder="e.g., Badminton Hall" />
              <Input label="Gym Equipment" required value={formData.gym} onChange={(e: any) => handleInputChange('gym', e.target.value)} placeholder="e.g., Treadmills" />
            </div>

            <h4 className="text-sm font-bold text-gray-500 mb-4 border-t pt-4 uppercase tracking-tighter">Committee Assignment</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Input label="Staff Name" value={formData.staffName} onChange={(e: any) => handleInputChange('staffName', e.target.value)} placeholder="Search employee..." />
              <Input label="Committee Role" value={formData.role} onChange={(e: any) => handleInputChange('role', e.target.value)} placeholder="e.g., Coordinator" />
            </div>

            <h4 className="text-sm font-bold text-gray-500 mb-4 border-t pt-4 uppercase tracking-tighter">Achievement Entry</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Input label="Award Name" value={formData.award} onChange={(e: any) => handleInputChange('award', e.target.value)} />
              <Input label="Category" value={formData.category} onChange={(e: any) => handleInputChange('category', e.target.value)} placeholder="Individual / Team" />
              <Input label="Competition Level" value={formData.level} onChange={(e: any) => handleInputChange('level', e.target.value)} placeholder="National / State" />
              <Input label="Event Name" value={formData.event} onChange={(e: any) => handleInputChange('event', e.target.value)} />
              <Input label="Student Name" value={formData.student} onChange={(e: any) => handleInputChange('student', e.target.value)} />
            </div>

            <div className="flex gap-4 mt-10 pt-6 border-t">
              <Button label="Save All Records" icon="pi pi-save" className="bg-green-600 px-10 py-3" />
              <Button label="Reset Form" icon="pi pi-refresh" severity="secondary" outlined onClick={() => setFormData({})} />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
};

export default SportsDetailsPage;