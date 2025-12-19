import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import GenericPage from './GenericPage';
import Master from './masters';
import Academics from './academics';
import StudentManagementSystem from './student-management-system';
import ExamManagement from './exam-management';

export default function AppFeature() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="masters/*" element={<Master />} />
      <Route path="academics/*" element={<Academics />} />
      <Route path="student-management-system/*" element={<StudentManagementSystem />} />
      {/* <Route path="exam-management/*" element={<ExamManagement />} />
        <Route path="home/*" element={<Home />} /> */}
      <Route path="exam-management/*" element={<ExamManagement/>} />

      {/* Fallback for any route where dedicated UI is not implemented yet */}
      <Route path="*" element={<GenericPage />} />
    </Routes>
  );
}
