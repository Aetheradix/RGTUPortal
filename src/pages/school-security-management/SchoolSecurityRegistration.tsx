import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown } from '../../ui/shared';
import { DateInput } from '../../ui/shared/Input';

const SchoolSecurityRegistration: React.FC = () => {
  const [formData] = useState({
    visitorName: '',
    mobileNo: '',
    visitorType: null,
    purpose: null,
    whomToMeet: '',
    department: null,
    vehicleType: 'None',
    vehicleNo: '',
    idProofType: null,
    idProofNo: '',
    noOfPersons: '1',
    entryTime: new Date()
  });

  const visitorTypeOptions = [
    { label: 'Parent', value: 'Parent' },
    { label: 'Vendor', value: 'Vendor' },
    { label: 'Guest / Relative', value: 'Guest' },
    { label: 'Alumni', value: 'Alumni' },
    { label: 'Service Provider', value: 'Service' }
  ];

  const purposeOptions = [
    { label: 'Meeting with Teacher', value: 'TeacherMeeting' },
    { label: 'Fee Deposit', value: 'FeeDeposit' },
    { label: 'Admission Inquiry', value: 'Admission' },
    { label: 'Official Work', value: 'Official' },
    { label: 'Document Submission', value: 'Documents' },
    { label: 'Material Delivery', value: 'Delivery' }
  ];

  const idOptions = [
    { label: 'Aadhar Card', value: 'Aadhar' },
    { label: 'Driving License', value: 'DL' },
    { label: 'Voter ID', value: 'Voter' },
    { label: 'Other', value: 'Other' }
  ];

  return (
    <PageLayout title="School Security Management">
      <div className="flex justify-between items-center mb-6">
        <div className=" text-white px-4 py-2 rounded-full text-sm font-bold ">
         
        </div>
        <span className="text-blue-700 font-bold italic">Academic Year: 2025-26</span>
      </div>

      <div className=" rounded-xl p-8 bg-white relative shadow-sm">
        <div className="absolute -top-3 left-6 bg-white px-3 border-orange-200  rounded text-blue-900 font-bold text-sm">
          New Visitor Registration
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          <Input label="Visitor Name" required placeholder="Full Name" value={formData.visitorName} />
          <Input label="Mobile Number" required placeholder="10-digit number" value={formData.mobileNo} />
          <Dropdown label="Visitor Type" required options={visitorTypeOptions} placeholder="Select Type" />
          <Dropdown label="Purpose" required options={purposeOptions} placeholder="Select Purpose" />

          <Input label="Whom to Meet" required placeholder="Person Name / Designation" />
          <Dropdown label="Department" options={[{label: 'Academic', value: 'A'}, {label: 'Admin', value: 'B'}, {label: 'Accounts', value: 'C'}]} placeholder="Select Dept" />
          <Dropdown label="ID Proof Type" options={idOptions} placeholder="Select ID Type" />
          <Input label="ID Proof Number" placeholder="Enter ID Number" />

          <Dropdown label="Vehicle Type" options={[{label: '2 Wheeler', value: '2W'}, {label: '4 Wheeler', value: '4W'}, {label: 'None', value: 'None'}]} />
          <Input label="Vehicle Number" placeholder="e.g. MP04-AB-1234" />
          <Input label="No. of Persons" placeholder="1" />
          <DateInput label="Entry Date & Time" showTime value={formData.entryTime} />
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300">
           <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">Visitor Photo (Webcam)</label>
              <div className="h-32 w-full bg-gray-200 rounded flex items-center justify-center border border-gray-300">
                 <Button icon="pi pi-camera" label="Capture Photo" className="p-button-sm p-button-secondary" />
              </div>
           </div>
           <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700">Material Description (If any)</label>
              <textarea className="h-32 border rounded p-2 text-sm outline-none focus:ring-1 focus:ring-orange-400" placeholder="List items being carried..."></textarea>
           </div>
        </div>

        <div className="flex gap-4 mt-8 pt-4 border-t border-gray-100">
          <Button label="Save & Generate Pass"  className="px-10" style={{ backgroundColor: '#10B981', border: 'none' }} />
          <Button label="Clear"  className="px-10 p-button-danger p-button-outlined" />
        </div>
        
        <p className="text-red-500 text-xs font-bold mt-4 italic">
          * Security Note: Verify ID proof before allowing entry into the campus.
        </p>
      </div>
    </PageLayout>
  );
};

export default SchoolSecurityRegistration;