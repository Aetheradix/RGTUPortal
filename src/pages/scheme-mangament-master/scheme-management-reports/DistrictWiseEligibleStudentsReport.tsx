/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown, Table } from "@/ui/shared"; 

export default function DistrictWiseEligibleStudentsReport() {
  const [year, setYear] = useState<any>("2025-26");
  const [schemeType, setSchemeType] = useState<any>(null);
  const [schemeName, setSchemeName] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [showList, setShowList] = useState(false);

  const academicYears = [
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  const schemeTypes = [
    { label: "Departmental Scheme - (1)", value: "Departmental Scheme - (1)" },
    { label: "Central Scheme - (2)", value: "Central Scheme - (2)" },
  ];

  const schemeNames = [
    {
      label: "Swami Vivekananda Post Matric Scholarship Scheme -1.3",
      value: "SVPMS",
    },
    {
      label: "Post Matric Scholarship for OBC -2.1",
      value: "PMSOBC",
    },
  ];

  const districts = [
    { label: "Agar Malwa", value: "Agar Malwa" },
    { label: "Bhopal", value: "Bhopal" },
    { label: "Ujjain", value: "Ujjain" },
  ];

  const eligibleStudents = [
    { id: 1, district: "Agar Malwa", total: 120, boys: 65, girls: 55 },
    { id: 2, district: "Bhopal", total: 210, boys: 110, girls: 100 },
    { id: 3, district: "Ujjain", total: 150, boys: 80, girls: 70 },
  ];

  const tableColumns = [
    { field: "id", header: "Sr.No.", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "total", header: "Total Eligible Students", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "boys", header: "Boys", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "girls", header: "Girls", sortable: true, style: { whiteSpace: "nowrap" } },
  ];

  const handleClear = () => {
    setSchemeType(null);
    setSchemeName(null);
    setDistrict(null);
    setShowList(false);
  };

  return (
    <Card title="District Wise Eligible Students Report">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <Dropdown
          label="Academic Year"
          required
          value={year}
          options={academicYears}
          onChange={(e) => setYear(e.value)}
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
          placeholder="Select"
        />
      </div>

      <div className="flex gap-3 mb-6">
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
        <div className="animate-fadein mt-6">
          <Table
            title="Eligible Students District Wise"
            columns={tableColumns}
            data={eligibleStudents}
            showPagination={true}
            rowsPerPage={10}

                     className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}
    </Card>
  );
}