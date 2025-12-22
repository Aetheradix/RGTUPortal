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
                        { page: "Mark Attendance", route: "/academics/attendance-management/mark-attendance" },
                        {
                            page: "Attendance Policies",
                            route: "/academics/attendance-management/attendance-policy-master",
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
                            route: "/academics/syllabus-and-study-material/study-material-add",
                        },
                        {
                            page: "Saved Notes And Videos",
                            route: "/academics/syllabus-and-study-material/saved-notes-and-videos",
                        },
                        {
                            page: "View Study Materials",
                            route: "/academics/syllabus-and-study-material/view-study-materials",
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
                            route: "/transport-management/transport-management-system/vehicle-maintenance-request",
                        },
                        {
                            page: "Vehicle Maintenance Approval",
                            route: "/transport-management/transport-management-system/vehicle-maintenance-approval",
                        },
                    ],
                },
                {
                    subModule: "College/University Transport",
                    route: "/transport-management/university-management-system",
                    pages: [
                        {
                            page: "Route Registration",
                            route: "/transport-management/university-management-system/route-registration",
                        },
                        {
                            page: "Bus Stop Registration",
                            route: "/transport-management/university-management-system/bus-stop-registration",
                        },
                        {
                            page: "Route To Bus Stop Mapping",
                            route: "/transport-management/university-management-system/route-bus-stop-mapping",
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
                            route: "/transport-management/university-management-system/route-vehicle-mapping",
                        },
                        {
                            page: "Bus Stop Enrollment",
                            route: "/transport-management/university-management-system/bus-stop-enrollment",
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
                    route: "/transport/driver-attender-process",
                    pages: [
                        {
                            page: "View Route Location",
                            route: "/transport/driver-attender-process/view-route-location",
                        },
                        {
                            page: "Route Wise Pickup/Drop",
                            route:
                                "/transport/driver-attender-process/route-wise-pickup-drop",
                        },
                        {
                            page: "Route Details",
                            route: "/transport/driver-attender-process/route-details",
                        },
                    ],
                },
                {
                    subModule: "Parent Process",
                    route: "/transport/parent-process",
                    pages: [
                        {
                            page: "Inform to Student",
                            route: "/transport/parent-process/inform-student",
                        },
                        {
                            page: "Bus Route Details",
                            route: "/transport/parent-process/bus-route-details",
                        },
                        {
                            page: "Pickup/Drop Details",
                            route: "/transport/parent-process/pickup-drop-details",
                        },
                    ],
                },
                {
                    subModule: "Gatekeeper Transport System",
                    route: "/transport/gatekeeper",
                    pages: [
                        {
                            page: "E-Challan Process",
                            route: "/transport/gatekeeper/e-challan",
                        },
                        {
                            page: "Check Vehicle Details",
                            route: "/transport/gatekeeper/check-vehicle-details",
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
                            route: "/student-management-system/student-management/student-attendance",
                        },
                        {
                            page: "Student Attendance Report",
                            route: "/student-management-system/student-management/attendance-report",
                        },
                        {
                            page: "Student Achievement Tracking",
                            route: "/student-management-system/student-management/achievement-tracking",
                        },
                        {
                            page: "Student Achievement Tracking Report",
                            route: "/student-management-system/student-management/achievement-tracking-report",
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
                        { page: "Student Registration", route: "/student-management-system/student-directory/student-registration" },
                        { page: "Student Detail", route: "/student-management-system/student-directory/detail" },
                        { page: "Student Promotion TC", route: "/student-management-system/student-directory/promotion-tc" },
                        { page: "Generate TC", route: "/student-management-system/student-directory/generate-tc" },
                        { page: "Print TC", route: "/student-management-system/student-directory/print-tc" },
                        { page: "Generate Migration Certificate", route: "/student-management-system/student-directory/generate-migration-certificate" },
                        { page: "Print Migration Certificate", route: "/student-management-system/student-directory/print-migration" }
                    ]
                },
                {
                    subModule: "Student Reports",
                    route: "/student-management-system/student-report",
                    pages: [
                        { page: "Student Summary Report", route: "/student-management-system/student-report/student-summary-report" },
                        { page: "Student Wise Counting Report", route: "/student-management-system/student-report/student-wise-counting-report" }
                    ]
                }
            ]
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
                        { page: "Apply For Scheme", route: "/scheme-management/new-scheme-management/apply-for-scheme" },
                        { page: "View Scheme Wise Generate List", route: "/scheme-management/new-scheme-management/view-scheme-wise-generate-list" },
                        { page: "Scheme Wise Generate Payment File", route: "/scheme-management/new-scheme-management/scheme-wise-generate-payment-file" }
                    ]
                },
                {
                    subModule: "Student Profile Management",
                    route: "/scheme-management/student-profile-management",
                    pages: [
                        { page: "Student Profile View Edit Lock", route: "/scheme-management/student-profile-management/student-profile-view-edit-lock" },
                        { page: "Student Profile Management", route: "/scheme-management/student-profile-management/student-profile-sub-management" },
                        { page: "Update Student Profile for Scholarships", route: "/scheme-management/student-profile-management/update-student-profile" }
                    ]
                },
                {
                    subModule: "E-KYC",
                    route: "/scheme-management/e-kyc",
                    pages: [
                        { page: "eKYC Verification", route: "/scheme-management/e-kyc/e-kyc-verification" },
                        { page: "Student Details KYC", route: "/scheme-management/e-kyc/student-details-kyc" },
                        { page: "eKYC Approval", route: "/scheme-management/e-kyc/e-kyc-approval" },
                        { page: "Student Samagra e-KYC Approval", route: "/scheme-management/e-kyc/student-samagra-e-kyc-approval" }
                    ]
                },
                {
                    subModule: "Scheme Reports",
                    route: "/scheme-management/reports",
                    pages: [
                        { page: "Various Level Reports - HO, JD, District, University, College", route: "/scheme-management/reports/various-level-reports" }
                    ]
                }
            ],
        },
        {
            module: "Budget & Finance",
            icon: FaMoneyBillWave,
            route: "/finance",
            subModules: [
                {
                    subModule: "Finance Master",
                    route: "/finance/master",
                    pages: [
                        {
                            page: "Group Management",
                            route: "/finance/master/group-management",
                        },
                        {
                            page: "Ledger Creation Management",
                            route: "/finance/master/ledger-creation",
                        },
                        { page: "HSN/SAC Master", route: "/finance/master/hsn-sac" },
                        {
                            page: "Group Wise Ledger List",
                            route: "/finance/master/group-wise-ledger",
                        },
                        {
                            page: "Office Wise Ledger List Details",
                            route: "/finance/master/office-wise-ledger",
                        },
                        {
                            page: "Ledger for Office Mapping",
                            route: "/finance/master/ledger-office-mapping",
                        },
                        {
                            page: "Ledger Altercation",
                            route: "/finance/master/ledger-altercation",
                        },
                    ],
                },
                {
                    subModule: "Proposed Budget Process",
                    route: "/finance/proposed-budget",
                    pages: [
                        {
                            page: "Proposed Budget",
                            route: "/finance/proposed-budget/proposed-budget",
                        },
                        {
                            page: "Update Proposed Budget",
                            route: "/finance/proposed-budget/update-proposed-budget",
                        },
                    ],
                },
                {
                    subModule: "Online Budget Demand",
                    route: "/finance/online-demand",
                    pages: [
                        {
                            page: "Demand Request Process",
                            route: "/finance/online-demand/demand-request",
                        },
                        {
                            page: "Demand Status Details",
                            route: "/finance/online-demand/demand-status",
                        },
                    ],
                },
                {
                    subModule: "Budget Approval & Allocation",
                    route: "/finance/budget-approval-allocation",
                    pages: [
                        {
                            page: "Approval Authority",
                            route: "/finance/budget-approval-allocation/approval-authority",
                        },
                        {
                            page: "Budget Allocation Head Wise",
                            route:
                                "/finance/budget-approval-allocation/budget-allocation-head-wise",
                        },
                        {
                            page: "Budget Allocation Report",
                            route:
                                "/finance/budget-approval-allocation/budget-allocation-report",
                        },
                        {
                            page: "Letter Generate",
                            route: "/finance/budget-approval-allocation/letter-generate",
                        },
                        {
                            page: "Budget Assign Report",
                            route: "/finance/budget-approval-allocation/budget-assign-report",
                        },
                        {
                            page: "Budget Utilization Report",
                            route:
                                "/finance/budget-approval-allocation/budget-utilization-report",
                        },
                    ],
                },
                {
                    subModule: "Voucher Creation",
                    route: "/finance/voucher",
                    pages: [
                        {
                            page: "Payment Voucher",
                            route: "/finance/voucher/payment-voucher",
                        },
                        {
                            page: "Receipt Voucher",
                            route: "/finance/voucher/receipt-voucher",
                        },
                        {
                            page: "Journal Voucher",
                            route: "/finance/voucher/journal-voucher",
                        },
                        {
                            page: "Contra Voucher",
                            route: "/finance/voucher/contra-voucher",
                        },
                        {
                            page: "Service Purchase Voucher",
                            route: "/finance/voucher/service-purchase-voucher",
                        },
                    ],
                },
                {
                    subModule: "Finance Reports",
                    route: "/finance/reports",
                    pages: [
                        { page: "Expenses Report", route: "/finance/reports/expenses" },
                        {
                            page: "Office Wise Budget Allocation Report",
                            route: "/finance/reports/office-wise-allocation",
                        },
                        {
                            page: "Day Book Single",
                            route: "/finance/reports/day-book-single",
                        },
                        {
                            page: "Custom Day Book",
                            route: "/finance/reports/custom-day-book",
                        },
                        { page: "Ledger Report", route: "/finance/reports/ledger" },
                        {
                            page: "Cash Bank Book",
                            route: "/finance/reports/cash-bank-book",
                        },
                        { page: "Statistics", route: "/finance/reports/statistics" },
                        {
                            page: "Alphabetical Ledger Report",
                            route: "/finance/reports/alphabetical-ledger",
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
