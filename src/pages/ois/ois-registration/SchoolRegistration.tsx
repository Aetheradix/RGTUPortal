import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table } from '../../../ui/shared';
import { Dialog } from 'primereact/dialog';
import { Checkbox } from 'primereact/checkbox';
import { DateInput } from '../../../ui/shared/Input';

interface SchoolRow {
  udiseCode: string;
  schoolNameEn: string;
  schoolNameHi: string;
  division: string;
  district: string;
  block: string;
  status: boolean;
}

const SchoolRegistrationForm: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'edit' | 'view'>('add');
  
  const [formData, setFormData] = useState({
    academicYear: '2025-26',
    udiseCode: '',
    schoolNameEn: '',
    schoolNameHi: '',
    establishmentYear: '',
    boardType: '',
    boardCode: '',
    schoolType: '',
    schoolCategory: '',
    categoryDetails: '',
    managementGroup: '',
    managementGroupDetails: '',
    recognitionNo: '',
    recognitionValidFrom: null as Date | null,
    recognitionValidTo: null as Date | null,
    schoolMedium: 'हिन्दी- (1)',
    minorityCommunity: 'NA- (6)',
    schoolShift: '',
    isResidential: 'NA',
    specialSchool: 'NA- (00)',
    schoolStatus: 'Functional',
    hostelAttach: 'NA',
    hasUrdu: 'NA',
    isActive: true,
    division: '',
    district: '',
    tehsil: '',
    block: '',
    localBody: '',
    zonePanchayat: '',
    villageWard: '',
    habitation: '',
    jskCode: '',
    sankulCode: '',
    distHabitationAir: '',
    distHabitationRoad: '',
    addressLine1: '',
    addressLine2: '',
    pinCode: '',
    parliament: '',
    assembly: '',
    headType: '',
    empUniqueId: '',
    empName: '',
    empDesignation: '',
    empMobile: '',
    empEmail: '',
    landlineNo: '',
    schoolEmail: '',
    website: '',

    latitude: '',
    longitude: ''
  });

  const [rows] = useState<SchoolRow[]>([
    {  udiseCode: '23010100101', schoolNameEn: 'Govt. Excellence School', schoolNameHi: 'शासकीय उत्कृष्ट विद्यालय', division: 'Indore', district: 'Dhar', block: 'Dhar', status: true },
  ]);

  const openModal = (type: 'add' | 'edit' | 'view', data?: any) => {
    setModalType(type);
    if (data) {
      setFormData({ ...formData, ...data });
    } else {
    }
    setVisible(true);
  };

  const renderField = (label: string, fieldKey: keyof typeof formData, required: boolean = false, placeholder?: string) => (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold text-gray-700">{label} {required && <span className="text-red-500">*</span>}</label>
      {modalType === 'view' ? (
        <div className="p-2 bg-gray-50 border rounded text-sm font-semibold text-gray-900">{String(formData[fieldKey] || 'NA')}</div>
      ) : (
        <Input 
          value={String(formData[fieldKey] || '')} 
          placeholder={placeholder || `Enter ${label}`} 
          onChange={(e) => setFormData({ ...formData, [fieldKey]: e.target.value })} 
        />
      )}
    </div>
  );

  const renderDropdown = (label: string, fieldKey: keyof typeof formData, required: boolean = false) => (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold text-gray-700">{label} {required && <span className="text-red-500">*</span>}</label>
      {modalType === 'view' ? (
        <div className="p-2 bg-gray-50 border rounded text-sm font-semibold text-gray-900">{String(formData[fieldKey] || 'NA')}</div>
      ) : (
        <Dropdown 
          value={formData[fieldKey]} 
          options={[]} 
          placeholder="Select" 
          onChange={(e) => setFormData({ ...formData, [fieldKey]: e.value })} 
        />
      )}
    </div>
  );

  return (
    <PageLayout title="School Registration">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4 flex justify-between items-center">
        <span className="text-orange-600 font-bold text-sm"></span>
        <Button label="Add New School" icon="pi pi-plus" onClick={() => openModal('add')} style={{ backgroundColor: '#6366f1', border: 'none' }} />
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <Table 
          columns={[
            { field: 'udiseCode', header: 'UDISE Code' },
            { field: 'schoolNameEn', header: 'School Name (English)' },
            { field: 'district', header: 'District' },
            { field: 'block', header: 'Block' },
            {
                header: 'Status',
                body: (d: any) => <span className={`px-3 py-2 rounded text-white text-xs ${d.status ? 'bg-green-500' : 'bg-red-500'}`}>{d.status ? 'Yes' : 'No'}</span>,
                field: ''
            },
            {
                header: 'Actions',
                body: (rowData: any) => (
                    <div className="flex gap-1">
                        <Button icon="pi pi-pencil" className="p-button-outlined p-button-warning p-button-sm" onClick={() => openModal('edit', rowData)} />
                        <Button icon="pi pi-eye" className="p-button-outlined p-button-info p-button-sm" onClick={() => openModal('view', rowData)} />
                    </div>
                ),
                field: ''
            }
          ]} 
          data={rows} 
          showPagination 
        />
      </div>

      <Dialog 
        header={<span className="text-blue-600 font-bold">School Registration</span>} 
        visible={visible} 
        style={{ width: '95vw' }} 
        onHide={() => setVisible(false)}
        maximizable
      >
        <div className="space-y-8 p-2">
          
          <div className="  rounded-lg p-5 relative mt-4">
            <span className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold text-sm">School Basic Information</span>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
              {renderDropdown('Academic Year', 'academicYear', true)}
              {renderField('School UDISE Code', 'udiseCode', true)}
              {renderField('School Name (In English)', 'schoolNameEn', true)}
              {renderField('School Name (In Hindi)', 'schoolNameHi')}
              {renderField('Year of Establishment', 'establishmentYear', true, 'YYYY')}
              {renderDropdown('Board Type (Code)', 'boardType', true)}
              {renderField('Board (Code)', 'boardCode')}
              {renderDropdown('School Type (Code)', 'schoolType', true)}
              {renderDropdown('School Category (Code)', 'schoolCategory', true)}
              {renderDropdown('School Category Details (Code)', 'categoryDetails', true)}
              {renderDropdown('Management Group (Code)', 'managementGroup', true)}
              {renderDropdown('Management Group Details (Code)', 'managementGroupDetails', true)}
              {renderField('Recognition No.', 'recognitionNo', true)}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-700">Recognition Valid From <span className="text-red-500">*</span></label>
                <DateInput value={formData.recognitionValidFrom} onChange={(e) => setFormData({...formData, recognitionValidFrom: e.value as Date})} disabled={modalType === 'view'} />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-700">Recognition Valid To <span className="text-red-500">*</span></label>
                <DateInput value={formData.recognitionValidTo} onChange={(e) => setFormData({...formData, recognitionValidTo: e.value as Date})} disabled={modalType === 'view'} />
              </div>
              {renderDropdown('School Medium (Code)', 'schoolMedium', true)}
              {renderDropdown('Minority Community (Code)', 'minorityCommunity')}
              {renderDropdown('School Shift', 'schoolShift', true)}
              {renderDropdown('Is School Residential', 'isResidential', true)}
              {renderDropdown('Special School (Code)', 'specialSchool', true)}
              {renderDropdown('School Status', 'schoolStatus', true)}
              {renderDropdown('Hostel Attach', 'hostelAttach', true)}
              {renderDropdown('Has URDU', 'hasUrdu', true)}
              <div className="flex items-center gap-2 pt-6">
                <Checkbox checked={formData.isActive} disabled={modalType === 'view'} onChange={e => setFormData({...formData, isActive: e.checked ?? false})} />
                <label className="text-xs text-blue-500 font-bold">Status (Active/InActive)</label>
              </div>
            </div>
          </div>

          <div className="  rounded-lg p-5 relative mt-4">
            <span className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold text-sm">School Address Information</span>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
              {renderDropdown('Division (Code)', 'division', true)}
              {renderDropdown('District (Code)', 'district', true)}
              {renderDropdown('Tehsil (Code)', 'tehsil', true)}
              {renderDropdown('Block (Code)', 'block', true)}
              {renderDropdown('Local Body', 'localBody', true)}
              {renderDropdown('Zone/Panchayat (Code)', 'zonePanchayat', true)}
              {renderDropdown('Village/Ward (Code)', 'villageWard', true)}
              {renderDropdown('Habitation (Code)', 'habitation')}
              {renderDropdown('JSK (Code)', 'jskCode', true)}
              {renderDropdown('Sankul/AEO (Code)', 'sankulCode', true)}
              {renderField('Distance Habitation to School by Air(in Km)', 'distHabitationAir')}
              {renderField('Distance Habitation to School by Road(in Km)', 'distHabitationRoad')}
              {renderField('School Address Line -1', 'addressLine1')}
              {renderField('Address Line -2', 'addressLine2')}
              {renderField('Pincode', 'pinCode')}
              {renderDropdown('Parliament (Code)', 'parliament', true)}
              {renderDropdown('Assembly (Code)', 'assembly', true)}
            </div>
          </div>

          <div className="  rounded-lg p-5 relative mt-4">
            <span className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold text-sm">School Contact Details</span>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
              {renderDropdown('School Head Type (Code)', 'headType')}
              {renderField('Employee Unique ID', 'empUniqueId', true)}
              {renderField('Employee Name', 'empName', true)}
              {renderDropdown('Employee Designation (Code)', 'empDesignation', true)}
              {renderField('Employee Mobile No.', 'empMobile', true)}
              {renderField('Employee Email ID', 'empEmail', true)}
              {renderField('School Landline No.', 'landlineNo')}
              {renderField('School Email ID', 'schoolEmail')}
              {renderField('School Website', 'website')}
            </div>
          </div>

          <div className="  rounded-lg p-5 relative mt-4">
             <span className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold text-sm">School Geographical Data</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              {renderField('Latitude', 'latitude')}
              {renderField('Longitude', 'longitude')}
            </div>
          </div>

          {modalType !== 'view' && (
            <div className="flex gap-3 pt-4">
              <Button label="Save" className="px-10 bg-green-600 border-none text-sm font-bold" />
              <Button type="button" label="Clear" className="p-button-danger p-button-outlined px-10 text-sm font-bold" />
            </div>
          )}
          {modalType !== 'view' && <p className="text-red-500 font-bold text-xs mt-2">Note: All Asterisk (*) Marked Fields Are Mandatory</p>}
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default SchoolRegistrationForm;