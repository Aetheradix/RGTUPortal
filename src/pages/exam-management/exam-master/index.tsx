import { Route, Routes } from 'react-router-dom';
import AddExam from './AddExam';
import ExamType from './ExamType';

export default function ExamMaster() {
  return (
    <Routes>
      <Route path="add-exam/*" element={<AddExam/>} />
      <Route path="exam-type/*" element={<ExamType/>} />
    </Routes>
  );
}