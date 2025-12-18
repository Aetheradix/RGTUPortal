import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import GenericPage from "./GenericPage";
import Master from "./masters";
import SchemeManagement from "./scheme-management";

export default function AppFeature() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="masters/*" element={<Master />} />
      {/* Fallback for any route where dedicated UI is not implemented yet */}
      <Route path="*" element={<GenericPage />} />
      <Route path="scheme-management/*" element={<SchemeManagement />} />
    </Routes>
  );
}
