import { Route, Routes } from 'react-router-dom';
import ExamMaster from './exam-master';
import ExamSchedule from './exam-schedule';
import QuestionPapers from './question-papers';


export default function ExamManagement() {
  return (
    <Routes>
      <Route path="exam-master/*" element={<ExamMaster />} />
      <Route path="exam-schedule/*" element={<ExamSchedule />} />
      <Route path="question-paper/*" element={<QuestionPapers />} />
    </Routes>
  );
}