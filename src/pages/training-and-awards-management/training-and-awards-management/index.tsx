import { Navigate, Route, Routes } from "react-router-dom";
import NationalStateAwards from "./National-Or-State-Level-Awards";
import NationalStateTraining from "./National-or-State-Level-Training";
import SpecialTrainingDetails from "./Special-Training-Details";
import EmployeeCurriculumActivities from "./Employee-Other-Curriculum-Activities-Report";

export default function TrainingandAward() {
  return (
    <Routes>
      <Route index element={<Navigate to="national-or-state-level-awards" replace />} />
      <Route path="national-or-state-level-awards" element={<NationalStateAwards />} />
      <Route path="national-or-state-level-training" element={<NationalStateTraining />} />
      <Route path="special-training-details" element={<SpecialTrainingDetails />} />
      <Route path="employee-other-curriculum-activities-report" element={<EmployeeCurriculumActivities />} />
    

      <Route path="*" element={<Navigate to="national-or-state-level-awards" replace />} />
    </Routes>
  );
}
