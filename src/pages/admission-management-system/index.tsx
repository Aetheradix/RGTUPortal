import { Route, Routes } from "react-router-dom";
import Registrationform from "./registration-form";
import UploadDocument from "./upload-document";
import Choicefilling from "./choices-filling";
import Documentvarificationmaster from "./document-verification";
import AllotmentLetter from "./allotment-letter";
import AdmissionFee from "./admission-fee";
import MeritList from "./merit-list";

export default function Admissonmanagementsystem() {
  return (
    <Routes>
      <Route path="registration-form/*" element={<Registrationform />} />
      <Route path="upload-document/*" element={<UploadDocument />} />
      <Route path="choices-filling/*" element={<Choicefilling />} />
      <Route
        path="document-verification/*"
        element={<Documentvarificationmaster />}
      />
      <Route path="allotment-letter/*" element={<AllotmentLetter />} />
      <Route path="admission-fee/*" element={<AdmissionFee />} />
      <Route path="merit-list/*" element={<MeritList />} />
    </Routes>
  );
}
