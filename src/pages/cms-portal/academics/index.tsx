import { Route, Routes } from "react-router-dom";
import DepartmentsPage from "./Department";
import DistanceEducationPage from "./DistanceEducationCourses";
import ProspectusPage from "./Prospectus";
import RegularCoursesPage from "./RegularCourses";
import ResearchDepartmentPage from "./Research";
import SearchTimetablePage from "./TimeTable";

export default function Academic() {
  return (
    <Routes>
      <Route path="departments/*" element={<DepartmentsPage />} />
      <Route path="distance-education/*" element={<DistanceEducationPage />} />
      <Route path="prospectus/*" element={<ProspectusPage />} />
      <Route path="regular-courses/*" element={<RegularCoursesPage />} />
      <Route path="research/*" element={<ResearchDepartmentPage />} />
      <Route path="time-table/*" element={<SearchTimetablePage />} />
    </Routes>
  );
}
