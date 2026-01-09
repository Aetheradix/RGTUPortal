import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { Dialog } from 'primereact/dialog';
import { Checkbox } from 'primereact/checkbox';

interface InstituteRow {
  divisionName: string;
  districtName: string;
  blockName: string;
  instituteNameEn: string;
  instituteNameHi: string;
  instituteCode: string;
  status: boolean;
}

const InstituteRegistrationForm: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'edit' | 'view'>('add');
  const [formData, setFormData] = useState({
    academicYear: '2024-25',
    instituteType: 'DIET/DRC',
    instituteCode: '',
    instituteNameEn: '',
    instituteNameHi: 'NA',
    establishmentYear: '0',
    managementGroup: 'NA',
    managementGroupDetails: 'NA',
    instituteShift: 'Unknown',
    isResidential: 'No',
    hostelFacility: 'No',
    isActive: true,
    division: '',
    district: '',
    tehsil: 'NA',
    block: '',
    localBody: 'NA',
    zonePanchayat: 'NA',
    villageWard: 'NA',
    habitation: 'NA',
    paymentAuthority: '-',
    addressLine1: 'NA',
    addressLine2: 'NA',
    pinCode: 'NA',
    parliament: 'NA',
    assembly: 'NA',
    inchargeId: 'NA',
    inchargeName: 'NA',
    inchargeDesignation: 'NA',
    inchargeMobile: 'NA',
    inchargeEmail: 'NA',
    landlineNo: 'NA',
    instituteEmail: 'NA',
    website: 'NA',
    bankType: 'NA',
    ifscCode: 'NA',
    bankName: 'NA',
    accountNo: 'NA'
  });

  const [rows] = useState<InstituteRow[]>([
    { divisionName: 'Indore', districtName: 'Burhanpur', blockName: 'Burhanpur', instituteNameEn: 'DIET, Burhanpur', instituteNameHi: 'NA', instituteCode: '234802IDS01', status: true },
    {  divisionName: 'Shahdol', districtName: 'Anuppur', blockName: 'Anuppur', instituteNameEn: 'DIET, Anuppur', instituteNameHi: 'NA', instituteCode: '234701IDS02', status: true },
  ]);

  const openModal = (type: 'add' | 'edit' | 'view', data?: InstituteRow) => {
    setModalType(type);
    if (data) {
      setFormData({
        ...formData,
        instituteNameEn: data.instituteNameEn,
        instituteNameHi: data.instituteNameHi,
        instituteCode: data.instituteCode,
        division: data.divisionName,
        district: data.districtName,
        block: data.blockName,
        isActive: data.status
      });
    } else {
      setFormData({
        academicYear: '2025-26',
        instituteType: '',
        instituteCode: '',
        instituteNameEn: '',
        instituteNameHi: '',
        establishmentYear: '',
        managementGroup: '',
        managementGroupDetails: '',
        instituteShift: '',
        isResidential: '',
        hostelFacility: '',
        isActive: true,
        division: '',
        district: '',
        tehsil: '',
        block: '',
        localBody: '',
        zonePanchayat: '',
        villageWard: '',
        habitation: '',
        paymentAuthority: '',
        addressLine1: '',
        addressLine2: '',
        pinCode: '',
        parliament: '',
        assembly: '',
        inchargeId: '',
        inchargeName: '',
        inchargeDesignation: '',
        inchargeMobile: '',
        inchargeEmail: '',
        landlineNo: '',
        instituteEmail: '',
        website: '',
        bankType: '',
        ifscCode: '',
        bankName: '',
        accountNo: ''
      });
    }
    setVisible(true);
  };

  const columns: TableColumn[] = [
    { field: 'divisionName', header: 'Division Name' },
    { field: 'districtName', header: 'District Name' },
    { field: 'blockName', header: 'Block Name' },
    { field: 'instituteNameEn', header: 'Institute Name (In English)' },
    { field: 'instituteNameHi', header: 'Institute Name (In Hindi)' },
    { field: 'instituteCode', header: 'Institute Code.' },
    {
      header: 'Status',
      body: (rowData: InstituteRow) => (
        <div className={`px-3 py-2 rounded text-white text-center text-xs font-bold ${rowData.status ? 'bg-green-500' : 'bg-red-500'}`}>
          {rowData.status ? 'Yes' : 'No'}
        </div>
      ),
      field: 'status'
    },
    {
      header: 'Actions',
      body: ( ) => (
        <div className="flex gap-1">
          <Button icon="pi pi-pencil" className="p-button-outlined p-button-warning p-button-sm"  />
          <Button icon="pi pi-eye" className="p-button-outlined p-button-info p-button-sm"  />
        </div>
      ),
      field: ''
    }
  ];

  const renderField = (label: string, fieldKey: keyof typeof formData, required: boolean = false) => (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold text-gray-700">{label} {required && <span className="text-red-500">*</span>}</label>
      {modalType === 'view' ? (
        <div className="p-2 bg-gray-50 border rounded text-sm font-semibold text-gray-900">{formData[fieldKey] || 'NA'}</div>
      ) : (
        <Input  placeholder={`Enter ${label}`} onChange={(e) => setFormData({ ...formData, [fieldKey]: e.target.value })} />
      )}
    </div>
  );

  const renderDropdown = (label: string, fieldKey: keyof typeof formData, required: boolean = false) => (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold text-gray-700">{label} {required && <span className="text-red-500">*</span>}</label>
      {modalType === 'view' ? (
        <div className="p-2 bg-gray-50 border rounded text-sm font-semibold text-gray-900">{formData[fieldKey] || 'NA'}</div>
      ) : (
        <Dropdown value={formData[fieldKey]} options={[]} placeholder="Select" onChange={(e) => setFormData({ ...formData, [fieldKey]: e.value })} />
      )}
    </div>
  );

  return (
    <PageLayout title="Institute Registration">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4 flex justify-between items-center">
        <span className="text-orange-600 font-bold text-sm"></span>
        <Button label="Add New Institute" icon="pi pi-plus" onClick={() => openModal('add')} style={{ backgroundColor: '#FF8A65', border: 'none' }} />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="text-blue-600 font-bold border-2 border-blue-600 rounded-full px-4 py-1 text-sm">Institute Details</h3>
          <div className="flex gap-2">
            <Button label="Export To Excel" icon="pi pi-file-excel" className="p-button-outlined p-button-secondary p-button-sm" />
            <div className="p-input-icon-left">
              <Input placeholder="Search..." className="p-inputtext-sm" />
            </div>
          </div>
        </div>
        <Table columns={columns} data={rows} showPagination rowsPerPage={50} />
      </div>

      <Dialog 
        header={<span className="text-blue-600 font-bold">Institute Registration</span>} 
        visible={visible} 
        style={{ width: '90vw' }} 
        onHide={() => setVisible(false)}
        maximizable
      >
        <div className="space-y-8 p-2">
          <div className="border border-gray-200 rounded-lg p-5 relative mt-4">
            <h4 className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold border-2 border-blue-600 rounded-full text-xs py-1">Institute Basic Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
              {renderDropdown('Academic Year', 'academicYear', true)}
              {renderDropdown('Institute Type (Code)', 'instituteType', true)}
              {renderField('Institute Code', 'instituteCode', true)}
              {renderField('Institute Name (In English)', 'instituteNameEn', true)}
              {renderField('Institute Name (In Hindi)', 'instituteNameHi')}
              {renderField('Year of Establishment', 'establishmentYear', true)}
              {renderDropdown('Management Group (Code)', 'managementGroup', true)}
              {renderDropdown('Management Group Details (Code)', 'managementGroupDetails', true)}
              {renderDropdown('Institute Shift', 'instituteShift', true)}
              {renderDropdown('Is Institute Residential', 'isResidential', true)}
              {renderDropdown('Hostel Facility', 'hostelFacility', true)}
              <div className="flex items-center gap-2 pt-6">
                <Checkbox checked={formData.isActive} disabled={modalType === 'view'} onChange={e => setFormData({...formData, isActive: e.checked ?? false})} />
                <label className="text-xs text-blue-500 font-bold">Status (Active/InActive)</label>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 relative mt-4">
            <h4 className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold border-2 border-blue-600 rounded-full text-xs py-1">Institute Address Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
              {renderDropdown('Division (Code)', 'division', true)}
              {renderDropdown('District (Code)', 'district', true)}
              {renderDropdown('Tehsil (Code)', 'tehsil', true)}
              {renderDropdown('Block (Code)', 'block', true)}
              {renderDropdown('Local Body', 'localBody', true)}
              {renderDropdown('Zone/Panchayat (Code)', 'zonePanchayat', true)}
              {renderDropdown('Village/Ward (Code)', 'villageWard', true)}
              {renderDropdown('Habitation (Code)', 'habitation')}
              {renderDropdown('Payment Authority DDO/Sankul (Code)', 'paymentAuthority', true)}
              {renderField('Institute Address (Line 1)', 'addressLine1', true)}
              {renderField('Institute Address (Line 2)', 'addressLine2')}
              {renderField('Pin Code', 'pinCode', true)}
              {renderDropdown('Parliament (Code)', 'parliament', true)}
              {renderDropdown('Assembly (Code)', 'assembly', true)}
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 relative mt-4">
            <h4 className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold border-2 border-blue-600 rounded-full text-xs py-1">Institute Contact Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
              {renderField('Incharge Unique Id', 'inchargeId', true)}
              {renderField('Incharge Name', 'inchargeName', true)}
              {renderDropdown('Incharge Designation (Code)', 'inchargeDesignation', true)}
              {renderField('Incharge Mobile No', 'inchargeMobile', true)}
              {renderField('Incharge Email ID', 'inchargeEmail', true)}
              {renderField('Institute Landline No.', 'landlineNo', true)}
              {renderField('Institute Email ID', 'instituteEmail', true)}
              {renderField('Institute Website', 'website')}
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg p-5 relative mt-4">
            <h4 className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold border-2 border-blue-600 rounded-full text-xs py-1">Institute Bank Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
              {renderDropdown('Bank Type', 'bankType')}
              {renderDropdown('IFSC Code', 'ifscCode')}
              {renderDropdown('Bank Name', 'bankName')}
              {renderField('Account No.', 'accountNo')}
            </div>
          </div>

          {modalType !== 'view' && (
            <div className="flex gap-3 pt-4">
              <Button label="Save" className="px-10 bg-green-600 border-none text-sm" />
              <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-10 text-sm" />
            </div>
          )}
          {modalType !== 'view' && <p className="text-red-500 font-bold text-xs">Note: All Asterisk (*) Marked Fields Are Mandatory</p>}
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default InstituteRegistrationForm;