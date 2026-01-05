import { Route, Routes } from 'react-router-dom';
import GuestFacultyLogin from './guest-faculty-login';
import CollegeLogin from './college-login';
import UniversityLogin from './university-login';
import TEDLogin from './ted-login';

export default function GuestFacultyManagement() {
  return (
    <Routes>
       <Route path="login/*" element={<GuestFacultyLogin />} />
         <Route path="college-login/*" element={<CollegeLogin />} />
         <Route path="university-login/*" element={<UniversityLogin />} />
         <Route path="ted-login/*" element={<TEDLogin/>} />

    </Routes>
  );
}
    