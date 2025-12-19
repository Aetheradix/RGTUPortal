import { Route, Routes } from 'react-router-dom';
import UserMangement from './user-management';
import LocationMaster from './location-master';
import CourseMaster from './course-master';
import FacultyMaster from './faculty-master';
import UniversityMaster from './university-master';
import CollegeMaster from './college-master';

export default function Master() {
  return (
    <Routes>
      <Route path="user-management/*" element={<UserMangement />} />
      <Route path="location-master/*" element={<LocationMaster />} />
      <Route path="course-master/*" element={<CourseMaster />} />
      <Route path="faculty-master/*" element={<FacultyMaster />} />
      <Route path="university-master/*" element={<UniversityMaster />} />
      <Route path="college-master/*" element={<CollegeMaster />} />
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
