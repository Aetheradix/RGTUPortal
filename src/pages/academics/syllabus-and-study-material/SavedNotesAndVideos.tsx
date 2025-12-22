import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { Textarea } from '../../../ui/shared/Input';

// --- Interfaces ---
interface StudyMaterialRow {
  srNo: number;
  department: string;
  courseLevel: string;
  course: string;
  faculty: string;
  specialization: string;
  materialType: string;
  title: string;
  instructor: string;
}

// --- Dynamic Dropdown Options ---
const departmentOptions = [
  { label: 'Higher Education Department (HED)', value: 'HED' },
  { label: 'Technical Education Department (TED)', value: 'TED' },
  { label: 'Medical Education Department', value: 'MED' },
  { label: 'Agricultural Research Department', value: 'ARD' },
  { label: 'Vocational Training Board', value: 'VTB' },
  { label: 'Tribal Affairs Department', value: 'TAD' },
  { label: 'Department of Science & Technology', value: 'DST' },
];

const courseLevelOptions = [
  { label: 'Certification', value: 'CERT' },
  { label: 'Diploma', value: 'DIP' },
  { label: 'Under Graduate (UG)', value: 'UG' },
  { label: 'Post Graduate (PG)', value: 'PG' },
  { label: 'Doctorate (Ph.D)', value: 'PHD' },
  { label: 'Post-Doc', value: 'POSTDOC' },
  { label: 'Professional Development', value: 'PRO' },
];

const courseOptions = [
  { label: 'B.Tech (Engineering)', value: 'BTECH' },
  { label: 'M.Tech (Technology)', value: 'MTECH' },
  { label: 'BCA (Computer App)', value: 'BCA' },
  { label: 'MCA (Computer App)', value: 'MCA' },
  { label: 'B.Sc (Information Tech)', value: 'BSC_IT' },
  { label: 'M.Sc (Data Science)', value: 'MSC_DS' },
  { label: 'MBA (Management)', value: 'MBA' },
];

const facultyOptions = [
  { label: 'Faculty of Engineering', value: 'FOE' },
  { label: 'Faculty of Computer Science', value: 'FCS' },
  { label: 'Faculty of Management', value: 'FOM' },
  { label: 'Faculty of Arts & Humanities', value: 'FOA' },
  { label: 'Faculty of Pure Sciences', value: 'FPS' },
  { label: 'Faculty of Law', value: 'FOL' },
  { label: 'Faculty of Commerce', value: 'FOCO' },
];

const specializationOptions = [
  { label: 'Artificial Intelligence', value: 'AI' },
  { label: 'Data Structures & Algorithms', value: 'DSA' },
  { label: 'Cloud Computing', value: 'CLOUD' },
  { label: 'Cyber Security', value: 'CYBER' },
  { label: 'Internet of Things (IoT)', value: 'IOT' },
  { label: 'Blockchain Technology', value: 'BLOCK' },
  { label: 'Machine Learning', value: 'ML' },
];

const materialTypeOptions = [
  { label: 'PDF Document', value: 'PDF' },
  { label: 'Video Lecture (MP4)', value: 'VIDEO' },
  { label: 'PowerPoint Presentation', value: 'PPT' },
  { label: 'Reference E-Book', value: 'BOOK' },
  { label: 'Interactive Quiz', value: 'QUIZ' },
  { label: 'Assignment Brief', value: 'ASSIGN' },
  { label: 'Recorded Webinar', value: 'WEBINAR' },
];

const dummyData: StudyMaterialRow[] = [
  {
    srNo: 1,
    department: 'Higher Education Department (HED)',
    courseLevel: 'Under Graduate',
    course: 'B.Tech',
    faculty: 'Engineering',
    specialization: 'Artificial Intelligence',
    materialType: 'PDF',
    title: 'Neural Networks Basics',
    instructor: 'Dr. A. Sharma',
  },
];

const SavedNotesAndVideos: React.FC = () => {
  const [formData, setFormData] = useState({
    department: null as string | null,
    courseLevel: null as string | null,
    course: null as string | null,
    faculty: null as string | null,
    specialization: null as string | null,
    materialType: null as string | null,
    videoTitle: '',
    videoFile: null as File | null,
    notesFile: null as File | null,
    tag: '',
    description: '',
    isActive: true,
  });

  const [rows] = useState<StudyMaterialRow[]>(dummyData);

  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr No.', sortable: true, style: { width: '60px' } },
    { field: 'department', header: 'Department' },
    { field: 'courseLevel', header: 'Level' },
    { field: 'course', header: 'Course' },
    { field: 'faculty', header: 'Faculty' },
    { field: 'specialization', header: 'Specialization' },
    { field: 'materialType', header: 'Type' },
    { field: 'title', header: 'Title' },
    { field: 'instructor', header: 'Instructor' },
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

  const handleReset = () => {
    setFormData({
      department: null, courseLevel: null, course: null, faculty: null,
      specialization: null, materialType: null, videoTitle: '',
      videoFile: null, notesFile: null, tag: '', description: '', isActive: true,
    });
  };

  return (
    <PageLayout title="Add Notes And Video Content">
      <form className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Dropdown
            label="Select Department"
            value={formData.department}
            options={departmentOptions}
            onChange={(e) => setFormData({ ...formData, department: e.value })}
            placeholder="Select "
          />

          <Dropdown
            label="Select Course Level"
            value={formData.courseLevel}
            options={courseLevelOptions}
            onChange={(e) => setFormData({ ...formData, courseLevel: e.value })}
            placeholder="Select "
          />

          <Dropdown
            label="Select Course"
            value={formData.course}
            options={courseOptions} 
            onChange={(e) => setFormData({ ...formData, course: e.value })}
            placeholder="Select "
          />

          <Dropdown
            label="Select Faculty"
            value={formData.faculty}
            options={facultyOptions}
            onChange={(e) => setFormData({ ...formData, faculty: e.value })}
            placeholder="Select "
          />

          <Dropdown
            label="Select Specialization"
            value={formData.specialization}
            options={specializationOptions}
            onChange={(e) => setFormData({ ...formData, specialization: e.value })}
            placeholder="Select "
          />

          <Dropdown
            label="Select Study Material Type"
            required
            value={formData.materialType}
            options={materialTypeOptions}
            onChange={(e) => setFormData({ ...formData, materialType: e.value })}
            placeholder="Select "
          />

          <Input
            label="Enter Video Title"
            required
            value={formData.videoTitle}
            onChange={(e) => setFormData({ ...formData, videoTitle: e.target.value })}
            placeholder="Enter Title"
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Upload Video *</label>
            <input 
              type="file" 
              className="w-full text-sm text-gray-500 border rounded-md p-2 cursor-pointer
                         file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 
                         file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 
                         hover:file:bg-indigo-100" 
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Upload Notes *</label>
            <input 
              type="file" 
              className="w-full text-sm text-gray-500 border rounded-md p-2 cursor-pointer
                         file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 
                         file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 
                         hover:file:bg-indigo-100" 
            />
          </div>

          <Input
            label="Enter Tag"
            required
            value={formData.tag}
            onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Status *</label>
            <div className="flex items-center gap-2 mt-2">
              <Checkbox
                inputId="isActive"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
              />
              <label htmlFor="isActive" className="text-sm font-semibold cursor-pointer">IsActive</label>
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <Textarea 
            label="Enter Description"
            required
            rows={3}
            placeholder="Enter additional details about the material..."
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div className="flex gap-3 justify-center pt-4">
          <Button label="Save " className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-12" onClick={handleReset} />
        </div>
      </form>

      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-50 bg-gray-50/50">
          <h2 className="text-lg font-semibold text-gray-700">Study Material List</h2>
          <Button label="Export PDF" icon="pi pi-file-pdf" className="p-button-sm p-button-outlined" style={{ color: '#6366F1' }} />
        </div>
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

export default SavedNotesAndVideos;