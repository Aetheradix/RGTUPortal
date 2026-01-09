import React, { useState, useRef } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import Table, { type TableColumn } from "@/ui/shared/Table";
import { InputText } from "primereact/inputtext";

interface LockApplicationData {
  srNo: number;
  transferRequestNumber: string;
  employeeName: string;
  aisheCode: string;
  preferredLocation: string;
}

const LockApplication: React.FC = () => {
  const toast = useRef<Toast>(null);

  // Data provided in your reference
  const [applicationDetails] = useState<LockApplicationData[]>([
    {
      srNo: 1,
      transferRequestNumber: "TR12345",
      employeeName: "Rahul Verma (EID1236)",
      aisheCode: "ABC123",
      preferredLocation: "New Delhi",
    },
    {
      srNo: 2,
      transferRequestNumber: "TR12346",
      employeeName: "Raj Sen (EID1296)",
      aisheCode: "ABC133",
      preferredLocation: "Mumbai",
    },
    {
      srNo: 3,
      transferRequestNumber: "TR12347",
      employeeName: "Sita Singh (EID1295)",
      aisheCode: "ABC234",
      preferredLocation: "Delhi",
    },
    {
      srNo: 4,
      transferRequestNumber: "TR12348",
      employeeName: "Ravi Rai (EID1299)",
      aisheCode: "ABC134",
      preferredLocation: "Bangalore",
    },
  ]);

  // Template for the file upload column
  const uploadTemplate = () => {
    return (
      <div className="flex align-items-center gap-2">
        <input
          type="file"
          className="text-xs border border-gray-300 rounded p-1"
          style={{ maxWidth: "200px" }}
        />
      </div>
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
      field: "upload",
      header: "Upload Draft Application",
      body: uploadTemplate,
    },
  ];

  return (
    <PageLayout title="Lock Application">
      <Toast ref={toast} />
      <div className="bg-white">
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2  text-sm">
            <div className="flex items-center gap-2"></div>
            <div className="flex items-center gap-2">
              <span>Search:</span>
              <InputText className="p-inputtext-sm" />
            </div>
          </div>
          <Table
            title="Lock Application Details"
            data={applicationDetails}
            columns={columns}
            showPagination={true}
            rowsPerPage={10}
            className="p-datatable-sm"
            tableStyle={{ minWidth: "50rem" }}
          />
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-0 pt-6">
          <Button
            label="Lock Application"
            icon="pi pi-lock"
            className="px-8 bg-indigo-600 border-none"
            onClick={() => {
              toast.current?.show({
                severity: "success",
                summary: "Locked",
                detail: "Applications have been locked successfully",
                life: 3000,
              });
            }}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default LockApplication;
