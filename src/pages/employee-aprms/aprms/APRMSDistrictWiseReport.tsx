import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Dropdown, Table, type TableColumn } from '../../../ui/shared';

// District Wise Report interface
interface DistrictReportRow {
  districtName: string;
  totalEmployees: number;
}

const APRMSDistrictWiseReport: React.FC = () => {
  // Filter States
  const [filters, setFilters] = useState({
    district: null,
    department: null,
    annualYear: '2026-2027'
  });

  // Table Data (Based on image_a7fe4a.png)
  const [reportData] = useState<DistrictReportRow[]>([
    { districtName: 'Bhopal', totalEmployees: 50 },
    { districtName: 'Indore', totalEmployees: 70 },
    { districtName: 'Sagar', totalEmployees: 78 },
    { districtName: 'Sehore', totalEmployees: 40 },
  ]);

  const yearOptions = [{ label: '2026-2027', value: '2026-2027' }];
  const districtOptions = [{ label: 'Bhopal', value: 'Bhopal' }, { label: 'Indore', value: 'Indore' }];
  const deptOptions = [{ label: 'Education', value: 'Education' }, { label: 'Revenue', value: 'Revenue' }];

  const columns: TableColumn[] = [
  
    { field: 'districtName', header: 'District Name' },
    { 
      field: 'totalEmployees', 
      header: 'Total Employees',
      body: (rowData: DistrictReportRow) => (
        <span className="text-blue-500 cursor-pointer hover:underline font-medium">
          {rowData.totalEmployees}
        </span>
      )
    },
  ];

  const handleClear = () => {
    setFilters({ district: null, department: null, annualYear: '2026-2027' });
  };

  return (
    <PageLayout title="Annual Property Returns District Wise Report">
      
      {/* Search Filter Section (Image Reference: image_a7fe47.png) */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              District <span className="text-red-500">*</span>
            </label>
            <Dropdown 
              value={filters.district} 
              options={districtOptions} 
              onChange={(e) => setFilters({...filters, district: e.value})} 
              placeholder="Select"
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Department</label>
            <Dropdown 
              value={filters.department} 
              options={deptOptions} 
              onChange={(e) => setFilters({...filters, department: e.value})} 
              placeholder="Select"
              className="w-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Annual Year</label>
            <Dropdown 
              value={filters.annualYear} 
              options={yearOptions} 
              onChange={(e) => setFilters({...filters, annualYear: e.value})} 
              className="w-full"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-6 flex justify-center gap-3">
          <Button 
            label="Search" 
            className="px-8 py-2 text-white" 
            style={{ backgroundColor: '#6366F1', border: 'none' }}
          />
          <Button 
            label="Clear" 
            onClick={handleClear}
            className="p-button-danger p-button-outlined px-12" 
          />
        </div>
      </div>

      {/* Details Table Section (Image Reference: image_a7fe4a.png) */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800">Details</h3>
        </div>
        
        <Table 
          columns={columns} 
          data={reportData} 
          showPagination 
          rowsPerPage={10} 
        />
      </div>

    
    </PageLayout>
  );
};

export default APRMSDistrictWiseReport;