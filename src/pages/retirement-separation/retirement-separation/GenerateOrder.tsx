import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import { Button } from "primereact/button";

interface GenerateOrderRow {
  employeeName: string;
  separationType: string;
  panel: string;
  ddoSankulNameCode: string;
  lastPostingOIS: string;
  lastPostingDesignation: string;
  dateOfBirth: string;
  dateOfRetirementOrSeparation: string;
  orderNo: string;
  orderDate: string;
  document: string;
}

const GenerateOrder: React.FC = () => {
  const [globalSearch] = useState("");

  const tableData: GenerateOrderRow[] = [
    {
      employeeName: "Amit Sharma",
      separationType: "Retirement",
      panel: "Panel-A",
      ddoSankulNameCode: "DDO-101 / Sankul-12",
      lastPostingOIS: "Office",
      lastPostingDesignation: "Senior Clerk",
      dateOfBirth: "12-05-1964",
      dateOfRetirementOrSeparation: "31-05-2024",
      orderNo: "ORD-2024-001",
      orderDate: "01-06-2024",
      document: "Retirement_Order_001.pdf",
    },
    {
      employeeName: "Ravi Verma",
      separationType: "Termination",
      panel: "Panel-B",
      ddoSankulNameCode: "DDO-205 / Sankul-08",
      lastPostingOIS: "School",
      lastPostingDesignation: "Teacher",
      dateOfBirth: "20-11-1978",
      dateOfRetirementOrSeparation: "15-01-2025",
      orderNo: "ORD-2025-014",
      orderDate: "20-01-2025",
      document: "Termination_Order_014.pdf",
    },
  ];

  const filteredData = tableData.filter((row) => {
    if (!globalSearch.trim()) return true;
    const text = globalSearch.toLowerCase();

    return (
      row.employeeName.toLowerCase().includes(text) ||
      row.separationType.toLowerCase().includes(text) ||
      row.panel.toLowerCase().includes(text) ||
      row.ddoSankulNameCode.toLowerCase().includes(text) ||
      row.lastPostingOIS.toLowerCase().includes(text) ||
      row.lastPostingDesignation.toLowerCase().includes(text) ||
      row.orderNo.toLowerCase().includes(text) ||
      row.document.toLowerCase().includes(text)
    );
  });

  const columns = [
    { field: "employeeName", header: "Employee Name", sortable: true },
    { field: "separationType", header: "Separation Type", sortable: true },
    { field: "panel", header: "Panel", sortable: true },
    {
      field: "ddoSankulNameCode",
      header: "DDO/Sankul Name-Code",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "lastPostingOIS",
      header: "Last Posting OIS",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "lastPostingDesignation",
      header: "Last Posting Designation",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "dateOfBirth",
      header: "Date Of Birth",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "dateOfRetirementOrSeparation",
      header: "Date of Retirement/Separation",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
    { field: "orderNo", header: "Order No.", sortable: true },
    {
      field: "orderDate",
      header: "Order Date",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
    { field: "document", header: "Document", sortable: true },
  ];

  return (
    <PageLayout title="Generate Order">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">Generate Order</h2>

          <div className="flex items-center gap-2">
            <Button
              label="Export To Excel"
              icon="pi pi-file-excel"
              className="p-button-outlined"
              type="button"
              onClick={() => {}}
            />
          </div>
        </div>

      </div>

      {
        <div className="bg-white mt-6 p-6 rounded-lg border border-gray-200 shadow-sm">
          <Table
            columns={columns}
            data={filteredData}
            showPagination
            rowsPerPage={10}
            scrollable
            {...{ format: "generate_order" }}
          />
        </div>
      }
    </PageLayout>
  );
};

export default GenerateOrder;
