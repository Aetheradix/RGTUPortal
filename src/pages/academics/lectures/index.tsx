import { Route, Routes } from 'react-router-dom';
import LectureResources from './LectureResources';
import OfflineLectureScheduling from './OfflineLectures';

export default function Lectures() {
  return (
    <Routes>
      <Route path="offline-lectures" element={<OfflineLectureScheduling />} />
      <Route path="resources" element={<LectureResources />} />
    </Routes>
  );
}
