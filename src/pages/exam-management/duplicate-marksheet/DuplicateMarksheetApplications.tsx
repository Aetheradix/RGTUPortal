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
import { FileUpload } from 'primereact/fileupload';

interface DuplicateApplication {
  id: number;
  rollNo: string;
  examName: string;
  course: string;
  subject: string;
  issueDate: string;
  applicationDate: string;
  processedBy: string;
  fee: number;
  paymentStatus: string;
  status: string;
  reason: string;
}

const examOptions = [
  { label: 'Mid-Term Exams', value: 'Mid-Term Exams' },
  { label: 'Final Exams', value: 'Final Exams' },
  { label: 'Quarterly Tests', value: 'Quarterly Tests' },
];

const subjectOptions = [
  { label: 'Data Structures', value: 'Data Structures' },
  { label: 'Operating Systems', value: 'Operating Systems' },
  { label: 'Artificial Intelligence', value: 'Artificial Intelligence' },
];

const statusOptions = [
  { label: 'Pending', value: 'Pending' },
  { label: 'Processed', value: 'Processed' },
];

const paymentOptions = [
  { label: 'Paid', value: 'Paid' },
  { label: 'Unpaid', value: 'Unpaid' },
];

const applicationList: DuplicateApplication[] = [
  {
    id: 1,
    rollNo: '2023100123',
    examName: 'Mid-Term Exams',
    course: 'B.Tech',
    subject: 'Data Structures',
    issueDate: '28 November, 2024',
    applicationDate: '28 November, 2024',
    processedBy: 'Prof. Sharma',
    fee: 350,
    paymentStatus: 'Paid',
    status: 'Processed',
    reason: 'I lost my marksheet',
  },
  {
    id: 2,
    rollNo: '2023100456',
    examName: 'Final Exams',
    course: 'M.Tech',
    subject: 'Operating Systems',
    issueDate: '15 October, 2024',
    applicationDate: '18 October, 2024',
    processedBy: 'Prof. Verma',
    fee: 350,
    paymentStatus: 'Paid',
    status: 'Processed',
    reason: 'Damaged marksheet',
  },
  {
    id: 3,
    rollNo: '2023100789',
    examName: 'Quarterly Tests',
    course: 'BCA',
    subject: 'Artificial Intelligence',
    issueDate: '10 September, 2024',
    applicationDate: '12 September, 2024',
    processedBy: 'Prof. Singh',
    fee: 350,
    paymentStatus: 'Paid',
    status: 'Processed',
    reason: 'Lost during shifting',
  },
];

const DuplicateMarksheetApplications: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Duplicate Marksheet Applications">


      {view === 'list' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Duplicate Marksheet Applications</h3>
            <Button
              label="Add Duplicate Marksheet Application"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

          <DataTable
            value={applicationList}
            paginator
            rows={10}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: DuplicateApplication) => (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-50 text-sm">
                <div><strong>Date of Issue:</strong> {row.issueDate}</div>
                <div><strong>Application Date:</strong> {row.applicationDate}</div>
                <div><strong>Processed By:</strong> {row.processedBy}</div>
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
            <Column field="examName" header="Exam Name" />
            <Column field="course" header="Course" />
            <Column field="subject" header="Subject" />
          </DataTable>
        </Card>
      )}


      {view === 'add' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Add Duplicate Marksheet Applications</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <InputText placeholder="Enter Roll Number *" />
            <Dropdown options={examOptions} placeholder="Select Exam Name *" />
            <Dropdown options={subjectOptions} placeholder="Select Subject *" />
            <InputText placeholder="Enter Reason for Duplicate Marksheet" />
            <Dropdown options={statusOptions} placeholder="Application Status *" />
            <Dropdown options={paymentOptions} placeholder="Payment Status *" />
            <Calendar placeholder="Application Date *" dateFormat="dd/mm/yy" />
            <InputText placeholder="Processed By *" />
            <Calendar placeholder="Processing Date *" dateFormat="dd/mm/yy" />
            <InputText placeholder="Enter Remarks *" />
            <FileUpload mode="basic" chooseLabel="Document Upload *" />
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

export default DuplicateMarksheetApplications;
