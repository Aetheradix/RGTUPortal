import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableRowReorderEvent } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Dialog } from "primereact/dialog";
import { FileUpload, type FileUploadHandlerEvent } from "primereact/fileupload";

interface DocConfig {
  id: number;
  docName: string;
  docType: string;
  format: string;
  authority: string;
  description: string;
}

const DocumentVerification: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [showConfirmPopup, setShowConfirmPopup] = useState<boolean>(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [docList, setDocList] = useState<DocConfig[]>([
    {
      id: 1,
      docName: "Marksheet of 10th",
      docType: "Academic",
      format: "PDF",
      authority: "College Admission Office",
      description: "Upload 10th class marksheet.",
    },
    {
      id: 2,
      docName: "Marksheet of 12th",
      docType: "Academic",
      format: "JPG",
      authority: "University Verification Desk",
      description: "Upload 12th class marksheet.",
    },
    {
      id: 3,
      docName: "Domicile Certificate",
      docType: "Residential",
      format: "PDF",
      authority: "External Agency",
      description: "Upload domicile certificate.",
    },
  ]);

  const [formData, setFormData] = useState<Partial<DocConfig>>({});

  const docNameOptions = [
    "10th Marksheet",
    "12th Marksheet",
    "Aadhar Card",
    "Domicile Certificate",
  ].map((d) => ({ label: d, value: d }));
  const docTypeOptions = ["Academic", "Identity Proof", "Residential"].map(
    (t) => ({ label: t, value: t })
  );
  const authorityOptions = [
    "College Admission Office",
    "University Verification Desk",
    "External Agency",
  ].map((a) => ({ label: a, value: a }));

  const onRowReorder = (e: DataTableRowReorderEvent<DocConfig[]>) => {
    if (e.value) setDocList(e.value);
  };

  const customBase64Uploader = (event: FileUploadHandlerEvent) => {
    const file = event.files[0];
    setFormData({
      ...formData,
      format: file.name.split(".").pop()?.toUpperCase() || "",
    });
  };

  const editRow = (rowData: DocConfig) => {
    setFormData({ ...rowData });
    setIsEditing(true);
    setShowForm(true);
  };

  const deleteRow = (id: number) => {
    setDocList(docList.filter((item) => item.id !== id));
  };

  const handleSave = () => setShowConfirmPopup(true);

  const confirmFinalSave = () => {
    if (isEditing) {
      setDocList(
        docList.map((item) =>
          item.id === formData.id ? (formData as DocConfig) : item
        )
      );
    } else {
      const newDoc = { ...formData, id: docList.length + 1 } as DocConfig;
      setDocList([...docList, newDoc]);
    }
    setShowConfirmPopup(false);
    setShowSuccessPopup(true);
  };

  const actionBodyTemplate = (rowData: DocConfig) => {
    return (
      <div className="flex gap-2">
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-info p-button-text"
          onClick={() => editRow(rowData)}
          label="Edit"
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger p-button-text"
          onClick={() => deleteRow(rowData.id)}
          label="Delete"
        />
      </div>
    );
  };

  return (
    <PageLayout title="Document Verification">
      {!showForm ? (
        <div className="bg-white p-4 rounded shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">
              Configure Document Requirement
            </h2>
            <Button
              label="Add New Document"
              icon="pi pi-plus"
              onClick={() => {
                setFormData({});
                setIsEditing(false);
                setShowForm(true);
              }}
              className="p-button-sm"
            />
          </div>

          <DataTable
            value={docList}
            reorderableRows
            onRowReorder={onRowReorder}
            dataKey="id"
            paginator
            rows={10}
            className="p-datatable-sm text-sm"
            globalFilter={globalFilter}
            header={
              <div className="flex justify-end">
                <span className="p-input-icon-left">
                  <i className="pi pi-search" />
                  <InputText
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Search..."
                    className="p-inputtext-sm"
                  />
                </span>
              </div>
            }
          >
            <Column field="id" header="Sr No." sortable />
            <Column field="docName" header="Document Name" sortable />
            <Column field="docType" header="Type" sortable />
            <Column field="format" header="Format" sortable />
            <Column field="authority" header="Authority" sortable />
            <Column
              header="Actions"
              body={actionBodyTemplate}
              style={{ width: "8rem" }}
            />
          </DataTable>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-sm border">
          <h2 className="text-xl font-bold mb-6">
            {isEditing ? "Edit" : "Configure"} Document To Verify
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Select Document Name*</label>
              <Dropdown
                value={formData.docName}
                options={docNameOptions}
                onChange={(e) => setFormData({ ...formData, docName: e.value })}
                placeholder="Select"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Select Document Type*</label>
              <Dropdown
                value={formData.docType}
                options={docTypeOptions}
                onChange={(e) => setFormData({ ...formData, docType: e.value })}
                placeholder="Select"
              />
            </div>
            <div className="col-span-full flex flex-col gap-2">
              <label className="font-bold text-sm">
                Upload Sample Format (Accepted: PDF, JPG)*
              </label>
              <FileUpload
                mode="basic"
                name="demo[]"
                accept="image/*,application/pdf"
                maxFileSize={1000000}
                customUpload
                uploadHandler={customBase64Uploader}
                auto
                chooseLabel="Browse File"
                className="w-full"
              />
              {formData.format && (
                <small className="text-green-600 font-bold text-xs">
                  Selected Format: {formData.format}
                </small>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">
                Verification Authority
              </label>
              <Dropdown
                value={formData.authority}
                options={authorityOptions}
                onChange={(e) =>
                  setFormData({ ...formData, authority: e.value })
                }
                placeholder="Select"
              />
            </div>
            <div className="col-span-full flex flex-col gap-2">
              <label className="font-bold text-sm">Enter Description*</label>
              <InputTextarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={3}
              />
            </div>
          </div>

          <div className="flex gap-3 mt-8 border-t pt-5">
            <Button
              label={isEditing ? "Update" : "Save"}
              icon="pi pi-save"
              className="p-button-success"
              onClick={handleSave}
            />
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-outlined p-button-secondary"
              onClick={() => setFormData({})}
            />
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text"
              onClick={() => setShowForm(false)}
            />
          </div>
        </div>
      )}

      <Dialog
        header="Confirmation"
        visible={showConfirmPopup}
        onHide={() => setShowConfirmPopup(false)}
        footer={
          <div className="flex justify-end gap-2">
            <Button
              label="No"
              onClick={() => setShowConfirmPopup(false)}
              className="p-button-text"
            />
            <Button label="Yes" onClick={confirmFinalSave} autoFocus />
          </div>
        }
      >
        <p>
          Are you sure you want to {isEditing ? "update" : "save"} this record?
        </p>
      </Dialog>

      <Dialog
        header="Success!"
        visible={showSuccessPopup}
        onHide={() => setShowSuccessPopup(false)}
        footer={
          <Button
            label="OK"
            onClick={() => {
              setShowSuccessPopup(false);
              setShowForm(false);
            }}
          />
        }
      >
        <p>
          Document details have been {isEditing ? "updated" : "saved"}{" "}
          successfully.
        </p>
      </Dialog>
    </PageLayout>
  );
};

export default DocumentVerification;
