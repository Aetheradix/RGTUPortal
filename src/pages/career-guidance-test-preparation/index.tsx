import { Route, Routes } from 'react-router-dom';
import TestPreparationMaster from './TestPreparationMaster';
import TestPreparationReport from './TestPreparationReport';

export default function CareerGuidanceTestPreparation
() {
  return (
    <Routes>
       <Route path="test-preparation-master" element={<TestPreparationMaster />} />
       <Route path="test-preparation-report" element={<TestPreparationReport />} />

    </Routes>
  );
}
    