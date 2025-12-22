import { Route, Routes } from 'react-router-dom';
import ExamMaster from './exam-master';
import ExamSchedule from './exam-schedule';
import QuestionPapers from './question-papers';
import ExamForm from './exam-form';
import AdmitCard from './admit-card';
import Evaluator from './evaluator';
import Result from './result';
import DuplicateMarksheet from './duplicate-marksheet';


export default function ExamManagement() {
  return (
    <Routes>
      <Route path="exam-master/*" element={<ExamMaster />} />
      <Route path="exam-schedule/*" element={<ExamSchedule />} />
      <Route path="question-paper/*" element={<QuestionPapers />} />
      <Route path="exam-form/*" element={<ExamForm/>} />
      <Route path="admit-card/*" element={<AdmitCard/>} />
      <Route path="evaluator/*" element={<Evaluator/>} />
      <Route path="result/*" element={<Result/>} />
      <Route path="duplicate-marksheet/*" element={<DuplicateMarksheet/>} />
    </Routes>
  );
}