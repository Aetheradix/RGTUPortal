import { Route, Routes } from 'react-router-dom';
import OfficeRegistrationForm from './OfficeRegistration';
import InstituteRegistrationForm from './InstituteRegistration';
import SchoolRegistrationForm from './SchoolRegistration';
import EditSchool from './EditSchool';
import EditSchoolDetails from './EditSchoolDetails';



export default function OISRegistration() {
  return (
    <Routes>
      <Route path="office-registration-form" element={< OfficeRegistrationForm/>} />
      <Route path="institute-registration-form" element={< InstituteRegistrationForm/>} />
      <Route path="school-registration-form" element={< SchoolRegistrationForm/>} />
      <Route path="edit-school" element={<EditSchool />} />
      <Route path="edit-school-details" element={<EditSchoolDetails/>} />
    
    </Routes>
  );
}
