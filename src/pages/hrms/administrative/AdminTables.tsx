/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  actionsCol,
  statusCol,
} from "@/pages/masters/course-master/sharedColumns";
import type { TableColumn } from "@/ui/shared/Table";

export const printColumns: TableColumn[] = [
  { field: "orderNumber", header: "Order Number", sortable: true },
  { field: "employeeName", header: "Employee Name(Code)", sortable: true },
  {
    field: "transferDirectedBy",
    header: "Transfer Directed By",
    sortable: true,
  },
  { field: "oldDistrict", header: "Old District(Code)", sortable: true },
  { field: "oldBlock", header: "Old Block(Code)", sortable: true },
  { field: "oldOffice", header: "Old Office(Code)", sortable: true },
  { field: "designation", header: "Designation", sortable: true },
];

// 3. Export the second column set
export const transferOrderColumns: TableColumn[] = [
  { field: "orderNumber", header: "Order Number", sortable: true },
  { field: "employeeName", header: "Employee Name(Code)", sortable: true },
  {
    field: "transferDirectedBy",
    header: "Transfer Directed By",
    sortable: true,
  },
  { field: "oldDistrict", header: "Old District(Code)", sortable: true },
  { field: "oldBlock", header: "Old Block(Code)", sortable: true },
  { field: "oldOffice", header: "Old Office(Code)", sortable: true },
  { field: "newOffice", header: "New Office(Code)", sortable: true },
  statusCol,
  actionsCol,
];

// Add to AdminTables.ts

export const vacancyColumns = [
  { field: "postCode", header: "Post Code", sortable: true },
  { field: "schoolName", header: "School/Office Name", sortable: true },
  { field: "postType", header: "Post Type" },
  { field: "subject", header: "Subject" },
  { field: "totalSanctioned", header: "Sanctioned" },
  { field: "occupied", header: "Occupied" },
  {
    field: "vacancies",
    header: "Vacancies",
    body: (rowData: any) => (
      <span
        className={`font-bold ${
          rowData.vacancies > 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {rowData.vacancies}
      </span>
    ),
  },
];
