import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import PageLayout from '@/components/PageLayout';

const AdmitCardDownloadPage: React.FC = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [yearTerm, setYearTerm] = useState('');
  const [semester, setSemester] = useState('');
  const [status, setStatus] = useState('');

  const yearTermOptions = [
    { label: 'Select', value: '' },
    { label: '2024-25', value: '2024-25' },
    { label: '2025-26', value: '2025-26' },
  ];

  const semesterOptions = [
    { label: 'Select', value: '' },
    { label: '1st Semester', value: '1st' },
    { label: '2nd Semester', value: '2nd' },
    { label: '3rd Semester', value: '3rd' },
    { label: '4th Semester', value: '4th' },
  ];

  const statusOptions = [
    { label: 'Select', value: '' },
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
  ];

  const handleSearch = () => {
    if (!rollNumber || !yearTerm || !semester || !status) {
      alert('Please fill all fields!');
      return;
    }
    window.open(
      'https://rgpv.tserver.co.in/images/duplicate%20marksheet/btech_2nd_sem_admit_card.pdf',
      '_blank'
    );
  };

  const handleClear = () => {
    setRollNumber('');
    setYearTerm('');
    setSemester('');
    setStatus('');
  };

  return (
    <PageLayout title="Admit Card Download">
      <Card className="shadow-sm border rounded-lg">
        <h3 className="text-lg font-semibold mb-6">Admit Card Download</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
    
          <div>
            <label className="block text-sm font-medium mb-1">Enter Roll Number *</label>
            <InputText
              placeholder="Enter Roll Number"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Select Year Term *</label>
            <Dropdown
              placeholder="Select Year Term"
              options={yearTermOptions}
              value={yearTerm}
              onChange={(e) => setYearTerm(e.value)}
              className="w-full"
            />
          </div>

         
          <div>
            <label className="block text-sm font-medium mb-1">Select Semester *</label>
            <Dropdown
              placeholder="Select Semester"
              options={semesterOptions}
              value={semester}
              onChange={(e) => setSemester(e.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Select Status *</label>
            <Dropdown
              placeholder="Select Status"
              options={statusOptions}
              value={status}
              onChange={(e) => setStatus(e.value)}
              className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-secondary"
            onClick={handleClear}
          />
        </div>
      </Card>
    </PageLayout>
  );
};

export default AdmitCardDownloadPage;
