import { Navigate, Route, Routes } from "react-router-dom";
import DriverToVehicleMapping from "./Driver-to-Vehicle-Mapping";
import PickupCancellationDetails from "./Pickup-Cancellation-Details";
import RouteStopLocationDetails from "./Route-Stop-Location-Details";
import StudentPickupDropEntry from "./Student-Pickup-And-Drop-Entry-Process";

export default function Busdriveandattenderproc() {
  return (
    <Routes>
      <Route index element={<Navigate to="driver-to-vehicle-mapping" replace />} />
      <Route path="driver-to-vehicle-mapping" element={<DriverToVehicleMapping />} />
      <Route path="pickup-cancellation-details" element={<PickupCancellationDetails />} />
      <Route path="route-stop-location-details" element={<RouteStopLocationDetails />} />
      <Route path="student-pickup-and-drop-entry-process" element={<StudentPickupDropEntry />} />
     
      <Route path="*" element={<Navigate to="driver-to-vehicle-mapping" replace />} />
    </Routes>
  );
}
