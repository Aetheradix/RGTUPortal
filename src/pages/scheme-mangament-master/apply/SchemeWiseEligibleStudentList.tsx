/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Dropdown from "@/ui/shared/Dropdown";
import Input from "@/ui/shared/Input";
import Table from "@/ui/shared/Table";

export default function SchemeWiseEligibleStudentList() {
  const [udiseCode] = useState("233203OSD03");
  const [academicYear, setAcademicYear] = useState<any>(null);
  const [scheme, setScheme] = useState<any>(null);
  const [studentClass, setStudentClass] = useState<any>("All");
  const [showResult, setShowResult] = useState(false);

  const academicYears = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" },
  ];

  const schemes = [
    { label: "Merit Scholarship", value: "Merit Scholarship" },
    { label: "ST Support Scheme", value: "ST Support Scheme" },
    { label: "Girl Child Education Scheme", value: "Girl Child Education Scheme" },
  ];

  const classes = [
    { label: "All", value: "All" },
    { label: "Class 9", value: "9" },
    { label: "Class 10", value: "10" },
    { label: "Class 11", value: "11" },
    { label: "Class 12", value: "12" },
  ];

  const eligibleStudents = [
    {
      id: 1,
      studentName: "Amit Verma",
      fatherName: "Ramesh Verma",
      class: "10",
      scheme: "Merit Scholarship",
      status: "Eligible",
    },
    {
      id: 2,
      studentName: "Pooja Sahu",
      fatherName: "Mohan Sahu",
      class: "12",
      scheme: "Girl Child Education Scheme",
      status: "Eligible",
    },
  ];

  const tableColumns = [
    { field: "studentName", header: "Student Name", sortable: true },
    { field: "fatherName", header: "Father Name", sortable: true },
    { field: "class", header: "Class", sortable: true },
    { field: "scheme", header: "Scheme", sortable: true },
    { 
      field: "status", 
      header: "Eligibility Status",
      body: (rowData: any) => (
        <span className="font-semibold text-green-600">{rowData.status}</span>
      )
    },
  ];

  const handleSearch = () => setShowResult(true);

  const handleClear = () => {
    setAcademicYear(null);
    setScheme(null);
    setStudentClass("All");
    setShowResult(false);
  };

  return (
    <Card title="Scheme Wise Eligible Student List">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-3">
        <Input 
          label="School UDISE Code" 
          value={udiseCode} 
          disabled 
        />

        <Dropdown 
          label="Select Academic Year" 
          required 
          value={academicYear} 
          options={academicYears} 
          onChange={(e) => setAcademicYear(e.value)} 
          placeholder="Select" 
        />

        <Dropdown 
          label="Select Scheme" 
          required 
          value={scheme} 
          options={schemes} 
          onChange={(e) => setScheme(e.value)} 
          placeholder="Select" 
        />

        <Dropdown 
          label="Select Class" 
          value={studentClass} 
          options={classes} 
          onChange={(e) => setStudentClass(e.value)} 
        />
      </div>

      <div className="flex gap-3 mb-6">
        <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
        <Button label="Clear" icon="pi pi-times" severity="secondary" onClick={handleClear} />
      </div>

      {showResult && (
        <Table 
          columns={tableColumns} 
          data={eligibleStudents} 
          showPagination={true} 
          rowsPerPage={10}
            className="p-datatable-borderless shadow-sm"
        />
      )}
    </Card>
  );
}