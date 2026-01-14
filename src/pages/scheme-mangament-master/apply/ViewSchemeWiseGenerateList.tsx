/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";

export default function ViewSchemeWiseGeneratedList() {
  const [academicYear, setAcademicYear] = useState<any>(null);
  const [division, setDivision] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [schemeTitle, setSchemeTitle] = useState<any>(null);
  const [studentClass, setStudentClass] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);

  const academicYears = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" },
  ];

  const divisions = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Ujjain", value: "Ujjain" },
  ];

  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Sehore", value: "Sehore" },
    { label: "Agar Malwa", value: "Agar Malwa" },
  ];

  const schemeTitles = [
    { label: "Merit Scholarship", value: "Merit Scholarship" },
    { label: "ST Support Scheme", value: "ST Support Scheme" },
  ];

  const classes = [
    { label: "Class 9", value: "9" },
    { label: "Class 10", value: "10" },
    { label: "Class 11", value: "11" },
    { label: "Class 12", value: "12" },
  ];

  const appliedStudents = [
    {
      id: 1,
      studentName: "Amit Verma",
      fatherName: "Ramesh Verma",
      district: "Bhopal",
      class: "10",
      scheme: "Merit Scholarship",
      status: "Approved",
    },
    {
      id: 2,
      studentName: "Pooja Sahu",
      fatherName: "Mohan Sahu",
      district: "Sehore",
      class: "12",
      scheme: "ST Support Scheme",
      status: "Pending",
    },
  ];

  const tableColumns = [
    { field: "studentName", header: "Student Name", sortable: true  , style: { whiteSpace: "nowrap" } },
    { field: "fatherName", header: "Father Name", sortable: true  , style: { whiteSpace: "nowrap" }},
    { field: "district", header: "District", sortable: true , style: { whiteSpace: "nowrap" } },
    { field: "class", header: "Class", sortable: true  , style: { whiteSpace: "nowrap" }},
    { field: "scheme", header: "Scheme", sortable: true  , style: { whiteSpace: "nowrap" }},
    { 
      field: "status", 
      header: "Status",
      body: (rowData: any) => (
        <span className={`px-2 py-1 rounded-md text-sm font-medium ${
          rowData.status === 'Approved' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
        }`}>
          {rowData.status}
        </span>
      )
    },
  ];

  const handleSearch = () => setShowResult(true);

  const handleClear = () => {
    setAcademicYear(null);
    setDivision(null);
    setDistrict(null);
    setSchemeTitle(null);
    setStudentClass(null);
    setShowResult(false);
  };

  return (
    <Card title="Scheme Applied Students List / योजना के लिए आवेदन करने वाले छात्रों की सूची">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-3">
        <Dropdown 
          label="Select Academic Year / शैक्षणिक वर्ष" 
          required 
          value={academicYear} 
          options={academicYears} 
          onChange={(e) => setAcademicYear(e.value)} 
          placeholder="Select" 
        />

        <Dropdown 
          label="Select Division / संभाग" 
          required 
          value={division} 
          options={divisions} 
          onChange={(e) => setDivision(e.value)} 
          placeholder="Select" 
        />

        <Dropdown 
          label="Select District / जिला" 
          required 
          value={district} 
          options={districts} 
          onChange={(e) => setDistrict(e.value)} 
          placeholder="Select" 
        />

        <Dropdown 
          label="Select Scheme Title / योजना" 
          required 
          value={schemeTitle} 
          options={schemeTitles} 
          onChange={(e) => setSchemeTitle(e.value)} 
          placeholder="Select" 
        />

        <Dropdown 
          label="Select Class / कक्षा" 
          required 
          value={studentClass} 
          options={classes} 
          onChange={(e) => setStudentClass(e.value)} 
          placeholder="Select" 
        />
      </div>

      <div className="flex gap-3 mb-6">
        <Button label="Search" icon="pi pi-search" onClick={handleSearch} />
        <Button label="Clear" icon="pi pi-times" severity="secondary" onClick={handleClear} />
      </div>

      {showResult && (
        <Table 
          columns={tableColumns} 
          data={appliedStudents} 
          showPagination={true} 
          rowsPerPage={10}
            className="p-datatable-borderless shadow-sm"
        />
      )}
    </Card>
  );
}