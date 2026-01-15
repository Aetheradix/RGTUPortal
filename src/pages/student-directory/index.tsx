import { Route, Routes } from "react-router-dom";
import StudentRegistration from "./student-registration";
import StudentPromoteOrTc from "./student-promote-or-tc";
import StudentReport from "./report";
import AutoPromoteStudents from "./auto-promote-students";

export default function StudentDirectory() {
  return (
    <Routes>
      <Route path="student-registration/*" element={<StudentRegistration />} />
      <Route path="promote-tc/*" element={<StudentPromoteOrTc />} />
      <Route path="reports/*" element={<StudentReport />} />
      <Route path="auto-promote/*" element={<AutoPromoteStudents />} />
    </Routes>
  );
}
