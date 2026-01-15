import React, { useState } from "react";
import PageLayout from "@/components/PageLayout";
import Table from "@/ui/shared/Table";
import Dropdown from "@/ui/shared/Dropdown";
import Input from "@/ui/shared/Input";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface InfrastructureMasterRow {
  infrastructureType: string;
  infrastructureName: string;
  category: string;
  unit: string;
  isActive: boolean;
  createdOn: string;
}

const InfrastructureMasterr: React.FC = () => {
  const [showList, setShowList] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const infrastructureTypeOptions = [
    { label: "Building", value: "Building" },
    { label: "Room", value: "Room" },
    { label: "Laboratory", value: "Laboratory" },
    { label: "Library", value: "Library" },
    { label: "Playground", value: "Playground" },
    { label: "Furniture", value: "Furniture" },
    { label: "Equipment", value: "Equipment" },
    { label: "IT Infrastructure", value: "IT Infrastructure" },
  ];

  const categoryOptions = [
    { label: "Academic", value: "Academic" },
    { label: "Administrative", value: "Administrative" },
    { label: "Sports", value: "Sports" },
    { label: "Facility", value: "Facility" },
    { label: "IT", value: "IT" },
  ];

  const unitOptions = [
    { label: "Nos", value: "Nos" },
    { label: "Sq. Ft.", value: "Sq. Ft." },
    { label: "Sq. Meter", value: "Sq. Meter" },
    { label: "Rooms", value: "Rooms" },
    { label: "Sets", value: "Sets" },
  ];

  const tableData: InfrastructureMasterRow[] = [
    {
      infrastructureType: "Room",
      infrastructureName: "Classroom",
      category: "Academic",
      unit: "Rooms",
      isActive: true,
      createdOn: "10/01/2026",
    },
    {
      infrastructureType: "Laboratory",
      infrastructureName: "Computer Lab",
      category: "IT",
      unit: "Rooms",
      isActive: true,
      createdOn: "12/01/2026",
    },
    {
      infrastructureType: "Furniture",
      infrastructureName: "Student Desk",
      category: "Academic",
      unit: "Nos",
      isActive: false,
      createdOn: "09/01/2026",
    },
  ];

  const columns = [
    {
      field: "infrastructureType",
      header: "Infrastructure Type",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "infrastructureName",
      header: "Infrastructure Name",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "category",
      header: "Category",
      sortable: true,
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "unit",
      header: "Unit",
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "createdOn",
      header: "Created On",
      style: { whiteSpace: "nowrap" },
    },
    {
      field: "isActive",
      header: "Status",
      body: (row: InfrastructureMasterRow) => (
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
    <PageLayout title="Infrastructure Master">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm space-y-6">
        <h2 className="text-xl font-bold text-gray-800">Infrastructure Master</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <Dropdown label="Infrastructure Type" required options={infrastructureTypeOptions} />
          <Input label="Infrastructure Name" required placeholder="Enter name" />
          <Dropdown label="Category" required options={categoryOptions} />
          <Dropdown label="Unit" required options={unitOptions} />
        </div>

        <div className="flex gap-2">
          <Button label="Save" className="bg-blue-600 px-6 h-[42px]" onClick={handleSave} />
          <Button label="Clear" severity="danger" className="px-6 h-[42px]" onClick={handleClear} />
        </div>
      </div>

      {showList && (
        <div className="bg-white mt-6 p-6 rounded-lg border border-gray-200 shadow-sm">
          <Table
            columns={columns}
            data={tableData}
            showPagination
            rowsPerPage={10}
            {...{ format: "infrastructure_master" }}
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

export default InfrastructureMasterr;
