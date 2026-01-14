import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { Table, type TableColumn } from "../../../ui/shared";
interface UserTypeRow {
  userType: string;
  isActive: boolean;
}

const CreateUserType: React.FC = () => {
  const [] = useState({
    userType: "",
    isActive: true,
  });

  const [rows] = useState<UserTypeRow[]>([
    { userType: "Sub-Engineer", isActive: true },
    { userType: "Hostel", isActive: true },
    { userType: "Student", isActive: true },
    { userType: "Transport Incharge", isActive: true },
    { userType: "Attender", isActive: true },
    { userType: "Transporter", isActive: true },
    { userType: "GuestFaculty", isActive: true },
    { userType: "Employees", isActive: true },
    { userType: "School", isActive: true },
    { userType: "Institute", isActive: true },
    { userType: "Office", isActive: true },
    { userType: "Management", isActive: true },
    { userType: "Admin", isActive: true },
  ]);

  const columns: TableColumn[] = [
    { field: "userType", header: "User Type " },
    {
      field: "isActive",
      header: "Status (Active - Yes / InActive - No)",
      body: (rowData: UserTypeRow) => (
        <div className="flex ">
          <span
            style={{
              backgroundColor: rowData.isActive ? "#22C55E" : "#EF4444",
              color: "white",
              padding: "9px 16px",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {rowData.isActive ? "Yes" : "No"}
          </span>
        </div>
      ),
    },
    {
      header: "Action",
      body: () => (
        <div className="flex gap-2">
          <Button
            icon="pi pi-pencil"
            className="p-button-rounded p-button-secondary p-button-sm"
            style={{ backgroundColor: "#6366F1" }}
          />
          <Button
            icon="pi pi-trash"
            className="p-button-rounded p-button-danger p-button-sm"
          />
        </div>
      ),
      field: "",
      style: { width: "120px" },
    },
  ];

  return (
    <PageLayout title=" User Type Details ">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 flex justify-between items-center bg-gray-50 border-b">
          <span className="p-input-icon-left">
            <input
              className="p-inputtext p-component p-2 border rounded"
              placeholder="Search..."
            />
          </span>
        </div>
        <Table columns={columns} data={rows} showPagination rowsPerPage={50} />
      </div>
    </PageLayout>
  );
};

export default CreateUserType;
