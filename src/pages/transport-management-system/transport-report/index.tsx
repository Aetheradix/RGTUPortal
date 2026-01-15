import { Navigate, Route, Routes } from "react-router-dom";
import BillPaymentReport from "./Bill-Payment-Report";
import BusLiveTracking from "./Bus-Live-Tracking";
import DriverAttenderRouteDetail from "./Driver-Attender-Route-Detail";
import GatePassReport from "./Gate-Pass-Report";
import RouteWisePickupDropReport from "./Route-Wise-Pickup-and-Drop-Report";
import VehicleRegistrationReport from "./Vehicle-Registration-Report";



export default function TranRegreport() {
  return (
    <Routes>
      <Route index element={<Navigate to="bill-payment-report" replace />} />
      <Route path="bill-payment-report" element={<BillPaymentReport />} />
      <Route path="bus-live-tracking" element={<BusLiveTracking />} />
      <Route path="driver-attender-route-detail" element={<DriverAttenderRouteDetail />} />
      <Route path="gate-pass-report" element={<GatePassReport />} />
      <Route path="route-wise-pickup-and-drop-report" element={<RouteWisePickupDropReport />} />
      <Route path="vehicle-registration-report" element={<VehicleRegistrationReport />} />
      <Route path="*" element={<Navigate to="bill-payment-report" replace />} />
    </Routes>
  );
}
