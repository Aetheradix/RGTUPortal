import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table, Input } from '../../../ui/shared';

const StudentSummaryReport: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<any>(null);

  // --- Dropdown Values (Jo aapne maangi thi) ---
  const academicYears = [
    { label: "2023-2024", value: "2023-2024" },
    { label: "2024-2025", value: "2024-2025" }
  ];

  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Gwalior", value: "Gwalior" }
  ];

  const blocks = [
    { label: "Phanda", value: "Phanda" },
    { label: "Dabra", value: "Dabra" },
    { label: "Mhow", value: "Mhow" }
  ];

  const villages = [
    { label: "Arwaliya", value: "Arwaliya" },
    { label: "NayaGaon", value: "NayaGaon" }
  ];

  // --- Filter State ---
  const [filters, setFilters] = useState({
    academicYear: null,
    districtName: null,
    blockName: null,
    villageName: null,
    enrollmentNo: '',
  });

  // --- 2 Rows with Expansion Data ---
  const [reportData] = useState([
    { 
      srNo: 1, 
      academicYear: '2024-2025',
      districtName: 'Bhopal',
      blockName: 'Phanda',
      villageName: 'Arwaliya',
      studentName: 'Amit Sharma',
      samagraIdEnrollmentNo: '123456789/0115CA231028',
      gender: 'Male',
      dob: '2004-06-15',
      category: 'OBC',
      fatherName: 'Ramesh Sharma',
      motherName: 'Sunita Sharma',
      mobileNo: '9876543210',
      bpl: 'Yes',
      // Expandable Data
      physicalDisability: 'No',
      currentInstituteCode: 'MPTech123',
      currentId: 'ID001',
      accountNo: '1234567890',
      ifscCode: 'SBIN001'
    },
    { 
      srNo: 2, 
      academicYear: '2024-2025',
      districtName: 'Indore',
      blockName: 'Mhow',
      villageName: 'NayaGaon',
      studentName: 'Priya Verma',
      samagraIdEnrollmentNo: '987654321/0115CA231045',
      gender: 'Female',
      dob: '2005-08-22',
      category: 'General',
      fatherName: 'Suresh Verma',
      motherName: 'Anjali Verma',
      mobileNo: '9123456789',
      bpl: 'No',
      // Expandable Data
      physicalDisability: 'No',
      currentInstituteCode: 'MPTech456',
      currentId: 'ID002',
      accountNo: '0987654321',
      ifscCode: 'HDFC002'
    }
  ]);

  // --- Exact Row Expansion Layout (From Image) ---
  const rowExpansionTemplate = (data: any) => {
    return (
      <div className="py-4 px-12 bg-gray-50 border-b space-y-2 text-sm">
        <div><strong>Physical Disability:</strong> {data.physicalDisability}</div>
        <div><strong>Current Institute Code:</strong> {data.currentInstituteCode}</div>
        <div><strong>Current id:</strong> {data.currentId}</div>
        <div><strong>Account No.</strong> {data.accountNo}</div>
        <div><strong>IFSC Code:</strong> {data.ifscCode}</div>
      </div>
    );
  };

  // --- Columns Fix (Error hatane ke liye any[] use kiya h) ---
  const columns: any[] = [
    { expander: true, style: { width: '3rem' } },
    { field: 'srNo', header: 'Sr.No.', style: { width: '60px' } },
    { field: 'academicYear', header: 'Academic Year' },
    { field: 'districtName', header: 'District Name' },
    { field: 'blockName', header: 'Block Name' },
    { field: 'villageName', header: 'Village Name' },
    { field: 'studentName', header: 'Student Name' },
    { field: 'samagraIdEnrollmentNo', header: 'Samagra ID / Enrollment No' },
    { field: 'gender', header: 'Gender' },
    { field: 'dob', header: 'Date of Birth' },
    { field: 'category', header: 'Category' },
    { field: 'fatherName', header: "Father's Name" },
    { field: 'motherName', header: "Mother's Name" },
    { field: 'mobileNo', header: 'Mobile No' },
    { field: 'bpl', header: 'BPL' },
  ];

  return (
    <PageLayout title="Student Summary Report">
      {/* FILTER SECTION - Exact Theme */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Dropdown label="Select Academic Year" required options={academicYears} value={filters.academicYear} />
          <Dropdown label="Select District Name" required options={districts} value={filters.districtName} />
          <Dropdown label="Select Block Name" required options={blocks} value={filters.blockName} />
          <Dropdown label="Select Village Name" required options={villages} value={filters.villageName} />
          <Input label="Enter Enrollment No." required placeholder="Enter Enrollment No." value={filters.enrollmentNo} />
        </div>

        <div className="flex gap-3 justify-center pt-8 border-t mt-6">
          {/* Blue Search Button */}
          <Button label="Search" className="px-12" style={{ backgroundColor: '#4361EE', border: 'none' }} />
          {/* Pinkish-Red Clear Button */}
          <Button 
            type="button" label="Clear" 
            className="px-12"
            style={{ backgroundColor: '#FFE4E6', color: '#EF4444', border: 'none' }}
            onClick={() => setFilters({ academicYear: null, districtName: null, blockName: null, villageName: null, enrollmentNo: '' })}
          />
        </div>
      </div>

      {/* TABLE SECTION */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="p-2 mb-4">
           <h2 className="text-lg font-bold text-gray-700">Student Summary Report List</h2>
        </div>
        
        <Table 
          columns={columns} 
          data={reportData} 
          showPagination 
          rowsPerPage={10}
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          dataKey="samagraIdEnrollmentNo"
        />
      </div>
    </PageLayout>
  );
};

export default StudentSummaryReport;