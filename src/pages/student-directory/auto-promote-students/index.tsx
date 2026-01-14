import { Route, Routes } from "react-router-dom";
import AutoPromoteStudentList from "./AutoPromoteStudentList";
import AutoPromoteDate from "./AutoPromoteDateForClasses";

export default function AutoPromoteStudents() {
  return (
    <Routes>
      <Route path="student-list/" element={<AutoPromoteStudentList />} />
      <Route path="promote-date/" element={<AutoPromoteDate />} />
    </Routes>
  );
}
