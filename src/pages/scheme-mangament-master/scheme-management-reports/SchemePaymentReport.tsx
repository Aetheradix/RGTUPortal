/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dropdown, Table } from "@/ui/shared"; 

export default function SchemePaymentReport() {
  const [year, setYear] = useState<any>("2025-26");
  const [district, setDistrict] = useState<any>("Agar Malwa");
  const [scheme, setScheme] = useState<any>("SVPMS-1.3");
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
    { label: "Swami Vivekananda Post Matric Scholarship Scheme -1.3", value: "SVPMS-1.3" },
    { label: "Post Matric OBC Scholarship -2.1", value: "PMOBC-2.1" },
    { label: "ST Girls Scholarship -3.2", value: "STG-3.2" },
  ];

  const paymentList = [
    {
      id: 1,
      studentName: "Rohit Verma",
      district: "Agar Malwa",
      scheme: "SVPMS-1.3",
      amount: 12000,
      paymentDate: "15/12/2025",
      status: "Paid",
    },
    {
      id: 2,
      studentName: "Pooja Patidar",
      district: "Agar Malwa",
      scheme: "SVPMS-1.3",
      amount: 10000,
      paymentDate: "18/12/2025",
      status: "Paid",
    },
  ];

 
  const tableColumns = [
    { field: "id", header: "Sr.No.", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "studentName", header: "Student Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "district", header: "District", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "scheme", header: "Scheme Code", sortable: true, style: { whiteSpace: "nowrap" } },
    { 
      field: "amount", 
      header: "Paid Amount (₹)", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: any) => `₹ ${row.amount.toLocaleString("en-IN")}`
    },
    { field: "paymentDate", header: "Payment Date", sortable: true, style: { whiteSpace: "nowrap" } },
    { 
      field: "status", 
      header: "Status", 
      sortable: true, 
      style: { whiteSpace: "nowrap" },
      body: (row: any) => (
        <span className="font-bold text-green-600">{row.status}</span>
      )
    },
  ];

  const handleClear = () => {
    setDistrict(null);
    setScheme(null);
    setShowList(false);
  };

  return (
    <Card title="Scheme Payment Report / योजना भुगतान रिपोर्ट">
   
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <Dropdown
          label="Academic Year / शैक्षणिक वर्ष"
          required
          value={year}
          options={academicYears}
          onChange={(e) => setYear(e.value)}
        />
        <Dropdown
          label="District / जिला"
          required
          value={district}
          options={districts}
          onChange={(e) => setDistrict(e.value)}
          placeholder="Select District"
        />
        <Dropdown
          label="Scheme Title / योजना शीर्षक"
          required
          value={scheme}
          options={schemes}
          onChange={(e) => setScheme(e.value)}
          placeholder="Select Scheme"
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
            title="Payment Details"
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