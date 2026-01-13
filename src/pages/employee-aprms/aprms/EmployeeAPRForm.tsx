import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Input, Dropdown, Table, type TableColumn } from '../../../ui/shared';
import { DateInput } from '../../../ui/shared/Input';

interface PropertyReportRow {
  financialYear: string;
  employeeName: string;
  designation: string;
  employeeCode: string;
  currentSalary: string;
  incrementDate: string;
  division: string;
  district: string;
  block: string;
  gramPanchayat: string;
}

const EmployeeAPRForm: React.FC = () => {
  const [isApplicable, setIsApplicable] = useState(true);

  // --- Dropdown Options Data ---
  const financialYearOptions = [
    { label: '2024-2025', value: '2024-2025' },
    { label: '2025-2026', value: '2025-2026' },
    { label: '2026-2027', value: '2026-2027' },
  ];

  const propertyDetailOptions = [
    { label: 'Residential House', value: 'Residential House' },
    { label: 'Agricultural Land', value: 'Agricultural Land' },
    { label: 'Commercial Plot', value: 'Commercial Plot' },
  ];

  const ownerOptions = [
    { label: 'Self', value: 'Self' },
    { label: 'Spouse', value: 'Spouse' },
    { label: 'Joint', value: 'Joint' },
  ];

  const sourceOptions = [
    { label: 'Purchase', value: 'Purchase' },
    { label: 'Inheritance', value: 'Inheritance' },
    { label: 'Gift', value: 'Gift' },
  ];

  // --- Form State ---
  const [formData, setFormData] = useState({
    financialYear: '2026-2027',
    employeeName: 'Rajesh Agrawal',
    designation: 'Primary Teacher (PRT)',
    employeeCode: 'AB4545',
    currentSalary: '25000',
    incrementDate: null as Date | null,
  });

  // Mock Table Data (From Image 2)
  const [reportData] = useState<PropertyReportRow[]>([
    {
      financialYear: '2024-25',
      employeeName: 'Shruti Agarwal',
      designation: 'Lecturer',
      employeeCode: 'EMP123',
      currentSalary: '₹50,000',
      incrementDate: '2024-04-01',
      division: 'Bhopal',
      district: 'MP',
      block: 'Ward 10',
      gramPanchayat: 'XYZ Panchayat'
    }
  ]);

  const disabledInputStyle = {
    backgroundColor: '#F3F4F6',
    color: '#6B7280',
    cursor: 'not-allowed',
    border: '1px solid #E5E7EB'
  };

  const columns: TableColumn[] = [
    { field: 'financialYear', header: 'Financial Year' },
    { field: 'employeeName', header: 'Employee Name' },
    { field: 'designation', header: 'Designation' },
    { field: 'employeeCode', header: 'Employee Code' },
    { field: 'currentSalary', header: 'Current Salary' },
    { field: 'incrementDate', header: 'Increment Date' },
    { field: 'division', header: 'Division' },
    { field: 'district', header: 'District' },
    { field: 'block', header: 'Block' },
    { field: 'gramPanchayat', header: 'Gram Panchayat' },
  ];

  return (
    <PageLayout title="Employee APR Form">
      
      {/* 1. APPLICABLE / NOT APPLICABLE TABS */}
      <div className="flex gap-4 mb-6">
       <button
          onClick={() => setIsApplicable(true)}
          className={`pb-4 px-2 text-sm font-bold transition-all border-b-2 ${
            isApplicable 
            ? 'border-indigo-500 text-indigo-600 bg-indigo-50/50 rounded-t-md' 
            : 'border-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          APRM Applicable
        </button>
      <button
          onClick={() => setIsApplicable(false)}
          className={`pb-4 px-2 text-sm font-bold transition-all border-b-2 ${
            !isApplicable 
            ? 'border-indigo-500 text-indigo-600 bg-indigo-50/50 rounded-t-md' 
            : 'border-transparent text-gray-400 hover:text-gray-600'
          }`}
        >
          APRM Not Applicable
        </button>
      </div>

      {/* 2. MAIN FORM: BASIC DETAILS */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <h3 className="text-gray-700 font-bold mb-6">Fill Annual Property Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Dropdown 
            label="Select Financial Year" required 
            value={formData.financialYear} 
            options={financialYearOptions}
            onChange={(e) => setFormData({...formData, financialYear: e.value})}
          />
          <Input label="Employee Name" value={formData.employeeName} disabled style={disabledInputStyle} />
          <Input label="Designation" value={formData.designation} disabled style={disabledInputStyle} />
          <Input label="Employee Code" value={formData.employeeCode} disabled style={disabledInputStyle} />
          <Input label="Current Salary" value={formData.currentSalary} disabled style={disabledInputStyle} />
          <DateInput 
            label="Enter Increment Date" required 
            value={formData.incrementDate} 
            onChange={(e) => setFormData({...formData, incrementDate: e.value as Date})} 
            placeholder="dd/mm/yyyy" 
          />
        </div>
        <p className="text-red-500 text-sm mt-4">Note: Select the financial year first.</p>
        
        {/* Save/Clear buttons for 'Not Applicable' view */}
        {!isApplicable && (
          <div className="flex gap-3 justify-center mt-8 pt-4 ">
            <Button label="Save" className="px-12 bg-indigo-600 border-none" />
            <Button label="Clear" className="p-button-danger p-button-outlined px-12" />
          </div>
        )}
      </div>

      {/* 3. PROPERTY & SELLER DETAILS (Only shown if Applicable) */}
      {isApplicable && (
        <>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
            <h3 className="text-gray-700 font-bold mb-6 border-b pb-2">Property Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Dropdown label="Select Division" required placeholder="Select" options={[{label: 'Bhopal', value: 'Bhopal'}]} />
              <Dropdown label="Select District" required placeholder="Select" options={[{label: 'Sehore', value: 'Sehore'}]} />
              <Dropdown label="Select Block" required placeholder="Select" options={[{label: 'Ichhawar', value: 'Ichhawar'}]} />
              <Dropdown label="Select Gram Panchayat" required placeholder="Select" options={[{label: 'XYZ', value: 'XYZ'}]} />
              <Dropdown label="Select Gram" required placeholder="Select" options={[{label: 'Village A', value: 'A'}]} />
              <Dropdown label="Select Property Detail" required placeholder="Select" options={propertyDetailOptions} />
              <Input label="Total Area Sq.Ft" required placeholder="Total Area Square Feet" />
              <Input label="Total Area Hectare" required placeholder="Total Area Hectare" />
              <Input label="Enter Current Value" required placeholder="Current Value" />
              <Dropdown label="Select Property Owner" required placeholder="Select" options={ownerOptions} />
              <Input label="Enter Owner Name" required placeholder="Enter Owner Name" />
              <Input label="Enter Property Annual Income" placeholder="Enter Property Annual Income" />
              <div className="md:col-span-1">
                 <Input label="Enter Accusation" placeholder="Enter Accusation" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
            <h3 className="text-gray-700 font-bold mb-6 border-b pb-2">Seller Detail</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Dropdown label="Select Property Source" required placeholder="Select" options={sourceOptions} />
              <Input label="Enter Remark" required placeholder="Enter Remark" />
              <DateInput label="Select Purchase Date" required placeholder="dd/mm/yyyy" />
              <Input label="Enter Seller Mobile No" required placeholder="Enter Seller Mobile No" />
              <div className="md:col-span-2">
                 <Input label="Enter Seller Address" required placeholder="Enter Seller Address" />
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <Button label="Add" className="px-8 bg-indigo-600 border-none" />
              <Button label="Clear" className="p-button-danger p-button-outlined px-12" />
            </div>
          </div>

          {/* 4. REPORT TABLE SECTION */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden mb-10">
            <div className="p-4 bg-gray-50 border-b">
              <h3 className="font-bold text-gray-700">Employee Annual Property Detail Report</h3>
            </div>
            <Table 
              columns={columns} 
              data={reportData} 
              showPagination 
              rowsPerPage={10} 
            />
            <div className="flex gap-4 justify-center p-6 bg-white ">
               <Button label="Save" style={{ backgroundColor: '#6366F1', border: 'none' }} />
               <Button label="Clear" className="p-button-danger p-button-outlined px-12" />
            </div>
          </div>
        </>
      )}
    </PageLayout>
  );
};

export default EmployeeAPRForm;