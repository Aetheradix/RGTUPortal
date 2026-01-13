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
  allotmentDate: string | Date | null;
  status: string;
}

const ManageAllotmentStatus: React.FC = () => {
  const [view, setView] = useState<"LIST" | "FORM">("LIST");
  const [isEdit, setIsEdit] = useState(false);
  const [globalFilter, setGlobalFilter] = useState(""); 
  const [formData, setFormData] = useState<Partial<AllotmentStatus>>({
    status: "Active",
    allotmentDate: null,
  });

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
  ]);

  const courses = ["B.Tech", "M.Tech", "BCA", "MCA"];
  const specializations = ["Computer Science & Engineering", "Information Technology", "AI", "ML"];
  const admissionStatuses = ["Allotted", "Awaiting Allotment", "Under Review"];
  const feeStatuses = ["Paid", "Pending"];

  const confirmEdit = (rowData: AllotmentStatus) => {
    confirmDialog({
      message: "Do you want to edit this record?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        setFormData({
          ...rowData,
          allotmentDate: rowData.allotmentDate ? new Date(rowData.allotmentDate as string) : null,
        });
        setIsEdit(true);
        setView("FORM");
      },
    });
  };

  const statusBody = (rowData: AllotmentStatus) => (
    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${rowData.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
      {rowData.status}
    </span>
  );

  return (
    <PageLayout title="Manage Allotment Status">
      <ConfirmDialog />
      <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
        {view === "LIST" ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800 tracking-tight">Allotment Status List</h2>
              <Button label="Add Status" icon="pi pi-plus" className="p-button-sm" onClick={() => { setFormData({ status: "Active" }); setIsEdit(false); setView("FORM"); }} />
            </div>

            <div className="flex justify-end mb-3">
              <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText 
                  type="search" 
                  onInput={(e) => setGlobalFilter((e.target as HTMLInputElement).value)} 
                  placeholder="Global Search..." 
                  className="p-inputtext-sm" 
                />
              </span>
            </div>

            <DataTable value={data} paginator rows={10} globalFilter={globalFilter} className="p-datatable-sm" stripedRows showGridlines>
              <Column field="regNo" header="Reg No." sortable />
              <Column field="studentName" header="Student Name" sortable />
              <Column field="course" header="Course" />
              <Column field="admissionStatus" header="Admission" />
              <Column field="feeStatus" header="Fee" />
              <Column field="status" header="Status" body={statusBody} />
              <Column header="Actions" body={(rd) => <Button icon="pi pi-pencil" className="p-button-sm p-button-success" onClick={() => confirmEdit(rd)} />} />
            </DataTable>
          </>
        ) : (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className="text-xl font-bold text-blue-600">{isEdit ? "Update" : "Add"} Allotment Status</h2>
              <Button label="Back" icon="pi pi-arrow-left" className="p-button-text p-button-sm" onClick={() => setView("LIST")} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Registration No.</label>
                <InputText value={formData.regNo || ""} onChange={(e) => setFormData({ ...formData, regNo: e.target.value })} className="p-inputtext-sm" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Select Course</label>
                <Dropdown value={formData.course} options={courses} onChange={(e) => setFormData({ ...formData, course: e.value })} placeholder="Select Course" className="p-inputtext-sm" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Specialization</label>
                <Dropdown value={formData.specialization} options={specializations} onChange={(e) => setFormData({ ...formData, specialization: e.value })} placeholder="Select" className="p-inputtext-sm" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Admission Status</label>
                <Dropdown value={formData.admissionStatus} options={admissionStatuses} onChange={(e) => setFormData({ ...formData, admissionStatus: e.value })} placeholder="Select Status" className="p-inputtext-sm" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Fee Status</label>
                <Dropdown value={formData.feeStatus} options={feeStatuses} onChange={(e) => setFormData({ ...formData, feeStatus: e.value })} placeholder="Select Fee" className="p-inputtext-sm" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Allotment Date</label>
                <Calendar value={formData.allotmentDate instanceof Date ? formData.allotmentDate : null} onChange={(e) => setFormData({ ...formData, allotmentDate: e.value as Date })} dateFormat="dd/mm/yy" showIcon className="p-inputtext-sm" />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-bold text-gray-600 uppercase">Is Active</label>
                <div className="flex items-center gap-2 mt-2">
                  <Checkbox 
                    inputId="isActive" 
                    checked={formData.status === "Active"} 
                    onChange={(e) => setFormData({ ...formData, status: e.checked ? "Active" : "Inactive" })} 
                  />
                  <label htmlFor="isActive" className="text-sm">Active</label>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-3 border-t pt-4">
              <Button label="Save Changes" icon="pi pi-check" className="p-button-sm px-6" onClick={() => setView("LIST")} />
              <Button label="Cancel" className="p-button-sm p-button-outlined p-button-secondary px-6" onClick={() => setView("LIST")} />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ManageAllotmentStatus;