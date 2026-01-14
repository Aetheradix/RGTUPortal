import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { Checkbox } from 'primereact/checkbox';

interface ViewStudyMaterialRow {
  sNo: number;
  studyLevel: string;
  courseName: string;
  subjectName: string;
  instructorName: string;
  assignedBy: string;
  materialType: string;
  accessType: string;
  publicationDate: string;
}

const studyLevelOptions = [
  { label: 'Under Graduate (UG)', value: 'UG' },
  { label: 'Post Graduate (PG)', value: 'PG' },
  { label: 'Diploma', value: 'DIP' },
  { label: 'Certification', value: 'CERT' },
  { label: 'Doctorate (Ph.D)', value: 'PHD' },
  { label: 'School Education', value: 'SCHOOL' },
];

const courseNameOptions = [
  { label: 'B.Tech - CSE', value: 'BTECH_CSE' },
  { label: 'B.Tech - ME', value: 'BTECH_ME' },
  { label: 'MCA - Cloud', value: 'MCA_CLOUD' },
  { label: 'BCA - General', value: 'BCA' },
  { label: 'MBA - Finance', value: 'MBA_FIN' },
  { label: 'B.Sc - Biotech', value: 'BSC_BIO' },
  { label: 'M.Com', value: 'MCOM' },
];

const subjectOptions = [
  { label: 'Data Structures & Algorithms', value: 'DSA' },
  { label: 'Operating Systems', value: 'OS' },
  { label: 'Database Management (DBMS)', value: 'DBMS' },
  { label: 'Machine Learning', value: 'ML' },
  { label: 'Software Engineering', value: 'SE' },
  { label: 'Discrete Mathematics', value: 'DM' },
  { label: 'Computer Networks', value: 'CN' },
];

const materialTypeOptions = [
  { label: 'PDF Document', value: 'PDF' },
  { label: 'Video Lecture', value: 'VIDEO' },
  { label: 'PowerPoint (PPT)', value: 'PPT' },
  { label: 'Reference Book', value: 'BOOK' },
  { label: 'Handwritten Notes', value: 'NOTES' },
  { label: 'Lab Manual', value: 'LAB' },
];

const accessTypeOptions = [
  { label: 'Public (All Students)', value: 'Public' },
  { label: 'Restricted (Batch Only)', value: 'Restricted' },
  { label: 'Private (Draft)', value: 'Private' },
  { label: 'Premium Access', value: 'Premium' },
  { label: 'Faculty Only', value: 'Faculty' },
];

const dummyData: ViewStudyMaterialRow[] = [
  {
    sNo: 1,
    studyLevel: 'Under Graduate',
    courseName: 'B.Tech',
    subjectName: 'Data Structures',
    instructorName: 'Dr. Smith',
    assignedBy: 'Admin',
    materialType: 'PDF',
    accessType: 'Public',
    publicationDate: '2024-01-12',
  },
  {
    sNo: 2,
    studyLevel: 'Post Graduate',
    courseName: 'M.Tech',
    subjectName: 'Artificial Intelligence',
    instructorName: 'Prof. John Doe',
    assignedBy: 'Faculty',
    materialType: 'Video',
    accessType: 'Restricted',
    publicationDate: '2023-11-05',
  },
];

const ViewStudyMaterials: React.FC = () => {
  const [formData, setFormData] = useState({
    studyLevel: null as string | null,
    courseName: null as string | null,
    subjectName: null as string | null,
    materialType: null as string | null,
    accessType: null as string | null,
    isActive: true, 
  });

  const [rows] = useState<ViewStudyMaterialRow[]>(dummyData);

  const columns: TableColumn[] = [
    { field: 'sNo', header: 'S.No', sortable: true, style: { width: '60px' } },
    { field: 'studyLevel', header: 'Study Level' },
    { field: 'courseName', header: 'Course' },
    { field: 'subjectName', header: 'Subject' },
    { field: 'instructorName', header: 'Instructor' },
    { field: 'assignedBy', header: 'Assigned By' },
    { field: 'materialType', header: 'Type' },
    { field: 'accessType', header: 'Access' },
    { field: 'publicationDate', header: 'Published On' },
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

  const handleClear = () => {
    setFormData({
      studyLevel: null, courseName: null, subjectName: null,
      materialType: null, accessType: null, isActive: true,
    });
  };

  return (
    <PageLayout title="View Study Materials">
      <form className="space-y-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <Dropdown
            label="Select Study Level"
            value={formData.studyLevel}
            options={studyLevelOptions}
            onChange={(e) => setFormData({ ...formData, studyLevel: e.value })}
            placeholder="Select "
          />
          <Dropdown
            label="Select Course Name"
            value={formData.courseName}
            options={courseNameOptions}
            onChange={(e) => setFormData({ ...formData, courseName: e.value })}
            placeholder="Select "
          />
          <Dropdown
            label="Select Subject Name"
            value={formData.subjectName}
            options={subjectOptions} 
            onChange={(e) => setFormData({ ...formData, subjectName: e.value })}
            placeholder="Select "
          />
          <Dropdown
            label="Select Material Type"
            value={formData.materialType}
            options={materialTypeOptions}
            onChange={(e) => setFormData({ ...formData, materialType: e.value })}
            placeholder="Select "
          />
          
          <Dropdown
            label="Select Access Type"
            value={formData.accessType}
            options={accessTypeOptions}
            onChange={(e) => setFormData({ ...formData, accessType: e.value })}
            placeholder="Select "
          />

          <div className="flex flex-col pt-1">
            <label className="text-sm font-medium text-gray-700 mb-2">Status</label>
            <div className="flex items-center gap-2 mt-1">
              <Checkbox 
                  inputId="activeStatus" 
                  checked={formData.isActive} 
                  onChange={e => setFormData({...formData, isActive: e.checked ?? false})} 
              />
              <label htmlFor="activeStatus" className="text-sm font-semibold cursor-pointer">IsActive</label>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-center border-t pt-6">
          <Button 
            label="Search"  
            className="px-10" 
            style={{ backgroundColor: '#6366F1', border: 'none' }} 
          />
          <Button
            type="button"
            label="Clear"
            className="p-button-danger p-button-outlined px-10"
            onClick={handleClear}
          />
        </div>
      </form>
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex justify-between items-center p-4 bg-gray-50/50 border-b">
          <h2 className="text-lg font-semibold text-gray-700">Study Material List</h2>
          <div className="flex gap-2">
             <Button icon="pi pi-file-excel" className="p-button-success p-button-sm p-button-outlined" label="Export" />
             <Button icon="pi pi-print" className="p-button-secondary p-button-sm p-button-outlined" />
          </div>
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

export default ViewStudyMaterials;