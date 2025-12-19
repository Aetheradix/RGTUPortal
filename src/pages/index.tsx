import { Route, Routes } from 'react-router-dom';
import Master from './masters';
import Academics from './academics';
import StudentManagementSystem from './student-management-system';

export default function AppFeature() {
  return (
    <Routes>
      {/* <Route index element={<Home />} /> */}
      <Route path="masters/*" element={<Master />} />
      <Route path="academics/*" element={<Academics />} />
      <Route path="student-management-system/*" element={<StudentManagementSystem />} />
      {/* <Route path="exam-management/*" element={<ExamManagement />} />
        <Route path="home/*" element={<Home />} /> */}
    </Routes>
  );
}
