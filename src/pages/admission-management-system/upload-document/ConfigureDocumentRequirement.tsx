import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { DataTable, type DataTableRowToggleEvent } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { Dropdown, type DropdownChangeEvent } from "primereact/dropdown";
import {
  MultiSelect,
  type MultiSelectChangeEvent,
} from "primereact/multiselect";
import { Checkbox, type CheckboxChangeEvent } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";

interface DocConfig {
  id: number;
  docName: string;
  description: string;
  allowedFormats: string[];
  maxSize: string;
  mandatory: boolean;
  effectiveDate: Date | null;
  applicableCategories: string[];
  status: boolean;
}

const allowedFormatsOptions = [
  { label: "PDF", value: "PDF" },
  { label: "JPG", value: "JPG" },
  { label: "PNG", value: "PNG" },
  { label: "DOCX", value: "DOCX" },
];

const mandatoryOptions = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];

const categoriesOptions = [
  { label: "SC", value: "SC" },
  { label: "ST", value: "ST" },
  { label: "OBC", value: "OBC" },
  { label: "General", value: "General" },
];

const AddDocumentRequirement: React.FC = () => {
  const [list, setList] = useState<DocConfig[]>([
    {
      id: 1,
      docName: "Aadhaar Card",
      description: "Aadhaar Card Unique identity proof.",
      allowedFormats: ["JPG", "PNG"],
      maxSize: "5 MB",
      mandatory: true,
      effectiveDate: new Date("2024-01-01"),
      applicableCategories: ["SC", "ST", "OBC"],
      status: true,
    },
    {
      id: 2,
      docName: "Transfer Certificate",
      description:
        "Certificate issued by the previous institution for transfer.",
      allowedFormats: ["PDF", "JPG", "PNG"],
      maxSize: "5 MB",
      mandatory: false,
      effectiveDate: new Date("2024-01-01"),
      applicableCategories: ["General"],
      status: true,
    },
  ]);

  const [expandedRows, setExpandedRows] = useState<
    { [key: number]: boolean } | undefined
  >(undefined);

  const [showForm, setShowForm] = useState<boolean>(false);

  const [formData, setFormData] = useState<DocConfig>({
    id: 0,
    docName: "",
    description: "",
    allowedFormats: [],
    maxSize: "",
    mandatory: false,
    effectiveDate: null,
    applicableCategories: [],
    status: true,
  });

  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const resetForm = () => {
    setFormData({
      id: 0,
      docName: "",
      description: "",
      allowedFormats: [],
      maxSize: "",
      mandatory: false,
      effectiveDate: null,
      applicableCategories: [],
      status: true,
    });
  };

  const handleSave = () => setShowConfirm(true);

  const confirmSave = () => {
    const newItem: DocConfig = {
      ...formData,
      id: list.length + 1,
    };
    setList([...list, newItem]);
    setShowConfirm(false);
    setShowSuccess(true);
    resetForm();
    setShowForm(false);
  };

  const rowExpansionTemplate = (data: DocConfig) => (
    <div className="p-3 bg-gray-50 rounded-md">
      <p className="font-semibold">
        Applicable Categories: {data.applicableCategories.join(", ")}
      </p>
      <p className="font-semibold">
        Status: {data.status ? "Active" : "Inactive"}
      </p>
    </div>
  );

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
            <Column field="description" header="Document Description" />
            <Column
              header="Allowed File Formats"
              body={(row: DocConfig) => row.allowedFormats.join(", ")}
            />
            <Column field="maxSize" header="Max File Size" />
            <Column
              field="mandatory"
              header="Mandatory"
              body={(row: DocConfig) => (row.mandatory ? "Yes" : "No")}
            />
            <Column
              field="effectiveDate"
              header="Effective Date"
              body={(row: DocConfig) =>
                row.effectiveDate ? row.effectiveDate.toLocaleDateString() : ""
              }
            />
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
              onClick={() => setShowForm(false)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block font-medium">Document Name*</label>
              <InputText
                value={formData.docName}
                onChange={(e) =>
                  setFormData({ ...formData, docName: e.target.value })
                }
                placeholder="Enter Document Name"
                className="w-full"
              />
            </div>
            <div>
              <label className="block font-medium">Allowed File Formats*</label>
              <MultiSelect
                value={formData.allowedFormats}
                options={allowedFormatsOptions}
                onChange={(e: MultiSelectChangeEvent) =>
                  setFormData({ ...formData, allowedFormats: e.value })
                }
                display="chip"
                placeholder="Select"
                className="w-full"
              />
            </div>

            <div>
              <label className="block font-medium">Max File Size*</label>
              <InputText
                value={formData.maxSize}
                onChange={(e) =>
                  setFormData({ ...formData, maxSize: e.target.value })
                }
                placeholder="Enter Max File Size"
                className="w-full"
              />
            </div>

            <div>
              <label className="block font-medium">Mandatory*</label>
              <Dropdown
                value={formData.mandatory}
                options={mandatoryOptions}
                onChange={(e: DropdownChangeEvent) =>
                  setFormData({ ...formData, mandatory: e.value as boolean })
                }
                placeholder="Select"
                className="w-full"
              />
            </div>
            <div>
              <label className="block font-medium">Effective Date*</label>
              <Calendar
                value={formData.effectiveDate}
                onChange={(e) =>
                  setFormData({ ...formData, effectiveDate: e.value as Date })
                }
                dateFormat="dd/mm/yy"
                placeholder="dd/mm/yyyy"
                className="w-full"
              />
            </div>

            <div >
              <label className="block font-medium">
                Applicable Categories*
              </label>
              <MultiSelect
                value={formData.applicableCategories}
                options={categoriesOptions}
                onChange={(e: MultiSelectChangeEvent) =>
                  setFormData({ ...formData, applicableCategories: e.value })
                }
                display="chip"
                placeholder="Select"
                className="w-full"
              />
            </div>
            
            <div className="md:col-span-2">
              <label className="block font-medium">Enter Description*</label>
              <InputTextarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                placeholder="Enter Description"
                rows={4}
                className="w-80"
              />
            </div>
            <div >
              <Checkbox
                inputId="status"
                checked={formData.status}
                onChange={(e: CheckboxChangeEvent) =>
                  setFormData({ ...formData, status: e.checked ?? false })
                }
              />
              <label htmlFor="status" className="font-medium">
                Active
              </label>
            </div>
          </div>
          <hr />

          <div className="flex justify-end gap-4 pt-6">
            <Button
              label="Clear"
              className="bg-red-300 text-black px-8 py-2"
              onClick={resetForm}
            />
            <Button
              label="Save"
              className="bg-indigo-600 text-white px-8 py-2"
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
        <p>Are you sure you want to save?</p>
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
        <p>Saved successfully!</p>
        <Button label="OK" onClick={() => setShowSuccess(false)} />
      </Dialog>
    </PageLayout>
  );
};

export default AddDocumentRequirement;








