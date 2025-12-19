import { Route, Routes } from "react-router-dom";
import EvaluatAsApply from "./ApplyAsEvaluator";
import SelectEvaluators from "./SelectEvaluator";
import SheetDistributionToEvaluator from "./SheetDistributionToEvaluator";

export default function Evaluator() {
  return (
    <Routes>
      <Route path="apply-as-evaluator/*" element={<EvaluatAsApply/>} />
      <Route path="select-evaluator/*" element={<SelectEvaluators/>} />
      <Route path="sheet-distribution-to-evaluator/*" element={<SheetDistributionToEvaluator/>} />
    </Routes>
  );
}