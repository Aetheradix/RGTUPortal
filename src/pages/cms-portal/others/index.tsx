import { Route, Routes } from "react-router-dom";
import ContactUs from "./ContactUs";
import Events from "./Events";
import ExtraCoCurricular from "./ExtraCoCurricular";
import ImageGallery from "./ImageGallery";
import VideoGallery from "./VideoGallery";
import CMSLogin from "./CMSLogin";
import EnglishHindi from "./EnglishHindi";
import Notifications from "./Notifications";
import PressRelease from "./PressRelease";
import WorldBank from "./WorldBank";
import Mou from "./Mou";
import NCCNSS from "./NccNss";
import Rusa from "./Rusa";

export default function Others() {
  return (
    <Routes>
      <Route path="cms-login/*" element={<CMSLogin />} />
      <Route path="english-hindi/*" element={<EnglishHindi />} />
      <Route path="contact-us/*" element={<ContactUs />} />
      <Route path="events/*" element={<Events />} />
      <Route path="extra-co-curricular/*" element={<ExtraCoCurricular />} />
      <Route path="image-gallery/*" element={<ImageGallery />} />
      <Route path="mou/*" element={<Mou />} />
      <Route path="ncc-nss/*" element={<NCCNSS />} />
      <Route path="notifications/*" element={<Notifications />} />
      <Route path="press-release/*" element={<PressRelease />} />
      <Route path="rusa/*" element={<Rusa />} />
      <Route path="video-gallery/*" element={<VideoGallery />} />
      <Route path="world-bank/*" element={<WorldBank />} />
    </Routes>
  );
}
