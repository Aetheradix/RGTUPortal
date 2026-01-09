import React, { useState, useMemo } from 'react';
import PageLayout from "@/components/PageLayout";
import { Button } from "primereact/button";
import Dropdown from '@/ui/shared/Dropdown';
import Table, { type TableColumn } from '@/ui/shared/Table';

const PrintCancelTransferOrder: React.FC = () => {
  const [option, setOption] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);

  const optionList = [
    { label: 'Cancel Order Generated', value: 'generated' },
    { label: 'Cancel Order Pending', value: 'pending' },
  ];

  const columns = useMemo<TableColumn[]>(() => [
    {
      field: '',
      header: '',
      style: { width: '80px', textAlign: 'center' },
    },
    {
      field: 'cancelOrderNo',
      header: 'Cancel Order No.',
    },
    {
      field: 'cancelDate',
      header: 'Date Of Cancellation',
    },
    {
      field: 'action',
      header: 'Generate Cancel Order',
      body: (rowData: TableColumn) => (
        <div className="flex justify-center">
          <button
            type="button"
            className="w-9 h-9 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 border-none cursor-pointer shadow-sm"
            onClick={() => console.log(rowData)}
          >
            <i className="pi pi-print"></i>
          </button>
        </div>
      ),
      style: { width: '150px', textAlign: 'center' },
    },
  ], []);

  const data = [
    {
      cancelOrderNo: '546545',
      cancelDate: '04/04/2024',
    },
  ];

  const onSearch = () => setShowList(true);

  const onClear = () => {
    setOption(null);
    setShowList(false);
  };

  return (
    <PageLayout title="Print Cancel Order">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Cancel Order Detail
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Dropdown
              label="Choose an option"
              required
              value={option}
              options={optionList}
              onChange={(e) => setOption(e.value)}
              placeholder="Select"
            />
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              label="Search"
              icon="pi pi-search"
              className="bg-blue-700 px-8 shadow-md"
              onClick={onSearch}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              severity="danger"
              outlined
              className="px-8"
              onClick={onClear}
            />
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <Table
              title="Cancel Order Details"
              columns={columns}
              data={data}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default PrintCancelTransferOrder;
