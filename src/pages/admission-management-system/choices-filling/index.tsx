import { Navigate, Route, Routes } from "react-router-dom";
import SeatAvailability from "./SeatAvailabilityUpdates";
import FillChoicesAndLock from "./FillChoicesbyPriorityandlockchoices ";
import StudentPreferencesReport from "./StudentPreferencesReport";
import ChoiceReport from "./ChoiceReport";



export default function 
Choicefilling() {
  return (
    <Routes>
      <Route index element={<Navigate to="seat-availability-updates" replace />} />
      <Route path="seat-availability-updates" element={<SeatAvailability />} />
      <Route path="fill-choices-by-priority-and-lock-choices" element={<FillChoicesAndLock />} />
      <Route path="student-preferences-report" element={< StudentPreferencesReport/>} />
      <Route path="choice-report" element={< ChoiceReport/>} />
      <Route path="*" element={<Navigate to="seat-availability-updates" replace />} />
    </Routes>
  );
}
