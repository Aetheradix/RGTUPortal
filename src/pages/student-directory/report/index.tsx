import { Route, Routes } from "react-router-dom";
import StudentStatisticsReport from "./StudentStatisticsReport";
import StudentPoolList from "./StudentPoolListReport";
import SchoolWiseAdmissionReport from "./SchoolWiseAdmissionReport";
import SankulWiseAdmissionReport from "./SankulWiseAdmissionReport";
import SchoolWiseEnrollmentCountReport from "./SchoolWiseEnrollmentReport";
import EnrollmentCountReport from "./EnrollmentCountReport";
import PromotedTransferReport from "./PromotedOrTransferStudentReport";
import StudentSummaryReport from "./StudentDetailsReport";

export default function StudentReport() {
  return (
    <Routes>
      <Route path="statistics/" element={<StudentStatisticsReport />} />
      <Route path="pool-list/" element={<StudentPoolList />} />
      <Route
        path="school-wise-admission/"
        element={<SchoolWiseAdmissionReport />}
      />
      <Route
        path="sankul-wise-admission/"
        element={<SankulWiseAdmissionReport />}
      />
      <Route
        path="school-wise-enrollment/"
        element={<SchoolWiseEnrollmentCountReport />}
      />
      <Route path="enrollment-count/" element={<EnrollmentCountReport />} />
      <Route path="promoted-transfer/" element={<PromotedTransferReport />} />
      <Route path="student-details/" element={<StudentSummaryReport />} />
    </Routes>
  );
}
