import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table } from '../../../ui/shared';
import { Dialog } from 'primereact/dialog';

const QualificationAndExperience: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'qualification' | 'experience'>('qualification');
  const [showViewModal, setShowViewModal] = useState(false);

  const qualificationData = [
    {
      srNo: 1,
      academicYear: '2023-2024',
      university: 'RGPV University',
      degree: 'M.Tech',
      specialization: 'Computer Science',
      rollNo: '0101CS201001',
      totalMarks: '1000',
      obtainedMarks: '850',
    }
  ];

  const disabledInputStyle = { backgroundColor: '#F3F4F6', color: '#6B7280' };

  const renderQualification = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-gray-700 border-b pb-2">Academic Qualification Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
        <Dropdown label="Select Academic Year" required placeholder="Select" options={[]} />
        <Dropdown label="Select Degree" required placeholder="Select" options={[]} />
        <Input label="Roll Number" required placeholder="Enter Roll No." />
        <div className="flex items-end">
          <Button label="Add" icon="pi pi-plus" className="w-full" style={{ backgroundColor: '#6366F1' }} />
        </div>
      </div>

      <div className="mt-4">
        <Table 
          data={qualificationData}
          columns={[
            { field: 'srNo', header: 'Sr No.' },
            { field: 'academicYear', header: 'Academic Year' },
            { field: 'university', header: 'University' },
            { field: 'degree', header: 'Degree' },
            { field: 'obtainedMarks', header: 'Obtained Marks' },
            { field: 'reason', header: 'Reason' },
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
          ]}
        />
      </div>

      <div className="flex justify-center gap-3 pt-6">
        <Button label="Clear" className="p-button-danger p-button-outlined px-10" />
        <Button 
          label="Save & Next" 
          className="px-10" 
          style={{ backgroundColor: '#6366F1' }} 
          onClick={() => setCurrentPage('experience')} 
        />
      </div>
    </div>
  );
  const renderExperience = () => (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-gray-700 border-b pb-2">Experience Details</h3>
      <div className="p-10 text-center border-2 border-dashed rounded-lg bg-gray-50">
        <p className="text-gray-500 italic text-lg">Experience details ka content aapke dene ke baad yahan add hoga...</p>
        <Button 
          label="Back to Qualification" 
          className="p-button-text mt-4" 
          onClick={() => setCurrentPage('qualification')} 
        />
      </div>
    </div>
  );

  return (
    <PageLayout title="Guest Faculty Registration">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        
        {currentPage === 'qualification' ? renderQualification() : renderExperience()}

        <Dialog 
          header="Academic Qualification Details" 
          visible={showViewModal} 
          style={{ width: '70vw' }} 
          onHide={() => setShowViewModal(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-2">
            <Input label="University/Board" value="RGPV University" disabled style={disabledInputStyle} />
            <Input label="College Name" value="SATI Vidisha" disabled style={disabledInputStyle} />
            <Input label="Specialization/Subject" value="Computer Science" disabled style={disabledInputStyle} />
            <Input label="Total Marks" value="1000" disabled style={disabledInputStyle} />
            <Input label="Obtained Marks" value="850" disabled style={disabledInputStyle} />
            <Input label="Percentage (%)" value="85%" disabled style={disabledInputStyle} />
            <div className="col-span-1">
                <label className="text-sm font-bold block mb-2">Marking System</label>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2"><input type="radio" checked disabled /> Percentage</div>
                </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <Button label="Close" className="p-button-secondary" onClick={() => setShowViewModal(false)} />
          </div>
        </Dialog>

      </div>
    </PageLayout>
  );
};

export default QualificationAndExperience;