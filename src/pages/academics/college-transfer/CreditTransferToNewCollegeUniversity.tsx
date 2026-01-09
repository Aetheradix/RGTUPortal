import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { Textarea } from '../../../ui/shared/Input';

interface CreditTransferRow {
  sNo: number;
  studentId: string;
  studentName: string;
  currentCollegeName: string;
  currentCourseName: string;
  newCollegeName: string;
}

const dummyData: CreditTransferRow[] = [
  {
    sNo: 1,
    studentId: 'STU12345',
    studentName: 'Aditi Sharma',
    currentCollegeName: 'MANIT, Bhopal',
    currentCourseName: 'BCA',
    newCollegeName: 'IET-DAVV, Indore',
  },
  {
    sNo: 2,
    studentId: 'STU67890',
    studentName: 'Rahul Yadav',
    currentCollegeName: 'GEC, Jabalpur',
    currentCourseName: 'BCA',
    newCollegeName: 'OIST, Bhopal',
  },
  {
    sNo: 3,
    studentId: 'STU11223',
    studentName: 'Pooja Singh',
    currentCollegeName: 'Acropolis, Indore',
    currentCourseName: 'BCA',
    newCollegeName: 'RGPV, Bhopal',
  },
];

const AddCreditTransfer: React.FC = () => {
  const [formData, setFormData] = useState({
    studentId: 'Aman Verma',
    studentName: 'Aman Verma',
    currentCollegeName: 'Maulana Azad National Institute of Technology (MANIT), Bhopal',
    newCollegeName: 'Institute of Engineering and Technology (IET-DAVV), Indore',
    currentCourse: 'B.Tech',
    newCourse: 'M.Tech',
    totalCreditsEarned: '',
    creditsAccepted: '',
    cgpaPrevious: '',
    cgpaNew: '',
    verificationRemarks: '',
  });

  const disabledBoxStyle = {
    backgroundColor: '#F3F4F6', 
    color: '#4B5563',
    cursor: 'not-allowed',
    border: '1px solid #E5E7EB'
  };

  const columns: TableColumn[] = [
    { field: 'sNo', header: 'S.No.', style: { width: '70px' } },
    { field: 'studentId', header: 'Student ID', sortable: true },
    { field: 'studentName', header: 'Student Name*', sortable: true },
    { field: 'currentCollegeName', header: 'Current College Name' },
    { field: 'currentCourseName', header: 'Current Course Name' },
    { field: 'newCollegeName', header: 'New College Name' },
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
    <PageLayout title="Add Credit Transfer To New College">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h2 className="text-lg font-bold text-gray-700">Add Credit Transfer Details</h2>
         
        </div>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Input label="Student ID" value={formData.studentId} disabled style={disabledBoxStyle} required/>
            <Input label="Student Name" value={formData.studentName} disabled style={disabledBoxStyle} required/>
            <Input label="Current College Name" value={formData.currentCollegeName} disabled style={disabledBoxStyle} required />
            <Input label="New College Name" value={formData.newCollegeName} disabled style={disabledBoxStyle} required />
            
            <Dropdown label="Current Course Name" required value={formData.currentCourse} options={[]} disabled placeholder="B.Tech" style={disabledBoxStyle} />
            <Dropdown label="New Course Name" required  value={formData.newCourse} options={[]} disabled placeholder="M.Tech" style={disabledBoxStyle} />
            
            <Input 
              label="Enter Total Credits Earned in Previous College" 
              required 
              value={formData.totalCreditsEarned} 
              onChange={(e) => setFormData({...formData, totalCreditsEarned: e.target.value})} 
              placeholder="Enter Total Credits" 
            />

            <Input 
              label="Enter Credits Accepted by New College" 
              required 
              value={formData.creditsAccepted} 
              onChange={(e) => setFormData({...formData, creditsAccepted: e.target.value})} 
              placeholder="Enter Credits Accepted" 
            />

            <Input 
              label="Enter CGPA/Percentage in Previous College" 
              required 
              value={formData.cgpaPrevious} 
              onChange={(e) => setFormData({...formData, cgpaPrevious: e.target.value})} 
              placeholder="Enter CGPA" 
            />

            <Input 
              label="Enter Updated CGPA in New College" 
              required 
              value={formData.cgpaNew} 
              onChange={(e) => setFormData({...formData, cgpaNew: e.target.value})} 
              placeholder="Enter Updated CGPA" 
            />

            <div className="md:col-span-2">
              <Textarea 
                label="Enter Verification Remarks" 
                required
                value={formData.verificationRemarks} 
                onChange={(e) => setFormData({...formData, verificationRemarks: e.target.value})} 
                placeholder="Enter Verification Remarks"
                rows={2}
              />
            </div>
          </div>

          <div className="flex gap-3 justify-center pt-4 border-t">
            <Button label="Save" className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
            <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-12" style={{ color: '#F87171' }} />
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 bg-gray-50/50 border-b flex justify-between items-center">
              </div>
        
        <Table 
          columns={columns} 
          data={dummyData} 
          showPagination 
          rowsPerPage={10} 
        />
      </div>
    </PageLayout>
  );
};

export default AddCreditTransfer;