
import { Route, Routes } from 'react-router-dom';
import TeacherAttendanceReport from './TeacherAttendanceReport';
import TeacherDailyActivity from './TeacherEmployeeDailyActivity';
import StudentDailyActivity from './StudentDailyActivity';
export default function TeacherManagementReport
() {
  return (
    <Routes>
        <Route path="teacher-attendance-report" element={<TeacherAttendanceReport/>} />
        <Route path="teacher-daily-activity" element={<TeacherDailyActivity />} />
        <Route path="student-daily-activity" element={<StudentDailyActivity />} />
    </Routes>
  );
}
    