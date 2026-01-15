import { Route, Routes } from 'react-router-dom';
import LearningResource from './learning-resource';
import LearningResourceReport from './learning-resource-report';
export default function LearningResourceRepository() {
  return (
    <Routes>
        <Route path="learning-resource/*" element={<LearningResource />} />
        <Route path="learning-resource-report/*" element={<LearningResourceReport />} />
    </Routes>
  );
}
    