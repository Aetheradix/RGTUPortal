import { Route, Routes } from "react-router-dom";
import CompassionateAppointment from "./CompassionAppointment";
import CompassionVerification from "./CompassionVerification";
import CompassionApply from "./CompassionApply";
import DEOCompassionApply from "./DeoCompassionApply";
import DEONocCertificateRelease from "./DeoNocCertificateRelease";
import GenerateForwardNocRequest from "./GenerateandForwardNocRequest";
import UpdateNocJobStatus from "./UpdateNocJobStatus";
import FinalDecision from "./FinalDecision";

export default function Compassion() {
  return (
    <Routes>
      <Route path="compassion-appointment/*" element={<CompassionateAppointment/>} />
      <Route path="compassion-verification/*" element={<CompassionVerification/>} />
      <Route path="compassion-apply/*" element={<CompassionApply/>} />
      <Route path="deo-compassion-apply/*" element={<DEOCompassionApply/>} />
      <Route path="deo-noc-certification-release/*" element={<DEONocCertificateRelease/>} />
      <Route path="generate-and-forward-noc-request/*" element={<GenerateForwardNocRequest/>} />
      <Route path="update-noc-job-status/*" element={<UpdateNocJobStatus/>} />
      <Route path="final-decision/*" element={<FinalDecision/>} />
    </Routes>
  );
}