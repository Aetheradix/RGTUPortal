/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown, Table } from "@/ui/shared"; 

export default function SchemeApplicationsRejectListReport() {
  const [year, setYear] = useState<any>("2025-26");
  const [district, setDistrict] = useState<any>("All");
  const [block, setBlock] = useState<any>("All");
  const [sankul, setSankul] = useState<any>("All");
  const [showList, setShowList] = useState(false);

  const academicYears = [
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  const districts = [
    { label: "All", value: "All" },
    { label: "Bhopal", value: "Bhopal" },
    { label: "Agar Malwa", value: "Agar Malwa" },
    { label: "Ujjain", value: "Ujjain" },
  ];

  const blocks = [
    { label: "All", value: "All" },
    { label: "Block A", value: "Block A" },
    { label: "Block B", value: "Block B" },
  ];

  const sankuls = [
    { label: "All", value: "All" },
    { label: "Sankul-01", value: "Sankul-01" },
    { label: "Sankul-02", value: "Sankul-02" },
  ];

  const rejectList = [
    {
      id: 1,
      studentName: "Rohit Verma",
      scheme: "Swami Vivekananda Post Matric",
      district: "Bhopal",
      block: "Block A",
      sankul: "Sankul-01",
      reason: "Income Certificate Invalid",
    },
    {
      id: 2,
      studentName: "Anjali Patil",
      scheme: "Post Matric OBC",
      district: "Agar Malwa",
      block: "Block B",
      sankul: "Sankul-02",
      reason: "Caste Certificate Not Uploaded",
    },
  ];


  const tableColumns = [
    { field: "id", header: "Sr.No.", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "studentName", header: "Student Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "scheme", header: "Scheme Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "block", header: "Block", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "sankul", header: "Sankul", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "reason", header: "Rejection Reason", sortable: true, style: { whiteSpace: "nowrap" } },
  ];

  const handleClear = () => {
    setDistrict("All");
    setBlock("All");
    setSankul("All");
    setShowList(false);
  };

  return (
    <Card title="Reject Scholarship Status Report">
 
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <Dropdown
          label="Academic Year"
          required
          value={year}
          options={academicYears}
          onChange={(e) => setYear(e.value)}
        />

        <Dropdown
          label="District"
          required
          value={district}
          options={districts}
          onChange={(e) => setDistrict(e.value)}
        />

        <Dropdown
          label="Block"
          required
          value={block}
          options={blocks}
          onChange={(e) => setBlock(e.value)}
        />

        <Dropdown
          label="Sankul"
          required
          value={sankul}
          options={sankuls}
          onChange={(e) => setSankul(e.value)}
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
            title="Rejected Scholarship Applications"
            columns={tableColumns}
            data={rejectList}
            showPagination={true}
            rowsPerPage={10}
         
                     className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}
    </Card>
  );
}