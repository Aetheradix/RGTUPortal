import { Route, Routes } from "react-router-dom";
import StateMaster from "./StateMasterData";
import DivisionMaster from "./DivisionMaster";
import DistrictMaster from "./DistrictMaster";
import BlockMaster from "./BlockMaster";
import VillageMaster from "./VillageMaster";
import HabitationMaster from "./HabitationMaster";
import LocalBodyTypeMaster from "./LocalBodyType";
import LocalBodyMaster from "./LocalBody";
import ZonePanchayatMaster from "./ZoneOrPanchayatMaster";
import TehsilMaster from "./TehsilMaster";

export default function LocationMaster() {
  return (
    <Routes>
      <Route path="state-master/" element={<StateMaster />} />
      <Route path="division-master/" element={<DivisionMaster />} />
      <Route path="district-master/" element={<DistrictMaster />} />
      <Route path="block-master/" element={<BlockMaster />} />
      <Route path="village-master/" element={<VillageMaster />} />
      <Route path="habitation-master/" element={<HabitationMaster />} />
      <Route path="local-body-type/" element={<LocalBodyTypeMaster />} />
      <Route path="local-body/" element={<LocalBodyMaster />} />
      <Route path="zone-panchayat-master/" element={<ZonePanchayatMaster />} />
      <Route path="tehsil-master/" element={<TehsilMaster />} />
    </Routes>
  );
}
