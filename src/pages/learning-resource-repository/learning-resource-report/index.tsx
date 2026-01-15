import { Route, Routes } from 'react-router-dom';
import LearningBookReport from './LearningBookMasterReport';
import LearningVideoReport from './LearningVideoMasterReport';
export default function LearningResourceReport() {
  return (
    <Routes>
      <Route path="learning-book-master-report" element={<LearningBookReport />} />
      <Route path="learning-video-master-report" element={<LearningVideoReport />} />
    </Routes>
  );
}
    