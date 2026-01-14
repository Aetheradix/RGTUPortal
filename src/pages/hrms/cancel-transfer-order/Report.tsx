import React, { useState } from 'react';
import PageLayout from "@/components/PageLayout";
import { Button } from "primereact/button";
import Dropdown from '@/ui/shared/Dropdown';
import Table from '@/ui/shared/Table';

const CancelTransferReport: React.FC = () => {
  const [district, setDistrict] = useState<string | null>('all');
  const [showList, setShowList] = useState(false);

  const districtOptions = [
    { label: 'All', value: 'all' },
    { label: 'Bhopal', value: 'bhopal' },
    { label: 'Guna', value: 'guna' },
    { label: 'Datia', value: 'datia' },
    { label: 'Dewas', value: 'dewas' },
  ];

  const columns = [
    { field: 'currentLocation', header: 'Current Location', sortable: true },
    { field: 'employee', header: 'Employee ID-Name' , sortable: true},
    { field: 'transferOrderNo', header: 'Transfer Order No.' , sortable: true},
    { field: 'transferOrderDate', header: 'Transfer Order Date', sortable: true },
    { field: 'newLocation', header: 'New Location' , sortable: true},
    { field: 'cancelOrderNo', header: 'Cancel Order No.' },
    { field: 'cancelOrderDate', header: 'Cancel Order Date' },
  ];

  const data = [
    {
      currentLocation: 'Bhopal',
      employee: 'UT4562-Udyaram',
      transferOrderNo: '5455',
      transferOrderDate: '05/07/2023',
      newLocation: 'Betul',
      cancelOrderNo: '55345',
      cancelOrderDate: '09/05/2024',
    },
    {
      currentLocation: 'Guna',
      employee: 'PS6548-Radha',
      transferOrderNo: '4512',
      transferOrderDate: '10/10/2023',
      newLocation: 'Gwalior',
      cancelOrderNo: '58755',
      cancelOrderDate: '20/08/2022',
    },
    {
      currentLocation: 'Datia',
      employee: 'TU2852-Kailash',
      transferOrderNo: '5412',
      transferOrderDate: '05/05/2020',
      newLocation: 'Khandava',
      cancelOrderNo: '38632',
      cancelOrderDate: '29/08/2021',
    },
  ];

  const onSearch = () => {
    setShowList(true);
  };

  const onClear = () => {
    setDistrict('all');
    setShowList(false);
  };

  return (
    <PageLayout title="Cancel Transfer Report">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Cancel Transfer Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <Dropdown
                label="Select District Name"
                required
                value={district}
                options={districtOptions}
                onChange={(e) => setDistrict(e.value)}
                placeholder="Select"
              />
            </div>
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
              title="Details"
              columns={columns}
              data={data}
              showPagination={true}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default CancelTransferReport;