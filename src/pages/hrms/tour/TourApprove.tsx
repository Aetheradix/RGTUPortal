import React, { useState } from 'react';
import PageLayout from "@/components/PageLayout";
import Dropdown from '@/ui/shared/Dropdown';
import Table from '@/ui/shared/Table';
import { Button } from "primereact/button";

interface AppliedTourData {
  employeeNameCode: string;
  officeName: string;
  tourType: string;
  tourStartsFrom: string;
  tourDestination: string;
  duration: string;
  noOfDays: string;
  status: string;
  tourPurpose: string;
}

const ApproveTour: React.FC = () => {
  const [officeType, setOfficeType] = useState<string | null>(null);
  const [officeName, setOfficeName] = useState<string | null>(null);
  const [showList, setShowList] = useState<boolean>(false);

  const officeTypeOptions = [
    { label: 'Head Office', value: 'HO' },
    { label: 'District Office', value: 'DO' },
  ];

  const officeNameOptions = [
    { label: 'Administrator', value: 'admin' },
    { label: 'Joint Director', value: 'jd' },
  ];

  const tourData: AppliedTourData[] = [
    {
      employeeNameCode: 'Sita Dubey (EE00333)',
      officeName: 'Administrator',
      tourType: 'Training and Development Tour',
      tourStartsFrom: '10/12/2024',
      tourDestination: 'Hyderabad',
      duration: '10th December 2024 - 15th December 2024',
      noOfDays: '5 Days',
      status: 'Approved',
      tourPurpose: 'Attending leadership training seminar',
    }
  ];

  const columns = [
    { field: 'employeeNameCode', header: 'Employee Name(Code)',sortable:true, style: { whiteSpace: "nowrap" }  },
    { field: 'officeName', header: 'Office Name',sortable:true, style: { whiteSpace: "nowrap" }  },
    { field: 'tourType', header: 'Tour Type',sortable:true, style: { whiteSpace: "nowrap" }  },
    { field: 'tourStartsFrom', header: 'Tour Starts From',sortable:true, style: { whiteSpace: "nowrap" } },
    { field: 'tourDestination', header: 'Tour Destination',sortable:true , style: { whiteSpace: "nowrap" } },
    { field: 'duration', header: 'Duration' , style: { whiteSpace: "nowrap" } },
    { field: 'noOfDays', header: 'No. of Days',sortable:true , style: { whiteSpace: "nowrap" } },
    { 
      field: 'status', 
      header: 'Status',
      body: (rowData: AppliedTourData) => (
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold border border-green-200">
          {rowData.status}
        </span>
      )
    },
    { field: 'tourPurpose', header: 'Tour Purpose' },
  ];

  const handleSearch = () => {
    if (officeType && officeName) {
      setShowList(true);
    } else {
      alert("Please select both Office Type and Office Name");
    }
  };

  const handleClear = () => {
    setOfficeType(null);
    setOfficeName(null);
    setShowList(false);
  };

  return (
    <PageLayout title="Approve Tour">
      <div className="space-y-6">
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Approve Tour
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
            <Dropdown
              label="Select Office Type (Code)"
              value={officeType}
              options={officeTypeOptions}
              onChange={(e) => setOfficeType(e.value)}
              placeholder="Select"
              className="w-full"
            />
            
            <Dropdown
              label="Select Office Name (Code)"
              value={officeName}
              options={officeNameOptions}
              onChange={(e) => setOfficeName(e.value)}
              placeholder="Select"
              className="w-full"
            />
            
            <div className="flex gap-2">
              <Button
                label="Search"
                className="bg-blue-600 px-8 h-[40px]"
                onClick={handleSearch}
              />
              <Button
                label="Clear"
                severity="danger"
                className="px-8 h-[40px]"
                onClick={handleClear}
              />
            </div>
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
              Applied Tour Details
            </h3>
            
            <Table
              columns={columns}
              data={tourData}
              showPagination={true}
              rowsPerPage={10}
              {...({
                format: "table_list",
                action: "approve_tour_view"
              })}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ApproveTour;