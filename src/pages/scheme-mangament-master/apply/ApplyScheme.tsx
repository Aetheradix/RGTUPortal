/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import Dropdown from "@/ui/shared/Dropdown";
import Input, { DateInput } from "@/ui/shared/Input";
import Table from "@/ui/shared/Table";


export default function ApplyScheme() {
  const [academicYear, setAcademicYear] = useState<any>(null);
  const [scheme, setScheme] = useState<any>(null);
  const [studentName, setStudentName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [dob, setDob] = useState<any>(null);
  const [gender, setGender] = useState<any>(null);
  const [studentClass, setStudentClass] = useState<any>(null);
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const academicYears = [
    { label: "2023-24", value: "2023-24" },
    { label: "2024-25", value: "2024-25" },
  ];

  const schemes = [
    { label: "Merit Scholarship", value: "Merit Scholarship" },
    { label: "Girl Child Education Scheme", value: "Girl Child Education Scheme" },
    { label: "SC/ST Support Scheme", value: "SC/ST Support Scheme" },
  ];

  const genders = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const classes = [
    { label: "Class 9", value: "9" },
    { label: "Class 10", value: "10" },
    { label: "Class 11", value: "11" },
    { label: "Class 12", value: "12" },
  ];

  const tableColumns = [
    { field: "academicYear", header: "Year", sortable: true },
    { field: "scheme", header: "Scheme", sortable: true },
    { field: "studentName", header: "Student Name", sortable: true },
    { field: "fatherName", header: "Father Name", sortable: true },
    { field: "studentClass", header: "Class", sortable: true },
    { field: "mobile", header: "Mobile No", sortable: true },
  ];

  const handleSubmit = () => setSubmitted(true);

  const handleClear = () => {
    setAcademicYear(null);
    setScheme(null);
    setStudentName("");
    setFatherName("");
    setDob(null);
    setGender(null);
    setStudentClass(null);
    setMobile("");
    setSubmitted(false);
  };

  return (
    <Card title="Apply Student Scheme Application">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Dropdown 
          label="Academic Year" 
          required 
          value={academicYear} 
          options={academicYears} 
          onChange={(e) => setAcademicYear(e.value)} 
        />

        <Dropdown 
          label="Scheme" 
          required 
          value={scheme} 
          options={schemes} 
          onChange={(e) => setScheme(e.value)} 
        />

        <Input 
          label="Student Name" 
          required 
          value={studentName} 
          onChange={(e) => setStudentName(e.target.value)} 
        />

        <Input 
          label="Father Name" 
          required 
          value={fatherName} 
          onChange={(e) => setFatherName(e.target.value)} 
        />

        <DateInput 
          label="Date of Birth" 
          required 
          value={dob} 
          onChange={(e) => setDob(e.value)} 
        />

        <Dropdown 
          label="Gender" 
          required 
          value={gender} 
          options={genders} 
          onChange={(e) => setGender(e.value)} 
        />

        <Dropdown 
          label="Class" 
          required 
          value={studentClass} 
          options={classes} 
          onChange={(e) => setStudentClass(e.value)} 
        />

        <Input 
          label="Mobile No" 
          required 
          value={mobile} 
          onChange={(e) => setMobile(e.target.value)} 
        />

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Documents <span className="text-red-500">*</span>
          </label>
          <FileUpload mode="basic" name="docs" accept=".pdf,.jpg,.png" maxFileSize={500000} className="w-full" />
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        <Button label="Submit Application" icon="pi pi-check" onClick={handleSubmit} />
        <Button label="Clear" icon="pi pi-times" severity="secondary" onClick={handleClear} />
      </div>

      {submitted && (
        <div className="mt-6">
          <Table 
            title="Submitted Application Preview"
            columns={tableColumns}
            data={[{ academicYear, scheme, studentName, fatherName, studentClass, mobile }]}
            showPagination={false} 
            className="p-datatable-borderless shadow-sm"
          />
        </div>
      )}
    </Card>
  );
}