import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';

interface Evaluator {
  id: number;
  name: string;
  email: string;
  mobile: string;
  role: string;
  qualification: string;
  experience: string;
  status: string;
}

const evaluatorOptions = [
  { label: 'Select', value: '' },
  { label: 'Priya Sharma', value: 'Priya Sharma' },
  { label: 'Ravi Kumar', value: 'Ravi Kumar' },
];

const roleOptions = [
  { label: 'Select', value: '' },
  { label: 'Junior Evaluator', value: 'Junior Evaluator' },
  { label: 'Senior Evaluator', value: 'Senior Evaluator' },
];

const qualificationOptions = [
  { label: 'Select', value: '' },
  { label: "Bachelor's Degree", value: "Bachelor's Degree" },
  { label: "Master's Degree", value: "Master's Degree" },
];

const experienceOptions = [
  { label: 'Select', value: '' },
  { label: '0-1 years', value: '0-1 years' },
  { label: '2-3 years', value: '2-3 years' },
  { label: '4+ years', value: '4+ years' },
];

const evaluatorList: Evaluator[] = [
  {
    id: 1,
    name: 'Ravi Kumar',
    email: 'rahul.sharma@example.com',
    mobile: '9876543210',
    role: 'Junior Evaluator',
    qualification: "Bachelor's Degree",
    experience: '2-3 years',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'anjali.verma@example.com',
    mobile: '8765432109',
    role: 'Junior Evaluator',
    qualification: "Bachelor's Degree",
    experience: '2-3 years',
    status: 'Active',
  },
  {
    id: 3,
    name: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    mobile: '7654321098',
    role: 'Junior Evaluator',
    qualification: "Bachelor's Degree",
    experience: '2-3 years',
    status: 'Active',
  },
];

const SelectEvaluators: React.FC = () => {
  const [view, setView] = useState<'list' | 'details' | 'add'>('list');
  const [selectedEvaluator, setSelectedEvaluator] = useState<Evaluator | null>(null);

  return (
    <PageLayout title="Select Evaluators">

  
      {view === 'list' && (
        <Card className="mb-4">
          <h3 className="text-lg font-semibold mb-4">Select Evaluator</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block mb-1">Select Evaluator *</label>

              <Dropdown options={evaluatorOptions} placeholder="Select Evaluator" className="w-full" />
            </div>

            <div className="flex gap-2">
              <Button label="Search" icon="pi pi-search" />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-secondary"
              />
            </div>
          </div>
        </Card>
      )}


      {view === 'list' && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Select Evaluators List</h3>
            <Button
              label="Add Select Evaluators"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

          <DataTable value={evaluatorList} paginator rows={10} showGridlines>
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} />
            <Column
              header="Evaluator Name"
              body={(row: Evaluator) => (
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => {
                    setSelectedEvaluator(row);
                    setView('details');
                  }}
                >
                  {row.name}
                </span>
              )}
            />
            <Column field="email" header="Email ID" />
            <Column field="mobile" header="Mobile Number" />
          </DataTable>
        </Card>
      )}

   
      {view === 'details' && selectedEvaluator && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Evaluator Details</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block mb-1">Role</label>
              <div>{selectedEvaluator.role}</div>
            </div>

            <div>
              <label className="block mb-1">Qualifications</label>
              <div>{selectedEvaluator.qualification}</div>
            </div>

            <div>
              <label className="block mb-1">Experience</label>
              <div>{selectedEvaluator.experience}</div>
            </div>

            <div>
              <label className="block mb-1">Status</label>
              <Tag value={selectedEvaluator.status} severity="success" />
            </div>
          </div>
        </Card>
      )}

   
      {view === 'add' && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Add Evaluat As Apply</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block mb-1">Evaluator Name *</label>
              <InputText placeholder="Enter Evaluator Name" className="w-full" />
            </div>

            <div>
              <label className="block mb-1">Email ID *</label>
              <InputText placeholder="Enter Email ID" className="w-full" />
            </div>

            <div>
              <label className="block mb-1">Mobile Number *</label>
              <InputText placeholder="Enter Mobile Number" className="w-full" />
            </div>

            <div>
              <label className="block mb-1">Role *</label>
     
              <Dropdown options={roleOptions} placeholder="Select" className="w-full" />
            </div>

            <div>
              <label className="block mb-1">Qualifications *</label>
      
              <Dropdown options={qualificationOptions} placeholder="Select" className="w-full" />
            </div>

            <div>
              <label className="block mb-1">Experience</label>
             
              <Dropdown options={experienceOptions} placeholder="Select" className="w-full" />
            </div>

            <div>
              <label className="block mb-1">Status *</label>
          
              <Dropdown
                options={[
                  { label: 'Active', value: 'Active' },
                  { label: 'Inactive', value: 'Inactive' },
                ]}
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

export default SelectEvaluators;