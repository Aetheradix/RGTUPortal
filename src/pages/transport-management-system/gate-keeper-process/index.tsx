import { Navigate, Route, Routes } from "react-router-dom";
import BusGatePassProcess from "./Bus-Gate-Pass-Process";


export default function Gatekeeperpro() {
  return (
    <Routes>
      <Route index element={<Navigate to="bus-gate-pass-process" replace />} />
      <Route path="bus-gate-pass-process" element={<BusGatePassProcess />} />
      <Route path="*" element={<Navigate to="bus-gate-pass-process" replace />} />
    </Routes>
  );
}
