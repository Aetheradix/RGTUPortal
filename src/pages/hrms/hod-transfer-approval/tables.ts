import {
  actionsCol,
  printCol,
} from "@/pages/masters/course-master/sharedColumns";
import type { TableColumn } from "@/ui/shared/Table";

export const mutualTransferData = [
  {
    srNo: 1,
    requestDate: "02/05/2021",
    // First Employee
    fName: "Raju (FF2318)",
    fDesignation: "Assistant Proffessor", // Matched spelling in image
    fPanel: "Director of Human Resources",
    fDistrict: "Bhopal (462025)",
    fBlock: "Berasia (209)",
    fOffice: "ER54333",
    fNewOffice: "LP00121",
    // Second Employee
    sName: "Sita (FF2318)",
    sDesignation: "Lecturer",
    sPanel: "Director of Human Resources",
    sDistrict: "Raisen (1730)",
    sBlock: "Sanchi (300)",
    sOffice: "EE00333",
    sNewOffice: "FD99144",
  },
];

// Added explicit 'header' strings to each column to resolve the error
export const mutualTableColumns: TableColumn[] = [
  { field: "requestDate", header: "Transfer Request Date", sortable: true },
  // First Employee
  { field: "fName", header: "Name(Unique ID)", sortable: true },
  { field: "fDesignation", header: "Designation", sortable: true },
  { field: "fPanel", header: "Panel Name", sortable: true },
  { field: "fDistrict", header: "District (Code)", sortable: true },
  { field: "fBlock", header: "Block (Code)", sortable: true },
  { field: "fOffice", header: "Office (Code)", sortable: true },
  { field: "fNewOffice", header: "New Office (Code)", sortable: true },
  // Second Employee
  { field: "sName", header: "Name(Unique ID)", sortable: true },
  { field: "sDesignation", header: "Designation", sortable: true },
  { field: "sPanel", header: "Panel Name", sortable: true },
  { field: "sDistrict", header: "District (Code)", sortable: true },
  { field: "sBlock", header: "Block (Code)", sortable: true },
  { field: "sOffice", header: "Office (Code)", sortable: true },
  { field: "sNewOffice", header: "New Office (Code)", sortable: true },
  printCol,
  actionsCol,
];

// Add to administrative.data.ts

export const mutualPrintOrderData = [
  {
    orderNumber: "ER54333",
    firstEmployee: "Sita Dubey (Assistant Professor)",
    secondEmployee: "Raj Sharma (Associate Professor)",
    firstEmployeeCode: "EE00333",
    secondEmployeeCode: "FD99144",
  },
];

export const mutualPrintOrderColumns = [
  { field: "orderNumber", header: "Order Number", sortable: true },
  {
    field: "firstEmployee",
    header: "First Employee Name(Designation)",
    sortable: true,
  },
  {
    field: "secondEmployee",
    header: "Second Employee Name(Designation)",
    sortable: true,
  },
  { field: "firstEmployeeCode", header: "First Employee Code", sortable: true },
  {
    field: "secondEmployeeCode",
    header: "Second Employee Code",
    sortable: true,
  },
];
