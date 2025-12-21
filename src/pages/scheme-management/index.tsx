import { Route, Routes } from "react-router-dom";
import NewSchemeManagement from "./new-scheme-management";
import StudentProfileManagement from "./student-profile-management";
import EKYC from "./e-kyc";
import Reports from "./Reports";

export default function SchemeManagement() {
  return (
    <Routes>
      <Route path="new-scheme-management/*" element={<NewSchemeManagement />} />
      <Route
        path="student-profile-management/*"
        element={<StudentProfileManagement />}
      />
      <Route path="e-kyc/*" element={<EKYC />} />
      <Route path="reports/*" element={<Reports />} />
    </Routes>
  );
}
