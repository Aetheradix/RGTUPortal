import { Route, Routes } from "react-router-dom";
import ApplyMutualTransfer from "./ApplyMutualTransfer";
import ApplyVoluntaryTransfer from "./ApplyVoluntaryTransfer";
import LockApplication from "./LockApplication";
import PrintDraftApplication from "./PrintDraftApplication";
import AboutTransfer from "./AboutVoluntaryAndMutualTransfer";

export default function TransferRequest() {
  return (
    <Routes>
      <Route path="apply-mutual-transfer/" element={<ApplyMutualTransfer />} />
      <Route
        path="apply-voluntary-transfer/"
        element={<ApplyVoluntaryTransfer />}
      />
      <Route path="lock-application/" element={<LockApplication />} />
      <Route
        path="print-draft-application/"
        element={<PrintDraftApplication />}
      />
      <Route path="about/" element={<AboutTransfer />} />
    </Routes>
  );
}
