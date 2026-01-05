import { Route, Routes } from 'react-router-dom';
import TEDVacantPost from './VacantPost';
import ViewAppliedProfile from './ViewAppliedProfile';
import ViewApprovedProfile from './ViewApprovedAndRegistredProfile';

export default function TEDLogin() {
  return (
    <Routes>
       <Route path="vacant-post" element={<TEDVacantPost />} />
       <Route path="view-applied-profile-all" element={<ViewAppliedProfile />} />
       <Route path="view-approved-registered-all" element={<ViewApprovedProfile />} />
    </Routes>
  );
}
    