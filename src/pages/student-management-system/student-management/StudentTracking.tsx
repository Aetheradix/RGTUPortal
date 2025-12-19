import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Input } from '../../../ui/shared';

interface AcademicRecord {
  srNo: number;
  academicYear: string;
  district: string;
  block: string;
  collegeName: string;
  semester: string;
  percentage: string;
}

const StudentTracking: React.FC = () => {
  const [enrollmentNo, setEnrollmentNo] = useState('');
  const [showResults, setShowResults] = useState(false);

  // --- Mock Data ---
  const academicHistory: AcademicRecord[] = [
    { srNo: 1, academicYear: '2023-24', district: 'Bhopal', block: 'Gandhi Nagar', collegeName: 'SG123-Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal', semester: '1st Semester', percentage: '85.45' },
    { srNo: 2, academicYear: '2023-24', district: 'Bhopal', block: 'Gandhi Nagar', collegeName: 'SG123-Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal', semester: '2nd Semester', percentage: '75.00' },
    { srNo: 3, academicYear: '2023-24', district: 'Bhopal', block: 'Gandhi Nagar', collegeName: 'SG123-Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal', semester: '5th Semester', percentage: '75.60' },
    { srNo: 4, academicYear: '2023-24', district: 'Bhopal', block: 'Gandhi Nagar', collegeName: 'SG123-Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal', semester: '7th Semester', percentage: '95.35' },
    { srNo: 5, academicYear: '2023-24', district: 'Bhopal', block: 'Gandhi Nagar', collegeName: 'SG123-Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal', semester: '4th Semester', percentage: '93.66' },
  ];

  const handleSearch = () => {
    if (enrollmentNo.trim()) setShowResults(true);
  };

  const handleClear = () => {
    setEnrollmentNo('');
    setShowResults(false);
  };

  return (
    <PageLayout title="Student Tracking">
      
      {/* 1. SEARCH FILTER SECTION */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <h2 className="text-lg font-bold text-gray-700 mb-6 border-b pb-2">Track Student Progress</h2>
        <div className="flex flex-col md:flex-row items-end gap-4">
          <div className="w-full md:w-1/3">
            <Input 
              label="Enter Student Enrollment No." 
              required
              placeholder="e.g. RGPV12345"
              value={enrollmentNo}
              onChange={(e) => setEnrollmentNo(e.target.value)}
            />
          </div>
          <div className="flex gap-3 pb-1">
            <Button 
              label="Search" 
              icon="pi pi-search"
              className="px-8 shadow-sm" 
              style={{ backgroundColor: '#6366F1', border: 'none' }} 
              onClick={handleSearch}
            />
            <Button 
              type="button" 
              label="Clear" 
              icon="pi pi-refresh"
              className="p-button-danger p-button-outlined px-8"
              onClick={handleClear}
            />
          </div>
        </div>
      </div>

      {showResults && (
        <div className="animate-fade-in space-y-6">
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              
              <div className="flex flex-col items-center w-full md:w-52 shrink-0">
                <div className="w-44 h-44 border-4 border-gray-50 rounded-lg shadow-inner overflow-hidden bg-gray-50">
                  <img 
                    src="/boy.png" 
                    alt="Student" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <h3 className="mt-4 font-bold text-red-800 text-xl text-center uppercase tracking-tight">
                  RAHUL SHARMA
                </h3>
               
              </div>
              <div className="flex-grow w-full">
                <h4 className="text-md font-bold mb-4 text-indigo-900 border-l-4 border-indigo-500 pl-3">
                  General Information
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-4 border-t border-l border-gray-200 text-sm">
                  {/* Row 1 */}
                  <div className="bg-gray-50 p-3 font-semibold text-gray-700 border-r border-b border-gray-200">Date of Birth</div>
                  <div className="p-3 text-gray-600 border-r border-b border-gray-200 font-medium">03/03/2007</div>
                  <div className="bg-gray-50 p-3 font-semibold text-gray-700 border-r border-b border-gray-200">Gender</div>
                  <div className="p-3 text-gray-600 border-r border-b border-gray-200 font-medium">Male</div>
                  
                  {/* Row 2 */}
                  <div className="bg-gray-50 p-3 font-semibold text-gray-700 border-r border-b border-gray-200">Father's Name</div>
                  <div className="p-3 text-gray-600 border-r border-b border-gray-200 font-medium">Bhagvan Sharma</div>
                  <div className="bg-gray-50 p-3 font-semibold text-gray-700 border-r border-b border-gray-200">Mother's Name</div>
                  <div className="p-3 text-gray-600 border-r border-b border-gray-200 font-medium">Rukhmani Sharma</div>

                  {/* Row 3 */}
                  <div className="bg-gray-50 p-3 font-semibold text-gray-700 border-r border-b border-gray-200">Mobile No.</div>
                  <div className="p-3 text-gray-600 border-r border-b border-gray-200 font-medium">7412584657</div>
                  <div className="bg-gray-50 p-3 font-semibold text-gray-700 border-r border-b border-gray-200">Email ID</div>
                  <div className="p-3 text-gray-600 border-r border-b border-gray-200 font-medium break-all">rahulsharma01@gmail.com</div>

                  {/* Row 4 - Full Width Address */}
                  <div className="bg-gray-50 p-3 font-semibold text-gray-700 border-r border-b border-gray-200">Address</div>
                  <div className="p-3 text-gray-600 border-r border-b border-gray-200 md:col-span-3 font-medium">
                    124 Rajat Nagar, Bhopal, Madhya Pradesh, 462001
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. ACADEMIC HISTORY TABLE */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h4 className="text-md font-bold mb-4 text-indigo-900 border-l-4 border-indigo-500 pl-3">
              Academic History
            </h4>
            
            <DataTable 
              value={academicHistory} 
              responsiveLayout="scroll" 
              className="p-datatable-sm border-t" 
              paginator 
              rows={5}
              stripedRows
            >
              <Column field="srNo" header="Sr.No." style={{ width: '60px' }} />
              <Column field="academicYear" header="Year" />
              <Column field="district" header="District" />
              <Column field="collegeName" header="College & UDISE Code" className="font-medium" style={{ width: '35%' }} />
              <Column field="semester" header="Semester" />
              <Column 
                field="percentage" 
                header="Percentage" 
                body={(rowData) => (
                  <span className={`font-bold ${parseFloat(rowData.percentage) > 80 ? 'text-green-600' : 'text-blue-600'}`}>
                    {rowData.percentage}%
                  </span>
                )}
              />
            </DataTable>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default StudentTracking;