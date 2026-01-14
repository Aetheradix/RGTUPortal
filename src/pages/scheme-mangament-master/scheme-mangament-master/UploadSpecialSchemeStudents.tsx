/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { FileUpload, type FileUploadSelectEvent } from "primereact/fileupload";
import { Dropdown } from "@/ui/shared"; 

export default function UploadSpecialSchemeStudents() {
  const [year, setYear] = useState<any>(null);
  const [scheme, setScheme] = useState<any>(null);
  const [file, setFile] = useState<File | null>(null);

  const academicYearOptions = [
    { label: "2023-2024", value: "2023-24" },
    { label: "2024-2025", value: "2024-25" },
    { label: "2025-2026", value: "2025-26" }
  ];

  const schemeOptions = [
    { label: "Free Cycle Distribution", value: "Cycle" },
    { label: "Laptop Distribution Scheme", value: "Laptop" },
    { label: "Scholarship for SC/ST", value: "Scholarship" }
  ];

  const onFileSelect = (e: FileUploadSelectEvent) => {
    const selectedFile = e.files[0];
    const ext = selectedFile.name.split(".").pop()?.toLowerCase();

    if (ext !== "xls" && ext !== "xlsx") {
   
      alert("Only .xls or .xlsx files are allowed");
      return;
    }
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!year || !scheme || !file) {
      return; 
    }
    alert("File uploaded successfully!");
  };

  const handleClear = () => {
    setYear(null);
    setScheme(null);
    setFile(null);
  };

  return (
    <Card title="Upload Special Scheme Students / विशेष योजना छात्र डेटा अपलोड">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Dropdown
          label="Academic Year"
          required
          value={year}
          options={academicYearOptions}
          onChange={(e) => setYear(e.value)}
          placeholder="Select Year"
        />

        <Dropdown
          label="Special Scheme"
          required
          value={scheme}
          options={schemeOptions}
          onChange={(e) => setScheme(e.value)}
          placeholder="Select Scheme"
        />

        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold">Upload Excel File (MPBSE) *</label>
          <FileUpload
            mode="basic"
            name="demo[]"
            chooseLabel={file ? file.name : "Choose Excel File"}
            accept=".xls,.xlsx"
            maxFileSize={10000000}
            auto={false}
            customUpload
            onSelect={onFileSelect}
            className="w-full"
          />
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded-r-lg">
        <h4 className="text-blue-800 font-bold mb-2 flex items-center gap-2">
          <i className="pi pi-info-circle"></i> Instructions
        </h4>
        <ul className="text-sm text-blue-900 list-disc ml-5 space-y-1">
          <li>Please refer to the <strong>Sample File</strong> for the correct column format.</li>
          <li>Supported file formats: <code>.xls</code>, <code>.xlsx</code> (Excel only).</li>
          <li>Ensure all student roll numbers are unique to avoid upload errors.</li>
        </ul>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
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

      <div className="text-gray-500 text-xs italic border-t pt-3">
        Note: Fields marked with an asterisk (*) are mandatory for processing.
      </div>
    </Card>
  );
}