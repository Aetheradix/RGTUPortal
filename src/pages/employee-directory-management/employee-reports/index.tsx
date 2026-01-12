import { Route, Routes } from "react-router-dom";
import ChangeRequestVerificationStatistic from "./ChangeRequestVerificationReport";
import EmployeeVerificationStatistic from "./EmployeeVerificationStatisticReport";
import EmployeeDetailsReport from "./EmployeeDetailsReport";
import ExamWiseEnrollmentReport from "./ExamWiseEnrollmentReport";
import EmployeeVerificationReport from "./EmployeeVerificationReport";
import HandicappedEmployeeReport from "./HandicappedEmployeesReport";
import EmployeeCustomizedReport from "./EmployeeCustomizedReport";

export default function EmployeeReports() {
  return (
    <Routes>
      <Route
        path="change-request-verification-report/"
        element={<ChangeRequestVerificationStatistic />}
      />
      <Route
        path="employee-verification-statistic-report/"
        element={<EmployeeVerificationStatistic />}
      />
      <Route
        path="employee-details-report/"
        element={<EmployeeDetailsReport />}
      />
      <Route
        path="exam-wise-enrollment-report/"
        element={<ExamWiseEnrollmentReport />}
      />
      <Route
        path="employee-verification-report/"
        element={<EmployeeVerificationReport />}
      />
      <Route
        path="handicapped-employees-report/"
        element={<HandicappedEmployeeReport />}
      />
      <Route
        path="employee-customized-report/"
        element={<EmployeeCustomizedReport />}
      />
    </Routes>
  );
}
