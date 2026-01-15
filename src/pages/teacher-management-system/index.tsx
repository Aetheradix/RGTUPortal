
import { Route, Routes } from 'react-router-dom';
import TeacherManagement from './teacher-management';
import TeacherManagementReport from './teacher-management-report';
export default function TeacherManagementSystem
() {
  return (
    <Routes>
        <Route path="teacher-management/*" element={<TeacherManagement/>} />
        <Route path="teacher-management-report/*" element={<TeacherManagementReport />} />

    </Routes>
  );
}
    