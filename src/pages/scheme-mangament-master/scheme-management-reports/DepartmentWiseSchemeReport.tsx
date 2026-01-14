/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown, Table } from "@/ui/shared"; 

export default function DepartmentWiseSchemeReport() {
  const [year, setYear] = useState<any>("2024-25");
  const [department, setDepartment] = useState<any>(null);
  const [showList, setShowList] = useState(false);

  const academicYears = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  const departments = [
    { label: "Central Tibetan School", value: "CTS" },
    { label: "School Education Department", value: "SED" },
  ];

  const schemeReportList = [
    { id: 1, code: "1.1", type: "General Poor Class Scholarship Scheme", rate: "2500", parentsIncome: "1,00,000", eligibility: "BPL, MP Domicile" },
    { id: 2, code: "2.1", type: "State Government SC Scholarship", rate: "3000", parentsIncome: "1,20,000", eligibility: "SC, MP Domicile" },
  ];

  const tableColumns = [
    { 
      field: "id", 
      header: "Sr.No.", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
    { 
      field: "code", 
      header: "Scheme Code / योजना कोड", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
    { 
      field: "type", 
      header: "Scholarship Type / छात्रवृत्ति का प्रकार", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
    { 
      field: "rate", 
      header: "Annual Rate / वार्षिक दर", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: any) => `₹ ${row.rate}`
    },
    { 
      field: "parentsIncome", 
      header: "Income Limit / आय सीमा", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: any) => `₹ ${row.parentsIncome}`
    },
    { 
      field: "eligibility", 
      header: "Eligibility / पात्रता", 
      sortable: true, 
      style: { whiteSpace: "nowrap" } 
    },
    {
      field: "view_action", 
      header: "View / देखें",
      style: { whiteSpace: "nowrap", textAlign: "center" as const }, 
      body: () => <Button icon="pi pi-eye" text rounded severity="info" />
    },
  ];

  const handleClear = () => {
    setDepartment(null);
    setShowList(false);
  };

  return (
    <Card title="Department Wise Scheme Report / विभागवार योजना रिपोर्ट">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <Dropdown
          label="Select Academic Year / शैक्षणिक वर्ष"
          required
          value={year}
          options={academicYears}
          onChange={(e) => setYear(e.value)}
        />
        <Dropdown
          label="Select Department Name / विभाग का नाम"
          required
          value={department}
          options={departments}
          onChange={(e) => setDepartment(e.value)}
          placeholder="Select Department"
        />
      </div>

      <div className="flex gap-3 mb-6">
        <Button label="Search" icon="pi pi-search" onClick={() => setShowList(true)} className="bg-blue-600" />
        <Button label="Clear" icon="pi pi-refresh" severity="secondary" outlined onClick={handleClear} />
      </div>

      {showList && (
        <div className="animate-fadein mt-6">
          <Table
            title="Scheme List / योजनाओं की सूची"
            columns={tableColumns}
            data={schemeReportList}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}
    </Card>
  );
}