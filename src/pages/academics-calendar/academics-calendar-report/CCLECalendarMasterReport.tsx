import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown } from '../../../ui/shared';

const CCLECalendarReport: React.FC = () => {
  const [formData, setFormData] = useState({
    academicYear: '2025-26',
    month: 'All'
  });

  const [showReport, setShowReport] = useState(false);

  const mockData = [
    {
      srNo: 1,
      monthName: 'July',
      activities: [
        { title: 'स्वास्थ्य', subTitle: 'स्वास्थ्य', saturday: 'First Saturday (2025-07-05)', activity: 'निबंध', markingSystem: 'व्यक्तिगत', mark: 10 },
        { title: 'आहार', subTitle: 'आहार', saturday: 'Second Saturday (2025-07-12)', activity: 'आहार', markingSystem: 'व्यक्तिगत', mark: 10 },
        { title: 'स्वस्थ दिनचर्या', subTitle: 'स्वस्थ दिनचर्या', saturday: 'Third Saturday (2025-07-19)', activity: 'स्वस्थ दिनचर्या', markingSystem: 'व्यक्तिगत', mark: 10 },
        { title: 'खेल गतिविधि', subTitle: 'खेल कूद गतिविधि', saturday: 'Fourth Saturday (2025-07-26)', activity: 'खेल', markingSystem: 'व्यक्तिगत', mark: 20 },
      ]
    },
    {
      srNo: 2,
      monthName: 'August',
      activities: [
        { title: 'Swastha Dincharya', subTitle: 'Swasth dincharya', saturday: 'First Saturday (2025-08-02)', activity: 'Pranayam', markingSystem: 'व्यक्तिगत', mark: 15 }
      ]
    }
  ];

  return (
    <PageLayout title="CCLE Calendar Report">
      <div className=" rounded-xl p-6 bg-white relative mb-8">
        <div className="   font-bold pb-6">
          Continuous and Comprehensive Learning and Evaluation (CCLE) Calendar Report
        </div>

        <div className="flex items-end gap-8 mt-2">
          <div className="w-70">
            <Dropdown 
              label="Academic Year" 
              value={formData.academicYear} 
              options={[{label: '2025-26', value: '2025-26'}]} 
              onChange={(e) => setFormData({...formData, academicYear: e.value})}
            />
          </div>
          <div className="w-64">
            <Dropdown 
              label="Month" 
              value={formData.month} 
              options={[
                {label: 'All', value: 'All'},
                {label: 'July', value: 'July'},
                {label: 'August', value: 'August'}
              ]} 
              onChange={(e) => setFormData({...formData, month: e.value})}
            />
          </div>
          <Button 
            label="View" 
            className="p-button-outlined p-button-success px-8" 
            onClick={() => setShowReport(true)}
          />
        </div>
      </div>

      {showReport && (
        <div className="bg-white  rounded-xl p-8 shadow-sm">
          
          <div className="flex justify-end gap-2 mb-6">
            <Button label="Print" icon="pi pi-print" className="p-button-sm" style={{ backgroundColor: '#6366F1', border: 'none' }} />
            <Button label="Export To Excel" icon="pi pi-file-excel" className="p-button-sm" style={{ backgroundColor: '#26A69A', border: 'none' }} />
          </div>

          <div className="text-center mb-8">
             <div className="flex justify-center items-center gap-4 mb-2">
              
                <h1 className="text-xl font-bold text-gray-700">Directorate of Public Instructions</h1>
             </div>
             <h2 className="text-lg font-bold text-gray-700">(CCLE) Calendar</h2>
             <h3 className="font-semibold text-gray-600">Academic Year :- {formData.academicYear}</h3>
             <h3 className="font-semibold text-gray-600">Month :- {formData.month}</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-400 text-sm">
              <thead >
                <tr>
                  <th className="border border-gray-400 p-2">Month Name</th>
                  <th className="border border-gray-400 p-2">Title</th>
                  <th className="border border-gray-400 p-2">Sub Title</th>
                  <th className="border border-gray-400 p-2">Saturday</th>
                  <th className="border border-gray-400 p-2">Activity</th>
                  <th className="border border-gray-400 p-2">Marking System</th>
                  <th className="border border-gray-400 p-2">Mark</th>
                </tr>
              </thead>
              <tbody>
                {mockData.map((month) => (
                  month.activities.map((act, idx) => (
                    <tr key={`${month.srNo}-${idx}`} className="hover:bg-gray-50 text-gray-800">
                      {idx === 0 && (
                        <>
                          <td className="border border-gray-400 p-2" rowSpan={month.activities.length}>{month.monthName}</td>
                        </>
                      )}
                      <td className="border border-gray-400 p-2">{act.title}</td>
                      <td className="border border-gray-400 p-2">{act.subTitle}</td>
                      <td className="border border-gray-400 p-2">{act.saturday}</td>
                      <td className="border border-gray-400 p-2">{act.activity}</td>
                      <td className="border border-gray-400 p-2">{act.markingSystem}</td>
                      <td className="border border-gray-400 p-2 text-center">{act.mark}</td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default CCLECalendarReport;