/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Dropdown, Table } from "@/ui/shared"; 

export default function LaptopDistributionReport() {

  const [academicYear, setAcademicYear] = useState<any>(null);
  const [specialScheme, setSpecialScheme] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [rollNo, setRollNo] = useState("");

  const studentData = [
    { id: 1, rollNo: "101", name: "Amit Sharma", district: "Bhopal", scheme: "Scheme A", year: "2025-2026", laptopGiven: "Yes" },
    { id: 2, rollNo: "102", name: "Neha Verma", district: "Indore", scheme: "Scheme B", year: "2025-2026", laptopGiven: "No" },
    { id: 3, rollNo: "103", name: "Rohit Singh", district: "Bhopal", scheme: "Scheme A", year: "2024-2025", laptopGiven: "Yes" },
    { id: 4, rollNo: "104", name: "Priya Jain", district: "Gwalior", scheme: "Scheme C", year: "2025-2026", laptopGiven: "Yes" },
  ];

  const years = [
    { label: "2024-2025", value: "2024-2025" },
    { label: "2025-2026", value: "2025-2026" },
  ];
  const schemes = [
    { label: "Scheme A", value: "Scheme A" },
    { label: "Scheme B", value: "Scheme B" },
    { label: "Scheme C", value: "Scheme C" },
  ];
  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Gwalior", value: "Gwalior" },
  ];

  const [filteredData, setFilteredData] = useState(studentData);
  const tableColumns = [
    { field: "rollNo", header: "Roll No", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "name", header: "Student Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "scheme", header: "Special Scheme", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "year", header: "Academic Year", sortable: true, style: { whiteSpace: "nowrap" } },
    { 
      field: "laptopGiven", 
      header: "Laptop Given", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: any) => (
        <Tag 
          value={row.laptopGiven} 
          severity={row.laptopGiven === 'Yes' ? 'success' : 'danger'} 
          rounded 
        />
      )
    },
  ];

  const handleSearch = () => {
    const filtered = studentData.filter((s) => {
      return (
        (academicYear ? s.year === academicYear : true) &&
        (specialScheme ? s.scheme === specialScheme : true) &&
        (district ? s.district === district : true) &&
        (rollNo ? s.rollNo.includes(rollNo) : true)
      );
    });
    setFilteredData(filtered);
  };

  const handleClear = () => {
    setAcademicYear(null);
    setSpecialScheme(null);
    setDistrict(null);
    setRollNo("");
    setFilteredData(studentData);
  };

  return (
    <Card title="Laptop Distribution Student Data Report / लैपटॉप वितरण छात्र डेटा रिपोर्ट">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Dropdown
          label="Academic Year"
          value={academicYear}
          options={years}
          onChange={(e) => setAcademicYear(e.value)}
          placeholder="Select Year"
        />
        <Dropdown
          label="Special Scheme"
          value={specialScheme}
          options={schemes}
          onChange={(e) => setSpecialScheme(e.value)}
          placeholder="Select Scheme"
        />
        <Dropdown
          label="District"
          value={district}
          options={districts}
          onChange={(e) => setDistrict(e.value)}
          placeholder="Select District"
        />
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Roll No</label>
          <InputText
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="Search Roll No"
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
      <div className="animate-fadein">
        <Table
          title="Beneficiary Students List"
          columns={tableColumns}
          data={filteredData}
          showPagination={true}
          rowsPerPage={5}
                   className="p-datatable-borderless shadow-sm"
        />
      </div>
    </Card>
  );
}