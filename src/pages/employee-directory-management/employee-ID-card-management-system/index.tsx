import { Route, Routes } from "react-router-dom";
import PrintEmployeeCard from "./PrintEmployeeCard";
import ApproveEmployeeIdCard from "./ApproveEmployeeIdCard";
import EmployeeIdCardGenerate from "./EmployeeIDCardGenerate";

export default function EmployeeIDCardManagement() {
  return (
    <Routes>
      <Route path="print-employee-card/" element={<PrintEmployeeCard />} />
      <Route
        path="approve-employee-id-card/"
        element={<ApproveEmployeeIdCard />}
      />
      <Route
        path="employee-id-card-generate/"
        element={<EmployeeIdCardGenerate />}
      />
    </Routes>
  );
}
