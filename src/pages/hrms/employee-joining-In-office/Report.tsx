import React, { useState } from 'react';
import PageLayout from "@/components/PageLayout";
import { Button } from "primereact/button";
import Dropdown from '@/ui/shared/Dropdown';
import Table from '@/ui/shared/Table';

interface EmployeeJoiningDetails {
  employeeIdName: string;
  designation: string;
  panel: string;
  currentDistrict: string;
  currentBlock: string;
  currentOfficeCode: string;
  newDistrict: string;
  newBlock: string;
  newOfficeCode: string;
}

const EmployeeJoiningReport: React.FC = () => {
  const [district, setDistrict] = useState<string | null>(null);
  const [showList, setShowList] = useState<boolean>(false);

  const districtOptions = [
    { label: 'Sheopur', value: 'sheopur' },
    { label: 'Bhopal', value: 'bhopal' },
    { label: 'Raisen', value: 'raisen' },
  ];

  const columns = [
    { field: 'employeeIdName', header: 'Employee ID-Name', sortable : true, style: { whiteSpace: "nowrap" } },
    { field: 'designation', header: 'Employee Designation', sortable : true , style: { whiteSpace: "nowrap" } },
    { field: 'panel', header: 'Panel', sortable : true , style: { whiteSpace: "nowrap" } },
    { field: 'currentDistrict', header: 'District (Current)', sortable : true , style: { whiteSpace: "nowrap" } },
    { field: 'currentBlock', header: 'Block (Current)', sortable : true, style: { whiteSpace: "nowrap" }  },
    { field: 'currentOfficeCode', header: 'Office Code (Current)', style: { whiteSpace: "nowrap" }  },
    { field: 'newDistrict', header: 'District (New)', sortable : true , style: { whiteSpace: "nowrap" } },
    { field: 'newBlock', header: 'Block (New)', sortable : true , style: { whiteSpace: "nowrap" } },
    { field: 'newOfficeCode', header: 'Office Code (New)', style: { whiteSpace: "nowrap" }  },
  ];

  const data: EmployeeJoiningDetails[] = [
    {
      employeeIdName: 'U643545-Ram Prasad',
      designation: 'Professor',
      panel: 'SSS-1 Hindi',
      currentDistrict: 'Bhopal',
      currentBlock: 'Berasia',
      currentOfficeCode: '23320400117',
      newDistrict: 'Raisen',
      newBlock: 'Badi',
      newOfficeCode: '22110612406',
    },
    {
      employeeIdName: 'E644521-Shri Kant',
      designation: 'Lecturer',
      panel: 'SSS-2 English',
      currentDistrict: 'Bhopal',
      currentBlock: 'Phanda URBAN-New City',
      currentOfficeCode: '23340603802',
      newDistrict: 'Raisen',
      newBlock: 'Gairatganj',
      newOfficeCode: '23320110008',
    },
    {
      employeeIdName: 'E644521-Shri Kant',
      designation: 'Lecturer',
      panel: 'SSS-2 English',
      currentDistrict: 'Sheopur',
      currentBlock: 'Phanda URBAN-New City',
      currentOfficeCode: '23340603802',
      newDistrict: 'Raisen',
      newBlock: 'Gairatganj',
      newOfficeCode: '23320110008',
    },
    {
      employeeIdName: 'E644521-Shri Kant',
      designation: 'Lecturer',
      panel: 'SSS-2 English',
      currentDistrict: 'Raisen',
      currentBlock: 'Phanda URBAN-New City',
      currentOfficeCode: '23340603802',
      newDistrict: 'Bhopal',
      newBlock: 'Gairatganj',
      newOfficeCode: '23320110008',
    }
  ];

  const onSearch = () => {
    if (district) {
      setShowList(true);
    }
  };

  const onClear = () => {
    setDistrict(null);
    setShowList(false);
  };

  return (
    <PageLayout title="Employee Joining Report">
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Employee Joining Report
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <Dropdown
              label="Select District Name"
              required
              value={district}
              options={districtOptions}
              onChange={(e) => setDistrict(e.value)}
              placeholder="Select District"
            />
            
            <div className="flex gap-2">
              <Button
                label="Search"
                icon="pi pi-search"
                className="bg-blue-600 px-6"
                onClick={onSearch}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                severity="danger"
                className="px-6"
                onClick={onClear}
              />
            </div>
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              Employee Joining Details
            </h3>
            
            <Table
              columns={columns}
              data={data}
              showPagination={true}
              rowsPerPage={10}
              className="mt-2"
              {...({
                format: "report_table",
                action: "view_joining_list"
              })}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default EmployeeJoiningReport;