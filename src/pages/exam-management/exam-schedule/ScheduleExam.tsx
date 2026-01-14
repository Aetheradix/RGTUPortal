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

  // ✅ ONLY UPDATED PART
  const dropdownOptions = [
    { label: 'Select', value: '' },

    // Academic Year
    { label: '2022-23', value: '2022-23' },
    { label: '2023-24', value: '2023-24' },
    { label: '2024-25', value: '2024-25' },

    // Exam Types
    { label: 'Internal', value: 'Internal' },
    { label: 'External', value: 'External' },
    { label: 'Practical', value: 'Practical' },
    { label: 'Supplementary', value: 'Supplementary' },

    // Exams
    { label: 'Mid-Term', value: 'Mid-Term' },
    { label: 'End-Term', value: 'End-Term' },
    { label: 'Lab Exam', value: 'Lab Exam' },
    { label: 'Re-Exam', value: 'Re-Exam' },

    // Courses
    { label: 'B.Tech', value: 'B.Tech' },
    { label: 'MBA', value: 'MBA' },
    { label: 'BCA', value: 'BCA' },
    { label: 'B.Sc', value: 'B.Sc' },

    // Specialization
    { label: 'Computer Science', value: 'Computer Science' },
    { label: 'AI & ML', value: 'AI & ML' },
    { label: 'Data Science', value: 'Data Science' },

    // Semester
    { label: '1st Semester', value: '1st Semester' },
    { label: '2nd Semester', value: '2nd Semester' },
    { label: '3rd Semester', value: '3rd Semester' },
    { label: '4th Semester', value: '4th Semester' },

    // Subjects
    { label: 'Mathematics', value: 'Mathematics' },
    { label: 'Programming', value: 'Programming' },
    { label: 'DBMS', value: 'DBMS' },
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
      {!showForm && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Schedule Exam List</h2>
            <Button label="Add Schedule Exam" icon="pi pi-plus" onClick={() => setShowForm(true)} />
          </div>

          <DataTable value={scheduleExamList} paginator rows={10} className="p-datatable-sm" showGridlines>
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} />
            <Column field="examType" header="Exam Type Name" sortable />
            <Column field="examName" header="Exam Name" sortable />
            <Column field="courseName" header="Course Name" sortable />
          </DataTable>
        </>
      )}

      {/* ================= FORM ================= */}
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
      {/* Academic Year */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Academic Year <span className="text-red-500">*</span>
        </label>
        <Dropdown
          value={formData.academicYear}
          options={dropdownOptions}
          placeholder="Select Academic Year"
          className="w-full"
          onChange={(e) =>
            setFormData({ ...formData, academicYear: e.value })
          }
        />
      </div>

      {/* Exam Type */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Exam Type <span className="text-red-500">*</span>
        </label>
        <Dropdown
          value={formData.examType}
          options={dropdownOptions}
          placeholder="Select Exam Type"
          className="w-full"
          onChange={(e) =>
            setFormData({ ...formData, examType: e.value })
          }
        />
      </div>

      {/* Exam Name */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Exam Name <span className="text-red-500">*</span>
        </label>
        <Dropdown
          value={formData.examName}
          options={dropdownOptions}
          placeholder="Select Exam Name"
          className="w-full"
          onChange={(e) =>
            setFormData({ ...formData, examName: e.value })
          }
        />
      </div>

      {/* Course Name */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Course Name <span className="text-red-500">*</span>
        </label>
        <Dropdown
          value={formData.courseName}
          options={dropdownOptions}
          placeholder="Select Course Name"
          className="w-full"
          onChange={(e) =>
            setFormData({ ...formData, courseName: e.value })
          }
        />
      </div>

      {/* Specialization */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Specialization
        </label>
        <Dropdown
          value={formData.specialization}
          options={dropdownOptions}
          placeholder="Select Specialization"
          className="w-full"
          onChange={(e) =>
            setFormData({ ...formData, specialization: e.value })
          }
        />
      </div>

      {/* Semester */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Semester
        </label>
        <Dropdown
          value={formData.semester}
          options={dropdownOptions}
          placeholder="Select Semester"
          className="w-full"
          onChange={(e) =>
            setFormData({ ...formData, semester: e.value })
          }
        />
      </div>

      {/* Subject Name */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Subject Name
        </label>
        <Dropdown
          value={formData.subjectName}
          options={dropdownOptions}
          placeholder="Select Subject Name"
          className="w-full"
          onChange={(e) =>
            setFormData({ ...formData, subjectName: e.value })
          }
        />
      </div>

      {/* Exam Date */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Exam Date <span className="text-red-500">*</span>
        </label>
        <Calendar
          value={formData.examDate}
          placeholder="Select Exam Date"
          className="w-full"
          dateFormat="dd/mm/yy"
          onChange={(e) =>
            setFormData({ ...formData, examDate: e.value as Date })
          }
        />
      </div>

      {/* Start Time */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Start Time
        </label>
        <InputText
          type="time"
          value={formData.startTime}
          placeholder="Select Start Time"
          className="w-full"
          onChange={(e) =>
            setFormData({ ...formData, startTime: e.target.value })
          }
        />
      </div>

      {/* End Time */}
      <div>
        <label className="block text-sm font-medium mb-2">
          End Time
        </label>
        <InputText
          type="time"
          value={formData.endTime}
          placeholder="Select End Time"
          className="w-full"
          onChange={(e) =>
            setFormData({ ...formData, endTime: e.target.value })
          }
        />
      </div>

      {/* Duration */}
      <div>
        <label className="block text-sm font-medium mb-2">
          Exam Duration
        </label>
        <InputText
          value={formData.duration}
          placeholder="Enter Exam Duration (e.g. 2 Hours)"
          className="w-full"
          onChange={(e) =>
            setFormData({ ...formData, duration: e.target.value })
          }
        />
      </div>

      {/* Status */}
      <div className="flex items-center gap-2 mt-6">
        <Checkbox
          checked={formData.isActive}
          onChange={(e) =>
            setFormData({ ...formData, isActive: e.checked ?? false })
          }
        />
        <label className="text-sm font-medium">
          Active Status
        </label>
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
