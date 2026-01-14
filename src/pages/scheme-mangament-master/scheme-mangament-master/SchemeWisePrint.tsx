/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown, Table } from "@/ui/shared"; 

export default function SchemeWisePrint() {
  const [year, setYear] = useState<any>(null);
  const [schemeType, setSchemeType] = useState<any>(null);
  const [schemeName, setSchemeName] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);

  const academicYearOptions = [
    { label: "2023-2024", value: "2023-24" },
    { label: "2024-2025", value: "2024-25" }
  ];

  const schemeTypeOptions = [
    { label: "Scholarship Scheme", value: "Scholarship" },
    { label: "Laptop Distribution Scheme", value: "Laptop" },
    { label: "Cycle Distribution Scheme", value: "Cycle" }
  ];

  const schemeNameOptions = [
    { label: "Mukhyamantri Medhavi Yojana", value: "MMY" },
    { label: "Free Laptop Distribution", value: "FLD" },
    { label: "Free Cycle Distribution", value: "FCD" }
  ];

  const districtOptions = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
    { label: "Ujjain", value: "Ujjain" }
  ];

  const tableColumns = [
    { field: "srNo", header: "Sr.No.", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "studentName", header: "Student Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "fatherName", header: "Father Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "samagraId", header: "Samagra ID", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "schoolName", header: "School Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "status", header: "Status", sortable: true, style: { whiteSpace: "nowrap" } },
    { 
      field: "action",
      header: "Action", 
      style: { whiteSpace: "nowrap", textAlign: 'center' as const }, 
      body: () => (
        <Button 
          icon="pi pi-print" 
          rounded 
          text 
          severity="help" 
          tooltip="Print Certificate"
        />
      ) 
    },
  ];

  const handleSearch = () => {
    if (!year || !schemeType || !schemeName || !district) {
      return; 
    }
    setShowResult(true);
  };

  const handleClear = () => {
    setYear(null);
    setSchemeType(null);
    setSchemeName(null);
    setDistrict(null);
    setShowResult(false);
  };

  return (
    <Card title="Scheme Wise Print / योजनावार प्रिंट">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Dropdown
          label="Academic Year"
          required
          value={year}
          options={academicYearOptions}
          onChange={(e) => setYear(e.value)}
          placeholder="Select Year"
        />
        <Dropdown
          label="Scheme Type"
          required
          value={schemeType}
          options={schemeTypeOptions}
          onChange={(e) => setSchemeType(e.value)}
          placeholder="Select Type"
        />
        <Dropdown
          label="Scheme Name"
          required
          value={schemeName}
          options={schemeNameOptions}
          onChange={(e) => setSchemeName(e.value)}
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
      </div>

      <div className="flex gap-3 mb-8">
        <Button label="Search" icon="pi pi-search" onClick={handleSearch} className="bg-blue-600 px-6" />
        <Button label="Clear" icon="pi pi-refresh" severity="secondary" onClick={handleClear} outlined className="px-6" />
      </div>

      {showResult && (
        <div className="animate-fadein mt-6">
          <Table
            title="Beneficiary List for Printing"
            columns={tableColumns}
            data={[]} 
            showPagination={true}
            rowsPerPage={10}
                   className="p-datatable-borderless shadow-sm"
          />
          
          <div className="flex justify-end mt-4">
            <Button 
                label="Print All Records" 
                icon="pi pi-print" 
                severity="success" 
                className="px-6"
            />
          </div>
        </div>
      )}
    </Card>
  );
}