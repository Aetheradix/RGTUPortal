import { Route, Routes } from "react-router-dom";
import BudgetAllocation from "./BudgetAllocation";
import BudgetAllocationReport from "./BudgetAllocationReport";
import BudgetAllocationApprovalProcess from "./BudgetAllocationApprovalProcess";
import BudgetAssignReport from "./BudgetAssignReport";
import BudgetUtilizationReport from "./BudgetUtilizationReport";

export default function BudgetAllocationProcess() {
  return (
    <Routes>
      <Route
        path="budget-allocation-head-wise"
        element={<BudgetAllocation />}
      />
      <Route
        path="budget-allocation-report"
        element={<BudgetAllocationReport />}
      />
      <Route
        path="budget-allocation-approval-process"
        element={<BudgetAllocationApprovalProcess />}
      />
      <Route path="budget-assign-report" element={<BudgetAssignReport />} />
      <Route
        path="budget-utilization-report"
        element={<BudgetUtilizationReport />}
      />
    </Routes>
  );
}
