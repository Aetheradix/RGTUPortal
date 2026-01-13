import { Route, Routes } from 'react-router-dom';
import OISRegistration from './ois-registration';
import OISMaster from './ois-master';
import OISSetup from './ois-setup';
import OISReport from './ois-report';

export default function OIS() {
  return (
    <Routes>
      <Route path="ois-registration/*" element={< OISRegistration/>} />
      <Route path="ois-master/*" element={<> <OISMaster/> </>} />
      <Route path="ois-setup/*" element={< OISSetup/>} />
      <Route path="ois-report/*" element={< OISReport/>} />
    </Routes>
  );
}


