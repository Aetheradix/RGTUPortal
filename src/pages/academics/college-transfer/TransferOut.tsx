import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { DateInput, Textarea } from '../../../ui/shared/Input';

// --- Interface ---
interface TransferOutRow {
  sNo: number;
  studentId: string;
  studentName: string;
  currentCollegeName: string;
  currentCourseName: string;
  newCollegeName: string;
  newCourseName: string;
}

const dummyData: TransferOutRow[] = [
  {
    sNo: 1,
    studentId: 'STU00123',
    studentName: 'Ankit Verma',
    currentCollegeName: 'RGPV, Bhopal',
    currentCourseName: 'BCA',
    newCollegeName: 'IIT, Indore',
    newCourseName: 'MCA',
  },
  {
    sNo: 2,
    studentId: 'STU00456',
    studentName: 'Neha Sharma',
    currentCollegeName: 'IET, DAVV, Indore',
    currentCourseName: 'B.Tech',
    newCollegeName: 'MANIT, Bhopal',
    newCourseName: 'M.Tech',
  },
];

const AddTransferOut: React.FC = () => {
  const [formData, setFormData] = useState({
    studentId: '3265988754',
    studentName: 'Aman Verma',
    currentCollegeName: 'MANIT, Bhopal',
    currentCourseName: 'B.Tech',
    newCollegeName: 'IET-DAVV, Indore',
    newCourseName: null,
    transferRequestDate: null as Date | null,
    transferApprovalDate: null as Date | null,
    creditsAccepted: '',
    universityRemarks: '',
    transferStatus: null,
  });

  // Common Style for Disabled Input Boxes (Grey Background, Black Label)
  const disabledBoxStyle = {
    backgroundColor: '#F3F4F6', // gray-100
    color: '#4B5563', // gray-600
    cursor: 'not-allowed',
    border: '1px solid #E5E7EB'
  };

  const columns: TableColumn[] = [
    { field: 'sNo', header: 'S.No.', style: { width: '70px' } },
    { field: 'studentId', header: 'Student ID', sortable: true },
    { field: 'studentName', header: 'Student Name', sortable: true },
    { field: 'currentCollegeName', header: 'Current College' },
    { field: 'newCollegeName', header: 'New College' },
    { field: 'newCourseName', header: 'New Course' },
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
    <PageLayout title="Add Transfer Out">
      {/* FORM SECTION */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h2 className="text-lg font-bold text-gray-700">Student Transfer Out Details</h2>
          </div>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Disabled Fields (Grey Boxes) */}
            <Input label="Student ID" value={formData.studentId} disabled style={disabledBoxStyle} />
            <Input label="Student Name" value={formData.studentName} disabled style={disabledBoxStyle} />
            <Input label="Current College" value={formData.currentCollegeName} disabled style={disabledBoxStyle} />
            <Dropdown label="Current Course" value={formData.currentCourseName} options={[]} disabled placeholder="B.Tech" style={disabledBoxStyle} />
            
            <Dropdown label="New College Name" value={formData.newCollegeName} options={[]} disabled placeholder="IET-DAVV, Indore" style={disabledBoxStyle} />

            {/* Editable Fields (White Boxes) */}
            <Dropdown 
              label="New Course Name" 
              required 
              value={formData.newCourseName} 
              options={[{ label: 'M.Tech', value: 'MTech' }, { label: 'Ph.D', value: 'PhD' }]} 
              onChange={(e) => setFormData({...formData, newCourseName: e.value})} 
              placeholder="Select Course" 
            />

            <DateInput 
              label="Transfer Request Date" 
              required 
              value={formData.transferRequestDate} 
              onChange={(e) => setFormData({...formData, transferRequestDate: e.value as Date})} 
              showIcon
              placeholder="dd/mm/yyyy"
            />

            <DateInput 
              label="Transfer Approval Date" 
              required 
              value={formData.transferApprovalDate} 
              onChange={(e) => setFormData({...formData, transferApprovalDate: e.value as Date})} 
              showIcon
              placeholder="dd/mm/yyyy"
            />

            <Input 
              label="Credits Accepted" 
              required 
              value={formData.creditsAccepted} 
              onChange={(e) => setFormData({...formData, creditsAccepted: e.target.value})} 
              placeholder="Enter Credits" 
            />

            <Dropdown 
              label="Transfer Status" 
              required 
              value={formData.transferStatus} 
              options={[{ label: 'Approved', value: 'Approved' }, { label: 'Pending', value: 'Pending' }]} 
              onChange={(e) => setFormData({...formData, transferStatus: e.value})} 
              placeholder="Select Status" 
            />

            {/* View Document Group */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-700">View Documents</label>
               <div className="flex gap-2">
              <input type="text" value="transfer_letter.pdf" disabled className="text-xs p-2 rounded w-full border bg-gray-100 text-gray-500 italic" />
                             <Button icon="pi pi-eye" className="p-button-indigo p-button-sm" style={{ backgroundColor: '#6366F1' }} />
            </div>
           </div>

            <div className="md:col-span-2">
              <Textarea 
                label="University Remarks" 
                required
                value={formData.universityRemarks} 
                onChange={(e) => setFormData({...formData, universityRemarks: e.target.value})} 
                placeholder="Enter University Remarks"
              />
            </div>
          </div>

          <div className="flex gap-3 justify-center pt-4 border-t">
            <Button type="submit" label="Save " className="px-10" style={{ backgroundColor: '#6366F1', border: 'none' }} />
            <Button type="button" label="Clear "  className="p-button-danger p-button-outlined px-10" />
          </div>
        </form>
      </div>

      {/* TABLE SECTION */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex justify-between items-center p-4 bg-gray-50/50 border-b">
          <h2 className="text-lg font-bold text-gray-700">Pending Transfer Out Requests</h2>
          <Button label="Transfer Out List" icon="pi pi-list" className="p-button-sm" style={{ backgroundColor: '#6366F1', border: 'none' }} />
        </div>
        <Table columns={columns} data={dummyData} showPagination rowsPerPage={5} />
      </div>
    </PageLayout>
  );
};

export default AddTransferOut;