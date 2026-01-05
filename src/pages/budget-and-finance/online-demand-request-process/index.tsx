import { Route, Routes } from "react-router-dom";
import DemandRequestProcess from "./DemandRequestProcess";
import DemandStatusDetails from "./DemandStatusDetails";
import BudgetApprovalProcess from "./BudgetApproval";

export default function OnlineDemandRequestProcess() {
  return (
    <Routes>
      <Route path="demand-request-process" element={<DemandRequestProcess />} />
      <Route path="demand-status-details" element={<DemandStatusDetails />} />
      <Route path="budget-approval" element={<BudgetApprovalProcess />} />
    </Routes>
  );
}
