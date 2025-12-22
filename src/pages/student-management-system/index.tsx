import { Route, Routes } from 'react-router-dom';
import StudentManagement from './student-management';
import StudentDirectory from '../student-management-system/student-directory';
import StudentReport from '../student-management-system/student-report';

export default function StudentManagementSystem() {
  return (
    <Routes>
        <Route path="student-management/*" element={<StudentManagement />} />
        <Route path="student-directory/*" element={<StudentDirectory />} />
        <Route path="student-report/*" element={<StudentReport />} />
    </Routes>
  );
}
