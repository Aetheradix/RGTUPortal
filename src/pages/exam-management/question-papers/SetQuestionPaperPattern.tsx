import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';

import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

interface PatternRow {
  id: number;
  questionType: string;
  noOfQuestions: number;
  marksPerQuestion: number;
}

const selectOptions = [
  { label: 'Select', value: '' },
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

const questionTypeOptions = [
  { label: 'MCQ', value: 'MCQ' },
  { label: 'Short Question', value: 'Short Question' },
  { label: 'Long Question', value: 'Long Question' },
];

const SetQuestionPaperPattern: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [filters, setFilters] = useState({
    academicYear: '',
    examType: '',
    examName: '',
    courseName: '',
    semester: '',
  });

  const [patternList, setPatternList] = useState<PatternRow[]>([
    { id: 1, questionType: 'MCQ', noOfQuestions: 5, marksPerQuestion: 1 },
    { id: 2, questionType: 'Short Question', noOfQuestions: 3, marksPerQuestion: 5 },
  ]);

  const [formData, setFormData] = useState({
    academicYear: '',
    examType: '',
    examName: '',
    courseName: '',
    semester: '',
    totalMarks: '',
    totalQuestions: '',
    mandatoryQuestions: '',
    questionType: '',
    noOfQuestions: '',
    marksPerQuestion: '',
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
      semester: '',
    });
    setShowList(false);
  };

  const handleAddRow = () => {
    const newRow: PatternRow = {
      id: patternList.length + 1,
      questionType: formData.questionType,
      noOfQuestions: Number(formData.noOfQuestions),
      marksPerQuestion: Number(formData.marksPerQuestion),
    };
    setPatternList([...patternList, newRow]);
    setFormData({
      ...formData,
      questionType: '',
      noOfQuestions: '',
      marksPerQuestion: '',
    });
  };

  return (
    <PageLayout title="Set Question Paper Pattern">
      {/* ================= SEARCH FILTER ================= */}
      {!showForm && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
            <Dropdown placeholder="Academic Year *" className="w-full" options={selectOptions}
              value={filters.academicYear}
              onChange={(e) => setFilters({ ...filters, academicYear: e.value })}
            />
            <Dropdown placeholder="Select Exam Type *" className="w-full" options={selectOptions}
              value={filters.examType}
              onChange={(e) => setFilters({ ...filters, examType: e.value })}
            />
            <Dropdown placeholder="Select Exam Name *" className="w-full" options={selectOptions}
              value={filters.examName}
              onChange={(e) => setFilters({ ...filters, examName: e.value })}
            />
            <Dropdown placeholder="Select Course Name *" className="w-full" options={selectOptions}
              value={filters.courseName}
              onChange={(e) => setFilters({ ...filters, courseName: e.value })}
            />
            <Dropdown placeholder="Select Semester *" className="w-full" options={selectOptions}
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
            <h2 className="text-xl font-semibold">Set Question Paper Pattern List</h2>
            <Button
              label="Add Set Question Paper Pattern"
              icon="pi pi-plus"
              onClick={() => setShowForm(true)}
            />
          </div>

          <DataTable value={patternList} paginator rows={10} showGridlines className="p-datatable-sm">
            <Column header="S.No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="questionType" header="Question Type" />
            <Column field="noOfQuestions" header="Number of Questions" />
            <Column field="marksPerQuestion" header="Marks per Question" />
          </DataTable>

          <div className="mt-3 font-semibold">
            Total&nbsp;&nbsp;&nbsp;&nbsp; {patternList.reduce((a, b) => a + b.noOfQuestions, 0)}
          </div>
        </>
      )}

      {/* ================= ADD FORM ================= */}
      {showForm && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Set Question Paper Pattern</h2>
            <Button label="Go Back" icon="pi pi-arrow-left" className="p-button-text" onClick={() => setShowForm(false)} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Dropdown placeholder="Academic Year *" options={selectOptions} className="w-full" />
            <Dropdown placeholder="Select Exam Type *" options={selectOptions} className="w-full" />
            <Dropdown placeholder="Select Exam Name *" options={selectOptions} className="w-full" />
            <Dropdown placeholder="Select Course Name *" options={selectOptions} className="w-full" />
            <Dropdown placeholder="Select Semester *" options={selectOptions} className="w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <InputText placeholder="Total Marks *" />
            <InputText placeholder="Total Questions *" />
            <InputText placeholder="Mandatory Questions *" />
          </div>

          <h3 className="text-lg font-semibold mb-4">Set Questions</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
            <Dropdown
              placeholder="Question Type *"
              options={questionTypeOptions}
              value={formData.questionType}
              onChange={(e) => setFormData({ ...formData, questionType: e.value })}
            />
            <InputText
              placeholder="Number of Questions *"
              value={formData.noOfQuestions}
              onChange={(e) => setFormData({ ...formData, noOfQuestions: e.target.value })}
            />
            <InputText
              placeholder="Marks per Question *"
              value={formData.marksPerQuestion}
              onChange={(e) => setFormData({ ...formData, marksPerQuestion: e.target.value })}
            />
            <Button icon="pi pi-plus" onClick={handleAddRow} />
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

export default SetQuestionPaperPattern;
