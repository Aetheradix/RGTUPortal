/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Tag } from 'primereact/tag';

interface DuplicateMarksheet {
  id: number;
  rollNo: string;
  university: string;
  college: string;
  course: string;
  examType: string;
  issueDate: string;
  applicationDate: string;
  fee: number;
  paymentStatus: string;
  status: string;
  reason: string;
}

const universityOptions = [
  { label: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal', value: 'RGPV' },
  { label: 'Devi Ahilya Vishwavidyalaya (DAVV), Indore', value: 'DAVV' },
];

const collegeOptions = [
  { label: 'Institute of Engineering and Technology (IET-DAVV), Indore', value: 'IET' },
  { label: 'Samrat Ashok Technological Institute (SATI), Vidisha', value: 'SATI' },
];

const statusOptions = [
  { label: 'Select', value: '' },
  { label: 'Pending', value: 'Pending' },
  { label: 'Processed', value: 'Processed' },
];

const paymentStatusOptions = [
  { label: 'Select', value: '' },
  { label: 'Paid', value: 'Paid' },
  { label: 'Unpaid', value: 'Unpaid' },
];

const duplicateList: DuplicateMarksheet[] = [
  {
    id: 1,
    rollNo: '2023100123',
    university: 'Devi Ahilya Vishwavidyalaya (DAVV), Indore',
    college: 'Samrat Ashok Technological Institute (SATI), Vidisha',
    course: 'B.Tech',
    examType: 'Mid-Term Exams',
    issueDate: '28 November, 2024',
    applicationDate: '28 November, 2024',
    fee: 350,
    paymentStatus: 'Paid',
    status: 'Processed',
    reason: 'I lost my marksheet',
  },
  {
    id: 2,
    rollNo: '2023100456',
    university: 'Awadhesh Pratap Singh University, Rewa',
    college: 'Engineering College Rewa',
    course: 'B.Tech',
    examType: 'End-Term Exams',
    issueDate: '15 October, 2024',
    applicationDate: '20 October, 2024',
    fee: 350,
    paymentStatus: 'Paid',
    status: 'Processed',
    reason: 'Damaged marksheet',
  },
  {
    id: 3,
    rollNo: '2023100789',
    university: 'Jagran Lakecity University, Bhopal',
    college: 'Jagran Lakecity University',
    course: 'B.Tech',
    examType: 'Mid-Term Exams',
    issueDate: '10 September, 2024',
    applicationDate: '12 September, 2024',
    fee: 350,
    paymentStatus: 'Paid',
    status: 'Processed',
    reason: 'Lost during travel',
  },
];

const ApplyForDuplicateMarksheet: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Apply for Duplicate Marksheet">

 
      {view === 'list' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Apply for Duplicate Marksheet List</h3>
            <Button
              label="Apply for Duplicate Marksheet"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

          <DataTable
            value={duplicateList}
            showGridlines
            paginator
            rows={10}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: DuplicateMarksheet) => (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-50 text-sm">
                <div><strong>University Name:</strong> {row.university}</div>
                <div><strong>College Name:</strong> {row.college}</div>
                <div><strong>Course:</strong> {row.course}</div>
                <div><strong>Exam Type:</strong> {row.examType}</div>
                <div><strong>Date of Issue:</strong> {row.issueDate}</div>
                <div><strong>Application Date:</strong> {row.applicationDate}</div>
                <div><strong>Duplicate Marksheet Fee:</strong> ₹{row.fee}</div>
                <div><strong>Payment Status:</strong> <Tag value={row.paymentStatus} severity="success" /></div>
                <div><strong>Status:</strong> <Tag value={row.status} severity="info" /></div>
                <div className="md:col-span-2">
                  <strong>Reason for Duplicate Marksheet:</strong> {row.reason}
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="rollNo" header="Roll Number *" />
          </DataTable>
        </Card>
      )}

 
      {view === 'add' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Apply for Duplicate Marksheet</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <InputText placeholder="Enter Roll Number *" />
            <Dropdown options={universityOptions} placeholder="Select University Name *" />
            <Dropdown options={collegeOptions} placeholder="Select College Name *" />
            <InputText placeholder="Select Course" value="B.Tech" />
            <Dropdown placeholder="Select Exam Name *" />
            <Calendar placeholder="Enter Date of Issue *" dateFormat="dd/mm/yy" />
            <Calendar placeholder="Enter Application Date *" dateFormat="dd/mm/yy" />
            <InputText placeholder="Enter Duplicate Marksheet Fee *" />
            <Dropdown options={paymentStatusOptions} placeholder="Payment Status" />
            <Dropdown options={statusOptions} placeholder="Status" />
            <InputText
              className="md:col-span-3"
              placeholder="Enter Reason for Duplicate Marksheet"
            />
          </div>

          <div className="flex gap-3">
            <Button label="Save" icon="pi pi-save" />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary" />
          </div>
        </Card>
      )}
    </PageLayout>
  );
};

export default ApplyForDuplicateMarksheet;
