import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Table, { type TableColumn } from "@/ui/shared/Table";
import { InputText } from "primereact/inputtext";

interface PrintDraftApplicationData {
  srNo: number;
  transferRequestNumber: string;
  employeeName: string;
  aisheCode: string;
  preferredLocation: string;
  status: "Active" | "Inactive";
}

const PrintDraftApplication: React.FC = () => {
  const toast = useRef<Toast>(null);

  // Data based on image Capture95.PNG
  const [applicationDetails] = useState<PrintDraftApplicationData[]>([
    {
      srNo: 1,
      transferRequestNumber: "TR12345",
      employeeName: "Rahul Verma (EID1236)",
      aisheCode: "ABC123",
      preferredLocation: "New Delhi",
      status: "Active",
    },
    {
      srNo: 2,
      transferRequestNumber: "TR12346",
      employeeName: "Raj Sen (EID1296)",
      aisheCode: "ABC133",
      preferredLocation: "Mumbai",
      status: "Inactive",
    },
    {
      srNo: 3,
      transferRequestNumber: "TR12347",
      employeeName: "Sita Singh (EID1295)",
      aisheCode: "ABC234",
      preferredLocation: "Delhi",
      status: "Active",
    },
    {
      srNo: 4,
      transferRequestNumber: "TR12348",
      employeeName: "Ravi Rai (EID1299)",
      aisheCode: "ABC134",
      preferredLocation: "Bangalore",
      status: "Active",
    },
  ]);

  // Template for the Print column button
  const printTemplate = (rowData: PrintDraftApplicationData) => {
    return (
      <Button
        label="Print this page"
        icon="pi pi-print"
        className="p-button-sm bg-blue-500 border-none text-xs"
        onClick={() => {
          toast.current?.show({
            severity: "info",
            summary: "Printing",
            detail: `Preparing draft for ${rowData.transferRequestNumber}`,
            life: 3000,
          });
        }}
      />
    );
  };

  // Template for the Action/Status column
  const actionTemplate = (rowData: PrintDraftApplicationData) => {
    const isActive = rowData.status === "Active";
    return (
      <span
        className={`px-2 py-1 rounded text-[10px] font-bold ${
          isActive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
        }`}
      >
        {rowData.status}
      </span>
    );
  };

  const columns: TableColumn[] = [
    {
      field: "transferRequestNumber",
      header: "Transfer Request Number",
      sortable: true,
    },
    {
      field: "employeeName",
      header: "Employee Name (Unique ID)",
      sortable: true,
    },
    {
      field: "aisheCode",
      header: "AISHE Code",
      sortable: true,
    },
    {
      field: "preferredLocation",
      header: "Preferred Location",
      sortable: true,
    },
    {
      field: "print",
      header: "Print",
      body: printTemplate,
    },
    {
      field: "status",
      header: "Action",
      body: actionTemplate,
      sortable: true,
    },
  ];

  return (
    <PageLayout title="Print Draft Application">
      <Toast ref={toast} />
      <div className="bg-white">
        <div className="mt-2">
          <div className="flex justify-end items-end mb-4 text-sm">
            <div className="flex items-center gap-2">
              <span>Search:</span>
              <InputText className="p-inputtext-sm" />
            </div>
          </div>

          <Table
            title="Print Draft Application Details"
            data={applicationDetails}
            columns={columns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm"
            tableStyle={{ minWidth: "60rem" }}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default PrintDraftApplication;
