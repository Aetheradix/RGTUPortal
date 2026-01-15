
import { Route, Routes } from 'react-router-dom';
import SchoolSecurityRegistration from './SchoolSecurityRegistration';
import SchoolSecurityRegistrationReport from './SchoolSecurityRegistrationReport';
export default function SchoolSecurityManagement
() {
  return (
    <Routes>
        <Route path="school-security-registration" element={<SchoolSecurityRegistration/>} />
        <Route path="school-security-registration-report" element={<SchoolSecurityRegistrationReport />} />
    </Routes>
  );
}
    