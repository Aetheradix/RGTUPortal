import { Route, Routes } from "react-router-dom";
import GenerateAdmitCards from "./GenerateAdmitCard";
import AdmitCardDownloadPage from "./AdmitCardDownload";
import AdmitCardVerification from "./AdmitCardVerification";


export default function AdmitCard() {
  return (
    <Routes>
      <Route path="generate-admit-card/*" element={<GenerateAdmitCards/>} />
      <Route path="admit-card-verification/*" element={<AdmitCardVerification/>} />
      <Route path="admit-card-download/*" element={<AdmitCardDownloadPage/>} />
    </Routes>
  );
}