export const statisticReportColumns = [
  { field: "division", header: "Division", sortable: true },
  {
    field: "district",
    header: "District",
    sortable: true,
  },
  {
    field: "totalRegistered",
    header: "Total Registered Employee",
    sortable: true,
  },
  { field: "profileChecked", header: "Profile Checked", sortable: true },
  {
    field: "selfVerified",
    header: "Self Verified By Employee",
    sortable: true,
  },
  { field: "changeRequest", header: "Change Request", sortable: true },
  { field: "approved", header: "Approved Request", sortable: true },
  { field: "rejected", header: "Reject Request", sortable: true },
  {
    field: "pending",
    header: "Pending Request",
  },
  {
    field: "totalVerification",
    header: "Total Verification (%)",
    sortable: true,
  },
];

export const verificationStatisticColumns = [
  { field: "division", header: "Division", sortable: true },
  {
    field: "district",
    header: "District",
    sortable: true,
  },
  {
    field: "totalRegistered",
    header: "Total Registered Employee (In No's)",
    sortable: true,
  },
  {
    field: "verified",
    header: "Total Verified Employee (In No's)",
    sortable: true,
  },
  {
    field: "pending",
    header: "Total Pending Employee (In No's)",
    sortable: true,
  },
  {
    field: "rejected",
    header: "Total Rejected Employee (In No's)",
    sortable: true,
  },
];

export const employeeReportColumns = [
  { field: "nameCode", header: "Employee Name (Code)", sortable: true },
  { field: "gender", header: "Gender ", sortable: true },
  { field: "panel", header: "Panel ", sortable: true },
  { field: "designation", header: "Designation ", sortable: true },
  { field: "postingDate", header: "Posting Date", sortable: true },
  { field: "officeCode", header: "Posting Office/Code", sortable: true },
  { field: "ddoCode", header: "DDO Name /Code", sortable: true },
];

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "primereact/button";

export const getVerificationDetailColumns = (
  onView: (data: any) => void,
  onPrint: (data: any) => void
) => [
  { field: "srNo", header: "Sr.No.", style: { width: "60px" } },
  { field: "district", header: "District", sortable: true },
  { field: "nameCode", header: "Employee Name", sortable: true },
  { field: "designation", header: "Designation", sortable: true },
  { field: "oisCode", header: "OIS UDISE Code", sortable: true },
  {
    header: "View More",
    field: "",
    style: { width: "100px" },
    body: (rowData: any) => (
      <Button
        icon="pi pi-eye"
        className="p-button p-button-primary h-8 w-10"
        onClick={() => onView(rowData)}
      />
    ),
  },
  {
    field: "",
    header: "Employee Id Card",
    style: { width: "120px" },
    body: (rowData: any) => (
      <Button
        label="Print"
        icon="pi pi-print"
        className="p-button p-button-primary h-8 px-3 text-xs"
        onClick={() => onPrint(rowData)}
      />
    ),
  },
  { field: "status", header: "Status", sortable: true },
];

export const employeeCustomizedColumns = (onView: (data: any) => void) => [
  {
    field: "nameCode",
    header: "Employee Name (Code)",
    sortable: true,
  },
  { field: "gender", header: "Gender", sortable: true },
  {
    field: "officeCode",
    header: "Posting Office/Code ",
    sortable: true,
  },
  {
    field: "postingDate",
    header: "Posting Date ",
    sortable: true,
  },
  {
    field: "ddoCode",
    header: "DDO Name /Code ",
    sortable: true,
  },
  { field: "designation", header: "Designation", sortable: true },
  { field: "panel", header: "Panel ", sortable: true },
  {
    field: "status",
    header: "Employee Status ",
    sortable: true,
  },
  {
    header: "View More ",
    field: "",
    style: { width: "100px" },
    body: (rowData: any) => (
      <Button
        icon="pi pi-eye"
        className="p-button p-button-primary h-8 w-10"
        onClick={() => onView(rowData)}
      />
    ),
  },
];
