import { Route, Routes } from "react-router-dom";
import LocationMaster from "./location-master-data";
import OfficeMaster from "./office-master-data";
import HRMaster from "./hr-master-data";

export default function MasterDataManagement() {
  return (
    <Routes>
      <Route path="location-master/*" element={<LocationMaster />} />
      <Route path="office-master/*" element={<OfficeMaster />} />
      <Route path="hr-master/*" element={<HRMaster />} />
    </Routes>
  );
}
