import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from '../../../ui/shared';
import { Dialog } from 'primereact/dialog';

interface AchievementReportRow {
  srNo: number;
  enrollmentNo: string;
  studentName: string;
  semester: string;
  achievementTitle: string;
}

const StudentAchievementTrackingReport: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [showPdf, setShowPdf] = useState(false);

  // --- Dropdown Options ---
  const academicYears = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" },
  ];

  // --- Table Mock Data (Based on image_cb99b2) ---
  const reportData: AchievementReportRow[] = [
    { srNo: 1, enrollmentNo: '0501CS221C01', studentName: 'Aruhi Sharma', semester: '3rd Semester', achievementTitle: 'Active Participation in NSS Camp' },
    { srNo: 2, enrollmentNo: '0501CS221C02', studentName: 'Arnav Gupta', semester: '5th Semester', achievementTitle: 'Gold Medal in Athletics' },
    { srNo: 3, enrollmentNo: '0501CS221C03', studentName: 'Neha Sharma', semester: '4th Semester', achievementTitle: 'Best Project in Coding Competition' },
    { srNo: 4, enrollmentNo: '0501CS221C04', studentName: 'Ravi Kumar', semester: '8th Semester', achievementTitle: 'First Rank in Batch' },
    { srNo: 5, enrollmentNo: '0501CS221C05', studentName: 'Priya Yadav', semester: '7th Semester', achievementTitle: 'Winner of State-Level Dance Competition' },
    { srNo: 6, enrollmentNo: '0501CS221C06', studentName: 'Alok Verma', semester: '2nd Semester', achievementTitle: 'Certified Ethical Hacker' },
    { srNo: 7, enrollmentNo: '0501CS221C07', studentName: 'Simran Singh', semester: '1st Semester', achievementTitle: 'Participant in State-Level Cricket Tournament' },
  ];

  // --- Certificate View Button Template ---
  const certificateTemplate = () => (
    <Button 
      icon="pi pi-eye" 
      className="p-button-rounded" 
      style={{ backgroundColor: '#6366F1', border: 'none' }} 
      onClick={() => setShowPdf(true)}
    />
  );

  return (
    <PageLayout title="Student Achievement Tracking Report">
      
      {/* 1. FILTER SECTION (image_cb99b0) */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
      
        <div className="w-full md:w-1/4">
          <Dropdown 
            label="Academic Year" required
            placeholder="Select"
            value={selectedYear}
            options={academicYears}
            onChange={(e) => setSelectedYear(e.value)}
          />
        </div>

        <div className="flex gap-3 justify-center pt-8  ">
          <Button label="Search" className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
          <Button 
            type="button" label="Clear" className="p-button-danger p-button-outlined px-12"
           
            onClick={() => setSelectedYear(null)}
          />
        </div>
      </div>

      {/* 2. REPORT TABLE SECTION (image_cb99b2) */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-4">
           <h2 className="text-lg font-bold text-gray-700">Student Achievement Tracking Report</h2>
           <div className="flex items-center gap-2">
              <span className="text-sm">Show</span>
              <select className="border rounded p-1 text-sm"><option>10</option></select>
              <span className="text-sm">entries</span>
           </div>
        </div>
        
        <DataTable value={reportData} responsiveLayout="scroll" className="text-sm" paginator rows={10}>
          <Column field="srNo" header="Sr.No." sortable style={{ width: '80px' }} />
          <Column field="enrollmentNo" header="Enrollment No" sortable />
          <Column field="studentName" header="Student Name" sortable />
          <Column field="semester" header="Semester" sortable />
          <Column field="achievementTitle" header="Achievement Title" sortable />
          <Column header="Certificate" body={certificateTemplate} style={{ width: '100px', textAlign: 'center' }} />
        </DataTable>
      </div>

      {/* 3. PDF PREVIEW MODAL (image_cb99b4) */}
      <Dialog 
        header="PDF Preview" 
        visible={showPdf} 
        onHide={() => setShowPdf(false)} 
        style={{ width: '70vw' }}
        maximized
      >
        <div className="bg-gray-700 w-full h-full flex flex-col">
          {/* Mock PDF Toolbar */}
          <div className="bg-gray-800 p-2 flex justify-between items-center text-white text-xs">
            <span>certificatepdf (1).pdf</span>
            <div className="flex gap-4">
              <i className="pi pi-print pointer"></i>
              <i className="pi pi-download pointer"></i>
            </div>
          </div>
          
          {/* Mock Certificate Content */}
          <div className="flex-grow overflow-auto p-10 flex justify-center">
            <div className="bg-white p-12 shadow-2xl relative" style={{ width: '800px', height: '560px' }}>
              <div className="border-8 border-double border-indigo-100 h-full w-full p-8 flex flex-col items-center">
                 <div className="text-indigo-900 font-serif text-4xl mt-4">COURSERA</div>
                 <div className="text-sm tracking-widest text-gray-500 mt-2">PROJECT NETWORK</div>
                 
                 <div className="mt-12 text-gray-600">04.10.2020</div>
                 <div className="text-3xl font-bold text-gray-800 mt-4 uppercase">Nikita</div>
                 <div className="text-gray-500 mt-4 italic">has successfully completed</div>
                 <div className="text-2xl font-semibold text-indigo-700 mt-2">Introduction to Python</div>
                 
                 <div className="mt-auto w-full flex justify-between px-10 pb-4 text-xs">
                    <div className="text-center">
                       <div className="border-b border-gray-400 w-32 mb-1"></div>
                       <div>Director Signature</div>
                    </div>
                    <div className="text-center">
                       <div className="border-b border-gray-400 w-32 mb-1"></div>   
                       <div>Verify Certificate</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>

    </PageLayout>
  );
};

export default StudentAchievementTrackingReport;