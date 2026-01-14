/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown, Table } from "@/ui/shared"; 

export default function SchemeWiseEligibleStudentListReports() {
  const [year, setYear] = useState<any>("2025-26");
  const [scheme, setScheme] = useState<any>("SVPMS");
  const [district, setDistrict] = useState<any>("Sheopur");
  const [block, setBlock] = useState<any>("All");
  const [sankul, setSankul] = useState<any>("All");
  const [school, setSchool] = useState<any>("All");
  const [showList, setShowList] = useState(false);

  const academicYears = [
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  const schemes = [
    { label: "(1.3) Swami Vivekananda Post Matric Scholarship Scheme", value: "SVPMS" },
    { label: "(1.5) ST Girls Scholarship Scheme", value: "STG" },
  ];

  const districts = [
    { label: "Sheopur - 01", value: "Sheopur" },
    { label: "Bhopal - 23", value: "Bhopal" },
  ];

  const blocks = [
    { label: "All", value: "All" },
    { label: "Vijaypur", value: "Vijaypur" },
    { label: "Karahal", value: "Karahal" },
  ];

  const sankuls = [
    { label: "All", value: "All" },
    { label: "Sankul A", value: "Sankul A" },
    { label: "Sankul B", value: "Sankul B" },
  ];

  const schools = [
    { label: "All", value: "All" },
    { label: "Govt HSS Sheopur", value: "HSS Sheopur" },
    { label: "Model School Karahal", value: "Model Karahal" },
  ];

  const studentList = [
    {
      id: 1,
      name: "Ravi Verma",
      father: "Suresh Verma",
      school: "Govt HSS Sheopur",
      class: "11",
      scheme: "Swami Vivekananda PMS",
      status: "Eligible",
    },
    {
      id: 2,
      name: "Anjali Sharma",
      father: "Ramesh Sharma",
      school: "Model School Karahal",
      class: "12",
      scheme: "Swami Vivekananda PMS",
      status: "Eligible",
    },
  ];

  const tableColumns = [
    { field: "id", header: "Sr.No.", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "name", header: "Student Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "father", header: "Father Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "school", header: "School", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "class", header: "Class", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "scheme", header: "Scheme", sortable: true, style: { whiteSpace: "nowrap" } },
    { 
      field: "status", 
      header: "Status", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: any) => (
        <span className="text-green-600 font-semibold">{row.status}</span>
      )
    },
  ];

  const handleClear = () => {
    setBlock("All");
    setSankul("All");
    setSchool("All");
    setShowList(false);
  };

  return (
    <Card title="Scheme Wise Eligible Student List Report">

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
        <Dropdown
          label="Academic Year"
          required
          value={year}
          options={academicYears}
          onChange={(e) => setYear(e.value)}
        />
        <Dropdown
          label="Departmental Scheme Name"
          required
          value={scheme}
          options={schemes}
          onChange={(e) => setScheme(e.value)}
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
        <Dropdown
          label="School"
          value={school}
          options={schools}
          onChange={(e) => setSchool(e.value)}
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
            title="Eligible Student List"
            columns={tableColumns}
            data={studentList}
            showPagination={true}
            rowsPerPage={10}
                  className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}
    </Card>
  );
}