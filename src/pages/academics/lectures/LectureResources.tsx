import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface LectureResourceRow {
  srNo: number;
  notesUrl: string;
  booksUrl: string;
  assignmentsUrl: string;
  presentationUrl: string;
  pdfUrl: string;
}

const batches = [
  { label: "B.Tech ", value: "B.Tech " },
  { label: "M.Tech ", value: "M.Tech " },
  { label: "BCA", value: "BCA" },
  { label: "MCA", value: "MCA" },
];

const subjects = [
  { label: 'Data Science', value: 'DS' },
  { label: 'DSA', value: 'DSA' },
];

const dummyResources: LectureResourceRow[] = [
  {
    srNo: 1,
    notesUrl: '#',
    booksUrl: '#',
    assignmentsUrl: '#',
    presentationUrl: '#',
    pdfUrl: '#',
  },
];

const LectureResources: React.FC = () => {
  // Mode toggle karne ke liye state
  const [isAddMode, setIsAddMode] = useState(false);

  const [filters, setFilters] = useState({
    batch: null as string | null,
    subject: null as string | null,
  });

  const [rows] = useState<LectureResourceRow[]>(dummyResources);

  // Table buttons ko mode ke hisaab se render karne ke liye helper
  const renderTableButton = (url: string) => (
    <Button 
      label={isAddMode ? "Add Resources" : "View"} 
      className="p-button-sm p-button-raised" 
      style={{ backgroundColor: '#6366F1', border: 'none' }}
      onClick={() => isAddMode ? console.log("Open Add Modal/Logic") : window.open(url, '_blank')}
    />
  );

  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr.No.', sortable: true, style: { width: '80px' } },
    { 
      field: 'notesUrl', 
      header: 'Notes', 
      body: (row: LectureResourceRow) => renderTableButton(row.notesUrl) 
    },
    { 
      field: 'booksUrl', 
      header: 'Books', 
      body: (row: LectureResourceRow) => renderTableButton(row.booksUrl) 
    },
    { 
      field: 'assignmentsUrl', 
      header: 'Assignments', 
      body: (row: LectureResourceRow) => renderTableButton(row.assignmentsUrl) 
    },
    { 
      field: 'presentationUrl', 
      header: 'Presentation', 
      body: (row: LectureResourceRow) => renderTableButton(row.presentationUrl) 
    },
    { 
      field: 'pdfUrl', 
      header: 'PDF', 
      body: (row: LectureResourceRow) => renderTableButton(row.pdfUrl) 
    },
    {
      header: 'Action',
      body: () => (
        <div className="flex gap-2">
          <Button icon="pi pi-pencil" className="p-button-rounded p-button-secondary p-button-sm" style={{ backgroundColor: '#6366F1' }} />
          <Button icon="pi pi-trash" className="p-button-rounded p-button-danger p-button-sm" />
        </div>
      ),
      field: '',
    },
  ];

  return (
    <PageLayout 
      // Heading mode ke hisaab se dynamic hai
      title={isAddMode ? "Add Lecture Resources" : "Lecture Resources List"} 
    >
      {/* Top Action Button */}
      <div className="flex justify-end mb-4">
        <Button 
          label={isAddMode ? "Back" : "Add Lecture Resources"} 
          icon={isAddMode ? "pi pi-arrow-left" : "pi pi-plus"}
          className="p-button-sm"
          style={{ backgroundColor: '#6366F1', border: 'none' }}
          onClick={() => setIsAddMode(!isAddMode)}
        />
      </div>

      {/* Filters Section */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          <Dropdown
            label="Select Batch"
            value={filters.batch}
            options={batches}
            onChange={(e) => setFilters({ ...filters, batch: e.value })}
            placeholder="Select"
          />

          <Dropdown
            label="Select Subject"
            value={filters.subject}
            options={subjects}
            onChange={(e) => setFilters({ ...filters, subject: e.value })}
            placeholder="Select"
          />
        </div>

        <div className="flex justify-center mt-6">
          <Button 
            label="Search" 
            className="px-8" 
            style={{ backgroundColor: '#6366F1' }} 
            onClick={() => console.log('Searching...', filters)}
          />
        </div>
      </div>

      {/* Table Section */}
      <div className="mt-4">
        <Table 
          columns={columns} 
          data={rows} 
          showPagination 
          rowsPerPage={10} 
        />
      </div>
    </PageLayout>
  );
};

export default LectureResources;