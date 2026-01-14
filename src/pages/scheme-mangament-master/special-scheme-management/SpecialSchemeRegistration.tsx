/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown, Table } from "@/ui/shared"; 

export default function SpecialSchemeRegistration() {
  const [year, setYear] = useState<any>(null);
  const [schemeType, setSchemeType] = useState<any>(null);
  const [schemeName, setSchemeName] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [studentName, setStudentName] = useState("");
  const [dob, setDob] = useState<Date | null>(null);
  const [mobile, setMobile] = useState("");
  const [showList, setShowList] = useState(false);

  const years = [
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  const schemeTypes = [
    { label: "Departmental Scheme", value: "Departmental" },
    { label: "Special Scheme", value: "Special" },
  ];

  const schemeNames = [
    { label: "Laptop Distribution Scheme", value: "Laptop" },
    { label: "Free Bicycle Scheme", value: "Bicycle" },
  ];

  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Ujjain", value: "Ujjain" },
    { label: "Sheopur", value: "Sheopur" },
  ];

  const students = [
    { id: 1, name: "Ravi Verma", scheme: "Laptop", district: "Sheopur", year: "2025-26" },
    { id: 2, name: "Anjali Sharma", scheme: "Bicycle", district: "Bhopal", year: "2025-26" },
  ];


  const tableColumns = [
    { field: "id", header: "Sr.No.", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "name", header: "Student Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "scheme", header: "Scheme", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "year", header: "Academic Year", sortable: true, style: { whiteSpace: "nowrap" } },
  ];

  const handleClear = () => {
    setYear(null);
    setSchemeType(null);
    setSchemeName(null);
    setDistrict(null);
    setStudentName("");
    setDob(null);
    setMobile("");
    setShowList(false);
  };

  return (
    <Card title="Special Scheme Registration / विशेष योजना पंजीकरण">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Dropdown 
          label="Academic Year" 
          required 
          value={year} 
          options={years} 
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
          <label className="text-sm font-semibold">Student Name *</label>
          <InputText 
            value={studentName} 
            onChange={(e) => setStudentName(e.target.value)} 
            placeholder="Enter Name"
            className="w-full p-inputtext-sm" 
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Date of Birth *</label>
          <Calendar 
            value={dob} 
            onChange={(e) => setDob(e.value ?? null)} 
            className="w-full p-inputtext-sm" 
            dateFormat="dd/mm/yy" 
            showIcon 
            placeholder="Select DOB"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Mobile No *</label>
          <InputText 
            value={mobile} 
            onChange={(e) => setMobile(e.target.value)} 
            className="w-full p-inputtext-sm" 
            maxLength={10} 
            placeholder="Enter Mobile No"
          />
        </div>
      </div>


      <div className="flex gap-3 mb-8">
        <Button 
          label="Save Registration" 
          icon="pi pi-save" 
          onClick={() => setShowList(true)} 
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
        <div className="animate-fadein">
          <Table
            title="Registered Students List"
            columns={tableColumns}
            data={students}
            showPagination={true}
            rowsPerPage={5}
       
                     className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}
    </Card>
  );
}