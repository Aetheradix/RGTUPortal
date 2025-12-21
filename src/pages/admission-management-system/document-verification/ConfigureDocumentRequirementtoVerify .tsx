import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableExpandedRows } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { FileUpload, type FileUploadHandlerEvent } from "primereact/fileupload";

interface DocConfig {
  id: number;
  docName: string;
  docType: string;
  formatName: string;
  authority: string;
  description: string;
}

const ConfigureDocuments: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [expandedRows, setExpandedRows] = useState<
    DataTableExpandedRows | any[] | undefined
  >(undefined);
  const [docList, setDocList] = useState<DocConfig[]>([
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
      docType: "Government Document",
      formatName: "10th Marksheet.pdf",
      authority: "External Agency",
      description: "Upload domicile certificate issued by state authority.",
    },
  ]);

  const [formData, setFormData] = useState<Partial<DocConfig>>({});

  const docNameOptions = [
    "10th Marksheet",
    "12th Marksheet",
    "Aadhar Card",
    "Domicile Certificate",
    "SC/ST/OBC Certificate",
    "Income Certificate",
    "Transfer Certificate",
    "Migration Certificate",
  ].map((d) => ({ label: d, value: d }));

  const docTypeOptions = [
    "Academic",
    "Identity Proof",
    "Residential",
    "Caste Certificate",
    "Income Proof",
    "TC/Migration",
  ].map((t) => ({ label: t, value: t }));

  const authorityOptions = [
    "College Admission Office",
    "University Verification Desk",
    "State Technical Education Department",
    "External Agency",
  ].map((a) => ({ label: a, value: a }));

  const onFileSelect = (event: FileUploadHandlerEvent) => {
    const file = event.files[0];
    if (file) setFormData({ ...formData, formatName: file.name });
  };

  const saveDocument = () => {
    if (isEditing) {
      setDocList(
        docList.map((item) =>
          item.id === formData.id ? (formData as DocConfig) : item
        )
      );
    } else {
      setDocList([
        ...docList,
        { ...(formData as DocConfig), id: docList.length + 1 },
      ]);
    }
    setShowForm(false);
    setIsEditing(false);
    setFormData({});
  };
  const rowExpansionTemplate = (data: DocConfig) => {
    return (
      <div className="p-4 bg-gray-50 border-x border-b border-indigo-100 rounded-b-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex-1">
          <p className="text-xs font-bold text-indigo-600 uppercase mb-1">
            Description:
          </p>
          <p className="text-sm text-gray-700">{data.description}</p>
        </div>
        <div className="flex gap-2">
          <Button
            label="Edit"
            icon="pi pi-pencil"
            className="p-button-sm p-button-info"
            onClick={() => {
              setFormData(data);
              setIsEditing(true);
              setShowForm(true);
            }}
          />
          <Button
            label="Delete"
            icon="pi pi-trash"
            className="p-button-sm p-button-danger p-button-outlined"
            onClick={() => setDocList(docList.filter((d) => d.id !== data.id))}
          />
        </div>
      </div>
    );
  };

  return (
    <PageLayout title="Configure Document Requirement">
      {!showForm ? (
        <div className="bg-white p-4 rounded shadow-sm border">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-700">
              Configure Document Requirement To Verify List
            </h2>
            <Button
              label="Add New Document"
              icon="pi pi-plus"
              className="p-button-sm"
              onClick={() => {
                setFormData({});
                setIsEditing(false);
                setShowForm(true);
              }}
            />
          </div>

          <DataTable
            value={docList}
            expandedRows={expandedRows}
            onRowToggle={(e) => setExpandedRows(e.data)}
            rowExpansionTemplate={rowExpansionTemplate}
            dataKey="id"
            paginator
            rows={10}
            rowsPerPageOptions={[10, 25, 50, 100]}
            className="p-datatable-sm text-sm"
            globalFilter={globalFilter}
            stripedRows
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
            <Column expander={true} style={{ width: "3rem" }} header="Action" />
            <Column field="id" header="Sr No." style={{ width: "4rem" }} />
            <Column field="docName" header="Select Document Name" sortable />
            <Column field="docType" header="Select Document Type" sortable />
            <Column field="formatName" header="Upload Format Accepted" />
            <Column field="authority" header="Select Verification Authority" />
          </DataTable>
        </div>
      ) : (
        <div className="bg-white p-6 rounded shadow-sm border border-t-4 border-indigo-500">
          <h2 className="text-xl font-bold mb-6 text-gray-800">
            {isEditing ? "Update" : "Configure"} Document To Verify
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">Select Document Name*</label>
              <Dropdown
                value={formData.docName}
                options={docNameOptions}
                onChange={(e: DropdownChangeEvent) =>
                  setFormData({ ...formData, docName: e.value })
                }
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">Select Document Type*</label>
              <Dropdown
                value={formData.docType}
                options={docTypeOptions}
                onChange={(e: DropdownChangeEvent) =>
                  setFormData({ ...formData, docType: e.value })
                }
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div className="col-span-full flex flex-col gap-2">
              <label className="text-sm font-bold">
                Upload Format Accepted (PDF, JPG)*
              </label>
              <FileUpload
                mode="basic"
                name="uploadDoc"
                accept="image/*,application/pdf"
                maxFileSize={2000000}
                customUpload
                uploadHandler={onFileSelect}
                auto
                chooseLabel="Browse File"
                className="w-full"
              />
              {formData.formatName && (
                <small className="text-indigo-600 font-bold italic">
                  Selected: {formData.formatName}
                </small>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold">
                Select Verification Authority
              </label>
              <Dropdown
                value={formData.authority}
                options={authorityOptions}
                onChange={(e: DropdownChangeEvent) =>
                  setFormData({ ...formData, authority: e.value })
                }
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div className="col-span-full flex flex-col gap-2">
              <label className="text-sm font-bold">Enter Description*</label>
              <InputTextarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                rows={3}
                autoResize
              />
            </div>
          </div>

          <div className="flex gap-3 mt-8 border-t pt-5">
            <Button
              label={isEditing ? "Update Document" : "Save Document"}
              icon="pi pi-check"
              className="p-button-success px-6"
              onClick={saveDocument}
            />
            <Button
              label="Go Back"
              icon="pi pi-arrow-left"
              className="p-button-text p-button-secondary ml-auto"
              onClick={() => setShowForm(false)}
            />
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default ConfigureDocuments;
