import { Route, Routes } from "react-router-dom";
import EmployeeBonus from "./EmployeeBonus";

export default function Bonus() {
  return (
    <Routes>
      <Route path="employee-bonus/" element={<EmployeeBonus />} />
    </Routes>
  );
}
