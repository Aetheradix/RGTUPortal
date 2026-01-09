import React, { useState, useMemo } from 'react';
import PageLayout from "@/components/PageLayout";
import Dropdown from '@/ui/shared/Dropdown';
import Input from '@/ui/shared/Input';
import Table, { type TableColumn } from '@/ui/shared/Table';
import { Button } from "primereact/button";

interface PrintPromotionData {
  employeeNameCode: string;
  orderNumber: string;
  promotionType: string;
  fileNumber: string;
  oldBasicPay: string;
  newBasicPay: string;
  orderDate: string;
  effectiveDate: string;
  promotionStatus: string;
}

const PrintPromotionOrder: React.FC = () => {
  const [promotionType, setPromotionType] = useState<string | null>(null);
  const [employeeId, setEmployeeId] = useState<string>('');
  const [showList, setShowList] = useState<boolean>(false);

  const promotionData: PrintPromotionData[] = [
    {
      employeeNameCode: 'Sita Dubey (EE00333)',
      orderNumber: '000321',
      promotionType: 'Promotion with Transfer',
      fileNumber: 'GXZ000321',
      oldBasicPay: '4th Pay Commission',
      newBasicPay: '7th Pay Commission',
      orderDate: '21/12/2024',
      effectiveDate: '01/01/2025',
      promotionStatus: 'Approved',
    },
  ];

  const columns = useMemo<TableColumn[]>(() => [
    { field: 'employeeNameCode', header: 'Employee Name(Code)', style: { whiteSpace: "nowrap" }  },
    { field: 'orderNumber', header: 'Order Number', style: { whiteSpace: "nowrap" }  },
    { field: 'promotionType', header: 'Promotion Type' },
    { field: 'fileNumber', header: 'File Number', style: { whiteSpace: "nowrap" }  },
    { field: 'oldBasicPay', header: 'Old Basic Pay' },
    { field: 'newBasicPay', header: 'New Basic Pay' },
    { field: 'orderDate', header: 'Order Date' , style: { whiteSpace: "nowrap" } },
    { field: 'effectiveDate', header: 'Effective Date', style: { whiteSpace: "nowrap" }  },
    {
      field: 'promotionStatus', style: { whiteSpace: "nowrap" } ,
      header: 'Promotion Status',
      body: (rowData: PrintPromotionData) => (
        <span
          className={`px-2 py-1 rounded text-xs font-bold border ${
            rowData.promotionStatus === 'Approved'
              ? 'bg-green-100 text-green-700 border-green-200'
              : 'bg-red-100 text-red-700 border-red-200'
          }`}
        >
          {rowData.promotionStatus}
        </span>
      ),
    },
    {
      field: 'view',
      header: 'View Document', style: { whiteSpace: "nowrap" } ,
      body: () => (
        <Button
          label="View"
          icon="pi pi-eye"
          className="p-button-sm bg-teal-500 border-none h-8"
        />
      ),
    },
    {
      field: 'print',
      header: 'Print',
      body: () => (
        <Button
          label="Print"
          icon="pi pi-print"
          className="p-button-sm bg-blue-600 border-none h-8"
        />
      ),
    },
  ], []);

  const handleSearch = () => {
    if (promotionType && employeeId) {
      setShowList(true);
    } else {
      alert("Please select Promotion Type and enter Employee ID");
    }
  };

  const handleClear = () => {
    setPromotionType(null);
    setEmployeeId('');
    setShowList(false);
  };

  return (
    <PageLayout title="Print Promotion Order">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Print Promotion Order
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
            <Dropdown
              label="Select Promotion Type"
              value={promotionType}
              options={[{ label: 'Regular Promotion', value: 'regular' }]}
              onChange={(e) => setPromotionType(e.value)}
              placeholder="Select"
              required
            />

            <Input
              label="Enter Employee Unique ID"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              placeholder="Enter Employee Unique ID"
              required
            />

            <div className="flex gap-2">
              <Button
                label="Search"
                icon="pi pi-search"
                className="bg-blue-600 px-8 h-[40px]"
                onClick={handleSearch}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                severity="danger"
                className="px-8 h-[40px]"
                onClick={handleClear}
              />
            </div>
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
              Print Promotion Order Details
            </h3>

            <Table
              columns={columns}
              data={promotionData}
              showPagination
              rowsPerPage={10}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default PrintPromotionOrder;
