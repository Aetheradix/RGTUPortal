import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import GenericPage from "./GenericPage";
import Master from "./masters";
import ExamManagement from "./exam-management";
import BudgetAndFinance from "./budget-and-finance";
import Academics from './academics';
import Admissonmanagementsystem from './admission-management-system';
import SchemeManagement from "./scheme-management";
import StudentManagementSystem from './student-management-system';
import TransportManagementSYS from './transport-management';
import GuestFacultyManagement from "./guest-faculty-management";
import APRMS from "./employee-aprms";
import DepartmentEnquiryManagement from "./department-enquiry-management";
import TourManagementSystem from "./tour-mangement";
import UserManagement from "./user-management";
import OIS from "./ois";
import HostelManagementSystem from "./hostel-management";

export default function AppFeature() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="masters/*" element={<Master />} />
      <Route path="exam-management/*" element={<ExamManagement />} />
      <Route path="budget-and-finance/*" element={<BudgetAndFinance />} />
      <Route path ="transport-management/*" element={<TransportManagementSYS/>}/>
      <Route path="admission-management-system/*" element={<Admissonmanagementsystem />} />
      <Route path="academics/*" element={<Academics />} />
      <Route path="student-management-system/*" element={<StudentManagementSystem />} />
      {/* <Route path="exam-management/*" element={<ExamManagement />} />
        <Route path="home/*" element={<Home />} /> */}
      <Route path="exam-management/*" element={<ExamManagement/>} />
      <Route path="*" element={<GenericPage />} />
      <Route path="scheme-management/*" element={<SchemeManagement />} />
      <Route path="guest-faculty/*" element={<GuestFacultyManagement />} />
      <Route path="aprms/*" element={<APRMS />} />
      <Route path="department-enquiry-management/*" element={<DepartmentEnquiryManagement />} />
      <Route path="tour-management-system/*" element={<TourManagementSystem />} />
      <Route path="user-management/*" element={<UserManagement />} />
      <Route path="ois/*" element={<OIS />} />
      <Route path="hostel-management-system/*" element={<HostelManagementSystem />} />
    </Routes>
  );
}
