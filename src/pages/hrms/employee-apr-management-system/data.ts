// aprOptions.ts

export const academicYearOptions = [
  { label: "2023-24", value: "2023-24" },
  { label: "2024-25", value: "2024-25" },
  { label: "2025-26", value: "2025-26" },
  { label: "2026-27", value: "2026-27" },
];

export const stateOptions = [
  { label: "Madhya Pradesh-(23)", value: "Madhya Pradesh-(23)" },
  { label: "Himachal Pradesh-(02)", value: "Himachal Pradesh-(02)" },
  { label: "Uttar Pradesh-(09)", value: "Uttar Pradesh-(09)" },
  { label: "Rajasthan-(08)", value: "Rajasthan-(08)" },
];

export const divisionOptions = [
  { label: "Bhopal", value: "Bhopal" },
  { label: "Indore", value: "Indore" },
  { label: "Gwalior", value: "Gwalior" },
  { label: "Jabalpur", value: "Jabalpur" },
  { label: "Ujjain", value: "Ujjain" },
];

export const districtOptions = [
  { label: "Bhopal", value: "Bhopal" },
  { label: "Raisen", value: "Raisen" },
  { label: "Sehore", value: "Sehore" },
  { label: "Vidisha", value: "Vidisha" },
  { label: "Hoshangabad", value: "Hoshangabad" },
];

export const blockOptions = [
  { label: "Phanda", value: "Phanda" },
  { label: "Berasia", value: "Berasia" },
  { label: "Nasrullaganj", value: "Nasrullaganj" },
  { label: "Ashta", value: "Ashta" },
];

export const propertyTypeOptions = [
  { label: "Residential Property", value: "Residential Property" },
  { label: "Agricultural Land", value: "Agricultural Land" },
  { label: "Commercial Property", value: "Commercial Property" },
  { label: "Industrial Plot", value: "Industrial Plot" },
];

export const propertySubTypeOptions = [
  { label: "House", value: "House" },
  { label: "Flat/Apartment", value: "Flat/Apartment" },
  { label: "Plot", value: "Plot" },
  { label: "Shop", value: "Shop" },
  { label: "Irrigated Land", value: "Irrigated Land" },
];

export const propertyOwnerOptions = [
  { label: "Self(Self)", value: "Self(Self)" },
  { label: "Spouse(Wife/Husband)", value: "Spouse(Wife/Husband)" },
  { label: "Jointly(Self & Spouse)", value: "Jointly(Self & Spouse)" },
  { label: "Dependent Children", value: "Dependent Children" },
];

export const aprMockData = [
  {
    id: 1,
    srNo: 1,
    academicYear: "2025-26",
    employeeName: "Nandlal Nagle (AE7335)",
    designation: "Ucch Madhyamik Shikshak",
    currentSalary: 0,
    incrementDate: "01/07/2026",
    location: "HIMACHAL PRADESH-(02), NA, NA, NA",
    propertyDetail: "Residential Property",
    totalAreaSqft: 1122,
    currentValue: 44,
    propertyOwner: "Self(Self)",
    propertySource: "Purchase",
    purchaseDate: "01/07/2026",
    sellerName: "uighg",
    propertyAnnualIncome: 0,
  },
];

// data.ts
export const mockAPRReportData = [
  {
    id: 1,
    srNo: 1,
    academicYear: "NA",
    employeeName: "Nandlal Nagle",
    designation: "Ucch Madhyamik Shikshak",
  },
];

// data
export const aprMasterData = [
  {
    districtName: "Bhopal",
    totalEmployees: 1200,
    filedAPR: 1150,
    pendingAPR: 50,
    nilAPR: 200,
    compliancePercent: "95.8%",
  },
  {
    districtName: "Indore",
    totalEmployees: 1500,
    filedAPR: 1400,
    pendingAPR: 100,
    nilAPR: 350,
    compliancePercent: "93.3%",
  },
  {
    districtName: "Gwalior",
    totalEmployees: 900,
    filedAPR: 850,
    pendingAPR: 50,
    nilAPR: 150,
    compliancePercent: "94.4%",
  },
];

export const aprDetailData = [
  {
    srNo: 1,
    employeeCode: "AE7335",
    employeeName: "Nandlal Nagle",
    designation: "Ucch Madhyamik Shikshak",
    propertyType: "Residential",
    status: "Filed",
    submissionDate: "05/01/2026",
  },
  {
    srNo: 2,
    employeeCode: "BE1244",
    employeeName: "Amit Sharma",
    designation: "Prathmik Shikshak",
    propertyType: "Nil",
    status: "Filed",
    submissionDate: "02/01/2026",
  },
];

export const recentFilings = [
  {
    id: "APR-2026-001",
    name: "Nandlal Nagle",
    type: "Applicable",
    date: "05/01/2026",
    status: "Verified",
  },
  {
    id: "APR-2026-002",
    name: "Amit Sharma",
    type: "Nil",
    date: "04/01/2026",
    status: "Submitted",
  },
  {
    id: "APR-2026-003",
    name: "Priya Verma",
    type: "Applicable",
    date: "03/01/2026",
    status: "Rejected",
  },
];
