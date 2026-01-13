import { Route, Routes } from "react-router-dom";
import DistrictWiseIdCard from "./DistrictWiseIDCard";
import CollegeWiseIdCard from "./CollegeWiseIDCard";
import EmployeeMissingDetails from "./MissingEmployeeDetails";

export default function EmployeeIDCardReports() {
  return (
    <Routes>
      <Route path="district-wise-id-card/" element={<DistrictWiseIdCard />} />
      <Route path="college-wise-id-card/" element={<CollegeWiseIdCard />} />
      <Route
        path="employee-missing-details/"
        element={<EmployeeMissingDetails />}
      />
    </Routes>
  );
}
