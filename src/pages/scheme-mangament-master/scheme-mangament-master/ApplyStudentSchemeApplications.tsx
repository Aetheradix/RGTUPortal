/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown, Table } from "@/ui/shared"; 

export default function ApplyStudentSchemeApplications() {
  const [year, setYear] = useState<any>(null);
  const [schemeType, setSchemeType] = useState<any>(null);
  const [schemeName, setSchemeName] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [studentName, setStudentName] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [showTable, setShowTable] = useState(false);

  const academicYears = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" }
  ];

  const schemeTypes = [
    { label: "Scholarship", value: "Scholarship" },
    { label: "Financial Aid", value: "FinancialAid" },
    { label: "Free Resources", value: "Resources" }
  ];

  const schemeNames = [
    { label: "Merit Scholarship", value: "Merit Scholarship" },
    { label: "Laptop Assistance", value: "Laptop Assistance" },
    { label: "Bicycle Distribution", value: "Bicycle Distribution" }
  ];

  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Ujjain", value: "Ujjain" }
  ];

  const applicationList = [
    {
      id: 1,
      student: "Rohit Verma",
      scheme: "Merit Scholarship",
      district: "Bhopal",
      status: "Applied"
    },
    {
      id: 2,
      student: "Pooja Patil",
      scheme: "Laptop Assistance",
      district: "Indore",
      status: "Pending"
    }
  ];

 
  const tableColumns = [
    { field: "student", header: "Student Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "scheme", header: "Scheme", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { 
      field: "status", 
      header: "Application Status", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: any) => (
        <span className={`font-semibold ${row.status === 'Applied' ? 'text-blue-600' : 'text-orange-600'}`}>
          {row.status}
        </span>
      )
    },
  ];

  const handleSearch = () => {
    if (!year || !schemeType || !schemeName || !district) {
      return; 
    }
    setShowTable(true);
  };

  const handleClear = () => {
    setYear(null);
    setSchemeType(null);
    setSchemeName(null);
    setDistrict(null);
    setStudentName("");
    setDob(null);
    setShowTable(false);
  };

  return (
    <Card title="Apply Student Scheme Applications">
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

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Student Name</label>
          <InputText 
            value={studentName} 
            onChange={(e) => setStudentName(e.target.value)} 
            className="w-full p-inputtext-sm" 
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Date of Birth</label>
          <Calendar 
            value={dob} 
            onChange={(e) => setDob(e.value as Date)} 
            showIcon 
            className="w-full p-inputtext-sm" 
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
            title="Recent Applications"
            columns={tableColumns}
            data={applicationList}
            showPagination={true}
            rowsPerPage={5}
                      className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}
    </Card>
  );
}