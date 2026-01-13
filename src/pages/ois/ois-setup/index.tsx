import { Route, Routes } from 'react-router-dom';
import OfficeSetup from './OfficeSetup';
import InstituteSetup from './InstituteSetup';
import SchoolSetup from './SchoolSetup';
import HSSSetup from './HSSSetup';
import MPBSEEnrollmentClass9To12 from './MPBSEEnrollmentClass9To12';
import MPBSEEnrollmentReport from './MPBSEEnrollmentReport';

export default function OISSetup() {
  return (
    <Routes>
       <Route path="office-setup" element={<OfficeSetup />} />
       <Route path="institute-setup" element={<InstituteSetup />} />
       <Route path="school-setup" element={<SchoolSetup />} />
       <Route path="hss-setup" element={<HSSSetup />} />
       <Route path="mpbse-enrollment-class-9-to-12" element={<MPBSEEnrollmentClass9To12 />} />
       <Route path="mpbse-enrollment-report" element={<MPBSEEnrollmentReport />} />
    </Routes>
  );
}
    