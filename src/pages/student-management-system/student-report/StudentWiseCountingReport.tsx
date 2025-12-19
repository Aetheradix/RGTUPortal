import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown, Table } from '../../../ui/shared';

const StudentWiseCountingReport: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  const academicYears = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" }
  ];

  const divisions = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Gwalior", value: "Gwalior" }
  ];

  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Shivpuri", value: "Shivpuri" }
  ];

  const colleges = [
    { label: "Maulana Azad National Institute of Technology (MANIT)", value: "MANIT" },
    { label: "Institute of Engineering and Technology (IET-DAVV)", value: "IET" },
    { label: "Government Engineering College", value: "GEC" }
  ];

  const semesters = [
    { label: "1st", value: "1st" },
    { label: "2nd", value: "2nd" },
    { label: "3rd", value: "3rd" }
  ];

  const [countingData] = useState([
    { 
      id: 1,
      srNo: 1, 
      academicYear: '2024-25',
      division: 'Bhopal',
      district: 'Bhopal',
      collegeName: 'Maulana Azad National Institute of Technology (MANIT), Bhopal',
      semester: '1st',
      totalStudents: 10,
      studentsPassed: 5,
      studentsFail: 3,
      releaseTC: 2
    },
    { 
      id: 2,
      srNo: 2, 
      academicYear: '2024-25',
      division: 'Indore',
      district: 'Indore',
      collegeName: 'Institute of Engineering and Technology (IET-DAVV), Indore',
      semester: '2nd',
      totalStudents: 10,
      studentsPassed: 5,
      studentsFail: 4,
      releaseTC: 1
    },
    { 
      id: 3,
      srNo: 3, 
      academicYear: '2024-25',
      division: 'Gwalior',
      district: 'Shivpuri',
      collegeName: 'Government Engineering College, Jabalpur',
      semester: '3rd',
      totalStudents: 10,
      studentsPassed: 8,
      studentsFail: 2,
      releaseTC: 0
    }
  ]);

  const modalListData = [
    { srNo: 1, semester: '1st', studentName: 'Aman Yadav', collegeName: 'Maulana Azad National Institute of Technology (MANIT), Bhopal', status: 'Pass' },
    { srNo: 2, semester: '2nd', studentName: 'Pooja Patel', collegeName: 'Institute of Engineering and Technology (IET-DAVV), Indore', status: 'Pass' },
    { srNo: 3, semester: '3rd', studentName: 'Shivendra Singh', collegeName: 'Government Engineering College, Jabalpur', status: 'Pass' },
    { srNo: 4, semester: '4th', studentName: 'Rohit Sharma', collegeName: 'Samrat Ashok Technological Institute (SATI), Vidisha', status: 'Pass' },
    { srNo: 5, semester: '5th', studentName: 'Alok Verma', collegeName: 'Government Engineering College, Rewa', status: 'Pass' },
  ];

  const rowExpansionTemplate = (data: any) => (
    <div className="py-3 px-12 bg-gray-50 border-b text-sm font-bold space-y-3">
      <div className="text-cyan-600">
        Total Number of Students Fail <span className="ml-1 text-gray-700">{data.studentsFail}</span>
      </div>
      <div className="text-gray-800">
        Total Number of Students Release Transfer Certificate <span className="ml-1 text-cyan-600">{data.releaseTC}</span>
      </div>
    </div>
  );

  const columns: any[] = [
    { expander: true, style: { width: '3rem' } },
    { field: 'srNo', header: 'S.No.', style: { width: '60px' } },
    { field: 'academicYear', header: 'Academic Year' },
    { field: 'division', header: 'Division' },
    { field: 'district', header: 'District' },
    { field: 'collegeName', header: 'College Name' },
    { field: 'semester', header: 'Semester' },
    { field: 'totalStudents', header: 'Total Number of Student' },
    { 
      field: 'studentsPassed', 
      header: 'Total Number of Students Passed',
      body: (rowData: any) => (
        <span 
          className="text-cyan-500 font-bold cursor-pointer hover:underline"
          onClick={() => setShowModal(true)}
        >
          {rowData.studentsPassed}
        </span>
      )
    },
  ];

  const modalColumns: any[] = [
    { field: 'srNo', header: 'Sr. No.', style: { width: '70px' } },
    { field: 'semester', header: 'Semester' },
    { field: 'studentName', header: 'Student Name' },
    { field: 'collegeName', header: 'College Name' },
    { field: 'status', header: 'Status' },
  ];

  return (
    <PageLayout title="Student Wise Counting Report">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-4">
          <Dropdown label="Select Academic Year" required options={academicYears} placeholder="Select" />
          <Dropdown label="Select Division" required options={divisions} placeholder="Select" />
          <Dropdown label="Select District Name" required options={districts} placeholder="Select" />
          <Dropdown label="Select College Name" required options={colleges} placeholder="Select" />
        </div>
        <div className="w-full md:w-1/4">
          <Dropdown label="Select Semester" required options={semesters} placeholder="Select" />
        </div>

        <div className="flex gap-3 justify-center pt-8 border-t mt-6">
          <Button label="Search" className="px-12" style={{ backgroundColor: '#4361EE', border: 'none' }} />
          <Button 
            type="button" label="Clear" 
            className="px-12"
            style={{ backgroundColor: '#FFE4E6', color: '#EF4444', border: 'none' }}
          />
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="p-2 mb-4">
          <h2 className="text-lg font-bold text-gray-700">Student Wise Counting Report List</h2>
        </div>
        
        <Table 
          columns={columns} 
          data={countingData} 
          showPagination 
          rowsPerPage={10}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="id"
        />
      </div>

      <Dialog 
        header="Student Wise Counting Report" 
        visible={showModal} 
        style={{ width: '75vw' }} 
        onHide={() => setShowModal(false)}
        draggable={false}
        resizable={false}
        footer={
          <div className="flex justify-end">
            <Button 
              label="Close" 
              onClick={() => setShowModal(false)} 
              className="px-6"
              style={{ backgroundColor: '#6D28D9', border: 'none' }} 
            />
          </div>
        }
      >
        <div className="mt-2">
          <Table 
            columns={modalColumns} 
            data={modalListData} 
            showPagination 
            rowsPerPage={5} 
          />
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default StudentWiseCountingReport;