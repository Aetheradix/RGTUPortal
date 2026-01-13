import { Navigate, Route, Routes } from "react-router-dom";
import CandidatesRankList from "./Candidates-Rank";
import GenerateMeritList from "./Genrate-Marit-List";
import ViewMeritList from "./Merit-List";
import TieBreakingCriteria from "./Set-Tie-Braking-Criteria-of-rank";

export default function 
MeritList() {
  return (
    <Routes>
      <Route index element={<Navigate to="candidates-rank" replace />} />
      <Route path="candidates-rank" element={<CandidatesRankList />} />
      <Route path="genrate-marit-list" element={<GenerateMeritList />} />
      <Route path="merit-list" element={<ViewMeritList />} />
      <Route path="set-tie-braking-criteria-of-rank" element={<TieBreakingCriteria />} />
      <Route path="*" element={<Navigate to="candidates-rank" replace />} />
    </Routes>
  );
}
