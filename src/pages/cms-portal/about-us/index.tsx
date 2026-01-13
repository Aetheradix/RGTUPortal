import { Route, Routes } from "react-router-dom";

import WhoIsWhoPage from "./WhoIsWho";
import VisionMission from "./VisionMission";
import Societies from "./Societies";
import PrincipalsMessage from "./PrincipalMessage";
import Objectives from "./Objectives";
import HowToReachPage from "./HowToReach";
import AtAGlance from "./AtAGlance";

export default function AboutUs() {
  return (
    <Routes>
      <Route path="at-a-glance/*" element={<AtAGlance />} />
      <Route path="how-to-reach/*" element={<HowToReachPage />} />
      <Route path="objectives/*" element={<Objectives />} />
      <Route path="principal-message/*" element={<PrincipalsMessage />} />
      <Route path="societies/*" element={<Societies />} />
      <Route path="vision-mission/*" element={<VisionMission />} />
      <Route path="who-is-who/*" element={<WhoIsWhoPage />} />
    </Routes>
  );
}
