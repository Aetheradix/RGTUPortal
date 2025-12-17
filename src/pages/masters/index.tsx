import { Route, Routes } from 'react-router-dom';
import UserMangement from './user-management';

export default function Master() {
  return (
    <Routes>
      <Route path="user-management/*" element={<UserMangement />} />
      {/* <Route path="exam-medium/*" element={<ExamMedium />} />
      <Route path="exam-grade/*" element={<ExamGrade />} />
      <Route path="exam-center/*" element={<ExamCenter />} />
      <Route path="class-section/*" element={<ClassSection />} />
      <Route path="exam-type/*" element={<ExamType />} />
      <Route path="exam-schedule/*" element={<ExamScheduleMaster />} />
      <Route path="stream/*" element={<Stream />} />
      <Route path="exam-subject/*" element={<Subject />} />
      <Route path="subject-category/*" element={<SubjectCategory />} />
      <Route path="grace/*" element={<Grace />} /> */}
    </Routes>
  );
}
