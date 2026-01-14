/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "primereact/button";

export const getClassMasterColumns = (onDenied: () => void) => [
  { field: "classNameEn", header: "Class Name (In English)", sortable: true },
  { field: "classNameHi", header: "Class Name (In Hindi)", sortable: true },
  { field: "classCode", header: "Class Code No.", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getDesignationTypeColumns = (onDenied: () => void) => [
  {
    field: "typeNameEn",
    header: "Designation Type Name (In English)",
    sortable: true,
  },
  {
    field: "typeNameHi",
    header: "Designation Type Name (In Hindi)",
    sortable: true,
  },
  { field: "typeCode", header: "Designation Type Code No.", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getDesignationMasterColumns = (onDenied: () => void) => [
  { field: "class", header: "Class", sortable: true },
  { field: "post", header: "Post", sortable: true },
  { field: "type", header: "Designation Type", sortable: true },
  { field: "nameEn", header: "Designation Name (In English)", sortable: true },
  { field: "seqNo", header: "Sequence No.", sortable: true },
  { field: "code", header: "Designation Code No.", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getSectionMasterColumns = (onDenied: () => void) => [
  {
    field: "sectionNameEn",
    header: "Section Name (In English)",
    sortable: true,
  },
  { field: "sectionNameHi", header: "Section Name (In Hindi)", sortable: true },
  { field: "sectionCode", header: "Section Code No.", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getPayCommissionColumns = (onDenied: () => void) => [
  { field: "payType", header: "Pay Commission Type", sortable: true },
  { field: "commission", header: "Pay Commission", sortable: true },
  { field: "mappedDA", header: "Mapped With DA", sortable: true },
  { field: "effectiveDate", header: "Effective Date", sortable: true },
  { field: "seqNo", header: "Sequence No.", sortable: true },
  { field: "code", header: "Pay Commission Code No.", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getPayScaleColumns = (onDenied: () => void) => [
  { field: "payCommission", header: "Pay Commission", sortable: true },
  { field: "payScale", header: "Pay Scale", sortable: true },
  { field: "effectiveDate", header: "Effective Date", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        icon="pi pi-pencil"
        text
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getGradePayColumns = (onDenied: () => void) => [
  { field: "payCommission", header: "Pay Commission", sortable: true },
  { field: "payScale", header: "Pay Scale", sortable: true },
  { field: "gradePay", header: "Grade Pay", sortable: true },
  { field: "effectiveDate", header: "Effective Date", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status || "N/A"}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getLevelMasterColumns = (onDenied: () => void) => [
  { field: "commission", header: "Pay Commission", sortable: true },
  { field: "payScale", header: "Pay Scale", sortable: true },
  { field: "gradeLevel", header: "Grade Level", sortable: true },
  { field: "effectiveDate", header: "Effective Date", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getLevelBasicPayColumns = (onDenied: () => void) => [
  { field: "levelName", header: "Level Name", sortable: true },
  { field: "basicPay", header: "Basic Pay", sortable: true },
  { field: "effectiveDate", header: "Effective Date", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getAppointmentDeptColumns = (onDenied: () => void) => [
  {
    field: "departmentNameEn",
    header: "Department Name (In English)",
    sortable: true,
  },
  {
    field: "departmentNameHi",
    header: "Department Name (In Hindi)",
    sortable: true,
  },
  { field: "departmentCode", header: "Department Code No.", sortable: true },
  { field: "effectiveDate", header: "Effective Date", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        icon="pi pi-pencil"
        text
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getCasteMasterColumns = (onDenied: () => void) => [
  { field: "casteNameEn", header: "Caste Name (In English)", sortable: true },
  { field: "casteNameHi", header: "Caste Name (In Hindi)", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getBloodGroupColumns = (onDenied: () => void) => [
  { field: "bloodGroupName", header: "Blood Group Name", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getQualificationColumns = (onDenied: () => void) => [
  {
    field: "qualNameEn",
    header: "Qualification Name (In English)",
    sortable: true,
  },
  {
    field: "qualNameHi",
    header: "Qualification Name (In Hindi)",
    sortable: true,
  },
  { field: "subject", header: "Subject Name", sortable: true },
  { field: "code", header: "Qualification Code No.", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Actions",
    field: "",
    body: () => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getSubCasteColumns = (onDenied: () => void) => [
  { field: "casteName", header: "Caste Name", sortable: true },
  {
    field: "subCasteNameEn",
    header: "Sub Caste Name (In English)",
    sortable: true,
  },
  {
    field: "subCasteNameHi",
    header: "Sub Caste Name (In Hindi)",
    sortable: true,
  },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getPostMasterColumns = (onDenied: () => void) => [
  { field: "postNameEn", header: "Post Name (In English)", sortable: true },
  { field: "postNameHi", header: "Post Name (In Hindi)", sortable: true },
  { field: "postCode", header: "Post Code No.", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Actions",
    field: "",
    body: () => (
      <Button
        icon="pi pi-pencil"
        text
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getSubCategoryColumns = (onDenied: () => void) => [
  {
    field: "subCategoryName",
    header: "School Sub Category Detail Code Name",
    sortable: true,
  },
  { field: "className", header: "School Class Name", sortable: true },
  { field: "classCode", header: "School Class Code", sortable: true },
  {
    header: "Actions",
    field: "",
    body: () => (
      <Button
        label="Unmaped"
        className="p-button-outlined p-button-warning p-button-sm text-xs font-bold"
        onClick={onDenied}
        style={{ padding: "2px 8px" }}
      />
    ),
  },
];

export const getHandicappedTypeColumns = (onDenied: () => void) => [
  {
    field: "typeNameEn",
    header: "Handicapped Type Name (In English)",
    sortable: true,
  },
  {
    field: "typeNameHi",
    header: "Handicapped Type Name (In Hindi)",
    sortable: true,
  },
  { field: "type", header: "Handicapped Type", sortable: true },
  { field: "code", header: "Handicapped Code", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Actions",
    field: "",
    body: () => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];

export const getCriticalIllnessColumns = (onDenied: () => void) => [
  {
    field: "nameEn",
    header: "Critical Illness Type (In English)",
    sortable: true,
  },
  {
    field: "nameHi",
    header: "Critical Illness Type (In Hindi)",
    sortable: true,
  },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-4 py-1 rounded text-white font-bold text-xs ${
          rowData.status === "Yes" ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {rowData.status}
      </span>
    ),
  },
  {
    header: "Action",
    field: "",
    body: () => (
      <Button
        icon="pi pi-pencil"
        text
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={onDenied}
      />
    ),
  },
];
