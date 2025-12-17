/**
 * Example usage of Generic Components
 * This file demonstrates how to use the Input, Dropdown, and Table components
 */

import React, { useState } from 'react';
import { Input, Textarea, NumberInput } from './Input';
import { Dropdown, type DropdownOption } from './Dropdown';
import { Table, type TableColumn } from './Table';
import { Button } from 'primereact/button';

// Example: Form with Input components
export const FormExample: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: null as number | null,
    description: '',
    country: null as string | null,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const countryOptions: DropdownOption[] = [
    { label: 'India', value: 'IN' },
    { label: 'United States', value: 'US' },
    { label: 'United Kingdom', value: 'UK' },
    { label: 'Canada', value: 'CA' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text Input with label */}
        <Input
          label="Full Name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Enter your name"
          error={errors.name}
        />

        {/* Email Input */}
        <Input
          label="Email Address"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Enter your email"
          error={errors.email}
          helperText="We'll never share your email"
        />

        {/* Number Input */}
        <NumberInput
          label="Age"
          value={formData.age}
          onValueChange={(e) => setFormData({ ...formData, age: e.value })}
          placeholder="Enter your age"
          min={0}
          max={120}
        />

        {/* Dropdown */}
        <Dropdown
          label="Country"
          required
          options={countryOptions}
          value={formData.country}
          onChange={(e) => setFormData({ ...formData, country: e.value })}
          placeholder="Select a country"
          error={errors.country}
        />

        {/* Textarea */}
        <div className="md:col-span-2">
          <Textarea
            label="Description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={4}
            placeholder="Enter description"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <Button type="submit" label="Submit" icon="pi pi-check" className="p-button-primary" />
        <Button type="button" label="Cancel" icon="pi pi-times" className="p-button-secondary" />
      </div>
    </form>
  );
};

// Example: Table with pagination
interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

export const TableExample: React.FC = () => {
  const [users] = useState<User[]>([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive' },
    // Add more users for pagination demo
    ...Array.from({ length: 25 }, (_, i) => ({
      id: i + 4,
      name: `User ${i + 4}`,
      email: `user${i + 4}@example.com`,
      role: i % 2 === 0 ? 'Admin' : 'User',
      status: i % 3 === 0 ? 'Inactive' : 'Active',
    })),
  ]);

  const columns: TableColumn[] = [
    {
      field: 'id',
      header: 'ID',
      sortable: true,
      style: { width: '80px' },
    },
    {
      field: 'name',
      header: 'Name',
      sortable: true,
    },
    {
      field: 'email',
      header: 'Email',
      sortable: true,
    },
    {
      field: 'role',
      header: 'Role',
      sortable: true,
    },
    {
      field: 'status',
      header: 'Status',
      sortable: true,
      body: (rowData: User) => (
        <span className={`px-2 py-1 rounded text-xs ${
          rowData.status === 'Active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {rowData.status}
        </span>
      ),
    },
    {
      header: 'Actions',
      body: () => (
        <div className="flex gap-2">
          <Button 
            icon="pi pi-pencil" 
            className="p-button-rounded p-button-text p-button-sm" 
            tooltip="Edit"
          />
          <Button 
            icon="pi pi-trash" 
            className="p-button-rounded p-button-text p-button-danger p-button-sm" 
            tooltip="Delete"
          />
        </div>
      ),
    },
  ];

  return (
    <Table
      title="Users List"
      columns={columns}
      data={users}
      showPagination={true}
      rowsPerPage={10}
      rowsPerPageOptions={[10, 25, 50, 100]}
      emptyMessage="No users found"
    />
  );
};

// Example: Complete CRUD page
export const CompleteExample: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">User Form</h2>
        <FormExample />
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <TableExample />
      </div>
    </div>
  );
};
