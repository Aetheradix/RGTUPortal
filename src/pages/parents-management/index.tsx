
import { Route, Routes } from 'react-router-dom';
import StudentDiary from './StudentDiary';
export default function ParentsManagement
() {
  return (
    <Routes>
        <Route path="student-diary" element={<StudentDiary/>} />
    </Routes>
  );
}
    