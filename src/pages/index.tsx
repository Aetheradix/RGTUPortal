import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import GenericPage from "./GenericPage";
import Master from "./masters";
import ExamManagement from "./exam-management";
import BudgetAndFinance from "./budget-and-finance";

export default function AppFeature() {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="masters/*" element={<Master />} />
      <Route path="exam-management/*" element={<ExamManagement />} />
      <Route path="budget-and-finance/*" element={<BudgetAndFinance />} />
      {/* Fallback for any route where dedicated UI is not implemented yet */}
      <Route path="*" element={<GenericPage />} />
    </Routes>
  );
}
