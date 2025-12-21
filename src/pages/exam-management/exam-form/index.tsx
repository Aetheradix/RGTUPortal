import { Route, Routes } from "react-router-dom";
import SetExamFeeLastDate from "./SetLastDate";
import FillExamForm from "./FillExamForm";
import ForwardFormsPrincipal from "./ForwardForm";


export default function ExamForm() {
  return (
    <Routes>
      <Route path="set-last-date/*" element={<SetExamFeeLastDate/>} />
      <Route path="fill-exam-form/*" element={<FillExamForm/>} />
      <Route path="forward-form/*" element={<ForwardFormsPrincipal/>} />
    </Routes>
  );
}