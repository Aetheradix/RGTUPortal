import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const subjectOptions = [
  { label: 'Data Structures', value: 'DS' },
  { label: 'Operating Systems', value: 'OS' },
  { label: 'Artificial Intelligence', value: 'AI' },
  { label: 'Machine Learning', value: 'ML' },
  { label: 'Programming Fundamentals', value: 'PF' },
  { label: 'Database Management', value: 'DBMS' },
  { label: 'Advanced Java', value: 'JAVA' },
  { label: 'Web Development', value: 'WD' },
];

const subjectCodeOptions = [
  { label: '0123', value: '0123' },
  { label: '0124', value: '0124' },
  { label: '0125', value: '0125' },
  { label: '0126', value: '0126' },
  { label: '0127', value: '0127' },
  { label: '0128', value: '0128' },
];

const transactionData = [
  {
    id: 1,
    rollNo: '101',
    session: '2024-2025',
    subject: 'Data Structures, Operating Systems',
  },
];

const ApplyForRevaluation: React.FC = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [showTransaction, setShowTransaction] = useState(false);

  return (
    <PageLayout title="Apply for Revaluation">


      <Card className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Apply for Revaluation</h3>
          <Button
            label="Go Back"
            icon="pi pi-arrow-left"
            className="p-button-text"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">Enter Roll Number *</label>
            <InputText placeholder="Enter Roll No." />
          </div>

          <div>
            <label className="block text-sm mb-1">Select Subject Code *</label>
            <Dropdown options={subjectCodeOptions} placeholder="Select" />
          </div>

          <div>
            <label className="block text-sm mb-1">Subject *</label>
            <Dropdown options={subjectOptions} placeholder="Select Subject" />
          </div>

          <div className="md:col-span-3">
            <label className="block text-sm mb-1">
              Enter Reason for Revaluation *
            </label>
            <InputText
              placeholder="Enter Reason for Revaluation"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            label="Apply"
            icon="pi pi-check"
            onClick={() => setShowPayment(true)}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-secondary"
            onClick={() => {
              setShowPayment(false);
              setShowTransaction(false);
            }}
          />
        </div>
      </Card>

      {showPayment && (
        <Card className="mb-4">
          <h4 className="font-semibold mb-3">Payment Process</h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
            <div className="md:col-span-3">
            <label className="block text-sm mb-1">
             Subject *
            </label>
            <InputText
              placeholder="Enter Subject"
              className="w-full"
            />
          </div>

            
             <div className="md:col-span-3">
            <label className="block text-sm mb-1">
             Revaluation Fees (Per Subject) *
            </label>
            <InputText
              placeholder="Revaluation Fees (Per Subject)"
              className="w-full"
            />
          </div>

          
            <div className="md:col-span-3">
            <label className="block text-sm mb-1">
             Revaluation Subject Count *
            </label>
            <InputText
              placeholder="Revaluation Subject Count"
              className="w-full"
            />
          </div>
             <div className="md:col-span-3">
            <label className="block text-sm mb-1">
             Total Revaluation Fees *
            </label>
            <InputText
              placeholder="Total Revaluation Fees"
              className="w-full"
            />
          </div>
          </div>

          <div className="flex gap-3">
            <Button
              label="Pay"
              icon="pi pi-credit-card"
              onClick={() => setShowTransaction(true)}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
              onClick={() => setShowTransaction(false)}
            />
          </div>
        </Card>
      )}

   
      {showTransaction && (
        <Card>
          <h4 className="font-semibold mb-3">Transaction Details</h4>

          <DataTable value={transactionData} showGridlines paginator rows={10}>
            <Column header="S.No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="rollNo" header="Roll No." />
            <Column field="session" header="Session" />
            <Column field="subject" header="Subject" />
          </DataTable>

          <div className="flex gap-3 mt-4">
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

export default ApplyForRevaluation;
