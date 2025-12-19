import React, { useState } from "react";
import PageLayout from "../../../components/PageLayout";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { MultiSelect } from "primereact/multiselect";
import { Checkbox } from "primereact/checkbox";

const allowedFormats = [
  { label: "PDF", value: "pdf" },
  { label: "JPG", value: "jpg" },
  { label: "PNG", value: "png" },
  { label: "DOCX", value: "docx" },
];

const mandatoryOptions = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];

const applicableCategories = [
  { label: "Student", value: "student" },
  { label: "Parent", value: "parent" },
  { label: "Guardian", value: "guardian" },
];

const AddDocumentRequirement: React.FC = () => {
  const [docName, setDocName] = useState("");
  const [description, setDescription] = useState("");
  const [fileFormat, setFileFormat] = useState<unknown>(null);
  const [maxSize, setMaxSize] = useState("");
  const [mandatory, setMandatory] = useState<unknown>(null);
  const [effectiveDate, setEffectiveDate] = useState<Date | null>(null);
  const [categories, setCategories] = useState<unknown[]>([]);
  const [status, setStatus] = useState(false);

  const onSave = () => {
    const payload = {
      docName,
      description,
      fileFormat,
      maxSize,
      mandatory,
      effectiveDate,
      categories,
      status,
    };
    console.log("SAVE PAYLOAD:", payload);
  };

  const onClear = () => {
    setDocName("");
    setDescription("");
    setFileFormat(null);
    setMaxSize("");
    setMandatory(null);
    setEffectiveDate(null);
    setCategories([]);
    setStatus(false);
  };

  const selectStyle =
    "w-full p-inputtext p-component border border-gray-300 rounded-md";

  return (
    <PageLayout title="Add Configure Document Requirement">
      <div className="bg-white p-6 rounded shadow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <label className="block font-medium">Document Name*</label>
            <InputText
              value={docName}
              onChange={(e) => setDocName(e.target.value)}
              placeholder="Enter Document Name"
              className="w-full"
            />
          </div>

          <div>
            <label className="block font-medium">Enter Description*</label>
            <InputText
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description"
              className="w-full"
            />
          </div>

          <div>
            <label className="block font-medium">
              Select Allowed File Formats*
            </label>
            <Dropdown
              value={fileFormat}
              options={allowedFormats}
              onChange={(e) => setFileFormat(e.value)}
              placeholder="Select"
              className={selectStyle}
            />
          </div>

          <div>
            <label className="block font-medium">
              Maximum File Size (in MB)*
            </label>
            <InputText
              value={maxSize}
              onChange={(e) => setMaxSize(e.target.value)}
              placeholder="Enter Maximum File Size(in MB)"
              className="w-full"
            />
          </div>

          <div>
            <label className="block font-medium">Select Mandatory*</label>
            <Dropdown
              value={mandatory}
              options={mandatoryOptions}
              onChange={(e) => setMandatory(e.value)}
              placeholder="Select"
              className={selectStyle}
            />
          </div>
          <div>
            <label className="block font-medium">Effective Date*</label>
            <Calendar
              value={effectiveDate}
              onChange={(e) => setEffectiveDate(e.value as Date)}
              dateFormat="dd/mm/yy"
              placeholder="dd/mm/yyyy"
              className={selectStyle}
              showIcon
            />
          </div>

          <div>
            <label className="block font-medium">
              Select Applicable Categories*
            </label>
            <MultiSelect
              value={categories}
              options={applicableCategories}
              onChange={(e) => setCategories(e.value)}
              placeholder="Select"
              display="chip"
              className={selectStyle}
            />
          </div>

          <div className="flex items-center">
            <Checkbox
              inputId="stat"
              checked={status}
              onChange={(e) => setStatus(e.checked ?? false)}
            />
            <label htmlFor="stat" className="ml-2 font-semibold">
              Active
            </label>
          </div>
        </div>

        <div className="flex justify-center gap-4 pt-6">
          <Button
            label="Save"
            className="bg-indigo-600 text-white px-8 py-2"
            onClick={onSave}
          />
          <Button
            label="Clear"
            className="bg-red-300 text-black px-8 py-2"
            onClick={onClear}
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default AddDocumentRequirement;
