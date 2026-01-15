/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button } from "primereact/button";

export const getPrintTCColumns = (onPrint: (rowData: any) => void) => [
  { field: "studentName", header: "Student Name", sortable: true },
  { field: "fatherName", header: "Father Name", sortable: true },
  { field: "dob", header: "Date Of Birth", sortable: true },
  { field: "percentage", header: "Percentage %", sortable: true },
  { field: "resultStatus", header: "Result Status", sortable: true },
  {
    field: "college",
    header: "College",
    body: (rowData: any) => (
      <Button
        icon="pi pi-print"
        className="p-button-sm"
        style={{
          backgroundColor: "#6366F1",
          border: "none",
          borderRadius: "4px",
        }}
        onClick={() => onPrint(rowData)}
      />
    ),
  },
];

export const generateTCColumns = [
  { field: "name", header: "Name", sortable: true },
  { field: "fatherName", header: "Father Name", sortable: true },
  { field: "motherName", header: "Mother Name", sortable: true },
  { field: "dob", header: "Date Of Birth", sortable: true },
  { field: "gender", header: "Gender", sortable: true },
  { field: "category", header: "Category", sortable: true },
];

import { Checkbox } from "primereact/checkbox";
import { RadioButton } from "primereact/radiobutton";
import { InputText } from "primereact/inputtext";

export const getPromotionColumns = (onDenied: () => void) => [
  { field: "enrollment", header: "Enrollment No", sortable: true },
  { field: "name", header: "Student Name", sortable: true },
  { field: "father", header: "Father Name" },
  { field: "dob", header: "Date of Birth" },
  {
    field: "percentage",
    header: "Percentage %",
    body: (rd: any) => `${rd.percentage}%`,
  },
  { field: "result", header: "Result Status" },
  { field: "college", header: "College" },
  {
    header: "Status",
    field: "",
    body: () => <Checkbox checked={true} disabled />,
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <div className="flex gap-2 justify-center">
        <Button
          icon="pi pi-pencil"
          className="p-button-rounded p-button-info p-button-text bg-blue-50"
          onClick={onDenied}
          size="small"
        />
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger p-button-text bg-red-50"
          onClick={onDenied}
          size="small"
        />
      </div>
    ),
  },
];

export const getAddPromotionColumns = () => [
  { field: "enrollment", header: "Enrollment No" },
  { field: "name", header: "Student Name" },
  {
    header: "Percentage %",
    field: "",
    body: (rd: any) => (
      <InputText
        defaultValue={rd.percentage}
        className="p-inputtext-sm w-full"
      />
    ),
  },
  {
    header: "Result Status",
    field: "",
    body: (rd: any) => (
      <div className="flex gap-2">
        <RadioButton value="Pass" checked={rd.result === "Pass"} />
        <label className="text-xs">Pass</label>
        <RadioButton value="Fail" checked={rd.result === "Fail"} />
        <label className="text-xs">Fail</label>
      </div>
    ),
  },
  {
    header: "College",
    field: "",
    body: (rd: any) => (
      <div className="flex gap-2">
        <RadioButton checked={rd.college === "Same"} />
        <label className="text-xs">Same</label>
        <RadioButton checked={rd.college === "Other"} />
        <label className="text-xs">Other</label>
      </div>
    ),
  },
  { header: "Status", field: "", body: () => <Checkbox checked={true} /> },
];

export const migrationColumns = [
  { field: "enrollmentNo", header: "Enrollment No.", sortable: true },
  { field: "studentName", header: "Student Name", sortable: true },
  { field: "fatherName", header: "Father Name", sortable: true },
  { field: "dob", header: "Date of Birth", sortable: true },
  { field: "percentage", header: "Percentage", sortable: true },
  { field: "resultStatus", header: "Result Status", sortable: true },
  { field: "courseName", header: "Course Name", sortable: true },
  { field: "collegeName", header: "College Name", sortable: true },
];

export const getPrintMigrationColumns = (onPrint: (rowData: any) => void) => [
  { field: "enrollmentNo", header: "Enrollment No.", sortable: true },
  { field: "studentName", header: "Student Name", sortable: true },
  { field: "fatherName", header: "Father Name" },
  { field: "dob", header: "Date of Birth" },
  { field: "percentage", header: "Percentage %" },
  { field: "resultStatus", header: "Result Status" },
  { field: "collegeName", header: "College Name" },
  {
    header: "Action",
    field: "",
    body: (rowData: any) => (
      <Button
        icon="pi pi-print"
        className="p-button-sm p-button-rounded bg-indigo-500 border-none"
        onClick={() => onPrint(rowData)}
      />
    ),
  },
];
