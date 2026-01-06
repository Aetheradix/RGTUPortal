/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card } from 'primereact/card';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Tag } from 'primereact/tag';
import { FileUpload } from 'primereact/fileupload';
import { InputTextarea } from 'primereact/inputtextarea';

interface PrincipalMessage {
  id: number;
  name: string;
  designation: string;
  department: string;
  title: string;
  description: string;
  date: string;
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
    description:
      'Our vision is to provide holistic development for every student.',
    date: '2024-02-15',
    status: 'Active',
  },
];

const PrincipalsMessage: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [expandedRows, setExpandedRows] = useState<any>(null);

  return (
    <PageLayout title="Principal's Message">


      {view === 'list' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Principal's Message</h3>
            <Button
              label="Add Principal Message"
              icon="pi pi-plus"
              onClick={() => setView('add')}
            />
          </div>

          <DataTable
            value={messageList}
            paginator
            rows={10}
            showGridlines
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={(row: PrincipalMessage) => (
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 text-sm">
                <div>
                  <div className="border w-40 h-40 flex items-center justify-center bg-white">
                    {row.image ? (
                      <img src={row.image} alt="Principal" />
                    ) : (
                      <span className="text-xs text-gray-500">
                        Image Not Available
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <p className="mb-2">
                    <b>Description:</b> {row.description}
                  </p>
                  <p>
                    <b>Date:</b> {row.date}
                  </p>
                  <p className="mt-2">
                    <b>Status:</b>{' '}
                    <Tag value={row.status} severity="success" />
                  </p>
                </div>
              </div>
            )}
          >
            <Column expander style={{ width: '3rem' }} />
            <Column header="Sr.No." body={(_, opt) => opt.rowIndex + 1}sortable />
            <Column
              header="Upload Image"
              body={() => 'Image Not Available'}
            />
            <Column field="name" header="Principal Name" sortable/>
            <Column field="designation" header="Designation" sortable/>
            <Column field="department" header="Department Name" sortable/>
            <Column field="title" header="Message Title" sortable/>
            <Column field="description" header="Description" sortable/>
            <Column field="date" header="Date of Message" sortable/>
            <Column
              field="status"
              header="Status"
              body={(row) => (
                <Tag value={row.status} severity="success" />
              )}
            />
            <Column
              header="Actions"
              body={() => (
                <Button icon="pi pi-pencil" text />
              )}
            />
          </DataTable>
        </Card>
      )}


      {view === 'add' && (
        <Card>
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Add Principal Message</h3>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setView('list')}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label>Upload Image *</label>
              <FileUpload
                mode="basic"
                name="image"
                chooseLabel="Choose"
                className="w-full"
              />
            </div>

            <div>
              <label>Enter Principal Name*</label>
              <InputText className="w-full" />
            </div>

            <div>
              <label>Enter Designation*</label>
              <InputText className="w-full" />
            </div>

            <div>
              <label>Enter Department Name*</label>
              <InputText className="w-full" />
            </div>

            <div>
              <label>Enter Message Title*</label>
              <InputText className="w-full" />
            </div>

            <div className="md:col-span-3">
              <label>Enter Description*</label>
              <InputTextarea rows={4} className="w-full" />
            </div>

            <div>
              <label>Date of Message*</label>
              <Calendar dateFormat="dd/mm/yy" className="w-full" />
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

export default PrincipalsMessage;
