import { Route, Routes } from "react-router-dom";
import SportsDetailsPage from "./Sports";
import HostelPage from "./Hostel";
import CanteenPage from "./Canteen";
import BuildingPage from "./Building";
import LibraryPage from "./Library";

export default function Infrastructure() {
  return (
    <Routes>
      <Route path="sports/*" element={<SportsDetailsPage />} />
      <Route path="hostel/*" element={<HostelPage />} />
      <Route path="canteen/*" element={<CanteenPage />} />
      <Route path="building/*" element={<BuildingPage />} />
      <Route path="library/*" element={<LibraryPage />} />
    </Routes>
  );
}
