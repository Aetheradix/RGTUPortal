import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';

interface CCLECalendarRow {
  monthYear: string;
  title: string;
  subTitle: string;
  day: string;
  activity: string;
  markingSystem: string;
  activityMarks: number;
}

const CCLECalendarMaster: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  
  const [formData] = useState({
    academicYear: '2025-26',
    month: null,
    day: null,
    title: '',
    subTitle: '',
    activity: '',
    markingSystem: null,
    activityMarks: '',
  });

  const [rows] = useState<CCLECalendarRow[]>([
    { monthYear: 'July (2025)', title: 'स्वास्थ्य', subTitle: 'स्वास्थ्य', day: 'First Saturday (2025-07-05)', activity: 'निबंध', markingSystem: 'व्यक्तिगत', activityMarks: 10 },
    { monthYear: 'July (2025)', title: 'आहार', subTitle: 'आहार', day: 'Second Saturday (2025-07-12)', activity: 'आहार', markingSystem: 'व्यक्तिगत', activityMarks: 10 },
    { monthYear: 'July (2025)', title: 'स्वस्थ दिनचर्या', subTitle: 'स्वस्थ दिनचर्या', day: 'Third Saturday (2025-07-19)', activity: 'स्वस्थ दिनचर्या', markingSystem: 'व्यक्तिगत', activityMarks: 10 },
    { monthYear: 'July (2025)', title: 'खेल गतिविधि', subTitle: 'खेल कूद गतिविधि', day: 'Fourth Saturday (2025-07-26)', activity: 'खेल', markingSystem: 'व्यक्तिगत', activityMarks: 20 },
    { monthYear: 'August (2025)', title: 'Swastha Dincharya', subTitle: 'Swasth dincharya', day: 'First Saturday (2025-08-02)', activity: 'Pranayam', markingSystem: 'व्यक्तिगत', activityMarks: 15 },
  ]);

  const columns: TableColumn[] = [
    { field: 'monthYear', header: 'Month (Year)', sortable: true, filter: true },
    { field: 'title', header: 'Title', sortable: true, filter: true },
    { field: 'subTitle', header: 'Sub Title', sortable: true, filter: true },
    { field: 'day', header: 'Day', sortable: true, filter: true },
    { field: 'activity', header: 'Activity', sortable: true, filter: true },
    { field: 'markingSystem', header: 'Marking System', sortable: true, filter: true },
    { field: 'activityMarks', header: 'Activity Marks', sortable: true },
    {
      header: 'Action',
      body: () => (
        <Button icon="pi pi-pencil" className="p-button-text p-button-sm" style={{ color: '#FF8A50' }} />
      ),
      field: ''
    },
  ];

  return (
    <PageLayout title="CCLE Calendar">
      <div className="border border-orange-200 rounded-xl p-6 relative bg-white mt-4 shadow-sm">
        <div className="absolute -top-4 left-6 bg-white px-4 py-1">
          <span className="text-blue-600 font-bold text-sm">CCLE Calendar</span>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-500 text-sm"></p>
          <Button
            label={showForm ? "Back to List" : "Add New CCLE Calendar"}
            icon={showForm ? "pi pi-undo" : "pi pi-plus"}
            onClick={() => setShowForm(!showForm)}
            className="p-button-sm"
            style={{ backgroundColor: '#6366F1', border: 'none' }}
          />
        </div>

        {showForm ? (
          <div className="border-orange-200 border rounded-xl p-6 bg-white relative mt-8">
            <div className="absolute -top-4 left-4 bg-white px-2 border-orange-200  ">
              <span className="text-blue-800 font-bold text-sm">
                Add Continuous and Comprehensive Learning and Evaluation (CCLE) Calendar
              </span>
            </div>
            

            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-6 mt-4">
              <Dropdown label="Academic Year" value={formData.academicYear} options={[{ label: '2025-26', value: '2025-26' }]} disabled />
              <Dropdown label="Month" required placeholder="Select" options={[]} />
              <Dropdown label="Day(Saturday)" required placeholder="Select" options={[]} />

              <Input label="Title" required placeholder="Enter Title" />
              <div className="md:col-span-2">
                <Input label="Sub Title" required placeholder="Enter Sub Title" />
                <div className="text-right text-red-500 text-xs mt-1">300 Characters Remaining</div>
              </div>

              <Input label="Activity" required placeholder="Enter Activity" />
              <Dropdown label="Marking System" required placeholder="Select" options={[]} />
              <Input label="Activity Marks" required placeholder="Marks" />
            </div>

            <div className="flex gap-3 mt-8 pt-4 border-t border-gray-100">
              <Button label="Add" className="px-10 p-button-success p-button-outlined" />
              <Button label="Reset" className="px-10 p-button-danger p-button-outlined" />
            </div>
            <p className="text-red-500 text-sm font-bold mt-4">Note: All Asterisk (*) Marked Fields Are Mandatory</p>
          </div>
        ) : (
          <div className="border-orange-200 border rounded-xl bg-white overflow-hidden mt-8">
            <div className="p-4 border-b border-gray-100 bg-white flex flex-col gap-2">
              <div className="border-[#1a3a8a] border rounded-lg px-3 py-1 self-start">
                <span className="text-[#1a3a8a] font-bold text-sm">
                  Continuous and Comprehensive Learning and Evaluation (CCLE) Calendar Details
                </span>
              </div>
              <p className="text-blue-700 font-bold text-sm">* Note:- Data for the Current Academic Year (2025-26) is shown below.</p>
            </div>

            <div className="p-4 flex justify-end gap-2 bg-white">
              <Button label="Export To Excel" icon="pi pi-file-excel" className="p-button-outlined p-button-secondary p-button-sm" />
            </div>

            <Table
              columns={columns}
              data={rows}
              showPagination
              rowsPerPage={10}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default CCLECalendarMaster;