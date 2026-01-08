import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { RadioButton } from 'primereact/radiobutton';
import { Table, Dropdown, Input } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

interface EnquiryRow {
  id: number;
  investigatingOfficer: string;
  presentingOfficer: string;
  remark: string;
  enquiryDate: string;
  argumentDate: string;
  // Expanded details fields
  defenseEvidenceDate?: string;
  firstHearingDate?: string;
  imputedDate?: string;
  noticeDate?: string;
}

const UpdateDepartmentEnquiry: React.FC = () => {
  const [status, setStatus] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [enquiryStatus, setEnquiryStatus] = useState('OPEN'); // 'OPEN' or 'CLOSE'
  const [expandedRows, setExpandedRows] = useState<any>(null);

  const [data] = useState<EnquiryRow[]>([
    {
      id: 1,
      investigatingOfficer: 'Admin',
      presentingOfficer: 'Raj Purohit',
      remark: 'Approve',
      enquiryDate: '05/06/2024',
      argumentDate: '06/06/2024',
      defenseEvidenceDate: '25/06/2024',
      firstHearingDate: '16/06/2024',
      imputedDate: '28/06/2024',
      noticeDate: '27/06/2024'
    },
    {
      id: 2,
      investigatingOfficer: 'HR',
      presentingOfficer: 'Ram Jain',
      remark: 'Approve',
      enquiryDate: '05/02/2024',
      argumentDate: '06/02/2024'
    }
  ]);

  // Expanded Row Template (image_a9c0e3.png)
  const rowExpansionTemplate = (data: EnquiryRow) => {
    return (
      <div className="p-4 bg-gray-50 space-y-3 text-sm">
        <p><strong>Presentation & Cross-Examination of Defense Supporting Evidence:</strong> {data.defenseEvidenceDate}</p>
        <p><strong>First-Hearing of the criminal before the investigating officer and reading of the charge sheet:</strong> {data.firstHearingDate}</p>
        <p><strong>Imputed Date:</strong> {data.imputedDate}</p>
        <p><strong>Notice Date:</strong> {data.noticeDate}</p>
        <div className="flex items-center gap-4 mt-2">
          <span className="font-bold">Action</span>
          <Button 
            icon="pi pi-eye" 
            className="p-button-rounded p-button-danger p-button-sm" 
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>
    );
  };

  const columns = [
    { field: 'investigatingOfficer', header: 'Name of Departmental Investigating Officer' },
    { field: 'presentingOfficer', header: 'Name of Presenting Officer' },
    { field: 'remark', header: 'Enquiry Remark' },
    { field: 'enquiryDate', header: 'Brief Date of Enquiry' },
    { field: 'argumentDate', header: 'Date of Argument of Emp' },
  ];

  return (
    <PageLayout title="Update Department Enquiry ">
      
      {/* Search Section (image_a9c0c6.png) */}
      <div className="bg-white p-6 rounded-lg shadow-sm border mb-6">
        <div className="w-1/4 mb-4">
          <label className="text-sm font-medium mb-1 block">Select Enquiry Status <span className="text-red-500">*</span></label>
          <Dropdown 
            placeholder="Select" 
            value={status} 
            onChange={(e) => setStatus(e.value)}
            options={[{label: 'Active', value: 'active'}]}
          />
        </div>
       <div className="flex gap-3 justify-center pt-4">
            <Button label="Search" className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
            <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-12" />
          </div>
      </div>

      {/* Details Table (image_a9c0df.png) */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="p-4 border-b bg-gray-50 font-bold text-gray-700">Details</div>
        <Table 
          columns={columns} 
          data={data} 
          expandedRows={expandedRows}
          onRowToggle={(e) => setExpandedRows(e.data)}
          rowExpansionTemplate={rowExpansionTemplate}
          showPagination
        />
      </div>

      {/* Pop-up Modal (image_a9c0fc.png & image_a9c100.png) */}
      <Dialog 
        header="Department Enquiry Status" 
        visible={showModal} 
        onHide={() => setShowModal(false)}
        style={{ width: '550px' }}
      >
        <div className="py-4 px-2">
          <div className="flex justify-between items-center mb-6">
            <span className="font-bold text-lg">Do you Want to Close the Departmental Inquiry?</span>
            <div className="flex gap-4">
              <div className="flex align-items-center">
                <RadioButton inputId="open" value="OPEN" onChange={(e) => setEnquiryStatus(e.value)} checked={enquiryStatus === 'OPEN'} />
                <label htmlFor="open" className="ml-2 cursor-pointer">OPEN</label>
              </div>
              <div className="flex align-items-center">
                <RadioButton inputId="close" value="CLOSE" onChange={(e) => setEnquiryStatus(e.value)} checked={enquiryStatus === 'CLOSE'} />
                <label htmlFor="close" className="ml-2 cursor-pointer">CLOSE</label>
              </div>
            </div>
          </div>

          {/* Conditional Fields when "CLOSE" is selected */}
          {enquiryStatus === 'CLOSE' && (
            <div className="space-y-4 border-t pt-4 animate-fade-in">
              <h3 className="text-xl font-semibold text-gray-600 mb-4">Enquiry Details</h3>
              <div className="grid grid-cols-2 gap-4">
                <Input label="Order No" required placeholder="Enter Order Number" />
                <DateInput label="Order Date" required placeholder="mm/dd/yyyy" />
              </div>
              <Input label="Remark" required placeholder="Enter Remark" />
              
              <div className="flex justify-end gap-2 mt-6">
                <Button label="Save" className="px-12" style={{ backgroundColor: '#6366F1', border: 'none' }} />
                <Button label="Close" className="p-button-danger p-button-outlined px-12"  onClick={() => setShowModal(false)} />
              </div>
            </div>
          )}
        </div>
      </Dialog>

    </PageLayout>
  );
};

export default UpdateDepartmentEnquiry;