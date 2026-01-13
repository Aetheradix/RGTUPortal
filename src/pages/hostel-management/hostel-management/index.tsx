import { Route, Routes } from 'react-router-dom';
import HostelRegistration from './HostelRegistration';
import StudentApplicationReport from './StudentRegisterReport';

export default function HostelManagement() {
  return (
    <Routes>
       <Route path="hostel-registration" element={<HostelRegistration />} />
       <Route path="student-application-report" element={<StudentApplicationReport />} />

    </Routes>
  );
}
    