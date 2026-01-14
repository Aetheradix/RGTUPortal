/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Dropdown, Table } from "@/ui/shared"; 

interface SchemeRow {
  id: number;
  department: string;
  schemeType: string;
  schemeName: string;
  academicYear: string;
  district: string;
  benefitAmount: number;
  eligibility: string;
}

export default function DepartmentalSchemeDetails() {
  const [department, setDepartment] = useState<any>(null);
  const [schemeType, setSchemeType] = useState<any>(null);
  const [district, setDistrict] = useState<any>(null);
  const [showResult, setShowResult] = useState(false);
  const [viewRow, setViewRow] = useState<SchemeRow | null>(null);

  const departments = [
    { label: "School Education", value: "School Education" },
    { label: "Tribal Welfare", value: "Tribal Welfare" },
  ];

  const schemeTypes = [
    { label: "Scholarship", value: "Scholarship" },
    { label: "Financial Assistance", value: "Financial" },
  ];

  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Indore", value: "Indore" },
  ];

  const schemeData: SchemeRow[] = [
    {
      id: 1,
      department: "School Education",
      schemeType: "Scholarship",
      schemeName: "Merit Scholarship Scheme",
      academicYear: "2024-25",
      district: "Bhopal",
      benefitAmount: 15000,
      eligibility: "Class 12 Passed, Income below 2.5 Lakh",
    },
    {
      id: 2,
      department: "Tribal Welfare",
      schemeType: "Financial",
      schemeName: "ST Student Support Scheme",
      academicYear: "2024-25",
      district: "Indore",
      benefitAmount: 20000,
      eligibility: "ST Category, Income below 3 Lakh",
    },
  ];

 
  const tableColumns = [
    { field: "department", header: "Department", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "schemeType", header: "Scheme Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "schemeName", header: "Scheme Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "academicYear", header: "Academic Year", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { 
      field: "benefitAmount", 
      header: "Benefit Amount (₹)", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: SchemeRow) => `₹${row.benefitAmount.toLocaleString('en-IN')}`
    },
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

  const handleClear = () => {
    setDepartment(null);
    setSchemeType(null);
    setDistrict(null);
    setShowResult(false);
  };

  return (
    <Card title="Departmental Scheme Details / विभागीय योजना विवरण">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Dropdown 
          label="Department / विभाग" 
          required 
          value={department} 
          options={departments} 
          onChange={(e) => setDepartment(e.value)} 
          placeholder="Select Department" 
        />
        <Dropdown 
          label="Scheme Type / योजना का प्रकार" 
          required 
          value={schemeType} 
          options={schemeTypes} 
          onChange={(e) => setSchemeType(e.value)} 
          placeholder="Select Type" 
        />
        <Dropdown 
          label="District / जिला" 
          required 
          value={district} 
          options={districts} 
          onChange={(e) => setDistrict(e.value)} 
          placeholder="Select District" 
        />
      </div>

      <div className="flex gap-3 mb-8">
        <Button 
          label="Search" 
          icon="pi pi-search" 
          onClick={() => setShowResult(true)} 
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
        <div className="animate-fadein">
          <Table
            title="Available Schemes"
            columns={tableColumns}
            data={schemeData}
            showPagination={true}
            rowsPerPage={10}
                   className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}

      <Dialog 
        header="Complete Scheme Information" 
        visible={!!viewRow} 
        style={{ width: "35vw" }} 
        onHide={() => setViewRow(null)}
        draggable={false}
        resizable={false}
      >
        {viewRow && (
          <div className="grid grid-cols-1 gap-4">
            <div className="flex justify-between border-b pb-2">
              <span className="font-bold text-gray-600">Scheme Name:</span> 
              <span className="text-right">{viewRow.schemeName}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-bold text-gray-600">Department:</span> 
              <span>{viewRow.department}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-bold text-gray-600">Type:</span> 
              <span>{viewRow.schemeType}</span>
            </div>
            <div className="flex justify-between border-b pb-2">
              <span className="font-bold text-gray-600">Benefit:</span> 
              <span className="text-green-700 font-bold">₹{viewRow.benefitAmount.toLocaleString('en-IN')}</span>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="font-bold text-blue-800 mb-1">Eligibility Criteria:</p>
              <p className="text-sm">{viewRow.eligibility}</p>
            </div>
          </div>
        )}
      </Dialog>
    </Card>
  );
}