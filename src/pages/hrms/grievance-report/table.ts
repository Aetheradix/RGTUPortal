export const grievanceColumns = [
  { field: "grievanceNo", header: "Grievance No.", sortable: true },
  { field: "employeeName", header: "Employee Name", sortable: true },
  { field: "type", header: "Grievance Type", sortable: true },
  { field: "topic", header: "Grievance Topic", sortable: true },
  { field: "regDate", header: "Registered Date", sortable: true },
  { field: "requestedBy", header: "Requested By", sortable: true },
  { field: "forwardedOffice", header: "Forwarded Office", sortable: true },
  { field: "forwardDate", header: "Forward Date", sortable: true },
  { field: "section", header: "Section", sortable: true },
];

// Columns extracted from the image
export const grievanceCPIColumns = [
  { field: "grievanceNo", header: "Grievance No.", sortable: true },
  { field: "employee", header: "Employee Name and Code", sortable: true },
  { field: "type", header: "Grievance Type", sortable: true },
  { field: "topic", header: "Grievance Topic", sortable: true },
  { field: "regDate", header: "Registered Date", sortable: true },
  { field: "forwardedOffice", header: "Forwarded Office", sortable: true },
  { field: "forwardDate", header: "Forward Date", sortable: true },
  { field: "section", header: "Section", sortable: true },
];

export const detailColumns = [
  { field: "grievanceNo", header: "Grievance No.", sortable: true },
  { field: "regDate", header: "Register Date", sortable: true },
  { field: "employee", header: "Employee Name", sortable: true },
  { field: "type", header: "Grievance Type", sortable: true },
  { field: "topic", header: "Grievance Topic", sortable: true },
  { field: "status", header: "Grievance Status", sortable: true },
  { field: "forwardedOffice", header: "Forward Office", sortable: true },
];

export const sectionColumns = [
  { field: "section", header: "Section", sortable: true },
  { field: "registered", header: "Registered Grievances", sortable: true },
  { field: "forwarded", header: "Forwarded Grievances", sortable: true },
  { field: "disposed", header: "Disposed Grievances", sortable: true },
  { field: "rejected", header: "Rejected Grievances", sortable: true },
  { field: "pending", header: "Pending Grievances", sortable: true },
];
