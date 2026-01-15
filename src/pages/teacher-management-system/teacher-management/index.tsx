
import { Route, Routes } from 'react-router-dom';
import TeacherClassMapping from './TeacherToClassMapping';
import TeacherMappingReport from './TeacherToClassMappingReport';
import TeacherAttendance from './TeacherAttendance';
export default function TeacherManagement
() {
  return (
    <Routes>
        <Route path="teacher-class-mapping" element={<TeacherClassMapping/>} />
        <Route path="teacher-class-mapping-report" element={<TeacherMappingReport />} />
        <Route path="teacher-attendance" element={<TeacherAttendance />} />
    </Routes>
  );
}
    