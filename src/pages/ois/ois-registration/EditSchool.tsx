import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import {  Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { Dialog } from 'primereact/dialog';

interface SchoolRow {
  udiseCode: string;
  division: string;
  district: string;
  block: string;
  schoolName: string;
  board: string;
  managementGroup: string;
  category: string;
  categoryDetails: string;
  sankulName: string;
  schoolStatus: string;
}

const EditSchool: React.FC = () => {
  const [isSearched, setIsSearched] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [searchFilters, setSearchFilters] = useState({
    division: null,
    district: null,
    block: null
  });

  const [rows] = useState<SchoolRow[]>([
    {
      udiseCode: '23040410206',
      division: 'Gwalior',
      district: 'Gwalior',
      block: 'Morar Rural',
      schoolName: 'CMRISE GHSS BERJA MORAR(1 to 12)',
      board: 'MP Board',
      managementGroup: 'State Government',
      category: 'Higher Secondary School',
      categoryDetails: 'Higher Secondary with grades 1 to 12 (PRY-UPR-SEC-HSEC)',
      sankulName: '23040410206-CMRISE GHSS BERJA MORAR(1 to 12)',
      schoolStatus: 'Functional'
    }
  ]);

  const DataItem = ({ label, value }: { label: string; value: string }) => (
    <div className="flex border-b border-gray-100 py-2 text-xs">
      <span className="w-1/2 font-bold text-gray-700">{label}</span>
      <span className="w-1/2 text-gray-600">{value || 'NA'}</span>
    </div>
  );

  const columns: TableColumn[] = [
    { 
      field: 'udiseCode', 
      header: 'School UDISE Code',
      body: (rowData: SchoolRow) => (
        <span 
          className="text-blue-600 underline cursor-pointer font-bold" 
          onClick={() => setShowDetails(true)}
        >
          {rowData.udiseCode}
        </span>
      )
    },
    { field: 'division', header: 'Division' },
    { field: 'district', header: 'District' },
    { field: 'block', header: 'Block' },
    { field: 'schoolName', header: 'School Name' },
    { field: 'board', header: 'Board' },
    { field: 'managementGroup', header: 'Management Group' },
    { field: 'category', header: 'Category' },
    { field: 'categoryDetails', header: 'Category Details' },
    { field: 'sankulName', header: 'Sankul/AEO Name' },
    { field: 'schoolStatus', header: 'School Status' },
    {
      header: 'Action',
      body: () => (
        <Button icon="pi pi-pencil" className="p-button-outlined p-button-danger p-button-sm" />
      ),
      field: ''
    }
  ];

  return (
    <PageLayout title=" Edit School Details">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-orange-200 relative mb-8 mt-4">
        <h3 className="absolute -top-3 left-6 bg-white px-3 text-blue-600 font-bold border-2 border-blue-600 rounded-full text-xs py-1">
          Edit School Details
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-2">
          <Dropdown 
            label="Division Name (Code)" required
            value={searchFilters.division} 
            options={[{label: 'Gwalior -2', value: 'Gwalior -2'}]}
            placeholder="Select"
            onChange={(e) => setSearchFilters({...searchFilters, division: e.value})}
          />
          <Dropdown 
            label="District Name (Code)" required
            value={searchFilters.district} 
            options={[{label: 'Gwalior- (04)', value: 'Gwalior- (04)'}]}
            placeholder="Select"
            onChange={(e) => setSearchFilters({...searchFilters, district: e.value})}
          />
          <Dropdown 
            label="Block Name (Code)" required
            value={searchFilters.block} 
            options={[{label: 'Morar Rural-(20)', value: 'Morar Rural-(20)'}]}
            placeholder="Select"
            onChange={(e) => setSearchFilters({...searchFilters, block: e.value})}
          />
        </div>

        <div className="flex gap-3 mt-6  pt-4">
          <Button label="Search" onClick={() => setIsSearched(true)} className="p-button text-teal-600 border-teal-600 px-8" />
          <Button label="Clear" onClick={() => {setIsSearched(false); setSearchFilters({division:null, district:null, block:null})}} className="p-button-outlined p-button-danger px-8" />
        </div>
        <p className="text-red-600 font-bold text-xs mt-4">Note: Only State Government Schools can be Edit After Approval.</p>
      </div>

      {isSearched && (
        <div className="bg-white rounded-lg shadow-sm border border-orange-200 relative overflow-hidden">
          <h3 className="absolute top-3 left-6 bg-white px-3 text-blue-600 font-bold border-2 border-blue-600 rounded-full text-xs py-1 z-10">
            School Verification Details
          </h3>
          <div className="pt-12">
            <Table columns={columns} data={rows} showPagination rowsPerPage={50} scrollable />
          </div>
        </div>
      )}

      <Dialog 
        header="School Details" 
        visible={showDetails} 
        style={{ width: '80vw' }} 
        onHide={() => setShowDetails(false)}
        maximizable
      >
        <div className="space-y-6">
          <div className="border border-orange-300 rounded p-4 relative">
            <h4 className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold border border-blue-600 rounded-full text-xs">School Basic Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mt-2">
              <DataItem label="Academic Year" value="2024-25" />
              <DataItem label="School UDISE Code" value="23040410206" />
              <DataItem label="School Name" value="CMRISE GHSS BERJA MORAR(1 to 12)" />
              <DataItem label="Year of Establishment" value="2008" />
              <DataItem label="Board Type" value="MP Board" />
              <DataItem label="Board Code" value="141097" />
              <DataItem label="School Type" value="Co-Educational" />
              <DataItem label="School Category" value="Higher Secondary School" />
            </div>
          </div>

          <div className="border border-orange-300 rounded p-4 relative">
            <h4 className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold border border-blue-600 rounded-full text-xs">School Address Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mt-2">
              <DataItem label="Division" value="Gwalior" />
              <DataItem label="District" value="Gwalior" />
              <DataItem label="Tehsil" value="Gwalior" />
              <DataItem label="Block" value="Morar Rural" />
              <DataItem label="Local Body" value="Janpad Panchayat, MORAR(RURAL)" />
              <DataItem label="Village/Ward" value="Berja" />
              <DataItem label="Pincode" value="474006" />
              <DataItem label="Assembly (Vidhansabha)" value="Gwalior Rural" />
            </div>
          </div>

          <div className="border border-orange-300 rounded p-4 relative">
            <h4 className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold border border-blue-600 rounded-full text-xs">School Contact Details</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mt-2">
              <DataItem label="School Head Type (Code)" value="Acting Head Teacher" />
              <DataItem label="Employee Unique ID" value="AR1642" />
              <DataItem label="Employee Name" value="Dharmendra Singh Rana" />
              <DataItem label="Employee Designation" value="Ucch Madhyamik Shikshak" />
              <DataItem label="Employee Mobile No." value="9827256244" />
              <DataItem label="Employee Email ID" value="rana38410@gmail.com" />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button label="Close" onClick={() => setShowDetails(false)} className="p-button-outlined p-button-danger px-8" />
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default EditSchool;