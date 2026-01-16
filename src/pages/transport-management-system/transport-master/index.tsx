import { Navigate, Route, Routes } from "react-router-dom";
import BusStopRegistrationMaster from "./Bus-Stop-Registration-Master";
import FuelTypeMaster from "./Fuel-Type-Master";
import InsuranceCompanyMaster from "./Insurance-Company-Master";
import MotorVehicleTypeMaster from "./Motor-Vechile-Type-Master";
import RouteRegistrationMaster from "./Route-Registration-Master";
import RouteBusMappingMaster from "./Route-To-Bus-Mapping-Master";
import RouteStopMappingMaster from "./Route-To-Bus-Stop-Mapping-Master";
import TransporterToMapping from "./Transporter-to-Mapping";
import VehicleCompanyMaster from "./Vehicle-Company-Master";
import VehicleToMapping from "./Vehicle-to-Mapping";



export default function TranMaster() {
  return (
    <Routes>
      <Route index element={<Navigate to="bus-stop-registration-master" replace />} />
      <Route path="bus-stop-registration-master" element={<BusStopRegistrationMaster />} />
      <Route path="fuel-type-master" element={<FuelTypeMaster />} />
      <Route path="insurance-company-master" element={<InsuranceCompanyMaster />} />
      <Route path="motor-vechile-type-master" element={<MotorVehicleTypeMaster />} />
      <Route path="route-registration-master" element={<RouteRegistrationMaster />} />
      <Route path="route-to-bus-mapping-master" element={<RouteBusMappingMaster />} />
      <Route path="route-to-bus-stop-mapping-master" element={<RouteStopMappingMaster />} />
      <Route path="transporter-to-mapping" element={<TransporterToMapping />} />
      <Route path="vehicle-company-master" element={<VehicleCompanyMaster />} />
      <Route path="vehicle-to-mapping" element={<VehicleToMapping />} />
      <Route path="*" element={<Navigate to="bus-stop-registration-master" replace />} />
    </Routes>
  );
}
