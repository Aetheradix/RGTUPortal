import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "primereact/button";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";

type TransferItem = {
  employeeId: string;
  employeeName: string;
  currentInstitute: string;
  currentDept: string;
  newInstitute: string;
  newDept: string;
};

const MOCK_DATA: TransferItem[] = [
  {
    employeeId: 'EMP001',
    employeeName: 'Rajesh Kumar',
    currentInstitute: 'MIN123 - Ministry of Education',
    currentDept: 'Executive - Policy Analyst',
    newInstitute: 'MIN456 - Ministry of HRD',
    newDept: 'Executive - Senior Policy Advisor',
  },
  {
    employeeId: 'EMP002',
    employeeName: 'Priya Sharma',
    currentInstitute: 'EDU789 - Delhi University',
    currentDept: 'Teacher - Computer Science',
    newInstitute: 'EDU987 - University of Mumbai',
    newDept: 'Teacher - Data Science',
  },
];

export default function GenerateTransfer() {
  const [showList, setShowList] = useState(false);

  const designationTypeOptions = [
    { label: 'Executive', value: 'executive' },
    { label: 'Teacher', value: 'teacher' },
  ];

  const designationOptions = [
    { label: 'Policy Analyst', value: 'policy_analyst' },
    { label: 'Computer Science', value: 'cs' },
  ];

  const districtOptions = [
    { label: 'Bhopal', value: 'bhopal' },
    { label: 'Indore', value: 'indore' },
  ];

  const blockOptions = [
    { label: 'Block 1', value: 'block1' },
    { label: 'Block 2', value: 'block2' },
  ];

  const columns = [
    {
      field: 'action',
      header: 'Action',
      body: () => <input type="checkbox" className="w-4 h-4 cursor-pointer" />,
    },
    { 
      field: 'employee', 
      header: 'Employee ID - Name',
      body: (rowData: TransferItem) => `${rowData.employeeId} - ${rowData.employeeName}` 
    },
    { field: 'currentInstitute', header: 'Current Institution Code/Name' },
    { field: 'currentDept', header: 'Current Department/Program' },
    { field: 'newInstitute', header: 'New Institution Code/Name' },
    { field: 'newDept', header: 'New Department/Program' }
  ];

  return (
    <PageLayout title="Generate Transfer">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Generate Transfer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Dropdown
              label="Designation Type"
              required
              options={designationTypeOptions}
              placeholder="Select"
            />
            <Dropdown
              label="Designation"
              required
              options={designationOptions}
              placeholder="Select"
            />
            <Dropdown
              label="District Name"
              required
              options={districtOptions}
              placeholder="Select"
            />
            <Dropdown
              label="Block Name"
              required
              options={blockOptions}
              placeholder="Select"
            />
          </div>

          <div className="flex justify-center gap-4">
            <Button
              label="Search"
              icon="pi pi-search"
              className="bg-blue-700 px-8 shadow-md"
              onClick={() => setShowList(true)}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              severity="danger"
              outlined
              className="px-8"
              onClick={() => setShowList(false)}
            />
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <Table
              title="Transfer Details List"
              columns={columns}
              data={MOCK_DATA}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
}