import { Route, Routes } from "react-router-dom";
import Academics from './academics';
import Admissonmanagementsystem from './admission-management-system';
import BudgetAndFinance from "./budget-and-finance";
import Dashboard from "./Dashboard";
import ExamManagement from "./exam-management";
import GenericPage from "./GenericPage";
import GuestFacultyManagement from "./guest-faculty-management";
import Master from "./masters";
import ProfilePage from "./profile";
import SchemeManagement from "./scheme-management";
import StudentManagementSystem from './student-management-system';
import TransportManagementSYS from './transport-management';

export default function AppFeature() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="masters/*" element={<Master />} />
      <Route path="exam-management/*" element={<ExamManagement />} />
      <Route path="budget-and-finance/*" element={<BudgetAndFinance />} />
      <Route path="transport-management/*" element={<TransportManagementSYS />} />
      <Route path="admission-management-system/*" element={<Admissonmanagementsystem />} />
      <Route path="academics/*" element={<Academics />} />
      <Route path="student-management-system/*" element={<StudentManagementSystem />} />
      {/* <Route path="exam-management/*" element={<ExamManagement />} />
        <Route path="home/*" element={<Home />} /> */}
      <Route path="exam-management/*" element={<ExamManagement />} />
      {/* Fallback for any route where dedicated UI is not implemented yet */}
      <Route path="*" element={<GenericPage />} />
      <Route path="scheme-management/*" element={<SchemeManagement />} />
      <Route path="guest-faculty/*" element={<GuestFacultyManagement />} />
      <Route path="profile" element={<ProfilePage />} />
    </Routes>
  );
}
