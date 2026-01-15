import { Route, Routes } from 'react-router-dom';
import StudentDeRegister from './StudentDeRegister';
import StudentDeRegisterReport from './StudentDeRegisterReport';

export default function StudentDeRegisterInHostel() {
  return (
    <Routes>
        <Route path="student-de-register" element={<StudentDeRegister/>} />
        <Route path="student-de-register-report" element={<StudentDeRegisterReport/>} />
    </Routes>
  );
}
    