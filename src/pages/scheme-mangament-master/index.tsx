import { Route, Routes } from "react-router-dom";
import Apply from "./apply";
import Payment from "./payment";
import SchemeManagementMaster from "./scheme-mangament-master";
import SpecialSchemeManagement from "./special-scheme-management";
import SchemeManagementReports from "./scheme-management-reports";

export default function SchemeManagementSystem() {
  return (
    <Routes>
      <Route path="apply/*" element={<Apply/>} />
      <Route path="payment/*" element={<Payment/>} />
      <Route path="scheme-management-master/*" element={<SchemeManagementMaster/>} />
      <Route path="special-scheme-management/*" element={<SpecialSchemeManagement/>} />
      <Route path="scheme-management-reports/*" element={<SchemeManagementReports/>} />
    </Routes>
  );
}
