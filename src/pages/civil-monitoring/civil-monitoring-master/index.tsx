import { Route, Routes } from 'react-router-dom';
import ConstructionWorkType from './ConstructionWorkType';
import InspectionAgencyTypeDetails from './InspectionAgencyType';

export default function CivilMonitoringMaster() {
  return (
    <Routes>
       <Route path="construction-work-type" element={<ConstructionWorkType />} />
       <Route path="inspection-agency-type" element={<InspectionAgencyTypeDetails/>}/>

    </Routes>
  );
}
    