import React, { useState } from 'react';
// import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Dropdown } from 'primereact/dropdown';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import PageLayout from '../../../components/PageLayout';

interface Exam {
  id: number;
  examType: string;
  examName: string;
  remark: string;
  isActive: boolean;
}

const examTypeOptions = [
  { label: 'Theory Exam', value: 'Theory Exam' },
  { label: 'Practical Exam', value: 'Practical Exam' },
  { label: 'Backlog Exam', value: 'Backlog Exam' },
  { label: 'Entrance Exam', value: 'Entrance Exam' },
];

const AddExam: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    examType: '',
    examName: '',
    remark: '',
    isActive: true,
  });

  const [examList] = useState<Exam[]>([
    {
      id: 1,
      examType: 'Theory Exam',
      examName: 'Mid-Term Examination',
      remark: '',
      isActive: true,
    },
    {
      id: 2,
      examType: 'Practical Exam',
      examName: 'Final Examination',
      remark: '',
      isActive: true,
    },
    {
      id: 3,
      examType: 'Backlog Exam',
      examName: 'Lab Assessment',
      remark: '',
      isActive: true,
    },
    {
      id: 4,
      examType: 'Entrance Exam',
      examName: 'Backlog Exam',
      remark: '',
      isActive: false,
    },
  ]);

  const handleSave = () => {
    console.log('Exam Saved:', formData);
    setShowForm(false);
  };

  const handleClear = () => {
    setFormData({
      examType: '',
      examName: '',
      remark: '',
      isActive: true,
    });
  };

  return (
    <PageLayout title="Add Exam List">
      {/* ================= LIST ================= */}
      {!showForm && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Exam List</h2>
            <Button
              label="Add Exam"
              icon="pi pi-plus"
              onClick={() => setShowForm(true)}
            />
          </div>

          <DataTable
            value={examList}
            paginator
            rows={10}
            showGridlines
            className="p-datatable-sm"
            responsiveLayout="scroll"
          >
            <Column
              header="Sr No."
              body={(_, options) => options.rowIndex + 1}
            />
            <Column
              field="examType"
              header="Exam Type Name"
              sortable
            />
            <Column
              field="examName"
              header="Exam Name"
              sortable
              body={(row) => (
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => {
                    setFormData({
                      examType: row.examType,
                      examName: row.examName,
                      remark: row.remark,
                      isActive: row.isActive,
                    });
                    setShowForm(true);
                  }}
                >
                  {row.examName}
                </span>
              )}
            />
          </DataTable>
        </>
      )}

      {/* ================= FORM ================= */}
      {showForm && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Add / Edit Exam</h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setShowForm(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Exam Type <span className="text-red-500">*</span>
              </label>
              <Dropdown
                value={formData.examType}
                options={examTypeOptions}
                onChange={(e) =>
                  setFormData({ ...formData, examType: e.value })
                }
                placeholder="Select Exam Type"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Exam Name <span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.examName}
                onChange={(e) =>
                  setFormData({ ...formData, examName: e.target.value })
                }
                className="w-full"
                placeholder="Enter exam name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Remark
              </label>
              <InputText
                value={formData.remark}
                onChange={(e) =>
                  setFormData({ ...formData, remark: e.target.value })
                }
                className="w-full"
                placeholder="Enter remark"
              />
            </div>

            <div className="flex items-center gap-2 mt-2">
              <Checkbox
                checked={formData.isActive}
                onChange={(e) =>
                  setFormData({ ...formData, isActive: e.checked ?? false })
                }
              />
              <label>Status Active</label>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <Button label="Save" icon="pi pi-save" onClick={handleSave} />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-secondary"
              onClick={handleClear}
            />
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default AddExam;
