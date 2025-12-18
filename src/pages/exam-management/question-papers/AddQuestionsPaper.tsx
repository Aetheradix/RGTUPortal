import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';

import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface QuestionPaperRow {
  id: number;
  courseName: string;
  specialization: string;
  semester: string;
  subject: string;
}

const selectOptions = [
  { label: 'Select', value: '' },
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

const questionTypeOptions = [
  { label: 'MCQ', value: 'MCQ' },
  { label: 'Short Answer', value: 'Short Answer' },
  { label: 'Long Answer', value: 'Long Answer' },
];

const AddQuestionPaper: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [showForm, setShowForm] = useState(false);

  /* ---------- SEARCH FILTERS ---------- */
  const [filters, setFilters] = useState({
    academicYear: '',
    examType: '',
    examName: '',
    courseName: '',
    specialization: '',
    semester: '',
  });

  /* ---------- LIST DATA ---------- */
  const questionPaperList: QuestionPaperRow[] = [
    {
      id: 1,
      courseName: 'B.Tech',
      specialization: 'CSE',
      semester: '1st Semester',
      subject: 'Mathematics',
    },
  ];

  /* ---------- FORM DATA ---------- */
  const [formData, setFormData] = useState({
    academicYear: '',
    examType: '',
    examName: '',
    courseName: '',
    specialization: '',
    semester: '',
    subject: '',
    questionType: '',
  });

  const handleSearch = () => {
    setShowList(true);
  };

  const handleClearSearch = () => {
    setFilters({
      academicYear: '',
      examType: '',
      examName: '',
      courseName: '',
      specialization: '',
      semester: '',
    });
    setShowList(false);
  };

  return (
    <PageLayout title="Add Question Paper">
      {/* ================= SEARCH FILTER ================= */}
      {!showForm && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
            <Dropdown placeholder="Academic Year *" options={selectOptions}
              value={filters.academicYear}
              onChange={(e) => setFilters({ ...filters, academicYear: e.value })}
            />
            <Dropdown placeholder="Select Exam Type *" options={selectOptions}
              value={filters.examType}
              onChange={(e) => setFilters({ ...filters, examType: e.value })}
            />
            <Dropdown placeholder="Select Exam Name *" options={selectOptions}
              value={filters.examName}
              onChange={(e) => setFilters({ ...filters, examName: e.value })}
            />
            <Dropdown placeholder="Select Course Name *" options={selectOptions}
              value={filters.courseName}
              onChange={(e) => setFilters({ ...filters, courseName: e.value })}
            />
            <Dropdown placeholder="Select Specialization" options={selectOptions}
              value={filters.specialization}
              onChange={(e) => setFilters({ ...filters, specialization: e.value })}
            />
            <Dropdown placeholder="Select Semester *" options={selectOptions}
              value={filters.semester}
              onChange={(e) => setFilters({ ...filters, semester: e.value })}
            />
          </div>

          <div className="flex gap-3 mb-8">
            <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary" onClick={handleClearSearch} />
          </div>
        </>
      )}

      {/* ================= LIST ================= */}
      {showList && !showForm && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Question Paper List</h2>
            <Button
              label="Add Question Paper"
              icon="pi pi-plus"
              onClick={() => setShowForm(true)}
            />
          </div>

          <DataTable value={questionPaperList} paginator rows={10} showGridlines className="p-datatable-sm">
            <Column header="S.No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="courseName" header="Course Name" />
            <Column field="specialization" header="Specialization" />
            <Column field="semester" header="Semester" />
            <Column field="subject" header="Subject" />
          </DataTable>
        </>
      )}

      {/* ================= ADD FORM ================= */}
      {showForm && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Add Question Paper</h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setShowForm(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-6">
            <Dropdown placeholder="Academic Year *" options={selectOptions} />
            <Dropdown placeholder="Select Exam Type *" options={selectOptions} />
            <Dropdown placeholder="Select Exam Name *" options={selectOptions} />
            <Dropdown placeholder="Select Course Name *" options={selectOptions} />
            <Dropdown placeholder="Select Specialization" options={selectOptions} />
            <Dropdown placeholder="Select Semester *" options={selectOptions} />
            <Dropdown placeholder="Select Subject *" options={selectOptions} />
          </div>

          {/* ================= QUESTION PAPER PATTERN ================= */}
          <h3 className="text-lg font-semibold mb-4">Question Paper Pattern</h3>

          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border p-2">Total Marks</th>
                  <th className="border p-2">Total Questions</th>
                  <th className="border p-2">MCQ</th>
                  <th className="border p-2">Short Answer</th>
                  <th className="border p-2">Long Answer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 text-center">100</td>
                  <td className="border p-2 text-center">20</td>
                  <td className="border p-2">10 Questions (1 Mark each)</td>
                  <td className="border p-2">5 Questions (6 Marks each)</td>
                  <td className="border p-2">5 Questions (12 Marks each)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ================= ADD QUESTION ================= */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <Dropdown
              placeholder="Select Question Type *"
              options={questionTypeOptions}
              value={formData.questionType}
              onChange={(e) => setFormData({ ...formData, questionType: e.value })}
            />
            <Button icon="pi pi-plus" label="Add" />
          </div>

          <div className="flex gap-3 mt-6">
            <Button label="Save" icon="pi pi-save" />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary" />
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default AddQuestionPaper;
