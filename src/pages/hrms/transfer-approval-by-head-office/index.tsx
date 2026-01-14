import { Route, Routes } from "react-router-dom";
import VoluntaryTransferFinalApprove from "./VoluntaryTransferFinalApprove";
import VoluntaryTransferPrint from "./VoluntaryTransferPrint";
import MutualTransferFinalApprove from "./MutualTransferApprove";
import MutualTransferPrint from "./MutualTransferPrint";
import ViewTransferRequestApprove from "./ViewTransferRequest&Approve";
import AboutHOTransferApproval from "./AboutHO";

export default function TransferApprovalHeadOffice() {
  return (
    <Routes>
      <Route
        path="voluntary-transfer-final-approve/"
        element={<VoluntaryTransferFinalApprove />}
      />
      <Route
        path="voluntary-transfer-print/"
        element={<VoluntaryTransferPrint />}
      />
      <Route
        path="mutual-transfer-approve/"
        element={<MutualTransferFinalApprove />}
      />
      <Route path="mutual-transfer-print/" element={<MutualTransferPrint />} />
      <Route
        path="view-transfer-request-approve/"
        element={<ViewTransferRequestApprove />}
      />
      <Route
        path="about-ho-level-transfer-approval/"
        element={<AboutHOTransferApproval />}
      />
    </Routes>
  );
}
