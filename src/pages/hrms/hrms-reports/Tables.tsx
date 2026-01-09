import { printCol } from "@/pages/masters/course-master/sharedColumns";

export const retirementReportColumns = [
  { field: "employeeName", header: "Employee Name", sortable: true },
  { field: "separationType", header: "Separation Type", sortable: true },
  { field: "retirementDate", header: "Retirement Date", sortable: true },
  { field: "officeType", header: "Office Type", sortable: true },
  { field: "orderDate", header: "Order Date", sortable: true },
  { field: "orderNo", header: "Order No", sortable: true },
  { field: "remark", header: "Remark", sortable: true },
  printCol,
];

export const promotionColumns = [
  { field: "no", header: "Order No." },
  { field: "date", header: "Order Date" },
  { field: "issue", header: "Name of Issuing Office" },
  {
    field: "authority",
    header: "Direct In Case Of District/Division Level Authority",
  },
  { field: "designation", header: "Designation" },
  { field: "pay", header: "Basic Pay" },
  { field: "date", header: "Date of Assumption of Office" },
];

export const payscaleColumns = [
  { field: "no", header: "Order No." },
  { field: "date", header: "Order Date" },
  { field: "office", header: "Name of Issuing Office" },
  {
    field: "authority",
    header: "Direct In Case Of District/Division Level Authority",
  },
  { field: "designation", header: "Designation" },
  { field: "pay", header: "Pay Scale" },
];

export const annualColumns = [
  { field: "year", header: "Year" },
  { field: "month", header: "Month" },
  { field: "pay", header: "New Basic Pay" },
];

export const transferColumn = [
  { field: "orderNo", header: "Order No." },
  { field: "orderdate", header: "Order Date" },
  { field: "designation", header: "Designation Type" },
  {
    field: "school",
    header: "Posted School/Institute/Office Name (DISE Code)",
  },
];

export const nominationColumn = [
  { field: "nomineeName", header: "Nominee Name" },
  { field: "relation", header: "Realtion With Nominee" },
  { field: "percent", header: "Nominee Percentage" },
  {
    field: "school",
    header: "Posted School/Institute/Office Name (DISE Code)",
  },
];

export const earnedColumn = [
  { field: "year", header: "Year" },
  { field: "month", header: "Month" },
  { field: "earnedleave", header: "Earned Leave(In Days)" },
  {
    field: "availleave",
    header: "Available Leave(In Days)",
  },
];

export const halfPayColumn = [
  { field: "year", header: "Year" },
  { field: "month", header: "Month" },
  { field: "earned", header: "Half Pay Leave Earned (In Days)" },
  { field: "avail", header: "Available Leave (In Days)" },
];

export const approvalColumn = [
  { field: "leave", header: "Leave Type" },
  { field: "month", header: "Days" },
  { field: "earnedleave", header: "Date From" },
  { field: "availleave", header: "Date To" },
  { field: "acceptanceDate", header: "Acceptance Date" },
  { field: "approver", header: "Approver" },
  { field: "returnDate", header: "Date of Return from Leave" },
];

export const unauthorColumn = [
  { field: "days", header: "Days" },
  { field: "fromDate", header: "Date From" },
  { field: "toDate", header: "Date To" },
  { field: "returnDate", header: "Date of Return" },
];

export const punishmentColumn = [
  { field: "type", header: "Type of Punishment" },
  { field: "description", header: "Punishment Description" },
  { field: "orderNo", header: "Issuing Officer	Order No." },
  { field: "date", header: "Issue Date" },
  { field: "view", header: "View Order" },
];

export const disciplineColumn = [
  { field: "case", header: "Type of Case" },
  { field: "discription", header: "Case Description" },
  {
    field: "pending",
    header: "Before Whom the Case are Pending",
  },
  {
    field: "proceedings",
    header: "From Which Date the Proceedings",
  },
  { field: "view", header: "View Order" },
];

export const awardColumn = [
  { field: "name", header: "Training Type" },
  { field: "level", header: "Training Level" },
  {
    field: "days",
    header: "Total Days",
  },
  {
    field: "from",
    header: "From",
  },
  { field: "to", header: "To" },
  { field: "view", header: "View Order" },
];

export const trainingColumn = [
  { field: "name", header: "Award Name" },
  { field: "level", header: "Award Level" },
  {
    field: "year",
    header: "Award Year",
  },
  {
    field: "orderNo",
    header: "Award Order No.",
  },
  { field: "view", header: "View Order" },
];

export const resourceColumn = [
  { field: "resource", header: "Resource Group " },
  { field: "days", header: "National Days" },
  {
    field: "stateDays",
    header: "State Days",
  },
];
