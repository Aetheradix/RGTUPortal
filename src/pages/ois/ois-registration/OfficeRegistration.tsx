import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';
import { Checkbox } from 'primereact/checkbox';

interface OfficeRow {
  officeNameEn: string;
  officeNameHi: string;
  officeCode: string;
  ddoCode: string;
  landline: string;
  email: string;
  status: boolean;
}

const OfficeRegistrationForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    officeType: null,
    officeNameEn: '',
    officeNameHi: '',
    codeNo: '',
    division: null,
    district: null,
    block: null,
    paymentAuthority: null,
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
    landline: '',
    email: '',
    establishmentDate: null as Date | null,
    status: true,
    bankType: null,
    ifscCode: null,
    bankName: null,
    accountNumber: '',
    latitude: '',
    longitude: '',
    inchargeId: '',
    inchargeName: '',
    inchargeMobile: '',
    inchargeEmail: ''
  });

  const [rows] = useState<OfficeRow[]>([
    {
      officeNameEn: 'BEO, PANNA',
      officeNameHi: 'NA',
      officeCode: '231003OBS01',
      ddoCode: 'BLOCK EDUCATION OFFICER PANNA-2802003002',
      landline: 'NA',
      email: 'am6009987@gmail.com',
      status: true,
    }
  ]);

  const columns: TableColumn[] = [
    { field: 'officeNameEn', header: 'Office Name (In English)' },
    { field: 'officeNameHi', header: 'Office Name (In Hindi)' },
    { field: 'officeCode', header: 'Office Code No.' },
    { field: 'ddoCode', header: 'DDO Code No.' },
    { field: 'landline', header: 'Office Landline No.' },
    { field: 'email', header: 'Office Email ID' },
    {
      header: 'Status',
      body: (rowData: OfficeRow) => (
        <div className={`px-4 py-2 rounded text-white text-center text-xs font-bold ${rowData.status ? 'bg-green-500' : 'bg-red-500'}`}>
          {rowData.status ? 'Yes' : 'No'}
        </div>
      ),
      field: 'status'
    },
  ];

  if (!showForm) {
    return (
      <PageLayout title="Office Registration">
        <div className="flex justify-between items-center mb-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <span className="text-orange-600 font-bold"></span>
          <Button 
            label="Add New Office" 
            icon="pi pi-plus" 
            onClick={() => setShowForm(true)}
            style={{ backgroundColor: '#FF8A65', border: 'none' }} 
          />
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center">
            <h3 className="text-indigo-500 font-bold border-2 border-indigo-500 rounded-full px-4 py-1 text-sm">Office Details</h3>
            <div className="flex gap-2">
              <Button label="Export To Excel" icon="pi pi-file-excel" className="p-button-outlined p-button-secondary p-button-sm" />
              <span className="p-input-icon-left">
                <Input placeholder="Search..." className="p-inputtext-sm" />
              </span>
            </div>
          </div>
          <Table columns={columns} data={rows} showPagination rowsPerPage={50} />
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout title="Office Registration">
      <div className="flex justify-between items-center mb-4 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <span className="text-orange-600 font-bold"></span>
        <Button 
          label="Back to List" 
          icon="pi pi-undo" 
          className="p-button-secondary"
          onClick={() => setShowForm(false)}
          style={{ backgroundColor: '#FF8A65', border: 'none' }} 
        />
      </div>

      <div className="space-y-6 pt-4">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative">
          <h3 className="absolute -top-3 left-6 bg-white px-3 text-indigo-500 font-bold border-2 border-indigo-500 rounded-full text-xs py-1">Office Basic Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
            <Dropdown label="Office Type (Code)" required value={formData.officeType} options={[]} placeholder="--Select--" onChange={(e) => setFormData({...formData, officeType: e.value})} />
            <Input label="Office Name (In English)" required value={formData.officeNameEn} placeholder="Enter Office Name(In English)" onChange={(e) => setFormData({...formData, officeNameEn: e.target.value})} />
            <Input label="Office Name (In Hindi)" required value={formData.officeNameHi} placeholder="Enter Office Name(In Hindi)" onChange={(e) => setFormData({...formData, officeNameHi: e.target.value})} />
            <Input label="Code No." required value={formData.codeNo} placeholder="Enter Code No." onChange={(e) => setFormData({...formData, codeNo: e.target.value})} />
            <Dropdown label="Division (Code)" required value={formData.division} options={[]} placeholder="--Select--" onChange={(e) => setFormData({...formData, division: e.value})} />
            <Dropdown label="District (Code)" required value={formData.district} options={[]} placeholder="--Select--" onChange={(e) => setFormData({...formData, district: e.value})} />
            <Dropdown label="Block (Code)" required value={formData.block} options={[]} placeholder="--Select--" onChange={(e) => setFormData({...formData, block: e.value})} />
            <Dropdown label="Payment Authority DDO/Sankul (Code)" required value={formData.paymentAuthority} options={[]} placeholder="Select" onChange={(e) => setFormData({...formData, paymentAuthority: e.value})} />
            <Input label="Address Line -1" required value={formData.addressLine1} placeholder="Enter Address Line -1" onChange={(e) => setFormData({...formData, addressLine1: e.target.value})} />
            <Input label="Address Line -2" value={formData.addressLine2} placeholder="Enter Address(Line 2)" onChange={(e) => setFormData({...formData, addressLine2: e.target.value})} />
            <Input label="Pin Code" required value={formData.pinCode} placeholder="Enter Pincode" onChange={(e) => setFormData({...formData, pinCode: e.target.value})} />
            <Input label="Office Landline Number." required value={formData.landline} placeholder="Enter Office Landline Number" onChange={(e) => setFormData({...formData, landline: e.target.value})} />
            <Input label="Office Email ID" required value={formData.email} placeholder="Enter Office Email ID" onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <DateInput label="Office Establishment Date" required value={formData.establishmentDate} placeholder="dd/mm/yyyy" onChange={(e) => setFormData({...formData, establishmentDate: e.value as Date})} />
            <div className="flex items-center gap-2 self-end pb-2">
              <Checkbox inputId="status" checked={formData.status} onChange={e => setFormData({...formData, status: e.checked ?? false})} />
              <label htmlFor="status" className="text-sm text-blue-500">Status (Active/InActive)</label>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative">
          <h3 className="absolute -top-3 left-6 bg-white px-3 text-indigo-500 font-bold border-2 border-indigo-500 rounded-full text-xs py-1">Office Bank Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
            <Dropdown label="Bank Type" required value={formData.bankType} options={[]} placeholder="Select" onChange={(e) => setFormData({...formData, bankType: e.value})} />
            <Dropdown label="IFSC Code" required value={formData.ifscCode} options={[]} placeholder="Select" onChange={(e) => setFormData({...formData, ifscCode: e.value})} />
            <Dropdown label="Bank Name" required value={formData.bankName} options={[]} placeholder="Select" onChange={(e) => setFormData({...formData, bankName: e.value})} />
            <Input label="Bank Account Number" required value={formData.accountNumber} placeholder="Enter Account Number" onChange={(e) => setFormData({...formData, accountNumber: e.target.value})} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative">
          <h3 className="absolute -top-3 left-6 bg-white px-3 text-indigo-500 font-bold border-2 border-indigo-500 rounded-full text-xs py-1">Office Geographical Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
            <Input label="Latitude" value={formData.latitude} placeholder="Enter Latitude" onChange={(e) => setFormData({...formData, latitude: e.target.value})} />
            <Input label="Longitude" value={formData.longitude} placeholder="Enter Longitude" onChange={(e) => setFormData({...formData, longitude: e.target.value})} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 relative">
          <h3 className="absolute -top-3 left-6 bg-white px-3 text-indigo-500 font-bold border-2 border-indigo-500 rounded-full text-xs py-1">Office Incharge Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
            <Input label="Incharge Unique ID" required value={formData.inchargeId} placeholder="Enter Incharge Unique ID" onChange={(e) => setFormData({...formData, inchargeId: e.target.value})} />
            <Input label="Incharge Name" required value={formData.inchargeName} placeholder="Enter Incharge Name" onChange={(e) => setFormData({...formData, inchargeName: e.target.value})} />
            <Input label="Incharge Mobile Number" required value={formData.inchargeMobile} placeholder="Enter Incharge Mobile Number" onChange={(e) => setFormData({...formData, inchargeMobile: e.target.value})} />
            <Input label="Incharge Email ID" required value={formData.inchargeEmail} placeholder="Enter Incharge Email ID" onChange={(e) => setFormData({...formData, inchargeEmail: e.target.value})} />
          </div>
        </div>

        <div className="flex gap-3 pt-2">
          <Button label="Save" className="px-12 bg-green-600 border-none" />
          <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-12" />
        </div>
        <p className="text-red-500 font-bold text-sm italic">Note: All Asterisk (*) Marked Fields Are Mandatory</p>
      </div>
    </PageLayout>
  );
};

export default OfficeRegistrationForm;