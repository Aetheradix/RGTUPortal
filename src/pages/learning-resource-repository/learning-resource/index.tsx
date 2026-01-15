import { Route, Routes } from 'react-router-dom';
import LearningBookMaster from './LearningBookMaster';
import LearningVideoMaster from './LearningVideoMaster';

export default function LearningResource() {
  return (
    <Routes>
        <Route path="learning-book-master" element={<LearningBookMaster />} />
        <Route path="learning-video-master" element={<LearningVideoMaster />} />
    </Routes>
  );
}
    