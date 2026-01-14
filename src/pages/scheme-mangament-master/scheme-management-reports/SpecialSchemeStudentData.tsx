/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { RadioButton } from "primereact/radiobutton";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown, Table } from "@/ui/shared"; 

export default function SpecialSchemeStudentData() {
  const [filterBy, setFilterBy] = useState<"district" | "roll">("district");
  const [year, setYear] = useState<any>(null);
  const [scheme, setScheme] = useState<any>(null);
  const [district, setDistrict] = useState<any>("All");
  const [rollNo, setRollNo] = useState("");
  const [showList, setShowList] = useState(false);

  const years = [
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  const schemes = [
    { label: "Laptop Distribution Scheme", value: "Laptop" },
    { label: "Free Bicycle Scheme", value: "Bicycle" },
  ];

  const districts = [
    { label: "All", value: "All" },
    { label: "Bhopal", value: "Bhopal" },
    { label: "Sheopur", value: "Sheopur" },
    { label: "Ujjain", value: "Ujjain" },
  ];

  const studentData = [
    { id: 1, roll: "101", name: "Ravi Verma", district: "Sheopur", scheme: "Laptop", year: "2025-26" },
    { id: 2, roll: "102", name: "Anjali Sharma", district: "Bhopal", scheme: "Bicycle", year: "2025-26" },
  ];

  const tableColumns = [
    { field: "id", header: "Sr.No.", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "roll", header: "Roll No.", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "name", header: "Student Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "scheme", header: "Scheme", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "year", header: "Academic Year", sortable: true, style: { whiteSpace: "nowrap" } },
  ];

  const filteredData = studentData.filter((s) => {
    if (filterBy === "district") return district === "All" || s.district === district;
    if (filterBy === "roll") return rollNo === "" || s.roll === rollNo;
    return true;
  });

  const handleClear = () => {
    setYear(null);
    setScheme(null);
    setDistrict("All");
    setRollNo("");
    setShowList(false);
  };

  return (
    <Card title="Special Scheme Student Data Filter">
  
      <div className="flex gap-6 mb-6 p-2 bg-gray-50 rounded-lg w-fit">
        <div className="flex items-center gap-2">
          <RadioButton inputId="dist" checked={filterBy === "district"} onChange={() => setFilterBy("district")} />
          <label htmlFor="dist" className="cursor-pointer font-medium">By District</label>
        </div>
        <div className="flex items-center gap-2">
          <RadioButton inputId="roll" checked={filterBy === "roll"} onChange={() => setFilterBy("roll")} />
          <label htmlFor="roll" className="cursor-pointer font-medium">By Roll No.</label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Dropdown 
          label="Academic Year" 
          required 
          value={year} 
          options={years} 
          onChange={(e) => setYear(e.value)} 
          placeholder="Select" 
        />

        <Dropdown 
          label="Special Scheme" 
          required 
          value={scheme} 
          options={schemes} 
          onChange={(e) => setScheme(e.value)} 
          placeholder="Select" 
        />

        {filterBy === "district" ? (
          <Dropdown 
            label="District" 
            required 
            value={district} 
            options={districts} 
            onChange={(e) => setDistrict(e.value)} 
          />
        ) : (
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Roll No *</label>
            <InputText 
              value={rollNo} 
              onChange={(e) => setRollNo(e.target.value)} 
              className="w-full p-inputtext-sm" 
              placeholder="Enter Roll No" 
            />
          </div>
        )}
      </div>
      <div className="flex gap-3 mb-8">
        <Button 
          label="Search" 
          icon="pi pi-search" 
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
            title="Student List"
            columns={tableColumns}
            data={filteredData}
            showPagination={true}
            rowsPerPage={10}
                 className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}
    </Card>
  );
}