import { Route, Routes } from 'react-router-dom';
import StudentRegistration from './StudentRegistration';
import StudentDetail from './StudentDetail';
import StudentPromotionTC from './StudentPromotionTC';
import GenerateTC from './GenerateTC';

export default function StudentDirectory() {
  return (
    <Routes>
        <Route path="student-registration" element={<StudentRegistration />} />
        <Route path="detail" element={<StudentDetail />} />
        <Route path="promotion-tc" element={<StudentPromotionTC />} />
        <Route path="generate-tc" element={<GenerateTC />} />
    </Routes>
  );
}
    