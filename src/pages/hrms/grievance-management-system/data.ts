export const timelineEvents = [
  {
    status: "Registered",
    date: "10:30 AM",
    icon: "pi pi-pencil",
    color: "#9333ea",
  },
  {
    status: "Forwarded",
    date: "11:15 AM",
    icon: "pi pi-send",
    color: "#a855f7",
  },
  {
    status: "In Review",
    date: "02:00 PM",
    icon: "pi pi-eye",
    color: "#c084fc",
  },
  {
    status: "Resolved",
    date: "04:45 PM",
    icon: "pi pi-check",
    color: "#10b981",
  },
];

export const recentGrievances = [
  {
    id: 1,
    no: "GMSCD498100020",
    name: "VARUN GAUR",
    type: "Financial",
    status: "Pending",
    date: "19/05/2025",
  },
  {
    id: 2,
    no: "GMSCD498100018",
    name: "AMIT KUMAR",
    type: "Transfer",
    status: "Resolved",
    date: "18/05/2025",
  },
  {
    id: 3,
    no: "GMSCD498100015",
    name: "SNEHA P.",
    type: "Establishment",
    status: "Rejected",
    date: "17/05/2025",
  },
];

export const chartData = {
  labels: ["Establishment", "Financial", "Transfer", "Others"],
  datasets: [
    {
      data: [300, 150, 100, 80],
      backgroundColor: ["#9333ea", "#a855f7", "#c084fc", "#e9d5ff"],
      hoverBackgroundColor: ["#7e22ce", "#9333ea", "#a855f7", "#d8b4fe"],
    },
  ],
};

export const chartOptions = {
  plugins: {
    legend: {
      position: "bottom",
      labels: { boxWidth: 10, font: { size: 10 } },
    },
  },
  maintainAspectRatio: false,
};

export const complaintReportData = [
  {
    srNo: 1,
    complaintNumber: "GMSCD498100020",
    employeeName: "VARUN GAUR [CD4981]",
    complaintType: "Establishment Related",
    registeredDate: "19/05/2025",
    status: "Pending",
  },
  {
    srNo: 2,
    complaintNumber: "GMSCD498100016",
    employeeName: "Nihar Singh [CD4981]",
    complaintType: "Financial Related",
    registeredDate: "19/05/2025",
    status: "Forwarded",
  },
  {
    srNo: 3,
    complaintNumber: "GMSBP901000010",
    employeeName: "PANBESHWAR AHIRWAR [BP9010]",
    complaintType: "Establishment Related",
    registeredDate: "17/05/2025",
    status: "Disposed",
  },
  {
    srNo: 4,
    complaintNumber: "GMSAW609900013",
    employeeName: "DINESH PRASAD PANDEY [AW6099]",
    complaintType: "Transfer Related",
    registeredDate: "18/05/2025",
    status: "Rejected",
  },
  {
    srNo: 5,
    complaintNumber: "GMSBK124900014",
    employeeName: "REKHA DHURVE [BK1249]",
    complaintType: "Establishment Related",
    registeredDate: "19/05/2025",
    status: "Pending",
  },
  {
    srNo: 10,
    complaintNumber: "GMSBP901000011",
    employeeName: "PANBESHWAR AHIRWAR [BP9010]",
    complaintType: "Financial Related",
    registeredDate: "17/05/2025",
    status: "Pending",
  },
];

export const processingData = [
  {
    srNo: 1,
    grievanceNo: "GMSCF914902004",
    employeeName: "VIKRAN DAWAR[CF9149]",
    grievanceType: "Establishment Related",
    grievanceTopic: "Transfer related problems",
    registerDate: "30/06/2025",
    requestedBy: "Requested By Employee",
    requestDate: "30/06/2025",
    isForward: true,
    commentByOffice: "NA",
    cancelReasons: "NA",
  },
  {
    srNo: 2,
    grievanceNo: "GMSCD498100009",
    employeeName: "Dhruv Veer[CD4981]",
    grievanceType: "Establishment Related",
    grievanceTopic: "Addition of name in gradation list",
    registerDate: "17/05/2025",
    requestedBy: "Requested By Employee",
    requestDate: "17/05/2025",
    isForward: false,
    commentByOffice: "NA",
    cancelReasons: "Cancrl",
  },
  {
    srNo: 3,
    grievanceNo: "GMSCD498100008",
    employeeName: "Aman Chandel[CD4981]",
    grievanceType: "Financial Related",
    grievanceTopic: "Recoveries",
    registerDate: "17/05/2025",
    requestedBy: "Requested By Employee",
    requestDate: "17/05/2025",
    isForward: false,
    commentByOffice: "NA",
    cancelReasons: "Resolved",
  },
  {
    srNo: 4,
    grievanceNo: "GMSCD498100003",
    employeeName: "Richa singh[CD4981]",
    grievanceType: "Establishment Related",
    grievanceTopic: "Promotions",
    registerDate: "17/05/2025",
    requestedBy: "Forwarded By BEO, REHLI",
    requestDate: "17/05/2025",
    isForward: true,
    commentByOffice: "View",
    cancelReasons: "NA",
  },
];
