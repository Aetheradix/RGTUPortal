import { Navigate, Route, Routes } from "react-router-dom";
import VariousLevelReports from "./VariousLevelReports";

export default function Reports() {
  return (
    <>
      <Routes>
        <Route
          index
          element={<Navigate to="various-level-reports" replace />}
        />
        <Route path="various-level-reports" element={<VariousLevelReports />} />
        <Route
          path="*"
          element={<Navigate to="various-level-reports" replace />}
        />
      </Routes>
    </>
  );
}
