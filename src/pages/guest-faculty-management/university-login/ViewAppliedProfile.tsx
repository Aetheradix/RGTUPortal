import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Dropdown } from '../../../ui/shared';


interface ApplicantProfile {
  id: string;
  srNo: number;
  applicationId: string;
  postId: string;
  applicantName: string;
  gender: string;
  emailAddress: string;
  highestQualification: string;

  universityName?: string;
  subject?: string;
  applicationDeadline?: string;
}

const ViewAppliedProfiles: React.FC = () => {
  const [setExpandedRows] = useState<any>(null);
  const [filterData, setFilterData] = useState({
    academicYear: null,
    college: null
  });


  const [applicants] = useState<ApplicantProfile[]>([
    {
      id: '1',
      srNo: 1,
      applicationId: '633',
      postId: '2',
      applicantName: 'Vikas Upadhyay',
      gender: 'Male',
      emailAddress: 'Vikas123@gmail.com',
      highestQualification: "Master's in Computer Science",
      universityName: 'Devi Ahilya Vishwavidhyalaya, Indore',
      subject: 'Computer Science',
      applicationDeadline: '2024-12-31'
    },
    {
      id: '2',
      srNo: 2,
      applicationId: '123',
      postId: '4',
      applicantName: 'Arvind Sharma',
      gender: 'Male',
      emailAddress: 'arvind123@gmail.com',
      highestQualification: "Master's in Computer Science",
      universityName: 'Rajiv Gandhi Proudyogiki Vishvavidhyalaya',
      subject: 'Information Technology',
      applicationDeadline: '2024-12-25'
    },
    {
      id: '3',
      srNo: 3,
      applicationId: '153',
      postId: '3',
      applicantName: 'Munawwar Ali',
      gender: 'Male',
      emailAddress: 'Munnarwar123@gmail.com',
      highestQualification: "Master's in Computer Science",
      universityName: 'Devi Ahilya Vishwavidhyalaya',
      subject: 'Data Science',
      applicationDeadline: '2025-01-15'
    },
    {
      id: '4',
      srNo: 4,
      applicationId: '144',
      postId: '7',
      applicantName: 'Manoj Patidar',
      gender: 'Male',
      emailAddress: 'Manojpatidar@123@gmail.com',
      highestQualification: "Master's in Computer Science",
      universityName: 'School of Economics',
      subject: 'Economics',
      applicationDeadline: '2024-12-30'
    },
    {
      id: '5',
      srNo: 5,
      applicationId: '124',
      postId: '8',
      applicantName: 'Arjun Kushwah',
      gender: 'Male',
      emailAddress: 'Arjun123@gmail.com',
      highestQualification: "Master's in Computer Science",
      universityName: 'School of Statistics',
      subject: 'Statistics',
      applicationDeadline: '2024-12-20'
    }
  ]);


  const rowExpansionTemplate = (data: ApplicantProfile) => {
    return (
      <div className="p-4 bg-gray-50 border-y border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <p><span className="font-bold text-gray-700">University:</span> {data.universityName}</p>
            <p><span className="font-bold text-gray-700">Subject:</span> {data.subject}</p>
          </div>
          <div className="space-y-2">
            <p><span className="font-bold text-gray-700">Deadline:</span> {data.applicationDeadline}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="font-bold text-gray-700">Action:</span>
              <Button label="Apply" className="p-button-sm px-4 py-1" style={{ backgroundColor: '#6366F1', border: 'none' }} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="View Applied Profile All Colleges">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Dropdown
            label="Select Academic Year" required
            placeholder="Select"
            value={filterData.academicYear}
            options={[{ label: '2024-25', value: '2024-25' }]}
            onChange={(e) => setFilterData({ ...filterData, academicYear: e.value })}
          />
          <Dropdown
            label="Select College" required
            placeholder="Select"
            value={filterData.college}
            options={[{ label: 'College A', value: 'A' }]}
            onChange={(e) => setFilterData({ ...filterData, college: e.value })}
          />
        </div>
        <div className="flex gap-3 justify-center">
          <Button label="Search" className="px-10" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          <Button label="Clear" className="px-10" style={{ backgroundColor: '#FEE2E2', color: '#EF4444', border: 'none' }} />
        </div>
      </div>


      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <div className="flex items-center gap-2 text-sm">
            Show <select className="border rounded p-1"><option>10</option></select> entries
          </div>
          <div className="flex items-center gap-2 text-sm">
            Search: <input type="text" className="border rounded p-1 outline-none" />
          </div>
        </div>

        <DataTable
          value={applicants}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
          className="text-sm"
          responsiveLayout="scroll"
        >

          <Column field="srNo" header="Sr No." />
          <Column field="applicationId" header="Application ID" />
          <Column field="postId" header="Post ID" />
          <Column field="applicantName" header="Applicant Name" />
          <Column field="gender" header="Gender" />
          <Column field="emailAddress" header="Email Address" />
          <Column field="highestQualification" header="Highest Qualification" />
          <Column
            header="Resume/CV"
            body={() => <Button label="View" className="p-button-sm px-4" style={{ backgroundColor: '#6366F1', border: 'none' }} />}
          />
        </DataTable>

        <div className="flex justify-between items-center p-4 border-t border-gray-100 text-sm">
          <div>Showing 1 to 5 of 5 entries</div>
          <div className="flex gap-1">
            <Button label="Previous" className="p-button-secondary p-button-text text-gray-400" disabled />
            <Button label="1" className="p-button-sm px-3" style={{ backgroundColor: '#6366F1', border: 'none' }} />
            <Button label="Next" className="p-button-secondary p-button-text text-gray-400" disabled />
          </div>
        </div>
      </div>

    </PageLayout>
  );
};

export default ViewAppliedProfiles;
