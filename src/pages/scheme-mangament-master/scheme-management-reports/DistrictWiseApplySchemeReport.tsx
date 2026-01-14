/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown, Table } from "@/ui/shared"; 

export default function DistrictWiseApplySchemeReport() {
  const [year, setYear] = useState<any>("2025-26");
  const [district, setDistrict] = useState<any>(null);
  const [scheme, setScheme] = useState<any>(null);
  const [showList, setShowList] = useState(false);

  const academicYears = [
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  const districts = [
    { label: "Agar Malwa", value: "Agar Malwa" },
    { label: "Bhopal", value: "Bhopal" },
    { label: "Ujjain", value: "Ujjain" },
  ];

  const schemes = [
    {
      label: "Education development scholarship to the only daughter -1.8",
      value: "EDSD",
    },
    {
      label: "Swami Vivekananda Post Matric Scholarship -1.3",
      value: "SVPMS",
    },
  ];

  const reportData = [
    {
      id: 1,
      district: "Agar Malwa",
      scheme: "Education development scholarship to the only daughter -1.8",
      totalApplications: 132,
      approved: 110,
      pending: 15,
      rejected: 7,
    },
    {
      id: 2,
      district: "Bhopal",
      scheme: "Swami Vivekananda Post Matric Scholarship -1.3",
      totalApplications: 215,
      approved: 190,
      pending: 18,
      rejected: 7,
    },
  ];

  const tableColumns = [
    { field: "id", header: "Sr.No.", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "scheme", header: "Scheme Title", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "totalApplications", header: "Total Applications", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "approved", header: "Approved", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "pending", header: "Pending", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "rejected", header: "Rejected", sortable: true, style: { whiteSpace: "nowrap" } },
  ];

  const handleClear = () => {
    setDistrict(null);
    setScheme(null);
    setShowList(false);
  };

  return (
    <Card title="District Wise Apply Scheme Report / जिलेवार लागू योजना रिपोर्ट">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Dropdown
          label="Select Academic Year / शैक्षणिक वर्ष"
          required
          value={year}
          options={academicYears}
          onChange={(e) => setYear(e.value)}
        />

        <Dropdown
          label="Select District Name / जिले का नाम"
          required
          value={district}
          options={districts}
          onChange={(e) => setDistrict(e.value)}
          placeholder="Select"
        />

        <Dropdown
          label="Select Scheme Title / योजना शीर्षक"
          required
          value={scheme}
          options={schemes}
          onChange={(e) => setScheme(e.value)}
          placeholder="Select"
        />
      </div>

      <div className="flex gap-3 mb-6">
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
            title="District Wise Applied Scheme List"
            columns={tableColumns}
            data={reportData}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}
    </Card>
  );
}