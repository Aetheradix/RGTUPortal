import { Route, Routes } from "react-router-dom";
import AboutPunishmentSystem from "./AboutPunishmentSystem";
import GeneratePunishment from "./GeneratePunishment";
import RestorePunishment from "./RestorePunishment";
import PunishmentReport from "./PunishmentReport";

export default function PunishmentSystem() {
  return (
    <Routes>
      <Route
        path="about-punishment-system/"
        element={<AboutPunishmentSystem />}
      />
      <Route path="generate-punishment/" element={<GeneratePunishment />} />
      <Route path="restore-punishment/" element={<RestorePunishment />} />
      <Route path="punishment-report/" element={<PunishmentReport />} />
    </Routes>
  );
}
