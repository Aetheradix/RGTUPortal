import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';

interface SheetDistribution {
  id: number;
  evaluatorName: string;
  sheetTitle: string;
  dueDate: string;
  remark: string;
  status: string;
}

const evaluatorOptions = [
  { label: 'Select', value: '' },
  { label: 'Ravi Kumar', value: 'Ravi Kumar' },
  { label: 'Priya Sharma', value: 'Priya Sharma' },
  { label: 'Amit Patel', value: 'Amit Patel' },
];

const sheetOptions = [
  { label: 'Select', value: '' },
  { label: 'B.Tech in Computer Science', value: 'B.Tech in Computer Science' },
  { label: 'B.Tech in Electrical Engineering', value: 'B.Tech in Electrical Engineering' },
  { label: 'B.Tech in Mechanical Engineering', value: 'B.Tech in Mechanical Engineering' },
];

const sheetList: SheetDistribution[] = [
  {
    id: 1,
    evaluatorName: 'Ravi Kumar',
    sheetTitle: 'B.Tech in Computer Science',
    dueDate: '15/12/2024',
    remark: 'Needs to evaluate the practicals',
    status: 'Active',
  },
  {
    id: 2,
    evaluatorName: 'Priya Sharma',
    sheetTitle: 'B.Tech in Electrical Engineering',
    dueDate: '20/12/2024',
    remark: 'Needs to evaluate the practicals',
    status: 'Active',
  },
  {
    id: 3,
    evaluatorName: 'Amit Patel',
    sheetTitle: 'B.Tech in Mechanical Engineering',
    dueDate: '22/12/2024',
    remark: 'Needs to evaluate the practicals',
    status: 'Active',
  },
];

const SheetDistributionToEvaluator: React.FC = () => {
  const [view, setView] = useState<'list' | 'details' | 'add'>('list');
  const [selectedRow, setSelectedRow] = useState<SheetDistribution | null>(null);

  return (
    <PageLayout title="Sheet Distribution To Evaluator">

      {/* ================= LIST ================= */}
      {view === 'list' && (
        <Card className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">
              Sheet Distribution To Evaluator List
            </h3>
            <Button
              label="Add Sheet Distribution To Evaluator"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

          <DataTable value={sheetList} paginator rows={10} showGridlines>
            <Column header="Sr No." body={(_, opt) => opt.rowIndex + 1} />
            <Column
              header="Evaluator Name"
              body={(row: SheetDistribution) => (
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => {
                    setSelectedRow(row);
                    setView('details');
                  }}
                >
                  {row.evaluatorName}
                </span>
              )}
            />
            <Column field="sheetTitle" header="Sheet Title" />
            <Column field="dueDate" header="Due Date" />
          </DataTable>
        </Card>
      )}

      {/* ================= DETAILS ================= */}
      {view === 'details' && selectedRow && (
        <Card className="mb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Sheet Distribution Details</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <label className="block mb-1">Additional Remark</label>
              <div>{selectedRow.remark}</div>
            </div>

            <div>
              <label className="block mb-1">Status</label>
              <Tag value={selectedRow.status} severity="success" />
            </div>
          </div>
        </Card>
      )}

      {/* ================= ADD ================= */}
{/* ================= ADD ================= */}
{view === 'add' && (
  <Card>
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold">
        Add Sheet Distribution To Evaluator
      </h3>
      <Button
        label="Go Back"
        icon="pi pi-arrow-left"
        className="p-button-text"
        onClick={() => setView('list')}
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
      <div>
        <label className="block mb-1">Select Evaluator *</label>
        {/* FIXED: Added className="w-full" */}
        <Dropdown options={evaluatorOptions} placeholder="Select" className="w-full" />
      </div>

      <div>
        <label className="block mb-1">Select Sheet *</label>
        {/* FIXED: Added className="w-full" */}
        <Dropdown options={sheetOptions} placeholder="Select" className="w-full" />
      </div>

      <div>
        <label className="block mb-1">Enter Due Date *</label>
        <Calendar
          placeholder="dd/mm/yyyy"
          dateFormat="dd/mm/yy"
          className="w-full"
        />
      </div>

      <div className="md:col-span-3">
        <label className="block mb-1">Additional Remark *</label>
        <InputText placeholder="Enter Remarks here" className="w-full" />
      </div>

      <div>
        <label className="block mb-1">Status *</label>
        {/* FIXED: Added className="w-full" */}
        <Dropdown
          options={[
            { label: 'Active', value: 'Active' },
            { label: 'Inactive', value: 'Inactive' },
          ]}
          placeholder="Select"
          className="w-full"
        />
      </div>
    </div>

    <div className="flex gap-3">
      <Button label="Save" icon="pi pi-save" />
      <Button
        label="Clear"
        icon="pi pi-refresh"
        className="p-button-secondary"
      />
    </div>
  </Card>
)}
    </PageLayout>
  );
};

export default SheetDistributionToEvaluator;
