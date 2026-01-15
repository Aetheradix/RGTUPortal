import { Navigate, Route, Routes } from "react-router-dom";
import BusRouteAndStopDetails from "./Bus-Route-and-Stop-Details";
import StudentLeaveEntry from "./Student-Leave-Entry";
import StudentPickupDropDetails from "./Student-Pickup-and-Drop-Details";



export default function Parentpro() {
  return (
    <Routes>
      <Route index element={<Navigate to="bus-route-and-stop-details" replace />} />
      <Route path="bus-route-and-stop-details" element={<BusRouteAndStopDetails />} />
      <Route path="student-leave-entry" element={<StudentLeaveEntry />} />
      <Route path="student-pickup-and-drop-details" element={<StudentPickupDropDetails />} />
      <Route path="*" element={<Navigate to="bus-route-and-stop-details" replace />} />
    </Routes>
  );
}
