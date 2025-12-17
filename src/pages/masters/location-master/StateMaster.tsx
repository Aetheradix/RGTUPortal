import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface StateRow {
  id: number;
  country: string;
  stateCode: string;
  stateName: string;
  isActive: boolean;
}

const countries = [
  { label: 'India', value: 'IN' },
  { label: 'United States', value: 'US' },
  { label: 'United Kingdom', value: 'UK' },
];

const dummyStates: StateRow[] = [
  { id: 1, country: 'IN', stateCode: 'MP', stateName: 'Madhya Pradesh', isActive: true },
  { id: 2, country: 'IN', stateCode: 'MH', stateName: 'Maharashtra', isActive: true },
  { id: 3, country: 'IN', stateCode: 'RJ', stateName: 'Rajasthan', isActive: false },
];

const StateMaster: React.FC = () => {
  const [formData, setFormData] = useState({
    country: 'IN' as string | null,
    stateCode: '',
    stateName: '',
    isActive: true,
  });

  const [rows] = useState<StateRow[]>(dummyStates);
  const [globalFilter, setGlobalFilter] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with API
    console.log('State saved:', formData);
  };

  const statusBody = (row: StateRow) => (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${
        row.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}
    >
      {row.isActive ? 'Active' : 'Inactive'}
    </span>
  );

  const countryBody = (row: StateRow) => {
    const c = countries.find((x) => x.value === row.country);
    return c?.label ?? row.country;
  };

  return (
    <PageLayout title="State Master Data">
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Country */}
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
              Country <span className="text-red-500">*</span>
            </label>
            <Dropdown
              id="country"
              value={formData.country}
              options={countries}
              optionLabel="label"
              optionValue="value"
              onChange={(e) => setFormData({ ...formData, country: e.value })}
              className="w-full"
              placeholder="Select country"
              required
            />
          </div>

          {/* State Code */}
          <div>
            <label htmlFor="stateCode" className="block text-sm font-medium text-gray-700 mb-2">
              State Code <span className="text-red-500">*</span>
            </label>
            <InputText
              id="stateCode"
              value={formData.stateCode}
              onChange={(e) => setFormData({ ...formData, stateCode: e.target.value.toUpperCase() })}
              maxLength={5}
              className="w-full"
              placeholder="e.g. MP"
              required
            />
          </div>

          {/* State Name */}
          <div>
            <label htmlFor="stateName" className="block text-sm font-medium text-gray-700 mb-2">
              State Name <span className="text-red-500">*</span>
            </label>
            <InputText
              id="stateName"
              value={formData.stateName}
              onChange={(e) => setFormData({ ...formData, stateName: e.target.value })}
              className="w-full"
              placeholder="Enter state name"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Checkbox
              inputId="isActive"
              checked={formData.isActive}
              onChange={(e) => setFormData({ ...formData, isActive: e.checked ?? false })}
            />
            <label htmlFor="isActive" className="text-sm font-medium text-gray-700">
              Active
            </label>
          </div>
        </div>

        <div className="flex gap-3">
          <Button type="submit" label="Save" icon="pi pi-save" className="p-button-primary" />
          <Button type="button" label="Reset" icon="pi pi-refresh" className="p-button-outlined" onClick={() => setFormData({ country: 'IN', stateCode: '', stateName: '', isActive: true })} />
        </div>
      </form>

      {/* Table */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold text-gray-800">States List</h2>
          <span className="p-input-icon-left">
            <i className="pi pi-search" />
            <InputText
              value={globalFilter}
              onChange={(e) => setGlobalFilter(e.target.value)}
              placeholder="Search by name/code"
              className="w-64"
            />
          </span>
        </div>

        <DataTable
          value={rows}
          paginator
          rows={10}
          globalFilter={globalFilter}
          filterDisplay="menu"
          size="small"
          emptyMessage="No states found"
        >
          <Column field="id" header="ID" sortable style={{ width: '70px' }} />
          <Column field="country" header="Country" body={countryBody} sortable />
          <Column field="stateCode" header="State Code" sortable />
          <Column field="stateName" header="State Name" sortable />
          <Column field="isActive" header="Status" body={statusBody} sortable />
          <Column
            header="Actions"
            body={() => (
              <div className="flex gap-2">
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-text p-button-sm" />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-text p-button-danger p-button-sm" />
              </div>
            )}
          />
        </DataTable>
      </div>
    </PageLayout>
  );
};

export default StateMaster;
