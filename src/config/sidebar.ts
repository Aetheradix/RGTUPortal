import {
  FaBook,
  FaBus,
  FaChalkboardTeacher,
  FaClipboardList,
  FaCogs,
  FaGlobe,
  FaHome,
  FaMoneyBillWave,
  FaUniversity,
  FaUserFriends,
  FaUserGraduate,
  FaUsers,
} from "react-icons/fa";

import type { IconType } from "react-icons";

/* Page level */
export interface Page {
  page: string;
  route: string;
}

/* SubModule level */
export interface SubModule {
  subModule: string;
  route: string;
  pages: Page[];
}

/* Main Module level */
export interface SidebarModule {
  module: string;
  icon: IconType;
  route: string;
  subModules?: SubModule[];
}

/* Home module */
export interface HomeModule {
  module: string;
  icon: IconType;
  route: string;
}

/* Complete Sidebar Menu */
export interface SidebarMenu {
  home: HomeModule;
  sidebar: SidebarModule[];
}

const sidebarMenu = {
  home: {
    module: "Home",
    icon: FaHome,
    route: "/home",
  },
  sidebar: [
    {
      module: "Masters",
      icon: FaCogs,
      route: "/masters",
      subModules: [
        {
          subModule: "User Management",
          route: "/masters/user-management",
          pages: [
            {
              page: "Create User Level",
              route: "/masters/user-management/create-user-level",
            },
            {
              page: "Module Mapping",
              route: "/masters/user-management/module-mapping",
            },
            {
              page: "Parent Menu Creation",
              route: "/masters/user-management/parent-menu-creation",
            },
            {
              page: "Sub Menu Creation",
              route: "/masters/user-management/sub-menu-creation",
            },
            {
              page: "Role Creation",
              route: "/masters/user-management/role-creation",
            },
            {
              page: "Role Wise Module Mapping",
              route: "/masters/user-management/role-wise-module-mapping",
            },
            {
              page: "Incharge Mapping",
              route: "/masters/user-management/incharge-mapping",
            },
            {
              page: "Form Wise Right's Assign",
              route: "/masters/user-management/form-wise-rights-assign",
            },
            {
              page: "Role Wise Right's Assign",
              route: "/masters/user-management/role-wise-rights-assign",
            },
          ],
        },
        {
          subModule: "Location Master",
          route: "/masters/location-master",
          pages: [
            {
              page: "State Master Data",
              route: "/masters/location-master/state-master",
            },
            {
              page: "Division Master Data",
              route: "/masters/location-master/division-master",
            },
            {
              page: "District Master Data",
              route: "/masters/location-master/district-master",
            },
            {
              page: "Tasil Master Data",
              route: "/masters/location-master/tasil-master",
            },
            {
              page: "Block Master Data",
              route: "/masters/location-master/block-master",
            },
            {
              page: "Parliamentary Master Data",
              route: "/masters/location-master/parliamentary-master",
            },
            {
              page: "Assembly Master Data",
              route: "/masters/location-master/assembly-master",
            },
            {
              page: "Nagar Nigam Master Data",
              route: "/masters/location-master/nagar-nigam-master",
            },
            {
              page: "Nagar Palika Master Data",
              route: "/masters/location-master/nagar-palika-master",
            },
            {
              page: "Jila Panchayat Master Data",
              route: "/masters/location-master/jila-panchayat-master",
            },
            {
              page: "Nagar Panchayat Master Data",
              route: "/masters/location-master/nagar-panchayat-master",
            },
            {
              page: "Janpad Panchayat Master Data",
              route: "/masters/location-master/janpad-panchayat-master",
            },
            {
              page: "Gram Panchayat Master Data",
              route: "/masters/location-master/gram-panchayat-master",
            },
            {
              page: "Post Office Master",
              route: "/masters/location-master/post-office-master",
            },
            {
              page: "Village Master",
              route: "/masters/location-master/village-master",
            },
            {
              page: "Habitation Master Data",
              route: "/masters/location-master/habitation-master",
            },
            { page: "Pin code", route: "/masters/location-master/pin-code" },
          ],
        },
        {
          subModule: "Course Master",
          route: "/masters/course-master",
          pages: [
            { page: "Category", route: "/masters/course-master/category" },
            { page: "Level", route: "/masters/course-master/level" },
            { page: "Course", route: "/masters/course-master/course" },
            {
              page: "Specialization",
              route: "/masters/course-master/specialization",
            },
            {
              page: "Modes of Education",
              route: "/masters/course-master/modes-of-education",
            },
            {
              page: "Course and Specialization Mapping",
              route: "/masters/course-master/course-specialization-mapping",
            },
            {
              page: "Course Status",
              route: "/masters/course-master/course-status",
            },
          ],
        },
        {
          subModule: "Faculty Master",
          route: "/masters/faculty-master",
          pages: [
            { page: "Faculty", route: "/masters/faculty-master/faculty" },
            {
              page: "Faculty Status",
              route: "/masters/faculty-master/faculty-status",
            },
            {
              page: "Office Type",
              route: "/masters/faculty-master/office-type",
            },
            {
              page: "Office Name",
              route: "/masters/faculty-master/office-name",
            },
            { page: "Department", route: "/masters/faculty-master/department" },
            {
              page: "Head Office",
              route: "/masters/faculty-master/head-office",
            },
            {
              page: "Division Office",
              route: "/masters/faculty-master/division-office",
            },
            {
              page: "District Office",
              route: "/masters/faculty-master/district-office",
            },
          ],
        },
        {
          subModule: "University Master",
          route: "/masters/university-master",
          pages: [
            {
              page: "University Type Master",
              route: "/masters/university-master/university-type-master",
            },
            {
              page: "University Category Master",
              route: "/masters/university-master/university-category-master",
            },
            {
              page: "University Master",
              route: "/masters/university-master/university-master",
            },
          ],
        },
        {
          subModule: "College Master",
          route: "/masters/college-master",
          pages: [
            {
              page: "College Type Master",
              route: "/masters/college-master/college-type-master",
            },
            {
              page: "College Category Master",
              route: "/masters/college-master/college-category-master",
            },
            {
              page: "College Master",
              route: "/masters/college-master/college-master",
            },
            {
              page: "Post Master Data",
              route: "/masters/college-master/post-master-data",
            },
            {
              page: "Class Master Data",
              route: "/masters/college-master/class-master-data",
            },
          ],
        },
        {
          subModule: "HR Master Data",
          route: "/masters/hr-master-data",
          pages: [
            {
              page: "Designation Type Master",
              route: "/masters/hr-master-data/designation-type-master",
            },
            {
              page: "Designation Master Data",
              route: "/masters/hr-master-data/designation-master",
            },
            {
              page: "Section Master Data",
              route: "/masters/hr-master-data/section-master",
            },
            {
              page: "Pay Commission Master Data",
              route: "/masters/hr-master-data/pay-commission-master",
            },
            {
              page: "Pay Scale Master Data",
              route: "/masters/hr-master-data/pay-scale-master",
            },
            {
              page: "Grade Pay Master Data",
              route: "/masters/hr-master-data/grade-pay-master",
            },
            {
              page: "Level Master Data",
              route: "/masters/hr-master-data/level-master",
            },
            {
              page: "Level Basic Pay Master Data",
              route: "/masters/hr-master-data/level-basic-pay-master",
            },
            {
              page: "Appointment Department Master Data",
              route: "/masters/hr-master-data/appointment-department-master",
            },
            {
              page: "Blood Master Data",
              route: "/masters/hr-master-data/blood-master",
            },
            {
              page: "Religion Master Data",
              route: "/masters/hr-master-data/religion-master",
            },
            {
              page: "Caste Master Data",
              route: "/masters/hr-master-data/caste-master",
            },
            {
              page: "Qualification Master Data",
              route: "/masters/hr-master-data/qualification-master",
            },
            {
              page: "Other Department Master",
              route: "/masters/hr-master-data/other-department-master",
            },
          ],
        },
        {
          subModule: "Payroll Master",
          route: "/masters/payroll-master",
          pages: [
            {
              page: "Section Master",
              route: "/masters/payroll-master/section-master",
            },
            {
              page: "Self Earning & Deduction Optional Head Value",
              route:
                "/masters/payroll-master/self-earning-deduction-optional-head-value",
            },
            {
              page: "Self Earning & Deduction Fixed Head Value",
              route:
                "/masters/payroll-master/self-earning-deduction-fixed-head-value",
            },
            {
              page: "Loan Master",
              route: "/masters/payroll-master/loan-master",
            },
            {
              page: "All Earning and The All Employee Wise Head Wise",
              route:
                "/masters/payroll-master/all-earning-all-employee-wise-head-wise",
            },
            {
              page: "Challan Details Master Data",
              route: "/masters/payroll-master/challan-details-master",
            },
            {
              page: "Scheme Department Master",
              route: "/masters/payroll-master/scheme-department-master",
            },
          ],
        },
        {
          subModule: "Scheme Master",
          route: "/masters/scheme-master",
          pages: [
            {
              page: "Scheme Master",
              route: "/masters/scheme-master/scheme-master",
            },
            {
              page: "Scheme Type Master",
              route: "/masters/scheme-master/scheme-type-master",
            },
            {
              page: "Scheme Master Duplicate",
              route: "/masters/scheme-master/scheme-master-duplicate",
            },
            {
              page: "Scheme Category Master (Central, State, UGC)",
              route: "/masters/scheme-master/scheme-category-master",
            },
          ],
        },
        {
          subModule: "Grant Master",
          route: "/masters/grant-master",
          pages: [
            { page: "Grant Type", route: "/masters/grant-master/grant-type" },
            {
              page: "Grant Category",
              route: "/masters/grant-master/grant-category",
            },
          ],
        },
        {
          subModule: "Grant Application",
          route: "/masters/grant-application",
          pages: [
            {
              page: "Eligibility",
              route: "/masters/grant-application/eligibility",
            },
            {
              page: "Application Process",
              route: "/masters/grant-application/application-process",
            },
            {
              page: "Application Status",
              route: "/masters/grant-application/application-status",
            },
          ],
        },
      ],
    },
    {
      module: "Employee Directory",
      icon: FaHome,
      route: "/employee-directory",
      subModules: [
        {
          subModule: "Employee Directory Management",
          route: "/employee-directory/management",
          pages: [
            {
              page: "Employee Directory",
              route: "/employee-directory/management/employee-directory",
            },
            {
              page: "Official Details Update",
              route: "/employee-directory/management/official-details-update",
            },
            {
              page: "Employee Data Change Request",
              route:
                "/employee-directory/management/employee-data-change-request",
            },
            {
              page: "Employee Verification",
              route: "/employee-directory/management/employee-verification",
            },
            {
              page: "Employee Verification PDF",
              route: "/employee-directory/management/employee-verification-pdf",
            },
            {
              page: "Employee Verification HO Level",
              route:
                "/employee-directory/management/employee-verification-ho-level",
            },
            {
              page: "Exam Wise Employee Enrollment",
              route:
                "/employee-directory/management/exam-wise-employee-enrollment",
            },
          ],
        },
        {
          subModule: "Employee ID Card Management",
          route: "/employee-directory/id-card",
          pages: [
            {
              page: "Print Employee Card",
              route: "/employee-directory/id-card/print-employee-card",
            },
            {
              page: "Approve Employee Id Card",
              route: "/employee-directory/id-card/approve-employee-id-card",
            },
            {
              page: "Employee ID Card Generate",
              route: "/employee-directory/id-card/generate",
            },
            {
              page: "District Wise ID Card",
              route: "/employee-directory/id-card/district-wise-id-card",
            },
            {
              page: "College Wise ID Card",
              route: "/employee-directory/id-card/college-wise-id-card",
            },
            {
              page: "Missing Employee Details",
              route: "/employee-directory/id-card/missing-employee-details",
            },
            {
              page: "Employee Details Report",
              route: "/employee-directory/id-card/employee-details-report",
            },
            {
              page: "Change Request Verification Statistic Report",
              route:
                "/employee-directory/id-card/change-request-verification-statistic-report",
            },
            {
              page: "Employee Verification Statistic Report",
              route:
                "/employee-directory/id-card/employee-verification-statistic-report",
            },
            {
              page: "Exam Wise Employee Enrollment Report",
              route: "/employee-directory/id-card/exam-wise-enrollment-report",
            },
            {
              page: "Employee Verification Report",
              route: "/employee-directory/id-card/employee-verification-report",
            },
            {
              page: "Handicapped Employees Report",
              route: "/employee-directory/id-card/handicapped-employees-report",
            },
            {
              page: "Employee Customized Report",
              route: "/employee-directory/id-card/employee-customized-report",
            },
          ],
        },
      ],
    },
    {
      module: "HRMS",
      icon: FaUsers,
      route: "/hrms",
      subModules: [
        {
          subModule: "Transfer Request",
          route: "/hrms/transfer-request",
          pages: [
            {
              page: "About Voluntary and Mutual Transfer",
              route: "/hrms/transfer-request/about",
            },
            {
              page: "Apply Voluntary Transfer",
              route: "/hrms/transfer-request/apply-voluntary-transfer",
            },
            {
              page: "Apply Mutual Transfer",
              route: "/hrms/transfer-request/apply-mutual-transfer",
            },
            {
              page: "Print Draft Application",
              route: "/hrms/transfer-request/print-draft-application",
            },
            {
              page: "Lock Application",
              route: "/hrms/transfer-request/lock-application",
            },
          ],
        },
        {
          subModule: "Administrative Level Transfer",
          route: "/hrms/administrative-level-transfer",
          pages: [
            {
              page: "Transfer",
              route: "/hrms/administrative-level-transfer/transfer",
            },
            {
              page: "Print Draft Transfer Or Update Application",
              route: "/hrms/administrative-level-transfer/print-draft-letter",
            },
            {
              page: "Generate Transfer Order",
              route:
                "/hrms/administrative-level-transfer/generate-transfer-order",
            },
            {
              page: "Print Transfer Order",
              route: "/hrms/administrative-level-transfer/print-transfer-order",
            },
            {
              page: "View Post Code With Vacancies",
              route:
                "/hrms/administrative-level-transfer/view-post-code-vacancies",
            },
            {
              page: "District Wise Counting Report",
              route:
                "/hrms/administrative-level-transfer/district-counting-report",
            },
            {
              page: "Block Wise Counting Report",
              route:
                "/hrms/administrative-level-transfer/block-counting-report",
            },
            {
              page: "Transfer Report",
              route: "/hrms/administrative-level-transfer/transfer-report",
            },
          ],
        },
        {
          subModule: "HOD Transfer Approval",
          route: "/hrms/hod-transfer-approval",
          pages: [
            {
              page: "Mutual Transfer Approve",
              route: "/hrms/hod-transfer-approval/mutual-transfer-approval",
            },
            {
              page: "Mutual Transfer Print",
              route: "/hrms/hod-transfer-approval/mutual-transfer-print",
            },
          ],
        },
        {
          subModule: "Transfer Approval by Head Office",
          route: "/hrms/transfer-approval-head-office",
          pages: [
            {
              page: "About HO Level Transfer Approval",
              route:
                "/hrms/transfer-approval-head-office/about-ho-level-transfer-approval",
            },
            {
              page: "View Transfer Request & Approve",
              route:
                "/hrms/transfer-approval-head-office/view-transfer-request-approve",
            },
            {
              page: "Voluntary Transfer Final Approve",
              route:
                "/hrms/transfer-approval-head-office/voluntary-transfer-final-approve",
            },
            {
              page: "Voluntary Transfer Print",
              route:
                "/hrms/transfer-approval-head-office/voluntary-transfer-print",
            },
            {
              page: "Mutual Transfer Approve",
              route:
                "/hrms/transfer-approval-head-office/mutual-transfer-approve",
            },
            {
              page: "Mutual Transfer Print",
              route:
                "/hrms/transfer-approval-head-office/mutual-transfer-print",
            },
          ],
        },
        {
          subModule: "Higher Designation Counselling",
          route: "/hrms/higher-designation-counselling",
          pages: [
            {
              page: "Employee Higher Designation Charge",
              route:
                "/hrms/higher-designation-counselling/employee-higher-designation-charge",
            },
            {
              page: "Generate List",
              route: "/hrms/higher-designation-counselling/generate-list",
            },
            {
              page: "Generate List Report",
              route:
                "/hrms/higher-designation-counselling/generate-list-report",
            },
          ],
        },
        {
          subModule: "Automatic Transfer System",
          route: "/hrms/automatic-transfer-system",
          pages: [
            {
              page: "About Automatic Transfer System",
              route:
                "/hrms/automatic-transfer-system/about-automatic-transfer-system",
            },
            {
              page: "Generate Transfer",
              route: "/hrms/automatic-transfer-system/generate-transfer",
            },
          ],
        },
        {
          subModule: "Cancel Transfer Order",
          route: "/hrms/cancel-transfer-order",
          pages: [
            {
              page: "About Cancel Transfer Order",
              route: "/hrms/cancel-transfer-order/about-cancel-transfer-order",
            },
            {
              page: "Cancel Transfer Order",
              route: "/hrms/cancel-transfer-order/cancel-transfer-order",
            },
            {
              page: "Print Cancel Transfer Order",
              route: "/hrms/cancel-transfer-order/print-cancel-transfer-order",
            },
            {
              page: "Report",
              route: "/hrms/cancel-transfer-order/report",
            },
          ],
        },
        {
          subModule: "Employee Joining ",
          route: "/hrms/employee-joining-In-office",
          pages: [
            {
              page: "About Employee Joining",
              route: "/hrms/employee-joining-In-office/about-employee-joining",
            },
            {
              page: "Employee Joining in Office",
              route: "/hrms/employee-joining-In-office/add-employee-to-office",
            },
            {
              page: "Employee Joining Report",
              route: "/hrms/employee-joining-In-office/report",
            },
          ],
        },
        {
          subModule: "Tour ",
          route: "/hrms/tour",
          pages: [
            {
              page: "About Employee Joining",
              route: "/hrms/tour/about-tour",
            },
            {
              page: "Approve Tour",
              route: "/hrms/tour/tour-approve",
            },
            {
              page: "Apply Tour",
              route: "/hrms/tour/tour-apply",
            },
            {
              page: "Tour Report",
              route: "/hrms/tour/tour-report",
            },
          ],
        },
        {
          subModule: "Promotion",
          route: "/hrms/promotion",
          pages: [
            {
              page: "Promotion Process",
              route: "/hrms/promotion/promotion-process",
            },
            {
              page: "Generate Promotion Order",
              route: "/hrms/promotion/promotion-order",
            },
            {
              page: "Cancel Promotion Order",
              route: "/hrms/promotion/promotion-hold-orders",
            },
            {
              page: "Print Promotion Order",
              route: "/hrms/promotion/promotion-with-transfer-report",
            },
            {
              page: "Promotion Order Report",
              route: "/hrms/promotion/promotion-order-report",
            },
          ],
        },
        {
          subModule: "E-Service Book",
          route: "/hrms/e-Service-book",
          pages: [
            {
              page: "E-Service Book",
              route: "/hrms/e-Service-book/e-service-book",
            },
            {
              page: "E-Service Book Report",
              route: "/hrms/e-Service-book/e-service-book-report",
            },
          ],
        },
        {
          subModule: "Departmental Enquiry",
          route: "/hrms/departmental-enquiry",
          pages: [
            {
              page: "About Departmental Enquiry",
              route: "/hrms/departmental-enquiry/about-departmental-enquiry",
            },
            {
              page: "Add Departmental Enquiry",
              route: "/hrms/departmental-enquiry/add-departmental-enquiry",
            },
            {
              page: "Departmental Enquiry List",
              route: "/hrms/departmental-enquiry/departmental-enquiry-list",
            },
            {
              page: "Departmental Enquiry Report",
              route: "/hrms/departmental-enquiry/departmental-enquiry-report",
            },
          ],
        },
        {
          subModule: "Annual Confidential Report (ACR)",
          route: "/hrms/annual-confidential-report",
          pages: [
            {
              page: "About ACR",
              route: "/hrms/annual-confidential-report/aboutACR",
            },
            {
              page: "Employee Apply ACR",
              route: "/hrms/annual-confidential-report/employee-apply-acr",
            },
            {
              page: "Employee ACR Resend & Edit Application",
              route:
                "/hrms/annual-confidential-report/employee-acr-resend-edit-application",
            },
            {
              page: "ACR Report Fill By Reporting Officer",
              route:
                "/hrms/annual-confidential-report/acr-report-fill-by-reporting-officer",
            },
            {
              page: "ACR Report Reviewing Fill Accepting Authority",
              route:
                "/hrms/annual-confidential-report/acr-report-reviewing-fill-accepting-authority",
            },
            {
              page: "Employee ACR Report",
              route: "/hrms/annual-confidential-report/employee-acr-report",
            },
            {
              page: "Reporting Officer ACR Report",
              route:
                "/hrms/annual-confidential-report/reportin-officer-acr-report",
            },
            {
              page: "Accepting Authority ACR Report",
              route:
                "/hrms/annual-confidential-report/accepting-authority-acr-report",
            },
            {
              page: "District Wise ACR Report",
              route:
                "/hrms/annual-confidential-report/district-wise-acr-report",
            },
          ],
        },
        {
          subModule: "Employee Anukampa Application",
          route: "/hrms/employee-anukampa-application",
          pages: [
            {
              page: "Anukampa Appointment Home",
              route:
                "/hrms/employee-anukampa-application/anukampa-appointment-home",
            },
            {
              page: "Apply for Anukampa Appointment",
              route:
                "/hrms/employee-anukampa-application/apply-anukampa-appointment",
            },
            {
              page: "Print Status of Anukampa Appointment Application",
              route:
                "/hrms/employee-anukampa-application/print-status-anukampa-appointment-application",
            },
          ],
        },
        {
          subModule: "HOD Anukampa Application Approval",
          route: "/hrms/hod-anukampa-approval",
          pages: [
            {
              page: "HOD Anukampa Application Approval Home",
              route: "/hrms/hod-anukampa-approval/home",
            },
            {
              page: "Register/Correct Application for Anukampa Appointment",
              route: "/hrms/hod-anukampa-approval/register-correct",
            },
            {
              page: "Print Application",
              route: "/hrms/hod-anukampa-approval/print",
            },
            {
              page: "Action on Anukampa Appointment",
              route: "/hrms/hod-anukampa-approval/action",
            },
            {
              page: "Decision On Application",
              route: "/hrms/hod-anukampa-approval/decision",
            },
            {
              page: "NOC Report Sent to District Collector",
              route: "/hrms/hod-anukampa-approval/noc-report",
            },
            {
              page: "Dispose Cases",
              route: "/hrms/hod-anukampa-approval/dispose",
            },
            {
              page: "Block-Wise Statistics",
              route: "/hrms/hod-anukampa-approval/block-statistics",
            },
            {
              page: "District-Wise Statistics",
              route: "/hrms/hod-anukampa-approval/district-statistics",
            },
            {
              page: "NOC Report",
              route: "/hrms/hod-anukampa-approval/noc-summary",
            },
          ],
        },
        {
          subModule: "Director Anukampa Application Approval",
          route: "/hrms/director-anukampa-approval",
          pages: [
            {
              page: "JD Anukampa Application Approval Home",
              route: "/hrms/director-anukampa-approval/home",
            },
            {
              page: "Register/Correct Application for Anukampa Appointment",
              route: "/hrms/director-anukampa-approval/register-correct",
            },
            {
              page: "Print Application",
              route: "/hrms/director-anukampa-approval/print",
            },
            {
              page: "Action on Anukampa Appointment",
              route: "/hrms/director-anukampa-approval/action",
            },
            {
              page: "Decision On Application",
              route: "/hrms/director-anukampa-approval/decision",
            },
            {
              page: "NOC Report Sent to District Collector",
              route: "/hrms/director-anukampa-approval/noc-report",
            },
            {
              page: "Dispose Cases",
              route: "/hrms/director-anukampa-approval/dispose",
            },
            {
              page: "Block-Wise Statistics",
              route: "/hrms/director-anukampa-approval/block-statistics",
            },
            {
              page: "District-Wise Statistics",
              route: "/hrms/director-anukampa-approval/district-statistics",
            },
            {
              page: "NOC Report",
              route: "/hrms/director-anukampa-approval/noc-summary",
            },
          ],
        },
        {
          subModule: "Head Office Anukampa Application Approval",
          route: "/hrms/head-office-anukampa-approval",
          pages: [
            {
              page: "Head Office Anukampa Application Approval Home",
              route: "/hrms/head-office-anukampa-approval/home",
            },
            {
              page: "Register/Correct Application for Anukampa Appointment",
              route: "/hrms/head-office-anukampa-approval/register-correct",
            },
            {
              page: "Print Application",
              route: "/hrms/head-office-anukampa-approval/print",
            },
            {
              page: "Action on Anukampa Appointment",
              route: "/hrms/head-office-anukampa-approval/action",
            },
            {
              page: "Decision On Application",
              route: "/hrms/head-office-anukampa-approval/decision",
            },
            {
              page: "NOC Report Sent to District Collector",
              route: "/hrms/head-office-anukampa-approval/noc-report",
            },
            {
              page: "Dispose Cases",
              route: "/hrms/head-office-anukampa-approval/dispose",
            },
            {
              page: "Block-Wise Statistics",
              route: "/hrms/head-office-anukampa-approval/block-statistics",
            },
            {
              page: "District-Wise Statistics",
              route: "/hrms/head-office-anukampa-approval/district-statistics",
            },
            {
              page: "NOC Report",
              route: "/hrms/head-office-anukampa-approval/noc-summary",
            },
            {
              page: "Anukampa Appointment Report",
              route: "/hrms/head-office-anukampa-approval/final-report",
            },
          ],
        },
        {
          subModule: "Dashboard Display Circulars-Orders",
          route: "/hrms/dashboard-display-orders",
          pages: [
            {
              page: "All Order Details",
              route: "/hrms/dashboard-display-orders/all-orders",
            },
            {
              page: "Circular Order",
              route: "/hrms/dashboard-display-orders/circular-order",
            },
            {
              page: "Order Master",
              route: "/hrms/dashboard-display-orders/order-master",
            },
            {
              page: "Tender Master",
              route: "/hrms/dashboard-display-orders/tender-master",
            },
            {
              page: "Photo Master",
              route: "/hrms/dashboard-display-orders/photo-master",
            },
            {
              page: "News Master",
              route: "/hrms/dashboard-display-orders/news-master",
            },
            {
              page: "Event Information Master",
              route: "/hrms/dashboard-display-orders/event-master",
            },
            {
              page: "Message Information Master",
              route:
                "/hrms/dashboard-display-orders/message-information-master",
            },
          ],
        },

        {
          subModule: "Grievance Management System",
          route: "/hrms/grievance-management-system",
          pages: [
            {
              page: "Grievance Management System Home",
              route:
                "/hrms/grievance-management-system/grievance-management-system-home",
            },
            {
              page: "Add Employee Grievance Details",
              route:
                "/hrms/grievance-management-system/add-employee-grievance-details",
            },
            {
              page: "Complaint Tracking Status",
              route:
                "/hrms/grievance-management-system/grievance-tracking-report",
            },
            {
              page: "Print Complaint",
              route: "/hrms/grievance-management-system/print-complaint-report",
            },
            {
              page: "Grievances Processing",
              route: "/hrms/grievance-management-system/grievance-processing",
            },
            {
              page: "Grievances Complaint Resolution",
              route: "/hrms/grievance-management-system/grievance-resolution",
            },
          ],
        },
        {
          subModule: "Grievance Report",
          route: "/hrms/grievance-report",
          pages: [
            {
              page: "Grivence Disposed Report",
              route: "/hrms/grievance-report/grivence-disposed-report",
            },
            {
              page: "Rejected Complaint Report",
              route: "/hrms/grievance-report/rejected-complaint-report",
            },
            {
              page: "District Wise Forwarded Complaint",
              route: "/hrms/grievance-report/district-wise-complaint-report",
            },
            {
              page: "Complaint Forwarded From CPI",
              route: "/hrms/grievance-report/complaint-forwarded-from-cpi",
            },
            {
              page: "District Wise Progress Report",
              route: "/hrms/grievance-report/district-wise-progress-report",
            },
            {
              page: "Section Wise Pending Report",
              route: "/hrms/grievance-report/section-wise-pending-report",
            },
          ],
        },
        {
          subModule: "Employee Annual Property Returns Management System",
          route: "/hrms/apr-management",
          pages: [
            {
              page: "Employee Annual Property Returns Management System",
              route: "/hrms/apr-management/aprms-home",
            },
            {
              page: "Employee APR Form",
              route: "/hrms/apr-management/apr-form",
            },
            {
              page: "Employee APR Form Print",
              route: "/hrms/apr-management/apr-form-print",
            },
            {
              page: "Upload APR Form Document",
              route: "/hrms/apr-management/apr-dcoument-upload",
            },
            {
              page: "Employee APR Form Report",
              route: "/hrms/apr-management/apr-form-report",
            },
            {
              page: "APRMS District Wise Report",
              route: "/hrms/apr-management/apr-district-report",
            },
          ],
        },
        {
          subModule: "Punishment System",
          route: "/hrms/punishment-system",
          pages: [
            {
              page: "About Punishment System",
              route: "/hrms/punishment-system/about-punishment-system",
            },
            {
              page: "Generate Punishment",
              route: "/hrms/punishment-system/generate-punishment",
            },
            {
              page: "Restore Punishment",
              route: "/hrms/punishment-system/restore-punishment",
            },
            {
              page: "Punishment Report",
              route: "/hrms/punishment-system/punishment-report",
            },
          ],
        },
        {
          subModule: "HRMS Reports",
          route: "/hrms/hrms-reports",
          pages: [
            {
              page: "E-Service Book Report",
              route: "/hrms/hrms-reports/e-service-book-report",
            },
            {
              page: "Employee Retirement Report",
              route: "/hrms/hrms-reports/employee-retirement-report",
            },
          ],
        },
        {
          subModule: "Bonus",
          route: "/hrms/bonus",
          pages: [
            { page: "Employee Bonus", route: "/hrms/bonus/employee-bonus" },
          ],
        },
        {
          subModule: "Arrear Process",
          route: "/hrms/arrear-process",
          pages: [
            {
              page: "Level upgrade And Salary Arrear Process",
              route: "/hrms/arrear-process/salary-process",
            },
            {
              page: "DA Arrear Process",
              route: "/hrms/arrear-process/da-process",
            },
            {
              page: "Arrear Final Generate Process",
              route: "/hrms/arrear-process/final-generate",
            },
            {
              page: "Arrear Report",
              route: "/hrms/arrear-process/arrear-report",
            },
          ],
        },
      ],
    },

    {
      module: "Academics",
      icon: FaBook,
      route: "/academics",
      subModules: [
        {
          subModule: "Lectures",
          route: "/academics/lectures",
          pages: [
            {
              page: "Offline Lectures",
              route: "/academics/lectures/offline-lectures",
            },
            {
              page: "Lecture Resources",
              route: "/academics/lectures/resources",
            },
          ],
        },
        {
          subModule: "Attendance Management",
          route: "/academics/attendance-management",
          pages: [
            {
              page: "View Attendance Records",
              route: "/academics/attendance-management/view-attendance-records",
            },
            {
              page: "Mark Attendance",
              route: "/academics/attendance-management/mark-attendance",
            },
            {
              page: "Attendance Policies",
              route:
                "/academics/attendance-management/attendance-policy-master",
            },
            {
              page: "Request Leave",
              route: "/academics/attendance-management/request-leave-master",
            },
            {
              page: "Attendance Reports",
              route: "/academics/attendance-management/attendance-report",
            },
          ],
        },
        {
          subModule: "Syllabus Study Material",
          route: "/academics/syllabus-and-study-material",
          pages: [
            {
              page: "Add Study Materials",
              route:
                "/academics/syllabus-and-study-material/study-material-add",
            },
            {
              page: "Saved Notes And Videos",
              route:
                "/academics/syllabus-and-study-material/saved-notes-and-videos",
            },
            {
              page: "View Study Materials",
              route:
                "/academics/syllabus-and-study-material/view-study-materials",
            },
          ],
        },
        {
          subModule: "College Transfer",
          route: "/academics/college-transfer",
          pages: [
            {
              page: "Apply College Transfer",
              route: "/academics/college-transfer/apply-college-transfer",
            },
            {
              page: "Approve Transfer Request University",
              route: "/academics/college-transfer/approve-transfer-request",
            },
            {
              page: "Transfer In",
              route: "/academics/college-transfer/add-transfer-in",
            },
            {
              page: "Transfer Out",
              route: "/academics/college-transfer/add-transfer-out",
            },
            {
              page: "Credit Transfer to new college/university",
              route: "/academics/college-transfer/add-credit-transfer",
            },
          ],
        },
      ],
    },
    {
      module: "Admission",
      icon: FaUserGraduate,
      route: "/admission-management-system",
      subModules: [
        {
          subModule: "Registration Form",
          route: "/admission-management-system/registration-form",
          pages: [
            {
              page: "Fill Registration Form",
              route:
                "/admission-management-system/registration-form/fill-registration-form",
            },
            {
              page: "Edit Registration Form",
              route:
                "/admission-management-system/registration-form/edit-registration-form",
            },
          ],
        },
        {
          subModule: "Upload Document",
          route: "/admission-management-system/upload-document",
          pages: [
            {
              page: "Configure Document Requirement",
              route:
                "/admission-management-system/upload-document/configure-document-requirement",
            },
            {
              page: "Upload Documents",
              route:
                "/admission-management-system/upload-document/upload-documents",
            },
            {
              page: "Uploaded Documents",
              route:
                "/admission-management-system/upload-document/uploaded-documents",
            },
          ],
        },
        {
          subModule: "College selection ",
          route: "/admission-management-system/choices-filling",
          pages: [
            {
              page: "Seat Availability Updates",
              route:
                "/admission-management-system/choices-filling/seat-availability-updates",
            },
            {
              page: "Fill Choices by Priority and lock choices ",
              route:
                "/admission-management-system/choices-filling/fill-choices-by-priority-and-lock-choices",
            },
            {
              page: "Student Preferences Report",
              route:
                "/admission-management-system/choices-filling/student-preferences-report",
            },
            {
              page: "Choice Report",
              route:
                "/admission-management-system/choices-filling/choice-report",
            },
          ],
        },
        {
          subModule: "Document Verification",
          route: "/admission-management-system/document-verification",
          pages: [
            {
              page: "Configure Document Requirement to Verify ",
              route:
                "/admission-management-system/document-verification/configure-document-requirement-toVerify",
            },
            {
              page: "Documents Verification",
              route:
                "/admission-management-system/document-verification/documents-verification",
            },
            {
              page: "Document Verification  Report",
              route:
                "/admission-management-system/document-verification/document-verification-report",
            },
            {
              page: "College-wise Verification  Report",
              route:
                "/admission-management-system/document-verification/collegewise-verification-report",
            },
          ],
        },
        {
          subModule: "Admission Fee",
          route: "/admission/fee",
          pages: [
            { page: "Set Admission Fee", route: "/admission/fee/set" },
            {
              page: "View Fee Structure",
              route: "/admission/fee/view-structure",
            },
            { page: "Make Payment", route: "/admission/fee/make-payment" },
            {
              page: "Payment Verification",
              route: "/admission/fee/payment-verification",
            },
            {
              page: "Payment History Receipt Download",
              route: "/admission/fee/payment-history",
            },
            { page: "Payment Report", route: "/admission/fee/payment-report" },
          ],
        },
      ],
    },
    {
      module: "Transport",
      icon: FaBus,
      route: "/transport-management",
      subModules: [
        {
          subModule: "Transport Management System",
          route: "/transport-management/transport-management-system",
          pages: [
            {
              page: "Vehicle Maintenance Type Master",
              route:
                "/transport-management/transport-management-system/vehicle-maintenance-type-master",
            },
            {
              page: "Vehicle Registration",
              route:
                "/transport-management/transport-management-system/vehicle-registration",
            },
            {
              page: "Vehicle Allotment",
              route:
                "/transport-management/transport-management-system/vehicle-allotment",
            },
            {
              page: "Vehicle Maintenance",
              route:
                "/transport-management/transport-management-system/vehicle-maintenance",
            },
            {
              page: "Vehicle Insurance",
              route:
                "/transport-management/transport-management-system/vehicle-insurance",
            },
            {
              page: "Vehicle Dispose",
              route:
                "/transport-management/transport-management-system/vehicle-dispose",
            },
            {
              page: "Vehicle Deallocation Transfer",
              route:
                "/transport-management/transport-management-system/vehicle-deallocation-transfer",
            },
            {
              page: "Vehicle Maintenance Request",
              route:
                "/transport-management/transport-management-system/vehicle-maintenance-request",
            },
            {
              page: "Vehicle Maintenance Approval",
              route:
                "/transport-management/transport-management-system/vehicle-maintenance-approval",
            },
          ],
        },
        {
          subModule: "College/University Transport",
          route: "/transport-management/university-management-system",
          pages: [
            {
              page: "Route Registration",
              route:
                "/transport-management/university-management-system/route-registration",
            },
            {
              page: "Bus Stop Registration",
              route:
                "/transport-management/university-management-system/bus-stop-registration",
            },
            {
              page: "Route To Bus Stop Mapping",
              route:
                "/transport-management/university-management-system/route-to-bus-stop-mapping",
            },
            {
              page: "Driver Attender Registration",
              route:
                "/transport-management/university-management-system/driver-attender-registration",
            },
            {
              page: "Driver Attender Leave Entry",
              route:
                "/transport-management/university-management-system/driver-attender-leave-entry",
            },
            {
              page: "Route To Vehicle Mapping",
              route:
                "/transport-management/university-management-system/route-to-vehicle-mapping",
            },
            {
              page: "Bus Stop Enrollment",
              route:
                "/transport-management/university-management-system/bus-stop-enrollment",
            },
            {
              page: "Driver Attender Route Details",
              route:
                "/transport-management/university-management-system/driver-attender-route-details",
            },
          ],
        },
        {
          subModule: "Bus Driver Attender Process",
          route: "/transport-management/driver-attender-process",
          pages: [
            {
              page: "View Route Location",
              route:
                "/transport-management/driver-attender-process/view-route-location",
            },
            {
              page: "Route Wise Pickup/Drop",
              route:
                "/transport-management/driver-attender-process/route-wise-pickup-drop",
            },
            {
              page: "Route Details",
              route:
                "/transport-management/driver-attender-process/route-details",
            },
          ],
        },
        {
          subModule: "Parent Process",
          route: "/transport-management/parent-process",
          pages: [
            {
              page: "Inform to Student",
              route: "/transport-management/parent-process/inform-to-student",
            },
            {
              page: "Bus Route Details",
              route: "/transport-management/parent-process/bus-route-details",
            },
            {
              page: "Pickup/Drop Details",
              route: "/transport-management/parent-process/pickup-drop-details",
            },
          ],
        },
        {
          subModule: "Gatekeeper Transport System",
          route: "/transport-management/gatekeeper-transport-system",
          pages: [
            {
              page: "E-Challan Process",
              route:
                "/transport-management/gatekeeper-transport-system/e-challan-process",
            },
            {
              page: "Check Vehicle Details",
              route:
                "/transport-management/gatekeeper-transport-system/check-vehicle-details",
            },
          ],
        },
      ],
    },
    {
      module: "Exam Management",
      icon: FaClipboardList,
      route: "/exam-management",
      subModules: [
        {
          subModule: "Exam Master",
          route: "/exam-management/exam-master",
          pages: [
            {
              page: "Exam Type",
              route: "/exam-management/exam-master/exam-type",
            },
            {
              page: "Add Exam",
              route: "/exam-management/exam-master/add-exam",
            },
          ],
        },
        {
          subModule: "Exam Schedule",
          route: "/exam-management/exam-schedule",
          pages: [
            {
              page: "Schedule Exam",
              route: "/exam-management/exam-schedule/schedule-exam",
            },
            {
              page: "View Exam Schedule",
              route: "/exam-management/exam-schedule/view-exam-schedule",
            },
          ],
        },
        {
          subModule: "Question Papers",
          route: "/exam-management/question-paper",
          pages: [
            {
              page: "Set Question Paper Pattern",
              route:
                "/exam-management/question-paper/set-question-paper-pattern",
            },
            {
              page: "Add Question Paper",
              route: "/exam-management/question-paper/add-question-paper",
            },
          ],
        },
        {
          subModule: "Exam Form",
          route: "/exam-management/exam-form",
          pages: [
            {
              page: "Set last date with/without late fees",
              route: "/exam-management/exam-form/set-last-date",
            },
            {
              page: "Fill Exam Form and Pay Exam Fee",
              route: "/exam-management/exam-form/fill-exam-form",
            },
            {
              page: "Forward Forms Principal",
              route: "/exam-management/exam-form/forward-form",
            },
          ],
        },
        {
          subModule: "Admit Card",
          route: "/exam-management/admit-card",
          pages: [
            {
              page: "Admit Card Download Student",
              route: "/exam-management/admit-card/admit-card-download",
            },
            {
              page: "Admit Card Verification College",
              route: "/exam-management/admit-card/admit-card-verification",
            },
            {
              page: "Generate Admit Card",
              route: "/exam-management/admit-card/generate-admit-card",
            },
          ],
        },
        {
          subModule: "Evaluator",
          route: "/exam-management/evaluator",
          pages: [
            {
              page: "Apply as Evaluator",
              route: "/exam-management/evaluator/apply-as-evaluator",
            },
            {
              page: "Select Evaluators",
              route: "/exam-management/evaluator/select-evaluator",
            },
            {
              page: "Sheet Distribution to Evaluator",
              route:
                "/exam-management/evaluator/sheet-distribution-to-evaluator",
            },
          ],
        },
        {
          subModule: "Result",
          route: "/exam-management/result",
          pages: [
            {
              page: "Result Verification By",
              route: "/exam-management/result/result-verification-by",
            },
            {
              page: "Result Compilation",
              route: "/exam-management/result/result-compliation",
            },
            {
              page: "Marks Entry",
              route: "/exam-management/result/marks-entry",
            },
            {
              page: "Apply for Revaluation",
              route: "/exam-management/result/apply-for-revaluation",
            },
            {
              page: "Apply for Retotaling",
              route: "/exam-management/result/apply-for-retotaling",
            },
            {
              page: "TR Sheet Generation",
              route: "/exam-management/result/tr-sheet-generation",
            },
            {
              page: "Result Verification After Issuing",
              route:
                "/exam-management/result/result-verification-after-issuing",
            },
            {
              page: "Maximum Days for Revaluation",
              route: "/exam-management/result/maximum-days-for-revaluation",
            },
            {
              page: "Result Publication",
              route: "/exam-management/result/result-publication",
            },
            {
              page: "Marksheet Generation",
              route: "/exam-management/result/marksheet-generation",
            },
          ],
        },
        {
          subModule: "Duplicate Marksheet",
          route: "/exam-management/duplicate-marksheet",
          pages: [
            {
              page: "Apply for Duplicate Marksheet",
              route:
                "/exam-management/duplicate-marksheet/apply-for-duplicate-marksheet",
            },
            {
              page: "Download Duplicate Marksheet",
              route:
                "/exam-management/duplicate-marksheet/download-duplicate-marksheet",
            },
            {
              page: "Generate Duplicate Marksheet",
              route:
                "/exam-management/duplicate-marksheet/generate-duplicate-marksheet",
            },
            {
              page: "Duplicate Marksheet Applications",
              route:
                "/exam-management/duplicate-marksheet/duplicate-marksheet-applications",
            },
          ],
        },
      ],
    },
    {
      module: "Student Management",
      icon: FaUserFriends,
      route: "/student-management-system",
      subModules: [
        {
          subModule: "Student Management",
          route: "/student-management-system/student-management",
          pages: [
            {
              page: "Student Attendance",
              route:
                "/student-management-system/student-management/student-attendance",
            },
            {
              page: "Student Attendance Report",
              route:
                "/student-management-system/student-management/attendance-report",
            },
            {
              page: "Student Achievement Tracking",
              route:
                "/student-management-system/student-management/achievement-tracking",
            },
            {
              page: "Student Achievement Tracking Report",
              route:
                "/student-management-system/student-management/achievement-tracking-report",
            },
            {
              page: "Student Tracking",
              route: "/student-management-system/student-management/tracking",
            },
          ],
        },
        {
          subModule: "Student Directory",
          route: "/student-management-system/student-directory",
          pages: [
            {
              page: "Student Registration",
              route:
                "/student-management-system/student-directory/student-registration",
            },
            {
              page: "Student Detail",
              route: "/student-management-system/student-directory/detail",
            },
            {
              page: "Student Promotion TC",
              route:
                "/student-management-system/student-directory/promotion-tc",
            },
            {
              page: "Generate TC",
              route: "/student-management-system/student-directory/generate-tc",
            },
            {
              page: "Print TC",
              route: "/student-management-system/student-directory/print-tc",
            },
            {
              page: "Generate Migration Certificate",
              route:
                "/student-management-system/student-directory/generate-migration-certificate",
            },
            {
              page: "Print Migration Certificate",
              route:
                "/student-management-system/student-directory/print-migration",
            },
          ],
        },
        {
          subModule: "Student Reports",
          route: "/student-management-system/student-report",
          pages: [
            {
              page: "Student Summary Report",
              route:
                "/student-management-system/student-report/student-summary-report",
            },
            {
              page: "Student Wise Counting Report",
              route:
                "/student-management-system/student-report/student-wise-counting-report",
            },
          ],
        },
      ],
    },
    {
      module: "Scheme Management",
      icon: FaGlobe,
      route: "/scheme-management",
      subModules: [
        {
          subModule: "New Scheme Management",
          route: "/scheme-management/new-scheme-management",
          pages: [
            {
              page: "Apply For Scheme",
              route:
                "/scheme-management/new-scheme-management/apply-for-scheme",
            },
            {
              page: "View Scheme Wise Generate List",
              route:
                "/scheme-management/new-scheme-management/view-scheme-wise-generate-list",
            },
            {
              page: "Scheme Wise Generate Payment File",
              route:
                "/scheme-management/new-scheme-management/scheme-wise-generate-payment-file",
            },
          ],
        },
        {
          subModule: "Student Profile Management",
          route: "/scheme-management/student-profile-management",
          pages: [
            {
              page: "Student Profile View Edit Lock",
              route:
                "/scheme-management/student-profile-management/student-profile-view-edit-lock",
            },
            {
              page: "Student Profile Management",
              route:
                "/scheme-management/student-profile-management/student-profile-sub-management",
            },
            {
              page: "Update Student Profile for Scholarships",
              route:
                "/scheme-management/student-profile-management/update-student-profile",
            },
          ],
        },
        {
          subModule: "E-KYC",
          route: "/scheme-management/e-kyc",
          pages: [
            {
              page: "eKYC Verification",
              route: "/scheme-management/e-kyc/e-kyc-verification",
            },
            {
              page: "Student Details KYC",
              route: "/scheme-management/e-kyc/student-details-kyc",
            },
            {
              page: "eKYC Approval",
              route: "/scheme-management/e-kyc/e-kyc-approval",
            },
            {
              page: "Student Samagra e-KYC Approval",
              route: "/scheme-management/e-kyc/student-samagra-e-kyc-approval",
            },
          ],
        },
        {
          subModule: "Scheme Reports",
          route: "/scheme-management/reports",
          pages: [
            {
              page: "Various Level Reports - HO, JD, District, University, College",
              route: "/scheme-management/reports/various-level-reports",
            },
          ],
        },
      ],
    },
    {
      module: "Budget & Finance",
      icon: FaMoneyBillWave,
      route: "/budget-and-finance",
      subModules: [
        {
          subModule: "Finance Master",
          route: "/budget-and-finance/finance-master",
          pages: [
            {
              page: "Group Management",
              route: "/budget-and-finance/finance-master/group-management",
            },
            {
              page: "Ledger Creation Management",
              route:
                "/budget-and-finance/finance-master/ledger-creation-management",
            },
            {
              page: "HSN/SAC Master",
              route: "/budget-and-finance/finance-master/hsn-sac-master",
            },
            {
              page: "Group Wise Ledger List",
              route:
                "/budget-and-finance/finance-master/group-wise-ledger-list",
            },
            {
              page: "Office Wise Ledger List Details",
              route: "/budget-and-finance/finance-master/office-wise-ledger",
            },
            {
              page: "Ledger for Office Mapping",
              route:
                "/budget-and-finance/finance-master/ledger-for-office-mapping",
            },
            {
              page: "Ledger Altercation",
              route: "/budget-and-finance/finance-master/ledger-altercation",
            },
          ],
        },
        {
          subModule: "Proposed Budget Process",
          route: "/budget-and-finance/proposed-budget",
          pages: [
            {
              page: "Proposed Budget",
              route: "/budget-and-finance/proposed-budget/proposed-sub-budget",
            },
            {
              page: "Update Proposed Budget",
              route:
                "/budget-and-finance/proposed-budget/update-proposed-budget",
            },
          ],
        },
        {
          subModule: "Online Budget Demand",
          route: "/budget-and-finance/online-demand-request-process",
          pages: [
            {
              page: "Demand Request Process",
              route:
                "/budget-and-finance/online-demand-request-process/demand-request-process",
            },
            {
              page: "Demand Status Details",
              route:
                "/budget-and-finance/online-demand-request-process/demand-status-details",
            },
            {
              page: "Budget Approval",
              route:
                "/budget-and-finance/online-demand-request-process/budget-approval",
            },
          ],
        },
        {
          subModule: "Budget Approval & Allocation",
          route: "/budget-and-finance/budget-allocation-process",
          pages: [
            // { page: "Approval Authority", route: "/finance/budget-approval-allocation/approval-authority" },
            {
              page: "Budget Allocation Head Wise",
              route:
                "/budget-and-finance/budget-allocation-process/budget-allocation-head-wise",
            },
            {
              page: "Budget Allocation Report",
              route:
                "/budget-and-finance/budget-allocation-process/budget-allocation-report",
            },
            {
              page: "Letter Generate",
              route:
                "/budget-and-finance/budget-allocation-process/budget-allocation-approval-process",
            },
            {
              page: "Budget Assign Report",
              route:
                "/budget-and-finance/budget-allocation-process/budget-assign-report",
            },
            {
              page: "Budget Utilization Report",
              route:
                "/budget-and-finance/budget-allocation-process/budget-utilization-report",
            },
          ],
        },
        {
          subModule: "Voucher Creation",
          route: "/budget-and-finance/voucher-creation",
          pages: [
            {
              page: "Payment Voucher",
              route: "/budget-and-finance/voucher-creation/payment-voucher",
            },
            {
              page: "Receipt Voucher",
              route: "/budget-and-finance/voucher-creation/receipt-voucher",
            },
            {
              page: "Journal Voucher",
              route: "/budget-and-finance/voucher-creation/journal-voucher",
            },
            {
              page: "Contra Voucher",
              route: "/budget-and-finance/voucher-creation/contra-voucher",
            },
            {
              page: "Service Purchase Voucher",
              route:
                "/budget-and-finance/voucher-creation/service-purchase-voucher",
            },
          ],
        },
        {
          subModule: "Finance Reports",
          route: "/budget-and-finance/expenses-report",
          pages: [
            {
              page: "Expenses Report",
              route: "/budget-and-finance/finance-report/expenses-report",
            },
            {
              page: "Office Wise Budget Allocation Report",
              route:
                "/budget-and-finance/finance-report/office-wise-budget-allocation-report",
            },
            {
              page: "Day Book Single",
              route: "/budget-and-finance/finance-report/day-book-single",
            },
            {
              page: "Custom Day Book",
              route: "/budget-and-finance/finance-report/custom-day-book",
            },
            {
              page: "Ledger Report",
              route: "/budget-and-finance/finance-report/ledger-report",
            },
            {
              page: "Cash Bank Book",
              route: "/budget-and-finance/finance-report/cash-bank-book",
            },
            {
              page: "Statistics",
              route: "/budget-and-finance/finance-report/statistics",
            },
            {
              page: "Alphabetical Ledger Report",
              route:
                "/budget-and-finance/finance-report/alphabetical-ledger-report",
            },
          ],
        },
      ],
    },
    {
      module: "Guest Faculty",
      icon: FaChalkboardTeacher,
      route: "/guest-faculty",
      subModules: [
        {
          subModule: "Guest Faculty Login",
          route: "/guest-faculty/login",
          pages: [
            {
              page: "Guest Faculty Registration",
              route: "/guest-faculty/login/registration",
            },
            {
              page: "Guest Faculty Login",
              route: "/guest-faculty/login/login",
            },
            {
              page: "Profile View",
              route: "/guest-faculty/login/profile-view",
            },
            {
              page: "Qualification Experience Information",
              route: "/guest-faculty/login/qualification-experience",
            },
            {
              page: "Apply Against Vacancy",
              route: "/guest-faculty/login/apply-against-vacancy",
            },
            {
              page: "Claim Experience Certificate",
              route: "/guest-faculty/login/claim-experience-certificate",
            },
            {
              page: "Print Experience Claim",
              route: "/guest-faculty/login/print-experience-claim",
            },
            {
              page: "Generate Score Card",
              route: "/guest-faculty/login/generate-score-card",
            },
          ],
        },
        {
          subModule: "College Login",
          route: "/guest-faculty/college-login",
          pages: [
            {
              page: "Vacant Post",
              route: "/guest-faculty/college-login/vacant-post",
            },
            {
              page: "View Applied Profile",
              route: "/guest-faculty/college-login/view-applied-profile",
            },
            {
              page: "Selection and Register Profile for Guest Faculty",
              route: "/guest-faculty/college-login/selection-register-profile",
            },
          ],
        },
        {
          subModule: "University Login",
          route: "/guest-faculty/university-login",
          pages: [
            {
              page: "Vacant Post",
              route: "/guest-faculty/university-login/vacant-post",
            },
            {
              page: "View Applied Profile all Colleges",
              route:
                "/guest-faculty/university-login/view-applied-profile-colleges",
            },
            {
              page: "View Approved and Registered Profile all Colleges",
              route:
                "/guest-faculty/university-login/view-approved-registered-colleges",
            },
          ],
        },
        {
          subModule: "TED Login",
          route: "/guest-faculty/ted-login",
          pages: [
            {
              page: "Vacant Post",
              route: "/guest-faculty/ted-login/vacant-post",
            },
            {
              page: "View Applied Profile all University and Colleges",
              route: "/guest-faculty/ted-login/view-applied-profile-all",
            },
            {
              page: "View Approved and Registered Profile all University and Colleges",
              route: "/guest-faculty/ted-login/view-approved-registered-all",
            },
          ],
        },
      ],
    },
    {
      module: "CMS Portal College",
      icon: FaUniversity,
      route: "/cms-college",
      subModules: [
        {
          subModule: "About Us",
          route: "/cms-college/about",
          pages: [
            { page: "At a Glance", route: "/cms-college/about/at-a-glance" },
            {
              page: "Principal Message",
              route: "/cms-college/about/principal-message",
            },
            { page: "Societies", route: "/cms-college/about/societies" },
            {
              page: "Vision-Mission",
              route: "/cms-college/about/vision-mission",
            },
            { page: "Objectives", route: "/cms-college/about/objectives" },
            { page: "How to Reach", route: "/cms-college/about/how-to-reach" },
            { page: "Who is Who", route: "/cms-college/about/who-is-who" },
          ],
        },
        {
          subModule: "Infrastructure",
          route: "/cms-college/infrastructure",
          pages: [
            { page: "Building", route: "/cms-college/infrastructure/building" },
            { page: "Library", route: "/cms-college/infrastructure/library" },
            { page: "Canteen", route: "/cms-college/infrastructure/canteen" },
            { page: "Hostel", route: "/cms-college/infrastructure/hostel" },
            { page: "Sports", route: "/cms-college/infrastructure/sports" },
          ],
        },
        {
          subModule: "Academics",
          route: "/cms-college/academics",
          pages: [
            {
              page: "Departments",
              route: "/cms-college/academics/departments",
            },
            {
              page: "Regular Courses",
              route: "/cms-college/academics/regular-courses",
            },
            {
              page: "Distance Education Courses",
              route: "/cms-college/academics/distance-education",
            },
            { page: "Prospectus", route: "/cms-college/academics/prospectus" },
            { page: "Time table", route: "/cms-college/academics/time-table" },
            { page: "Research", route: "/cms-college/academics/research" },
          ],
        },
        {
          subModule: "Students",
          route: "/cms-college/students",
          pages: [
            {
              page: "Student Details",
              route: "/cms-college/students/student-details",
            },
            {
              page: "List of Topper Students",
              route: "/cms-college/students/list-of-toppers",
            },
            { page: "E-Learning", route: "/cms-college/students/e-learning" },
            { page: "Scholarship", route: "/cms-college/students/scholarship" },
            { page: "Alumni", route: "/cms-college/students/alumni" },
          ],
        },
        {
          subModule: "NAAC",
          route: "/cms-college/naac",
          pages: [
            { page: "NAAC Award", route: "/cms-college/naac/naac-award" },
            { page: "Self Study Report (SSR)", route: "/cms-college/naac/ssr" },
            {
              page: "Recommendations of Previous Cycle",
              route: "/cms-college/naac/recommendations",
            },
            { page: "IQAC", route: "/cms-college/naac/iqac" },
            {
              page: "Institutional Distinctiveness",
              route: "/cms-college/naac/institutional-distinctiveness",
            },
          ],
        },
        {
          subModule: "Highlights",
          route: "/cms-college/highlights",
          pages: [
            {
              page: "Highlights of Achievements",
              route: "/cms-college/highlights/achievements",
            },
            {
              page: "New Course Started",
              route: "/cms-college/highlights/new-course-started",
            },
            {
              page: "Best Practices, Green Initiative",
              route: "/cms-college/highlights/best-practices",
            },
            {
              page: "Idea House, Idea Hub",
              route: "/cms-college/highlights/idea-house-hub",
            },
          ],
        },
        {
          subModule: "Governance & Activities",
          route: "/cms-college/governance",
          pages: [
            { page: "Policies", route: "/cms-college/governance/policies" },
            { page: "Audits", route: "/cms-college/governance/audits" },
            {
              page: "Research Activities",
              route: "/cms-college/governance/research-activities",
            },
            {
              page: "Extension Activities",
              route: "/cms-college/governance/extension-activities",
            },
            { page: "Placement", route: "/cms-college/governance/placement" },
          ],
        },
        {
          subModule: "Others",
          route: "/cms-college/others",
          pages: [
            { page: "RUSA", route: "/cms-college/others/rusa" },
            { page: "World Bank", route: "/cms-college/others/world-bank" },
            {
              page: "Press Release",
              route: "/cms-college/others/press-release",
            },
            { page: "MOU", route: "/cms-college/others/mou" },
            {
              page: "Extra Co-Curricular",
              route: "/cms-college/others/extra-co-curricular",
            },
            { page: "NCC, NSS", route: "/cms-college/others/ncc-nss" },
          ],
        },
        {
          subModule: "General",
          route: "/cms-college/general",
          pages: [
            { page: "CMS Login", route: "/cms-college/general/cms-login" },
            { page: "Contact Us", route: "/cms-college/general/contact-us" },
            { page: "English/Hindi", route: "/cms-college/general/language" },
            { page: "Events", route: "/cms-college/general/events" },
            {
              page: "Notifications",
              route: "/cms-college/general/notifications",
            },
            { page: "Images", route: "/cms-college/general/images" },
            {
              page: "Video Gallery",
              route: "/cms-college/general/video-gallery",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebarMenu;
