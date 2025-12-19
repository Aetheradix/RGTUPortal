import { Route, Routes } from 'react-router-dom';
import StudentManagement from './student-management';
import StudentDirectory from '../student-management-system/student-directory';

export default function StudentManagementSystem() {
  return (
    <Routes>
        <Route path="student-management/*" element={<StudentManagement />} />
        <Route path="student-directory/*" element={<StudentDirectory />} />
    </Routes>
  );
}
