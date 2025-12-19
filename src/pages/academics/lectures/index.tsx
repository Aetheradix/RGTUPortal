import { Route, Routes } from 'react-router-dom';
import OfflineLectureScheduling from './OfflineLectures';
import LectureResources from './LectureResources';
import ViewAttendanceRecords from '../attendance-management/ViewAttendanceRecords';

export default function Lectures() {
  return (
    <Routes>
      <Route path="offline-lecture-scheduling/*" element={<OfflineLectureScheduling />} />
      <Route path="lecture-resources/*" element={<LectureResources />} />
      <Route path="view-attendance-records/*" element={<ViewAttendanceRecords />} />    
    </Routes>
  );
}
