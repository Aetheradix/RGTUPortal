import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface ResearchDepartment {
  id: number;
  departmentName: string;
  subject: string;
  supervisor: string;
  totalPhDAwarded: number;
}

const researchDepartments: ResearchDepartment[] = [
  { id: 1, departmentName: 'Computer Science and Engineering', subject: 'Artificial Intelligence', supervisor: 'Dr. Rajesh Kumar', totalPhDAwarded: 15 },
  { id: 2, departmentName: 'Mechanical Engineering', subject: 'Thermal Engineering', supervisor: 'Dr. Priya Sharma', totalPhDAwarded: 12 },
  { id: 3, departmentName: 'Electrical Engineering', subject: 'Power Systems', supervisor: 'Dr. Anil Verma', totalPhDAwarded: 10 },
  { id: 4, departmentName: 'Civil Engineering', subject: 'Structural Engineering', supervisor: 'Dr. Meena Iyer', totalPhDAwarded: 8 },
  { id: 5, departmentName: 'Electronics and Communication Engineering', subject: 'Signal Processing', supervisor: 'Dr. Ramesh Gupta', totalPhDAwarded: 9 },
  { id: 6, departmentName: 'Chemical Engineering', subject: 'Process Design', supervisor: 'Dr. Kavita Singh', totalPhDAwarded: 6 },
  { id: 7, departmentName: 'Information Technology', subject: 'Cybersecurity', supervisor: 'Dr. Sanjay Patil', totalPhDAwarded: 7 },
];

const ResearchDepartmentPage: React.FC = () => {
  return (
    <PageLayout title="Research Department">
      <Card>
        <h3 className="font-semibold mb-3">Research Department List</h3>
        <DataTable value={researchDepartments} paginator rows={10} showGridlines>
          <Column field="departmentName" header="Name of Department" sortable />
          <Column field="subject" header="Subject" sortable/>
          <Column field="supervisor" header="Supervisor Name" sortable/>
          <Column field="totalPhDAwarded" header="Total PhD Awarded" sortable />
        </DataTable>
      </Card>
    </PageLayout>
  );
};

export default ResearchDepartmentPage;
