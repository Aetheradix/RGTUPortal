import { Route, Routes } from 'react-router-dom';
import HostelManagement from './hostel-management';
import StudentRegisterInHostel from './student-register-in-hostel';
import StudentDeRegisterInHostel from './student-de-register-in-hostel';

export default function HostelManagementSystem() {
  return (
    <Routes>
       <Route path="hostel-management/*" element={<HostelManagement />} />
       <Route path="student-register-in-hostel/*" element={<StudentRegisterInHostel />} />
       <Route path="student-de-register-in-hostel/*" element={<StudentDeRegisterInHostel />} />
    </Routes>
  );
}
    