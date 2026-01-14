/* eslint-disable @typescript-eslint/no-explicit-any */
import { Checkbox } from "primereact/checkbox";

export const profileLockColumns = [
  {
    header: "Select",
    field: "",
    body: () => <Checkbox checked={false} />,
    style: { width: "50px" },
  },
  { field: "srNo", header: "Sr No.", style: { width: "70px" } },
  { field: "samagraId", header: "Samagra ID", sortable: true },
  { field: "studentName", header: "Student Name", sortable: true },
  { field: "fatherName", header: "Father Name" },
  { field: "className", header: "Class" },
  {
    field: "lockStatus",
    header: "Current Status",
    body: (rd: any) => (
      <span
        className={`px-2 py-1 rounded text-xs font-bold ${
          rd.lockStatus === "Locked"
            ? "bg-red-100 text-red-700"
            : "bg-green-100 text-green-700"
        }`}
      >
        {rd.lockStatus}
      </span>
    ),
  },
];
