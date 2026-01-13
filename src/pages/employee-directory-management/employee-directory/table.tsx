/* eslint-disable @typescript-eslint/no-explicit-any */
import { actionsCol } from "@/pages/masters/course-master/sharedColumns";
import { Button } from "primereact/button";

export const getVerificationColumns = (
  onReject: (data: any) => void,
  onApprove: (data: any) => void
) => [
  { field: "employeeName", header: "Employee Name", sortable: true },
  { field: "designation", header: "Designation", sortable: true },
  { field: "actingDesignation", header: "Acting Designation" },
  { field: "panelSubject", header: "Panel/Subject" },
  { field: "postingOffice", header: "Posting Office" },
  { field: "status", header: "Status" },
  {
    field: "",
    header: "Actions",
    style: { minWidth: "300px" },
    body: (rowData: any) => (
      <div className="flex gap-2 items-center">
        <Button
          tooltip="Reject"
          icon="pi pi-times-circle"
          className="p-button-sm bg-red-500 border-none h-8 w-8"
          onClick={() => onReject(rowData)}
        />
        <Button
          tooltip="Edit"
          icon="pi pi-pencil"
          className="p-button-sm bg-teal-400 border-none h-8 w-8"
        />
        <Button
          tooltip="View"
          icon="pi pi-eye"
          className="p-button-sm bg-teal-400 border-none h-8 w-8"
        />
        <Button
          tooltip="Print"
          icon="pi pi-print"
          className="p-button-sm bg-teal-400 border-none h-8 w-8"
        />
        <Button
          label="Approve"
          icon="pi pi-check"
          className="p-button-sm p-button-success border-none px-3 text-xs h-8"
          onClick={() => onApprove(rowData)}
        />
      </div>
    ),
  },
];

export const getHoVerificationColumns = (
  onResetStatus: (data: any) => void
) => [
  {
    field: "employeeName",
    header: "Employee Name",
    sortable: true,
  },
  { field: "designation", header: "Designation ", sortable: true },
  {
    field: "actingDesignation",
    header: "Acting Designation",
  },
  { field: "panelSubject", header: "Panel/Subject " },
  { field: "postingOffice", header: "Posting Office " },
  { field: "status", header: "Verification Status " },
  {
    field: "",
    header: "Action",
    style: { minWidth: "250px" },
    body: (rowData: any) => (
      <div className="flex gap-1 items-center">
        <Button
          tooltip="Edit"
          icon="pi pi-pencil"
          className="p-button-sm bg-teal-400 border-none h-8 w-8"
        />
        <Button
          tooltip="View"
          icon="pi pi-eye"
          className="p-button-sm bg-teal-400 border-none h-8 w-8"
        />
        <Button
          tooltip="Print"
          icon="pi pi-print"
          className="p-button-sm bg-teal-400 border-none h-8 w-8"
        />
        <Button
          label="Status"
          icon="pi pi-history"
          className="p-button-sm p-button-danger border-none px-3 text-xs h-8"
          onClick={() => onResetStatus(rowData)}
        />
      </div>
    ),
  },
];

export const getPdfVerificationColumns = (onDownload: (data: any) => void) => [
  { field: "blockName", header: "Block Name", sortable: true },
  { field: "employeeName", header: "Employee Name (Code) ", sortable: true },
  { field: "empUniqueId", header: "EmpUniqueId", sortable: true },
  { field: "postingOfficeCode", header: "PostingOfficeCode ", sortable: true },
  { field: "designationName", header: "DesignationNameEng ", sortable: true },
  {
    header: "View More ",
    field: "",
    style: { width: "120px" },
    body: (rowData: any) => (
      <Button
        icon="pi pi-download"
        className="p-button-sm border-none "
        onClick={() => onDownload(rowData)}
      />
    ),
  },
];

export const dataChangeColumns = [
  { field: "employeeName", header: "Employee Name (Code) ", sortable: true },
  {
    field: "postingOfficeName",
    header: "Posting office Name (Code)",
    sortable: true,
  },
  { field: "status", header: "Request Current Status ", sortable: true },
  { field: "details", header: "View Employee Details", sortable: true },
];

export const OfficialUpdateColumns = [
  { field: "srNo", header: "Sr.No.", style: { width: "60px" } },
  { field: "employeeName", header: "Employee Name (Code)", sortable: true },
  { field: "designation", header: "Designation Name", sortable: true },
  { field: "postingOffice", header: "Posting Office", sortable: true },
  { field: "emailId", header: "Email Id", sortable: true },
  { field: "mobileNo", header: "Mobile No", sortable: true },
  { field: "panelName", header: "Panel Name", sortable: true },
  actionsCol,
];
