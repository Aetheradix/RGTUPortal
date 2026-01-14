import { Route, Routes } from "react-router-dom";
import MutualTransferApproval from "./MutualTransferApprove";
import MutualTransferPrintOrder from "./MutualTransferPrint";

export default function HodTransferApproval() {
  return (
    <Routes>
      <Route
        path="mutual-transfer-approval/"
        element={<MutualTransferApproval />}
      />
      <Route
        path="mutual-transfer-print/"
        element={<MutualTransferPrintOrder />}
      />
    </Routes>
  );
}
