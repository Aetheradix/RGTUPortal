import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from "primereact/checkbox";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog"; // For Yes/No
import { Dialog } from "primereact/dialog"; // For Success Message

interface AllotmentLetter {
  id: string;
  srNo: number;
  collegeName: string;
  course: string;
  academicYear: string;
  quotaType: string;
  regNo: string;
  allotmentFor: string;
  status: string;
}

const GenerateAllotmentLetters: React.FC = () => {
  // Control Views
  const [view, setView] = useState<"LIST" | "FORM">("LIST");
  const [isEdit, setIsEdit] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Form States
  const [formData, setFormData] = useState<Partial<AllotmentLetter>>({
    status: "Active",
  });
  const [globalFilter, setGlobalFilter] = useState("");

  // Options
  const colleges = [
    "MANIT",
    "IET-DAVV",
    "SGSITS",
    "SATI",
    "LNCT",
    "RJIT",
    "MITS",
  ];
  const courses = ["B.Tech", "M.Tech", "BCA", "MCA", "B.Sc (IT)"];
  const years = ["2024-2025", "2025-2026"];
  const quotas = ["General", "OBC", "SC", "ST", "EWS", "PWD"];
  const allotmentOptions = ["Individual Students", "Entire Batch"];

  const [data] = useState<AllotmentLetter[]>([
    {
      id: "1",
      srNo: 1,
      collegeName: "SATI",
      course: "B.Tech",
      academicYear: "2024-2025",
      quotaType: "General",
      regNo: "123456789012",
      allotmentFor: "Individual Students",
      status: "Active",
    },
  ]);

  // Handle Edit Click (Yes/No Popup)
  const confirmEdit = (rowData: AllotmentLetter) => {
    confirmDialog({
      message: "Are you sure you want to edit this allotment letter?",
      header: "Edit Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        setFormData(rowData);
        setIsEdit(true);
        setView("FORM");
      },
    });
  };

  // Handle Generate Button (Double Popup Logic)
  const handleGenerate = () => {
    confirmDialog({
      message: "Do you want to generate the allotment letter?",
      header: "Confirmation",
      icon: "pi pi-question-circle",
      accept: () => setShowSuccess(true), // Open the "OK" success dialog
    });
  };

  const actionBody = (rowData: AllotmentLetter) => (
    <div className="flex gap-2">
      <Button
        icon="pi pi-pencil" label="Edit"
        className="p-button-sm p-button-success"
        onClick={() => confirmEdit(rowData)}
      />
      <Button icon="pi pi-trash" label="Delete" className="p-button-sm p-button-danger" />
    </div>
  );

  return (
    <PageLayout title="Generate Allotment Letters">
      <ConfirmDialog /> {/* Hidden logic provider for Yes/No */}
      {/* --- Success Popup (OK Message) --- */}
      <Dialog
        header="Message"
        visible={showSuccess}
        style={{ width: "350px" }}
        onHide={() => setShowSuccess(false)}
        footer={
          <Button
            label="OK"
            onClick={() => {
              setShowSuccess(false);
              setView("LIST");
            }}
          />
        }
      >
        <p className="m-0">Allotment Letter Generated Successfully!</p>
      </Dialog>
      <div className="bg-white p-4 rounded shadow-sm border border-gray-200">
        {/* --- LIST VIEW --- */}
        {view === "LIST" && (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">
                Generate Allotment Letters List
              </h2>
              <Button
                label="Add Generate Allotment Letter"
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
              <Column field="srNo" header="Sr No." />
              <Column field="collegeName" header="College Name" />
              <Column field="course" header="Course" />
              <Column field="academicYear" header="Academic Year" />
              <Column field="quotaType" header="Quota Type" />
              <Column field="regNo" header="Registration No." />
              <Column field="allotmentFor" header="Allotment For" />
              <Column field="status" header="Status" />
              <Column header="Actions" body={actionBody} />
            </DataTable>
          </>
        )}

        {/* --- FORM VIEW (Add/Update) --- */}
        {view === "FORM" && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h2 className="text-xl font-bold text-blue-600">
                {isEdit
                  ? "Update Generate Allotment Letters"
                  : "Add Generate Allotment Letters"}
              </h2>
              <Button
                label="Go Back"
                icon="pi pi-arrow-left"
                className="p-button-secondary p-button-text p-button-sm"
                onClick={() => setView("LIST")}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Select College Name*
                </label>
                <Dropdown
                  value={formData.collegeName}
                  options={colleges}
                  onChange={(e) =>
                    setFormData({ ...formData, collegeName: e.value })
                  }
                  placeholder="Select"
                  className="w-full p-inputtext-sm"
                  filter
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
                  Academic Year*
                </label>
                <Dropdown
                  value={formData.academicYear}
                  options={years}
                  onChange={(e) =>
                    setFormData({ ...formData, academicYear: e.value })
                  }
                  placeholder="Select"
                  className="p-inputtext-sm w-full"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Quota Type*
                </label>
                <Dropdown
                  value={formData.quotaType}
                  options={quotas}
                  onChange={(e) =>
                    setFormData({ ...formData, quotaType: e.value })
                  }
                  placeholder="Select"
                  className="p-inputtext-sm w-full"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Registration No.
                </label>
                <InputText
                  value={formData.regNo}
                  onChange={(e) =>
                    setFormData({ ...formData, regNo: e.target.value })
                  }
                  className="p-inputtext-sm w-full"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-1">
                  Generate Allotment For
                </label>
                <Dropdown
                  value={formData.allotmentFor}
                  options={allotmentOptions}
                  onChange={(e) =>
                    setFormData({ ...formData, allotmentFor: e.value })
                  }
                  placeholder="Select"
                  className="p-inputtext-sm w-full"
                />
              </div>
              <div className="field">
                <label className="text-xs font-bold block mb-2">Status*</label>
                <div className="flex items-center gap-2">
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

            <div className="mt-6 flex gap-3">
              <Button
                label={isEdit ? "Update" : "Generate Allotment"}
                icon="pi pi-check"
                className="p-button-success"
                onClick={handleGenerate}
              />
              <Button
                label="Clear"
                icon="pi pi-refresh"
                className="p-button-secondary p-button-outlined"
                onClick={() => setFormData({ status: "Active" })}
              />
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default GenerateAllotmentLetters;
