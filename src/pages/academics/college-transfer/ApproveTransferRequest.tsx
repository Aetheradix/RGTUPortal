import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { DateInput, Textarea } from '../../../ui/shared/Input';

interface TransferRequestRow {
  srNo: number;
  requestId: string;
  studentId: string;
  enrollmentNumber: string;
  studentName: string;
  currentCollegeName: string;
  newCollegeName: string;
  currentCourseName: string;
}
const ApproveTransferRequest: React.FC = () => {
  const [formData, setFormData] = useState({
    requestId: '3265987854',
    enrollmentNumber: '1220234567',
    currentCollegeName: 'MANIT, Bhopal',
    newCollegeName: 'IET-DAVV, Indore',
    currentCourse: 'B.Tech',
    newCourseCourse: 'M.Tech',
    status: null as string | null,
    approvalDate: null as Date | null,
    approvedBy: '',
    notificationEmail: 'Yes',
    reasonForTransfer: 'Relocation to Home City',
    universityRemarks: '',
  });

  const [rows] = useState<TransferRequestRow[]>([
    {
      srNo: 1,
      requestId: 'REQ001',
      studentId: 'STU12345',
      enrollmentNumber: 'ENR20232001',
      studentName: 'Rahul Sharma',
      currentCollegeName: 'MANIT, Bhopal',
      newCollegeName: 'IET-DAVV, Indore',
      currentCourseName: 'B.Tech',
    },
    {
      srNo: 2,
      requestId: 'REQ002',
      studentId: 'STU56789',
      enrollmentNumber: 'ENR20232002',
      studentName: 'Priya Singh',
      currentCollegeName: 'GEC, Jabalpur',
      newCollegeName: 'SATI, Vidisha',
      currentCourseName: 'MCA',
    },
    {
      srNo: 3,
      requestId: 'REQ003',
      studentId: 'STU98765',
      enrollmentNumber: 'ENR20232003',
      studentName: 'Vikas Yadav',
      currentCollegeName: 'GEC, Rewa',
      newCollegeName: 'LNCT, Bhopal',
      currentCourseName: 'MBA',
    }
  ]);

  // Style for only the input box part
  const disabledInputStyle = {
    backgroundColor: '#F3F4F6', // gray-100
    color: '#6B7280', // gray-500
    cursor: 'not-allowed',
    border: '1px solid #E5E7EB'
  };

  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr No.', style: { width: '60px' } },
    { field: 'requestId', header: 'Request ID' },
    { field: 'enrollmentNumber', header: 'Enrollment No.' },
    { field: 'studentName', header: 'Student Name' },
    { field: 'currentCollegeName', header: 'Current College' },
    { field: 'newCollegeName', header: 'New College' },
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
    <PageLayout title="Approve Transfer Request">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h2 className="text-lg font-bold text-gray-700">Add Transfer Request Details</h2>
          </div>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Input 
                label="Request ID" 
                value={formData.requestId} 
                disabled 
                style={disabledInputStyle} 
            />
            <Input 
                label="Enrollment Number" 
                value={formData.enrollmentNumber} 
                disabled 
                style={disabledInputStyle} 
            />
            <Dropdown 
                label="Current College Name" 
                value={formData.currentCollegeName} 
                options={[]} 
                disabled 
                placeholder="MANIT, Bhopal" 
                style={disabledInputStyle} 
            />
            <Dropdown 
                label="New College Name" 
                value={formData.newCollegeName} 
                options={[]} 
                disabled 
                placeholder="IET-DAVV, Indore" 
                style={disabledInputStyle} 
            />
            <Dropdown 
                label="Current Course" 
                value={formData.currentCourse} 
                options={[]} 
                disabled 
                placeholder="B.Tech" 
                style={disabledInputStyle} 
            />
            <Dropdown 
                label="New Course Course" 
                value={formData.newCourseCourse} 
                options={[]} 
                disabled 
                placeholder="M.Tech" 
                style={disabledInputStyle} 
            />

            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-gray-700">Supporting Documents *</label>
              <div className="flex gap-2">
                <input type="text" value="transfer_letter.pdf" disabled className="text-xs p-2 rounded w-full border bg-gray-100 text-gray-500 italic" />
                <Button icon="pi pi-eye" className="p-button-indigo p-button-sm" style={{ backgroundColor: '#6366F1' }} />
              </div>
            </div>
            <Dropdown 
              label="Select Status" 
              required
              value={formData.status} 
              options={[{ label: 'Approved', value: 'Approved' }, { label: 'Rejected', value: 'Rejected' }]} 
              onChange={(e) => setFormData({ ...formData, status: e.value })} 
              placeholder="Select" 
            />
            
            <DateInput 
              label="Approval Date" 
              required 
              value={formData.approvalDate} 
              onChange={(e) => setFormData({ ...formData, approvalDate: e.value as Date })} 
              showIcon
              placeholder="dd/mm/yyyy"
            />
            
            <Input 
              label="Enter Approved By" 
              required
              value={formData.approvedBy} 
              onChange={(e) => setFormData({ ...formData, approvedBy: e.target.value })} 
              placeholder="Enter Approved By" 
            />
            
            <Dropdown 
              label="Notification Email to Student" 
              value={formData.notificationEmail} 
              options={[{ label: 'Yes', value: 'Yes' }, { label: 'No', value: 'No' }]} 
              onChange={(e) => setFormData({ ...formData, notificationEmail: e.value })} 
               style={disabledInputStyle} 
                 disabled 
            />

            <div className="md:col-span-2">
              <label className="text-sm font-medium text-gray-700 block mb-1">Reason for Transfer *</label>
              <textarea 
                className="w-full border p-2 rounded text-sm bg-gray-100 text-gray-500 cursor-not-allowed" 
                value={formData.reasonForTransfer} 
                disabled 
              />
            </div>

            <div className="md:col-span-2">
              <Textarea 
                label="Enter University Remarks" 
                required
                value={formData.universityRemarks} 
                onChange={(e) => setFormData({ ...formData, universityRemarks: e.target.value })} 
                placeholder="Enter University Remarks"
              />
            </div>
          </div>

          <div className="flex gap-3 justify-center pt-4">
            <Button label="Save" className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
            <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-12" />
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 bg-gray-50/50 border-b">
           <h2 className="text-lg font-bold text-gray-700">Recent Transfer Requests</h2>
        </div>
        <Table 
          columns={columns} 
          data={rows} 
          showPagination 
          rowsPerPage={5} 
        />
      </div>
    </PageLayout>
  );
};

export default ApproveTransferRequest;