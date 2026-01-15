import { Route, Routes } from 'react-router-dom';
import ConstructionWorkTypeDetails from './ConstructionWorkDetails';
import ConstructionWorkRequest from './ConstructionWorkRequest';
import ConstructionUpdateDetails from './UpdateConstructionWorkDetails';
import PendingWorkRequest from './PendingWorkRequest';

export default function ConstructionWorkProcess() {
  return (
    <Routes>
       <Route path="construction-work-type-details" element={<ConstructionWorkTypeDetails />} />
       <Route path="construction-work-request" element={<ConstructionWorkRequest />} />
       <Route path="construction-update-details" element={<ConstructionUpdateDetails />} />
       <Route path="pending-work-request" element={< PendingWorkRequest/>}/>

    </Routes>
  );
}
    