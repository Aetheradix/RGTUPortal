import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";

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

const SeatAvailability: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showEditConfirm, setShowEditConfirm] = useState(false);
  const [showUpdateConfirm, setShowUpdateConfirm] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<SeatData | null>(null);
  const [formData, setFormData] = useState<any>({});

  const [seats] = useState<SeatData[]>([
    {
      id: 1,
      collegeName: "RGPV, Bhopal",
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
    "RGPV, Bhopal",
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
        ...selectedRecord,
        active: selectedRecord.status === "Active",
      });
      setIsEditing(true);
    }
    setShowEditConfirm(false);
  };

  const statusBodyTemplate = (rowData: SeatData) => {
    return (
      <span
        className={`px-2 py-1 rounded text-xs font-bold ${
          rowData.status === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {rowData.status}
      </span>
    );
  };

  const actionBodyTemplate = (rowData: SeatData) => {
    return (
      <div className="flex gap-2">
        <Button
          icon="pi pi-pencil"
          label="Edit"
          className="p-button-sm p-button-info"
          onClick={() => handleEditClick(rowData)}
        />
        <Button
          icon="pi pi-trash"
          label="Delete"
          className="p-button-sm p-button-danger"
        />
      </div>
    );
  };

  return (
    <PageLayout title="Seat Availability Updates">
      {!isEditing ? (
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
            responsiveLayout="scroll"
          >
            <Column field="id" header="S.No" />
            <Column field="collegeName" header="College Name" sortable />
            <Column field="courseName" header="Courses Name" />
            <Column field="specialization" header="Specialization" />
            <Column field="totalSeats" header="Total" />
            <Column field="genSeats" header="Gen" />
            <Column field="obcSeats" header="OBC" />
            <Column field="stSeats" header="ST" />
            <Column field="scSeats" header="SC" />
            <Column field="availableSeats" header="Available" />
            <Column field="status" header="Status" body={statusBodyTemplate} />
            <Column header="Actions" body={actionBodyTemplate} />
          </DataTable>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-sm border border-t-4 border-blue-500">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-gray-700">
              Edit Seat Availability Updates
            </h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setIsEditing(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
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
            <div className="flex flex-col gap-2">
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
            <div className="flex flex-col gap-2">
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

            {[
              "totalSeats",
              "genSeats",
              "obcSeats",
              "stSeats",
              "scSeats",
              "reserveSeats",
              "availableSeats",
            ].map((field) => (
              <div key={field} className="flex flex-col gap-2">
                <label className="text-sm font-bold capitalize">
                  {field.replace("Seats", " Seats")}
                </label>
                <InputText
                  type="number"
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field]: e.target.value })
                  }
                  className="w-full"
                />
              </div>
            ))}

            <div className="flex items-center gap-2 mt-4">
              <Checkbox
                onChange={(e) =>
                  setFormData({ ...formData, active: e.checked })
                }
                checked={formData.active}
              ></Checkbox>
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
              onClick={() => setFormData({ ...selectedRecord, active: true })}
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
