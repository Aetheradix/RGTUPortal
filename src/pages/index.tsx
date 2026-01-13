import { Route, Routes } from "react-router-dom";
import Academics from "./academics";
import Admissonmanagementsystem from "./admission-management-system";
import BudgetAndFinance from "./budget-and-finance";
import CmsPortal from "./cms-portal";
import CompassionManagement from "./compassion-management";
import Dashboard from "./Dashboard";
import DepartmentEnquiryManagement from "./department-enquiry-management";
import APRMS from "./employee-aprms";
import EmployeeDirectoryManagement from "./employee-directory-management";
import ExamManagement from "./exam-management";
import GenericPage from "./GenericPage";
import GuestFacultyManagement from "./guest-faculty-management";
import HostelManagementSystem from "./hostel-management";
import Master from "./masters";
import OIS from "./ois";
import Payroll from "./payroll";
import ProfilePage from "./profile";
import SchemeManagement from "./scheme-management";
import StudentManagementSystem from "./student-management-system";
import TourManagementSystem from "./tour-mangement";
import TransportManagementSYS from "./transport-management";
import UserManagement from "./user-management";

export default function AppFeature() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="masters/*" element={<Master />} />
      <Route path="exam-management/*" element={<ExamManagement />} />
      <Route path="budget-and-finance/*" element={<BudgetAndFinance />} />
      <Route
        path="transport-management/*"
        element={<TransportManagementSYS />}
      />
      <Route
        path="admission-management-system/*"
        element={<Admissonmanagementsystem />}
      />
      <Route path="academics/*" element={<Academics />} />
      <Route
        path="student-management-system/*"
        element={<StudentManagementSystem />}
      />
      {/* <Route path="exam-management/*" element={<ExamManagement />} />
        <Route path="home/*" element={<Home />} /> */}
      <Route path="exam-management/*" element={<ExamManagement />} />
      <Route path="*" element={<GenericPage />} />
      <Route path="scheme-management/*" element={<SchemeManagement />} />
      <Route path="guest-faculty/*" element={<GuestFacultyManagement />} />
      <Route path="aprms/*" element={<APRMS />} />
      <Route
        path="department-enquiry-management/*"
        element={<DepartmentEnquiryManagement />}
      />
      <Route
        path="tour-management-system/*"
        element={<TourManagementSystem />}
      />
      <Route path="user-management/*" element={<UserManagement />} />
      <Route path="ois/*" element={<OIS />} />
      <Route
        path="hostel-management-system/*"
        element={<HostelManagementSystem />}
      />
      <Route path="exam-management/*" element={<ExamManagement />} />
      {/* Fallback for any route where dedicated UI is not implemented yet */}
      <Route path="*" element={<GenericPage />} />
      <Route path="scheme-management/*" element={<SchemeManagement />} />
      <Route path="cms-portal/*" element={<CmsPortal />} />
      <Route path="guest-faculty/*" element={<GuestFacultyManagement />} />
      <Route path="payroll/*" element={<Payroll />} />
      <Route path="compassion-management/*" element={<CompassionManagement />} />
      <Route
        path="employee-directory-management/*"
        element={<EmployeeDirectoryManagement />}
      />
      <Route path="profile" element={<ProfilePage />} />
    </Routes>
  );
}
