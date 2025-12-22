/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';

interface ResultRow {
  id: number;
  rollNo: string;
  name: string;
  subject: string;
  marks: number;
  maxMarks: number;
  grade: string;
  percentage: string;
  examDate: string;
  remarks: string;
  status: 'Passed' | 'Failed';
}

const resultList: ResultRow[] = [
  {
    id: 1,
    rollNo: '0115CA221155',
    name: 'Amit Kumar',
    subject: 'Data Structures',
    marks: 85,
    maxMarks: 100,
    grade: 'A',
    percentage: '85%',
    examDate: '15/11/2024',
    remarks: 'Excellent performance',
    status: 'Passed',
  },
  {
    id: 2,
    rollNo: '0115CA221145',
    name: 'Pooja Sharma',
    subject: 'Operating Systems',
    marks: 78,
    maxMarks: 100,
    grade: 'B+',
    percentage: '78%',
    examDate: '16/11/2024',
    remarks: 'Good',
    status: 'Passed',
  },
  {
    id: 3,
    rollNo: '0115CA221166',
    name: 'Raj Verma',
    subject: 'Artificial Intelligence',
    marks: 88,
    maxMarks: 100,
    grade: 'A',
    percentage: '88%',
    examDate: '17/11/2024',
    remarks: 'Very Good',
    status: 'Passed',
  },
];

const ResultCompilation: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Result Compilation">

      <Card className="mb-4">
        <h3 className="mb-3 font-semibold">Result Compilation</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm mb-1">Enter Roll Number *</label>
            <InputText placeholder="Enter Roll No." className="w-full" />
          </div>

          <div className="flex items-end gap-2">
            <Button
              label="Search"
              icon="pi pi-search"
              onClick={() => setShowList(true)}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
              onClick={() => setShowList(false)}
            />
          </div>
        </div>
      </Card>


      {showList && (
        <Card>
          <h3 className="mb-3 font-semibold">Result Compilation List</h3>

          <DataTable
            value={resultList}
            paginator
            rows={10}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: ResultRow) => (
              <div className="p-4 text-sm grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50">
                <div><strong>Marks Obtained:</strong> {row.marks}</div>
                <div><strong>Maximum Marks:</strong> {row.maxMarks}</div>
                <div><strong>Grade:</strong> {row.grade}</div>
                <div><strong>Percentage:</strong> {row.percentage}</div>
                <div><strong>Examination Date:</strong> {row.examDate}</div>
                <div><strong>Remarks:</strong> {row.remarks}</div>
                <div>
                  <strong>Status:</strong>{' '}
                  <Tag
                    value={row.status}
                    severity={row.status === 'Passed' ? 'success' : 'danger'}
                  />
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="rollNo" header="Roll Number" />
            <Column field="name" header="Student Name" />
            <Column field="subject" header="Subject" />
          </DataTable>
        </Card>
      )}

    </PageLayout>
  );
};

export default ResultCompilation;
