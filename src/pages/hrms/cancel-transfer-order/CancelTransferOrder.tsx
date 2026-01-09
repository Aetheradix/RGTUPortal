import React, { useState } from 'react';
import PageLayout from "@/components/PageLayout";
import { Button } from "primereact/button";
import Dropdown from '@/ui/shared/Dropdown';
import Table from '@/ui/shared/Table';

const CancelTransferOrderr: React.FC = () => {
  const [option, setOption] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);

  const optionList = [
    { label: 'Incorrect Information', value: 'incorrect' },
    { label: 'Not Joined', value: 'notJoined' },
  ];

  const columns = [
    {
      field: 'action',
      header: 'Action',
      body: () => (
        <div className="flex justify-center">
          <input type="checkbox" className="w-4 h-4 cursor-pointer" />
        </div>
      ),
    },
    { field: 'employee', header: 'Employee ID-Name', style: { whiteSpace: "nowrap" }  },
    { field: 'orderNo', header: 'Order No.' , style: { whiteSpace: "nowrap" } },
    { field: 'orderDate', header: 'Order Date' , style: { whiteSpace: "nowrap" } },
    { field: 'existingOffice', header: 'Existing Office Name', style: { whiteSpace: "nowrap" }  },
    { field: 'existingDesignation', header: 'Existing Designation Name', style: { whiteSpace: "nowrap" }  },
    { field: 'existingPostingDate', header: 'Existing Posting Date', style: { whiteSpace: "nowrap" }  },
    { field: 'currentLocation', header: 'Current Location', style: { whiteSpace: "nowrap" }  },
    { field: 'newOffice', header: 'New Office Name' , style: { whiteSpace: "nowrap" } },
    { field: 'newDesignation', header: 'New Designation Name', style: { whiteSpace: "nowrap" } },
  ];

  const data = [
    {
      employee: '543545-Ashok Kumar',
      orderNo: '105/2023-24/31484',
      orderDate: '14-12-23',
      existingOffice: 'Head Office',
      existingDesignation: 'Teacher',
      existingPostingDate: '14-01-22',
      currentLocation: '23445656546',
      newOffice: 'Head Office',
      newDesignation: 'Principal',
    },
  ];

  const onSearch = () => {
    setShowList(true);
  };

  const onClear = () => {
    setOption(null);
    setShowList(false);
  };

  return (
    <PageLayout title="Cancel Transfer Order">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Cancel Transfer Order
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-1">
              <Dropdown
                label="Choose an option"
                required
                value={option}
                options={optionList}
                onChange={(e) => setOption(e.value)}
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
              title="Employee Transfer Details"
              columns={columns}
              data={data}
            />

            <div className="mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded">
              <p className="text-red-600 text-sm font-medium flex items-center gap-2">
                <i className="pi pi-info-circle"></i>
                Cancel The Application After Clicking On The Checkbox
              </p>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default CancelTransferOrderr;