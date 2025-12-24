import { Route, Routes } from "react-router-dom";
import FinanceMaster from "./finance-master";
import ProposedBudget from "./proposed-budget-process";
import OnlineDemandRequestProcess from "./online-demand-request-process";
import BudgetAllocationProcess from "./budget-allocation-process";
import VoucherCreation from "./voucher-creation";
import FinanceReports from "./finance-report";

export default function BudgetAndFinance() {
  return (
    <Routes>
      <Route path="finance-master/*" element={<FinanceMaster />} />
      <Route path="proposed-budget/*" element={<ProposedBudget />} />
      <Route
        path="online-demand-request-process/*"
        element={<OnlineDemandRequestProcess />}
      />
      <Route
        path="budget-allocation-process/*"
        element={<BudgetAllocationProcess />}
      />
      <Route path="voucher-creation/*" element={<VoucherCreation />} />
      <Route path="finance-report/*" element={<FinanceReports />} />
    </Routes>
  );
}
