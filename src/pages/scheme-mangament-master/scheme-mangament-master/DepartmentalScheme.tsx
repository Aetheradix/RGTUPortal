/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dialog } from "primereact/dialog";
import { Dropdown, Table } from "@/ui/shared"; 

interface SchemeRow {
  id: number;
  department: string;
  schemeType: string;
  schemeName: string;
  academicYear: string;
  benefitAmount: number;
  incomeLimit: string;
  status: string;
}

export default function DepartmentalScheme() {
  const [showAdd, setShowAdd] = useState(false);
  const [department, setDepartment] = useState<any>(null);
  const [schemeType, setSchemeType] = useState<any>(null);
  const [academicYear, setAcademicYear] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);
  const [viewRow, setViewRow] = useState<SchemeRow | null>(null);

  const departments = [
    { label: "School Education", value: "School Education" },
    { label: "Tribal Welfare", value: "Tribal Welfare" },
  ];

  const schemeTypes = [
    { label: "Scholarship", value: "Scholarship" },
    { label: "Financial Assistance", value: "Financial Assistance" },
  ];

  const academicYears = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" },
  ];

  const schemeList: SchemeRow[] = [
    {
      id: 1,
      department: "School Education",
      schemeType: "Scholarship",
      schemeName: "Merit Scholarship",
      academicYear: "2024-25",
      benefitAmount: 15000,
      incomeLimit: "2.5 Lakh",
      status: "Active",
    },
    {
      id: 2,
      department: "Tribal Welfare",
      schemeType: "Financial Assistance",
      schemeName: "ST Support Scheme",
      academicYear: "2024-25",
      benefitAmount: 20000,
      incomeLimit: "3 Lakh",
      status: "Active",
    },
  ];

  const tableColumns = [
    { field: "department", header: "Department", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "schemeType", header: "Scheme Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "schemeName", header: "Scheme Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "academicYear", header: "Academic Year", sortable: true, style: { whiteSpace: "nowrap" } },
    { 
      field: "benefitAmount", 
      header: "Benefit (₹)", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: SchemeRow) => `₹${row.benefitAmount.toLocaleString('en-IN')}`
    },
    { field: "incomeLimit", header: "Income Limit", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "status", header: "Status", sortable: true, style: { whiteSpace: "nowrap" } },
    { 
      field: "action",
      header: "Action", 
      style: { whiteSpace: "nowrap", textAlign: 'center' as const }, 
      body: (row: SchemeRow) => (
        <Button 
          icon="pi pi-eye" 
          rounded 
          text 
          severity="info" 
          onClick={() => setViewRow(row)} 
          tooltip="View Details"
        />
      ) 
    },
  ];

  if (showAdd) {
    return (
      <Card title="Add Departmental Scheme">
        <div className="flex justify-end mb-4">
          <Button label="Back to List" icon="pi pi-arrow-left" severity="secondary" onClick={() => setShowAdd(false)} text />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown label="Department" required options={departments} placeholder="Select Department" />
          <Dropdown label="Scheme Type" required options={schemeTypes} placeholder="Select Type" />
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Scheme Name *</label>
            <InputText className="w-full p-inputtext-sm" placeholder="Enter Scheme Name" />
          </div>
          <Dropdown label="Academic Year" required options={academicYears} placeholder="Select Year" />
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Benefit Amount ₹ *</label>
            <InputText className="w-full p-inputtext-sm" placeholder="Enter Amount" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold">Income Limit *</label>
            <InputText className="w-full p-inputtext-sm" placeholder="e.g. 2.5 Lakh" />
          </div>
          <Dropdown label="Status" required options={[{ label: "Active", value: "Active" }, { label: "Inactive", value: "Inactive" }]} />
        </div>

        <div className="flex gap-3 mt-8">
          <Button label="Save Scheme" icon="pi pi-check" className="bg-blue-600 px-6" />
          <Button label="Clear" icon="pi pi-times" severity="secondary" outlined className="px-6" />
        </div>
      </Card>
    );
  }

  return (
    <Card title="Departmental Scheme Management / विभागीय योजना प्रबंधन">
      <div className="flex justify-end mb-4">
        <Button label="Add New Scheme" icon="pi pi-plus" onClick={() => setShowAdd(true)} className="bg-green-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Dropdown 
          label="Department" 
          required 
          value={department} 
          options={departments} 
          onChange={(e) => setDepartment(e.value)} 
          placeholder="All Departments" 
        />
        <Dropdown 
          label="Scheme Type" 
          required 
          value={schemeType} 
          options={schemeTypes} 
          onChange={(e) => setSchemeType(e.value)} 
          placeholder="All Types" 
        />
        <Dropdown 
          label="Academic Year" 
          required 
          value={academicYear} 
          options={academicYears} 
          onChange={(e) => setAcademicYear(e.value)} 
          placeholder="Select Year" 
        />
      </div>

      <div className="flex gap-3 mb-8">
        <Button label="Search" icon="pi pi-search" onClick={() => setShowResult(true)} className="bg-blue-600 px-6" />
        <Button label="Clear" icon="pi pi-refresh" severity="secondary" onClick={() => setShowResult(false)} outlined className="px-6" />
      </div>

      {showResult && (
        <div className="animate-fadein">
          <Table
            title="Active Departmental Schemes"
            columns={tableColumns}
            data={schemeList}
            showPagination={true}
            rowsPerPage={10}
                   className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}

      <Dialog 
        header="Scheme Information" 
        visible={!!viewRow} 
        style={{ width: "30vw" }} 
        onHide={() => setViewRow(null)}
        draggable={false}
        resizable={false}
      >
        {viewRow && (
          <div className="grid grid-cols-1 gap-3">
            <div className="flex justify-between border-b pb-2"><span className="font-bold text-gray-600">Scheme:</span> <span>{viewRow.schemeName}</span></div>
            <div className="flex justify-between border-b pb-2"><span className="font-bold text-gray-600">Department:</span> <span>{viewRow.department}</span></div>
            <div className="flex justify-between border-b pb-2"><span className="font-bold text-gray-600">Type:</span> <span>{viewRow.schemeType}</span></div>
            <div className="flex justify-between border-b pb-2"><span className="font-bold text-gray-600">Year:</span> <span>{viewRow.academicYear}</span></div>
            <div className="flex justify-between border-b pb-2"><span className="font-bold text-gray-600">Benefit:</span> <span className="text-green-600 font-bold">₹{viewRow.benefitAmount}</span></div>
            <div className="flex justify-between border-b pb-2"><span className="font-bold text-gray-600">Income Limit:</span> <span>{viewRow.incomeLimit}</span></div>
            <div className="flex justify-between"><span className="font-bold text-gray-600">Status:</span> <span>{viewRow.status}</span></div>
          </div>
        )}
      </Dialog>
    </Card>
  );
}