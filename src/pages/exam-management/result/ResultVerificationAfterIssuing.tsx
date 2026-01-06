/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';

interface VerificationRecord {
  id: number;
  rollNo: string;
  session: string;
  issuedResultId: string;
  dob: string;
  status: string;
  verifiedBy: string;
  verificationDate: string;
}

const academicYearOptions = [
  { label: '2023-2024', value: '2023-2024' },
  { label: '2024-2025', value: '2024-2025' },
];

const verificationStatusOptions = [
  { label: 'Select', value: '' },
  { label: 'Verified', value: 'Verified' },
  { label: 'Rejected', value: 'Rejected' },
];

const verificationList: VerificationRecord[] = [
  {
    id: 1,
    rollNo: '0192CA221034',
    session: '2024-2025',
    issuedResultId: 'RES123456789',
    dob: '15-Aug-2002',
    status: 'Verified',
    verifiedBy: 'Dr. Rakesh Sharma',
    verificationDate: '01-Dec-2024',
  },
  {
    id: 2,
    rollNo: '0192CA221035',
    session: '2023-2024',
    issuedResultId: 'RES987654321',
    dob: '20-Jan-2003',
    status: 'Verified',
    verifiedBy: 'Dr. Anil Verma',
    verificationDate: '02-Dec-2024',
  },
  {
    id: 3,
    rollNo: '0192CA221036',
    session: '2024-2025',
    issuedResultId: 'RES654321987',
    dob: '10-Mar-2001',
    status: 'Verified',
    verifiedBy: 'Prof. S. Mehta',
    verificationDate: '03-Dec-2024',
  },
];

const ResultVerificationAfterIssuing: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [expandedRows, setExpandedRows] = useState<any>(null);

  // Form state
  const [rollNo, setRollNo] = useState('');
  const [academicYear, setAcademicYear] = useState<string | null>(null);
  const [reason, setReason] = useState('');
  const [issuedResultId, setIssuedResultId] = useState('');
  const [verificationStatus, setVerificationStatus] = useState<string | null>(null);
  const [resultDetails, setResultDetails] = useState('');
  const [verificationDate, setVerificationDate] = useState<Date | null>(null);
  const [verifiedBy, setVerifiedBy] = useState('');

  return (
    <PageLayout title="Result Verification After Issuing">

      <Card className="mb-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-semibold">Result Verification After Issuing</h3>
          <Button label="Go Back" icon="pi pi-arrow-left" className="p-button-text" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm mb-1">Enter Roll Number *</label>
            <InputText
              value={rollNo}
              onChange={(e) => setRollNo(e.target.value)}
              placeholder="Enter Roll No."
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Select Academic Year</label>
            <Dropdown
              options={academicYearOptions}
              value={academicYear}
              onChange={(e) => setAcademicYear(e.value)}
              placeholder="Select"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Enter Reason for Revaluation *</label>
            <InputText
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              placeholder="Enter Reason"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Enter Issued Result ID *</label>
            <InputText
              value={issuedResultId}
              onChange={(e) => setIssuedResultId(e.target.value)}
              placeholder="Enter Issued Result ID"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Select Verification Status *</label>
            <Dropdown
              options={verificationStatusOptions}
              value={verificationStatus}
              onChange={(e) => setVerificationStatus(e.value)}
              placeholder="Select"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Enter Result Details *</label>
            <InputText
              value={resultDetails}
              onChange={(e) => setResultDetails(e.target.value)}
              placeholder="Enter Result Details"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Enter Verification Date *</label>
            <Calendar
              value={verificationDate}
              onChange={(e) => setVerificationDate(e.value ?? null)}
              placeholder="dd/mm/yyyy"
              dateFormat="dd/mm/yy"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Enter Verified By (Authority) *</label>
            <InputText
              value={verifiedBy}
              onChange={(e) => setVerifiedBy(e.target.value)}
              placeholder="Enter Verified By"
              className="w-full"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <Button
            label="Save"
            icon="pi pi-save"
            onClick={() => setShowList(true)}
          />
          <Button
            label="Clear"
            icon="pi pi-refresh"
            className="p-button-secondary"
            onClick={() => {
              setRollNo('');
              setAcademicYear(null);
              setReason('');
              setIssuedResultId('');
              setVerificationStatus(null);
              setResultDetails('');
              setVerificationDate(null);
              setVerifiedBy('');
              setShowList(false);
            }}
          />
        </div>
      </Card>

      {showList && (
        <Card>
          <h3 className="font-semibold mb-3">Result Verification After Issuing List</h3>

          <DataTable
            value={verificationList}
            showGridlines
            paginator
            rows={10}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: VerificationRecord) => (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-50 text-sm border-round">
                <div>
                  <strong>Verification Status:</strong>{' '}
                  <Tag value={row.status} severity={row.status === 'Verified' ? 'success' : 'danger'} />
                </div>
                <div><strong>Verified By:</strong> {row.verifiedBy}</div>
                <div><strong>Verification Date:</strong> {row.verificationDate}</div>
                <div className="flex align-items-center gap-2">
                  <strong>Actions:</strong>{' '}
                  <Button
                    icon="pi pi-eye"
                    label="View Certificate"
                    className="p-button-sm p-button-outlined"
                    onClick={() => alert('Viewing details for ' + row.rollNo)}
                  />
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column header="Sr. No." body={(_, opt) => opt.rowIndex + 1} sortable />
            <Column field="rollNo" header="Roll Number" sortable />
            <Column field="session" header="Session" sortable />
            <Column field="issuedResultId" header="Issued Result ID" sortable />
            <Column field="dob" header="Date of Birth" sortable />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
};

export default ResultVerificationAfterIssuing;
