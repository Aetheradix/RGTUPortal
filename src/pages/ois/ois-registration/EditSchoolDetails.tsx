import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown } from '../../../ui/shared';
import { RadioButton } from 'primereact/radiobutton';
// import { Dialog } from 'primereact/dialog';

const EditSchoolDetails: React.FC = () => {
  const [searchMode, setSearchMode] = useState<'udise' | 'filter'>('udise');

  //const [showDetails, setShowDetails] = useState(false);
  const [filters, setFilters] = useState({
    udiseCode: '',
    division: 'All',
    district: 'All',
    block: 'All',
    mgmtGroup: 'All',
    mgmtGroupDetails: 'All',
    category: 'All',
    categoryDetails: 'All'
  });

  // const schoolData = [
  //   {
  //     srNo: 1,
  //     udiseCode: '23040410206',
  //     division: 'Gwalior',
  //     district: 'Gwalior',
  //     block: 'Morar Rural',
  //     schoolName: 'CMRISE GHSS BERJA MORAR(1 to 12)',
  //     board: 'MP Board',
  //     mgmtGroup: 'State Government',
  //     category: 'Higher Secondary School',
  //     categoryDetails: 'Higher Secondary with grades 1 to 12 (PRY-UPR-SEC-HSEC)',
  //     sankul: '23040410206-CMRISE GHSS BERJA MORAR(1 to 12)',
  //     status: 'Functional'
  //   }
  // ];

  // const columns: TableColumn[] = [
  //   { field: 'srNo', header: 'Sr.No.', style: { width: '50px' } },
  //   { 
  //     field: 'udiseCode', 
  //     header: 'School UDISE Code',
  //     body: (row: any) => (
  //       <span className="text-blue-600 underline cursor-pointer font-bold" onClick={() => setShowDetails(true)}>
  //         {row.udiseCode}
  //       </span>
  //     )
  //   },
  //   { field: 'division', header: 'Division' },
  //   { field: 'district', header: 'District' },
  //   { field: 'block', header: 'Block' },
  //   { field: 'schoolName', header: 'School Name' },
  //   { field: 'board', header: 'Board' },
  //   { field: 'mgmtGroup', header: 'Management Group' },
  //   { field: 'category', header: 'Category' },
  //   { field: 'categoryDetails', header: 'Category Details' },
  //   { field: 'sankul', header: 'Sankul/AEO Name' },
  //   { field: 'status', header: 'School Status' },
  //   {
  //     header: 'Action',
  //     body: () => <Button icon="pi pi-pencil" className="p-button-outlined p-button-danger p-button-sm" />,
  //     field: ''
  //   }
  // ];

  // const DataRow = ({ label, value }: { label: string; value: string }) => (
  //   <div className="grid grid-cols-2 border-b border-gray-100 py-2 text-xs">
  //     <span className="font-bold text-gray-700">{label}</span>
  //     <span className="text-gray-600">{value || 'NA'}</span>
  //   </div>
  // );

  return (
    <PageLayout title=" Edit School Details">
      <div className="flex justify-between items-center mb-4">
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-orange-200 relative mb-6">
        <span className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold text-sm">
          School Verification Request
        </span>

        <div className="flex gap-10 mt-4 mb-6">
          <div className="flex items-center">
            <RadioButton inputId="mode1" value="udise" onChange={() => setSearchMode('udise')} checked={searchMode === 'udise'} />
            <label htmlFor="mode1" className="ml-2 text-sm font-bold text-blue-600">By UDISE Code</label>
          </div>
          <div className="flex items-center">
            <RadioButton inputId="mode2" value="filter" onChange={() => setSearchMode('filter')} checked={searchMode === 'filter'} />
            <label htmlFor="mode2" className="ml-2 text-sm font-bold text-blue-600">By Filter</label>
          </div>
        </div>

        {searchMode === 'udise' ? (
          <div className="max-w-xs">
            <label className="block text-xs font-bold text-blue-500 mb-1">UDISE Code</label>
            <Input 
              value={filters.udiseCode} 
              onChange={(e) => setFilters({...filters, udiseCode: e.target.value})} 
              placeholder="Enter UDISE Code" 
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Dropdown label="Division Name (Code)" required value={filters.division} options={[{label:'All', value:'All'}]} onChange={(e) => setFilters({...filters, division: e.value})} />
            <Dropdown label="District Name (Code)" required value={filters.district} options={[{label:'All', value:'All'}]} onChange={(e) => setFilters({...filters, district: e.value})} />
            <Dropdown label="Block Name (Code)" value={filters.block} options={[{label:'All', value:'All'}]} onChange={(e) => setFilters({...filters, block: e.value})} />
            <Dropdown label="Management Group (Code)" value={filters.mgmtGroup} options={[{label:'All', value:'All'}]} onChange={(e) => setFilters({...filters, mgmtGroup: e.value})} />
            <Dropdown label="Management Group Details (Code)" value={filters.mgmtGroupDetails} options={[{label:'All', value:'All'}]} onChange={(e) => setFilters({...filters, mgmtGroupDetails: e.value})} />
            <Dropdown label="Category (Code)" value={filters.category} options={[{label:'All', value:'All'}]} onChange={(e) => setFilters({...filters, category: e.value})} />
            <Dropdown label="Category Details (Code)" value={filters.categoryDetails} options={[{label:'All', value:'All'}]} onChange={(e) => setFilters({...filters, categoryDetails: e.value})} />
          </div>
        )}

        <div className="flex gap-3 mt-6 pt-4">
          <Button label="Search"  className="p-button text-teal-600 border-teal-600 px-8 font-bold" />
          <Button label="Clear"  className="p-button-outlined p-button-danger px-8 font-bold" />
        </div>
      </div>
{/* 
      {isSearched && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-orange-200 relative mb-6">
          <h3 className="absolute -top-3 left-6 bg-white px-3 text-blue-600 font-bold border-2 border-blue-600 rounded-full text-xs py-1">
          School Verification Request
        </h3>
          <div className=" p-4">
             <div className="flex gap-2">
                       <Button label="Export To Excel" icon="pi pi-file-excel" className="p-button-outlined p-button-secondary p-button-sm" />
                       <div className="p-input-icon-left">
                         <Input placeholder="Search..." className="p-inputtext-sm" />
                       </div>
                     </div>
            <Table columns={columns} data={schoolData} showPagination rowsPerPage={50} scrollable />
          </div>
        </div>
      )}

      <Dialog header="School Details" visible={showDetails} style={{ width: '85vw' }} onHide={() => setShowDetails(false)} maximizable>
        <div className="space-y-6 p-2">
          <div className="border border-orange-300 rounded p-4 relative">
            <h4 className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold border border-blue-600 rounded-full text-xs">School Basic Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mt-2">
              <DataRow label="Academic Year" value="2024-25" />
              <DataRow label="School UDISE Code" value="23040410206" />
              <DataRow label="School Name" value="CMRISE GHSS BERJA MORAR(1 to 12)" />
              <DataRow label="Year of Establishment" value="2008" />
              <DataRow label="Board Type" value="MP Board" />
              <DataRow label="Board Code" value="141097" />
              <DataRow label="School Type" value="Co-Educational" />
              <DataRow label="School Category" value="Higher Secondary School" />
            </div>
          </div>

          <div className="border border-orange-300 rounded p-4 relative">
            <h4 className="absolute -top-3 left-4 bg-white px-2 text-blue-600 font-bold border border-blue-600 rounded-full text-xs">School Address Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 mt-2">
              <DataRow label="Division" value="Gwalior" />
              <DataRow label="District" value="Gwalior" />
              <DataRow label="Block" value="Morar Rural" />
              <DataRow label="Village/Ward" value="Berja" />
              <DataRow label="Pincode" value="474006" />
              <DataRow label="Assembly (Vidhansabha)" value="Gwalior Rural" />
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <Button label="Close" onClick={() => setShowDetails(false)} className="p-button-outlined p-button-danger px-10" />
          </div>
        </div>
      </Dialog> */}
    </PageLayout>
  );
};

export default EditSchoolDetails;