import { Route, Routes } from 'react-router-dom';
import Master from './masters';

export default function AppFeature() {
  return (
    <Routes>
      {/* <Route index element={<Home />} /> */}
      <Route path="masters/*" element={<Master />} />
      {/* <Route path="exam-management/*" element={<ExamManagement />} />
        <Route path="home/*" element={<Home />} /> */}
    </Routes>
  );
}
