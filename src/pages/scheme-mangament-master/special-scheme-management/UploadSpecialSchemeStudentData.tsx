/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { FileUpload, type FileUploadSelectEvent } from "primereact/fileupload";
import { Dropdown } from "@/ui/shared"; 

export default function UploadSpecialSchemeStudentData() {
  const [year, setYear] = useState<any>(null);
  const [scheme, setScheme] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);

  const academicYears = [
    { label: "2024-25", value: "2024-25" },
    { label: "2025-26", value: "2025-26" },
  ];

  const schemes = [
    { label: "Laptop Distribution Scheme", value: "Laptop" },
    { label: "Free Bicycle Scheme", value: "Bicycle" },
  ];

  const onSelectFile = (e: FileUploadSelectEvent) => {
    if (e.files && e.files.length > 0) {
      setFile(e.files[0]);
    }
  };

  const handleClear = () => {
    setYear(null);
    setScheme(null);
    setFile(null);
  };

  const handleUpload = () => {
    if (!year || !scheme || !file) {
      return; 
    }
    alert("Excel file uploaded successfully!");
  };

  return (
    <Card title="Upload Special Scheme Student Data / विशेष योजना छात्र डेटा अपलोड">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Dropdown
          label="Academic Year"
          required
          value={year}
          options={academicYears}
          onChange={(e) => setYear(e.value)}
          placeholder="Select Year"
        />

        <Dropdown
          label="Special Scheme"
          required
          value={scheme}
          options={schemes}
          onChange={(e) => setScheme(e.value)}
          placeholder="Select Scheme"
        />

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Upload Excel File (MPBSE) *</label>
          <FileUpload
            mode="basic"
            name="excel"
            accept=".xls,.xlsx"
            maxFileSize={1000000}
            chooseLabel={file ? file.name : "Choose Excel File"}
            customUpload
            auto={false}
            onSelect={onSelectFile}
            className="w-full"
          />
        </div>
      </div>
      <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6 rounded-r-lg">
        <h4 className="text-amber-800 font-bold mb-2 flex items-center gap-2">
          <i className="pi pi-exclamation-circle"></i> Important Instructions
        </h4>
        <ul className="text-sm text-amber-900 list-disc ml-5 space-y-1">
          <li>Ensure the Excel sheet matches the <strong>Sample File</strong> format exactly.</li>
          <li>Supported formats: <strong>.xls</strong> or <strong>.xlsx</strong> only.</li>
          <li>Maximum file size allowed is <strong>1MB</strong>.</li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-3 items-center">
        <Button 
          label="Upload Data" 
          icon="pi pi-upload" 
          onClick={handleUpload} 
          className="bg-blue-600 px-6"
          disabled={!file}
        />
        <Button 
          label="Clear" 
          icon="pi pi-refresh" 
          severity="secondary" 
          onClick={handleClear} 
          outlined
          className="px-6"
        />
        <Button 
          label="Download Sample Format" 
          icon="pi pi-download" 
          severity="info" 
          text 
          className="ml-auto"
        />
      </div>

      <div className="mt-6 pt-3 border-t text-gray-500 text-xs italic">
        Note: All fields marked with an asterisk (*) are mandatory for processing student records.
      </div>
    </Card>
  );
}