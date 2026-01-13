import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Staff {
  name: string;
  designation: string;
}

interface Department {
  id: number;
  departmentName: string;
  hod: string;
  staff: Staff[];
}

const departmentData: Department[] = [
  {
    id: 1,
    departmentName: 'Computer Science',
    hod: 'AKANKSHA SHRIVASTAVA',
    staff: [
      { name: 'Arvind Verma', designation: 'Assistant Professor' },
      { name: 'Mukesh Srivastav', designation: 'Assistant Professor' },
    ],
  },
  {
    id: 2,
    departmentName: 'Electronics',
    hod: 'Shubhangi Shukla',
    staff: [
      { name: 'Jayvardhan', designation: 'Assistant Professor' },
      { name: 'Mukesh Srivastav', designation: 'Assistant Professor' },
    ],
  },
  {
    id: 3,
    departmentName: 'Data Science',
    hod: 'Nitin Patel',
    staff: [
      { name: 'Arjun Sharma', designation: 'Assistant Professor' },
      { name: 'Mukesh Patidar', designation: 'Assistant Professor' },
    ],
  },
  {
    id: 4,
    departmentName: 'Mechanical',
    hod: 'Vikram Rathore',
    staff: [
      { name: 'Vikramaditya Agnihotri', designation: 'Assistant Professor' },
      { name: 'Mukesh Patidar', designation: 'Assistant Professor' },
    ],
  },
];

const DepartmentsPage: React.FC = () => {
  const staffBodyTemplate = (row: Department) => {
    return (
      <div>
        {row.staff.map((s, index) => (
          <div key={index}>
            {s.designation} - {s.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <PageLayout title="Departments">
      <Card>
        <h3 className="font-semibold mb-3">Department Wise Staff Detail</h3>

        <DataTable value={departmentData} paginator rows={10} showGridlines>
          <Column field="departmentName" header="Name of Department" sortable/>
          <Column field="hod" header="Head of Department" sortable/>
          <Column header="Staff Detail" body={staffBodyTemplate} sortable />
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default DepartmentsPage;
