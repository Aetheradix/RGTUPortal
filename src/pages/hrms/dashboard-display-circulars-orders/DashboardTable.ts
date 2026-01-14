import {
  actionsCol,
  printCol,
} from "@/pages/masters/course-master/sharedColumns";

export const orderColumns = [
  { field: "orderNo", header: "Order No.", sortable: true },
  { field: "issueDate", header: "Order Issue Date", sortable: true },
  { field: "expiryDate", header: "Order Expiry Date", sortable: true },
  { field: "subject", header: "Order Subject", sortable: true },
  { field: "uploadedBy", header: "Uploaded By", sortable: true },
  printCol,
];

export const circularColumns = [
  { field: "id", header: "ID", sortable: true },
  { field: "circularNumber", header: "Circular Number", sortable: true },
  { field: "circularDate", header: "Circular Date", sortable: true },
  printCol,
  actionsCol,
];

export const orderMasterColumns = [
  { field: "orderId", header: "Order-ID", sortable: true },
  { field: "orderNo", header: "Order-No", sortable: true },
  { field: "issueDate", header: "Issue Date", sortable: true },
  { field: "expiryDate", header: "Expiry Date", sortable: true },
  printCol,
  actionsCol,
];

export const tenderColumns = [
  { field: "id", header: "ID", sortable: true },
  { field: "tenderNo", header: "Tender No.", sortable: true },
  { field: "tenderDate", header: "Tender Date", sortable: true },
  {
    field: "projectDescription",
    header: "Project Description",
    sortable: true,
  },
  { field: "issuedBy", header: "Issued By", sortable: true },
  { field: "institution", header: "Institution", sortable: true },
  { field: "totalView", header: "Total View", sortable: true },
  printCol,
  actionsCol,
];

export const albumColumns = [
  { field: "id", header: "ID", sortable: true },
  { field: "albumName", header: "Album Name", sortable: true },
  { field: "albumDate", header: "Album Date", sortable: true },
  printCol,
  actionsCol,
];

export const newsColumns = [
  { field: "id", header: "ID", sortable: true },
  { field: "source", header: "Source (Newspaper/Agency)", sortable: true },
  { field: "publicationDate", header: "Publication Date", sortable: true },
  { field: "title", header: "News Title/Subject", sortable: true },
  printCol,
  actionsCol,
];

export const eventColumns = [
  { field: "id", header: "ID", sortable: true },
  { field: "eventName", header: "Event Name", sortable: true },
  { field: "startDate", header: "Start Date", sortable: true },
  { field: "endDate", header: "End Date", sortable: true },
  { field: "organizedBy", header: "Organized By", sortable: true },
  printCol,
  actionsCol,
];

// Grid Columns
export const messageColumns = [
  { field: "id", header: "ID", sortable: true },
  { field: "noticeTitle", header: "Notice Title", sortable: true },
  { field: "issuedBy", header: "Issued By", sortable: true },
  { field: "dateOfIssue", header: "Date of Issue", sortable: true },
  { field: "validity", header: "Validity/Deadline", sortable: true },
  printCol,
  actionsCol,
];
