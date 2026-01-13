import { Route, Routes } from 'react-router-dom';
import VargMaster from './VargMaster';
import VargToSubCategoryMapping from './VargToSubCategoryMapping';
import PanelMaster from './PanelMaster';
import PanelDesignationMapping from './PanelToDesignationMapping';

export default function OISMaster() {
  return (
    <Routes>
       <Route path="varg-master" element={<VargMaster />} />
       <Route path="varg-to-subcategory-mapping" element={<> <VargToSubCategoryMapping/> </>} />
       <Route path="panel-master" element={<PanelMaster />} />
       <Route path="panel-to-designation-mapping" element={<PanelDesignationMapping />} />
    </Routes>
  );
}
    