import { Navigate, Route, Routes } from "react-router-dom";
import StudentProfileViewEditLock from "./StudentProfileViewEditLock";
import StudentProfileSubManagement from "./StudentProfileManagement";
import UpdateStudentProfile from "./UpdateStudentProfile";

export default function StudentProfileManagement() {
  return (
    <Routes>
      <Route
        index
        element={<Navigate to="student-profile-view-edit-lock" replace />}
      />
      <Route
        path="student-profile-view-edit-lock"
        element={<StudentProfileViewEditLock />}
      />
      <Route
        path="student-profile-sub-management"
        element={<StudentProfileSubManagement />}
      />
      <Route path="update-student-profile" element={<UpdateStudentProfile />} />
      <Route
        path="*"
        element={<Navigate to="student-profile-view-edit-lock" replace />}
      />
    </Routes>
  );
}
