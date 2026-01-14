import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { DateInput, Textarea } from '../../../ui/shared/Input';

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

const departments = [{ label: 'Higher Education Department (HED)', value: 'HED' }];
const courseLevels = [
  { label: 'Under Graduate', value: 'UG' },
  { label: 'Post Graduate', value: 'PG' },
];
const courses = [
  { label: 'BCA', value: 'BCA' },
  { label: 'MCA', value: 'MCA' },
  { label: 'B.Tech', value: 'B.Tech' },
];
const faculties = [{ label: 'Biotechnology', value: 'Biotech' }];
const specializations = [{ label: "Computer Science", value: "CS" }];
const materialTypes = [{ label: 'PDF', value: 'PDF' }, { label: 'Video', value: 'Video' }];

const dummyMaterials: StudyMaterialRow[] = [
  { srNo: 1, department: 'HED', courseLevel: 'UG', course: 'BCA', faculty: 'Biotech', specialization: 'CS', materialType: 'PDF', title: 'Intro to IT', instructor: 'Dr. Sharma' },
];

const StudyMaterialMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    department: null as string | null,
    courseLevel: null as string | null,
    course: null as string | null,
    faculty: null as string | null,
    specialization: null as string | null,
    materialType: null as string | null,
    materialTitle: '',
    instructorName: '',
    dateOfUpload: null as Date | null,
    tagName: '',
    isActive: true,
    description: '',
  });

  const [rows] = useState<StudyMaterialRow[]>(dummyMaterials);

  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr No.', sortable: true, style: { width: '60px' } },
    { field: 'department', header: 'Department' },
    { field: 'courseLevel', header: 'Course Level' },
    { field: 'course', header: 'Course' },
    { field: 'faculty', header: 'Faculty' },
    { field: 'specialization', header: 'Specialization' },
    { field: 'materialType', header: 'Material Type' },
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
      specialization: null, materialType: null, materialTitle: '',
      instructorName: '', dateOfUpload: null, tagName: '', isActive: true, description: ''
    });
  };

  return (
    <PageLayout title="Add Study Materials">
      <form className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Dropdown
            label="Select Department"
            value={formData.department}
            options={departments}
            onChange={(e) => setFormData({ ...formData, department: e.value })}
            placeholder="Select"
          />

          <Dropdown
            label="Select Course Level"
            value={formData.courseLevel}
            options={courseLevels}
            onChange={(e) => setFormData({ ...formData, courseLevel: e.value })}
            placeholder="Select"
          />

          <Dropdown
            label="Select Course"
            required
            value={formData.course}
            options={courses}
            onChange={(e) => setFormData({ ...formData, course: e.value })}
            placeholder="Select"
          />

          <Dropdown
            label="Select Faculty"
            value={formData.faculty}
            options={faculties}
            onChange={(e) => setFormData({ ...formData, faculty: e.value })}
            placeholder="Select"
          />

          <Dropdown
            label="Select Specialization"
            value={formData.specialization}
            options={specializations}
            onChange={(e) => setFormData({ ...formData, specialization: e.value })}
            placeholder="Select"
          />

          <Dropdown
            label="Select Study Material Type"
            required
            value={formData.materialType}
            options={materialTypes}
            onChange={(e) => setFormData({ ...formData, materialType: e.value })}
            placeholder="Select"
          />

          <Input
            label="Enter Study Material Title"
            required
            value={formData.materialTitle}
            onChange={(e) => setFormData({ ...formData, materialTitle: e.target.value })}
            placeholder="Enter Study Material Title"
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Upload Study Material *</label>
            <div className="flex items-center w-full">
              <input 
                type="file" 
                className="w-full text-sm text-gray-500 border rounded-md p-2 cursor-pointer
                           file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 
                           file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 
                           hover:file:bg-indigo-100" 
              />
            </div>
          </div>

          <Input  
            label="Enter Instructor Name"
            required
            value={formData.instructorName}
            onChange={(e) => setFormData({ ...formData, instructorName: e.target.value })}
            placeholder="Enter Instructor Name"
          />

          <DateInput
            label="Enter Date of Upload"
            required
            value={formData.dateOfUpload}
            onChange={(e) => setFormData({ ...formData, dateOfUpload: e.value as Date })}
            dateFormat="dd/mm/yy"
            showIcon
          />

          <Input
            label="Enter Tag Name"
            required
            value={formData.tagName}
            onChange={(e) => setFormData({ ...formData, tagName: e.target.value })}
            placeholder="Enter Tag Name"
          />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Status *</label>
            <div className="flex items-center gap-2 mt-2">
              <Checkbox
                inputId="materialActive"
                checked={formData.isActive}
                onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
              />
              <label htmlFor="materialActive" className="text-sm font-semibold cursor-pointer">IsActive</label>
            </div>
          </div>
        </div>

        <div className="col-span-full">
          <Textarea 
            label="Enter Description"
            required
            rows={4}
            placeholder="Enter Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div className="flex gap-3 justify-center pt-4">
          <Button label="Save" className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-12" onClick={handleReset} />
        </div>
      </form>
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
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

export default StudyMaterialMaster;