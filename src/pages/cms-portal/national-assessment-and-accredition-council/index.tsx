import { Route, Routes } from "react-router-dom";
import Award from "./Award";
import Audits from "./Audits";
import BestPracticesGreenInitiative from "./BestPracticesGreenInitiative";
import ExtensionActivities from "./ExtensionActivities";
import HighlightsOfAchievements from "./HighlightsOfAchievements";
import SelfStudyReportPage from "./SelfStudyReport";
import IdeaHousePage from "./IdeaHouseIdeaHub";
import ResearchActivities from "./ResearchActivities";
import RecommendationsOfPreviousCycle from "./RecommendationOfPreviousCycle";
import Policies from "./Policies";
import NewCoursesStarted from "./NewCourseStarted";
import IQACPage from "./IQAC";
import InstitutionalDistinctiveness from "./InstitutionalDistinctiveness";

export default function NationalAssessmentAndAccreditionCouncil () {
  return (
    <Routes>
      <Route path="award/*" element={<Award/>} />
      <Route path="audits/*" element={<Audits/>} />
      <Route path="best-practices-green-initiative/*" element={<BestPracticesGreenInitiative/>} />
      <Route path="extension-activities/*" element={<ExtensionActivities/>} />
      <Route path="Highlights-of-achievements/*" element={<HighlightsOfAchievements/>} />
      <Route path="self-study-report/*" element={<SelfStudyReportPage/>} />
      <Route path="iqac/*" element={<IQACPage/>} />
      <Route path="institutional-distinctiveness/*" element={<InstitutionalDistinctiveness/>} />
      <Route path="new-course-started/*" element={<NewCoursesStarted/>} />
      <Route path="policies/*" element={<Policies/>} />
      <Route path="recommendation-of-previous-cycle/*" element={<RecommendationsOfPreviousCycle/>} />
      <Route path="research-activities/*" element={<ResearchActivities/>} />
      <Route path="idea-house-idea-hub/*" element={<IdeaHousePage/>} />
    </Routes>
  );
}


