import { Route, Routes } from "react-router-dom";
import Academics from './academics';
import Admissonmanagementsystem from './admission-management-system';
import Dashboard from "./Dashboard";
import ExamManagement from './exam-management';
import GenericPage from "./GenericPage";
import Master from "./masters";
import SchemeManagement from "./scheme-management";
import StudentManagementSystem from './student-management-system';
import TransportManagementSYS from './transport-management';

export default function AppFeature() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="masters/*" element={<Master />} />
      <Route path ="transport-management/*" element={<TransportManagementSYS/>}/>
      <Route path="admission-management-system/*" element={<Admissonmanagementsystem />} />
      <Route path="academics/*" element={<Academics />} />
      <Route path="student-management-system/*" element={<StudentManagementSystem />} />
      {/* <Route path="exam-management/*" element={<ExamManagement />} />
        <Route path="home/*" element={<Home />} /> */}
      <Route path="exam-management/*" element={<ExamManagement/>} />

      {/* Fallback for any route where dedicated UI is not implemented yet */}
      <Route path="*" element={<GenericPage />} />
      <Route path="scheme-management/*" element={<SchemeManagement />} />
    </Routes>
  );
}
