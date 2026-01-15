/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { FileUpload } from 'primereact/fileupload';
import { InputTextarea } from 'primereact/inputtextarea';
import { Table, Input } from '@/ui/shared';
import { DateInput } from '@/ui/shared/Input';

interface PrincipalMessage {
  id: number;
  name: string;
  designation: string;
  department: string;
  title: string;
  description: string;
  date: any;
  status: string;
  image?: string;
}

const messageList: PrincipalMessage[] = [
  {
    id: 1,
    name: 'Dr. Harshika Singh',
    designation: 'Principal',
    department: 'Department of Technical Education',
    title: 'Vision for Growth',
    description: 'Our vision is to provide holistic development for every student through innovation and technical excellence.',
    date: new Date('2024-02-15'),
    status: 'Active',
  },
];

const PrincipalsMessage: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [formData, setFormData] = useState<any>({
    name: '',
    designation: '',
    department: '',
    title: '',
    description: '',
    date: null
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  const rowExpansionTemplate = (row: PrincipalMessage) => {
    return (
      <div className="p-6 bg-blue-50/50 rounded-lg border border-blue-100 flex flex-col md:flex-row gap-6 animate-fadein">
        <div className="flex-shrink-0">
          <div className="w-40 h-48 border-2 border-white shadow-md rounded overflow-hidden bg-gray-200 flex items-center justify-center">
            {row.image ? (
              <img src={row.image} alt="Principal" className="w-full h-full object-cover" />
            ) : (
              <div className="text-center p-2 text-gray-500">
                <i className="pi pi-user text-4xl mb-2"></i>
                <p className="text-[10px]">PHOTO NOT UPLOADED</p>
              </div>
            )}
          </div>
        </div>
        <div className="flex-grow">
          <h4 className="text-xl font-bold text-blue-900 mb-1">{row.title}</h4>
          <p className="text-sm italic text-gray-600 mb-4 underline decoration-blue-200">"{row.description}"</p>
          <div className="grid grid-cols-2 gap-4 text-xs">
             <div><strong>Posted Date:</strong> {row.date?.toLocaleDateString()}</div>
             <div><strong>Status:</strong> <Tag value={row.status} severity="success" className="text-[10px]" /></div>
          </div>
        </div>
      </div>
    );
  };

  const tableColumns: any[] = [
    { expander: true, header: "", style: { width: '3rem' } },
    { field: "name", header: "Principal Name", sortable: true },
    { field: "designation", header: "Designation", sortable: true },
    { field: "department", header: "Department", sortable: true },
    { field: "title", header: "Message Title", sortable: true },
    { 
      field: "status", 
      header: "Status", 
      body: (row: any) => <Tag value={row.status} severity="success" /> 
    },
    {
      header: "Actions",
      body: () => <Button icon="pi pi-pencil" text severity="warning" tooltip="Edit Message" />
    }
  ];

  return (
    <PageLayout title="Principal's Message Management">
      {view === 'list' && (
        <div className="animate-fadein">
          <Card>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-bold text-gray-700">Message Archives / संदेश पुरालेख</h3>
              <Button
                label="Create New Message"
                icon="pi pi-plus"
                className="bg-blue-600 shadow-sm"
                onClick={() => setView('add')}
              />
            </div>

            <Table
              data={messageList}
              columns={tableColumns}
              rowExpansionTemplate={rowExpansionTemplate}
       
            />
          </Card>
        </div>
      )}

      {view === 'add' && (
        <div className="animate-slide-up">
          <Card>
            <div className="flex justify-between items-center mb-6  pb-4">
              <h3 className="text-lg font-bold text-gray-700">Add New Message / नया संदेश जोड़ें</h3>
              <Button
                label="Back to List"
                icon="pi pi-arrow-left"
                text
                onClick={() => setView('list')}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-600">Principal's Photo *</label>
                <FileUpload mode="basic" name="image" chooseLabel="Upload Photo" className="w-full" />
              </div>

              <Input 
                label="Principal Name" 
                required 
                value={formData.name} 
                onChange={(e: any) => handleInputChange('name', e.target.value)} 
                placeholder="Enter full name"
              />

              <Input 
                label="Designation" 
                required 
                value={formData.designation} 
                onChange={(e: any) => handleInputChange('designation', e.target.value)} 
                placeholder="e.g. Principal"
              />

              <Input 
                label="Department Name" 
                required 
                value={formData.department} 
                onChange={(e: any) => handleInputChange('department', e.target.value)} 
                placeholder="e.g. Technical Education"
              />

              <Input 
                label="Message Title" 
                required 
                value={formData.title} 
                onChange={(e: any) => handleInputChange('title', e.target.value)} 
                placeholder="Brief title of the message"
              />

              <DateInput 
                label="Date of Message" 
                required 
                value={formData.date} 
                onChange={(e) => handleInputChange('date', e.value)} 
              />

              <div className="md:col-span-3">
                <label className="text-sm font-semibold text-gray-600 mb-1 block">Full Description / संदेश विवरण *</label>
                <InputTextarea 
                  rows={5} 
                  className="w-full border border-gray-300 rounded-md p-3 focus:border-blue-500 outline-none transition-all" 
                  placeholder="Enter the principal's message here..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-3 border-t pt-6">
              <Button label="Save Message" icon="pi pi-save" className="bg-green-600 px-8 py-2" />
              <Button
                label="Clear Form"
                icon="pi pi-refresh"
                severity="secondary"
                outlined
                className="px-8 py-2"
                onClick={() => setFormData({ name: '', designation: '', department: '', title: '', description: '', date: null })}
              />
            </div>
          </Card>
        </div>
      )}
    </PageLayout>
  );
};

export default PrincipalsMessage;