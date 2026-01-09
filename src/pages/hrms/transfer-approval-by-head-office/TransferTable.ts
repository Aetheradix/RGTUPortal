import { printCol } from "@/pages/masters/course-master/sharedColumns";
import type { TableColumn } from "@/ui/shared/Table";

export const transferPrintColumns: TableColumn[] = [
  { field: "applicationNo", header: "Application No.", sortable: true },
  { field: "orderNo", header: "Order No.", sortable: true },
  { field: "employeeName", header: "Employee Name", sortable: true },
  { field: "uniqueId", header: "Unique Id", sortable: true },
  { field: "currentDdo", header: "Current DDO/Shankul", sortable: true },
  { field: "newDdo", header: "New DDO/Shankul", sortable: true },
  printCol,
];

export const mutualApproveColumns: TableColumn[] = [
  { field: "date", header: "Date", sortable: true },
  { field: "uniqueId", header: "Unique ID", sortable: true },
  {
    field: "nameDesignation",
    header: "Name And Designation",
    sortable: true,
  },
  { field: "subject", header: "Subject", sortable: true },
  {
    field: "workingInstitute",
    header: "Working Institute And UDISE Code",
    sortable: true,
  },
  { field: "workingDistrict", header: "Working District", sortable: true },
  {
    field: "newOrganization",
    header: "New Organization And UDICE Code",
    sortable: true,
  },
  {
    field: "districtNewPosting",
    header: "District Of New Posting",
    sortable: true,
  },
  printCol,
];

export const mutualTranasferPrintColumns: TableColumn[] = [
  {
    field: "srNo",
    header: "Sr.No.",
    sortable: true,
    style: { width: "60px" },
  },
  { field: "date", header: "Date", sortable: true },
  { field: "uniqueId", header: "Unique ID", sortable: true },
  {
    field: "nameDesignation",
    header: "Name And Designation",
    sortable: true,
  },
  { field: "subject", header: "Subject", sortable: true },
  {
    field: "workingInstitute",
    header: "Working Institute And UDISE Code",
    sortable: true,
  },
  { field: "workingDistrict", header: "Working District", sortable: true },
  {
    field: "newOrganization",
    header: "New Organization And UDICE Code",
    sortable: true,
  },
  {
    field: "districtNewPosting",
    header: "District Of New Posting",
    sortable: true,
  },
  printCol,
];

export const viewRequestColumns: TableColumn[] = [
  { field: "officeType", header: "Office Type", sortable: true },
  { field: "employeeIdName", header: "Employee-ID/Name", sortable: true },
  { field: "designation", header: "Employee Designation", sortable: true },
  { field: "department", header: "Employee Department", sortable: true },
  { field: "subject", header: "Employee Subject", sortable: true },
  { field: "panel", header: "Panel", sortable: true },
  { field: "postedFrom", header: "Posted From", sortable: true },
  { field: "district", header: "District", sortable: true },
  { field: "block", header: "Block", sortable: true },
  {
    field: "sankulCodeName",
    header: "Sankul Code / Name",
    sortable: true,
    style: { minWidth: "250px" },
  },
];
