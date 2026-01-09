/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "primereact/button";

//table-complaint-columns
export const complaintReportColumns = (onPrint: (data: any) => void) => [
  { field: "complaintNumber", header: "Complaint No.", sortable: true },
  { field: "employeeName", header: "Employee Name & Code", sortable: true },
  { field: "complaintType", header: "Complaint Category", sortable: true },
  { field: "registeredDate", header: "Registered Date", sortable: true },
  {
    field: "status",
    header: "Current Status",
    sortable: true,
    body: (rowData: any) => {
      const styles: any = {
        Disposed: "bg-emerald-100 text-emerald-600",
        Forwarded: "bg-blue-100 text-blue-600",
        Rejected: "bg-red-100 text-red-600",
        Pending: "bg-amber-100 text-amber-600",
      };
      return (
        <span
          className={`px-2 py-1 rounded text-[10px] font-bold ${
            styles[rowData.status] || "bg-gray-100"
          }`}
        >
          {rowData.status}
        </span>
      );
    },
  },
  {
    field: "print",
    header: "Action",
    body: (rowData: any) => (
      <Button
        label="Report"
        icon="pi pi-print"
        className="p-button-sm bg-[#9333ea] border-none text-[11px] h-8 px-3 transform transition-all hover:scale-110"
        onClick={() => onPrint(rowData)}
      />
    ),
  },
];
//table-processing-columns
export const processingColumns = [
  { field: "grievanceNo", header: "Grievance No." },
  { field: "employeeName", header: "Employee Name" },
  { field: "grievanceType", header: "Grievance Type" },
  { field: "grievanceTopic", header: "Grievance Topic" },
  { field: "registerDate", header: "Register Date" },
  { field: "requestedBy", header: "Requested By" },
  { field: "requestDate", header: "Request Date" },
  {
    field: "view",
    header: "View",
    body: () => (
      <Button
        icon="pi pi-eye"
        className="p-button-rounded p-button-outlined p-button-sm w-8 h-8"
      />
    ),
  },
  {
    field: "noteSheet",
    header: "Note Sheet",
    body: () => (
      <Button
        icon="pi pi-refresh"
        className="p-button-rounded p-button-outlined p-button-sm w-8 h-8"
      />
    ),
  },
  {
    field: "doc",
    header: "Doc",
    body: () => (
      <Button
        icon="pi pi-file"
        className="p-button-rounded p-button-outlined p-button-sm w-8 h-8 text-indigo-500"
      />
    ),
  },
  {
    field: "action",
    header: "Action",
    body: (rowData: any) => (
      <Button
        label={rowData.isForward ? "Forward" : "Cancelled"}
        className={`p-button-sm h-8 px-3 border-indigo-400 ${
          rowData.isForward
            ? "p-button-outlined text-indigo-500"
            : "p-button-text text-indigo-400"
        }`}
      />
    ),
  },
  { field: "commentByOffice", header: "Comment By Office" },
  { field: "cancelReasons", header: "Cancel Reasons" },
];
