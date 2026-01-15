import { Route, Routes } from 'react-router-dom';
import ConstructionWorkStatus from './ConstructionWorkReport';

export default function CivilMonitoringReport() {
  return (
    <Routes>
       <Route path="construction-work-report" element={<ConstructionWorkStatus />} />

    </Routes>
  );
}
    