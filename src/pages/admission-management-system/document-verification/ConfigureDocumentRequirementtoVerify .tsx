import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableRowToggleEvent } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload, type FileUploadHandlerEvent } from "primereact/fileupload";
import { Dialog } from "primereact/dialog";

interface DocConfig {
  id: number;
  docName: string;
  docType: string;
  formatName: string;
  authority: string;
  description: string;
}

const docNameOptionsList = [
  "10th Marksheet",
  "12th Marksheet",
  "Aadhar Card",
  "Domicile Certificate",
  "SC/ST/OBC Certificate",
  "Income Certificate",
  "Transfer Certificate",
  "Migration Certificate",
];

const docTypeOptionsList = [
  "Academic",
  "Identity Proof",
  "Residential",
  "Caste Certificate",
  "Income Proof",
  "TC/Migration",
];

const authorityOptionsList = [
  "College Admission Office",
  "University Verification Desk",
  "State Technical Education Department",
  "External Agency",
];

const ConfigureDocuments: React.FC = () => {
  const [list, setList] = useState<DocConfig[]>([
    {
      id: 1,
      docName: "Marksheet of 10th",
      docType: "Academic",
      formatName: "10th Marksheet.pdf",
      authority: "College Admission Office",
      description: "Upload 10th class marksheet issued by the board.",
    },
    {
      id: 2,
      docName: "Marksheet of 12th",
      docType: "Academic",
      formatName: "12th Marksheet.jpg",
      authority: "University Verification Desk",
      description: "Upload 12th class marksheet issued by the board.",
    },
    {
      id: 3,
      docName: "Domicile Certificate",
      docType: "Residential",
      formatName: "Domicile Certificate.pdf",
      authority: "External Agency",
      description: "Upload domicile certificate issued by state authority.",
    },
  ]);

  const [expandedRows, setExpandedRows] = useState<
    { [key: number]: boolean } | undefined
  >(undefined);

  const [showForm, setShowForm] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const emptyForm: Omit<DocConfig, "id"> = {
    docName: "",
    docType: "",
    formatName: "",
    authority: "",
    description: "",
  };

  const [formData, setFormData] = useState<Omit<DocConfig, "id">>(emptyForm);

  const handleFileSelect = (event: FileUploadHandlerEvent) => {
    const file = event.files[0];
    if (file) {
      setFormData({ ...formData, formatName: file.name });
    }
  };

  const handleSave = () => {
    setShowConfirm(true);
  };

  const confirmSave = () => {
    const newItem: DocConfig = {
      ...formData,
      id: list.length + 1,
    };
    setList([...list, newItem]);
    setShowConfirm(false);
    setShowSuccess(true);
    setShowForm(false);
    setFormData(emptyForm);
  };

  const resetForm = () => {
    setFormData(emptyForm);
  };

  const rowExpansionTemplate = (data: DocConfig) => (
    <div className="p-3 bg-gray-50 rounded-md">
      <p>
        <strong>Authority:</strong> {data.authority}
      </p>
      <p>
        <strong>Description:</strong> {data.description}
      </p>
    </div>
  );

  const docNameOptions = docNameOptionsList.map((d) => ({
    label: d,
    value: d,
  }));
  const docTypeOptions = docTypeOptionsList.map((t) => ({
    label: t,
    value: t,
  }));
  const authorityOptions = authorityOptionsList.map((a) => ({
    label: a,
    value: a,
  }));

  return (
    <PageLayout title="Configure Document Requirement">
      {!showForm && (
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">
              List Configure Document Requirement
            </h2>
            <Button
              label="Add Configure Document Requirement"
              icon="pi pi-plus"
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
            />
          </div>

          <DataTable
            value={list}
            expandedRows={expandedRows}
            onRowToggle={(e: DataTableRowToggleEvent) =>
              setExpandedRows(e.data as { [key: number]: boolean })
            }
            rowExpansionTemplate={rowExpansionTemplate}
            dataKey="id"
            paginator
            rows={10}
            className="p-datatable-sm"
          >
            <Column expander style={{ width: "3em" }} />
            <Column field="docName" header="Document Name" />
            <Column field="docType" header="Document Type" />
            <Column field="formatName" header="Allowed Format" />
            <Column field="authority" header="Authority" />
          </DataTable>
        </div>
      )}
      {showForm && (
        <div className="bg-white p-6 rounded shadow-sm mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">
              Add Configure Document Requirement
            </h2>
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-sm p-button-text"
              onClick={() => {
                setShowForm(false);
                resetForm();
              }}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block font-medium">Document Name*</label>
              <Dropdown
                value={formData.docName}
                options={docNameOptions}
                onChange={(e) => setFormData({ ...formData, docName: e.value })}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="block font-medium">Document Type*</label>
              <Dropdown
                value={formData.docType}
                options={docTypeOptions}
                onChange={(e) => setFormData({ ...formData, docType: e.value })}
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="block font-medium">Select Authority*</label>
              <Dropdown
                value={formData.authority}
                options={authorityOptions}
                onChange={(e) =>
                  setFormData({ ...formData, authority: e.value })
                }
                placeholder="Select"
                className="w-full"
              />
            </div>
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-1">
              <div>
                <label className="block font-medium">Enter Description*</label>
                <InputTextarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Enter Description"
                  rows={4}
                  className="w-120"
                />
              </div>
              <div>
                <label className="block font-medium">
                  Upload File
                </label>
                <FileUpload
                  mode="basic"
                  name="format"
                  accept="image/*,application/pdf"
                  maxFileSize={2000000}
                  customUpload
                  uploadHandler={handleFileSelect}
                  auto
                  chooseLabel="Browse File"
                  className="w-40 h-40"
                />
                {formData.formatName && (
                  <small className="text-indigo-600 font-bold italic">
                    Selected: {formData.formatName}
                  </small>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 pt-6">
            <Button
              label="Clear"
              icon="pi pi-refresh"
              className="p-button-outlined p-button-secondary px-8 py-2"
              onClick={resetForm}
            />
            <Button
              label="Save"
              icon="pi pi-check"
              className="p-button-success px-8 py-2"
              onClick={handleSave}
            />
          </div>
        </div>
      )}

      <Dialog
        header="Confirm Save"
        visible={showConfirm}
        onHide={() => setShowConfirm(false)}
      >
        <p>Are you sure you want to save this document requirement?</p>
        <div className="flex justify-end gap-2 mt-3">
          <Button label="No" onClick={() => setShowConfirm(false)} />
          <Button label="Yes" onClick={confirmSave} />
        </div>
      </Dialog>
      <Dialog
        header="Success"
        visible={showSuccess}
        onHide={() => setShowSuccess(false)}
      >
        <p>Document requirement saved successfully!</p>
        <Button label="OK" onClick={() => setShowSuccess(false)} />
      </Dialog>
    </PageLayout>
  );
};

export default ConfigureDocuments;
