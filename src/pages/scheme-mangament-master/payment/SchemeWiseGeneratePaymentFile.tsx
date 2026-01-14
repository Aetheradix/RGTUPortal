/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import Dropdown from "@/ui/shared/Dropdown";
import Table from "@/ui/shared/Table";

export default function SchemeWiseGeneratePaymentFileModule() {
  const [academicYear, setAcademicYear] = useState<any>(null);
  const [division, setDivision] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [scheme, setScheme] = useState<any>(null);
  const [studentClass, setStudentClass] = useState<any>(null);
  const [showList, setShowList] = useState(false);

  const academicYears = [
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  const divisions = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
  ];

  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Sehore", value: "Sehore" },
  ];

  const schemes = [
    { label: "Swami Vivekananda Post Matric Scholarship Scheme -1.3", value: "SVPMS" },
    { label: "Merit Scholarship Scheme", value: "Merit" },
  ];

  const classes = [
    { label: "Class -11", value: "11" },
    { label: "Class -12", value: "12" },
  ];

  const paymentList = [
    { id: 1, student: "Amit Verma", bank: "SBI", account: "XXXX1122", amount: 8500 },
    { id: 2, student: "Neha Sharma", bank: "PNB", account: "XXXX2244", amount: 9200 },
  ];

  const tableColumns = [
    { 
      field: "student", 
      header: "Student Name", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
    { 
      field: "bank", 
      header: "Bank Name", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
    { 
      field: "account", 
      header: "Account No.", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
    { 
      field: "amount", 
      header: "Amount (₹)", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (rowData: any) => `₹ ${rowData.amount.toLocaleString("en-IN")}`
    },
    { 
      field: "action", 
      header: "Action", 
      style: { whiteSpace: "nowrap", textAlign: "center" as const }, 
      body: () => (
        <Button 
          label="Generate File" 
          icon="pi pi-download" 
          className="p-button-sm p-button-outlined" 
        />
      )
    },
  ];

  const handleClear = () => {
    setAcademicYear(null);
    setDivision(null);
    setDistrict(null);
    setScheme(null);
    setStudentClass(null);
    setShowList(false);
  };

  return (
    <Card title="Scheme Wise Generate Payment File / योजना के अनुसार भुगतान फ़ाइल जनरेट करें">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Dropdown
          label="Select Academic Year"
          required
          value={academicYear}
          options={academicYears}
          onChange={(e) => setAcademicYear(e.value)}
          placeholder="Select"
        />
        <Dropdown
          label="Select Division Name"
          required
          value={division}
          options={divisions}
          onChange={(e) => setDivision(e.value)}
          placeholder="Select"
        />
        <Dropdown
          label="Select District Name"
          required
          value={district}
          options={districts}
          onChange={(e) => setDistrict(e.value)}
          placeholder="Select"
        />
        <Dropdown
          label="Select Scheme Title"
          required
          value={scheme}
          options={schemes}
          onChange={(e) => setScheme(e.value)}
          placeholder="Select"
        />
        <Dropdown
          label="Select Class"
          required
          value={studentClass}
          options={classes}
          onChange={(e) => setStudentClass(e.value)}
          placeholder="Select"
        />
      </div>

      <div className="flex gap-3 mt-6">
        <Button label="Search" icon="pi pi-search" onClick={() => setShowList(true)} className="bg-blue-600 px-6" />
        <Button label="Clear" icon="pi pi-times" severity="secondary" onClick={handleClear} className="px-6" />
      </div>

      {showList && (
        <div className="mt-6 animate-fadein">
          <Table
            title="Payment File Preview"
            columns={tableColumns}
            data={paymentList}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}
    </Card>
  );
}