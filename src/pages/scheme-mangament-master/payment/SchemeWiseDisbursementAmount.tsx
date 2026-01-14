/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown, Table } from "@/ui/shared"; 

export default function SchemeWiseDisbursementAmount() {
  const [academicYear, setAcademicYear] = useState<any>(null);
  const [schemeType, setSchemeType] = useState<any>(null);
  const [schemeName, setSchemeName] = useState<any>(null);
  const [showList, setShowList] = useState(false);

  const academicYears = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" },
  ];

  const schemeTypes = [
    { label: "Pre Matric Scholarship", value: "PRE" },
    { label: "Post Matric Scholarship", value: "POST" },
  ];

  const schemeNames = [
    { label: "Swami Vivekananda Scholarship", value: "SVS" },
    { label: "Medhavi Chhatra Yojana", value: "MCY" },
  ];

  const disbursementList = [
    { id: 1, scheme: "Swami Vivekananda Scholarship", students: 1200, amount: 10500000 },
    { id: 2, scheme: "Medhavi Chhatra Yojana", students: 850, amount: 7425000 },
  ];

  const tableColumns = [
    { 
      field: "scheme", 
      header: "Scheme Name", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
    { 
      field: "students", 
      header: "Total Students", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
    {
      field: "amount",
      header: "Total Disbursed Amount (₹)",
      sortable: true,
      style: { whiteSpace: "nowrap" },
      body: (row: any) => `₹ ${row.amount.toLocaleString("en-IN")}`,
    },
  ];

  const handleClear = () => {
    setAcademicYear(null);
    setSchemeType(null);
    setSchemeName(null);
    setShowList(false);
  };

  return (
    <Card title="Scheme Wise Disbursement Amount">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Dropdown
          label="Academic Year"
          required
          value={academicYear}
          options={academicYears}
          onChange={(e) => setAcademicYear(e.value)}
          placeholder="Select Year"
        />

        <Dropdown
          label="Scheme Type"
          required
          value={schemeType}
          options={schemeTypes}
          onChange={(e) => setSchemeType(e.value)}
          placeholder="Select Type"
        />

        <Dropdown
          label="Scheme Name"
          required
          value={schemeName}
          options={schemeNames}
          onChange={(e) => setSchemeName(e.value)}
          placeholder="Select Name"
        />
      </div>

      <div className="flex gap-3 mb-8">
        <Button 
          label="Search" 
          icon="pi pi-search" 
          className="bg-blue-600 px-6" 
          onClick={() => setShowList(true)} 
        />
        <Button 
          label="Clear" 
          icon="pi pi-times" 
          severity="secondary"
          className="p-button-outlined px-6" 
          onClick={handleClear} 
        />
      </div>

      {showList && (
        <div className="animate-fadein">
          <Table
            title="Disbursement Details"
            columns={tableColumns}
            data={disbursementList}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-borderless shadow-sm"
            showGridlines={false} 
          />
        </div>
      )}
    </Card>
  );
}