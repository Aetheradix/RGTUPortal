import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const dummyList = Array.from({ length: 10 }).map((_, i) => ({
  id: i + 1,
  enrollment: `0501CS${100 + i}C00${i}`,
  name: [
    'Aman Kumar',
    'Priya Mehta',
    'Sandeep Singh',
    'Neha Patel',
    'Rakesh Yadav',
    'Anjali Verma',
    'Vikas Sharma',
    'Sonali Gupta',
    'Deepak Raj',
    'Kiran Mehta'
  ][i],
  course: 'Computer Science',
  specialization: 'Artificial Intelligence',
  semester: '1st Semester'
}));

const Filters: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      {[
        'Academic Year*',
        'Exam Type*',
        'Exam Name*',
        'Course Name*',
        'Specialization*',
        'Semester*'
      ].map(label => (
        <div key={label}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
          <Dropdown
            placeholder="Select"
            options={[]}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
};


const ForwardFormsPrincipal: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [addMode, setAddMode] = useState(false);
  const [showForwardList, setShowForwardList] = useState(false);

  return (
    <PageLayout title="Forward Forms">


      <div className="flex justify-end mb-4">
        {!addMode && (
          <Button
            label="Add Forward Form"
            icon="pi pi-plus"
            className="p-button-primary"
            onClick={() => {
              setAddMode(true);
              setShowList(false);
            }}
          />
        )}
      </div>

      {!addMode && (
        <Card className="shadow-sm border border-gray-200 rounded-lg">
          <h3 className="text-lg font-semibold mb-5">Forward Forms</h3>

          <Filters />

          <div className="flex gap-3 mb-6">
            <Button
              label="Search"
              icon="pi pi-search"
              onClick={() => setShowList(true)}
            />
            <Button
              label="Clear"
              className="p-button-secondary"
              onClick={() => setShowList(false)}
            />
          </div>

          {showList && (
            <DataTable
              value={dummyList}
              paginator
              rows={10}
              showGridlines
              className="p-datatable-sm"
            >
              <Column header="Sr No." body={(_, o) => o.rowIndex + 1} />
              <Column field="enrollment" header="Enrollment No." />
              <Column field="name" header="Student Name" />
              <Column field="course" header="Course Name" />
              <Column field="specialization" header="Specialization" />
            </DataTable>
          )}
        </Card>
      )}

      {addMode && (
        <Card className="shadow-sm border border-gray-200 rounded-lg">
          <div className="flex justify-between items-center mb-5">
            <h3 className="text-lg font-semibold">
              Add Forward Forms Principal
            </h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => {
                setAddMode(false);
                setShowForwardList(false);
              }}
            />
          </div>

          <Filters />

          <div className="flex gap-3 mb-6">
            <Button
              label="Search"
              icon="pi pi-search"
              onClick={() => setShowForwardList(true)}
            />
            <Button
              label="Clear"
              className="p-button-secondary"
              onClick={() => setShowForwardList(false)}
            />
          </div>

          {showForwardList && (
            <>
              <h4 className="text-md font-semibold mb-3">
                Forward Forms
              </h4>

              <DataTable
                value={dummyList}
                paginator
                rows={10}
                showGridlines
                className="p-datatable-sm"
              >
                <Column header="Sr No." body={(_, o) => o.rowIndex + 1} />
                <Column field="enrollment" header="Enrollment No." />
                <Column field="name" header="Student Name" />
                <Column field="course" header="Course Name" />
                <Column field="specialization" header="Specialization" />
                <Column field="semester" header="Semester" />
                <Column
                  header="Action"
                  body={() => (
                    <Button
                      label="Forward"
                      size="small"
                      className="p-button-success"
                    />
                  )}
                />
              </DataTable>
            </>
          )}
        </Card>
      )}

    </PageLayout>
  );
};

export default ForwardFormsPrincipal;
