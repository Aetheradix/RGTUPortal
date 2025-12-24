[33mcommit 38c5aacb264491c477a18be15ee930d2f6192869[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mModule-Admission-Management-System[m[33m)[m
Author: Rinku Sahu <rinkusahu6265@gmail.com>
Date:   Mon Dec 22 17:41:17 2025 +0530

    resolve merge confilict

[1mdiff --git a/src/config/sidebar.ts b/src/config/sidebar.ts[m
[1mindex 26d369a..ddfd0bb 100644[m
[1m--- a/src/config/sidebar.ts[m
[1m+++ b/src/config/sidebar.ts[m
[36m@@ -1,1586 +1,1657 @@[m
 import {[m
[31m-    FaBook,[m
[31m-    FaBus,[m
[31m-    FaChalkboardTeacher,[m
[31m-    FaClipboardList,[m
[31m-    FaCogs,[m
[31m-    FaGlobe,[m
[31m-    FaHome,[m
[31m-    FaMoneyBillWave,[m
[31m-    FaUniversity,[m
[31m-    FaUserFriends,[m
[31m-    FaUserGraduate,[m
[32m+[m[32m  FaBook,[m
[32m+[m[32m  FaBus,[m
[32m+[m[32m  FaChalkboardTeacher,[m
[32m+[m[32m  FaClipboardList,[m
[32m+[m[32m  FaCogs,[m
[32m+[m[32m  FaGlobe,[m
[32m+[m[32m  FaHome,[m
[32m+[m[32m  FaMoneyBillWave,[m
[32m+[m[32m  FaUniversity,[m
[32m+[m[32m  FaUserFriends,[m
[32m+[m[32m  FaUserGraduate,[m
 } from "react-icons/fa";[m
 [m
 import type { IconType } from "react-icons";[m
 [m
 /* Page level */[m
 export interface Page {[m
[31m-    page: string;[m
[31m-    route: string;[m
[32m+[m[32m  page: string;[m
[32m+[m[32m  route: string;[m
 }[m
 [m
 /* SubModule level */[m
 export interface SubModule {[m
[31m-    subModule: string;[m
[31m-    route: string;[m
[31m-    pages: Page[];[m
[32m+[m[32m  subModule: string;[m
[32m+[m[32m  route: string;[m
[32m+[m[32m  pages: Page[];[m
 }[m
 [m
 /* Main Module level */[m
 export interface SidebarModule {[m
[31m-    module: string;[m
[31m-    icon: IconType;[m
[31m-    route: string;[m
[31m-    subModules?: SubModule[];[m
[32m+[m[32m  module: string;[m
[32m+[m[32m  icon: IconType;[m
[32m+[m[32m  route: string;[m
[32m+[m[32m  subModules?: SubModule[];[m
 }[m
 [m
 /* Home module */[m
 export interface HomeModule {[m
[31m-    module: string;[m
[31m-    icon: IconType;[m
[31m-    route: string;[m
[32m+[m[32m  module: string;[m
[32m+[m[32m  icon: IconType;[m
[32m+[m[32m  route: string;[m
 }[m
 [m
 /* Complete Sidebar Menu */[m
 export interface SidebarMenu {[m
[31m-    home: HomeModule;[m
[31m-    sidebar: SidebarModule[];[m
[32m+[m[32m  home: HomeModule;[m
[32m+[m[32m  sidebar: SidebarModule[];[m
 }[m
 [m
 const sidebarMenu = {[m
[31m-    home: {[m
[31m-        module: "Home",[m
[31m-        icon: FaHome,[m
[31m-        route: "/home",[m
[32m+[m[32m  home: {[m
[32m+[m[32m    module: "Home",[m
[32m+[m[32m    icon: FaHome,[m
[32m+[m[32m    route: "/home",[m
[32m+[m[32m  },[m
[32m+[m[32m  sidebar: [[m
[32m+[m[32m    {[m
[32m+[m[32m      module: "Masters",[m
[32m+[m[32m      icon: FaCogs,[m
[32m+[m[32m      route: "/masters",[m
[32m+[m[32m      subModules: [[m
[32m+[m[32m        {[m
[32m+[m[32m          subModule: "User Management",[m
[32m+[m[32m          route: "/masters/user-management",[m
[32m+[m[32m          pages: [[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Create User Level",[m
[32m+[m[32m              route: "/masters/user-management/create-user-level",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Module Mapping",[m
[32m+[m[32m              route: "/masters/user-management/module-mapping",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Parent Menu Creation",[m
[32m+[m[32m              route: "/masters/user-management/parent-menu-creation",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Sub Menu Creation",[m
[32m+[m[32m              route: "/masters/user-management/sub-menu-creation",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Role Creation",[m
[32m+[m[32m              route: "/masters/user-management/role-creation",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Role Wise Module Mapping",[m
[32m+[m[32m              route: "/masters/user-management/role-wise-module-mapping",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Incharge Mapping",[m
[32m+[m[32m              route: "/masters/user-management/incharge-mapping",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Form Wise Right's Assign",[m
[32m+[m[32m              route: "/masters/user-management/form-wise-rights-assign",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Role Wise Right's Assign",[m
[32m+[m[32m              route: "/masters/user-management/role-wise-rights-assign",[m
[32m+[m[32m            },[m
[32m+[m[32m          ],[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          subModule: "Location Master",[m
[32m+[m[32m          route: "/masters/location-master",[m
[32m+[m[32m          pages: [[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "State Master Data",[m
[32m+[m[32m              route: "/masters/location-master/state-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Division Master Data",[m
[32m+[m[32m              route: "/masters/location-master/division-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "District Master Data",[m
[32m+[m[32m              route: "/masters/location-master/district-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Tasil Master Data",[m
[32m+[m[32m              route: "/masters/location-master/tasil-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Block Master Data",[m
[32m+[m[32m              route: "/masters/location-master/block-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Parliamentary Master Data",[m
[32m+[m[32m              route: "/masters/location-master/parliamentary-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Assembly Master Data",[m
[32m+[m[32m              route: "/masters/location-master/assembly-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Nagar Nigam Master Data",[m
[32m+[m[32m              route: "/masters/location-master/nagar-nigam-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Nagar Palika Master Data",[m
[32m+[m[32m              route: "/masters/location-master/nagar-palika-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Jila Panchayat Master Data",[m
[32m+[m[32m              route: "/masters/location-master/jila-panchayat-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Nagar Panchayat Master Data",[m
[32m+[m[32m              route: "/masters/location-master/nagar-panchayat-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Janpad Panchayat Master Data",[m
[32m+[m[32m              route: "/masters/location-master/janpad-panchayat-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Gram Panchayat Master Data",[m
[32m+[m[32m              route: "/masters/location-master/gram-panchayat-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Post Office Master",[m
[32m+[m[32m              route: "/masters/location-master/post-office-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Village Master",[m
[32m+[m[32m              route: "/masters/location-master/village-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Habitation Master Data",[m
[32m+[m[32m              route: "/masters/location-master/habitation-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            { page: "Pin code", route: "/masters/location-master/pin-code" },[m
[32m+[m[32m          ],[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          subModule: "Course Master",[m
[32m+[m[32m          route: "/masters/course-master",[m
[32m+[m[32m          pages: [[m
[32m+[m[32m            { page: "Category", route: "/masters/course-master/category" },[m
[32m+[m[32m            { page: "Level", route: "/masters/course-master/level" },[m
[32m+[m[32m            { page: "Course", route: "/masters/course-master/course" },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Specialization",[m
[32m+[m[32m              route: "/masters/course-master/specialization",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Modes of Education",[m
[32m+[m[32m              route: "/masters/course-master/modes-of-education",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Course and Specialization Mapping",[m
[32m+[m[32m              route: "/masters/course-master/course-specialization-mapping",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Course Status",[m
[32m+[m[32m              route: "/masters/course-master/course-status",[m
[32m+[m[32m            },[m
[32m+[m[32m          ],[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          subModule: "Faculty Master",[m
[32m+[m[32m          route: "/masters/faculty-master",[m
[32m+[m[32m          pages: [[m
[32m+[m[32m            { page: "Faculty", route: "/masters/faculty-master/faculty" },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Faculty Status",[m
[32m+[m[32m              route: "/masters/faculty-master/faculty-status",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Office Type",[m
[32m+[m[32m              route: "/masters/faculty-master/office-type",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Office Name",[m
[32m+[m[32m              route: "/masters/faculty-master/office-name",[m
[32m+[m[32m            },[m
[32m+[m[32m            { page: "Department", route: "/masters/faculty-master/department" },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Head Office",[m
[32m+[m[32m              route: "/masters/faculty-master/head-office",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Division Office",[m
[32m+[m[32m              route: "/masters/faculty-master/division-office",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "District Office",[m
[32m+[m[32m              route: "/masters/faculty-master/district-office",[m
[32m+[m[32m            },[m
[32m+[m[32m          ],[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          subModule: "University Master",[m
[32m+[m[32m          route: "/masters/university-master",[m
[32m+[m[32m          pages: [[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "University Type Master",[m
[32m+[m[32m              route: "/masters/university-master/university-type-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "University Category Master",[m
[32m+[m[32m              route: "/masters/university-master/university-category-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "University Master",[m
[32m+[m[32m              route: "/masters/university-master/university-master",[m
[32m+[m[32m            },[m
[32m+[m[32m          ],[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          subModule: "College Master",[m
[32m+[m[32m          route: "/masters/college-master",[m
[32m+[m[32m          pages: [[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "College Type Master",[m
[32m+[m[32m              route: "/masters/college-master/college-type-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "College Category Master",[m
[32m+[m[32m              route: "/masters/college-master/college-category-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "College Master",[m
[32m+[m[32m              route: "/masters/college-master/college-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Post Master Data",[m
[32m+[m[32m              route: "/masters/college-master/post-master-data",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Class Master Data",[m
[32m+[m[32m              route: "/masters/college-master/class-master-data",[m
[32m+[m[32m            },[m
[32m+[m[32m          ],[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          subModule: "HR Master Data",[m
[32m+[m[32m          route: "/masters/hr-master-data",[m
[32m+[m[32m          pages: [[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Designation Type Master",[m
[32m+[m[32m              route: "/masters/hr-master-data/designation-type-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Designation Master Data",[m
[32m+[m[32m              route: "/masters/hr-master-data/designation-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Section Master Data",[m
[32m+[m[32m              route: "/masters/hr-master-data/section-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Pay Commission Master Data",[m
[32m+[m[32m              route: "/masters/hr-master-data/pay-commission-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Pay Scale Master Data",[m
[32m+[m[32m              route: "/masters/hr-master-data/pay-scale-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Grade Pay Master Data",[m
[32m+[m[32m              route: "/masters/hr-master-data/grade-pay-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Level Master Data",[m
[32m+[m[32m              route: "/masters/hr-master-data/level-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Level Basic Pay Master Data",[m
[32m+[m[32m              route: "/masters/hr-master-data/level-basic-pay-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Appointment Department Master Data",[m
[32m+[m[32m              route: "/masters/hr-master-data/appointment-department-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Blood Master Data",[m
[32m+[m[32m              route: "/masters/hr-master-data/blood-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Religion Master Data",[m
[32m+[m[32m              route: "/masters/hr-master-data/religion-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Caste Master Data",[m
[32m+[m[32m              route: "/masters/hr-master-data/caste-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Qualification Master Data",[m
[32m+[m[32m              route: "/masters/hr-master-data/qualification-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Other Department Master",[m
[32m+[m[32m              route: "/masters/hr-master-data/other-department-master",[m
[32m+[m[32m            },[m
[32m+[m[32m          ],[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          subModule: "Payroll Master",[m
[32m+[m[32m          route: "/masters/payroll-master",[m
[32m+[m[32m          pages: [[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Section Master",[m
[32m+[m[32m              route: "/masters/payroll-master/section-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Self Earning & Deduction Optional Head Value",[m
[32m+[m[32m              route:[m
[32m+[m[32m                "/masters/payroll-master/self-earning-deduction-optional-head-value",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Self Earning & Deduction Fixed Head Value",[m
[32m+[m[32m              route:[m
[32m+[m[32m                "/masters/payroll-master/self-earning-deduction-fixed-head-value",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Loan Master",[m
[32m+[m[32m              route: "/masters/payroll-master/loan-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "All Earning and The All Employee Wise Head Wise",[m
[32m+[m[32m              route:[m
[32m+[m[32m                "/masters/payroll-master/all-earning-all-employee-wise-head-wise",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Arrear Type Master",[m
[32m+[m[32m              route: "/masters/payroll-master/arrear-type-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Challan Details Master Data",[m
[32m+[m[32m              route: "/masters/payroll-master/challan-details-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Scheme Department Master",[m
[32m+[m[32m              route: "/masters/payroll-master/scheme-department-master",[m
[32m+[m[32m            },[m
[32m+[m[32m          ],[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          subModule: "Scheme Master",[m
[32m+[m[32m          route: "/masters/scheme-master",[m
[32m+[m[32m          pages: [[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Scheme Master",[m
[32m+[m[32m              route: "/masters/scheme-master/scheme-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Scheme Type Master",[m
[32m+[m[32m              route: "/masters/scheme-master/scheme-type-master",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Scheme Master Duplicate",[m
[32m+[m[32m              route: "/masters/scheme-master/scheme-master-duplicate",[m
[32m+[m[32m            },[m
[32m+[m[32m            {[m
[32m+[m[32m              page: "Scheme Category Master (Central, State, UGC)",[m
[32m+[m[32m              route: "/masters/scheme-master/scheme-category-master",[m
[32m+[m[32m            },[m
[32m+[m[32m          ],[m
[32m+[m[32m        },[m
[32m+[m[32m        {[m
[32m+[m[32m          subModule: "Grant Master",[m
[32m+[m[32m          route: "/masters/grant-master",[m
[32m+[m[32m          pages: [[m
[32m+[m[32