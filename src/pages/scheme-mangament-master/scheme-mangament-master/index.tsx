import { Route, Routes } from "react-router-dom";
import ApplyStudentSchemeApplications from "./ApplyStudentSchemeApplications";
import CheckSchemeEligibility from "./CheckSchemeEligibility";
import DepartmentalScheme from "./DepartmentalScheme";
import DepartmentalSchemeDetails from "./DepartmentalSchemeDetails";
import SchemeWisePrint from "./SchemeWisePrint";
import SpecialScheme from "./SpecialScheme";
import UploadSpecialSchemeStudents from "./UploadSpecialSchemeStudents";

export default function SchemeManagementMaster() {
  return (
    <Routes>
      <Route path="apply-student-scheme-applications/*" element={<ApplyStudentSchemeApplications/>} />
      <Route path="check-scheme-eligibility/*" element={<CheckSchemeEligibility/>} />
      <Route path="departmental-scheme/*" element={<DepartmentalScheme/>} />
      <Route path="departmental-scheme-details/*" element={<DepartmentalSchemeDetails/>} />
      <Route path="schemewise-print/*" element={<SchemeWisePrint/>} />
      <Route path="special-scheme/*" element={<SpecialScheme/>} />
      <Route path="upload-special-scheme-students/*" element={<UploadSpecialSchemeStudents/>} />
    </Routes>
  );
}
