import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";

interface SeatData {
  id: number;
  collegeName: string;
  courseName: string;
  specialization: string;
  totalSeats: number;
  genSeats: number;
  obcSeats: number;
  stSeats: number;
  scSeats: number;
  reserveSeats: number;
  availableSeats: number;
  status: string;
}
interface FormDataType {
  collegeName: string;
  courseName: string;
  specialization: string;
  totalSeats: string;
  genSeats: string;
  obcSeats: string;
  stSeats: string;
  scSeats: string;
  reserveSeats: string;
  availableSeats: string;
  active: boolean;
}

const SeatAvailability: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [showEditConfirm, setShowEditConfirm] = useState(false);
  const [showAddConfirm, setShowAddConfirm] = useState(false);
  const [showUpdateConfirm, setShowUpdateConfirm] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<SeatData | null>(null);

  const [formData, setFormData] = useState<FormDataType>({
    collegeName: "",
    courseName: "",
    specialization: "",
    totalSeats: "",
    genSeats: "",
    obcSeats: "",
    stSeats: "",
    scSeats: "",
    reserveSeats: "",
    availableSeats: "",
    active: true,
  });

  const [seats, setSeats] = useState<SeatData[]>([
    {
      id: 1,
      collegeName: "DAVV, Indore",
      courseName: "B.Tech",
      specialization: "Computer Science",
      totalSeats: 120,
      genSeats: 50,
      obcSeats: 30,
      stSeats: 20,
      scSeats: 10,
      reserveSeats: 20,
      availableSeats: 100,
      status: "Active",
    },
    {
      id: 2,
      collegeName: "MANIT, Bhopal",
      courseName: "B.Tech",
      specialization: "Electrical Engineering",
      totalSeats: 150,
      genSeats: 60,
      obcSeats: 40,
      stSeats: 30,
      scSeats: 20,
      reserveSeats: 30,
      availableSeats: 120,
      status: "InActive",
    },
  ]);

  const collegeOptions = [
    "DAVV, Indore",
    "MANIT, Bhopal",
    "IET DAVV, Indore",
    "SGSITS, Indore",
    "OIST, Bhopal",
  ].map((c) => ({ label: c, value: c }));

  const courseOptions = ["B.Tech", "M.Tech", "BCA", "MCA", "B.Sc (IT)"].map(
    (c) => ({ label: c, value: c })
  );

  const specOptions = [
    "Computer Science & Engineering",
    "Information Technology",
    "Data Science",
    "Cyber Security",
  ].map((s) => ({ label: s, value: s }));

  const handleEditClick = (data: SeatData) => {
    setSelectedRecord(data);
    setShowEditConfirm(true);
  };

  const proceedToEdit = () => {
    if (selectedRecord) {
      setFormData({
        collegeName: selectedRecord.collegeName,
        courseName: selectedRecord.courseName,
        specialization: selectedRecord.specialization,
        totalSeats: selectedRecord.totalSeats.toString(),
        genSeats: selectedRecord.genSeats.toString(),
        obcSeats: selectedRecord.obcSeats.toString(),
        stSeats: selectedRecord.stSeats.toString(),
        scSeats: selectedRecord.scSeats.toString(),
        reserveSeats: selectedRecord.reserveSeats.toString(),
        availableSeats: selectedRecord.availableSeats.toString(),
        active: selectedRecord.status === "Active",
      });
      setIsEditing(true);
    }
    setShowEditConfirm(false);
  };

  const handleAddClick = () => {
    setFormData({
      collegeName: "",
      courseName: "",
      specialization: "",
      totalSeats: "",
      genSeats: "",
      obcSeats: "",
      stSeats: "",
      scSeats: "",
      reserveSeats: "",
      availableSeats: "",
      active: true,
    });
    setIsAdding(true);
  };

  const handleSaveAdd = () => {
    setShowAddConfirm(true);
  };

  const confirmAdd = () => {
    const newId = seats.length + 1;
    setSeats([
      ...seats,
      {
        id: newId,
        collegeName: formData.collegeName,
        courseName: formData.courseName,
        specialization: formData.specialization,
        totalSeats: Number(formData.totalSeats),
        genSeats: Number(formData.genSeats),
        obcSeats: Number(formData.obcSeats),
        stSeats: Number(formData.stSeats),
        scSeats: Number(formData.scSeats),
        reserveSeats: Number(formData.reserveSeats),
        availableSeats: Number(formData.availableSeats),
        status: formData.active ? "Active" : "InActive",
      },
    ]);
    setIsAdding(false);
    setShowAddConfirm(false);
  };

  const statusBodyTemplate = (rowData: SeatData) => (
    <span
      className={`px-2 py-1 rounded text-xs font-bold ${rowData.status === "Active"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
        }`}
    >
      {rowData.status}
    </span>
  );

  const actionBodyTemplate = (rowData: SeatData) => (
    <div className="flex gap-2">
      <Button onClick={() => handleEditClick(rowData)}>✏️</Button>
      <Button
        className="p-button-sm p-button-danger"
        tooltip="Delete"
        tooltipOptions={{ position: "top" }}
        onClick={() => setSeats(seats.filter((s) => s.id !== rowData.id))}
      >
        🗑️
      </Button>
    </div>
  );

  return (
    <PageLayout title="Seat Availability Updates">
      {!isEditing && !isAdding && (
        <div className="flex justify-end mb-4">
          <Button
            label="Add Seat Availability Update"
            icon="pi pi-plus"
            className="p-button-success"
            onClick={handleAddClick}
          />
        </div>
      )}
      {!isEditing && !isAdding && (
        <div className="bg-white p-4 rounded shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">
              List Seat Availability Updates
            </h2>
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText placeholder="Search..." className="p-inputtext-sm" />
            </span>
          </div>

          <DataTable
            value={seats}
            paginator
            rows={10}
            className="p-datatable-sm text-xs"
          >
            <Column field="id" header="S.No" />
            <Column field="collegeName" header="College Name" sortable />
            <Column field="courseName" header="Course Name" />
            <Column field="specialization" header="Specialization" />
            <Column field="totalSeats" header="Total" />
            <Column field="genSeats" header="Gen" />
            <Column field="obcSeats" header="OBC" />
            <Column field="stSeats" header="ST" />
            <Column field="scSeats" header="SC" />
            <Column field="reserveSeats" header="Reserve" />
            <Column field="availableSeats" header="Available" />
            <Column field="status" header="Status" body={statusBodyTemplate} />
            <Column header="Actions" body={actionBodyTemplate} />
          </DataTable>
        </div>
      )}
      {isAdding && (
        <div className="bg-white p-6 rounded shadow-sm border border-t-4 border-green-500">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-700">
              Add Seat Availability Update
            </h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setIsAdding(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-bold">Select College Name</label>
              <Dropdown
                value={formData.collegeName}
                options={collegeOptions}
                onChange={(e) =>
                  setFormData({ ...formData, collegeName: e.value })
                }
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-bold">Select Course Name</label>
              <Dropdown
                value={formData.courseName}
                options={courseOptions}
                onChange={(e) =>
                  setFormData({ ...formData, courseName: e.value })
                }
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-bold">Specialization</label>
              <Dropdown
                value={formData.specialization}
                options={specOptions}
                onChange={(e) =>
                  setFormData({ ...formData, specialization: e.value })
                }
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">Total Seats</label>
              <InputText
                type="number"
                value={formData.totalSeats}
                onChange={(e) =>
                  setFormData({ ...formData, totalSeats: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">Gen Seats</label>
              <InputText
                type="number"
                value={formData.genSeats}
                onChange={(e) =>
                  setFormData({ ...formData, genSeats: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">OBC Seats</label>
              <InputText
                type="number"
                value={formData.obcSeats}
                onChange={(e) =>
                  setFormData({ ...formData, obcSeats: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">ST Seats</label>
              <InputText
                type="number"
                value={formData.stSeats}
                onChange={(e) =>
                  setFormData({ ...formData, stSeats: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">SC Seats</label>
              <InputText
                type="number"
                value={formData.scSeats}
                onChange={(e) =>
                  setFormData({ ...formData, scSeats: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">Reserve Seats</label>
              <InputText
                type="number"
                value={formData.reserveSeats}
                onChange={(e) =>
                  setFormData({ ...formData, reserveSeats: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">Available Seats</label>
              <InputText
                type="number"
                value={formData.availableSeats}
                onChange={(e) =>
                  setFormData({ ...formData, availableSeats: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Checkbox
                checked={formData.active}
                onChange={(e) =>
                  setFormData({ ...formData, active: e.checked ?? false })
                }
              />
              <label className="font-bold">Active</label>
            </div>
          </div>

          <div className="flex gap-3 mt-8 border-t pt-4">
            <Button
              label="Save"
              icon="pi pi-check"
              className="p-button-success px-6"
              onClick={handleSaveAdd}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-outlined p-button-secondary px-6"
              onClick={handleAddClick}
            />
          </div>
        </div>
      )}

      {isEditing && (
        <div className="bg-white p-6 rounded shadow-sm border border-t-4 border-blue-500">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-700">
              Edit Seat Availability Update
            </h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setIsEditing(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-bold">Select College Name</label>
              <Dropdown
                value={formData.collegeName}
                options={collegeOptions}
                onChange={(e) =>
                  setFormData({ ...formData, collegeName: e.value })
                }
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-bold">Select Course Name</label>
              <Dropdown
                value={formData.courseName}
                options={courseOptions}
                onChange={(e) =>
                  setFormData({ ...formData, courseName: e.value })
                }
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-bold">Specialization</label>
              <Dropdown
                value={formData.specialization}
                options={specOptions}
                onChange={(e) =>
                  setFormData({ ...formData, specialization: e.value })
                }
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">Total Seats</label>
              <InputText
                type="number"
                value={formData.totalSeats}
                onChange={(e) =>
                  setFormData({ ...formData, totalSeats: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">Gen Seats</label>
              <InputText
                type="number"
                value={formData.genSeats}
                onChange={(e) =>
                  setFormData({ ...formData, genSeats: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">OBC Seats</label>
              <InputText
                type="number"
                value={formData.obcSeats}
                onChange={(e) =>
                  setFormData({ ...formData, obcSeats: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">ST Seats</label>
              <InputText
                type="number"
                value={formData.stSeats}
                onChange={(e) =>
                  setFormData({ ...formData, stSeats: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">SC Seats</label>
              <InputText
                type="number"
                value={formData.scSeats}
                onChange={(e) =>
                  setFormData({ ...formData, scSeats: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">Reserve Seats</label>
              <InputText
                type="number"
                value={formData.reserveSeats}
                onChange={(e) =>
                  setFormData({ ...formData, reserveSeats: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">Available Seats</label>
              <InputText
                type="number"
                value={formData.availableSeats}
                onChange={(e) =>
                  setFormData({ ...formData, availableSeats: e.target.value })
                }
                className="w-full"
              />
            </div>

            <div className="flex items-center gap-2 mt-4">
              <Checkbox
                checked={formData.active}
                onChange={(e) =>
                  setFormData({ ...formData, active: e.checked ?? false })
                }
              />
              <label className="font-bold">Active</label>
            </div>
          </div>

          <div className="flex gap-3 mt-8 border-t pt-4">
            <Button
              label="Update"
              icon="pi pi-check"
              className="p-button-primary px-6"
              onClick={() => setShowUpdateConfirm(true)}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-outlined p-button-secondary px-6"
              onClick={() =>
                selectedRecord &&
                setFormData({
                  collegeName: selectedRecord.collegeName,
                  courseName: selectedRecord.courseName,
                  specialization: selectedRecord.specialization,
                  totalSeats: selectedRecord.totalSeats.toString(),
                  genSeats: selectedRecord.genSeats.toString(),
                  obcSeats: selectedRecord.obcSeats.toString(),
                  stSeats: selectedRecord.stSeats.toString(),
                  scSeats: selectedRecord.scSeats.toString(),
                  reserveSeats: selectedRecord.reserveSeats.toString(),
                  availableSeats: selectedRecord.availableSeats.toString(),
                  active: selectedRecord.status === "Active",
                })
              }
            />
          </div>
        </div>
      )}

      <Dialog
        header="Confirmation"
        visible={showEditConfirm}
        onHide={() => setShowEditConfirm(false)}
        footer={
          <div>
            <Button
              label="No"
              onClick={() => setShowEditConfirm(false)}
              className="p-button-text"
            />
            <Button label="Yes" onClick={proceedToEdit} autoFocus />
          </div>
        }
      >
        <p>Are you sure you want to edit this record?</p>
      </Dialog>

      <Dialog
        header="Add Confirmation"
        visible={showAddConfirm}
        onHide={() => setShowAddConfirm(false)}
        footer={
          <div>
            <Button
              label="Cancel"
              onClick={() => setShowAddConfirm(false)}
              className="p-button-text"
            />
            <Button label="Confirm" onClick={confirmAdd} autoFocus />
          </div>
        }
      >
        <p>Do you want to save this new seat availability entry?</p>
      </Dialog>

      <Dialog
        header="Update Record"
        visible={showUpdateConfirm}
        onHide={() => setShowUpdateConfirm(false)}
        footer={
          <div>
            <Button
              label="Cancel"
              onClick={() => setShowUpdateConfirm(false)}
              className="p-button-text"
            />
            <Button
              label="Confirm Update"
              onClick={() => {
                setShowUpdateConfirm(false);
                setIsEditing(false);
              }}
              className="p-button-success"
            />
          </div>
        }
      >
        <p>Do you want to save the changes for {formData.collegeName}?</p>
      </Dialog>
    </PageLayout>
  );
};

export default SeatAvailability;
