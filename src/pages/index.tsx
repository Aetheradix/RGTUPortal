import { Route, Routes } from "react-router-dom";
import Master from "./masters";
import Admissonmanagementsystem from "./admission-management-system";

export default function AppFeature() {
  return (
    <Routes>
      <Route path="masters/*" element={<Master />} />
      <Route path="admission-management-system/*" element={<Admissonmanagementsystem/>} />
    </Routes>
  );
}
