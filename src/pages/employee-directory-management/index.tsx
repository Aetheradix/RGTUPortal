import { Route, Routes } from "react-router-dom";
import EmployeeDirectory from "./employee-directory";
import EmployeeIDCardManagement from "./employee-ID-card-management-system";
import EmployeeIDCardReports from "./employee-ID-card-reports";
import EmployeeReports from "./employee-reports";

export default function EmployeeDirectoryManagement() {
  return (
    <Routes>
      <Route path="employee-directory/*" element={<EmployeeDirectory />} />
      <Route
        path="employee-id-card-management/*"
        element={<EmployeeIDCardManagement />}
      />
      <Route
        path="employee-id-card-reports/*"
        element={<EmployeeIDCardReports />}
      />
      <Route path="employee-reports/*" element={<EmployeeReports />} />
    </Routes>
  );
}
