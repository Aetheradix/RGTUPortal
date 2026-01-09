import { Route, Routes } from 'react-router-dom';
import SchoolSetupReport from './SchoolSetupReport';
import OfficeSetupReport from './OfficeSetupReport';
import InstituteSetupReport from './InstituteSetupDetailsReport';
import DistrictWisePublishSchools from './DistrictWisePublish';
import PostCodeReport from './PostCodeReport';
export default function OISReport() {
  return (
    <Routes>
      <Route path="school-setup-report" element={< SchoolSetupReport/>} />
      <Route path="office-setup-details-report" element={< OfficeSetupReport/>} />
      <Route path="institute-setup-details-report" element={ <InstituteSetupReport/>} />
      <Route path="district-wise-publish" element={ <DistrictWisePublishSchools/>} />
      <Route path="post-code-report" element={ <PostCodeReport/>} />
    </Routes>
  );
}
