import React, { useState } from 'react';
// import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import PageLayout from '../../../components/PageLayout';

interface ExamType {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
}

const ExamType: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    isActive: true,
  });

  const [examTypes] = useState<ExamType[]>([
    { id: 1, name: 'Theory Exam', description: 'Written examination', isActive: true },
    { id: 2, name: 'Practical Exam', description: 'Practical assessment', isActive: true },
    { id: 3, name: 'Semester Exam', description: 'Semester end exam', isActive: true },
    { id: 4, name: 'Re-Exam', description: 'Re-appear exam', isActive: false },
  ]);

  const handleSave = () => {
    console.log('Saved Data:', formData);
    setShowForm(false);
  };

  const handleClear = () => {
    setFormData({ name: '', description: '', isActive: true });
  };

  return (
    <PageLayout title="Exam Type Master">
      {/* ================= LIST VIEW ================= */}
      {!showForm && (
        <>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Exam Type List</h2>
            <Button
              label="Add Exam Type"
              icon="pi pi-plus"
              onClick={() => setShowForm(true)}
            />
          </div>

          <DataTable
            value={examTypes}
            paginator
            rows={25}
            showGridlines
            className="p-datatable-sm"
            responsiveLayout="scroll"
          >
            <Column header="Sr No." body={(_, options) => options.rowIndex + 1} />
            <Column
              field="name"
              header="Exam Type Name"
              sortable
              body={(row) => (
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => {
                    setFormData({
                      name: row.name,
                      description: row.description,
                      isActive: row.isActive,
                    });
                    setShowForm(true);
                  }}
                >
                  {row.name}
                </span>
              )}
            />
          </DataTable>
        </>
      )}

      {/* ================= FORM VIEW ================= */}
      {showForm && (
        <>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Add / Edit Exam Type</h2>
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
                Exam Type Name <span className="text-red-500">*</span>
              </label>
              <InputText
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full"
                placeholder="Enter exam type name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Exam Description
              </label>
              <InputText
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full"
                placeholder="Enter exam description"
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

export default ExamType;
