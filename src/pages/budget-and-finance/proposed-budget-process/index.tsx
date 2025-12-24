import { Route, Routes } from "react-router-dom";
import ProposedSubBudget from "./ProposedBudget ";
import UpdateProposedBudget from "./UpdateProposedBudget";

export default function ProposedBudget() {
  return (
    <Routes>
      <Route path="proposed-sub-budget" element={<ProposedSubBudget />} />
      <Route path="update-proposed-budget" element={<UpdateProposedBudget />} />
    </Routes>
  );
}
