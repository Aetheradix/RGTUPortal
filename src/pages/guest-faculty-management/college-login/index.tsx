import { Route, Routes } from 'react-router-dom';
import VacantPost from './VacantPost';
import ApplicantList from './ViewAppliedProfile';
import GuestFacultySelection from './GuestFacultySelection';
export default function CollegeLogin() {
  return (
    <Routes>
        <Route path="vacant-post" element={<VacantPost />} />
        <Route path="view-applied-profile" element={<ApplicantList />} />
        <Route path="selection-register-profile" element={<GuestFacultySelection />} />
    </Routes>
  );
}
    