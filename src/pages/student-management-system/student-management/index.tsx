import { Route, Routes } from 'react-router-dom';
import StudentAttendance from './StudentAttendance';
import StudentAttendanceReport from './StudentAttendanceReport';
import StudentAchievementTracking from './StudentAchievementTracking';
import StudentAchievementTrackingReport from './StudentAchievementTrackingReport';
import StudentTracking from './StudentTracking';

export default function StudentManagement() {
  return (
    <Routes>
        <Route path="student-attendance/*" element={<StudentAttendance />} />
        <Route path="student-attendance-report/*" element={<StudentAttendanceReport />} />
        <Route path="student-achievement-tracking/*" element={<StudentAchievementTracking />} />
        <Route path="student-achievement-tracking-report/*" element={<StudentAchievementTrackingReport />} />
        <Route path="student-tracking/*" element={<StudentTracking />} />
    </Routes>
  );
}
