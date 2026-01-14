import { Route, Routes } from 'react-router-dom';
import GuestFacultyRegistration from './GuestFacultyRegistration';
import FacultyLogin from './GuestFacultyLogin';
import ProfileView from './ProfileView';
import QualificationAndExperience from './QualificationExperienceInformation';
import ApplyAgainstVacancy from './ApplyAgainstVacancy';
import RegisterExperienceClaim from './RegisterExperienceClaim';
import PrintExperienceClaim from './PrintExperienceClaim';
import GuestFacultyScoreCard from './ScoreCard';
export default function GuestFacultyLogin() {
  return (
    <Routes>
        <Route path="registration" element={<GuestFacultyRegistration />} />
        <Route path="login" element={<FacultyLogin />} />
        <Route path="profile-view" element={<ProfileView />} />
        <Route path="qualification-experience" element={<QualificationAndExperience />} />
        <Route path="apply-against-vacancy" element={<ApplyAgainstVacancy />} />
        <Route path="claim-experience-certificate" element={<RegisterExperienceClaim />} />
        <Route path="print-experience-claim" element={<PrintExperienceClaim />} />
        <Route path="score-card" element={<GuestFacultyScoreCard />} />
    </Routes>
  );
}
    