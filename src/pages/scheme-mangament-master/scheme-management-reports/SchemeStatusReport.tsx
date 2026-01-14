/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";
import { Dropdown, Table } from "@/ui/shared"; 

export default function SchemeStatusReport() {
  const [year, setYear] = useState<any>("2025-26");
  const [schemeType, setSchemeType] = useState<any>("Departmental");
  const [schemeName, setSchemeName] = useState<any>("SVPMS");
  const [district, setDistrict] = useState<any>("Bhopal");
  const [showList, setShowList] = useState(false);

  const academicYears = [
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  const schemeTypes = [
    { label: "Departmental", value: "Departmental" },
    { label: "Central Sponsored", value: "Central" },
  ];

  const schemeNames = [
    { label: "Swami Vivekananda Post Matric Scholarship", value: "SVPMS" },
    { label: "ST Girls Education Scheme", value: "STG" },
    { label: "OBC Merit Scholarship", value: "OBCM" },
  ];

  const districts = [
    { label: "Bhopal", value: "Bhopal" },
    { label: "Agar Malwa", value: "Agar Malwa" },
    { label: "Ujjain", value: "Ujjain" },
  ];

  const statusList = [
    {
      id: 1,
      scheme: "Swami Vivekananda Post Matric Scholarship",
      district: "Bhopal",
      total: 500,
      approved: 420,
      pending: 50,
      rejected: 30,
      status: "Active",
    },
    {
      id: 2,
      scheme: "ST Girls Education Scheme",
      district: "Bhopal",
      total: 300,
      approved: 260,
      pending: 25,
      rejected: 15,
      status: "Closed",
    },
  ];
  const tableColumns = [
    { field: "id", header: "Sr.No.", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "scheme", header: "Scheme Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "total", header: "Total Applications", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "approved", header: "Approved", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "pending", header: "Pending", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "rejected", header: "Rejected", sortable: true, style: { whiteSpace: "nowrap" } },
    { 
      header: "Current Status", 
      sortable: true, 
      field: "status",
      style: { whiteSpace: "nowrap" },
      body: (row: any) => (
        <Tag
          value={row.status}
          severity={row.status === "Active" ? "success" : "danger"}
          style={{ width: '70px' }}
        />
      )
    },
  ];

  const handleClear = () => {
    setSchemeName(null);
    setDistrict(null);
    setShowList(false);
  };

  return (
    <Card title="Scheme Status Report">
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
        />
        <Dropdown
          label="Scheme Name"
          required
          value={schemeName}
          options={schemeNames}
          onChange={(e) => setSchemeName(e.value)}
          placeholder="Select Scheme"
        />
        <Dropdown
          label="District"
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
          onClick={() => setShowList(true)} 
          className="bg-blue-600 px-6"
        />
        <Button 
          label="Clear" 
          icon="pi pi-times" 
          severity="secondary" 
          onClick={handleClear} 
          outlined
          className="px-6"
        />
      </div>


      {showList && (
        <div className="animate-fadein mt-6">
          <Table
            title="Scheme Status Summary"
            columns={tableColumns}
            data={statusList}
            showPagination={true}
            rowsPerPage={10}

                      className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}
    </Card>
  );
}