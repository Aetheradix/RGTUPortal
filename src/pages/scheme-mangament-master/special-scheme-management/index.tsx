import { Route, Routes } from 'react-router-dom';
import DistrictWiseEligibleStudentReport from './DistrictWiseEligibleStudentsReport';
import SpecialSchemePrint from './SpecialSchemePrint';
import SpecialSchemeRegistration from './SpecialSchemeRegistration';
import UpdateSpecialSchemeStudents from './UpdateStudentsDetails';
import UploadSpecialSchemeStudentData from './UploadSpecialSchemeStudentData';
import LaptopDistributionReport from './SpecialSchemeStudentDataReport';


export default function SpecialSchemeManagement() {
  return (
    <Routes>
     <Route path="districtwise-eligible-student-report/*" element={<DistrictWiseEligibleStudentReport/>} />
     <Route path="special-scheme-print/*" element={<SpecialSchemePrint/>} />
     <Route path="special-scheme-registration/*" element={<SpecialSchemeRegistration/>} />
     <Route path="update-special-scheme-students/*" element={<UpdateSpecialSchemeStudents/>} />
     <Route path="upload-special-scheme-student-data/*" element={<UploadSpecialSchemeStudentData/>} />
     <Route path="laptop-distribution-report/*" element={<LaptopDistributionReport/>} />
    </Routes>
  );
}
    