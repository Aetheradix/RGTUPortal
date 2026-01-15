import { Route, Routes } from 'react-router-dom';
import ConstructionWorkProcess from './construction-work-process';
import CivilMonitoringMaster from './civil-monitoring-master';
import CivilMonitoringReport from './civil-monitoring-report';

export default function CivilMonitoring() {
  return (
    <Routes>
       <Route path="construction-work-process/*" element={<ConstructionWorkProcess />} />
       <Route path="civil-monitoring-master/*" element={<CivilMonitoringMaster />} />
       <Route path="civil-monitoring-report/*" element={<CivilMonitoringReport />} />

    </Routes>
  );
}
    