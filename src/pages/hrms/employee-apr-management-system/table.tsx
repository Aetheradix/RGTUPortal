/* eslint-disable @typescript-eslint/no-explicit-any */
import { actionsCol } from "@/pages/masters/course-master/sharedColumns";

export const aprColumns = [
  { field: "srNo", header: "Sr.No." },
  { field: "academicYear", header: "Academic Year" },
  { field: "employeeName", header: "Employee Name" },
  { field: "designation", header: "Designation" },
  { field: "currentSalary", header: "Current Salary" },
  { field: "incrementDate", header: "Increment Date" },
  { field: "location", header: "Location" },
  { field: "propertyDetail", header: "Property Detail" },
  { field: "totalAreaSqft", header: "Total Area (Sqft)" },
  { field: "currentValue", header: "Current Value" },
  { field: "propertyOwner", header: "Property Owner" },
  { field: "propertySource", header: "Property Source" },
  { field: "purchaseDate", header: "Purchase Date" },
  { field: "sellerName", header: "Seller Name" },
  { field: "propertyAnnualIncome", header: "Property Annual Income" },
  actionsCol,
];
// table.
import type { ReactNode } from "react";

export interface TableColumn {
  field: string;
  header: string;
  sortable?: boolean;
  body?: (rowData: any) => ReactNode;
  style?: React.CSSProperties;
}

export const aprDistrictMasterColumns: TableColumn[] = [
  { field: "districtName", header: "District Name", sortable: true },
  { field: "totalEmployees", header: "Total Employees" },
  { field: "filedAPR", header: "APR Filed" },
  { field: "pendingAPR", header: "Pending APR" },
  { field: "nilAPR", header: "Nil APR Filed" },
  { field: "compliancePercent", header: "Compliance %" },
];

export const aprDistrictDetailColumns: TableColumn[] = [
  { field: "srNo", header: "Sr.No" },
  { field: "employeeCode", header: "Employee Code" },
  { field: "employeeName", header: "Employee Name" },
  { field: "designation", header: "Designation" },
  { field: "propertyType", header: "Property Type" },
  { field: "status", header: "Status" },
  { field: "submissionDate", header: "Submission Date" },
];
