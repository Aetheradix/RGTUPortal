import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

interface ExperienceClaimRow {
  srNo: number;
  collegeAisheCode: string;
  facultyId: string;
  name: string;
  dob: string;
  academicYear: string;
  workingPeriod: string;
}

const RegisterExperienceClaim: React.FC = () => {
  // 1. States
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    academicYear: null as string | null,
    facultyId: '',
    dob: null as Date | null,
  });

  // 2. Mock Table Data
  const rows: ExperienceClaimRow[] = [
    {
      srNo: 1,
      collegeAisheCode: '1111222233',
      facultyId: '8839664805',
      name: 'Sunil Kumar',
      dob: '2002-09-15',
      academicYear: '2023-24',
      workingPeriod: '2023-24',
    },
    {
      srNo: 2,
      collegeAisheCode: '1111222233',
      facultyId: '8839664805',
      name: 'Anil Kumar',
      dob: '2002-09-15',
      academicYear: '2023-24',
      workingPeriod: '2023-24',
    }
  ];

  // 3. Table Columns
  const columns: TableColumn[] = [
    { field: 'srNo', header: 'Sr.No.', style: { width: '70px' } },
    { field: 'collegeAisheCode', header: 'College AISHE Code' },
    { field: 'facultyId', header: 'Guest Faculty ID/ Mobile Number' },
    { field: 'name', header: 'Name' },
    { field: 'dob', header: 'Date Of Birth' },
    { field: 'academicYear', header: 'Academic Year' },
    { field: 'workingPeriod', header: 'Working Period' },
    {
      header: 'Action',
      body: () => (
        <div className="flex gap-2">
          <Button 
            icon="pi pi-eye" 
            className="p-button-outlined p-button-sm" 
            style={{ color: '#6366F1', borderColor: '#6366F1' }} 
            onClick={() => setShowModal(true)}
          />
          <Button icon="pi pi-trash" className="p-button-outlined p-button-danger p-button-sm" />
        </div>
      ),
      field: '',
    },
  ];

  return (
    <PageLayout title="Register Experience Claim">
      {/* FILTER SECTION */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <Dropdown
            label="Select Academic Year" required
            placeholder="Select"
            value={formData.academicYear}
            options={[{ label: '2023-24', value: '2023-24' }]}
            onChange={(e) => setFormData({ ...formData, academicYear: e.value })}
          />
          <Input
            label="Guest Faculty ID/ Mobile Number" required
            placeholder="Guest Faculty ID/ Mobile Number"
            value={formData.facultyId}
            onChange={(e) => setFormData({ ...formData, facultyId: e.target.value })}
          />
          <DateInput
            label="Date Of Birth" required
            placeholder="dd/mm/yyyy"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.value as Date })}
          />
        </div>

        <div className="flex gap-3 justify-center mt-6">
          <Button label="View" className="px-10" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          <Button label="Clear" className="px-10" style={{ backgroundColor: '#FFDEDE', color: '#FF4D4D', border: 'none' }} />
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50">
          <h3 className="font-bold text-gray-700">Details</h3>
        </div>
        <Table columns={columns} data={rows} showPagination rowsPerPage={10} />
        
        {/* BOTTOM REQUEST BUTTON */}
        <div className="flex justify-center p-6 border-t border-gray-100">
           <Button 
            label="Request For Claim" 
            className="p-button-outlined" 
            style={{ color: '#82C91E', borderColor: '#82C91E', fontWeight: 'bold' }} 
          />
        </div>
      </div>

      {/* VERIFICATION MODAL (Image 3 Reference) */}
      <Dialog 
        visible={showModal} 
        onHide={() => setShowModal(false)} 
        header={null} 
       
        className="experience-modal"
      >
        <div className="p-4 border border-gray-800 rounded">
          {/* Header Box */}
          <div className="border-2 border-gray-800 p-4 mb-4 flex items-center gap-4">
            <div className="w-20 h-20 bg-gray-200">Logo</div> {/* Replace with actual image tag */}
            <div className="text-center flex-1">
              <h2 className="text-xl font-bold uppercase">Guest Faculty Verification Certificate</h2>
              <p className="font-semibold">(Fill in the experience certificate and store documents in the file)</p>
              <p className="font-bold text-lg">Session: 2023-24</p>
              <div className="flex justify-between text-sm mt-2 px-10">
                <span>Institution AISHE Code: 23350804904</span>
                <span>Institution Name: Devi Ahilya Vishwavidyalaya, Indore</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            <p className="font-bold underline italic text-gray-700">Guest Faculty Information (As available on the portal)</p>
            <div>
              <p className="font-bold text-lg">Note:</p>
              <ul className="list-disc ml-6">
                <li>This is not an experience certificate.</li>
                <li>Verification process must be completed before issuing the experience certificate.</li>
                <li>The number of working days displayed per month is taken from the education portal's remuneration schedule.</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-1 py-2">
              <p><strong>Guest Faculty ID / Mobile Number:</strong> 9638527410</p>
              <p><strong>Guest Faculty Name:</strong> Ramesh Lal</p>
            </div>

            <table className="w-full border-collapse border border-gray-300 text-center">
              <thead className="bg-gray-50 font-bold">
                <tr>
                  <th className="border p-2">S. No.</th>
                  <th className="border p-2">Position Held</th>
                  <th className="border p-2">Month</th>
                  <th className="border p-2">Days As Per Portal</th>
                  <th className="border p-2">Verified Days By Institution Head</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">1</td>
                  <td className="border p-2">Subject Expert</td>
                  <td className="border p-2">August</td>
                  <td className="border p-2">23</td>
                  <td className="border p-2">Not Yet Verified</td>
                </tr>
              </tbody>
            </table>

            <div className="text-center pt-6 italic font-semibold">
              <p>Verification by Institution Head</p>
              <p className="mt-4 text-xs font-normal">It is certified that the guest faculty's attendance days have been verified from the institution's records.</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center gap-4 mt-6">
          <Button label="Print" className="px-8" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          <Button label="Close" onClick={() => setShowModal(false)} className="p-button-outlined p-button-danger px-8" />
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default RegisterExperienceClaim;