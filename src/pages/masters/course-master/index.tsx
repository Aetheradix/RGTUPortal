import { Navigate, Route, Routes } from 'react-router-dom';
import Category from './pages/Category';
import Course from './pages/Course';
import CourseSpecializationMapping from './pages/CourseSpecializationMapping';
import CourseStatus from './pages/CourseStatus';
import Level from './pages/Level';
import ModesOfEducation from './pages/ModesOfEducation';
import Specialization from './pages/Specialization';

export default function CourseMaster() {
  return (
    <Routes>
      <Route index element={<Navigate to="category" replace />} />
      <Route path="category" element={<Category />} />
      <Route path="level" element={<Level />} />
      <Route path="course" element={<Course />} />
      <Route path="specialization" element={<Specialization />} />
      <Route path="modes-of-education" element={<ModesOfEducation />} />
      <Route path="course-specialization-mapping" element={<CourseSpecializationMapping />} />
      <Route path="course-status" element={<CourseStatus />} />
      <Route path="*" element={<Navigate to="category" replace />} />
    </Routes>
  );
}
