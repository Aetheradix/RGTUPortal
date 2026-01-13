import {
  FaBook,
  FaBookReader,
  FaBus,
  FaChalkboardTeacher,
  FaClipboardList,
  FaCogs,
  FaGlobe,
  FaHandsHelping,
  FaHome,
  FaMoneyBillWave,
  FaMoneyCheckAlt,
  FaUniversity,
  FaUserFriends,
  FaUserGraduate,
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
      module: "Employee Directory Management",
      icon: FaHome,
      route: "/employee-directory-management",
      subModules: [
        {
          subModule: "Employee Directory Management",
          route: "/employee-directory-management/employee-diirectory",
          pages: [
            {
              page: "Employee Directory",
              route:
                "/employee-directory-management/employee-directory/employee-directory",
            },
            {
              page: "Official Details Update",
              route:
                "/employee-directory-management/employee-directory/official-details-update",
            },
            {
              page: "Official Details Update-Sub",
              route:
                "/employee-directory-management/employee-directory/official-details-update-sub",
            },
            {
              page: "Employee Data Change Request",
              route:
                "/employee-directory-management/employee-directory/employee-data-chnage",
            },
            {
              page: "Employee Verification",
              route:
                "/employee-directory-management/employee-directory/employee-verification",
            },
            {
              page: "Employee Verification PDF",
              route:
                "/employee-directory-management/employee-directory/employee-verification-pdf",
            },
            {
              page: "Employee Verification-Sub",
              route:
                "/employee-directory-management/employee-directory/employee-verification-sub",
            },
            {
              page: "Employee Verification HO Level",
              route:
                "/employee-directory-management/employee-directory/employee-verification-ho",
            },
            {
              page: "Exam Wise Employee Enrollment",
              route:
                "/employee-directory-management/employee-directory/exam-wise-employee-enrollment",
            },
          ],
        },
        {
          subModule: "Employee ID Card Management",
          route: "/employee-directory-management/employee-id-card-management",
          pages: [
            {
              page: "Print Employee Card",
              route:
                "/employee-directory-management/employee-id-card-management/print-employee-card",
            },
            {
              page: "Approve Employee Id Card",
              route:
                "/employee-directory-management/employee-id-card-management/approve-employee-id-card",
            },
            {
              page: "Employee ID Card Generate",
              route:
                "/employee-directory-management/employee-id-card-management/employee-id-card-generate",
            },
          ],
        },
        {
          subModule: "Employee ID Card Reports",
          route: "/employee-directory-management/employee-id-card-reports",
          pages: [
            {
              page: "District Wise ID Card",
              route:
                "/employee-directory-management/employee-id-card-reports/district-wise-id-card",
            },
            {
              page: "College Wise ID Card",
              route:
                "/employee-directory-management/employee-id-card-reports/college-wise-id-card",
            },
            {
              page: "Missing Employee Details",
              route:
                "/employee-directory-management/employee-id-card-reports/employee-missing-details",
            },
          ],
        },
        {
          subModule: "Employee Reports",
          route: "/employee-directory-management/employee-reports",
          pages: [
            {
              page: "Change Request Verification Statistic Report",
              route:
                "/employee-directory-management/employee-reports/change-request-verification-report",
            },
            {
              page: "Employee Verification Statistic Report",
              route:
                "/employee-directory-management/employee-reports/employee-verification-statistic-report",
            },
            {
              page: "Employee Details Report",
              route:
                "/employee-directory-management/employee-reports/employee-details-report",
            },
            {
              page: "Exam Wise Employee Enrollment Report",
              route:
                "/employee-directory-management/employee-reports/exam-wise-enrollment-report",
            },
            {
              page: "Employee Verification Report",
              route:
                "/employee-directory-management/employee-reports/employee-verification-report",
            },
            {
              page: "Handicapped Employees Report",
              route:
                "/employee-directory-management/employee-reports/handicapped-employees-report",
            },
            {
              page: "Employee Customized Report",
              route:
                "/employee-directory-management/employee-reports/employee-customized-report",
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
          subModule: "Allotment Letter",
          route: "/admission-management-system/allotment-letter",
          pages: [
            {
              page: "Get Allotment Letter",
              route:
                "/admission-management-system/allotment-letter/get-allotment-letter",
            },
            {
              page: "Generate Allotment Letters",
              route:
                "/admission-management-system/allotment-letter/generate-allotment-letters",
            },
            {
              page: "Manage Allotment Status",
              route:
                "/admission-management-system/allotment-letter/manage-allotment-status",
            },
            {
              page: "College Wise Allotment Status",
              route:
                "/admission-management-system/allotment-letter/college-wise-allotment-status",
            },
          ],
        },
        {
          subModule: "Admission Fee",
          route: "/admission-management-system/admission-fee",
          pages: [
            {
              page: "Set Admission Fee",
              route:
                "/admission-management-system/admission-fee/set-admission-fee",
            },
            {
              page: "View Fee Structure",
              route:
                "/admission-management-system/admission-fee/view-fee-structure",
            },
            {
              page: "Make Payment",
              route: "/admission-management-system/admission-fee/make-payment",
            },
            {
              page: "Payment Verification",
              route:
                "/admission-management-system/admission-fee/payment-verification",
            },
            {
              page: "Payment History Receipt Download",
              route:
                "/admission-management-system/admission-fee/payment-history-and-receipt-download",
            },
            {
              page: "Payment Report",
              route:
                "/admission-management-system/admission-fee/payment-report",
            },
          ],
        },
        {
          subModule: "Merit List",
          route: "/admission-management-system/merit-list",
          pages: [
            {
              page: "Candidates Rrank",
              route: "/admission-management-system/merit-list/candidates-rank",
            },
            {
              page: "Genrate Merit List",
              route:
                "/admission-management-system/merit-list/genrate-marit-list",
            },
            {
              page: "Merit List",
              route: "/admission-management-system/merit-list/merit-list",
            },
            {
              page: "Set Tie Braking Criteria of Rank",
              route:
                "/admission-management-system/merit-list/set-tie-braking-criteria-of-rank",
            },
          ],
        },
        {
          subModule: "Seat Allocation ",
          route: "/admission-management-system/seat-allocation",
          pages: [
            {
              page: "View Allocation Status",
              route:
                "/admission-management-system/seat-allocation/view-allocation-status",
            },
            {
              page: "Accept/Reject Allocation",
              route:
                "/admission-management-system/seat-allocation/accept-reject-allocation",
            },
            {
              page: "Reserved Categories/Quota (Hed)",
              route:
                "/admission-management-system/seat-allocation/reserved-categories-quota",
            },
            {
              page: "Set Categories/Quota Percentages (Hed)",
              route:
                "/admission-management-system/seat-allocation/set-categories-quota-percentages",
            },
            {
              page: "Seat Allocation per Course  (Hed/University)",
              route:
                "/admission-management-system/seat-allocation/seat-allocation-per-course",
            },
            {
              page: "Seat  Acceptance Window (College,University)",
              route:
                "/admission-management-system/seat-allocation/seat-acceptance-window",
            },
            {
              page: "View Available Seats",
              route:
                "/admission-management-system/seat-allocation/view-available-seats",
            },
            {
              page: "Allocation Report ",
              route:
                "/admission-management-system/seat-allocation/allocation-report",
            },
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
              route: "/guest-faculty/login/score-card",
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
      route: "/cms-portal",
      subModules: [
        {
          subModule: "About Us",
          route: "/cms-portal/about-us",
          pages: [
            { page: "At a Glance", route: "/cms-portal/about-us/at-a-glance" },
            {
              page: "Principal Message",
              route: "/cms-portal/about-us/principal-message",
            },
            { page: "Societies", route: "/cms-portal/about-us/societies" },
            {
              page: "Vision-Mission",
              route: "/cms-portal/about-us/vision-mission",
            },
            { page: "Objectives", route: "/cms-portal/about-us/objectives" },
            {
              page: "How to Reach",
              route: "/cms-portal/about-us/how-to-reach",
            },
            { page: "Who is Who", route: "/cms-portal/about-us/who-is-who" },
          ],
        },
        {
          subModule: "Infrastructure",
          route: "/cms-portal/infrastructure",
          pages: [
            { page: "Building", route: "/cms-portal/infrastructure/building" },
            { page: "Library", route: "/cms-portal/infrastructure/library" },
            { page: "Canteen", route: "/cms-portal/infrastructure/canteen" },
            { page: "Hostel", route: "/cms-portal/infrastructure/hostel" },
            { page: "Sports", route: "/cms-portal/infrastructure/sports" },
          ],
        },
        {
          subModule: "National Assessment And Accreditation Council",
          route: "/cms-portal/national-assessment-and-accredition-council",
          pages: [
            {
              page: "Award",
              route:
                "/cms-portal/national-assessment-and-accredition-council/award",
            },
            {
              page: "Audits",
              route:
                "/cms-portal/national-assessment-and-accredition-council/audits",
            },
            {
              page: "Idea House Idea Hub",
              route:
                "/cms-portal/national-assessment-and-accredition-council/idea-house-idea-hub",
            },
            {
              page: "Best Practices Green Initiative",
              route:
                "/cms-portal/national-assessment-and-accredition-council/best-practices-green-initiative",
            },
            {
              page: "Extension Activities",
              route:
                "/cms-portal/national-assessment-and-accredition-council/extension-activities",
            },
            {
              page: "Highlights of Achievements",
              route:
                "/cms-portal/national-assessment-and-accredition-council/highlights-of-achievements",
            },
            {
              page: "Self Study Report",
              route:
                "/cms-portal/national-assessment-and-accredition-council/self-study-report",
            },
            {
              page: "IQAC",
              route:
                "/cms-portal/national-assessment-and-accredition-council/iqac",
            },
            {
              page: "Institutional Distinctiveness",
              route:
                "/cms-portal/national-assessment-and-accredition-council/institutional-distinctiveness",
            },
            {
              page: "New Course Started",
              route:
                "/cms-portal/national-assessment-and-accredition-council/new-course-started",
            },
            {
              page: "Policies",
              route:
                "/cms-portal/national-assessment-and-accredition-council/policies",
            },
            {
              page: "Recommendation of Previous Cycle",
              route:
                "/cms-portal/national-assessment-and-accredition-council/recommendation-of-previous-cycle",
            },
            {
              page: "Research Activities",
              route:
                "/cms-portal/national-assessment-and-accredition-council/research-activities",
            },
          ],
        },
        {
          subModule: "Academics",
          route: "/cms-portal/academics",
          pages: [
            {
              page: "Departments",
              route: "/cms-portal/academics/departments",
            },
            {
              page: "Regular Courses",
              route: "/cms-portal/academics/regular-courses",
            },
            {
              page: "Distance Education Courses",
              route: "/cms-portal/academics/distance-education",
            },
            { page: "Prospectus", route: "/cms-portal/academics/prospectus" },
            { page: "Time table", route: "/cms-portal/academics/time-table" },
            { page: "Research", route: "/cms-portal/academics/research" },
          ],
        },
        {
          subModule: "Students",
          route: "/cms-portal/students",
          pages: [
            {
              page: "List Of Topper Students",
              route: "/cms-portal/students/list-of-topper-students",
            },
            {
              page: "Student Details",
              route: "/cms-portal/students/student-details",
            },
            { page: "ELearning", route: "/cms-portal/students/e-learning" },
          ],
        },
        {
          subModule: "Others",
          route: "/cms-portal/others",
          pages: [
            { page: "Login", route: "/cms-portal/others/cms-login" },
            {
              page: "English / Hindi",
              route: "/cms-portal/others/english-hindi",
            },
            { page: "Contact Us", route: "/cms-portal/others/contact-us" },
            { page: "Events", route: "/cms-portal/others/events" },
            {
              page: "Extra Co-Curricular",
              route: "/cms-portal/others/extra-co-curricular",
            },
            {
              page: "Image Gallery",
              route: "/cms-portal/others/image-gallery",
            },
            { page: "MOU", route: "/cms-portal/others/mou" },
            { page: "NCC / NSS", route: "/cms-portal/others/ncc-nss" },
            {
              page: "Notifications",
              route: "/cms-portal/others/notifications",
            },
            {
              page: "Press Release",
              route: "/cms-portal/others/press-release",
            },
            { page: "RUSA", route: "/cms-portal/others/rusa" },
            {
              page: "Video Gallery",
              route: "/cms-portal/others/video-gallery",
            },
            {
              page: "World Bank Programs",
              route: "/cms-portal/others/world-bank",
            },
          ],
        },
      ],
    },
    {
      module: "Employee Annual Property Returns Management System",
      icon: FaUniversity,
      route: "/aprms",
      subModules: [
        {
          subModule: "APRMS",
          route: "/aprms/employee-aprms",
          pages: [
            {
              page: "Employee APR Form",
              route: "/aprms/employee-aprms/employee-apr-form",
            },
            {
              page: "Employee APR Form Print",
              route: "/aprms/employee-aprms/employee-apr-form-print",
            },
            {
              page: "Upload APR Form Document",
              route: "/aprms/employee-aprms/upload-apr-form-document",
            },
            {
              page: "Employee APR Report",
              route: "/aprms/employee-aprms/employee-apr-report",
            },
            {
              page: "APRMS District Wise Report",
              route: "/aprms/employee-aprms/aprms-district-wise-report",
            },
          ],
        },
      ],
    },
    {
      module: "Department Enquiry Management",
      icon: FaUniversity,
      route: "/department-enquiry-management",
      subModules: [
        {
          subModule: "Department Enquiry Management",
          route: "/department-enquiry-management/department-enquiry",
          pages: [
            {
              page: "Fill Department Enquiry Details",
              route:
                "/department-enquiry-management/department-enquiry/fill-department-enquiry-details",
            },
            {
              page: "Update Department Enquiry",
              route:
                "/department-enquiry-management/department-enquiry/update-department-enquiry",
            },
          ],
        },
        {
          subModule: "Department Enquiry Report",
          route: "/department-enquiry-management/department-enquiry-report",
          pages: [
            {
              page: "Department Enquiry Report",
              route:
                "/department-enquiry-management/department-enquiry-report/report",
            },
          ],
        },
      ],
    },
    {
      module: "Tour Management",
      icon: FaUniversity,
      route: "/tour-management",
      subModules: [
        {
          subModule: "Tour Management",
          route: "/tour-management-system/tour-management",
          pages: [
            {
              page: "Apply Tour",
              route: "/tour-management-system/tour-management/apply-tour",
            },
            {
              page: "Approve Tour",
              route: "/tour-management-system/tour-management/approve-tour",
            },
          ],
        },
        {
          subModule: "Tour Report",
          route: "/tour-management-system/tour-report",
          pages: [
            {
              page: "Tour Report",
              route: "/tour-management-system/tour-report/report",
            },
          ],
        },
      ],
    },
    {
      module: "OIS Setup",
      icon: FaUniversity,
      route: "/ois",
      subModules: [
        {
          subModule: "OIS Registration",
          route: "/ois/ois-registration",
          pages: [
            {
              page: "Office Registration",
              route: "/ois/ois-registration/office-registration-form",
            },
            {
              page: "Institute Registration",
              route: "/ois/ois-registration/institute-registration-form",
            },
            {
              page: "School Registration",
              route: "/ois/ois-registration/school-registration-form",
            },
            { page: "Edit School", route: "/ois/ois-registration/edit-school" },
            {
              page: "Edit School Details",
              route: "/ois/ois-registration/edit-school-details",
            },
          ],
        },
        {
          subModule: "OIS Setup",
          route: "/ois/ois-setup",
          pages: [
            { page: "Office Setup", route: "/ois/ois-setup/office-setup" },
            {
              page: "Institute Setup",
              route: "/ois/ois-setup/institute-setup",
            },
            { page: "School Setup", route: "/ois/ois-setup/school-setup" },
            { page: "HSS Setup", route: "/ois/ois-setup/hss-setup" },
            {
              page: "MPBSE Enrollment Class 9 To 12",
              route: "/ois/ois-setup/mpbse-enrollment-class-9-to-12",
            },
            {
              page: "MPBSE Enrollment Report",
              route: "/ois/ois-setup/mpbse-enrollment-report",
            },
          ],
        },
        {
          subModule: "OIS Master",
          route: "/ois/ois-master",
          pages: [
            { page: "Varg Master", route: "/ois/ois-master/varg-master" },
            {
              page: "Varg to Sub Category Mapping",
              route: "/ois/ois-master/varg-to-subcategory-mapping",
            },
            { page: "Panel Master", route: "/ois/ois-master/panel-master" },
            {
              page: "Panel To Designation Mapping",
              route: "/ois/ois-master/panel-to-designation-mapping",
            },
          ],
        },
        {
          subModule: "OIS Report",
          route: "/ois/ois-report",
          pages: [
            {
              page: "School Setup Report",
              route: "/ois/ois-report/school-setup-report",
            },
            {
              page: "Office Setup Details Report",
              route: "/ois/ois-report/office-setup-details-report",
            },
            {
              page: "Institute Setup Details Report",
              route: "/ois/ois-report/institute-setup-details-report",
            },
            {
              page: "District Wise Publish",
              route: "/ois/ois-report/district-wise-publish",
            },
            {
              page: "Post Code Report",
              route: "/ois/ois-report/post-code-report",
            },
          ],
        },
      ],
    },
    {
      module: "Hostel Management",
      icon: FaUniversity,
      route: "/hostel-management",
      subModules: [
        {
          subModule: "Hostel Management",
          route: "/hostel-management-system/hostel-management",
          pages: [
            {
              page: "Hostel Registration",
              route:
                "/hostel-management-system/hostel-management/hostel-registration",
            },
            {
              page: "Student Application Report",
              route:
                "/hostel-management-system/hostel-management/student-application-report",
            },
          ],
        },
      ],
    },
    {
      module: "Compassion Management",
      icon: FaHandsHelping,
      route: "/compassion-management",
      subModules: [
        {
          subModule: "Compassion",
          route: "/compassion-management/compassion",
          pages: [
            {
              page: "Compassionate Appointment",
              route: "/compassion-management/compassion/compassion-appointment",
            },
            {
              page: "Compassion Verification",
              route:
                "/compassion-management/compassion/compassion-verification",
            },
            {
              page: "Compassion Apply",
              route: "/compassion-management/compassion/compassion-apply",
            },
            {
              page: "DEO Compassion Apply",
              route: "/compassion-management/compassion/deo-compassion-apply",
            },
            {
              page: "DEO NOC Certificate Release",
              route:
                "/compassion-management/compassion/deo-noc-certification-release",
            },
            {
              page: "Generate & Forward NOC Request",
              route:
                "/compassion-management/compassion/generate-and-forward-noc-request",
            },
            {
              page: "Update NOC Job Status",
              route: "/compassion-management/compassion/update-noc-job-status",
            },
            {
              page: "Final Decision",
              route: "/compassion-management/compassion/final-decision",
            },
          ],
        },
        {
          subModule: "Compassion Reports",
          route: "/compassion-management/compassion-report",
          pages: [
            {
              page: "Disposed Application Report",
              route:
                "/compassion-management/compassion-report/dispossed-application-report",
            },
            {
              page: "District Wise Statistical Count Report",
              route:
                "/compassion-management/compassion-report/district-wise-statistical-count-report",
            },
            {
              page: "NOC Report",
              route: "/compassion-management/compassion-report/noc-report",
            },
            {
              page: "NOC Statistical Count Report",
              route:
                "/compassion-management/compassion-report/noc-statistical-count-report",
            },
          ],
        },
      ],
    },
    {
      module: "Payroll",
      icon: FaMoneyCheckAlt,
      route: "/payroll",
      subModules: [
        {
          subModule: "Payroll Reports",
          route: "/payroll/payroll-reports",
          pages: [
            {
              page: "Tax Challan Report",
              route: "/payroll/payroll-reports/tax-challan-report",
            },
            {
              page: "Salary Generation Status Report",
              route: "/payroll/payroll-reports/salary-generation-status-report",
            },
            {
              page: "Bank Wise Monthly Pay Bill",
              route: "/payroll/payroll-reports/bank-wise-monthly-pay-bill",
            },
            {
              page: "Employee Salary Ledger",
              route: "/payroll/payroll-reports/employee-salary-ledger",
            },
            {
              page: "Employee Wise Salary Slip",
              route: "/payroll/payroll-reports/employee-wise-salary-slip",
            },
            {
              page: "Final Summary Report",
              route: "/payroll/payroll-reports/final-summary-report",
            },
            {
              page: "Financial Year Earn Deduction",
              route: "/payroll/payroll-reports/financial-year-earn-deduction",
            },
            {
              page: "Monthly Earning Deduction Report",
              route:
                "/payroll/payroll-reports/monthly-earning-deduction-report",
            },
            {
              page: "Monthly Pay Bill",
              route: "/payroll/payroll-reports/monthly-pay-bill",
            },
            {
              page: "Monthly Policy Report",
              route: "/payroll/payroll-reports/monthly-policy-report",
            },
            {
              page: "Office Salary Slip",
              route: "/payroll/payroll-reports/office-salary-slip",
            },
          ],
        },
        {
          subModule: "Gratuity",
          route: "/payroll/gratuity",
          pages: [
            { page: "Gratuity File", route: "/payroll/gratuity/gratuity-file" },
          ],
        },
        {
          subModule: "Leave Encashment",
          route: "/payroll/leave-encashment",
          pages: [
            {
              page: "Leave Encashments",
              route: "/payroll/leave-encashment/leave-encashments",
            },
          ],
        },
        {
          subModule: "Payroll Baseline Data",
          route: "/payroll/payroll-baseline-data",
          pages: [
            {
              page: "Baseline Data",
              route: "/payroll/payroll-baseline-data/earning-and-deduction",
            },
          ],
        },
        {
          subModule: "Salary Process",
          route: "/payroll/salary-process",
          pages: [
            {
              page: "Set Attendance",
              route: "/payroll/salary-process/set-attendance",
            },
            {
              page: "Generate Salary",
              route: "/payroll/salary-process/generate-salary",
            },
            {
              page: "Salary Proccess",
              route: "/payroll/salary-process/salary-proccess",
            },
          ],
        },
        {
          subModule: "Set Head Value",
          route: "/payroll/set-head-value",
          pages: [
            { page: "Head Value", route: "/payroll/set-head-value/set-head" },
          ],
        },
      ],
    },
    {
      module: "Vocational Management",
      icon: FaBookReader,
      route: "/vocational-management",
      subModules: [
        {
          subModule: "Vocational Master",
          route: "/vocational-management/vocational-master",
          pages: [
            {
              page: "Vocational Trade Master",
              route:
                "/vocational-management/vocational-master/vocational-trade-master",
            },
            {
              page: "Job Role Master",
              route: "/vocational-management/vocational-master/job-role-master",
            },
            {
              page: "Vocational Scheme Master",
              route:
                "/vocational-management/vocational-master/vocational-scheme-master",
            },
          ],
        },
        {
          subModule: "Registration",
          route: "/vocational-management/registraion",
          pages: [
            {
              page: "Vocational Teacher Registration",
              route:
                "/vocational-management/registration/vocational-teacher-registration",
            },
            {
              page: "Add VTP Registration",
              route: "/vocational-management/registration/add-vtp-registration",
            },
          ],
        },
        {
          subModule: "Vocational Activity and Mapping",
          route: "/vocational-management/activity-mapping",
          pages: [
            {
              page: "Vocational Teacher Class Mapping",
              route:
                "/vocational-management/vocational-activity-and-mapping/vocational-teacher-class-mapping",
            },
            {
              page: "Vocational Student Activity",
              route:
                "/vocational-management/vocational-activity-and-mapping/vocational-student-activity",
            },
          ],
        },
        {
          subModule: "Certificate Distribution",
          route: "/vocational-management/certificate-distribution",
          pages: [
            {
              page: "Vocational Certificate Download",
              route:
                "/vocational-management/certificate-distribution/vocational-certificate-download",
            },
            {
              page: "Vocational Certificate Distribution Google link",
              route:
                "/vocational-management/certificate-distribution/vocational-certificate-distribution-google-link",
            },
          ],
        },
        {
          subModule: "Vocational Payment",
          route: "/vocational-management/vocational-payment",
          pages: [
            {
              page: "VTP Payment",
              route: "/vocational-management/vocational-payment/vtp-payment",
            },
            {
              page: "VTP Payment Generate",
              route:
                "/vocational-management/vocational-payment/vtp-payment-generate",
            },
            {
              page: "VTP Payment Status",
              route:
                "/vocational-management/vocational-payment/vtp-payment-status",
            },
          ],
        },
        {
          subModule: "Vocational Management Reports",
          route: "/vocational-management/vocational-management-reports",
          pages: [
            {
              page: "Vocational Teacher Class Mapping Report",
              route:
                "/vocational-management/vocational-management-reports/vocational-teacher-class-mapping-report",
            },
            {
              page: "District Wise Vocational Certificate Distribution",
              route:
                "/vocational-management/vocational-management-reports/district-wise-vocational-certificate-distribution",
            },
            {
              page: "Vocational Certificate Distribution Report",
              route:
                "/vocational-management/vocational-management-reports/vocational-certificate-distribution-report",
            },
          ],
        },
      ],
    },
  ],
};

export default sidebarMenu;
