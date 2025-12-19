import { Route, Routes } from 'react-router-dom';
import StudentRegistration from './StudentRegistration';

export default function StudentDirectory() {
  return (
    <Routes>
        <Route path="student-registration/*" element={<StudentRegistration />} />
    </Routes>
  );
}
    