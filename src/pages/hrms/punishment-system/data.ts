export const punishmentOptions = [
  { label: "Suspension", value: "suspension" },
  { label: "Warning", value: "warning" },
  { label: "Salary Deduction", value: "deduction" },
];

export const reportOptions = [
  { label: "Punishment Order Report", value: "punishment" },
  { label: "Restore Punishment Order Report", value: "restore" },
];

// Mock Data
export const restoreData = [
  {
    srNo: 1,
    employeeNameAndCode: "Arjun Talwar (AR4781)",
    orderNo: "SUS242012",
    orderDate: "29/07/2024",
    designation: "Profesor SS1-Hindi",
    oisNameAndCode: "GOVT.COLLEGE Raisen - 021234S010",
    punishmentType: "Promotion Stoppage",
  },
  {
    srNo: 2,
    employeeNameAndCode: "Keshav Maharaj (KR2385)",
    orderNo: "SUS242013",
    orderDate: "29/07/2024",
    designation: "Profesor SS1-English",
    oisNameAndCode: "GOVT.College Badi - 021234S01",
    punishmentType: "Salary Stoppage",
  },
];

// Mock Data
export const punishmentOrderData = [
  {
    srNo: 1,
    employeeNameAndCode: "Arjun Talwar (AR4781)",
    oisNameAndCode: "Govt.College Raisen 021234S010",
    designation: "Profesor SS1-Hindi",
    punishmentType: "Promotion Suspension",
    orderNo: "SUS242012",
    orderDate: "29/07/2024",
  },
  {
    srNo: 2,
    employeeNameAndCode: "Keshav Maharaj (KR2385)",
    oisNameAndCode: "Govt.College Sehore 021234S010",
    designation: "Profesor SS1-English",
    punishmentType: "Salary Increase Suspension",
    orderNo: "SUS242013",
    orderDate: "29/07/2024",
  },
];

// Mock Data
export const restoreOrderData = [
  {
    srNo: 1,
    employeeNameAndCode: "Ravi Kumar (RK3345)",
    oisNameAndCode: "Nutan College Bhopal 021234S011",
    designation: "Profesor SS1-Mathematics",
    punishmentType: "Restore Suspension",
    restoreOrderNo: "SUS242014",
    restoreOrderDate: "30/08/2024",
  },
  {
    srNo: 2,
    employeeNameAndCode: "Sunita Verma (SV1294)",
    oisNameAndCode: "Govt.College Jabalpur 021234S012",
    designation: "Profesor SS1-Science",
    punishmentType: "Restore Salary Suspension",
    restoreOrderNo: "SUS242015",
    restoreOrderDate: "30/08/2024",
  },
];
