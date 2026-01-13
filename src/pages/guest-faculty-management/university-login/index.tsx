import { Route, Routes } from 'react-router-dom';
import UniVacantPost from './Vacant Post';
import ViewAppliedProfiles from './ViewAppliedProfile';
import ApprovedProfilesAllColleges from './ViewApprovedAndRegistredProfile';

export default function UniversityLogin() {
  return (
    <Routes>
       <Route path="vacant-post" element={<UniVacantPost />} />
       <Route path="view-applied-profile-colleges" element={<ViewAppliedProfiles/>} />
       <Route path="view-approved-registered-colleges" element={<ApprovedProfilesAllColleges/>} />

    </Routes>
  );
}
    