import { Route, Routes } from 'react-router-dom';
import StudentRegister from './StudentRegister';
import LockStudent from './LockStudent';

export default function StudentRegisterInHostel

() {
  return (
    <Routes>
       <Route path="student-register" element={<StudentRegister />} />
       <Route path="lock-student" element={<LockStudent />} />
    </Routes>
  );
}
    