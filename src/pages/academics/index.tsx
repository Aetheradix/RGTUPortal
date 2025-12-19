import { Route, Routes } from 'react-router-dom';
import Lectures from './lectures';
import AttendanceManagement from './attendance-management';
import SyllabusAndStudyMaterial from './syllabus-and-study-material';
import CollegeTransfer from './college-transfer';

export default function Academics() {
  return (
    <Routes>
      <Route path="lectures/*" element={<Lectures />} />
      <Route path="attendance-management/*" element={<AttendanceManagement />} />
      <Route path="syllabus-and-study-material/*" element={<SyllabusAndStudyMaterial />} />
      <Route path="college-transfer/*" element={<CollegeTransfer />} />
    </Routes>
  );
}
