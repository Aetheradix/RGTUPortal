import { Route, Routes } from 'react-router-dom';
import SetQuestionPaperPattern from './SetQuestionPaperPattern';
import AddQuestionPaper from './AddQuestionsPaper';

export default function QuestionPapers() {
  return (
    <Routes>
      <Route path="add-question-paper/*" element={<AddQuestionPaper/>} />
      <Route path="set-question-paper-pattern/*" element={<SetQuestionPaperPattern/>} />
    </Routes>
  );
}