/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown, Table } from "@/ui/shared"; 

interface StudentRow {
  id: number;
  studentName: string;
  fatherName: string;
  schemeName: string;
  district: string;
  className: string;
  eligibleAmount: number;
}

export default function DistrictWiseEligibleStudentReport() {
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
    { label: "Swami Vivekananda Post Matric Scholarship", value: "SVPMSS" },
    { label: "Laptop Distribution Scheme", value: "Laptop" },
  ];

  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Agar Malwa", value: "Agar Malwa" },
    { label: "Sheopur", value: "Sheopur" },
  ];

  const studentsData: StudentRow[] = [
    {
      id: 1,
      studentName: "Ravi Sharma",
      fatherName: "Mahesh Sharma",
      schemeName: "Swami Vivekananda Post Matric Scholarship",
      district: "Bhopal",
      className: "Class 11",
      eligibleAmount: 12000,
    },
    {
      id: 2,
      studentName: "Pooja Verma",
      fatherName: "Suresh Verma",
      schemeName: "Laptop Distribution Scheme",
      district: "Agar Malwa",
      className: "Class 12",
      eligibleAmount: 25000,
    },
  ];

  const tableColumns = [
    { field: "studentName", header: "Student Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "fatherName", header: "Father Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "schemeName", header: "Scheme Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "className", header: "Class", sortable: true, style: { whiteSpace: "nowrap" } },
    { 
      field: "eligibleAmount", 
      header: "Eligible Amount (₹)", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: StudentRow) => `₹${row.eligibleAmount.toLocaleString('en-IN')}` 
    },
  ];

  const handleSearch = () => {
    if (!year || !schemeType || !schemeName) {
      return; 
    }
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
    <Card title="District Wise Eligible Students Report / जिलावार पात्र छात्र रिपोर्ट">

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
          value={district} 
          options={districts} 
          onChange={(e) => setDistrict(e.value)} 
          placeholder="All Districts" 
        />
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

 
      {showList && (
        <div className="animate-fadein mt-4">
          <Table
            title="Eligible Students Summary"
            columns={tableColumns}
            data={studentsData}
            showPagination={true}
            rowsPerPage={10}
       
                     className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}
    </Card>
  );
}