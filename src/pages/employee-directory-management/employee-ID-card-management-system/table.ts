export const printIdColumns = [
  { field: "photo", header: "Photo", sortable: true },
  { field: "name", header: "Name", sortable: true },
  { field: "employeeCode", header: "Employee Code", sortable: true },
  { field: "fatherName", header: "Father Name", sortable: true },
  { field: "dob", header: "Date of Birth", sortable: true },
  { field: "bloodGroup", header: "Blood Group", sortable: true },
  { field: "mobile", header: "Mobile Number", sortable: true },
  { field: "designation", header: "Designation", sortable: true },
  { field: "oisCode", header: "OIS Code", sortable: true },
  { field: "address", header: "Employee Address", sortable: true },
  { field: "validFrom", header: "Valid From", sortable: true },
  { field: "validUpto", header: "Valid Upto", sortable: true },
  { field: "signature", header: "Employee Signature", sortable: true },
  {
    header: "Print",
    field: "",
  },
];

export const getApproveIdColumns = [
  { field: "photo", header: "Photo", sortable: true },
  { field: "name", header: "Name", sortable: true },
  { field: "designation", header: "Designation", sortable: true },
  { field: "employeeCode", header: "Employee Code", sortable: true },
  { field: "postingOffice", header: "Posting Office", sortable: true },
  {
    field: "status",
    header: "Status",
    sortable: true,
  },
  { field: "", header: "Actions" },
];
