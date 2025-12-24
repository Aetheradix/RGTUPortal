import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { Calendar } from "primereact/calendar";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

interface AllotmentStatus {
  id: string;
  srNo: number;
  regNo: string;
  studentName: string;
  course: string;
  specialization: string;
  admissionStatus: string;
  feeStatus: string;
  allotmentDate: any;
  status: string;
}

const ManageAllotmentStatus: React.FC = () => {
  const [view, setView] = useState<"LIST" | "FORM">("LIST");
  const [isEdit, setIsEdit] = useState(false);
  const [globalFilter, setGlobalFilter] = useState("");
  const [formData, setFormData] = useState<Partial<AllotmentStatus>>({
    status: "Active",
  });

  // Mock Data
  const [data] = useState<AllotmentStatus[]>([
    {
      id: "1",
      srNo: 1,
      regNo: "202324000123",
      studentName: "Aarav Sharma",
      course: "B.Tech",
      specialization: "Computer Science & Engineering",
      admissionStatus: "Allotted",
      feeStatus: "Paid",
      allotmentDate: "15/11/2024",
      status: "Active",
    },
    {
      id: "2",
      srNo: 2,
      regNo: "202324000124",
      studentName: "Riya Verma",
      course: "MCA",
      specialization: "Artificial Intelligence",
      admissionStatus: "Awaiting Allotment",
      feeStatus: "Pending",
      allotmentDate: "20/11/2024",
      status: "Inactive",
    },
  ]);

  // Options
  const courses = [
    "B.Tech",
    "M.Tech",
    "BCA",
    "MCA",
    "B.Sc (IT)",
    "M.Sc (IT)",
    "MBA (Tech Management)",
  ];
  const specializations = [
    "Computer Science & Engineering",
    "Information Technology",
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Cyber Security",
    "Robotics",
  ];
  const admissionStatuses = ["Allotted", "Awaiting Allotment", "Under Review"];
  const feeStatuses = ["Paid", "Pending"];

  // Edit Confirmation logic
  const confirmEdit = (rowData: AllotmentStatus) => {
    confirmDialog({
      message: "Do you want to edit this record?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        setFormData(rowData);
        setIsEdit(true);
        setView("FORM");
      },
    });
  };

  const actionBody = (rowData: AllotmentStatus) => (
    <div className="flex gap-2">
      <Button
      label="Edit"
        icon="pi pi-pencil"
        className="p-button-sm p-button-success"
        onClick={() => confirmEdit(rowData)}
      />
      <Button icon="pi pi-trash" label="Delete" className="p-button-sm p-button-danger" />
    </div>
  );

  return (
    <PageLayout title="Manage Allotment Status">
      <ConfirmDialog />
      <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
        {/* --- LIST VIEW --- */}
        {view === "LIST" && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">
                Manage Allotment Status List
              </h2>
              <Button
                label="Add Manage Allotment Status"
                icon="pi pi-plus"
                className="p-button-sm"
                onClick={() => {
                  setFormData({ status: "Active" });
                  setIsEdit(false);
                  setView("FORM");
                }}
              />
            </div>

            <div className="flex justify-end mb-3">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                  placeholder="Search..."
                  className="p-inputtext-sm"
                  onInput={(e) =>
                    setGlobalFilter((e.target as HTMLInputElement).value)
                  }
                />
              </span>
            </div>

            <DataTable
              value={data}
              paginator
              rows={10}
              globalFilter={globalFilter}
              className="p-datatable-sm"
              showGridlines
              stripedRows
            >
              <Column field="srNo" header="Sr No." style={{ width: "3rem" }} />
              <Column field="regNo" header="Registration No." sortable />
              <Column field="studentName" header="Student Name" sortable />
              <Column field="course" header="Course" />
              <Column field="specialization" header="Specialization" />
              <Column field="admissionStatus" header="Admission Status" />
              <Column field="feeStatus" header="Fee Status" />
              <Column field="allotmentDate" header="Allotment Date" />
              <Column field="status" header="Status" />
              <Column
                header="Actions"
                body={actionBody}
                style={{ width: "8rem" }}
              />
            </DataTable>
          </>
        )}

        {/* --- FORM VIEW (Add/Update) --- */}
        {view === "FORM" && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className="text-xl font-bold text-blue-600">
                {isEdit
                  ? "Update Manage Allotment Status"
                  : "Add Manage Allotment Status"}
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-secondary p-button-text p-button-sm"
                onClick={() => setView("LIST")}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Registration No.
                </label>
                <InputText
                  value={formData.regNo}
                  onChange={(e) =>
                    setFormData({ ...formData, regNo: e.target.value })
                  }
                  className="w-full p-inputtext-sm"
                  placeholder="Enter Registration No."
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Student Name
                </label>
                <InputText
                  value={formData.studentName}
                  onChange={(e) =>
                    setFormData({ ...formData, studentName: e.target.value })
                  }
                  className="w-full p-inputtext-sm"
                  placeholder="Enter Student Name"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Select Course
                </label>
                <Dropdown
                  value={formData.course}
                  options={courses}
                  onChange={(e) =>
                    setFormData({ ...formData, course: e.value })
                  }
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Select Specialization
                </label>
                <Dropdown
                  value={formData.specialization}
                  options={specializations}
                  onChange={(e) =>
                    setFormData({ ...formData, specialization: e.value })
                  }
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Allotment Status
                </label>
                <Dropdown
                  value={formData.admissionStatus}
                  options={admissionStatuses}
                  onChange={(e) =>
                    setFormData({ ...formData, admissionStatus: e.value })
                  }
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Fee Status
                </label>
                <Dropdown
                  value={formData.feeStatus}
                  options={feeStatuses}
                  onChange={(e) =>
                    setFormData({ ...formData, feeStatus: e.value })
                  }
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Allotment Date*
                </label>
                <Calendar
                  value={formData.allotmentDate ? new Date() : null}
                  onChange={(e) =>
                    setFormData({ ...formData, allotmentDate: e.value })
                  }
                  dateFormat="dd/mm/yy"
                  className="w-full p-inputtext-sm"
                  showIcon
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-2">Status*</label>
                <div className="flex items-center gap-2 mt-2">
                  <Checkbox
                    checked={formData.status === "Active"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        status: e.checked ? "Active" : "Inactive",
                      })
                    }
                  />
                  <span className="text-sm">IsActive</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3 border-t pt-4">
              <Button
                label={isEdit ? "Update" : "Save"}
                icon="pi pi-check"
                className="p-button-primary px-6"
                onClick={() => setView("LIST")}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-secondary p-button-outlined px-6"
                onClick={() => setFormData({ status: "Active" })}
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ManageAllotmentStatus;
