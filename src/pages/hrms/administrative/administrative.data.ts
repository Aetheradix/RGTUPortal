export const draftData: DraftLetterData[] = [
  {
    srNo: 1,
    orderNumber: "20012345612",
    employeeName: "Raju (FF2318)",
    transferDirectedBy: "Head of Department",
    oldDistrict: "Bhopal (462025)",
    oldBlock: "Berasia (209)",
    oldOffice: "ER54333",
    designation: "Assistant",
  },
  {
    srNo: 2,
    orderNumber: "33012345600",
    employeeName: "Sita (FF2318)",
    transferDirectedBy: "Director",
    oldDistrict: "Raisen (1730)",
    oldBlock: "Sanchi (3009)",
    oldOffice: "ER51100",
    designation: "Lecturer",
  },
];

export const transferData: TransferOrderData[] = [
  {
    srNo: 1,
    orderNumber: "20012345612",
    employeeName: "Ram (FF2318)",
    transferDirectedBy: "DSC",
    oldDistrict: "Bhopal (462025)",
    oldBlock: "Berasia (209)",
    oldOffice: "ER54333",
    newOffice: "GW66600",
    status: "Active",
  },
  {
    srNo: 2,
    orderNumber: "11112345612",
    employeeName: "Radha (GS12345)",
    transferDirectedBy: "DSC",
    oldDistrict: "Raisen (173055)",
    oldBlock: "Sanchi (449)",
    oldOffice: "GD00333",
    newOffice: "DS001",
    status: "InActive",
  },
];

// Mock Data for Dropdowns
export const districtsOptions = [
  { label: "Bhopal (462025)", value: "Bhopal" },
  { label: "Raisen (1730)", value: "Raisen" },
  { label: "Indore", value: "Indore" },
  { label: "Gwalior", value: "Gwalior" },
  { label: "Jabalpur", value: "Jabalpur" },
  { label: "Ujjain", value: "Ujjain" },
  { label: "Sagar", value: "Sagar" },
  { label: "Rewa", value: "Rewa" },
  { label: "Satna", value: "Satna" },
  { label: "Ratlam", value: "Ratlam" },
];

export const blocksOptions = [
  { label: "Berasia (209)", value: "Berasia" },
  { label: "Sanchi (3009)", value: "Sanchi" },
  { label: "Phanda", value: "Phanda" },
  { label: "Huzur", value: "Huzur" },
  { label: "Mhow", value: "Mhow" },
  { label: "Budhni", value: "Budhni" },
  { label: "Ashta", value: "Ashta" },
  { label: "Ichhawar", value: "Ichhawar" },
  { label: "Nasrullaganj", value: "Nasrullaganj" },
  { label: "Rehti", value: "Rehti" },
];

// Add to administrative.data.ts

export const postTypeOptions = [
  { label: "Teaching", value: "teaching" },
  { label: "Non-Teaching", value: "non_teaching" },
];

export const subjectOptions = [
  { label: "Mathematics", value: "math" },
  { label: "Science", value: "science" },
  { label: "English", value: "english" },
  { label: "Social Science", value: "social_sci" },
];

export const vacancyData = [
  {
    id: 1,
    postCode: "PC00124",
    schoolName: "Govt. H.S. Bhopal",
    postType: "Teaching",
    subject: "Mathematics",
    totalSanctioned: 5,
    occupied: 3,
    vacancies: 2,
  },
  {
    id: 2,
    postCode: "PC00125",
    schoolName: "Govt. Boys School Raisen",
    postType: "Teaching",
    subject: "Science",
    totalSanctioned: 4,
    occupied: 4,
    vacancies: 0,
  },
  // ... more records
];

// Add to administrative.data.ts

export const academicYearOptions = [
  { label: "2024-25", value: "2024-25" },
  { label: "2023-24", value: "2023-24" },
];

export const districtCountingData = [
  {
    id: 1,
    districtName: "Bhopal",
    totalApps: 150,
    verified: 120,
    rejected: 10,
    pending: 20,
  },
  {
    id: 2,
    districtName: "Indore",
    totalApps: 200,
    verified: 180,
    rejected: 5,
    pending: 15,
  },
  {
    id: 3,
    districtName: "Gwalior",
    totalApps: 90,
    verified: 70,
    rejected: 8,
    pending: 12,
  },
  {
    id: 4,
    districtName: "Jabalpur",
    totalApps: 110,
    verified: 100,
    rejected: 2,
    pending: 8,
  },
];

// Add to administrative.data.ts

export const blockCountingData = [
  {
    id: 1,
    blockName: "Phanda",
    districtName: "Bhopal",
    totalApps: 45,
    verified: 30,
    rejected: 5,
    pending: 10,
  },
  {
    id: 2,
    blockName: "Berasia",
    districtName: "Bhopal",
    totalApps: 32,
    verified: 28,
    rejected: 2,
    pending: 2,
  },
  {
    id: 3,
    blockName: "Arun Nagar",
    districtName: "Indore",
    totalApps: 55,
    verified: 40,
    rejected: 5,
    pending: 10,
  },
  {
    id: 4,
    blockName: "Mhow",
    districtName: "Indore",
    totalApps: 40,
    verified: 35,
    rejected: 1,
    pending: 4,
  },
];

export const transferReportData = [
  {
    id: 1,
    orderNo: "TR/2024/001",
    employeeName: "Raj Saxena (ER00X5)",
    designation: "Professor",
    fromOffice: "Head Office (HR009)",
    toOffice: "Regional Center (RC102)",
    transferDate: "12/05/2024",
    status: "Completed",
  },
  {
    id: 2,
    orderNo: "TR/2024/045",
    employeeName: "Suman Singh (ER09P2)",
    designation: "Assistant Manager",
    fromOffice: "Branch A (BA001)",
    toOffice: "Head Office (HR009)",
    transferDate: "15/06/2024",
    status: "In-Progress",
  },
];
