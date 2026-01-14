/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { Dropdown, Table } from "@/ui/shared"; 

interface StudentRow {
  id: number;
  studentName: string;
  scheme: string;
  accountNo: string;
  ifsc: string;
  bankName: string;
  status: string;
}

export default function UpdateSpecialSchemeStudents() {
  const [year, setYear] = useState<any>(null);
  const [scheme, setScheme] = useState<any>(null);
  const [status, setStatus] = useState<any>("ALL");
  const [showResult, setShowResult] = useState(false);

  const academicYears = [
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  const schemes = [
    { label: "Laptop Distribution Scheme", value: "Laptop" },
    { label: "Free Bicycle Scheme", value: "Bicycle" },
    { label: "Merit Scholarship Scheme", value: "Merit" },
  ];

  const accountStatusOptions = [
    { label: "ALL", value: "ALL" },
    { label: "Verified", value: "Verified" },
    { label: "Pending", value: "Pending" },
    { label: "Rejected", value: "Rejected" },
  ];

  const studentData: StudentRow[] = [
    {
      id: 1,
      studentName: "Amit Verma",
      scheme: "Laptop Distribution Scheme",
      accountNo: "123456789012",
      ifsc: "SBIN0001234",
      bankName: "State Bank of India",
      status: "Pending",
    },
    {
      id: 2,
      studentName: "Neha Sharma",
      scheme: "Free Bicycle Scheme",
      accountNo: "987654321098",
      ifsc: "HDFC0005678",
      bankName: "HDFC Bank",
      status: "Verified",
    },
  ];
const tableColumns = [
  { 
    field: "studentName", 
    header: "Student Name", 
    sortable: true, 
    style: { whiteSpace: "nowrap" } 
  },
  { 
    field: "scheme", 
    header: "Scheme", 
    sortable: true, 
    style: { whiteSpace: "nowrap" } 
  },
  { 
    field: "accountNo", 
    header: "Account No.", 
    style: { whiteSpace: "nowrap", width: '200px' },
    body: (row: StudentRow) => (
      <InputText defaultValue={row.accountNo} className="p-inputtext-sm w-full" placeholder="Account No" />
    )
  },
  { 
    field: "ifsc", 
    header: "IFSC Code", 
    style: { whiteSpace: "nowrap", width: '150px' },
    body: (row: StudentRow) => (
      <InputText defaultValue={row.ifsc} className="p-inputtext-sm w-full uppercase" placeholder="IFSC" />
    )
  },
  { 
    field: "bankName", 
    header: "Bank Name", 
    style: { whiteSpace: "nowrap", width: '250px' },
    body: (row: StudentRow) => (
      <InputText defaultValue={row.bankName} className="p-inputtext-sm w-full" placeholder="Bank Name" />
    )
  },
  { 
    field: "status", 
    header: "Status", 
    sortable: true, 
 
    style: { whiteSpace: "nowrap", textAlign: 'center' as const }, 
    body: (row: StudentRow) => {
      const severity = row.status === 'Verified' ? 'success' : row.status === 'Pending' ? 'warning' : 'danger';
      return <Tag value={row.status} severity={severity} rounded />;
    }
  },
  { 
    field: "action", 
    header: "Action", 
   
    style: { whiteSpace: "nowrap", textAlign: 'center' as const }, 
    body: () => (
      <Button 
        icon="pi pi-save" 
        label="Update" 
        size="small" 
        severity="info" 
        className="p-button-raised p-button-sm"
      />
    ) 
  },
];
  const handleSearch = () => {
    if (!year || !scheme) {
      return;
    }
    setShowResult(true);
  };

  const handleClear = () => {
    setYear(null);
    setScheme(null);
    setStatus("ALL");
    setShowResult(false);
  };

  return (
    <Card title="Update Bank Details Of Special Scheme Students / विशेष योजना छात्रों के बैंक विवरण अपडेट करें">
   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Dropdown
          label="Academic Year"
          required
          value={year}
          options={academicYears}
          onChange={(e) => setYear(e.value)}
          placeholder="Select Year"
        />

        <Dropdown
          label="Special Scheme"
          required
          value={scheme}
          options={schemes}
          onChange={(e) => setScheme(e.value)}
          placeholder="Select Scheme"
        />

        <Dropdown
          label="Bank Account Status"
          value={status}
          options={accountStatusOptions}
          onChange={(e) => setStatus(e.value)}
        />
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

      {showResult && (
        <div className="animate-fadein mt-6">
          <Table
            title="Beneficiary Bank Details"
            columns={tableColumns}
            data={studentData}
            showPagination={true}
            rowsPerPage={10}
                     className="p-datatable-borderless shadow-sm"
          />
          
          <div className="flex justify-end mt-4">
             <Button 
                label="Update All Records" 
                icon="pi pi-check-square" 
                severity="success" 
                className="px-6"
             />
          </div>
        </div>
      )}
    </Card>
  );
}