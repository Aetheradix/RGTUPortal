import { Route, Routes } from "react-router-dom";
import EmployeeHigherDesignationCharge from "./EmployeeHigherDesignationCharge";
import GenerateList from "./GenerateList";
import GenerateListReport from "./GenerateListReport";

export default function HigherDesignationCounselling() {
  return (
    <Routes>
      <Route path="employee-higher-designation-charge" element={<EmployeeHigherDesignationCharge />} />
      <Route path="generate-list" element={<GenerateList />} />
      <Route path="generate-list-report" element={<GenerateListReport />} />
    </Routes>
  );
}
