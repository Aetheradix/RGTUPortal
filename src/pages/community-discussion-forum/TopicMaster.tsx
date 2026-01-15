import React, { useState } from 'react';
import PageLayout from '../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table, type TableColumn } from '../../ui/shared';

const TopicMaster: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    topicName: '',
    category: null,
    description: '',
    priority: 'Medium'
  });

  const categoryOptions = [
    { label: 'Academic Discussion', value: 'Academic' },
    { label: 'Sports & Extra-Curricular', value: 'Sports' },
    { label: 'Administrative Queries', value: 'Admin' },
    { label: 'General Announcement', value: 'General' }
  ];

  const columns: TableColumn[] = [
    { field: 'topicName', header: 'Topic Name' },
    { field: 'category', header: 'Category' },
    { field: 'priority', header: 'Priority' },
    { field: 'status', header: 'Status' },
    {
        header: 'Action',
        body: () => (
            <Button icon="pi pi-pencil" className="p-button-text p-button-sm" style={{ color: '#6366F1' }} />
        ),
        field: ''
    },
  ];

  return (
    <PageLayout title="Community and Discussion Forum">
      <div className="flex justify-between items-center mb-4">
        <div className=" text-white px-4 py-1 rounded-full text-sm font-semibold"></div>
        <Button 
          label={showForm ? "Back to List" : "Add New Topic"} 
          icon={showForm ? "pi pi-undo" : "pi pi-plus"} 
          onClick={() => setShowForm(!showForm)}
          style={{ backgroundColor: '#6366F1', border: 'none' }}
        />
      </div>

      {showForm ? (
        <div className="border-orange-200 border rounded-xl p-6 bg-white relative mt-6">
          <div className="absolute -top-3 left-4 bg-white px-2 border-orange-200  rounded text-blue-800 font-bold text-sm">Add  Topic</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            <Input label="Topic Name" required placeholder="e.g., Science Fair 2026" value={formData.topicName} onChange={(e) => setFormData({...formData, topicName: e.target.value})} />
            <Dropdown label="Category" required placeholder="Select Category" options={categoryOptions} value={formData.category} onChange={(e) => setFormData({...formData, category: e.value})} />
            <Dropdown label="Priority" options={[{label: 'High', value: 'High'}, {label: 'Medium', value: 'Medium'}, {label: 'Low', value: 'Low'}]} value={formData.priority} onChange={(e) => setFormData({...formData, priority: e.value})} />
            <div className="md:col-span-3">
              <Input label="Short Description" placeholder="Explain the purpose of this topic" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} />
            </div>
          </div>
          <div className="flex gap-3 mt-8 pt-4 border-t border-gray-100">
            <Button label="Save " className="px-10 bg-[#00bfa5] p-button" />
            <Button label="Reset" className="px-10 p-button-danger p-button-outlined" onClick={() => setFormData({topicName: '', category: null, description: '', priority: 'Medium'})} />
          </div>
        </div>
      ) : (
        <div className="border-orange-200 border rounded-xl bg-white overflow-hidden mt-6 shadow-sm">
          <Table columns={columns} data={[]} showPagination rowsPerPage={10} emptyMessage="No topics found" />
        </div>
      )}
    </PageLayout>
  );
};

export default TopicMaster;