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

interface DownloadMarksheet {
  id: number;
  rollNo: string;
  examName: string;
  course: string;
  subject: string;
  downloadDate: string;
  format: string;
  remark: string;
}

const examOptions = [
  { label: 'Mid-Term Exams', value: 'Mid-Term Exams' },
  { label: 'End-Term Exams', value: 'End-Term Exams' },
  { label: 'Practical Exams', value: 'Practical Exams' },
];

const listData: DownloadMarksheet[] = [
  {
    id: 1,
    rollNo: '2023100123',
    examName: 'Mid-Term Exams',
    course: 'B.Tech',
    subject: 'Data Structures',
    downloadDate: '28 November, 2024',
    format: 'PDF',
    remark: 'I lost my marksheet',
  },
  {
    id: 2,
    rollNo: '2023100456',
    examName: 'End-Term Exams',
    course: 'MCA',
    subject: 'Operating Systems',
    downloadDate: '30 November, 2024',
    format: 'PDF',
    remark: 'Damaged copy',
  },
  {
    id: 3,
    rollNo: '2023100789',
    examName: 'Practical Exams',
    course: 'B.Sc',
    subject: 'Physics Practical',
    downloadDate: '01 December, 2024',
    format: 'PDF',
    remark: 'Original misplaced',
  },
];

const FilterDownloadDuplicateMarksheet: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Filter For Download Duplicate Marksheet">


      <Card className="mb-4">
        <h3 className="font-semibold mb-3">Filter For Download Duplicate Marksheet</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
          <div>
            <label className="block text-sm mb-1">Enter Roll Number *</label>
            <InputText value="0192CA221034" className="w-full" />
          </div>

          <div>
            <label className="block text-sm mb-1">Select University Name *</label>
            <InputText
              value="Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Select College Name *</label>
            <InputText
              value="Institute of Engineering and Technology (IET-DAVV), Indore"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Select Course</label>
            <InputText value="B.Tech" className="w-full" />
          </div>

          <div>
            <label className="block text-sm mb-1">Select Exam Name *</label>
            <Dropdown options={examOptions} placeholder="Select" className="w-full" />
          </div>
        </div>

        <div className="flex gap-3">
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
      </Card>

      {showList && (
        <Card>
          <h3 className="font-semibold mb-3">Download Duplicate Marksheet List</h3>

          <DataTable
            value={listData}
            paginator
            rows={10}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: DownloadMarksheet) => (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-3 bg-gray-50 text-sm">
                <div><strong>Subject:</strong> {row.subject}</div>
                <div><strong>Date of Download:</strong> {row.downloadDate}</div>
                <div><strong>Download Format:</strong> <Tag value={row.format} severity="info" /></div>
                <div><strong>Remark:</strong> {row.remark}</div>
                <div>
                  <strong>Action:</strong>{' '}
                  <Button
                    label="Download"
                    icon="pi pi-download"
                    size="small"
                  />
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="rollNo" header="Roll Number" />
            <Column field="examName" header="Exam Number" />
            <Column field="course" header="Course" />
          </DataTable>
        </Card>
      )}
    </PageLayout>
  );
};

export default FilterDownloadDuplicateMarksheet;
