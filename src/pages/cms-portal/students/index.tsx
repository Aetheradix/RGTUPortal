import { Route, Routes } from "react-router-dom";
import ListOfTopperStudents from "./ListOfTopperStudents";
import ELearning from "./ELearning";
import StudentDetails from "./StudentDetails";

export default function Students() {
  return (
    <Routes>
      <Route path="e-learning" element={<ELearning />} />
      <Route path="list-of-topper-students" element={<ListOfTopperStudents />} />
      <Route path="student-details" element={<StudentDetails />} />
    </Routes>
  );
}