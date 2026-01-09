import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Button } from 'primereact/button';
import { Table, type TableColumn } from '../../../ui/shared';
import { Dialog } from 'primereact/dialog';

// Interface for Table Data
interface EmployeeAPR {
  financialYear: string;
  employeeName: string;
  designation: string;
  employeeCode: string;
  currentSalary: number;
  incrementDate: string;
  division: string;
  district: string;
  block: string;
}

const EmployeeAPRFormPrint: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  // Table Data (Image 1 ke according)
  const [data] = useState<EmployeeAPR[]>([
    {
      financialYear: '2022-2023',
      employeeName: 'Rajesh Agrawal',
      designation: 'Assistant Professor',
      employeeCode: 'AB4545',
      currentSalary: 25000,
      incrementDate: '10/10/2022',
      division: 'Bhopal',
      district: 'Bairasia',
      block: 'Bairasia',
    },
    {
      financialYear: '2022-2023',
      employeeName: 'Rajesh Agrawal',
      designation: 'Assistant Professor',
      employeeCode: 'AB4545',
      currentSalary: 25000,
      incrementDate: '10/10/2022',
      division: 'Nil',
      district: 'Nil',
      block: 'Nil',
    }
  ]);

  const columns: TableColumn[] = [
    { field: 'srNo', header: 'S.No.', style: { width: '60px' } },
    {
      header: 'Print Employee Application',
      field: '',
      body: () => (
        <Button 
          icon="pi pi-print" 
          onClick={() => setShowModal(true)}
          style={{ backgroundColor: '#6366F1', border: 'none', borderRadius: '4px' }} 
        />
      ),
    },
    { field: 'financialYear', header: 'Financial Year' },
    { field: 'employeeName', header: 'Employee Name' },
    { field: 'designation', header: 'Designation' },
    { field: 'employeeCode', header: 'Employee Code' },
    { field: 'currentSalary', header: 'Current Salary' },
    { field: 'incrementDate', header: 'Increment Date' },
    { field: 'division', header: 'Division' },
    { field: 'district', header: 'District' },
    { field: 'block', header: 'Block' },
  ];

  return (
    <PageLayout title="Employee APR Form Print">
      {/* Main Table (Image 1) */}
      <div className="bg-white p-4 rounded-lg shadow-sm border mt-4">
        <Table 
          columns={columns} 
          data={data} 
          showPagination 
          rowsPerPage={10} 
        />
      </div>

      {/* Popup Modal (Image 2) */}
      <Dialog 
        visible={showModal} 
        onHide={() => setShowModal(false)}
        style={{ width: '900px' }}
        header={null}
        modal
      >
        <div className="p-4 bg-white text-gray-800">
          {/* Top Header Section */}
          <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4 mb-4">
            <div className="w-20">
               {/* Government Logo Placeholder */}
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_Madhya_Pradesh.svg/1200px-Emblem_of_Madhya_Pradesh.svg.png" alt="Logo" className="w-full" />
            </div>
            <div className="text-center flex-1">
              <h1 className="text-xl font-bold uppercase">College/University wise Property Details for Financial Year 2024</h1>
              <h2 className="text-lg font-semibold mt-1">Annual Property Detail Report For Financial Year 2024</h2>
              <p className="font-bold">District: Bhopal</p>
            </div>
            <div className="w-24 border p-1">
                {/* QR Code Placeholder */}
               <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=AB4545" alt="QR Code" className="w-full" />
            </div>
          </div>

          {/* Employee Info Grid (Image 2 - Top Table) */}
          <table className="w-full border-collapse border border-gray-300 text-sm mb-6">
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2 bg-gray-50 font-medium">Employee's Full Name and the Department Name:</td>
                <td className="border border-gray-300 p-2">Rajesh Agrawal</td>
                <td className="border border-gray-300 p-2 bg-gray-50 font-medium">Employee Unique Code:</td>
                <td className="border border-gray-300 p-2">AB4545</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 bg-gray-50 font-medium">Current Position:</td>
                <td className="border border-gray-300 p-2">Primary Teacher (PRT)</td>
                <td className="border border-gray-300 p-2 bg-gray-50 font-medium">Current Salary:</td>
                <td className="border border-gray-300 p-2">25000</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2 bg-gray-50 font-medium">Current Salary:</td>
                <td className="border border-gray-300 p-2">25000</td>
                <td className="border border-gray-300 p-2 bg-gray-50 font-medium">Next Salary Increase Date:</td>
                <td className="border border-gray-300 p-2">24/12/2024</td>
              </tr>
            </tbody>
          </table>

          {/* Main Property Details Table (Image 2 - Middle Table) */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 text-[10px] text-center">
              <thead className="bg-gray-50">
                <tr>
                  <th className="border border-gray-300 p-2" rowSpan={2}>District, Subdivision, Taluka, and Village Name</th>
                  <th className="border border-gray-300 p-2" colSpan={2}>Property Name and Details</th>
                  <th className="border border-gray-300 p-2" rowSpan={2}>Current Value</th>
                  <th className="border border-gray-300 p-2" rowSpan={2}>Owner Name / Relationship</th>
                  <th className="border border-gray-300 p-2" rowSpan={2}>Acquisition Details (Date/Seller)</th>
                  <th className="border border-gray-300 p-2" rowSpan={2}>Annual Income</th>
                  <th className="border border-gray-300 p-2" rowSpan={2}>Remarks</th>
                </tr>
                <tr>
                  <th className="border border-gray-300 p-2">House & Other Buildings</th>
                  <th className="border border-gray-300 p-2">Agricultural Land</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-2">1</td>
                  <td className="border border-gray-300 p-2 text-left">District: Bhopal, Sub: Bhopal, Block: Agar, Village: Garatola</td>
                  <td className="border border-gray-300 p-2 text-left text-blue-600 font-semibold">Residential Property: 900 sq. ft.</td>
                  <td className="border border-gray-300 p-2 text-left text-green-700 font-semibold">Agricultural Land: 1 Hectare</td>
                  <td className="border border-gray-300 p-2 font-bold">5000000/-</td>
                  <td className="border border-gray-300 p-2">Rajesh Agrawal</td>
                  <td className="border border-gray-300 p-2 text-left">Date: 07/11/1999<br/>Seller: Bhopal</td>
                  <td className="border border-gray-300 p-2">45674</td>
                  <td className="border border-gray-300 p-2">Nil</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Footer Info & Signatures (Image 2 - Bottom) */}
          <div className="mt-6 grid grid-cols-2 gap-4 text-xs">
            <div className="space-y-1">
              <p>Where not applicable, delete.</p>
              <p>In cases where accurate valuation is not possible, provide an approximate value.</p>
              <p>This includes short-term leases.</p>
            </div>
            <div className="text-right space-y-4">
              <p><strong>Signature................................................</strong></p>
              <p><strong>Name.........................................................</strong></p>
              <p><strong>Employee ID.............................................</strong></p>
              <p><strong>Position.....................................................</strong></p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center mt-6">
            <Button label="Print" className="px-8" style={{ backgroundColor: '#6366F1' }} onClick={() => window.print()} />
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default EmployeeAPRFormPrint;