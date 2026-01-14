/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";

import { Dropdown, Table } from "@/ui/shared"; 

export default function SpecialScheme() {
  const [year, setYear] = useState<any>(null);
  const [scheme, setScheme] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);
  const [showTable, setShowTable] = useState(false);

  const yearOptions = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" }
  ];

  const schemeOptions = [
    { label: "Free Laptop Scheme", value: "Laptop" },
    { label: "Merit Scholarship Scheme", value: "Scholarship" },
    { label: "Cycle Distribution Scheme", value: "Cycle" }
  ];

  const districtOptions = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Ujjain", value: "Ujjain" }
  ];

  const schemeData = [
    { id: 1, studentName: "Rohit Verma", school: "Govt HS Bhopal", amount: 25000, status: "Approved" },
    { id: 2, studentName: "Pooja Patil", school: "Govt HS Indore", amount: 25000, status: "Pending" }
  ];

  
  const tableColumns = [
    { field: "id", header: "Sr.No.", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "studentName", header: "Student Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "school", header: "School Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { 
      field: "amount", 
      header: "Benefit Amount (₹)", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: any) => `₹${row.amount.toLocaleString('en-IN')}`
    },
    { 
      field: "status", 
      header: "Status", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: any) => (
        <span className={`font-semibold ${row.status === 'Approved' ? 'text-green-600' : 'text-orange-600'}`}>
          {row.status}
        </span>
      )
    },
  ];

  const handleSearch = () => {
    if (!year || !scheme || !district) {
      return; 
    }
    setShowTable(true);
  };

  const handleClear = () => {
    setYear(null);
    setScheme(null);
    setDistrict(null);
    setFromDate(null);
    setToDate(null);
    setShowTable(false);
  };

  return (
    <Card title="Special Scheme Management / विशेष योजना प्रबंधन">
    
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <Dropdown 
          label="Academic Year" 
          required 
          value={year} 
          options={yearOptions} 
          onChange={(e) => setYear(e.value)} 
          placeholder="Select Year" 
        />

        <Dropdown 
          label="Scheme" 
          required 
          value={scheme} 
          options={schemeOptions} 
          onChange={(e) => setScheme(e.value)} 
          placeholder="Select Scheme" 
        />

        <Dropdown 
          label="District" 
          required 
          value={district} 
          options={districtOptions} 
          onChange={(e) => setDistrict(e.value)} 
          placeholder="Select District" 
        />

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">From Date</label>
          <Calendar 
            value={fromDate} 
            onChange={(e) => setFromDate(e.value as Date)} 
            className="w-full p-inputtext-sm" 
            showIcon 
            placeholder="DD/MM/YYYY"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">To Date</label>
          <Calendar 
            value={toDate} 
            onChange={(e) => setToDate(e.value as Date)} 
            className="w-full p-inputtext-sm" 
            showIcon 
            placeholder="DD/MM/YYYY"
          />
        </div>
      </div>

 
      <div className="flex gap-3 mb-8">
        <Button 
          label="Search" 
          icon="pi pi-search" 
          onClick={handleSearch} 
          className="bg-blue-600 px-6"
        />
        <Button 
          label="Clear" 
          icon="pi pi-refresh" 
          severity="secondary" 
          onClick={handleClear} 
          outlined
          className="px-6"
        />
      </div>

   
      {showTable && (
        <div className="animate-fadein mt-6">
          <Table
            title="Beneficiary Student List"
            columns={tableColumns}
            data={schemeData}
            showPagination={true}
            rowsPerPage={10}
        
                   className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}
    </Card>
  );
}