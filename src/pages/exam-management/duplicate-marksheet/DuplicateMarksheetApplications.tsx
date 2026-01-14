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

/* ================= OPTIONS ================= */
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

/* ================= LIST ================= */
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
];

const DuplicateMarksheetApplications: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [expandedRows, setExpandedRows] = useState<any>(null);

  /* ✅ FORM STATE */
  const [form, setForm] = useState({
    rollNo: '',
    examName: null as string | null,
    subject: null as string | null,
    reason: '',
    status: null as string | null,
    paymentStatus: null as string | null,
    applicationDate: null as Date | null,
    processedBy: '',
    processingDate: null as Date | null,
    remarks: '',
  });

  return (
    <PageLayout title="Duplicate Marksheet Applications">

      {/* ================= LIST ================= */}
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
  className="p-datatable-sm"
  expandedRows={expandedRows}
  onRowToggle={(e) => setExpandedRows(e.data)}
  rowExpansionTemplate={(row: DuplicateApplication) => (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-50 text-sm">
      <div><strong>Date of Issue:</strong> {row.issueDate}</div>
      <div><strong>Application Date:</strong> {row.applicationDate}</div>
      <div><strong>Processed By:</strong> {row.processedBy}</div>
      <div><strong>Duplicate Marksheet Fee:</strong> ₹{row.fee}</div>
      <div>
        <strong>Payment Status:</strong>{' '}
        <Tag value={row.paymentStatus} severity="success" />
      </div>
      <div>
        <strong>Status:</strong>{' '}
        <Tag value={row.status} severity="info" />
      </div>
      <div className="md:col-span-2">
        <strong>Reason:</strong> {row.reason}
      </div>
    </div>
  )}
>
  <Column
    expander
    style={{ width: '3rem' }}
  />
  <Column
    field="srNo"
    header="Sr No."
    body={(_, opt) => opt.rowIndex + 1}
    style={{ width: '80px' }}
    sortable
    filter
    filterPlaceholder="Search"
  />
  <Column field="rollNo" header="Roll Number" sortable filter filterPlaceholder="Search" />
  <Column field="examName" header="Exam Name" sortable filter filterPlaceholder="Search" />
  <Column field="course" header="Course" sortable filter filterPlaceholder="Search" />
  <Column field="subject" header="Subject" sortable filter filterPlaceholder="Search" />
</DataTable>

        </Card>
      )}

      {/* ================= ADD ================= */}
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

            <div className="flex flex-col gap-1">
              <label>Roll Number *</label>
              <InputText
                placeholder="Enter Roll Number *"
                value={form.rollNo}
                onChange={(e) => setForm({ ...form, rollNo: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Exam Name *</label>
              <Dropdown
                options={examOptions}
                placeholder="Select Exam Name *"
                value={form.examName}
                onChange={(e) => setForm({ ...form, examName: e.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Subject *</label>
              <Dropdown
                options={subjectOptions}
                placeholder="Select Subject *"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Reason for Duplicate Marksheet</label>
              <InputText
                placeholder="Enter Reason for Duplicate Marksheet"
                value={form.reason}
                onChange={(e) => setForm({ ...form, reason: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Application Status *</label>
              <Dropdown
                options={statusOptions}
                placeholder="Application Status *"
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Payment Status *</label>
              <Dropdown
                options={paymentOptions}
                placeholder="Payment Status *"
                value={form.paymentStatus}
                onChange={(e) => setForm({ ...form, paymentStatus: e.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Application Date *</label>
              <Calendar
                placeholder="Application Date *"
                dateFormat="dd/mm/yy"
                value={form.applicationDate}
                onChange={(e) => setForm({ ...form, applicationDate: e.value ?? null })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Processed By *</label>
              <InputText
                placeholder="Processed By *"
                value={form.processedBy}
                onChange={(e) => setForm({ ...form, processedBy: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Processing Date *</label>
              <Calendar
                placeholder="Processing Date *"
                dateFormat="dd/mm/yy"
                value={form.processingDate}
                onChange={(e) => setForm({ ...form, processingDate: e.value ?? null })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Remarks *</label>
              <InputText
                placeholder="Enter Remarks *"
                value={form.remarks}
                onChange={(e) => setForm({ ...form, remarks: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label>Document Upload *</label>
              <FileUpload mode="basic" chooseLabel="Choose File" />
            </div>

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
