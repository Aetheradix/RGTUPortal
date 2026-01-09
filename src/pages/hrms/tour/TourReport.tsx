import React, { useState } from 'react';
import PageLayout from "@/components/PageLayout";
import Table from '@/ui/shared/Table';
import { DateInput } from '@/ui/shared/Input';
import { Button } from "primereact/button";

interface TourReportData {
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

const TourReport: React.FC = () => {
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [showList, setShowList] = useState<boolean>(false);

  const tourReportData: TourReportData[] = [
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
    },
    {
      employeeNameCode: 'Ram Parihar (EE55770)',
      officeName: 'Associate Professor',
      tourType: 'Study Tour',
      tourStartsFrom: '10/12/2024',
      tourDestination: 'Mumbai',
      duration: '15th December 2024 - 25th December 2024',
      noOfDays: '10 Days',
      status: 'Approved',
      tourPurpose: 'Participating in international tech conference',
    }
  ];

  const columns = [
    { field: 'employeeNameCode', header: 'Employee Name(Code)',sortable:true , style: { whiteSpace: "nowrap" } },
    { field: 'officeName', header: 'Office Name',sortable:true, style: { whiteSpace: "nowrap" } },
    { field: 'tourType', header: 'Tour Type',sortable:true, style: { whiteSpace: "nowrap" } },
    { field: 'tourStartsFrom', header: 'Tour Starts From',sortable:true, style: { whiteSpace: "nowrap" } },
    { field: 'tourDestination', header: 'Tour Destination',sortable:true, style: { whiteSpace: "nowrap" } },
    { field: 'duration', header: 'Duration' , style: { whiteSpace: "nowrap" } },
    { field: 'noOfDays', header: 'No. of Days',sortable:true, style: { whiteSpace: "nowrap" } },
    { 
      field: 'status', 
      header: 'Status', style: { whiteSpace: "nowrap" } ,
      body: (rowData: TourReportData) => (
        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold border border-green-200">
          {rowData.status}
        </span>
      )
    },
    { field: 'tourPurpose', header: 'Tour Purpose', style: { whiteSpace: "nowrap" }  },
  ];

  const handleSearch = () => {
    if (fromDate && toDate) {
      setShowList(true);
    } else {
      alert("Please select both From Date and To Date");
    }
  };

  const handleClear = () => {
    setFromDate(null);
    setToDate(null);
    setShowList(false);
  };

  return (
    <PageLayout title="Tour Report">
      <div className="space-y-6">
        
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
            Get Tour Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <DateInput
              label="From Date"
              required
              value={fromDate}
              onChange={(e) => setFromDate(e.value as Date)}
              placeholder="dd/mm/yyyy"
            />
            
            <DateInput
              label="To Date"
              required
              value={toDate}
              onChange={(e) => setToDate(e.value as Date)}
              placeholder="dd/mm/yyyy"
            />
            
            <div className="flex gap-2">
              <Button
                label="Search"
                className="bg-blue-600 px-8 h-[40px] font-medium"
                onClick={handleSearch}
              />
              <Button
                label="Clear"
                severity="danger"
                className="px-8 h-[40px] font-medium"
                onClick={handleClear}
              />
            </div>
          </div>
        </div>

        {showList && (
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm animate-fadein">
            <h3 className="text-lg font-bold text-gray-700 mb-4 border-b pb-2">
              Tour Report
            </h3>
            
            <Table
              columns={columns}
              data={tourReportData}
              showPagination={true}
              rowsPerPage={10}
              {...({
                format: "report_list",
                action: "view_tour_summary"
              })}
            />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default TourReport;