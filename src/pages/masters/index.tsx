import { Route, Routes } from 'react-router-dom';
import UserMangement from './user-management';
import LocationMaster from './location-master';
import CourseMaster from './course-master';
import FacultyMaster from './faculty-master';
import UniversityMaster from './university-master';
import CollegeMaster from './college-master';
import HRMaster from './hr-masters';
import PayrollMaster from './payroll-master';
import SchemeMaster from './scheme-master';
import GrantMaster from './grant-master';
import GrantApplication from './grant-application';

export default function Master() {
  return (
    <Routes>
      <Route path="user-management/*" element={<UserMangement />} />
      <Route path="location-master/*" element={<LocationMaster />} />
      <Route path="course-master/*" element={<CourseMaster />} />
      <Route path="faculty-master/*" element={<FacultyMaster />} />
      <Route path="university-master/*" element={<UniversityMaster />} />
      <Route path="college-master/*" element={<CollegeMaster />} />
      {/* HR and related scheme/payroll/grant masters */}
      <Route path="hr-master-data/*" element={<HRMaster />} />
      <Route path="payroll-master/*" element={<PayrollMaster />} />
      <Route path="scheme-master/*" element={<SchemeMaster />} />
      <Route path="grant-master/*" element={<GrantMaster />} />
      <Route path="grant-application/*" element={<GrantApplication />} />
    </Routes>
  );
}
