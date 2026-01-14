import React, { useState, useMemo } from 'react';
import PageLayout from "@/components/PageLayout";
import { Button } from 'primereact/button';
import Dropdown from '@/ui/shared/Dropdown';
import Table, { type TableColumn } from '@/ui/shared/Table';

const GenerateListReport: React.FC = () => {
  const [district, setDistrict] = useState<string | null>(null);
  const [showList, setShowList] = useState(false);

  const districtOptions = [
    { label: 'Bhopal', value: 'bhopal' },
    { label: 'Indore', value: 'indore' },
    { label: 'Jabalpur', value: 'jabalpur' },
    { label: 'Gwalior', value: 'gwalior' },
    { label: 'Ujjain', value: 'ujjain' },
  ];

  const data = [
    {
      employee: 'Dr. Anjali Mehta (E201)',
      district: 'Bhopal',
      currentDesignation: 'Assistant Professor',
      higherDesignation: 'Associate Professor',
      currentOis: '2023123456 - Central University',
      newOis: '3023126789 - National Institute of Technology',
    },
    {
      employee: 'Dr. Ramesh Gupta (E202)',
      district: 'Indore',
      currentDesignation: 'Lecturer',
      higherDesignation: 'Senior Lecturer',
      currentOis: '2023456789 - State University',
      newOis: '3023127890 - Indian Institute of Science',
    },
  ];

  const columns = useMemo<TableColumn[]>(() => [
    {
      field: 'employee',
      header: 'Employee Name(Code)',
      sortable: true,
    },
    {
      field: 'district',
      header: 'District',
      sortable: true,
    },
    {
      field: 'currentDesignation',
      header: 'Current Designation',
      sortable: true,
    },
    {
      field: 'higherDesignation',
      header: 'Higher Designation Charge',
      sortable: true,
    },
    {
      field: 'currentOis',
      header: 'Current OIS Code',
    },
    {
      field: 'newOis',
      header: 'New OIS Code',
    },
    {
      field: 'print',
      header: 'Order Print',
      body: () => (
        <div className="flex justify-center">
          <Button
            icon="pi pi-print"
            className="p-button-sm bg-blue-600 border-none"
            tooltip="Print Order"
          />
        </div>
      ),
      style: { width: '120px', textAlign: 'center' },
    },
  ], []);

  const onSearch = () => setShowList(true);

  const onClear = () => {
    setDistrict(null);
    setShowList(false);
  };

  return (
    <PageLayout title="Generate List Report">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Higher Designation Charge Report
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Dropdown
              label="District"
              required
              value={district}
              options={districtOptions}
              onChange={(e) => setDistrict(e.value)}
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
              title="Higher Designation Charge Detail"
              columns={columns}
              data={data}
              showPagination
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default GenerateListReport;
