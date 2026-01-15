import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import Input, { Textarea } from "@/ui/shared/Input";
import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";

interface InfrastructureDetailRow {
  campus: string;
  department: string;
  building: string;
  roomLab: string;
  infrastructureType: string;
  infrastructureName: string;
  quantity: number;
  conditionStatus: string;
  remarks: string;
  isActive: boolean;
}

const AddInfrastructureDetails: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [isActive, setIsActive] = useState(true);

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

  const tableData: InfrastructureDetailRow[] = [
    {
      campus: "Main Campus",
      department: "Computer Science",
      building: "Block A",
      roomLab: "Lab 201",
      infrastructureType: "Computer Lab",
      infrastructureName: "Dell Desktop Systems",
      quantity: 40,
      conditionStatus: "Good",
      remarks: "Working fine",
      isActive: true,
    },
    {
      campus: "City Campus",
      department: "Commerce",
      building: "Block B",
      roomLab: "Room 101",
      infrastructureType: "Projector",
      infrastructureName: "Epson Projector",
      quantity: 2,
      conditionStatus: "Average",
      remarks: "Need servicing",
      isActive: true,
    },
  ];

  const columns = [
    { field: "campus", header: "Campus", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "department", header: "Department", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "building", header: "Building", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "roomLab", header: "Room/Lab", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "infrastructureType", header: "Infrastructure Type", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "infrastructureName", header: "Infrastructure Name", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "quantity", header: "Quantity", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "conditionStatus", header: "Condition", sortable: true, style: { whiteSpace: "nowrap" } },
    { field: "remarks", header: "Remarks", style: { whiteSpace: "nowrap" } },
    {
      field: "isActive",
      header: "Status",
      body: (row: InfrastructureDetailRow) => (
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

  const handleSave = () => {
    setShowConfirmModal(true);
  };

  const handleConfirmYes = () => {
    setShowConfirmModal(false);
    setShowSuccessModal(true);
    setShowList(true);
  };

  const handleClear = () => {
    setShowList(false);
  };

  return (
    <PageLayout title="Add Infrastructure Details">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-gray-800">Add Infrastructure Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Dropdown label="Campus" required options={campusOptions} />
          <Dropdown label="Department" required options={departmentOptions} />
          <Dropdown label="Building" required options={buildingOptions} />
          <Dropdown label="Room/Lab" required options={roomOptions} />

          <Dropdown label="Infrastructure Type" required options={infraTypeOptions} />
          <Input label="Infrastructure Name" required placeholder="Enter Name" />
          <Input label="Quantity" required placeholder="Enter Quantity" />
          <Dropdown label="Condition Status" required options={conditionOptions} />

          <Textarea label="Remarks" placeholder="Enter Remarks" rows={2} />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">
              Status <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center gap-2 mt-2">
              <Checkbox checked={isActive} onChange={(e) => setIsActive(e.checked || false)} />
              <span className="text-sm">Active</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            label="Save"
            className="bg-blue-600 px-6 h-[42px]"
            type="button"
            onClick={handleSave}
          />
          <Button
            label="Clear"
            severity="danger"
            className="px-6 h-[42px]"
            type="button"
            onClick={handleClear}
          />
        </div>
      </div>

      {showList && (
        <div className="bg-white mt-6 p-6 rounded-lg border border-gray-200 shadow-sm">
          <Table
            columns={columns}
            data={tableData}
            showPagination
            rowsPerPage={10}
            {...{ format: "add_infrastructure_details" }}
          />
        </div>
      )}

      <Dialog
        header="Confirmation"
        visible={showConfirmModal}
        style={{ width: "400px" }}
        draggable={false}
        closable={false}
        onHide={() => setShowConfirmModal(false)}
      >
        <div className="text-center p-4">
          <i className="pi pi-exclamation-triangle text-yellow-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold mb-2">Are you sure?</h3>
          <p className="text-gray-600 mb-6">Do you want to save this record?</p>
          <div className="flex justify-center gap-3">
            <Button label="Yes" className="bg-blue-600 px-6" onClick={handleConfirmYes} />
            <Button
              label="Cancel"
              outlined
              severity="danger"
              className="px-6"
              onClick={() => setShowConfirmModal(false)}
            />
          </div>
        </div>
      </Dialog>

      <Dialog
        header="Success!"
        visible={showSuccessModal}
        style={{ width: "400px" }}
        draggable={false}
        onHide={() => setShowSuccessModal(false)}
      >
        <div className="text-center p-4">
          <i className="pi pi-check-circle text-green-500 text-5xl mb-4"></i>
          <h3 className="text-xl font-bold text-green-600 mb-2">Success!</h3>
          <p className="text-gray-600 mb-6">Record Saved Successfully!</p>
          <div className="flex justify-center">
            <Button
              label="OK"
              className="bg-green-600 px-10"
              onClick={() => setShowSuccessModal(false)}
            />
          </div>
        </div>
      </Dialog>
    </PageLayout>
  );
};

export default AddInfrastructureDetails;
