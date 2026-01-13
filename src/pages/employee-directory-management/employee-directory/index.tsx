import { Route, Routes } from "react-router-dom";
import EmployeeVerification from "./EmployeeVerification";
import EmployeeVerificationHO from "./EmployeeVerificationHOLevel";
import EmployeeEnrollmentUpload from "./ExamWiseEmployeeEnrollment";
import EmployeeVerificationPdf from "./EmployeeVerificationPdf";
import EmployeeDataChange from "./EmployeeDataChangeRequest";
import OfficialDetailsUpdate from "./OfficialDetailsUpdate";
import EmployeeDirectoryHome from "./EmployeeDirectory";

export default function EmployeeDirectory() {
  return (
    <Routes>
      <Route path="employee-directory/" element={<EmployeeDirectoryHome />} />
      <Route path="employee-verification/" element={<EmployeeVerification />} />
      <Route
        path="employee-verification-sub/"
        element={<EmployeeVerification />}
      />
      <Route
        path="employee-verification-ho/"
        element={<EmployeeVerificationHO />}
      />
      <Route
        path="exam-wise-employee-enrollment/"
        element={<EmployeeEnrollmentUpload />}
      />
      <Route
        path="employee-verification-pdf/"
        element={<EmployeeVerificationPdf />}
      />
      <Route path="employee-data-chnage/" element={<EmployeeDataChange />} />
      <Route
        path="official-details-update/"
        element={<OfficialDetailsUpdate />}
      />
      <Route
        path="official-details-update-sub/"
        element={<OfficialDetailsUpdate />}
      />
    </Routes>
  );
}
