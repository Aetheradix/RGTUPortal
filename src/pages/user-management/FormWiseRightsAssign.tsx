import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, type DropdownOption } from '../../ui/shared';
import { Checkbox } from 'primereact/checkbox';
import { Table, type TableColumn } from '../../ui/shared';

interface FormRights {
  id: number;
  formName: string;
  roleName: string;
  canView: boolean;
  canAdd: boolean;
  canEdit: boolean;
  canDelete: boolean;
  status: string;
}

const FormWiseRightsAssign: React.FC = () => {
  const [formData, setFormData] = useState({
    roleName: '',
    formName: '',
    canView: false,
    canAdd: false,
    canEdit: false,
    canDelete: false,
  });

  const roles = ['Super Admin', 'Admin', 'HR Manager', 'Finance Manager', 'User'];
  const forms = ['User Management', 'Employee Registration', 'Payroll', 'Attendance', 'Leave Management', 'Reports'];

  const roleOptions: DropdownOption[] = roles.map((role) => ({ label: role, value: role }));
  const formOptions: DropdownOption[] = forms.map((form) => ({ label: form, value: form }));

  const [formRights] = useState<FormRights[]>([
    { id: 1, formName: 'User Management', roleName: 'Super Admin', canView: true, canAdd: true, canEdit: true, canDelete: true, status: 'Active' },
    { id: 2, formName: 'Employee Registration', roleName: 'HR Manager', canView: true, canAdd: true, canEdit: true, canDelete: false, status: 'Active' },
    { id: 3, formName: 'Payroll', roleName: 'Finance Manager', canView: true, canAdd: true, canEdit: true, canDelete: false, status: 'Active' },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form rights:', formData);
  };

  return (
    <PageLayout title="Form Wise Right's Assign">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Dropdown
            label="Select Role"
            required
            value={formData.roleName}
            options={roleOptions}
            onChange={(e) => setFormData({ ...formData, roleName: e.value })}
            placeholder="Select role"
          />

          <Dropdown
            label="Select Form"
            required
            value={formData.formName}
            options={formOptions}
            onChange={(e) => setFormData({ ...formData, formName: e.value })}
            placeholder="Select form"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center">
            <Checkbox
              inputId="canView"
              checked={formData.canView}
              onChange={(e) => setFormData({ ...formData, canView: e.checked || false })}
            />
            <label htmlFor="canView" className="ml-2 text-sm font-medium text-gray-700">
              View
            </label>
          </div>

          <div className="flex items-center">
            <Checkbox
              inputId="canAdd"
              checked={formData.canAdd}
              onChange={(e) => setFormData({ ...formData, canAdd: e.checked || false })}
            />
            <label htmlFor="canAdd" className="ml-2 text-sm font-medium text-gray-700">
              Add
            </label>
          </div>

          <div className="flex items-center">
            <Checkbox
              inputId="canEdit"
              checked={formData.canEdit}
              onChange={(e) => setFormData({ ...formData, canEdit: e.checked || false })}
            />
            <label htmlFor="canEdit" className="ml-2 text-sm font-medium text-gray-700">
              Edit
            </label>
          </div>

          <div className="flex items-center">
            <Checkbox
              inputId="canDelete"
              checked={formData.canDelete}
              onChange={(e) => setFormData({ ...formData, canDelete: e.checked || false })}
            />
            <label htmlFor="canDelete" className="ml-2 text-sm font-medium text-gray-700">
              Delete
            </label>
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit" label="Assign Rights" icon="pi pi-save" className="p-button-primary" />
          <Button type="button" label="Cancel" icon="pi pi-times" className="p-button-secondary" />
          <Button type="button" label="Reset" icon="pi pi-refresh" className="p-button-outlined" />
        </div>
      </form>

      <div className="mt-8">
        <Table
          title="Form Wise Rights Assignments"
          columns={[
            {
              field: 'id',
              header: 'ID',
              sortable: true,
              style: { width: '80px' },
            },
            {
              field: 'formName',
              header: 'Form Name',
              sortable: true,
            },
            {
              field: 'roleName',
              header: 'Role Name',
              sortable: true,
            },
            {
              field: 'canView',
              header: 'View',
              body: (rowData: FormRights) => (rowData.canView ? 'Yes' : 'No'),
            },
            {
              field: 'canAdd',
              header: 'Add',
              body: (rowData: FormRights) => (rowData.canAdd ? 'Yes' : 'No'),
            },
            {
              field: 'canEdit',
              header: 'Edit',
              body: (rowData: FormRights) => (rowData.canEdit ? 'Yes' : 'No'),
            },
            {
              field: 'canDelete',
              header: 'Delete',
              body: (rowData: FormRights) => (rowData.canDelete ? 'Yes' : 'No'),
            },
            {
              field: 'status',
              header: 'Status',
            },
            {
              header: 'Actions',
              body: () => (
                <div className="flex gap-2">
                  <Button icon="pi pi-pencil" className="p-button-rounded p-button-text p-button-sm" />
                  <Button icon="pi pi-trash" className="p-button-rounded p-button-text p-button-danger p-button-sm" />
                </div>
              ),
            },
          ] as TableColumn[]}
          data={formRights}
          showPagination={true}
          rowsPerPage={10}
        />
      </div>
    </PageLayout>
  );
};

export default FormWiseRightsAssign;
