export const academicYearOptions = [
  { label: "2025-26", value: "2025-26" },
  { label: "2024-25", value: "2024-25" },
];

export const allOptions = [{ label: "All", value: "All" }];

// Reusing "All" for various geographic and administrative filters per the image
export const divisionOptions = [...allOptions];
export const districtOptions = [...allOptions];
export const blockOptions = [...allOptions];
export const sankulOptions = [...allOptions];
export const mgmtTypeOptions = [...allOptions];
export const mgmtDetailsOptions = [...allOptions];
export const schoolCatOptions = [...allOptions];
export const schoolSubCatOptions = [...allOptions];
export const schoolOptions = [...allOptions];

export const transitionTypeOptions = [
  { label: "All", value: "All" },
  { label: "Promoted", value: "Promoted" },
  { label: "Transfer Certificate (TC) Issued", value: "TC" },
];

export const classOptions = [
  { label: "All", value: "All" },
  { label: "Class 1", value: "1" },
  { label: "Class 2", value: "2" },
  { label: "Class 3", value: "3" },
  { label: "Class 4", value: "4" },
  { label: "Class 5", value: "5" },
];

export const villageOptions = [
  { label: "NayaGaon", value: "NayaGaon" },
  { label: "Arwaliya", value: "Arwaliya" },
];

export const studentSummaryMockData = [
  {
    srNo: 1,
    academicYear: "2024-2025",
    districtName: "Bhopal",
    blockName: "Dabra",
    villageName: "NayaGaon",
    studentName: "Amit Sharma",
    samagraId: "123456789/0115CA231028",
    gender: "Male",
    dob: "2004-06-15",
    category: "OBC",
    fatherName: "Ramesh Sharma",
    motherName: "Sunita Sharma",
    mobileNo: "9876543210",
    bpl: "Yes",
  },
];
