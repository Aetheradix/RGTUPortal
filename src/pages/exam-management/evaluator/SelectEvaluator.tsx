/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const [view, setView] = useState<'list' | 'add'>('list');

  // Form state for Add Evaluator
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [role, setRole] = useState('');
  const [qualification, setQualification] = useState('');
  const [experience, setExperience] = useState('');
  const [status, setStatus] = useState('');

  // Search/filter state
  const [selectedEvaluatorName, setSelectedEvaluatorName] = useState('');
  const [filteredEvaluators, setFilteredEvaluators] = useState<Evaluator[]>([]);
  const [expandedRows, setExpandedRows] = useState<any>(null);

  const handleSave = () => {
    console.log({ name, email, mobile, role, qualification, experience, status });
    alert('Evaluator Saved! (Check console)');
    handleClear();
  };

  const handleClear = () => {
    setName('');
    setEmail('');
    setMobile('');
    setRole('');
    setQualification('');
    setExperience('');
    setStatus('');
  };

  const handleSearch = () => {
    const filtered = selectedEvaluatorName
      ? evaluatorList.filter((e) => e.name === selectedEvaluatorName)
      : evaluatorList;
    setFilteredEvaluators(filtered);
    setExpandedRows(null); // collapse all rows initially
  };

  const rowExpansionTemplate = (data: Evaluator) => {
    return (
      <div className="p-4 bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div>
          <label className="block mb-1">Role</label>
          <div>{data.role}</div>
        </div>
        <div>
          <label className="block mb-1">Qualifications</label>
          <div>{data.qualification}</div>
        </div>
        <div>
          <label className="block mb-1">Experience</label>
          <div>{data.experience}</div>
        </div>
        <div>
          <label className="block mb-1">Status</label>
          <Tag value={data.status} severity="success" />
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Select Evaluators">

      {/* Select Evaluator Dropdown */}
      {view === 'list' && (
        <Card className="mb-4">
          <h3 className="text-lg font-semibold mb-4">Select Evaluator</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div>
              <label className="block mb-1">Select Evaluator *</label>
              <Dropdown
                options={evaluatorOptions}
                placeholder="Select Evaluator"
                className="w-full"
                value={selectedEvaluatorName}
                onChange={(e) => setSelectedEvaluatorName(e.value)}
              />
            </div>

            <div className="flex gap-2">
              <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-secondary"
                onClick={() => {
                  setSelectedEvaluatorName('');
                  setFilteredEvaluators([]);
                  setExpandedRows(null);
                }}
              />
            </div>
          </div>
        </Card>
      )}

      {/* Evaluator List with Row Expansion */}
      {view === 'list' && filteredEvaluators.length > 0 && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Select Evaluators List</h3>
            <Button
              label="Add Select Evaluators"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

 <DataTable
  value={filteredEvaluators}
  paginator
  rows={10}
  showGridlines
  dataKey="id"
  className="p-datatable-sm"
  expandedRows={expandedRows}
  onRowToggle={(e) => setExpandedRows(e.data)}
  rowExpansionTemplate={rowExpansionTemplate}
>
  <Column expander style={{ width: '3rem' }} />
  <Column
    header="Sr No."
    body={(_, opt) => opt.rowIndex + 1}
    style={{ width: '80px' }}
    sortable
  />
  <Column field="name" header="Evaluator Name" sortable />
  <Column field="email" header="Email ID" sortable />
  <Column field="mobile" header="Mobile Number" sortable />
</DataTable>

        </Card>
      )}

      {/* Add Evaluator */}
      {view === 'add' && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Add Evaluator</h3>
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
              <InputText
                placeholder="Enter Evaluator Name"
                className="w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1">Email ID *</label>
              <InputText
                placeholder="Enter Email ID"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1">Mobile Number *</label>
              <InputText
                placeholder="Enter Mobile Number"
                className="w-full"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1">Role *</label>
              <Dropdown
                options={roleOptions}
                placeholder="Select"
                className="w-full"
                value={role}
                onChange={(e) => setRole(e.value)}
              />
            </div>

            <div>
              <label className="block mb-1">Qualifications *</label>
              <Dropdown
                options={qualificationOptions}
                placeholder="Select"
                className="w-full"
                value={qualification}
                onChange={(e) => setQualification(e.value)}
              />
            </div>

            <div>
              <label className="block mb-1">Experience</label>
              <Dropdown
                options={experienceOptions}
                placeholder="Select"
                className="w-full"
                value={experience}
                onChange={(e) => setExperience(e.value)}
              />
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
                value={status}
                onChange={(e) => setStatus(e.value)}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button label="Save" icon="pi pi-save" onClick={handleSave} />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
              onClick={handleClear}
            />
          </div>
        </Card>
      )}

    </PageLayout>
  );
};

export default SelectEvaluators;
