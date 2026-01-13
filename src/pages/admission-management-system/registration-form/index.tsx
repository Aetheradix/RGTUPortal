import { Navigate, Route, Routes } from 'react-router-dom';
import StudentAdmissionForm from './FillRegistrationForm';
import EditRegistrationDetails from './EditRegistrationForm';

export default function 
Registrationform() {
  return (
    <Routes>
      <Route index element={<Navigate to="create-user-level" replace />} />
      <Route path="fill-registration-form" element={<StudentAdmissionForm />} />
      <Route path="edit-registration-form" element={<EditRegistrationDetails />} />
      <Route path="*" element={<Navigate to="create-user-level" replace />} />
    </Routes>
  );
}
