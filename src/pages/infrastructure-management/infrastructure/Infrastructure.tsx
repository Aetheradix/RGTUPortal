import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import Input from "@/ui/shared/Input";
import { Button } from "primereact/button";

interface InfrastructureRow {
  campus: string;
  department: string;
  building: string;
  roomName: string;
  infrastructureType: string;
  quantity: number;
  conditionStatus: string;
  isActive: boolean;
}

const Infrastructuree: React.FC = () => {
  const [showList, setShowList] = useState(false);

  const campusOptions = [
    { label: "Main Campus", value: "Main Campus" },
    { label: "City Campus", value: "City Campus" },
    { label: "North Campus", value: "North Campus" },
  ];

  const departmentOptions = [
    { label: "Computer Science", value: "Computer Science" },
    { label: "Mechanical", value: "Mechanical" },
    { label: "Commerce", value: "Commerce" },
    { label: "Library", value: "Library" },
  ];

  const buildingOptions = [
    { label: "Block A", value: "Block A" },
    { label: "Block B", value: "Block B" },
    { label: "Admin Block", value: "Admin Block" },
  ];

  const roomOptions = [
    { label: "Room 101", value: "Room 101" },
    { label: "Room 102", value: "Room 102" },
    { label: "Lab 201", value: "Lab 201" },
    { label: "Library Hall", value: "Library Hall" },
  ];

  const infraTypeOptions = [
    { label: "Classroom", value: "Classroom" },
    { label: "Computer Lab", value: "Computer Lab" },
    { label: "Projector", value: "Projector" },
    { label: "Furniture", value: "Furniture" },
    { label: "WiFi Router", value: "WiFi Router" },
  ];

  const conditionOptions = [
    { label: "Good", value: "Good" },
    { label: "Average", value: "Average" },
    { label: "Poor", value: "Poor" },
  ];

  const tableData: InfrastructureRow[] = [
    {
      campus: "Main Campus",
      department: "Computer Science",
      building: "Block A",
      roomName: "Lab 201",
      infrastructureType: "Computer Lab",
      quantity: 1,
      conditionStatus: "Good",
      isActive: true,
    },
    {
      campus: "City Campus",
      department: "Commerce",
      building: "Block B",
      roomName: "Room 101",
      infrastructureType: "Projector",
      quantity: 2,
      conditionStatus: "Average",
      isActive: true,
    },
    {
      campus: "Main Campus",
      department: "Library",
      building: "Admin Block",
      roomName: "Library Hall",
      infrastructureType: "Furniture",
      quantity: 50,
      conditionStatus: "Good",
      isActive: false,
    },
  ];

  const columns = [
    { field: "campus", header: "Campus", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "department", header: "Department", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "building", header: "Building", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "roomName", header: "Room/Lab", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "infrastructureType", header: "Infrastructure Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "quantity", header: "Quantity", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "conditionStatus", header: "Condition", sortable: true, style: { whiteSpace: "nowrap" } },
    {
      field: "isActive",
      header: "Status",
      body: (row: InfrastructureRow) => (
        <span
          className={`px-3 py-1 rounded text-xs font-bold ${
            row.isActive
              ? "bg-green-100 text-green-700 border border-green-300"
              : "bg-red-100 text-red-700 border border-red-300"
          }`}
        >
          {row.isActive ? "Active" : "Inactive"}
        </span>
      ),
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "action",
      header: "Action",
      body: () => (
        <div className="flex gap-2">
          <Button icon="pi pi-pencil" className="p-button-sm p-button-outlined" type="button" />
          <Button
            icon="pi pi-trash"
            className="p-button-sm p-button-outlined p-button-danger"
            type="button"
          />
        </div>
      ),
      style: { whiteSpace: "nowrap" },
    },
  ];

  return (
    <PageLayout title="Infrastructure">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-gray-800">Infrastructure</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <Dropdown label="Campus" required options={campusOptions} />
          <Dropdown label="Department" required options={departmentOptions} />
          <Dropdown label="Building" required options={buildingOptions} />
          <Dropdown label="Room/Lab" required options={roomOptions} />

          <Dropdown label="Infrastructure Type" required options={infraTypeOptions} />
          <Input label="Quantity" required placeholder="Enter Quantity" />
          <Dropdown label="Condition Status" required options={conditionOptions} />

          <div className="flex gap-2 md:col-span-4">
            <Button
              label="Search"
              className="bg-blue-600 px-6 h-[42px]"
              onClick={() => setShowList(true)}
              type="button"
            />
            <Button
              label="Clear"
              severity="danger"
              className="px-6 h-[42px]"
              onClick={() => setShowList(false)}
              type="button"
            />
          </div>
        </div>
      </div>

      {showList && (
        <div className="bg-white mt-6 p-6 rounded-lg border border-gray-200 shadow-sm">
          <Table
            columns={columns}
            data={tableData}
            showPagination
            rowsPerPage={10}
            {...{ format: "infrastructure" }}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default Infrastructuree;
