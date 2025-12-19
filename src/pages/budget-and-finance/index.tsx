import { Route, Routes } from "react-router-dom";
import FinanceMaster from "./finance-master";
import ProposedBudget from "./proposed-budget-process";

export default function BudgetAndFinance() {
  return (
    <Routes>
      <Route path="finance-master/*" element={<FinanceMaster />} />
      <Route path="proposed-budget/*" element={<ProposedBudget />} />
    </Routes>
  );
}
