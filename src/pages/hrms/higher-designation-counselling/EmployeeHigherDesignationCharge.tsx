import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from 'primereact/button';
import type { DropdownOption } from '@/ui/shared/Dropdown';
import Input from '@/ui/shared/Input';
import Dropdown from '@/ui/shared/Dropdown';

const EmployeeHigherDesignationCharge: React.FC = () => {
  const [showCurrentInfo, setShowCurrentInfo] = useState(false);
  const [showHigherOffice, setShowHigherOffice] = useState(false);

  const [employeeId, setEmployeeId] = useState('');
  const [oisCode, setOisCode] = useState('');

  const universityOptions: DropdownOption[] = [
    { label: 'Barkatullah University', value: 'BU' },
  ];

  const collegeOptions: DropdownOption[] = [
    { label: 'Govt. College of Arts and Commerce (BU101)', value: 'BU101' },
  ];

  const divisionOptions: DropdownOption[] = [
    { label: 'Bhopal', value: 'Bhopal' },
  ];

  const districtOptions: DropdownOption[] = [
    { label: 'Bhopal', value: 'Bhopal' },
  ];

  const blockOptions: DropdownOption[] = [
    { label: 'Barod-5869685754', value: 'Barod' },
  ];

  const postCodeOptions: DropdownOption[] = [
    { label: 'Select', value: '' },
  ];

  const handleClearAll = () => {
    setEmployeeId('');
    setOisCode('');
    setShowCurrentInfo(false);
    setShowHigherOffice(false);
  };

  return (
    <PageLayout title="Employee Higher Designation Charge">
      <div className="space-y-6">
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Employee Higher Designation Charge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Input
              label="Employee Unique ID"
              required
              placeholder="Enter Employee Unique ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
            />
          </div>
          <div className="flex gap-4 mt-8 justify-center md:justify-start">
            <Button
              label="Search"
              icon="pi pi-search"
              className="bg-blue-700 px-8 shadow-md"
              onClick={() => setShowCurrentInfo(true)}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              severity="danger"
              outlined
              className="px-8"
              onClick={handleClearAll}
            />
          </div>
        </div>

        {showCurrentInfo && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <h3 className="text-lg font-bold text-gray-700 mb-6 flex items-center gap-2">
              <i className="pi pi-user text-blue-600"></i> Current Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Input label="Employee Name" required value="AU4336-Ashok Patidar"  />
              <Input label="Department" required value="Department of Education"  />
              <Input label="Designation Type" required value="Teaching"  />
              <Input label="Designation" required value="Prathmik Shikshak" />
              <div className="md:col-span-2">
                <Input label="Current Office" required value="Govt MS UNDRAI - 2451259865" />
              </div>
            </div>
          </div>
        )}

        {showCurrentInfo && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <h3 className="text-lg font-bold text-gray-700 mb-6 border-b pb-4">OIS Data</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Input
                label="OIS Code"
                required
                placeholder="Enter OIS Code"
                value={oisCode}
                onChange={(e) => setOisCode(e.target.value)}
              />
            </div>
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <Button
                label="Search OIS"
                icon="pi pi-search"
                className="bg-blue-700 px-8"
                onClick={() => setShowHigherOffice(true)}
              />
              <Button
                label="Clear OIS"
                icon="pi pi-refresh"
                severity="danger"
                outlined
                className="px-8"
                onClick={() => {
                  setOisCode('');
                  setShowHigherOffice(false);
                }}
              />
            </div>
          </div>
        )}

        {showHigherOffice && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <h3 className="text-lg font-bold text-gray-700 mb-6 border-b pb-4 flex items-center gap-2">
              <i className="pi pi-map-marker text-green-600"></i> Higher Office Charge Location
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Dropdown label="University" required options={universityOptions} value="BU" />
              <Dropdown label="College" required options={collegeOptions} value="BU101" />
              <Dropdown label="Division" required options={divisionOptions} value="Bhopal" />
              <Dropdown label="District" required options={districtOptions} value="Bhopal" />
              <Dropdown label="Block" required options={blockOptions} value="Barod" />
              <Dropdown label="Post Code" required options={postCodeOptions} placeholder="Select" />
            </div>
            <div className="flex gap-4 mt-10 justify-center border-t pt-6">
              <Button 
                label="Save Higher Charge" 
                icon="pi pi-check" 
                className="bg-green-700 px-10 shadow-md" 
              />
              <Button 
                label="Cancel" 
                icon="pi pi-times" 
                severity="danger" 
                outlined 
                className="px-10" 
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default EmployeeHigherDesignationCharge;