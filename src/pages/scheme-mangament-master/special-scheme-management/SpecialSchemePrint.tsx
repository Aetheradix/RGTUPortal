/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown, Table } from "@/ui/shared"; 

interface SchemeRow {
  id: number;
  schemeType: string;
  schemeName: string;
  district: string;
  totalStudents: number;
  totalAmount: number;
}

export default function SpecialSchemePrint() {
  const [year, setYear] = useState<any>(null);
  const [schemeType, setSchemeType] = useState<any>(null);
  const [schemeName, setSchemeName] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [showList, setShowList] = useState(false);

  const academicYears = [
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  const schemeTypes = [
    { label: "Departmental Scheme", value: "Departmental" },
    { label: "Special Scheme", value: "Special" },
  ];

  const schemeNames = [
    { label: "Swami Vivekananda Scholarship", value: "Swami Vivekananda Scholarship" },
    { label: "Laptop Distribution Scheme", value: "Laptop Distribution Scheme" },
    { label: "Free Bicycle Scheme", value: "Free Bicycle Scheme" },
  ];

  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Agar Malwa", value: "Agar Malwa" },
    { label: "Sheopur", value: "Sheopur" },
  ];

  const schemeData: SchemeRow[] = [
    {
      id: 1,
      schemeType: "Departmental Scheme",
      schemeName: "Swami Vivekananda Scholarship",
      district: "Bhopal",
      totalStudents: 320,
      totalAmount: 2560000,
    },
    {
      id: 2,
      schemeType: "Special Scheme",
      schemeName: "Laptop Distribution Scheme",
      district: "Agar Malwa",
      totalStudents: 180,
      totalAmount: 5400000,
    },
  ];

 
  const tableColumns = [
    { 
      field: "schemeType", 
      header: "Scheme Type", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
    { 
      field: "schemeName", 
      header: "Scheme Name", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
    { 
      field: "district", 
      header: "District", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
    { 
      field: "totalStudents", 
      header: "Total Students", 
      sortable: true, 
      style: { whiteSpace: "nowrap", textAlign: 'center' as const } 
    },
    { 
      field: "totalAmount", 
      header: "Total Amount (₹)", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: SchemeRow) => `₹${row.totalAmount.toLocaleString('en-IN')}`
    },
    { 
      field: "print_action",
      header: "Print", 
      style: { whiteSpace: "nowrap", textAlign: 'center' as const }, 
      body: () => (
        <Button 
          icon="pi pi-print" 
          rounded 
          text 
          severity="success" 
          tooltip="Print Details"
        />
      ) 
    },
  ];

  const handleSearch = () => {
    if (!year || !schemeType || !schemeName || !district) return;
    setShowList(true);
  };

  const handleClear = () => {
    setYear(null);
    setSchemeType(null);
    setSchemeName(null);
    setDistrict(null);
    setShowList(false);
  };

  return (
    <Card title="Special Scheme Print / विशेष योजना प्रिंट">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Dropdown 
          label="Academic Year" 
          required 
          value={year} 
          options={academicYears} 
          onChange={(e) => setYear(e.value)} 
          placeholder="Select" 
        />
        <Dropdown 
          label="Scheme Type" 
          required 
          value={schemeType} 
          options={schemeTypes} 
          onChange={(e) => setSchemeType(e.value)} 
          placeholder="Select" 
        />
        <Dropdown 
          label="Scheme Name" 
          required 
          value={schemeName} 
          options={schemeNames} 
          onChange={(e) => setSchemeName(e.value)} 
          placeholder="Select" 
        />
        <Dropdown 
          label="District" 
          required 
          value={district} 
          options={districts} 
          onChange={(e) => setDistrict(e.value)} 
          placeholder="Select" 
        />
      </div>

      <div className="flex gap-3 mb-8">
        <Button label="Search" icon="pi pi-search" onClick={handleSearch} className="bg-blue-600 px-6" />
        <Button label="Clear" icon="pi pi-refresh" severity="secondary" onClick={handleClear} outlined className="px-6" />
      </div>

      {showList && (
        <div className="animate-fadein">
          <Table
            title="Scheme Distribution Summary"
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