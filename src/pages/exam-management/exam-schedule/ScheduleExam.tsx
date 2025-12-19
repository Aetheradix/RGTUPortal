import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Calendar } from 'primereact/calendar';

interface ScheduleExam {
  id: number;
  examType: string;
  examName: string;
  courseName: string;
}

const ScheduleExam: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    academicYear: '',
    examType: '',
    examName: '',
    courseName: '',
    specialization: '',
    semester: '',
    subjectName: '',
    examDate: null as Date | null,
    startTime: '',
    endTime: '',
    duration: '',
    isActive: true,
  });

  const scheduleExamList: ScheduleExam[] = [
    { id: 1, examType: 'Internal', examName: 'Mid-Term', courseName: 'B.Tech' },
    { id: 2, examType: 'External', examName: 'End-Term', courseName: 'MBA' },
    { id: 3, examType: 'Practical', examName: 'Lab Exam', courseName: 'BCA' },
    { id: 4, examType: 'Supplementary', examName: 'Re-Exam', courseName: 'B.Sc' },
  ];

  const dropdownOptions = [
    { label: 'Select', value: '' },
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
  ];

  const handleSave = () => {
    console.log('Schedule Exam Saved:', formData);
    setShowForm(false);
  };

  const handleClear = () => {
    setFormData({
      academicYear: '',
      examType: '',
      examName: '',
      courseName: '',
      specialization: '',
      semester: '',
      subjectName: '',
      examDate: null,
      startTime: '',
      endTime: '',
      duration: '',
      isActive: true,
    });
  };

  return (
    <PageLayout title="Schedule Exam">
      {/* ================= LIST ================= */}
      {!showForm && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Schedule Exam List</h2>
            <Button
              label="Add Schedule Exam"
              icon="pi pi-plus"
              onClick={() => setShowForm(true)}
            />
          </div>

          <DataTable
            value={scheduleExamList}
            paginator
            rows={10}
            className="p-datatable-sm"
            showGridlines
          >
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="examType" header="Exam Type Name" sortable />
            <Column field="examName" header="Exam Name" sortable />
            <Column field="courseName" header="Course Name" sortable />
          </DataTable>
        </>
      )}

      {/* ================= FORM ================= */}
      {showForm && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Add Schedule Exam</h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setShowForm(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Dropdown
              value={formData.academicYear}
              options={dropdownOptions}
              placeholder="Academic Year"
              className="w-full"
              onChange={(e) =>
                setFormData({ ...formData, academicYear: e.value })
              }
            />

            <Dropdown
              value={formData.examType}
              options={dropdownOptions}
              placeholder="Select Exam Type Name"
              className="w-full"
              onChange={(e) =>
                setFormData({ ...formData, examType: e.value })
              }
            />

            <Dropdown
              value={formData.examName}
              options={dropdownOptions}
              placeholder="Select Exam Name"
              className="w-full"
              onChange={(e) =>
                setFormData({ ...formData, examName: e.value })
              }
            />

            <Dropdown
              value={formData.courseName}
              options={dropdownOptions}
              placeholder="Select Course Name"
              className="w-full"
              onChange={(e) =>
                setFormData({ ...formData, courseName: e.value })
              }
            />

            <Dropdown
              value={formData.specialization}
              options={dropdownOptions}
              placeholder="Specialization"
              className="w-full"
              onChange={(e) =>
                setFormData({ ...formData, specialization: e.value })
              }
            />

            <Dropdown
              value={formData.semester}
              options={dropdownOptions}
              placeholder="Select Semester"
              className="w-full"
              onChange={(e) =>
                setFormData({ ...formData, semester: e.value })
              }
            />

            <Dropdown
              value={formData.subjectName}
              options={dropdownOptions}
              placeholder="Select Subject Name"
              className="w-full"
              onChange={(e) =>
                setFormData({ ...formData, subjectName: e.value })
              }
            />

            <Calendar
              value={formData.examDate}
              placeholder="Exam Date"
              className="w-full"
              dateFormat="dd/mm/yy"
              onChange={(e) =>
                setFormData({ ...formData, examDate: e.value as Date })
              }
            />

            <InputText
              type="time"
              value={formData.startTime}
              placeholder="Select Start Time"
              onChange={(e) =>
                setFormData({ ...formData, startTime: e.target.value })
              }
            />

            <InputText
              type="time"
              value={formData.endTime}
              placeholder="Select End Time"
              onChange={(e) =>
                setFormData({ ...formData, endTime: e.target.value })
              }
            />

            <InputText
              value={formData.duration}
              placeholder="Exam Duration Time"
              onChange={(e) =>
                setFormData({ ...formData, duration: e.target.value })
              }
            />

            <div className="flex items-center gap-2">
              <Checkbox
                checked={formData.isActive}
                onChange={(e) =>
                  setFormData({ ...formData, isActive: e.checked ?? false })
                }
              />
              <label>Status Active</label>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button label="Save" icon="pi pi-save" onClick={handleSave} />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
              onClick={handleClear}
            />
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default ScheduleExam;
