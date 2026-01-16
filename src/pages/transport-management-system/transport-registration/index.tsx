import { Navigate, Route, Routes } from "react-router-dom";
import DriverAttenderRegistration from "./Bus-Driver-and-Attender-Registration";
import StudentToRouteMapping from "./Student-to-Route-and-Stop-Mapping";
import TransportInchargeRegistration from "./Transport-Incharge-Registration";
import TransporterRegistrationUni from "./Transporter-Registration";
import VehicleRegistrationTr from "./Vehicle-Registration";



export default function TranReges() {
  return (
    <Routes>
      <Route index element={<Navigate to="bus-driver-and-attender-registration" replace />} />
      <Route path="bus-driver-and-attender-registration" element={<DriverAttenderRegistration />} />
      <Route path="student-to-route-and-stop-mapping" element={<StudentToRouteMapping />} />
      <Route path="transport-incharge-Registration" element={<TransportInchargeRegistration />} />
      <Route path="transporter-registration" element={<TransporterRegistrationUni />} />
      <Route path="vehicle-registration" element={<VehicleRegistrationTr />} />
      <Route path="*" element={<Navigate to="bus-driver-and-attender-registration" replace />} />
    </Routes>
  );
}
