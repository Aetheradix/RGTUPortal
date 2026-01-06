/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { Tag } from 'primereact/tag';

interface ResultPublication {
  id: number;
  university: string;
  college: string;
  courseLevel: string;
  course: string;
  examType: string;
  academicYear: string;
  publishedDate: string;
  status: string;
  notification: string;
}

const publicationList: ResultPublication[] = [
  {
    id: 1,
    university: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal',
    college: 'Government Engineering College, Jabalpur',
    courseLevel: 'Under Graduate',
    course: 'B.Tech',
    examType: 'Mid-Term Exams',
    academicYear: '2024-2025',
    publishedDate: '29/11/2024',
    status: 'Published',
    notification: 'Yes',
  },
  {
    id: 2,
    university: 'Dr. Harisingh Gour University, Sagar',
    college: 'Institute of Engineering & Technology',
    courseLevel: 'Post Graduate',
    course: 'M.Tech',
    examType: 'End-Term Exams',
    academicYear: '2024-2025',
    publishedDate: '01/12/2024',
    status: 'Published',
    notification: 'Yes',
  },
  {
    id: 3,
    university: 'Awadhesh Pratap Singh University, Rewa',
    college: 'APS Engineering College',
    courseLevel: 'Under Graduate',
    course: 'BCA',
    examType: 'Semester Exams',
    academicYear: '2024-2025',
    publishedDate: '03/12/2024',
    status: 'Published',
    notification: 'Yes',
  },
];

// Dropdown options
const universityOptions = [
  { label: 'RGPV, Bhopal', value: 'RGPV, Bhopal' },
  { label: 'Dr. Harisingh Gour University, Sagar', value: 'Dr. Harisingh Gour University, Sagar' },
  { label: 'APS University, Rewa', value: 'APS University, Rewa' },
];

const collegeOptions = [
  { label: 'Government Engineering College, Jabalpur', value: 'Government Engineering College, Jabalpur' },
  { label: 'Institute of Engineering & Technology', value: 'Institute of Engineering & Technology' },
  { label: 'APS Engineering College', value: 'APS Engineering College' },
];

const courseLevelOptions = [
  { label: 'Under Graduate', value: 'Under Graduate' },
  { label: 'Post Graduate', value: 'Post Graduate' },
];

const courseOptions = [
  { label: 'B.Tech', value: 'B.Tech' },
  { label: 'M.Tech', value: 'M.Tech' },
  { label: 'BCA', value: 'BCA' },
];

const examTypeOptions = [
  { label: 'Mid-Term Exams', value: 'Mid-Term Exams' },
  { label: 'End-Term Exams', value: 'End-Term Exams' },
  { label: 'Semester Exams', value: 'Semester Exams' },
];

const academicYearOptions = [
  { label: '2024-2025', value: '2024-2025' },
  { label: '2023-2024', value: '2023-2024' },
];

const notificationOptions = [
  { label: 'Sent', value: 'Sent' },
  { label: 'No', value: 'No' },
];

const ResultPublication: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [expandedRows, setExpandedRows] = useState<any>(null);

  // Dropdown state
  const [selectedUniversity, setSelectedUniversity] = useState<string | null>(null);
  const [selectedCollege, setSelectedCollege] = useState<string | null>(null);
  const [selectedCourseLevel, setSelectedCourseLevel] = useState<string | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedExamType, setSelectedExamType] = useState<string | null>(null);
  const [selectedAcademicYear, setSelectedAcademicYear] = useState<string | null>(null);
  const [selectedNotification, setSelectedNotification] = useState<string | null>(null);
  const [publishedDate, setPublishedDate] = useState<Date | null>(null);

  return (
    <PageLayout title="Result Publication">
      {view === 'list' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Result Publication List</h3>
            <Button
              label="Add Result Publication"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

          <DataTable
            value={publicationList}
            paginator
            rows={10}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: ResultPublication) => (
              <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-gray-50 text-sm">
                <div><strong>College Name:</strong> {row.college}</div>
                <div><strong>Course Level:</strong> {row.courseLevel}</div>
                <div><strong>Course:</strong> {row.course}</div>
                <div><strong>Exam Type:</strong> {row.examType}</div>
                <div><strong>Academic Year:</strong> {row.academicYear}</div>
                <div><strong>Published Date:</strong> {row.publishedDate}</div>
                <div><strong>Publish Status:</strong> <Tag value={row.status} severity="success" /></div>
                <div><strong>Notification Sent:</strong> <Tag value={row.notification} severity="info" /></div>
              </div>
            )}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} sortable />
            <Column field="university" header="University Name" sortable />
          </DataTable>
        </Card>
      )}

      {view === 'add' && (
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Add Result Publication</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Select University Name *</label>
              <Dropdown
                options={universityOptions}
                value={selectedUniversity}
                onChange={(e) => setSelectedUniversity(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Select College Name *</label>
              <Dropdown
                options={collegeOptions}
                value={selectedCollege}
                onChange={(e) => setSelectedCollege(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Select Course Level</label>
              <Dropdown
                options={courseLevelOptions}
                value={selectedCourseLevel}
                onChange={(e) => setSelectedCourseLevel(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Select Course *</label>
              <Dropdown
                options={courseOptions}
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Select Exam Type *</label>
              <Dropdown
                options={examTypeOptions}
                value={selectedExamType}
                onChange={(e) => setSelectedExamType(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Select Academic Year *</label>
              <Dropdown
                options={academicYearOptions}
                value={selectedAcademicYear}
                onChange={(e) => setSelectedAcademicYear(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Enter Published Date *</label>
              <Calendar
                value={publishedDate}
                onChange={(e) => setPublishedDate(e.value ?? null)}
                placeholder="dd/mm/yyyy"
                dateFormat="dd/mm/yy"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Notification Sent *</label>
              <Dropdown
                options={notificationOptions}
                value={selectedNotification}
                onChange={(e) => setSelectedNotification(e.value)}
                placeholder="Select"
                className="w-full"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button label="Publish" icon="pi pi-check" />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary" />
          </div>
        </Card>
      )}
    </PageLayout>
  );
};

export default ResultPublication;
