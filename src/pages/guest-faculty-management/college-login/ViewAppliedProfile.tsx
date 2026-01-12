import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Table, type TableColumn } from '../../../ui/shared';
import { Button } from 'primereact/button';

interface ApplicantRow {
  srNo: number;
  applicationId: number;
  postId: number;
  applicantName: string;
  gender: string;
  email: string;
  qualification: string;
}

const ApplicantList: React.FC = () => {

  const [rows] = useState<ApplicantRow[]>([
    {
      srNo: 1,
      applicationId: 633,
      postId: 2,
      applicantName: 'Vikas Upadhyay',
      gender: 'Male',
      email: 'Vikas123@gmail.com',
      qualification: "Master's in Computer Science",
    },
    {
      srNo: 2,
      applicationId: 123,
      postId: 4,
      applicantName: 'Arvind Sharma',
      gender: 'Male',
      email: 'arvind123@gmail.com',
      qualification: "Master's in Computer Science",
    },
    {
      srNo: 3,
      applicationId: 153,
      postId: 3,
      applicantName: 'Munawwar Ali',
      gender: 'Male',
      email: 'Munawwar123@gmail.com',
      qualification: "Master's in Computer Science",
    },
    {
      srNo: 4,
      applicationId: 144,
      postId: 7,
      applicantName: 'Manoj Patidar',
      gender: 'Male',
      email: 'Manojpatidar@123@gmail.com',
      qualification: "Master's in Computer Science",
    },
    {
      srNo: 5,
      applicationId: 124,
      postId: 8,
      applicantName: 'Arjun Kushwah',
      gender: 'Male',
      email: 'Arjun123@gmail.com',
      qualification: "Master's in Computer Science",
    },
  ]);

  const columns: TableColumn[] = [
    { header: 'Sr No.', field: 'srNo', style: { width: '70px' } },
    { header: 'Application ID', field: 'applicationId' },
    { header: 'Post ID', field: 'postId' },
    { header: 'Applicant Name', field: 'applicantName' },
    { header: 'Gender', field: 'gender' },
    { header: 'Email Address', field: 'email' },
    { header: 'Highest Qualification', field: 'qualification' },
    {
      header: 'Resume / CV',
      field: '',
      body: () => (
        <Button
          label="View"
          className="px-6"
          style={{ backgroundColor: '#6366F1', border: 'none' }}
        />
      ),
    },
  ];

  return (
    <PageLayout title="Applicant List">

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <Table
          columns={columns}
          data={rows}
          showPagination
          rowsPerPage={10}
        />
      </div>

    </PageLayout>
  );
};

export default ApplicantList;
