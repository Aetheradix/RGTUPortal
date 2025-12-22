import { Route, Routes } from "react-router-dom";
import ResultVerification from "./ResultVerificationBy";
import ResultCompilation from "./ResultCompilation";
import MarksEntryPage from "./MarksEntry";
import ApplyForRevaluation from "./ApplyForRevaluation";
import ApplyForRetotaling from "./ApplyForRetotaling";
import AddTRSheetGeneration from "./TrSheetGeneration";
import ResultVerificationAfterIssuing from "./ResultVerificationAfterIssuing";
import MaximumDaysForRevaluation from "./MaximumDaysForRevaluation";
import ResultPublication from "./ResultPublication";
import MarksheetGenerationPrinting from "./MarksheetGeneration";

export default function Result() {
  return (
    <Routes>
      <Route path="result-verification-by/*" element={<ResultVerification/>} />
      <Route path="result-compliation/*" element={<ResultCompilation/>} />
      <Route path="marks-entry/*" element={<MarksEntryPage/>} />
      <Route path="apply-for-revaluation/*" element={<ApplyForRevaluation/>} />
      <Route path="apply-for-retotaling/*" element={<ApplyForRetotaling/>} />
      <Route path="tr-sheet-generation/*" element={<AddTRSheetGeneration/>} />
      <Route path="result-verification-after-issuing/*" element={<ResultVerificationAfterIssuing/>} />
      <Route path="maximum-days-for-revaluation/*" element={<MaximumDaysForRevaluation/>} />
      <Route path="result-publication/*" element={<ResultPublication/>} />
      <Route path="marksheet-generation/*" element={<MarksheetGenerationPrinting/>} />
    </Routes>
  );
}