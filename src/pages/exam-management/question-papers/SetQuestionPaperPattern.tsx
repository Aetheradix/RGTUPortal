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

interface DropdownOption {
  label: string;
  value: string;
}

/* ================= DROPDOWN OPTIONS ================= */
const academicYearOptions: DropdownOption[] = [
  { label: 'Select', value: '' },
  { label: '2022-23', value: '2022-23' },
  { label: '2023-24', value: '2023-24' },
  { label: '2024-25', value: '2024-25' },
];

const examTypeOptions: DropdownOption[] = [
  { label: 'Select', value: '' },
  { label: 'Internal', value: 'Internal' },
  { label: 'External', value: 'External' },
];

const examNameOptions: DropdownOption[] = [
  { label: 'Select', value: '' },
  { label: 'Mid-Term', value: 'Mid-Term' },
  { label: 'End-Term', value: 'End-Term' },
];

const courseOptions: DropdownOption[] = [
  { label: 'Select', value: '' },
  { label: 'B.Tech', value: 'B.Tech' },
  { label: 'MBA', value: 'MBA' },
  { label: 'BCA', value: 'BCA' },
];

const semesterOptions: DropdownOption[] = [
  { label: 'Select', value: '' },
  { label: '1st Semester', value: '1st Semester' },
  { label: '2nd Semester', value: '2nd Semester' },
  { label: '3rd Semester', value: '3rd Semester' },
];

const questionTypeOptions: DropdownOption[] = [
  { label: 'MCQ', value: 'MCQ' },
  { label: 'Short Question', value: 'Short Question' },
  { label: 'Long Question', value: 'Long Question' },
];

type FilterKeys = 'academicYear' | 'examType' | 'examName' | 'courseName' | 'semester';
type FormKeys = FilterKeys | 'totalMarks' | 'totalQuestions' | 'mandatoryQuestions' | 'questionType' | 'noOfQuestions' | 'marksPerQuestion';

const SetQuestionPaperPattern: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [filters, setFilters] = useState<Record<FilterKeys, string>>({
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

  const [formData, setFormData] = useState<Record<FormKeys, string>>({
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

  const handleSearch = () => setShowList(true);

  const handleClearSearch = () => {
    setFilters({ academicYear: '', examType: '', examName: '', courseName: '', semester: '' });
    setShowList(false);
  };

  const handleAddRow = () => {
    if (!formData.questionType || !formData.noOfQuestions || !formData.marksPerQuestion) return;

    const newRow: PatternRow = {
      id: patternList.length + 1,
      questionType: formData.questionType,
      noOfQuestions: Number(formData.noOfQuestions),
      marksPerQuestion: Number(formData.marksPerQuestion),
    };
    setPatternList([...patternList, newRow]);
    setFormData({ ...formData, questionType: '', noOfQuestions: '', marksPerQuestion: '' });
  };

  return (
    <PageLayout title="Set Question Paper Pattern">
      {!showForm && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-6">
            {Object.entries(filters).map(([key, value]) => {
              let options: DropdownOption[] = [];
              switch (key as FilterKeys) {
                case 'academicYear': options = academicYearOptions; break;
                case 'examType': options = examTypeOptions; break;
                case 'examName': options = examNameOptions; break;
                case 'courseName': options = courseOptions; break;
                case 'semester': options = semesterOptions; break;
              }
              return (
                <div key={key}>
                  <label className="block text-sm font-medium mb-2">{key.replace(/([A-Z])/g, ' $1')}</label>
                  <Dropdown
                    value={value}
                    options={options}
                    className="w-full"
                    onChange={(e) => setFilters({ ...filters, [key]: e.value })}
                  />
                </div>
              );
            })}
          </div>

          <div className="flex gap-3 mb-8">
            <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
            <Button label="Clear" icon="pi pi-refresh" className="p-button-secondary" onClick={handleClearSearch} />
          </div>
        </>
      )}

      {showList && !showForm && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Question Paper Pattern List</h2>
            <Button label="Add Pattern" icon="pi pi-plus" onClick={() => setShowForm(true)} />
          </div>

          <DataTable value={patternList} paginator rows={10} showGridlines className="p-datatable-sm">
            <Column header="S.No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="questionType" header="Question Type" sortable />
            <Column field="noOfQuestions" header="Number of Questions" sortable />
            <Column field="marksPerQuestion" header="Marks per Question" sortable />
          </DataTable>

          <div className="mt-3 font-semibold">
            Total Questions: {patternList.reduce((a, b) => a + b.noOfQuestions, 0)}
          </div>
        </>
      )}

      {showForm && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Add Question Paper Pattern</h2>
            <Button label="Go Back" icon="pi pi-arrow-left" className="p-button-text" onClick={() => setShowForm(false)} />
          </div>

          {/* Dropdown filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {(['academicYear','examType','examName','courseName','semester'] as FilterKeys[]).map((key, idx) => {
              let options: DropdownOption[] = [];
              switch(key) {
                case 'academicYear': options = academicYearOptions; break;
                case 'examType': options = examTypeOptions; break;
                case 'examName': options = examNameOptions; break;
                case 'courseName': options = courseOptions; break;
                case 'semester': options = semesterOptions; break;
              }
              return (
                <div key={idx}>
                  <label className="block text-sm font-medium mb-2">{key.replace(/([A-Z])/g, ' $1')}</label>
                  <Dropdown
                    value={formData[key]}
                    options={options}
                    className="w-full"
                    onChange={(e) => setFormData({ ...formData, [key]: e.value })}
                  />
                </div>
              );
            })}
          </div>

          {/* Input fields */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {(['totalMarks','totalQuestions','mandatoryQuestions'] as const).map((key, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium mb-2">{key.replace(/([A-Z])/g, ' $1')}</label>
                <InputText value={formData[key]} onChange={(e) => setFormData({ ...formData, [key]: e.target.value })} className="w-full" />
              </div>
            ))}
          </div>

          {/* Add question pattern */}
          <h3 className="text-lg font-semibold mb-4">Set Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
            <div>
              <label className="block text-sm font-medium mb-2">Question Type *</label>
              <Dropdown options={questionTypeOptions} value={formData.questionType} onChange={(e) => setFormData({ ...formData, questionType: e.value })} className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Number of Questions *</label>
              <InputText value={formData.noOfQuestions} onChange={(e) => setFormData({ ...formData, noOfQuestions: e.target.value })} className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Marks per Question *</label>
              <InputText value={formData.marksPerQuestion} onChange={(e) => setFormData({ ...formData, marksPerQuestion: e.target.value })} className="w-full" />
            </div>
            <div className="flex items-end">
              <Button icon="pi pi-plus" label="Add" onClick={handleAddRow} />
            </div>
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
