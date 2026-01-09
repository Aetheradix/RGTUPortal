import { Button } from "primereact/button";

// Shared icon templates
const remarkBody = () => (
  <Button
    icon="pi pi-comment"
    className="p-button-sm bg-teal-400 border-none h-8 w-8 rounded-md"
  />
);

const documentBody = () => (
  <Button
    icon="pi pi-file"
    className="p-button-sm bg-teal-400 border-none h-8 w-8 rounded-md"
  />
);

export const reportColumns = {
  punishment: [
    {
      field: "employeeNameAndCode",
      header: "Employee Name & Code",
      sortable: true,
    },
    { field: "oisNameAndCode", header: "OIS Name & Code", sortable: true },
    { field: "designation", header: "Designation", sortable: true },
    { field: "punishmentType", header: "Punishment Type", sortable: true },
    { field: "remark", header: "Remark", body: remarkBody },
    { field: "orderNo", header: "Punishment Order No.", sortable: true },
    { field: "orderDate", header: "Punishment Order Date", sortable: true },
    { field: "viewDoc", header: "View Document", body: documentBody },
    { field: "viewOrder", header: "View Punishment Order", body: documentBody },
  ],
  restore: [
    {
      field: "employeeNameAndCode",
      header: "Employee Name & Code",
      sortable: true,
    },
    { field: "oisNameAndCode", header: "OIS Name & Code", sortable: true },
    { field: "designation", header: "Designation", sortable: true },
    { field: "punishmentType", header: "Punishment Type", sortable: true },
    { field: "punishRemark", header: "Punishment Remark", body: remarkBody },
    { field: "restoreOrderNo", header: "Restore Order No.", sortable: true },
    { field: "restoreOrderDate", header: "Restore Order Date", sortable: true },
    { field: "restoreRemark", header: "Restore Remark", body: remarkBody },
    { field: "viewDoc", header: "View Document", body: documentBody },
  ],
};
