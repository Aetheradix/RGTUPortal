/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "primereact/button";

export const getOfficeTypeColumns = (onEdit: (data: any) => void) => [
  { field: "oisType", header: "OIS Type", sortable: true },
  { field: "officeLevel", header: "Office Type Level", sortable: true },
  { field: "officeTypeNameEn", header: "Office Type Name", sortable: true },
  {
    field: "officeTypeNameHi",
    header: "Office Type Name (In Hindi)",
    sortable: true,
  },
  { field: "officeTypeCode", header: "Office Type Code", sortable: true },
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
    body: (rowData: any) => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={() => onEdit(rowData)}
      />
    ),
  },
];

export const getSchoolTypeColumns = (onEdit: (data: any) => void) => [
  {
    field: "schoolTypeNameEn",
    header: "School Type (In English)",
    sortable: true,
  },
  {
    field: "schoolTypeNameHi",
    header: "School Type (In Hindi)",
    sortable: true,
  },
  { field: "schoolTypeCode", header: "School Type Code", sortable: true },
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
    body: (rowData: any) => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={() => onEdit(rowData)}
      />
    ),
  },
];

export const getSchoolManagementGroupColumns = (onDenied: () => void) => [
  {
    field: "groupNameEn",
    header: "School Management Group (In English)",
    sortable: true,
  },
  {
    field: "groupNameHi",
    header: "School Management Group (In Hindi)",
    sortable: true,
  },
  {
    field: "groupCode",
    header: "School Management Group Code",
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

export const getManagementGroupDetailColumns = (onDenied: () => void) => [
  { field: "groupName", header: "School Management Group", sortable: true },
  {
    field: "detailNameEn",
    header: "School Management Group Details (In English)",
    sortable: true,
  },
  {
    field: "detailNameHi",
    header: "School Management Group Details (In हिन्दी)",
    sortable: true,
  },
  { field: "detailCode", header: "Details Code", sortable: true },
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

export const getSchoolBoardColumns = (onDenied: () => void) => [
  { field: "boardNameEn", header: "Board Name (In English)", sortable: true },
  { field: "boardNameHi", header: "Board Name (In Hindi)", sortable: true },
  { field: "boardCode", header: "Board Code", sortable: true },
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

export const getSchoolCategoryColumns = (onDenied: () => void) => [
  { field: "officeType", header: "Office Type", sortable: true },
  {
    field: "categoryNameEn",
    header: "School Category Name (In English)",
    sortable: true,
  },
  {
    field: "categoryNameHi",
    header: "School Category Name (In Hindi)",
    sortable: true,
  },
  { field: "categoryCode", header: "School Category Code", sortable: true },
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

export const getSchoolSubCategoryColumns = (onDenied: () => void) => [
  { field: "schoolCategory", header: "School Category", sortable: true },
  { field: "detailEn", header: "School Sub Category Details", sortable: true },
  {
    field: "detailCode",
    header: "School Sub Category Detail Code",
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

export const getSchoolInchargeTypeColumns = (onDenied: () => void) => [
  {
    field: "inchargeTypeEn",
    header: "School Incharge Type (In English)",
    sortable: true,
  },
  {
    field: "inchargeTypeHi",
    header: "School Incharge Type (In हिन्दी)",
    sortable: true,
  },
  { field: "inchargeCode", header: "Incharge Code", sortable: true },
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

export const getSchoolMediumColumns = (onDenied: () => void) => [
  {
    field: "mediumNameEn",
    header: "School Medium Name (In English)",
    sortable: true,
  },
  {
    field: "mediumNameHi",
    header: "School Medium Name (In हिन्दी)",
    sortable: true,
  },
  { field: "mediumCode", header: "School Medium Code", sortable: true },
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

export const getSpecialSchoolColumns = (onEdit: (data: any) => void) => [
  { field: "vargName", header: "Varg Name", sortable: true },
  { field: "subjectEn", header: "Subject Name (In English)", sortable: true },
  { field: "subjectHi", header: "Subject Name (In Hindi)", sortable: true },
  { field: "subjectCode", header: "Subject Code", sortable: true },
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
    body: (rowData: any) => (
      <Button
        icon="pi pi-pencil"
        text
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={() => onEdit(rowData)}
      />
    ),
  },
];

export const getSpecialSchoolMasterColumns = (onDenied: () => void) => [
  {
    field: "specialSchoolNameEn",
    header: "Special School Name (In English)",
    sortable: true,
  },
  {
    field: "specialSchoolNameHi",
    header: "Special School Name (In Hindi)",
    sortable: true,
  },
  { field: "specialSchoolCode", header: "Special School Code", sortable: true },
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

export const getSchoolClassNameColumns = (onDenied: () => void) => [
  { field: "classNameEn", header: "Class Name (In English)", sortable: true },
  { field: "classNameHi", header: "Class Name (In Hindi)", sortable: true },
  { field: "classCode", header: "Class Code", sortable: true },
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

export const getJSKColumns = (onEdit: (data: any) => void) => [
  { field: "divisionName", header: "Division Name", sortable: true },
  { field: "districtName", header: "District Name", sortable: true },
  { field: "blockName", header: "Block Name", sortable: true },
  {
    field: "jskNameEn",
    header: "Jan Shiksha Kendra Name (In English)",
    sortable: true,
  },
  {
    field: "jskNameHi",
    header: "Jan Shiksha Kendra Name (In हिन्दी)",
    sortable: true,
  },
  { field: "jskCode", header: "Jan Shiksha Kendra Code", sortable: true },
  {
    field: "status",
    header: "Status",
    body: (rowData: any) => (
      <span
        className={`px-2 py-1 rounded text-white font-bold text-xs ${
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
    body: (rowData: any) => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={() => onEdit(rowData)}
      />
    ),
  },
];

export const getClassToSubjectColumns = (onDenied: () => void) => [
  { field: "className", header: "Class Name", sortable: true },
  { field: "subjectName", header: "Subject Name", sortable: true },
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

export const getMappingColumns = (onMapConfirm: (data: any) => void) => [
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
    body: (rowData: any) => (
      <Button
        label="Unmapped"
        text
        className="p-button-outlined p-button-danger p-button-sm text-xs"
        onClick={() => onMapConfirm(rowData)}
        style={{ padding: "2px 8px" }}
      />
    ),
  },
];

export const getDesignationMappingColumns = (onEdit: (data: any) => void) => [
  { field: "id", header: "Sr.No.", style: { width: "70px" } },
  { field: "levelName", header: "Office Type Level Name", sortable: true },
  { field: "designationName", header: "Designation Name", sortable: true },
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
    body: (rowData: any) => (
      <Button
        text
        icon="pi pi-pencil"
        className="p-button-outlined p-button-warning p-button-sm"
        onClick={() => onEdit(rowData)}
      />
    ),
  },
];
