import { Navigate, Route, Routes } from 'react-router-dom';
import StateMaster from './StateMaster';
import DivisionMaster from './DivisionMaster';
import DistrictMaster from './DistrictMaster';
import TehsilMaster from './TehsilMaster';
import BlockMaster from './BlockMaster';
import ParliamentaryMaster from './ParliamentaryMaster';
import AssemblyMaster from './AssemblyMaster';
import NagarNigamMaster from './NagarNigamMaster';
import NagarPalikaMaster from './NagarPalikaMaster';
import JilaPanchayatMaster from './JilaPanchayatMaster';
import NagarPanchayatMaster from './NagarPanchayatMaster';
import JanpadPanchayatMaster from './JanpadPanchayatMaster';
import GramPanchayatMaster from './GramPanchayatMaster';
import PostOfficeMaster from './PostOfficeMaster';
import VillageMaster from './VillageMaster';
import HabitationMaster from './HabitationMaster';
import PincodeMaster from './PincodeMaster';

export default function LocationMaster() {
  return (
    <Routes>
      <Route index element={<Navigate to="state-master" replace />} />
      <Route path="state-master" element={<StateMaster />} />
      <Route path="division-master" element={<DivisionMaster />} />
      <Route path="district-master" element={<DistrictMaster />} />
      <Route path="tasil-master" element={<TehsilMaster />} />
      <Route path="block-master" element={<BlockMaster />} />
      <Route path="parliamentary-master" element={<ParliamentaryMaster />} />
      <Route path="assembly-master" element={<AssemblyMaster />} />
      <Route path="nagar-nigam-master" element={<NagarNigamMaster />} />
      <Route path="nagar-palika-master" element={<NagarPalikaMaster />} />
      <Route path="jila-panchayat-master" element={<JilaPanchayatMaster />} />
      <Route path="nagar-panchayat-master" element={<NagarPanchayatMaster />} />
      <Route path="janpad-panchayat-master" element={<JanpadPanchayatMaster />} />
      <Route path="gram-panchayat-master" element={<GramPanchayatMaster />} />
      <Route path="post-office-master" element={<PostOfficeMaster />} />
      <Route path="village-master" element={<VillageMaster />} />
      <Route path="habitation-master" element={<HabitationMaster />} />
      <Route path="pin-code" element={<PincodeMaster />} />
      <Route path="*" element={<Navigate to="state-master" replace />} />
    </Routes>
  );
}

