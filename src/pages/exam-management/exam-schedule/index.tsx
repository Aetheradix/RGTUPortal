import { Route, Routes } from 'react-router-dom';
import ScheduleExam from './ScheduleExam';
import ViewExamSchedule from './ViewExamSchedule';


export default function ExamSchedule() {
  return (
    <Routes>
      <Route path="schedule-exam/*" element={<ScheduleExam/>} />
      <Route path="view-exam-schedule/*" element={<ViewExamSchedule/>} />
    </Routes>
  );
}