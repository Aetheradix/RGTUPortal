import { Route, Routes } from "react-router-dom";
import EmployeeRetirementReport from "./EmployeeRetirementReport";
import EServiceBookReport from "./E-ServiceBookReport";

export default function HrmsReports() {
  return (
    <Routes>
      <Route
        path="employee-retirement-report/"
        element={<EmployeeRetirementReport />}
      />
      <Route path="e-service-book-report/" element={<EServiceBookReport />} />
    </Routes>
  );
}
