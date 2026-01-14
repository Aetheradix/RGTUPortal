export const getDistrictWiseIdColumns = [
  {
    field: "districtName",
    header: "District Name",
    sortable: true,
  },
  {
    field: "noOfEmployees",
    header: "No. of Employees",
    sortable: true,
  },
  {
    field: "idCardGenerated",
    header: "Employees ID Card Generated",
    sortable: true,
  },
  {
    field: "proposalsSigned",
    header: "Employees ID Card Generation Proposals digitally Signed",
    sortable: true,
  },
  {
    field: "idCardNotCreated",
    header: "Employees ID Card Not Created ",
    sortable: true,
  },
];

export const collegeWiseColumns = [
  {
    field: "institution",
    header: "School/ Office/ Institute ",
    sortable: true,
  },
  {
    field: "empCount",
    header: "No. of Employees ",
    sortable: true,
  },
  {
    field: "generated",
    header: "Employees ID Card Generated ",
    sortable: true,
  },
  {
    field: "signed",
    header: "Employees ID Card Generation Proposals digitally Signed ",
    sortable: true,
  },
  {
    field: "notCreated",
    header: "Employees ID Card Not Created ",
    sortable: true,
  },
];

export const missingDetailsColumns = [
  { field: "photo", header: "Photo", sortable: true },
  { field: "employeeName", header: "Employee Name", sortable: true },
  { field: "employeeCode", header: "Employee Code", sortable: true },
  { field: "fatherName", header: "Father Name", sortable: true },
  { field: "dob", header: "Date of Birth" },
  { field: "bloodGroup", header: "Blood Group" },
  { field: "mobileNumber", header: "Mobile Number" },
  { field: "designation", header: "Designation", sortable: true },
  { field: "oisCode", header: "OIS Code / Name", sortable: true },
  { field: "employeeAddress", header: "Employee Address" },
];
