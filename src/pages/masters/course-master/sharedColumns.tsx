/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "primereact/button";
import type { TableColumn } from "@/ui/shared";

export const statusCol: TableColumn = {
  field: "isActive",
  header: "Status",
  sortable: true,
  body: (row: any) => (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${
        row.isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
      }`}
    >
      {row.isActive ? "Active" : "Inactive"}
    </span>
  ),
};

export const actionsCol: TableColumn = {
  field: "",
  header: "Actions",
  body: () => (
    <div className="flex gap-2">
      <Button
        icon="pi pi-pencil"
        className="p-button-rounded p-button-text p-button-sm"
      />
      <Button
        icon="pi pi-trash"
        className="p-button-rounded p-button-text p-button-danger p-button-sm"
      />
    </div>
  ),
};

export const printCol: TableColumn = {
  field: "",
  header: "View & Print",
  body: () => (
    <div className="flex justify-center">
      <Button
        icon="pi pi-eye"
        className="p-button-rounded p-button-text p-button-sm p-button-success"
      />
    </div>
  ),
};
