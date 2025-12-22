/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';

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

const transactionList = [
  {
    id: 1,
    rollNo: '101',
    session: '2024-2025',
    subject: 'Mathematics',
    status: 'Paid',
    paymentDate: '2024-11-30',
    transactionId: 'TX12345',
    paymentMode: 'Credit Card',
    amount: 300,
  },
];

const ApplyForRetotaling: React.FC = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [showTransaction, setShowTransaction] = useState(false);
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Apply for Retotaling">


      <Card className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Apply for Retotaling</h3>
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
              Enter Reason for Retotaling *
            </label>
            <InputText
              placeholder="Enter Reason for Retotaling"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Subject</label>
              <Dropdown options={subjectOptions} placeholder="Select Subject" />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Retotaling Fees (Per Subject)
              </label>
              <InputText value="150" disabled />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Retotaling Subject Count
              </label>
              <InputText value="2" />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Total Retotaling Fees
              </label>
              <InputText value="300" />
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

          <DataTable
            value={transactionList}
            showGridlines
            paginator
            rows={10}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row) => (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-50 text-sm">
                <div><strong>Payment Date:</strong> {row.paymentDate}</div>
                <div><strong>Transaction ID:</strong> {row.transactionId}</div>
                <div><strong>Payment Mode:</strong> {row.paymentMode}</div>
                <div><strong>Amount:</strong> ₹{row.amount}</div>
                <div className="md:col-span-2">
                  <Button label="View" icon="pi pi-eye" text />
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column header="S.No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="rollNo" header="Roll No." />
            <Column field="session" header="Session" />
            <Column field="subject" header="Subject" />
            <Column
              field="status"
              header="Payment Status"
              body={(row) => (
                <Tag
                  value={row.status}
                  severity={row.status === 'Paid' ? 'success' : 'warning'}
                />
              )}
            />
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

export default ApplyForRetotaling;
