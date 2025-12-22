import { Route, Routes } from 'react-router-dom';
import StudentSummaryReport from './StudentSummaryReport';
import StudentWiseCountingReport from './StudentWiseCountingReport';
export default function StudentReport() {
  return (
    <Routes>
      <Route path="student-summary-report" element={<StudentSummaryReport />} />
      <Route path="student-wise-counting-report" element={<StudentWiseCountingReport />} />
    </Routes>
  );
}
